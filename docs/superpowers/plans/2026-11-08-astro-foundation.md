# Astro 基盤(環境構築)実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `renewal` ブランチ上の Next.js プロジェクトを捨て、Astro 7 + Tailwind v4 + pnpm の最小プロジェクトと、検証・プレビュー配信を 1 本にまとめた GitHub Actions ワークフローを作る。

**Architecture:** リポジトリ直下に Astro(static 出力)を置き、Tailwind は `@tailwindcss/vite` プラグインと `src/styles/global.css` の `@theme` で設定する。整形は Prettier(+astro/+tailwindcss プラグイン)、型チェックは `astro check`。pnpm と Node のバージョンは `package.json` の `packageManager` と `devEngines.runtime` だけで固定し、mise に依存しない。`.github/workflows/site.yml` が `main` 以外の全ブランチで check/format/build を走らせ、`renewal` のときだけ Cloudflare Pages(`nalsec-renewal`)へ wrangler で配信する。

**Tech Stack:** Astro 7.4.x、Tailwind CSS 4.3.x(`@tailwindcss/vite`)、Prettier 3.9.x + prettier-plugin-astro 1.1.x + prettier-plugin-tailwindcss 0.8.x、`@astrojs/check` 0.9.x + TypeScript 6.x、pnpm 12.18.0、Node 24.x、GitHub Actions(`actions/checkout@v7`、`pnpm/action-setup@v6`)、wrangler 4。

スペック: `docs/superpowers/specs/2026-11-08-astro-foundation-design.md`

## Global Constraints

- 作業ブランチは `renewal`。`main` には push しない。`.github/workflows/nextjs.yml` は無変更。
- Astro の出力は static(`output` 既定)。`site: "https://nalsec.com"`、`trailingSlash: "always"`。
- Tailwind の設定は `src/styles/global.css` の `@theme` のみ。`tailwind.config.js`、PostCSS 設定、SCSS は作らない。
- Lint ツールは入れない(ESLint も oxlint も不使用)。
- `package.json`: `"packageManager": "pnpm@12.18.0"`、`"devEngines": { "runtime": { "name": "node", "version": "^24.11.0", "onFail": "download" } }`。
- CI では `actions/setup-node` を使わない。Node は pnpm が `devEngines.runtime` に従って取得する。
- `noindex` の `<meta name="robots">` は `src/pages/index.astro` だけに置き、レイアウトには置かない。
- Cloudflare 用の `X-Robots-Tag: noindex, nofollow` は `public/_headers` に置く。
- コミットメッセージは日本語、末尾に `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>` を付ける。
- ローカルの pnpm は `~/Library/pnpm/bin/pnpm`(standalone)。Bash ツールはシェル状態を保持しないので、pnpm を使うコマンドの先頭で毎回 `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH";` を付ける(mise の `pnpm` shim を先に拾わないため)。

---

## ファイル構成

| パス                               | 責務                                                      |
| ---------------------------------- | --------------------------------------------------------- |
| `package.json`                     | 依存、scripts、pnpm/Node のバージョン固定                 |
| `pnpm-lock.yaml`                   | ロックファイル(pnpm が生成)                               |
| `astro.config.mjs`                 | Astro 設定(site、trailingSlash、Tailwind Vite プラグイン) |
| `tsconfig.json`                    | `astro/tsconfigs/strict` を継承                           |
| `.prettierrc` / `.prettierignore`  | 整形設定                                                  |
| `.gitignore`                       | `node_modules/`、`dist/`、`.astro/` 等                    |
| `public/_headers`                  | Cloudflare Pages 用ヘッダー(noindex)                      |
| `public/CNAME`、`public/.nojekyll` | 既存。無変更                                              |
| `src/styles/global.css`            | Tailwind の読み込みと `@theme`                            |
| `src/layouts/Base.astro`           | HTML 骨格(lang、meta、title、head スロット、global.css)   |
| `src/pages/index.astro`            | 準備中ページ(noindex meta 付き)                           |
| `.github/workflows/site.yml`       | 検証 + プレビュー配信ワークフロー                         |

---

### Task 1: 旧 Next.js コードと旧プレビュー配信物の削除

**Files:**

- Delete: `src/`(全ファイル)、`next.config.js`、`next-env.d.ts`、`tailwind.config.js`、`postcss.config.js`、`prettier.config.js`、`.eslintrc.json`、`tsconfig.json`、`package.json`、`pnpm-lock.yaml`、`public/TechNalsec.svg`、`site/_headers`、`site/index.html`
- Keep: `.editorconfig`、`.gitignore`(Task 3 で書き換え)、`public/CNAME`、`public/.nojekyll`、`.github/workflows/nextjs.yml`、`.github/workflows/preview.yml`(Task 5 で改名)、`docs/`

