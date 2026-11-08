# 画像・ロゴ(暫定)

すべて現行サイトからの暫定流用。差し替え前提。割り当ては `src/data/backgrounds.ts`。

写真は長辺 2560px に縮小して保存(ESS は CMYK → sRGB に変換)。ヒーローと VITZRO 用は元から小さいので未加工。

| ファイル(`src/assets/legacy/`) | 元 URL / 出典                                                                                                        | 使用箇所                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `hero.jpg`                     | `https://images.microcms-assets.io/assets/ad942acfb9d9473589250a884d421446/3102a26a5f4f44b588917272fb1ee1ee/971.jpg` | トップのヒーロー、会社情報画面(暗幕強め)、404                                 |
| `forklift-warehouse.jpg`       | `…/572a53091fd3404dba6a0eb6a0dbcec8/AdobeStock_204797867.jpeg`                                                       | Xnergy ワイヤレス充電器、Electrovaya の画面と製品ページ                       |
| `switchboard.jpg`              | `…/d161995560974c4f8a03346151fe6e73/AdobeStock_170179666.jpeg`                                                       | PBM 産業用充電器の画面と製品ページ                                            |
| `ess-container.jpg`            | `…/bb626af41b2b41bbb67db84b2774967d/ESS_Container_location_FINAL_Tall_Revise_Medium.jpg`                             | BSLBATT LFP バッテリーの画面と製品ページ(明るいので暗幕を追加)                |
| `batteries.jpg`                | `…/38d9aa5e50294a0ab9b874f72dafa883/AdobeStock_429654682_Preview.jpeg`                                               | VITZROCELL 一次電池の画面と製品ページ(Adobe Stock のプレビュー版、透かし入り) |
| `medical.jpg`                  | `…/44ee208fcd9b40c3bb042afdc577dda7/AdobeStock_178585512.jpeg`                                                       | 医療機関向けコンサルティングの画面とサービスページ(明るいので暗幕を追加)      |
| `technalsec.svg`               | 旧リポジトリ `89a58ce:public/TechNalsec.svg`                                                                         | 会社情報画面の技術マガジン帯(白い面の上に表示)                                |
| `src/components/Logo.astro`    | 旧リポジトリ `89a58ce:src/components/nalsecLogo.tsx` の SVG                                                          | ヘッダー、ヒーロー、会社情報、フッター                                        |

`…` は `https://images.microcms-assets.io/assets/ad942acfb9d9473589250a884d421446` の省略。
