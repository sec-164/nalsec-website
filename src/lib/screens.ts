// トップページの画面一覧(並び順)の唯一の定義。
// index.astro のセクションと、Base.astro のヘッダー(進捗バー・ナビのリンク先・現在位置)の両方がここから作られる。
import { getCollection } from "astro:content";
import { site } from "../data/site";

export type NavId = (typeof site.nav)[number]["id"];

export type Screen = {
  id: string;
  label: string;
  /** ヘッダーの見出し帯に出す短い名前(series / services の short。なければ title) */
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
      label: "会社情報",
      short: "会社情報",
      nav: "company",
      group: null,
    },
  ];
}

// ナビ項目のリンク先 = その項目に属する最初の画面。どのページからも同じ "/#id"
// (トップページ上では同一文書内の移動になる。ヘッダー内の "#..." リンクは進捗バーだけにしておく)。
export function navHref(screens: Screen[], navId: NavId) {
  const first = screens.find((s) => s.nav === navId);
  if (!first) throw new Error(`nav "${navId}": 対応する画面がない`);
  return `/#${first.id}`;
}
