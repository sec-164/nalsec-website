# 現行 nalsec.com のビジュアル言語

出典: 旧 Next.js ソース(コミット 89a58ce の `src/`, `tailwind.config.js`)と、公開サイトの CSS(`/_next/static/css/07ae882e9b274e31.css`)。コードではなく雰囲気を引き継ぐための記録。

## 全体の雰囲気

- 黒地に白文字だけで構成された、写真主体の没入型サイト。装飾色はなく、色の情報は背景写真が担う。
- 1 項目につき背景写真を画面全面(100lvh)に固定して敷き、スクロールで文字がフェードしながら次の写真へ切り替わる。
- 主役は英字ロゴ「NALSEC」(白、横長 SVG)と、製品名を 48〜60px の太字で置く見出し。本文は小さく、余白が大きい。
- 見出し下の細い白線(hr)が横へ伸びる演出と、フェード+スライドの入場が静かなトーンをつくる。
- トップは装飾が最小限で、サービス詳細ページの本文だけ半透明の白いパネルに切り替わる。

## 色

- ページ背景: `bg-black` = `#000000`(body)。
- 文字: ヒーロー・目次・フォームはすべて `text-white`(`#FFFFFF`)。詳細ページ本文パネル内はデフォルトの黒文字。
- 背景写真の暗幕(StickyBgContainer): `bg-gradient-to-b from-black/40 via-black/60 to-black/60`。縦グラデーションで上 40% → 中・下 60% の黒。
  - この暗幕の不透明度は `(100 - darkenOpacity)/100`。`darkenOpacity` は CMS 値(未設定は 0 = 暗幕 100%)。
  - トップのヒーローと会社情報は `darkenOpacity=100` 固定 = 暗幕 0%(写真をそのまま見せる)。サービス項目は CMS 値で、確認できたのは 50(暗幕 50%)が 1 件、他は未設定 = 0。
- スクロール時の追加暗転: `rgba(0,0,0, bottom*0.8)`(最大 0.8、下記「動き」参照)。
- 目次オーバーレイ: `bg-gradient-to-r from-black/80 via-black/90 to-black/80`、角丸 `rounded-md`。ハンバーガーの背後に `from-black/20` の放射グラデーションで視認性を補助。ハンバーガー色 `#FFFFFF`。
- 「詳細を見る」: 白文字・白の 1px 枠(`border` + `border-color: currentColor`)・`rounded-md`、背景なし。リンク色の指定なし。
- TechNalsec バナー: `bg-white/60` の白パネル、`rounded-md`、文字は黒系。
- お問い合わせ: 背景 `bg-black/20` + `backdrop-blur`(下の写真がぼかされて透ける)。入力欄 `bg-black/40`、枠 `0.5px solid white/80`、角 `rounded-sm`。エラー `text-red-200`。送信ボタン `bg-white/20` + 白枠 `rounded`。
- フッター: `bg-white`、黒文字 `text-sm`、中央揃え(唯一の白ベタ)。
- 詳細ページ本文パネル: `bg-white/80`、角丸 `rounded-[20px]`。幅 lg 以上は左右が白→透明に溶けるグラデーション(800px 幅の中央のみ不透明)。本文リンク `text-blue-600 underline`(唯一の彩色)。
- アクセントカラーは存在しない。

## タイポグラフィ

- Google Fonts: `https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;700&family=Montserrat:wght@400;700&display=swap`(preconnect あり)。
- `body { font-family: "Montserrat", "M PLUS 1p", sans-serif }`。ラテン文字は Montserrat、Montserrat にない日本語は M PLUS 1p にフォールバックする方式。ウェイトは 400 と 700 のみ。
- `<html lang="ja">`。
- 見出し(製品名・ヒーロー): `text-5xl font-bold`(48px / line-height 1)、`lg`(1024px〜)で `text-6xl`(60px)。letter-spacing の指定なし(既定)。
- お問い合わせ見出し: `text-2xl`(24px)、中央、`mb-8`。詳細ページ本文の見出し: `text-2xl leading-none`、下線 `border-b`、`pt-8 pr-8 pb-2`。
- 本文: 既定サイズ(16px)で `leading-loose`(line-height 2)。目次メニュー: `text-xl`(20px)、項目間 `space-y-4`。フッター: `text-sm`。
- 太字は 700 のみ、斜体なし。

## レイアウトと構造(トップページ)

並び順: 目次(固定)→ TechNalsec バナー(固定)→ ヒーロー → サービス項目 ×5(現行公開)→ 会社情報 → お問い合わせ → フッター。

