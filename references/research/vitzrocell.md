# VITZROCELL 調査メモ

取得日: 2026-11-08 / 情報源: 公式サイト https://www.vitzrocell.com/en/ （WebFetch 経由の要約。数値は各製品ページ記載のとおり）

## 会社概要

- 社名: VITZRO CELL, Co., Ltd.（表記ゆれ: VITZROCELL、韓国語 비츠로셀）
- 所在地: 韓国。本社・工場は 70, Indeoseupakeu-ro, Hapdeok-eup, Dangjin-si, Chungcheongnam-do（Tel +82-41-332-8642 / Fax +82-41-332-8646）。ソウルオフィスは Neungdong-ro, Gwangjin-gu, Seoul。
- 創業: 1987 年（Company ページ記載）
- 事業: リチウム一次電池が主力。IoT・スマート機器向け電源を供給。製品カテゴリは Lithium Primary / High Temperature / EDLC / Military / Lithium Ion / Lithium Materials / Lithium Ion Capacitor。
- 認証: 会社ページには記載なし。製品ページに UL recognized（File No. MH18384）、RoHS、輸送非制限の記載あり（一次電池）。UN38.3・ISO は今回確認できず。
- 関連サイト（トップに掲載）: VITZROCELL USA、VITZRO TECH、VITZRO MILTECH ほか
- 公式 URL:
  - トップ https://www.vitzrocell.com/en/
  - 会社 https://www.vitzrocell.com/en/sub/sub01_01.php
  - 製品 https://www.vitzrocell.com/en/sub/sub02_01.php?cat_no=29
  - 問い合わせ https://www.vitzrocell.com/en/sub/sub05_02.php

## 製品ライン

重要: 公式サイトの一次電池は **ER 型番ではなく、独自シリーズ名 SB-（Bobbin）/ SW-（Wound）** で掲載。CR は Li/MnO2 として別掲。製品ページの用途はいずれも Smart meters 中心。

### ER 相当（塩化チオニルリチウム一次電池、3.6V）

カテゴリ: https://www.vitzrocell.com/en/sub/sub02_01.php?cat_no=29 （Bobbin=cat_no=36、Wound=cat_no=37）。計 12 型番。
共通: 公称 3.6V、使用温度 -55〜85℃、自己放電 年 1% 未満（20℃）、端子オプション TC / ST / 2P / 3P / 3PW / AX（他は要望により対応）。容量は 2.0V カットオフでの公称値（試験条件を備考に記載）。
サイト内に「ER14505」等の型番は見当たらず、サイズ名（AA、A、C、D）は型番の記号からの対応で、サイズ表記は 推測。寸法は画像のみで数値テキストなし。

**Bobbin（SB 系、低電流・長寿命向け）**

| 型番     | サイズ(推測) | 電圧 | 容量(試験条件) | 使用温度 | 備考                                       |
| -------- | ------------ | ---- | -------------- | -------- | ------------------------------------------ |
| SB-AA02  | AA           | 3.6V | 1.2Ah (1mA)    | -55〜85℃ | 連続 20mA / パルス 50mA / 9.0g。idx=89     |
| SB-AA02P | AA           | 3.6V | 1.2Ah (1mA)    | -55〜85℃ | 連続 20mA / パルス 80mA / 9.0g。idx=88     |
| SB-AA11  | AA           | 3.6V | 2.5Ah (2mA)    | -55〜85℃ | 連続 60mA / パルス 100mA / 16.0g。idx=87   |
| SB-A01   | A            | 3.6V | 3.6Ah (3mA)    | -55〜85℃ | 連続 70mA / パルス 160mA / 24.0g。idx=86   |
| SB-C02   | C            | 3.6V | 8.5Ah (4mA)    | -55〜85℃ | 連続 80mA / パルス 180mA / 51.0g。idx=85   |
| SB-D02   | D            | 3.6V | 19.0Ah (6mA)   | -55〜85℃ | 連続 100mA / パルス 250mA / 100.0g。idx=84 |

**Wound（SW 系、スパイラル、高電流向け）**

