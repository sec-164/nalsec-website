// 背景写真の割り当て。いずれも現行サイトからの暫定流用(docs/content/assets.md)。
// bright: 空や白衣など明るい写真。暗幕を 1 枚足して白文字のコントラスト(4.5:1)を確保する。
import type { ImageMetadata } from "astro";
import hero from "../assets/legacy/hero.jpg";
import forkliftWarehouse from "../assets/legacy/forklift-warehouse.jpg";
import switchboard from "../assets/legacy/switchboard.jpg";
import essContainer from "../assets/legacy/ess-container.jpg";
import batteries from "../assets/legacy/batteries.jpg";
import medical from "../assets/legacy/medical.jpg";

export interface Background {
  src: ImageMetadata;
  bright?: boolean;
}

export const heroBackground: Background = { src: hero };
export const serviceBackground: Background = { src: medical, bright: true };

// series コレクションの id → 背景写真。未登録はヒーロー写真で代用する。
const seriesBackgrounds: Record<string, Background> = {
  "xnergy-wireless": { src: forkliftWarehouse },
  "pbm-chargers": { src: switchboard },
  "bslbatt-lfp": { src: essContainer, bright: true },
  "vitzrocell-primary": { src: batteries },
  electrovaya: { src: forkliftWarehouse },
};

export const seriesBackground = (id: string): Background =>
  seriesBackgrounds[id] ?? heroBackground;