- ブレークポイントは Tailwind 標準 md=768 / lg=1024 / xl=1280px。左右余白 `px-[20px]`。コンテンツ最大幅 800px(`max-w-[800px]`、lg 以上のヒーロー・会社情報は全幅の横並び)、フォームは `max-w-[600px]`。
- 共通ブロック(ヒーロー・各サービス・会社情報): 高さ `200lvh`。内部に `sticky top-0` の領域があり、その中の文章ブロックは `min-height: 100svh`(`min-h-screen-small`)で縦中央寄せ。背景写真は `sticky top-0` の `100lvh` で全項目に敷く。1 項目あたり実質 200lvh(2 画面分)のスクロール量。
- ヒーロー: 画面の縦中央寄せ。ロゴ幅は `80lvmin`(モバイル)→ `50lvmin`(md)。lg 以上は「ロゴ | 縦線 | 説明文」の横並び(ロゴとの間 `mr-16`、縦線は高さ `h-32`、`border-r-4`)。それ未満は縦積みで、ロゴの下に太さ 4px の横線(`border-t-4`、幅はロゴと同じ)。説明文は `leading-loose`、`pt-2`。h1 は NALSEC ロゴ(ヒーローのみ)。
- サービス項目: 左寄せ、`max-w-[800px]`、`py-16`。見出し(製品名)+下線 `border-t-2`(見出しの下 `mt-6`)+ 短い説明文。リンクが有る場合、説明文は高さ `12rem` で下方向へ `linear-gradient(white → transparent 6rem)` のマスクで消し、その上に「詳細を見る」を中央配置(`absolute left-1/2 top-24`、`px-4 py-2`、`rounded-md border`)。
- 会社情報: ヒーローと同構造で、ロゴ幅 `60lvmin`(モバイル)→ `40lvmin`(md)。ロゴの横または下に区切り線、会社概要テキスト。「会社情報」という見出し文字は無く、ロゴ自体が見出しの役割。
- お問い合わせ: `min-h-screen-small`、`py-32`、縦中央。ラベルは入力欄の上、`space-y-4`。必須は `*`(`text-xl` の上付き)。送信ボタンは中央。
- フッター: 白帯、`py-8`、コピーライト 1 行のみ。
- 固定 UI: 目次はビューポート四隅に `inset-2`(md `inset-4`、lg `inset-8`)で右上。TechNalsec は右下に `w-64`(md `w-96`)、`right/bottom 4`(md 8)。
- 詳細ページ: 先頭に同じ背景+ヒーロー(`min-h-screen-small`)、次に白半透明の本文パネル(lg 以上は左 240px の目次列+本文 800px)、続いてお問い合わせ、フッター。

## 動き

- キーフレーム(Tailwind 設定): `fadein`(opacity 0→1)、`slidein`(translateY 4rem→0)、`slidein-from-left`(translateX -4rem→0)。
  - `animate-fadein` = 0.5s linear。`animate-fade-slidein` = fadein 0.5s linear + slidein 0.5s ease-out。lg の説明文は `fade-slidein-from-left`(横から)。
- ヒーロー: ロゴは fadein(0.5s)。区切り線は `expand-title-underline`(scaleX 0→110%)を duration 1000ms / delay 500ms で伸ばす。lg 以上は縦線が `expand-title-sideline`(scaleY 0→100%)、同じく 1000ms / 500ms。説明文は delay 500ms の fade-slidein。`animation-fill-mode: both` を全要素に付与。
- サービス見出し(HeroArea): fade-slidein、下線は 1000ms / 500ms で伸びる。説明文は 500ms 遅れ。
- 詳細ページ本文パネル: `animate-slidein` + delay 1500ms で、ヒーロー後に下から登場。目次リンクは hover で `opacity-50`。目次クリック時は対象見出しが `animate-pulse`(500ms、1.5 秒後に解除)。
- スクロール連動(`useIntersection`): requestAnimationFrame で毎フレーム、各項目(200lvh ブロック)の top/bottom を画面高さで正規化して計算し、スタイルを直接書き換える。
  - 項目が上へ抜ける側(`top<0`): `opacity = top*2+1`(スクロール 0.5 画面分で 0 になる)、`translateY = top * -20 * lvh` px(上へ消える)。
  - 項目が下から入る側(`bottom>0`): `opacity = 1 - bottom`、`translateY = bottom * 40 * lvh` px(下から浮上)。中間では opacity 1 / translateY 0。
  - 同ブロックの背景色: `rgba(0,0,0, bottom*0.8)`(入ってくる間だけ最大 0.8 の黒で写真を沈ませる)。
