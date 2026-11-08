export interface Site {
  name: string;
  tagline: string;
  businessLines: string[];
  address: { postalCode: string; text: string };
  phone: string;
  techSiteUrl: string;
  techSiteLabel: string;
}

export const site: Site = {
  name: "株式会社NALSEC",
  tagline:
    "蓄電システム・発電機・産業用電池の販売と、エネルギーシステムの知見を活かした医療機関向けのコンサルティング、IoTシステムの構築を行っています",
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
};
