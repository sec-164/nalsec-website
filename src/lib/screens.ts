// トップページの画面一覧(並び順)の唯一の定義。
// index.astro のセクション、右端のセクションナビ(SectionNav.astro)、ヘッダーのナビのリンク先がすべてここから作られる。
import { getCollection } from "astro:content";
import { site } from "../data/site";

const companyLabel = site.nav.find((n) => n.id === "company")!.label;

export type NavId = (typeof site.nav)[number]["id"];

export type Screen = {
  id: string;
  label: string;
  /** セクションナビ(SectionNav.astro)でグループ見出しの下に出す短い名前(series / services の short。なければ title)。
   *  グループの画面が 1 枚だけのときは使わず、グループ名(site.nav の label)を出す。 */
  short: string;
  nav: NavId | null;
  group: string | null;
};

// ヒーロー → 製品シリーズ(order 順) → サービス(order 順) → 会社情報
export async function getScreens(): Promise<Screen[]> {
  const series = (await getCollection("series")).sort(
    (a, b) => a.data.order - b.data.order,
  );
  const services = (await getCollection("services")).sort(
    (a, b) => a.data.order - b.data.order,
  );
  return [
    { id: "hero", label: "トップ", short: "トップ", nav: null, group: null },
    ...series.map((s) => ({
      id: s.id,
      label: s.data.title,
      short: s.data.short ?? s.data.title,
      nav: "products" as const,
      group: s.data.categoryLabel,
    })),
    ...services.map((s) => ({
      id: s.id,
      label: s.data.title,
      short: s.data.short ?? s.data.title,
      nav: "services" as const,
      group: null,
    })),
    {
      id: "company",
      label: companyLabel,
      short: companyLabel,
      nav: "company",
      group: null,
    },
  ];
}

// ナビ項目のリンク先 = その項目に属する最初の画面。どのページからも同じ "/#id"
// (トップページ上では同一文書内の移動になる)。
export function navHref(screens: Screen[], navId: NavId) {
  const first = screens.find((s) => s.nav === navId);
  if (!first) throw new Error(`nav "${navId}": 対応する画面がない`);
  return `/#${first.id}`;
}