- 背景写真は `sticky` で固定され、手前の文章だけがスクロールする(視差に近い見え方)。
- 目次: 右上のハンバーガー(hamburger-react、白)。開くと `transition duration-500` で `translate-x-[10%]→0`・opacity 0→1。lg 以上は右側の幅 `32rem` のパネル、小画面は `inset` 全面。中身はサービス名の縦リスト(`space-y-4`)、`w-64` の区切り線、「会社情報」「お問い合わせ」。選択で `window.scrollTo(... smooth)` して閉じる。
- `prefers-reduced-motion` への配慮は、ライブ CSS に `motion-safe:transition-opacity`(詳細ページの目次リンク)以外見当たらない。

## 画像の使い方

- 背景写真は CMS(microCMS)の `backgroundImage` で、項目ごとに 1 枚。`fill="cover"` で 100lvh 全面に敷き、`alt=""`(装飾扱い)。ヒーローと会社情報にも各 1 枚(同一の `main.backgroundImage` を使用)。
- 暗幕: 上記グラデーション(40→60→60%)を CMS の `darkenOpacity` で調整。写真の上に白文字を載せる前提で、写真は暗めに処理される。
- 詳細ページの製品写真: 本文 HTML 内の `<img>` を `mx-auto` で中央配置。幅・高さは URL の `w`,`h` クエリから取得して指定。iframe(動画等)は `aspect-ratio` で保持し `max-w-full`。画像は白半透明パネルの上に載るので、製品写真は明るい地を想定。
- Safari 用に `img[loading=lazy]` へ `clip-path: inset(0.6px)` の補正を入れている。
- TechNalsec: `/TechNalsec.svg` を右下固定の白 60% パネルに置いた外部リンク(`tech.nalsec.com`、`target=_blank`)。md 以上のみ上に「バッテリー・電気の技術マガジンサイトをリリース」(`text-sm`)を表示。
- ロゴ: インライン SVG(`viewBox 0 0 1000 250`)、塗りは白(`#FFFFFF`)に切り替え可能。

## 引き継ぐ価値のある要素 / 見直したい要素

引き継ぐ価値のある要素:

- 黒+白のみの抑えた配色と、写真に色を語らせる構成。製品・設備の現場感が出る。
- 英字ロゴ NALSEC を大きく見せる冒頭と、ロゴ横の縦線(lg)・下の横線(モバイル)が伸びる入場演出。
- 太字 48〜60px の製品名+その下の細線という、統一された見出しの型。
- 本文 `leading-loose`(行間 2)と大きな余白による読みやすさ。
- Montserrat(欧文)+M PLUS 1p(和文)の組み合わせと、ウェイトを 400/700 の 2 つに絞る節度。
- 説明文を下方向へマスクで消してから「詳細を見る」へ誘導する、最小限の導線。
- 詳細ページの、写真の上に半透明の白パネルを重ねる読み物レイアウトと、横スクロールの章目次(モバイル)/左固定目次(lg)。

見直したい要素:

- 1 項目 200lvh は長すぎる。製品が増えるとスクロール量が膨大になり、全体を把握しにくい(トップだけで 8 画面超)。
- 毎フレームの JS でスタイルを書き換えるスクロール連動は重く、スクロールジャック的な体験で、ブラウザのスクロール復元・アンカーとも相性が悪い。`prefers-reduced-motion` への配慮もない。
- ヒーロー/会社情報で同じ見出しスタイルを `h1` として複数使い、ページに h1 が計 8 個(会社情報とお問い合わせも h1)。見出し階層と SEO・アクセシビリティが整理されていない。ヒーローのロゴ(SVG)の h1 には代替テキストもない。
- 背景写真がすべて `alt=""`、白文字の可読性が写真と暗幕設定(CMS の darkenOpacity)に依存し、項目ごとにばらつく。
- 目次がハンバーガーのみで、製品一覧・会社情報・連絡先へ辿り着きにくい。常設のナビやヘッダーがない。
- 右下固定の TechNalsec バナーが常時表示され、小画面で写真・文章に被る。
- 製品カテゴリや仕様の比較ができない(1 項目 1 画面の演出が情報量を制限)。
- 下に連なるフォームの背景ブラー、フッターの白ベタなど、黒基調に対して終端だけが急に明るく浮く。