**Interfaces:**

- Produces: 直下に Astro を置ける空いた状態。`public/` は `CNAME` と `.nojekyll` のみ。

- [ ] **Step 1: 現在のブランチと状態を確認する**

Run: `git status -sb && git branch --show-current`
Expected: `## renewal...origin/renewal [ahead 1]`(または同期済み)で、未コミットの変更なし。ブランチ名 `renewal`。

- [ ] **Step 2: 旧ファイルを git rm する**

```bash
git rm -r -q src next.config.js next-env.d.ts tailwind.config.js postcss.config.js prettier.config.js .eslintrc.json tsconfig.json package.json pnpm-lock.yaml public/TechNalsec.svg site
```

- [ ] **Step 3: 残ったファイルを確認する**

Run: `git ls-files`
Expected: 次の 7 件だけが残る。

```
.editorconfig
.github/workflows/nextjs.yml
.github/workflows/preview.yml
.gitignore
docs/superpowers/specs/2026-11-08-astro-foundation-design.md
public/.nojekyll
public/CNAME
```

- [ ] **Step 4: コミット**

```bash
git commit -q -m "$(cat <<'EOF'
旧 Next.js コードと準備中ページを削除

リニューアルは Astro でフルスクラッチするため、Next.js と microCMS 関連の
コードを取り除く。参照が必要なときは git 履歴か公開中の HTML を見る。
site/ の準備中ページは Astro の出力に置き換える。

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: pnpm の導入と `package.json` の作成

**Files:**

- Create: `package.json`
- Create(pnpm が生成): `pnpm-lock.yaml`

**Interfaces:**

- Produces: scripts `dev` / `build` / `preview` / `check` / `format` / `format:check`。依存: `astro`、`@tailwindcss/vite`、`tailwindcss`、`@astrojs/check`、`typescript`、`prettier`、`prettier-plugin-astro`、`prettier-plugin-tailwindcss`。

- [ ] **Step 1: ローカルに standalone の pnpm を導入する(未導入の場合のみ)**

Run: `ls ~/Library/pnpm/bin/pnpm 2>/dev/null || curl -fsSL https://get.pnpm.io/install.sh | sh -`
Expected: `~/Library/pnpm/bin/pnpm` が存在する。インストーラは `~/.zshrc` に `PNPM_HOME` と PATH の設定を追記する(ユーザーには報告する)。

- [ ] **Step 2: pnpm が動くことを確認する**

Run: `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH"; pnpm --version`
Expected: バージョン番号が出る(`12.18.0` でなくてもよい。`packageManager` により次ステップ以降で自動的に 12.18.0 へ切り替わる)。

- [ ] **Step 3: `package.json` を書く**

```json
{
  "name": "nalsec-website",
  "private": true,
  "type": "module",
  "packageManager": "pnpm@12.18.0",
  "devEngines": {
    "runtime": {
      "name": "node",
      "version": "^24.11.0",
      "onFail": "download"
    }
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  },
  "dependencies": {
    "astro": "^7.4.7"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.12",
    "@tailwindcss/vite": "^4.3.5",
    "prettier": "^3.9.10",
    "prettier-plugin-astro": "^1.1.2",
    "prettier-plugin-tailwindcss": "^0.8.1",
    "tailwindcss": "^4.3.5",
    "typescript": "^6.0.0"
  }
}
```

- [ ] **Step 4: 依存をインストールしてロックファイルを作る**

Run: `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH"; pnpm install`
Expected: エラーなく終了し `pnpm-lock.yaml` と `node_modules/` ができる。`devEngines.runtime` により pnpm が Node 24.x を取得する旨のログが出ることがある。

- [ ] **Step 5: 固定が効いていることを確認する**

Run: `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH"; pnpm --version && pnpm exec node --version && pnpm exec astro --version`
Expected: `12.18.0`、`v24.x.x`、`astro  v7.4.x`。

- [ ] **Step 6: コミット**

```bash
git add package.json pnpm-lock.yaml
git commit -q -m "$(cat <<'EOF'
Astro 7 / Tailwind 4 / Prettier を依存に持つ package.json を追加

packageManager と devEngines.runtime で pnpm と Node のバージョンを固定し、
mise 等の外部ツールに依存せずに同じ環境を再現できるようにする。

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Astro プロジェクトの最小構成(設定・レイアウト・準備中ページ)

**Files:**

- Create: `astro.config.mjs`、`tsconfig.json`、`src/styles/global.css`、`src/layouts/Base.astro`、`src/pages/index.astro`、`public/_headers`
- Modify: `.gitignore`(全文置き換え)

**Interfaces:**

- Consumes: Task 2 の scripts `check`、`build`、`preview`。
- Produces: `Base.astro` の Props `{ title: string }` と名前付きスロット `head`。ビルド出力 `dist/`(Task 5 の配信元)。

- [ ] **Step 1: `.gitignore` を書き換える**

```gitignore
# 依存とビルド成果物
node_modules/
dist/
.astro/