| 型番    | サイズ(推測) | 電圧 | 容量(試験条件) | 使用温度 | 備考                                                |
| ------- | ------------ | ---- | -------------- | -------- | --------------------------------------------------- |
| SW-AA01 | AA           | 3.6V | 0.8Ah (1mA)    | -55〜85℃ | 連続 100mA / パルス 300mA / 最大 9.0g。idx=94       |
| SW-AA11 | AA           | 3.6V | 2.0Ah (3mA)    | -55〜85℃ | 連続 250mA / パルス 800mA / 最大 17.0g。idx=93      |
| SW-A01  | A            | 3.6V | 3.0Ah (5mA)    | -55〜85℃ | 連続 600mA / パルス 1,500mA / 最大 30.0g。idx=92    |
| SW-C03  | C            | 3.6V | 6.0Ah (15mA)   | -55〜85℃ | 連続 900mA / パルス 1,800mA / 最大 52.0g。idx=91    |
| SW-D03  | D            | 3.6V | 14.0Ah (20mA)  | -55〜85℃ | 連続 1,800mA / パルス 3,000mA / 最大 102.0g。idx=90 |
| SW-D04  | D            | 3.6V | 14.0Ah (20mA)  | -55〜85℃ | 連続 1,800mA / パルス 3,000mA / 最大 102.0g。idx=83 |

- 製品 URL 形式: `https://www.vitzrocell.com/en/sub/sub02_01.php?mode=view&cat_no=29&idx=<上表のidx>&offset=`
- パルス条件: 0.1 秒パルス、2 分間隔、20℃、ベース電流 10μA、電圧 3.0V 以上。厳しい条件ではコンデンサ併用を推奨との記載。連続電流の上限超は要相談。
- 特長（SB-AA02 ページ）: 動作電圧が高く安定、非可燃の無機電解液、GTM ハーメチック構造、UL（MH18384）、RoHS、輸送制限なし。スマートメータ市場で広く使用、50 か国超に輸出との記載。
- 容量レンジは 0.8Ah〜19.0Ah。NALSEC 既存ページの「1.2Ah–19Ah」とは下限が異なる（SW-AA01 は 0.8Ah。NALSEC 取扱範囲は別と推測）。

### CR（二酸化マンガンリチウム一次電池、3.0V）

カテゴリ: https://www.vitzrocell.com/en/sub/sub02_01.php?cat_no=53 （Li/MnO2 Battery）。3 型番。

| 型番    | サイズ | 電圧 | 容量(試験条件)  | 使用温度 | 備考                                                                 |
| ------- | ------ | ---- | --------------- | -------- | -------------------------------------------------------------------- |
| CR17450 | 17450  | 3.0V | 2,400mAh (10mA) | -30〜60℃ | 連続 1,000mA / パルス 3,000mA / 23.0g / 自己放電 年 2% 未満。idx=163 |
| CR2     | CR2    | 3.0V | 850mAh (10mA)   | -30〜60℃ | 連続 800mA / パルス 2,500mA / 11.5g。idx=162                         |
| CR123A  | 123A   | 3.0V | 1,500mAh (15mA) | -30〜60℃ | 連続 1,000mA / パルス 3,500mA / 16.0g / UL(MH18384)・RoHS。idx=161   |

URL: `...sub02_01.php?mode=view&cat_no=53&idx=<idx>&offset=`。用途は Smart meters。

### 二次電池・LFP の有無

- **LFP（リン酸鉄リチウム）の製品ラインは公式サイトで確認できず。** サイト内検索（vitzrocell.com 限定の WebSearch）でも該当なし。
- 二次電池として存在するのは **Lithium Ion Battery**（カテゴリ https://www.vitzrocell.com/en/sub/sub02_01.php?cat_no=34）。公称 3.7V（LFP の約 3.2V と異なるため LFP ではないと 推測。化学組成はサイト上で明記なし）。ハーメチック（ガラス-金属）封止、再充電可能。

