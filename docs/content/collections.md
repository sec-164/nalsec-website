# コンテンツコレクション

テキストのみのプレビュー用に、Astro のコンテンツコレクションを 2 つ定義している(`src/content.config.ts`)。内容の根拠は `docs/content/inventory.md`、URL は `docs/content/url-structure.md`。

## products(`src/content/products/*.md`)

スラッグはファイル名(`xnergy-ph.md` → `/products/xnergy-ph/`)。

| フィールド      | 型                        | 意味                                                        |
| --------------- | ------------------------- | ----------------------------------------------------------- |
| `title`         | string                    | 表示名(例: Xnergy ワイヤレス充電器 PH)                      |
| `manufacturer`  | string                    | メーカー表記(Xnergy、BSLBATT、VITZROCELL)                   |
| `category`      | `"charger"` / `"battery"` | 分類                                                        |
| `categoryLabel` | string                    | 分類の表示用(充電器 / 電池)                                 |
| `models`        | string[]                  | 型番。なければ `[]`                                         |
| `applications`  | string[]                  | 用途タグ。製品リストの「市場」に合わせる                    |
| `summary`       | string                    | トップページに載せる紹介文。1 行 1 文、改行は `<br>` で表示 |
| `catalog`       | string(省略可)            | `references/` 内のカタログのファイル名                      |
| `order`         | number                    | 一覧での並び順                                              |

## services(`src/content/services/*.md`)

スラッグはファイル名。フィールドは `title`、`summary`、`targets`(対象。string[])、`order`。

## 本文(Markdown)の書き方

- 製品の本文は `## 概要` / `## 特長` / `## 仕様` / `## 用途` の順。ほかの節は作らない。
- 仕様はカタログの表を、項目名・値・単位・注記・型番の列・並び順までそのまま写す。丸めない、要約しない、行を落とさない。表が複数あるときは、カタログの表題を `###` の見出しにして 1 表ずつ書く。型番が複数ある表は、型番ごとに列を分けた 1 つの Markdown 表にする。
- 公開しない内容(備考、出典、確認事項、「要確認」の印、編集上のメモ)は書かない。未解決の確認事項は `docs/content/inventory.md` に置く。
- 根拠のない訴求(「最大 70% のコスト削減」など)は載せない。
- BE カタログ 1 ページ目の電話番号の誤記は、どこにも書かない。電話番号は `src/data/site.ts` の値を使う。

## 製品の追加方法

1. `src/content/products/` の既存ファイルをコピーし、`{メーカー}-{シリーズまたは種別}.md` に改名する(スラッグ = ファイル名)。
2. フロントマターを埋める。数値は資料にあるものだけ。資料が無い項目は空にする。
3. 本文を書き換える。
4. `pnpm exec astro sync` と `pnpm check` を通す。

Enatel は掲載保留、資料が無い製品(PBM、Electrovaya、Vitzrocell CR / LFP、BSL フォークリフト・ゴルフカート、IT コンサルテーション)は、資料がそろうまで作らない。

## サイト共通情報

社名・キャッチコピー・住所・電話番号・技術マガジンへのリンクは `src/data/site.ts`(`site`)にある。