# ログ
*.log

# 環境変数
.env
.env.*
!.env.example

# OS / エディタ
.DS_Store
.vscode/
.idea/
```

- [ ] **Step 2: `astro.config.mjs` を書く**

```js
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nalsec.com",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Step 3: `tsconfig.json` を書く**

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

- [ ] **Step 4: `src/styles/global.css` を書く**

```css
@import "tailwindcss";

@theme {
  --font-sans: "Montserrat", "M PLUS 1p", system-ui, sans-serif;
}
```

- [ ] **Step 5: `src/layouts/Base.astro` を書く**

```astro
---
import "../styles/global.css";

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <slot name="head" />
  </head>
  <body class="bg-black font-sans text-white">
    <slot />
  </body>
</html>
```

- [ ] **Step 6: `src/pages/index.astro` を書く**

```astro
---
import Base from "../layouts/Base.astro";
---

<Base title="株式会社NALSEC | リニューアル準備中">
  <meta slot="head" name="robots" content="noindex, nofollow" />
  <main class="flex min-h-svh items-center justify-center p-4">
    <div class="max-w-2xl text-center">
      <h1 class="text-5xl font-normal tracking-[0.15em] sm:text-7xl">NALSEC</h1>
      <hr class="mx-auto my-6 w-24 border-0 border-t-2 border-white" />
      <p class="leading-loose">
        サイトリニューアル準備中です。
        <br />
        このページは確認用のプレビューであり、公開サイトではありません。
      </p>
      <p class="mt-8 text-sm opacity-60">
        公開サイト:{" "}
        <a href="https://nalsec.com/" class="underline">
          nalsec.com
        </a>
      </p>
    </div>
  </main>
</Base>
```

- [ ] **Step 7: `public/_headers` を書く**

```
/*
  X-Robots-Tag: noindex, nofollow
```

- [ ] **Step 8: 型チェックを通す**

Run: `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH"; pnpm check`
Expected: 最終行が `Result (N files): 0 errors 0 warnings 0 hints` の形で終了コード 0。`.astro/` ディレクトリが生成される(gitignore 済み)。

- [ ] **Step 9: ビルドを通す**

Run: `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH"; pnpm build && ls dist && grep -c 'noindex' dist/index.html && test -f dist/_headers && test -f dist/CNAME`
Expected: ビルド成功。`dist/` に `index.html`、`_headers`、`CNAME`、`.nojekyll`、`_astro/` がある。`grep` は `1` 以上を出力。

- [ ] **Step 10: 表示を確認する**

Run: `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH"; pnpm preview --port 4321` をバックグラウンドで起動し、アプリ内ブラウザで `http://localhost:4321/` を開いてスクリーンショットを確認する。
Expected: 黒背景に白文字で「NALSEC」、白い横線、「サイトリニューアル準備中です。…」が中央に表示される。確認後にプロセスを止める。

- [ ] **Step 11: コミット**

```bash
git add .gitignore astro.config.mjs tsconfig.json src public/_headers
git commit -q -m "$(cat <<'EOF'
Astro + Tailwind v4 の最小構成と準備中ページを追加

- astro.config.mjs: site と trailingSlash を設定し @tailwindcss/vite を読み込む
- Tailwind の設定は src/styles/global.css の @theme のみ
- Base レイアウトと、noindex 付きの準備中ページ(配信経路の確認用)
- public/_headers で Cloudflare Pages 配信時に X-Robots-Tag を付ける

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: Prettier の設定と整形

**Files:**

- Create: `.prettierrc`、`.prettierignore`

**Interfaces:**

- Consumes: Task 2 の scripts `format`、`format:check`。Task 3 の `src/styles/global.css`(Tailwind のクラス順の解決に使う)。
- Produces: `pnpm format:check` が終了コード 0 で通る状態(Task 5 の CI 前提)。

- [ ] **Step 1: `.prettierrc` を書く**

`prettier-plugin-tailwindcss` は他のプラグインより後ろに置く必要がある。

```json
{
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  "tailwindStylesheet": "./src/styles/global.css",
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}
```

- [ ] **Step 2: `.prettierignore` を書く**

```
node_modules/
dist/
.astro/
pnpm-lock.yaml
public/
```

- [ ] **Step 3: 整形チェックを実行して差分の有無を見る**

Run: `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH"; pnpm format:check; echo "exit=$?"`
Expected: 対象は `astro.config.mjs`、`tsconfig.json`、`package.json`、`.prettierrc`、`src/**`、`docs/**/*.md`。Task 3 で書いたファイルに整形差分があれば `[warn]` で列挙され exit=1。