| 型番     | 電圧 | 容量                              | 使用温度 | 備考                                                                  |
| -------- | ---- | --------------------------------- | -------- | --------------------------------------------------------------------- |
| VHC 1520 | 3.7V | 60mAh(3.7V充電) / 90mAh(3.9V充電) | -40〜85℃ | 最大 9.0g、連続 500mA、1 秒パルス 2,000mA、最大充電電流 25mA。idx=119 |
| VHC 1530 | 3.7V | 105mAh / 150mAh(3.9V)             | -40〜85℃ | 最大 11.5g、連続 750mA、パルス 3,000mA。idx=118                       |
| VHC 1550 | 3.7V | 250mAh / 350mAh(3.9V)             | -40〜85℃ | 最大 21.0g、連続 2,000mA、パルス 5,000mA。idx=117                     |
| VLB 1550 | 3.7V | 500mAh(4.1V充電)                  | -40〜85℃ | 最大 21.0g、連続 2,000mA、パルス 5,000mA。idx=116                     |

用途: スマートメータ（AMR）、アセットトラッキング、RFID、通信機器、ETC（VLB は E-call、エナジーハーベスト、メモリバックアップ）。VHC 1520 は寿命目安として常温 3 年で初期容量 80%。

### その他

- EDLC（スーパーキャパシタ, cat_no=31）: VS 標準 2.7V、VH 高温約 85℃、VV 高電圧 3.0V。型番 VSCS / VSCM / VHCS / VHCM / VVCS / VVCM / Lug Module。容量値は一覧に記載なし。
- Lithium Ion Capacitor（cat_no=55）: 「LIC」1 件のみ、仕様欄は 「It's being prepared」で未掲載。ER との組合せ訴求は確認できず。
- High Temperature Battery（cat_no=30）: DD-HR 100 など 12 件以上（AMR 向け高温用。詳細未取得）。
- Military（cat_no=32）、Lithium Materials（cat_no=35）: 詳細未取得、NALSEC 扱い対象外と推測。

## 素材(カタログ・写真)

- カタログ: 「Lithium Primary Battery catalog」は JavaScript (`catalog_download('13')`) 経由で直リンク不明。直リンクが確認できたのは SW-D03 / D04 用 PDF のみ: https://www.vitzrocell.com/uploaded/category/category2_b7d6e5f75063d40319132779b409a1280.pdf （未ダウンロード、内容未確認）。EDLC・Military のカタログも同様に JS 経由。
- 製品写真（相対パス、ドメインは vitzrocell.com）: SB-AA02 `/uploaded/product/89/620cdff6b38298b2601ae5d8d20bce340.jpg`、SW-D03 `/uploaded/product/90/ba11c92f16382cf53a35f7dfd65ea73c0.jpg`、CR123A `/uploaded/product/161/5e5e22cf7e7f2262d1ce83393f0b1f390.jpg`。寸法図は `/uploaded/webedit/` 配下の画像。
- ロゴ: 直リンク未取得。会社ページの CI 項目（sub01_01 系）に掲載と推測。
- 著作権: フッターに「COPYRIGHT (C) VITZRO CELL. ALL RIGHTS RESERVED.」のみ。再利用規約は見当たらず、文章・写真・図面の転載には事前許可が必要と判断する。
- Media & Resources（https://www.vitzrocell.com/en/sub/sub05_03.php）は紹介動画 2 件と会社案内誌のみ。

## 日本語情報と国内窓口

- 日本語ページ: なし（言語切替は KR / EN のみ）。
- 日本の代理店・パートナー: トップ、PR ページに記載なし。NALSEC の言及もなし。
- 問い合わせ窓口は本社の Contact Us フォームと電話のみ。

## 取得メモ

- 取得日: 2026-11-08。ツールは WebFetch / WebSearch のみ（内蔵ブラウザ不使用）。
- 取得失敗 URL: なし。ただし WebFetch は小型モデルによる要約のため、数値は原文との照合を推奨。
- 未確認: サイズ寸法（画像のみ）、各製品の ER 型番との対応、UN38.3 / ISO 認証、カタログ PDF の中身、High Temperature の仕様、ESG 認証ページ、ロゴ直 URL。
- 一覧は Lithium Primary 全 15 件（12 + 3）。Li-ion 4 件。SW-D03 と SW-D04 は同一仕様で差異不明。
- 製品ページ冒頭のカテゴリは cat_no=29 と 36/37/53 の複数経路で同一製品が表示される。
