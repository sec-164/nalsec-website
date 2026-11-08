export interface Site {
  name: string;
  tagline: string;
  businessLines: string[];
  address: { postalCode: string; text: string };
  phone: string;
  techSiteUrl: string;
  techSiteLabel: string;
  /** 右下の固定バナー(TechBanner)の短い表示名。 */
  techSiteShortLabel: string;
  /** ヘッダーのナビ。リンク先は src/lib/screens.ts の画面一覧から導く(各 id に属する最初の画面)。 */
  nav: { id: "products" | "services" | "company"; label: string }[];
}

export const site: Site = {
  name: "株式会社NALSEC",
  tagline:
    "蓄電システム・発電機・産業用電池を販売しています。\nエネルギーシステムの知見を活かしています。\n医療機関向けのコンサルティングを行っています。\nIoT システムの構築も行っています。",
  businessLines: [
    "ビジネスディベロップメント",
    "製品販売",
    "医療施設向けコンサルテーション",
  ],
  address: {
    postalCode: "〒160-0017",
    text: "東京都新宿区左門町 13-2-401 小田ビル4F",
  },
  phone: "03-5341-4799",
  techSiteUrl: "https://tech.nalsec.com/",
  techSiteLabel: "バッテリー・電気の技術マガジンサイトをリリース",
  techSiteShortLabel: "技術マガジン",
  nav: [
    { id: "products", label: "製品" },
    { id: "services", label: "サービス" },
    { id: "company", label: "会社情報" },
  ],
};