- [ ] **Step 4: 整形を適用する**

Run: `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH"; pnpm format`
Expected: 各ファイル名と所要時間が出て終了。

- [ ] **Step 5: チェックが通ることを確認する**

Run: `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH"; pnpm format:check && pnpm check && pnpm build`
Expected: `All matched files use Prettier code style!`、型チェック 0 errors、ビルド成功。

- [ ] **Step 6: コミット**

```bash
git add -A
git commit -q -m "$(cat <<'EOF'
Prettier(astro / tailwindcss プラグイン)を設定し整形を適用

tailwindStylesheet に global.css を指定して Tailwind v4 のクラス順を解決する。

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>
EOF
)"
```

---

### Task 5: 検証 + プレビュー配信ワークフロー `site.yml`

**Files:**

- Rename: `.github/workflows/preview.yml` → `.github/workflows/site.yml`(内容は全文置き換え)

**Interfaces:**

- Consumes: Task 2 の `packageManager`(`pnpm/action-setup` が読む)、scripts `check` / `format:check` / `build`。Task 3 のビルド出力 `dist/`。既存 Secrets `CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID`。
- Produces: `main` 以外への push で検証、`renewal` への push と手動実行でプレビュー配信。

- [ ] **Step 1: 改名する**

```bash
git mv .github/workflows/preview.yml .github/workflows/site.yml
```

- [ ] **Step 2: `.github/workflows/site.yml` を全文置き換える**

```yaml
# リニューアル用サイトの検証とプレビュー配信。
# 本番 (GitHub Pages, nextjs.yml) には一切触れない。
#
# - main 以外のブランチへの push : 型チェック・整形チェック・ビルド
# - renewal への push / 手動実行  : 上記に加えて Cloudflare Pages へ配信
#     renewal  -> https://nalsec-renewal.pages.dev/
#     その他   -> https://<branch>.nalsec-renewal.pages.dev/
#
# 必要な Secrets: CLOUDFLARE_API_TOKEN (Account / Cloudflare Pages / Edit), CLOUDFLARE_ACCOUNT_ID
name: Site (check / build / preview)

on:
  push:
    branches: ["**", "!main"]
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: site-${{ github.ref }}
  cancel-in-progress: true

env:
  PAGES_PROJECT: nalsec-renewal
  PAGES_PRODUCTION_BRANCH: renewal
  OUTPUT_DIR: dist

jobs:
  site:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v7

      # version を省略し package.json の packageManager から読む。
      # Node は devEngines.runtime に従って pnpm が取得するので setup-node は使わない。
      - name: Setup pnpm
        uses: pnpm/action-setup@v6

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Type check
        run: pnpm check

      - name: Format check
        run: pnpm format:check

      - name: Build
        run: pnpm build

      - name: Ensure Pages project exists
        if: github.ref_name == env.PAGES_PRODUCTION_BRANCH || github.event_name == 'workflow_dispatch'
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
        run: |
          set -euo pipefail
          status=$(curl -sS -o /dev/null -w '%{http_code}' \
            -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
            "https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/pages/projects/${PAGES_PROJECT}")
          case "$status" in
            200) echo "Project ${PAGES_PROJECT} already exists." ;;
            404) echo "Creating project ${PAGES_PROJECT}."
                 pnpm dlx wrangler@4 pages project create "${PAGES_PROJECT}" \
                   --production-branch "${PAGES_PRODUCTION_BRANCH}" ;;
            *)   echo "Unexpected response ${status} from Cloudflare API." >&2; exit 1 ;;
          esac

      - name: Deploy to Cloudflare Pages
        if: github.ref_name == env.PAGES_PRODUCTION_BRANCH || github.event_name == 'workflow_dispatch'
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
        run: |
          set -euo pipefail
          pnpm dlx wrangler@4 pages deploy "${OUTPUT_DIR}" \
            --project-name "${PAGES_PROJECT}" \
            --branch "${GITHUB_REF_NAME}" \
            --commit-hash "${GITHUB_SHA}" \
            --commit-dirty=false \
            --commit-message "${GITHUB_REF_NAME}@${GITHUB_SHA::7}" \
            | tee deploy.log
          url=$(grep -oE 'https://[a-z0-9.-]+\.pages\.dev' deploy.log | tail -n 1 || true)
          {
            echo "## Cloudflare Pages preview"
            echo
            echo "- Branch: \`${GITHUB_REF_NAME}\`"
            echo "- Deployment URL: ${url:-unknown}"
            if [ "${GITHUB_REF_NAME}" = "${PAGES_PRODUCTION_BRANCH}" ]; then
              echo "- Stable URL: https://${PAGES_PROJECT}.pages.dev/"
            else
              alias=$(echo "${GITHUB_REF_NAME}" | tr '/_.' '---' | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]//g')
              echo "- Branch alias: https://${alias}.${PAGES_PROJECT}.pages.dev/"
            fi
          } >> "$GITHUB_STEP_SUMMARY"
```

