# Electrovaya 調査メモ

## 会社概要

- 名称: Electrovaya Inc.（自社説明は「lithium-ion battery technology and manufacturing company」）
- 本社所在地: サイト上に記載なし（取得できず）。北米（米国・カナダ）に拠点。ジェームズタウンのセル製造施設に言及（所在地の記載なし）
- 創業年: 記載なし（「Thirty years of innovation」の表現のみ。約30年）
- 上場: NASDAQ・TSX、ティッカー ELVA
- 技術: セラミックベースの電池技術（独自のセラミック複合セパレータ）、自社「Infinity Cell」。データシートでは NMC セル＋セラミックセパレータ。固体電池も開発中
- 認証: 製品ページに「UL2580 listed cells」の記載。会社としての認証一覧（UL・ISO）は記載なし
- URL: https://electrovaya.com/ / https://electrovaya.com/about/ / https://electrovaya.com/technology-products/ / https://electrovaya.com/infinity-battery-technology/

## 製品ライン

総称は「Infinity Battery Modules」（https://electrovaya.com/infintity-battery-modules/、URLの綴りは公式のまま）。個別の型番は公開されておらず、レンジ表記のみ。
共通: セル Electrovaya Infinity Cell、Wi-Fi による遠隔監視・データ記録、複数メーカーの充電器に対応（CANBus・WiFi 充電制御）、UL2580 listed セル、第三者試験で検証したサイクル寿命。

### 1. Low Voltage (LV) — フォークリフト用（Class I〜III）

URL: https://electrovaya.com/infintity-battery-modules/low-voltage-lv/
用途表示: Robotics / Airport GSE / Forklift

| 系統 | 対応クラス | 幅(mm)    | 重量(kg)  | 容量(Ah)  | 公称エネルギー(kWh) |
| ---- | ---------- | --------- | --------- | --------- | ------------------- |
| 24V  | II, III    | 224–353   | 90–726    | 282–564   | 7.2–14.4            |
| 36V  | I, II      | 337–864   | 816–1,406 | 564–1,128 | 20.6–41.2           |
| 48V  | I, II      | 424–1,148 | 635–1,941 | 282–1,128 | 14.4–57.6           |

- 急速充電 1.5時間（注記あり、注記本文はページになし）、サイクル寿命 最大14,000回（同）
- 温度: 放電 -30〜55°C、充電 「-5C〜55°C」と表記、55〜60°Cは24時間まで
- 保証: 6年、最大10年まで延長可
- 稼働実績の記載: 14,000台超（LVページ）、OEM承認ありと記載
- 旧版データシート（2025年2月、下記PDF）: 24V/36V/48V、セル「EV-44」（NMC＋セラミックセパレータ）、急速充電1時間、9000+回、温度 -30〜50°C、幅(in) 8.85–13.9 / 13.3–34.02 / 16.7–45.2、重量(lbs) 200–1600 / 1800–3100 / 1490–4280、保証 6年→10年。メンテナンスフリー（水補充・バッテリー交換不要）、既存鉛蓄電池車へのドロップイン。世代差により数値が異なる（サイト上の最新ページを優先、要確認）

### 2. AGV Battery Systems（Infinity Automated Guided Vehicle Batteries）

URL: https://electrovaya.com/infintity-battery-modules/agv-battery-systems-agv/

| 項目           | 値           |
| -------------- | ------------ |
| 電圧範囲       | 24–330 V     |
| 幅             | 224–353 mm   |
| 重量           | 37–510 kg    |
| 容量           | 54–564 Ah    |
| 公称エネルギー | 1.4–31.3 kWh |
| 急速充電       | 1.5時間      |
| サイクル寿命   | 最大14,000回 |
| 保証           | 最大8年      |

- 温度はLVと同じ。稼働実績「30,000台超の motive vehicles」と記載。AMR 専用ページはなし（Robotics 名義のデータシートあり）

### 3. Walkie Pallet Jack Battery Systems（Class III 向け、2026年新ライン）

URL: https://electrovaya.com/infintity-battery-modules/walkie-pallet-jack-battery-systems/
プレス: https://electrovaya.com/press/electrovaya-launches-new-line-of-lithium-ion-battery-systems-for-class-iii-material-handling-vehicles/

