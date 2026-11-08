# PBM (Sunlight Group) 調査メモ

調査日: 2026-11-08 / 対象: https://pbm.sunlight-group.com/en/

## 会社概要

- 名称: PBM srl（サイト上は「PBM S.R.L.」表記も）。イタリアの産業用バッテリー充電器メーカー。トップページに「Innovating Battery Chargers Since 1973」とある。
- 創業: 1973年（トップ・About us）。所在地: Sunlight Group 側ページでイタリア・Vignola（ヴィニョーラ）と記載（検索結果の要約より。PBM 自身の About us には所在地記載なし）。
- Sunlight Group との関係: 2022年4月に Sunlight Group（本社ギリシャ・アテネ、エネルギー貯蔵）傘下に入った。検索要約では「80% を取得」。PBM は Sunlight のチャージャー部門ブランドの位置づけ。
- 規模: 従業員80名以上、製品25種以上（About us）。
- 認証: DIN EN ISO 9001:2015、ISO 14001:2015、ISO 45001:2018。RoHS III / REACH の適合宣言あり。
- 製品カテゴリ: 鉛蓄電池用充電器、リチウムイオン用充電器、放電器・再生装置、モニタリング・アクセサリ。
- 公式URL:
  - https://pbm.sunlight-group.com/en/ （トップ）
  - https://pbm.sunlight-group.com/en/about-us
  - https://pbm.sunlight-group.com/en/products
  - https://www.sunlight-group.com/en/products/solutions/chargers/ （Sunlight 側の充電器紹介）
  - https://www.sunlight-group.com/en/companies/pbm-srl/

## 製品ライン

サイト上の分類は「50/60 Hz Range」「High Frequency Range」「Onboard」。「Stationary」という語は使われていない（下記の「定置式」は NALSEC 区分に合わせた推測）。一覧は鉛蓄電池用ページ（/en/lead-acid-chargers、21機種）とリチウム用ページ（/en/lithium-ion-charger、8機種）。機種ページは `https://pbm.sunlight-group.com/en/<スラッグ>`。一覧ページには仕様なし。機種ごとのページに仕様あり（取得できたものを下記に記録）。

### 車載型（サイト分類: Onboard）

NALSEC の「4種以上」に対し、サイト上の Onboard は HF799 / HF1000 / HF1400 の3シリーズ。4種目は不明（推測: 電圧違いのバリエーションを数えている可能性。未確認）。

共通: IP65、リチウムイオンおよび鉛（液式・AGM・ゲル）対応、通信は USB ホストポート（充電履歴データのダウンロード、ソフト更新）。3機種は同一説明文のシリーズ。リチウム用 CAN 通信の記載は車載型ページでは確認できず。

| 型番   | 入力                                                                    | 出力                                           | 寸法/重量                            | 備考                                                          |
| ------ | ----------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------ | ------------------------------------------------------------- |
| HF799  | 100–240 Vac, 50–60 Hz。最大入力電流 8.5 A@110 V / 4 A@230 V             | 最大 27 A @ 28.2 V。6/12/24 V 電池向けに調整可 | W178.5 × D260 × H94 mm。重量記載なし | 使用温度 -20〜+45 °C。効率の記載なし。URL: /en/hf799          |
| HF1000 | 100–240 Vac。13 A max@110 V / 6 A max@230 V。力率 0.99（アクティブPFC） | 12 V/30 A、24 V/30 A、36 V/20 A、48 V/15 A     | 225 × 105 × 280 mm、4.6 kg           | 効率 92%（230 V入力・48 V出力）。-25〜+50 °C。URL: /en/hf1000 |
| HF1400 | 100–240 Vac ±10%, 50–60 Hz。13 A max@110 V / 6 A max@230 V。力率 0.99   | 12 V/45 A、24 V/45 A、36 V/32 A、48 V/25 A     | 225 × 105 × 280 mm、4.6 kg           | 効率 92%（230 V入力・48 V出力）。-25〜+50 °C。URL: /en/hf1400 |

機能: 均等・保守充電カーブ、稼働時間タイマー、エラー記録、リアルタイム表示、ファン速度制御、過負荷遮断・ヒューズ保護。用途の明記なし（「過酷な環境向け」という趣旨の記述のみ）。

### 定置式（サイト分類: 50/60 Hz Range と High Frequency Range。推測で定置式に区分）

NALSEC の「4種以上」に対し、サイト上は鉛用で下記計約18機種（ファミリ単位）。以下は仕様ページを取得できたもの。

| 型番                       | 入力                                                            | 出力電圧                              | 出力電流           | 備考                                                                                                                                                          |
| -------------------------- | --------------------------------------------------------------- | ------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SE（50/60 Hz、トランス式） | 単相 230 VAC 50/60 Hz、または三相 230/400 VAC。特殊電圧は要相談 | 24/36/48/72/80 VDC                    | 記載なし           | 鉛牽引用電池。WA特性、充電 9–11時間（導入文は9–12時間）。CE。ケーブル付属。/en/se                                                                             |
| HE 20 / HE 30（高周波）    | 単相 230 Vac ±10%, 50–60 Hz                                     | 記載なし                              | 記載なし           | 効率最大95%、アクティブPFC、全電池対応（リチウム含む）、リチウム向けCAN通信オプション、壁掛け、200(L)×365(H)×145(W) mm、-10〜+45 °C、RAL9010。/en/he-20-he-30 |
| HF9 MULTITENSION           | 三相 400 VAC ±10%（標準）。230/440/480 VAC は要望対応           | 2〜120 V 対応（箇条書きでは 2〜96 V） | 最大 80 A          | 9/12/16 kW。充電曲線8種（鉛・ゲル・AGM・NiCd・LiPo・脱硫化）。LCD表示。/en/hf9-multivoltage                                                                   |
| HF12                       | 三相 400 Vac ±10%                                               | 記載なし                              | 調整可（範囲なし） | 最大9 kW、効率最大90%、充電曲線8種、オートスタート選択。/en/hf12                                                                                              |
| HFModular                  | 三相                                                            | 記載なし                              | 記載なし           | 6 kW / 10 kW モジュールを並列、最大40 kW。効率最大94%、PFC、鉛（標準・GEL）・リチウム対応。/en/hfmodular                                                      |