- [ ] **Step 3: YAML として読めることと整形を確認する**

Run: `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH"; pnpm exec prettier --check .github/workflows/site.yml || pnpm exec prettier --write .github/workflows/site.yml`
Expected: Prettier が YAML をパースできる(構文エラーなら失敗する)。差分があれば整形され、再度 `pnpm format:check` が通る。

- [ ] **Step 4: コミット**

```bash
git add .github/workflows
git commit -q -m "$(cat <<'EOF'
検証とプレビュー配信を site.yml に統合

main 以外の全ブランチで astro check / prettier --check / astro build を走らせ、
renewal への push と手動実行のときだけ dist を Cloudflare Pages に配信する。
Node は devEngines.runtime に従って pnpm が取得するため setup-node は使わない。

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 5: push する**

Run: `git push origin renewal`
Expected: `origin/renewal` が更新される。

- [ ] **Step 6: Actions の完了を待つ**

Run(バックグラウンド、最大 10 分):

```bash
for i in $(seq 1 60); do
  out=$(curl -sS 'https://api.github.com/repos/sec-164/nalsec-website/actions/runs?branch=renewal&per_page=1' \
    | python3 -I -c 'import json,sys
d=json.load(sys.stdin)
for r in d.get("workflow_runs",[]): print(r["id"], r["status"], r["conclusion"], r["name"], r["html_url"])')
  echo "[$i] $out"
  case "$out" in *" completed "*) break;; esac
  sleep 10
done
```

Expected: `completed success Site (check / build / preview) https://github.com/sec-164/nalsec-website/actions/runs/<id>`。失敗していたら `gh run view <id> --log-failed -R sec-164/nalsec-website` でログを読み、原因(pnpm の版取得、Node 取得、check/format/build の失敗、wrangler の認証)を特定して直す。

- [ ] **Step 7: 配信結果と本番の不変を確認する**

```bash
echo "=== preview"; curl -sSI https://nalsec-renewal.pages.dev/ | grep -iE '^(HTTP|x-robots-tag)'
curl -sS https://nalsec-renewal.pages.dev/ | grep -oE 'data-astro-cid-[a-z0-9]+|<title>[^<]*</title>|/_astro/[^"]+' | sort -u | head
echo "=== production"; curl -sSI https://nalsec.com/ | grep -iE '^(HTTP|etag|last-modified)'
```

Expected:

- preview: `HTTP/2 200`、`x-robots-tag: noindex, nofollow`、`<title>株式会社NALSEC | リニューアル準備中</title>`、`/_astro/...css` への参照(Astro の出力である証拠)。
- production: `HTTP/2 200`、`etag: "696f149f-3baa5"`、`last-modified: Tue, 20 Jan 2026 05:37:35 GMT`(push 前と同じ)。

---

### Task 6: 計画・スペックの整合と最終確認

**Files:**

- Modify: `docs/superpowers/plans/2026-11-08-astro-foundation.md`(チェックボックスの更新)

- [ ] **Step 1: 全スクリプトを通しで実行する**

Run: `export PNPM_HOME="$HOME/Library/pnpm"; export PATH="$PNPM_HOME/bin:$PNPM_HOME:$PATH"; pnpm check && pnpm format:check && pnpm build`
Expected: すべて成功。

- [ ] **Step 2: 作業ツリーがクリーンで push 済みであることを確認する**

Run: `git status -sb && git log --oneline origin/main..renewal`
Expected: `## renewal...origin/renewal`(ahead/behind なし)。`renewal` 固有のコミットが並ぶ。

- [ ] **Step 3: ユーザーへ報告する**

報告に含めること: プレビュー URL、Actions run の URL、ローカルで `~/.zshrc` が変更されたこと(pnpm インストーラ)、`workflow_dispatch` は `site.yml` が `main` に入るまで GitHub の画面からは実行できないこと、次の相談事項(サイト構成)。
