> 掲載保留中(2026-11-08)。将来の参照用。

# Enatel(ニュージーランド)調査メモ

## 会社概要

- 公式サイト: https://www.enatel.com/ (https://www.enatel.net/ は 301 で .com へ転送。旧 .net の一部 PDF は現存)
- 会社名表記: Enatel。IDEAL INDUSTRIES の一部門(フッター「© 2026 IDEAL INDUSTRIES. All rights reserved.」)。IDEAL は 2018 年に Enatel を買収と記載。
- 創業: 2002 年、ニュージーランドの電力電子事業として開始(About Us: https://www.enatel.com/about-us)。
- 拠点: Christchurch・Auckland(NZ)、Seattle(WA)・Sycamore(IL)(米国)。本社所在地は明記なし。従業員 200 名超、電力技術で 30 年超の経験と記載。
- 事業領域: マテハン(MHE)・空港地上支援機器(GSE)向けの産業車両用充電器、バッテリー管理。About Us に DC 電源システムの写真・言及あり。
- 旧社名: DC Power Technologies が Enatel に名称変更(https://www.enatel.com/insights/dc-power-technologies-is-now-known-as-enatel/)。
- 認証: 製品は UL, cUL, FCC, IC, CE, UKCA, RCM, Giteki(インドア充電器ページ)。組織として Toitu carbon reduce ISO14064-1 バッジ。Quality Certifications ページ: https://www.enatel.com/quality-certifications (内容未取得)。

## 製品ライン

### 充電器

製品メニュー: Indoor Charger / Outdoor Charger / Battery Management。EcoCharge by Enatel ページ: https://www.enatel.com/products/ecocharge/

**ECO970 シリーズ(インドア、北米名。海外名は EM330 三相 / EM310 単相)**
共通: 鉛・リチウム等の多種バッテリー自動識別、混在フリート対応、モジュラー構成、効率 97.6%(サイト表記)。
インターフェース: USB, Wi-Fi, Ethernet, CAN Bus, 3.5 インチカラー表示とキーパッド(PDF)。

三相(入力 200-600VAC 三相、バッテリー電圧 24-96V、ピーク効率 >97%)

| 型式                                           | 出力電流 | 出力電力 | 寸法(W×D×H)    | 質量   |
| ---------------------------------------------- | -------- | -------- | -------------- | ------ |
| ECO973                                         | 300ADC   | 14.7kW   | 314×363×282 mm | 17kg   |
| ECO974                                         | 400ADC   | 29.4kW   | 314×363×520 mm | 32.5kg |
| ECO976                                         | 300ADC×2 | 29.4kW   | 314×363×520 mm | 32.5kg |
| AC 入力: 200-240 / 380-480 / 480-600VAC 三相。 |

単相(入力 100-277VAC 単相、バッテリー電圧 12-48V、ピーク効率 >95%)

| 型式                                                                                                                                             | 出力電流(240VAC, 24V電池) | 出力電力 | 寸法(W×H×D)    |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- | -------- | -------------- |
| ECO971-21                                                                                                                                        | 48ADC                     | 1.4kW    | 326×404×108 mm |
| ECO971-22                                                                                                                                        | 85ADC                     | 2.4kW    | 同上           |
| ECO971-23                                                                                                                                        | 120ADC                    | 3.5kW    | 同上           |
| ECO971-26                                                                                                                                        | 240ADC                    | 6.9kW    | 326×404×206 mm |
| (出典: EcoCharge 仕様書 PDF。ページ本文は単相を「6モデル」、サイトのカテゴリ表は 48-240ADC・1.4-6.9kW と記載。仕様書で確認できたのは上記 4 型式) |

**型式名についての注意**: 公式サイトに「ECO9701」「ECO9703」という表記は見つからず、該当しそうなのは ECO971-xx(単相)と ECO973(三相)。同一製品かは未確認(推測: NALSEC 側の型式表記または旧表記)。

**アウトドア充電器(Outdoor Charger)** https://www.enatel.com/products/outdoor-chargers

| 型式                                                                                                  | ポート   | バッテリー電圧 | 最大出力電流(80V) | 出力電力    | ピーク効率 | 質量 |
| ----------------------------------------------------------------------------------------------------- | -------- | -------------- | ----------------- | ----------- | ---------- | ---- |
| EG320                                                                                                 | デュアル | 24-96V         | 150A/出力         | 14.7kW/出力 | >97%       | 75kg |
| EG310                                                                                                 | シングル | 24-96V         | 300A              | 29.4kW      | >97%       | 66kg |
| EG320 は共有電源で 2 台充電可。全天候対応と記載。IP 等級・外形寸法は記載なし。空港 GSE 向けが主用途。 |

**バッテリー管理(アクセサリ)**: BMM-BT3(バッテリー監視モジュール、PLC/Bluetooth 通信、フリート監視・ログ)、BPT-BT3(バッテリーパワートラッカー、Bluetooth 表示)。ほかタワーライト、リモコン、ドームライト。https://www.enatel.com/products/battery-management/

### DC 電源

- 現行 .com サイトのメニューに DC 電源製品なし(https://www.enatel.com/products/enatel-energy/converters/ は 404)。旧 .net の PDF のみ確認。
- 「FlexiCompact」「HV COMPACT」という名称の公式ページは今回見つからず。MicroCOMPACT 関連は旧資料に記載あり。
- EM4x Energy Manager(MicroCOMPACT 系のサイトコントローラ): 12/24/48/110VDC 制御、VRLA・Li-Ion 対応、単独運用も可。https://www.enatel.net/wp-content/uploads/2020/10/EM4x-Energy-Manager-OCT-2022.pdf
- CM シリーズ DC コンバータ(例 CM2048HE): 2.0kW、入力 320-380VDC、出力 48VDC、1U、ピーク効率 >97%(旧 PDF、2021-2022 年版)。https://www.enatel.net/wp-content/uploads/2021/08/CM2048HE-HV-Converter_v1.0.pdf / https://www.enatel.net/wp-content/uploads/2022/12/CM-Series-DC-Converter-HV-2022.pdf
- その他旧資料: Solar-Series.pdf (https://www.enatel.net/wp-content/uploads/2019/11/Solar-Series.pdf), CM-Converter-Series.pdf, CM-Series-Converter-LV。いずれも旧版で、現行の継続販売は未確認(推測: 事業整理または別ブランド移管の可能性)。

### その他

- 産業別ページ: Manufacturing / Warehouses / Airports (https://www.enatel.com/industries/...)。
- 蓄電池システム(energy storage)の現行製品は確認できず。

## 素材(カタログ・写真)

PDF(いずれも公式 CDN、aprimocdn):

- EcoCharge ECO970 仕様書 2026: https://p1.aprimocdn.net/idealindustries/5dfc4b51-a6ee-4836-bbd6-b4ad003fc209/EcoCharge%20by%20Enatel%20Feature%20%26%20Specification%20Sheet%202026_Original%20file.pdf (型式表あり、上記表の出典)
- Indoor 仕様書 2026 (EM330/EM310): https://p1.aprimocdn.net/idealindustries/1f836b68-491b-48fa-95fe-b4ad00459bd8/Enatel%20Indoor%20-%20Feature%20%26%20Spec%20Sheet%202026_Original%20file.pdf (未開封)
- Outdoor 仕様書: https://p1.aprimocdn.net/idealindustries/aa7a5d87-3dc7-4f2c-809e-b4ac017987b8/Enatel%20Outdoor%20Charger%20-%20Feature%20%26%20Specification%20Sheet_Original%20file.pdf (未開封)
- 旧 DC 電源 PDF は上記「DC 電源」参照。
  写真(製品):
- ECO973 正面: https://p1.aprimocdn.net/idealindustries/9800b69e-c714-446b-b882-b47e018a50d6/ECO973%20Front%20Clearcut_Original%20file.png
- ECO973 斜め: https://p1.aprimocdn.net/idealindustries/c98ae1dc-4427-45f4-9bc2-b47e018a5239/ECO973%20ISO%20Clearcut_Original%20file.png
- ECO971-26: https://p1.aprimocdn.net/idealindustries/8af0d820-82da-4b4d-8f13-b47e018a4f23/ECO971-26%20Single%20Phase%20ISO%20Clearcut_Original%20file.png
- 屋外キャビネット: https://p1.aprimocdn.net/idealindustries/9bd3ec0d-f73d-4f9f-9f43-b42101132f1c/2026-etl-outdoor-charger-print-08_Original%20file.png
- ほか Outdoor ページに設置写真多数(https://www.enatel.com/products/outdoor-chargers)。
  ロゴ: 未取得(サイトヘッダーを参照)。
  再利用条件: フッターは「© 2026 IDEAL INDUSTRIES. All rights reserved.」のみ確認。利用規約ページは未取得。画像・PDF の転載には許諾確認が必要(推測)。

## 日本語情報と国内窓口

- 日本語ページ: 確認できず(英語のみ)。
- 販売網ページ(https://www.enatel.com/sales-and-support/)は北米ディーラー中心で、アジア拠点の記載なし。非北米は Fastcharge(オーストラリア)のみ。日本の代理店・NALSEC の記載なし。
- 製品に Giteki(技適)取得の記載あり=日本向け認証がある(インドア充電器ページ)。
- 連絡先: info@enatel.com / +1 844 325 2474(仕様書記載、Marysville, WA)。

## 取得メモ

- 取得日: 2026-11-08。WebFetch/WebSearch のみ使用。
- 404: https://www.enatel.com/products/enatel-energy/converters/。
- 転送: enatel.net → enatel.com。旧 .net の material-handling 系 URL は /products/ecocharge/ へ転送。
- 未確認: ECO9701/ECO9703 の公式表記、FlexiCompact/HV COMPACT の現行仕様、Indoor/Outdoor 仕様書 PDF の中身、利用規約、ロゴ、IP 等級、旧 DC 電源の販売継続。
- ページ本文は要約ツール経由のため、数値は PDF(pdftotext 取得)以外は再確認推奨。