仕様ページ未取得（一覧上の名称のみ）:

- 50/60 Hz Range: XS、TL EQUALIZER、TL EQUALIZER (UL)、POKER、POWER POINT、STAR、ENERPOWER、ENERPULSE
- High Frequency Range: HFModular IP54、HE 40 / HE 50 / HE 60、HF5、HF6、HF12 IP54
- スラッグ例: /en/xs /en/star /en/hf5 /en/hf6 /en/hf12-ip54 /en/hfmodular-ip54 /en/he-40-he-50-he-60 /en/enerpower /en/enerpulse /en/tl-equalizer /en/poker-ul /en/power-point-ul

### その他

- 放電器・再生: https://pbm.sunlight-group.com/en/dischargers-battery-regeneration （未取得）
- モニタリング・アクセサリ: https://pbm.sunlight-group.com/en/monitoring-systems-accessories （未取得）
- Sunlight 側の充電器ページでは別名のライン（PowerBox Core / Industrial / Modular、TriCOM ion）が挙がる（検索要約）。PBM のモデル名との対応は不明。

## 素材(カタログ・写真)

- データシート: 各機種ページに「HF1000_GB pdf」「HF1400_GB pdf」「HFModular_EN pdf / _IT pdf」「HF9_MULTITENSION_GB pdf」「SE_GB pdf」「HF12_GB pdf」「HE 20 / HE 30 pdf」というリンクラベルがあるが、取得ツールの出力に実URLが出ず、PDF URLは未確認。総合カタログ・ブローシャの記載は未確認。ブラウザで各ページを開いてリンクを取得する必要あり。
- 画像（datocms-assets、公式サイトのもの。再利用不可前提）:
  - HF799: https://www.datocms-assets.com/97697/1719565541-hf799_ul.png
  - HF1000: https://www.datocms-assets.com/97697/1719565686-hf1000_ul.png
  - HF1400: https://www.datocms-assets.com/97697/1719565875-hf1400_ul.png
  - HE20: https://www.datocms-assets.com/97697/1719564850-he20_ul.png
  - HF9: https://www.datocms-assets.com/97697/1719565236-hf9_multi_ul.png
  - SE: https://www.datocms-assets.com/97697/1719567446-se.png
  - HF12: https://www.datocms-assets.com/97697/1715678399-hf12.png
  - HFModular: https://www.datocms-assets.com/97697/1747986952-hfm-edited.png
  - PBM ロゴ: https://www.datocms-assets.com/97697/1680613392-pbm-light.svg
  - Sunlight ロゴ: https://www.datocms-assets.com/97697/1680528388-logo.png
- 利用条件（https://pbm.sunlight-group.com/en/terms-of-use）: サイトの内容（画像・コード含む）は Sunlight Group またはグループ会社の知的財産。サイトの利用は「個人的・情報目的・非商用」に限る。無許諾での商用複製・営利目的の頒布は禁止。画像は「indicative only」。その他の依頼は info@gruppopbm.it へ連絡とある。
- 結論: 文章・写真・ロゴの転載は許諾が必要。NALSEC サイトで使うなら PBM（または国内代理店ルート）への書面確認が前提。コピー可否はこのメモに基づく推測ではなく、条項の文言どおり。

## 日本語情報と国内窓口

- サイトは英語のみ（言語切替なし）。日本語ページは確認できず。
- About us に代理店・日本への言及なし。NALSEC への言及も未確認（調査範囲では見つからず）。
- 連絡先: info@gruppopbm.it（利用規約ページ記載）。/en/contact は未取得。

## 取得メモ

- 取得日: 2026-11-08。WebFetch と WebSearch（公式ドメイン限定）のみ使用。
- 取得できたページ: トップ、/products、/lithium-ion-charger、/lead-acid-chargers、/terms-of-use、/about-us、機種ページ（hf799、hf1000、hf1400、hfmodular、hf9-multivoltage、se、he-20-he-30、hf12）。失敗URLなし。
- 未取得: 上記「仕様ページ未取得」の機種、/contact、/dischargers-battery-regeneration、/monitoring-systems-accessories、Sunlight 側ページの本文。
- 不明点: PDF 実URL、本社所在地の PBM 公式記載、「車載型4種」「定置式4種」の NALSEC 側数え方との対応、HF799 の出力が 28.2 V となっている点（6/12/24 V 向け。HF799 ページは HF1000/1400 と共通文面の可能性があり値の帰属に注意）。
- HF799 / HF1000 / HF1400 の出力値は取得ツールの要約を経由しているため、掲載前に原ページで再確認すること。
