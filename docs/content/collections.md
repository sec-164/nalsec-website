# コンテンツコレクション

テキストのみのプレビュー用に、Astro のコンテンツコレクションを 2 つ定義している(`src/content.config.ts`)。内容の根拠は `docs/content/inventory.md`、URL は `docs/content/url-structure.md`。

## products(`src/content/products/*.md`)

スラッグはファイル名(`xnergy-ph.md` → `/products/xnergy-ph/`)。

| フィールド      | 型                        | 意味                                       |
| --------------- | ------------------------- | ------------------------------------------ |
| `title`         | string                    | 表示名(例: Xnergy ワイヤレス充電器 PH)     |
| `manufacturer`  | string                    | メーカー表記(Xnergy、BSLBATT、VITZROCELL)  |
| `category`      | `"charger"` / `"battery"` | 分類                                       |
| `categoryLabel` | string                    | 分類の表示用(充電器 / 電池)                |
| `models`        | string[]                  | 型番。なければ `[]`                        |
| `applications`  | string[]                  | 用途タグ。製品リストの「市場」に合わせる   |
| `summary`       | string                    | 1〜2 文の概要                              |
| `specs`         | `{label, value}[]`        | 主要スペック。出典にある数値だけ           |
| `catalog`       | string(省略可)            | `references/` 内のカタログのファイル名     |
| `sources`       | string[]                  | 出典の短い説明                             |
| `questions`     | string[]                  | このページに関するクライアントへの確認事項 |
| `order`         | number                    | 一覧での並び順                             |

## services(`src/content/services/*.md`)

スラッグはファイル名。フィールドは `title`、`summary`、`targets`(対象。string[])、`sources`、`questions`、`order`。

## 本文(Markdown)の書き方

- 見出しは `##` から。概要 / 特長 / 仕様 / 用途 / 備考の順を基本にする。
- 型番が複数ある場合、仕様は Markdown の表にする。数値は出典のとおりに写し、丸めない。読み取れない値は「要確認」と書く。
- 出典に根拠のない訴求(「最大 70% のコスト削減」など)は、本文では「カタログの訴求文(根拠要確認)」の箇条書きにまとめる。
- 現行サイトの日付表現など、時制が古い箇所は元の文言を残し、「(要確認: 時制)」を付けて `questions` にも書く。
- 誤記を直した場合は、`questions` に修正内容を書く。
- BE カタログ 1 ページ目の電話番号の誤記は、どこにも書かない。電話番号は `src/data/site.ts` の値を使う。

## 製品の追加方法

1. `src/content/products/` の既存ファイルをコピーし、`{メーカー}-{シリーズまたは種別}.md` に改名する(スラッグ = ファイル名)。
2. フロントマターを埋める。数値は資料にあるものだけ。資料が無い項目は空にして `questions` に書く。
3. 本文を書き換える。
4. `pnpm check` で型チェックを通す。

Enatel は掲載保留、資料が無い製品(PBM、Electrovaya、Vitzrocell CR / LFP、BSL フォークリフト・ゴルフカート、IT コンサルテーション)は、資料がそろうまで作らない。

## サイト共通情報

社名・キャッチコピー・住所・電話番号・技術マガジンへのリンクは `src/data/site.ts`(`site`)にある。
