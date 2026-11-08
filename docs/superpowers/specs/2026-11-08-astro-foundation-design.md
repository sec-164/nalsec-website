# Astro 基盤(環境構築)設計

日付: 2026-11-08
対象ブランチ: `renewal`
状態: 承認済み

## 目的

nalsec.com リニューアルの土台として、Astro ベースの開発・ビルド・プレビュー配信の環境をフルスクラッチで構築する。サイトの構成・コンテンツ・デザインはこの設計の対象外で、別途決める。

## 決定事項

- フレームワークは Astro(static 出力)。Next.js と microCMS は使わない。
- CSS は Tailwind v4。設定は CSS 側(`@theme`)で行い、`tailwind.config.js` と SCSS は使わない。
- 旧 Next.js のコードはリポジトリから削除する(git 履歴と公開中の HTML で参照できる)。デザインの引き継ぎは部分的で、必要に応じて都度参照するにとどめる。
- 本番(`main` → GitHub Pages、`.github/workflows/nextjs.yml`)にはリニューアル完了まで触れない。
- プレビュー配信先は既存の Cloudflare Pages プロジェクト `nalsec-renewal` を継続使用する。
- Markdown の編集者はエンジニアのみ。CMS の GUI は導入しない。
- Lint は導入しない。`astro check` と Prettier で足りる段階と判断し、必要になったら eslint-plugin-astro を追加する。

## リポジトリ構成

### 削除するもの

`src/`、`next.config.js`、`next-env.d.ts`、`tailwind.config.js`、`postcss.config.js`、`prettier.config.js`、`.eslintrc.json`、`tsconfig.json`、`package.json`、`pnpm-lock.yaml`、`public/TechNalsec.svg`、`site/`(Astro の出力に置き換わる)、`.github/workflows/preview.yml`(`site.yml` に改名)。

### 残すもの

- `.github/workflows/nextjs.yml`: 本番用。`main` への push でしか動かないため `renewal` 上では無害。無変更。
- `public/CNAME`(公開時に GitHub Pages で必要)、`public/.nojekyll`。

### 新規に作るもの

```
astro.config.mjs
package.json / pnpm-lock.yaml
tsconfig.json                (astro/tsconfigs/strict を extends)
.prettierrc / .prettierignore / .editorconfig / .gitignore
public/_headers              (全パスに X-Robots-Tag: noindex, nofollow。Cloudflare Pages 専用)
src/layouts/Base.astro       (lang="ja"、charset、viewport、title、global.css の読み込み)
src/pages/index.astro        (準備中ページ。noindex の meta はこのページだけに置く)
src/styles/global.css        (@import "tailwindcss" と @theme)
.github/workflows/site.yml
```

## ツールチェーン

| 役割           | 採用                                                               | 備考                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| フレームワーク | Astro 7.x                                                          | `output` は既定の static。`site: "https://nalsec.com"`、`trailingSlash: "always"`(現行 URL 形式 `/services/{slug}/` を維持できるようにする)。Node ≥ 22.23.4 が必要 |
| CSS            | Tailwind 4.x を `@tailwindcss/vite` で導入                         | 設定は `src/styles/global.css` の `@theme` のみ                                                                                                                    |
| 整形           | Prettier 3.x + prettier-plugin-astro + prettier-plugin-tailwindcss | `.prettierrc` の `tailwindStylesheet` に `./src/styles/global.css` を指定し、v4 のクラス順を解決する                                                               |
| 型チェック     | `astro check`(`@astrojs/check` + `typescript`)                     | strict                                                                                                                                                             |
| パッケージ管理 | pnpm 12.x                                                          | 下記「バージョン固定」                                                                                                                                             |

### バージョン固定(mise に依存しない)

`package.json` に次を置く。

- `"packageManager": "pnpm@12.18.0"`(導入時点の最新を正確に指定): 別バージョンの pnpm で実行すると、pnpm が自分で指定版を取得して切り替わる(`pmOnFail` 既定 `download`)。
- `"devEngines": { "runtime": { "name": "node", "version": "^24.11.0", "onFail": "download" } }`: pnpm が指定範囲の Node を取得し、scripts の実行に使う。

ローカルでは pnpm を一度だけ導入すればよい(`curl -fsSL https://get.pnpm.io/install.sh | sh -`)。mise の pnpm shim が PATH にあるため、pnpm 本体の bin が shim より前に来るよう PATH を確認する。

### scripts

| script         | 内容                 |
| -------------- | -------------------- |
| `dev`          | `astro dev`          |
| `build`        | `astro build`        |
| `preview`      | `astro preview`      |
| `check`        | `astro check`        |
| `format`       | `prettier --write .` |
| `format:check` | `prettier --check .` |

## 配信ワークフロー `site.yml`

`preview.yml` を改名し、検証と配信を 1 本にまとめる。

- トリガー: `main` 以外の全ブランチへの push(`branches: ["**", "!main"]`)と `workflow_dispatch`。
- 共通ステップ: `actions/checkout` → `pnpm/action-setup@v6`(`version` を省略し `packageManager` から読む)→ `pnpm install --frozen-lockfile` → `pnpm check` → `pnpm format:check` → `pnpm build`。
- `actions/setup-node` は使わない。Node は `devEngines.runtime` に従って pnpm が取得する(runner 既存の Node は pnpm 自身の起動にだけ使われる)。
- 配信ステップ(`github.ref_name == 'renewal' || github.event_name == 'workflow_dispatch'` のときだけ): Pages プロジェクト `nalsec-renewal` の存在確認(無ければ production branch `renewal` で作成)→ `wrangler pages deploy dist --branch <ブランチ名>` → URL を Step Summary に出力。既存 `preview.yml` のロジックを流用する。
- Secrets は既存の `CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID` をそのまま使う。
- `concurrency` は `site-${{ github.ref }}` で同一ブランチの多重実行を打ち切る。

結果として、作業ブランチへの push では型・整形・ビルドだけが走り、`renewal` への push でプレビューが更新される。

## 準備中ページ

現行 `site/index.html` と同等の黒背景・中央寄せの「リニューアル準備中」ページを `index.astro` + Tailwind で作る。配信経路の確認用であり、デザインの出発点ではない。`<meta name="robots" content="noindex, nofollow">` はこのページにだけ置き、レイアウトには置かない(公開時に消し忘れないため)。

## 検証

1. ローカル: `pnpm install` → `pnpm check` → `pnpm format:check` → `pnpm build` がすべて成功し、`pnpm preview` の表示をブラウザで確認する。
2. `renewal` へ push 後: Actions の run が成功し Summary に Deployment URL が出る。
3. https://nalsec-renewal.pages.dev/ が Astro の出力に置き換わっている(HTML に Astro 生成のスコープ付き属性が含まれる)。`X-Robots-Tag: noindex, nofollow` が付いている。
4. https://nalsec.com/ の ETag / Last-Modified が変わっていない。

## スコープ外

サイト構成(サイトマップ)、コンテンツコレクションの定義、デザイン、フォント、microCMS からの画像取り込み、お問い合わせフォーム(HyperForm)、プレビューのアクセス制限、Renovate 等の依存更新、Cloudflare Pages から Workers への移行。