| 型番     | 電圧                 | 容量                                | 重量                 | 備考                                     |
| -------- | -------------------- | ----------------------------------- | -------------------- | ---------------------------------------- |
| 記載なし | 22.4 / 25.9 / 28.7 V | 108 Ah (2.8 kWh) / 162 Ah (4.1 kWh) | 最小 200 lbs (91 kg) | 内蔵充電器 650W または 1200W、CAN・Wi-Fi |

- サイクル寿命 最大15000回（プレスは14,000回と記載、不一致）、温度 放電 -30〜55°C／充電 0〜55°C
- 保証 「Up to 6 years」と「Up to 8 years」が同一ページに併記（不一致）

### その他（産業用）

- High Voltage (HV): https://electrovaya.com/infintity-battery-modules/high-voltage-hv/（未取得・内容未確認）
- BESS: https://electrovaya.com/infintity-battery-modules/battery-energy-storage-systems-bess/（未取得）
- Airport GSE: https://electrovaya.com/infintity-battery-modules/airport-ground-service-equipment-gse/（未取得）
- 「フォークリフト」専用の独立ページはなく、LVページが該当。NALSECの「4種以上」に近い系統は LV(24/36/48V)・AGV・Walkie 等（推測）

## 素材(カタログ・写真)

データシートPDF（いずれも公式サイト内）:

- フォークリフト 2026: https://electrovaya.com/wp-content/uploads/2026/01/Electrovaya-Forklift-2026.pdf（未読）
- Robotics/AGV 2026: https://electrovaya.com/wp-content/uploads/2026/01/Electrovaya-Robotics-2026.pdf（未読）
- Walkie 2026-04: https://electrovaya.com/wp-content/uploads/2026/04/Electrovaya-Walkie-202604.pdf（未読）
- 旧 Material Handling 2025-02: https://electrovaya.com/wp-content/uploads/2025/02/Battery-Systems-Datasheet-24.pdf（内容確認済、639KB）
- 旧 24V 2020: https://electrovaya.com/wp-content/uploads/2020/12/24VSystemDatasheet.pdf

画像・ロゴ（URLのみ記録、使用許諾なし）:

- LV: .../uploads/2026/01/2341_cor-24V-LV_620x600.jpg、2340_cor-36V-LV_620x600.jpg、2343_cor-48V-LV_620x600.jpg
- AGV: .../uploads/2026/01/2332_cor-AGV_620x600.jpg
- Walkie: .../uploads/2026/04/34A0055_cor_web_620x600.jpeg ほか
- ロゴ: .../uploads/2025/12/headerlogo.svg、Logo-Black.svg

著作権・利用条件（https://electrovaya.com/terms-of-service/ 、2016年8月更新）:

- 利用は個人または社内目的に限定、他サイト等での商業的・公的利用は書面同意なしでは不可
- 画像は個別規定なく「Content」として同じ制限。商標は許諾なしの使用を禁止（Section 7(c)）
- フッター: 「© 2026 Electrovaya」
- 結論: 文章・写真・ロゴの転載は事前の書面許諾が必要。NALSECサイトでは自社文章での要約にとどめ、画像・ロゴは許諾を得てから使用

## 日本語情報と国内窓口

- 日本語ページ: 確認できず
- 日本の代理店・パートナー: 記載なし。NALSEC への言及もなし
- 日本関連は「Smart Energy Week March 2026」のイベント掲載のみ
- 問い合わせ: https://electrovaya.com/contact/ 、sales@electrovaya.com 、+1.905.855.4610（旧データシート記載）

## 取得メモ

- 取得日: 2026-11-08
- 型番レベルのデータは公式サイトに見当たらない（系統ごとのレンジ表のみ）。「4種」は24V/36V/48V＋AGV＋Walkie の系統と一致しうる（推測）
- 最新PDF3点は取得を試みておらず未読（PDFの本文抽出は旧データシートのみ）。型番・詳細は最新PDFで要確認
- ページ間で数値の不一致あり（サイクル寿命9000+/14,000/15000、保証6/8/10年、充電1時間/1.5時間、セル記述NMC/LFP言及の検索要約）。LFPの記述は検索要約由来で裏取りなし
- HV・BESS・GSEの各ページは未取得
- 会社の本社所在地・創業年は取得できず
