# URL 構成(2026-11-08 決定)

方針: 現行と同じく「トップページで総覧し、製品・サービスは個別ページを持つ」。製品は `/products/`、サービスは `/services/` の下に置く。末尾スラッシュあり(`trailingSlash: "always"`)。

## 構成

| URL                 | 内容                                                                 | 状態           |
| ------------------- | -------------------------------------------------------------------- | -------------- |
| `/`                 | トップ。製品一覧・サービス・会社情報・tech.nalsec.com へのリンク     | 決定           |
| `/products/`        | 製品一覧(トップの製品部分と同じ内容の薄いページ。階層の親)           | 決定           |
| `/products/{slug}/` | 製品シリーズごとの個別ページ                                         | 決定           |
| `/services/{slug}/` | サービスごとの個別ページ                                             | 決定           |
| `/services/`        | サービス一覧。サービスが 2 件以上になるまで作らない                  | 保留           |
| `/contact/`         | お問い合わせ(フォームを独立ページにするか、各ページ末尾に埋め込むか) | 未定           |
| `/privacy/`         | プライバシーポリシー                                                 | 未定           |
| `/company/`         | 会社情報。当面はトップ内に置き、独立ページは作らない                 | 作らない(当面) |

## スラッグの規則

- 英小文字とハイフン。製品は `{メーカー}-{シリーズまたは種別}`。
- メーカー名は社名表記に合わせる(`vitzrocell`、`bslbatt`、`xnergy`、`pbm`、`electrovaya`、`enatel`)。
- 現行の `/services/medical-institution/` は URL を変えずにそのまま使う。

## 製品・サービスの個別ページ

いま作れるもの(資料あり。`docs/content/inventory.md` の充実度 ◎○):

| URL                              | 対象                                        |
| -------------------------------- | ------------------------------------------- |
| `/products/xnergy-ph/`           | Xnergy ワイヤレス充電器 PH                  |
| `/products/xnergy-be/`           | Xnergy ワイヤレス充電器 BE                  |
| `/products/bslbatt-lfp-gse/`     | BSLBATT LFP バッテリー(GSE 向け)            |
| `/products/vitzrocell-er/`       | VITZROCELL ER 電池                          |
| `/services/medical-institution/` | 医療機関向けコンサルティング(現行 URL 維持) |

資料が揃い次第、同じ規則で追加するもの:

- `/products/vitzrocell-cr/`、`/products/vitzrocell-lfp/`(実在要確認)
- `/products/bslbatt-lfp-forklift/`、`/products/bslbatt-lfp-golf-cart/`
- `/products/electrovaya-lithium-ion/`
- `/products/pbm-onboard-charger/`、`/products/pbm-stationary-charger/`
- `/services/it-consulting/`(内容確定後)
- Enatel(掲載保留): 解除後に `/products/enatel-ecocharge/`、`/products/enatel-eco9703/` など

## 旧 URL からのリダイレクト

Astro の `redirects` 設定で行う(静的出力では meta refresh の HTML が生成され、GitHub Pages / Cloudflare Pages のどちらでも動く)。

| 旧                               | 新                         | 備考                       |
| -------------------------------- | -------------------------- | -------------------------- |
| `/services/vitzro-cell/`         | `/products/vitzrocell-er/` | スラッグ変更               |
| `/services/ecocharge/`           | `/products/`               | Enatel 掲載保留            |
| `/services/dc-power-system/`     | `/products/`               | Enatel 掲載保留            |
| `/services/energy-warehouse/`    | `/products/`               | 継続未定。確定したら見直す |
| `/services/medical-institution/` | (変更なし)                 |                            |

## その他

- `/sitemap-index.xml` は `@astrojs/sitemap` で生成する(実装時)。
- `/404/` ページを用意する(Cloudflare Pages の SPA フォールバックで全 URL が 200 になるのを防ぐ)。
