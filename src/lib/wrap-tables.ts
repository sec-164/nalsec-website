// Markdown 本文の <table> を <div class="table-wrap"> で包む。
// 幅の広い仕様表はページを広げず、この枠の中だけで横スクロールさせる(global.css の .content .table-wrap)。
export function wrapTables(html: string): string {
  return html
    .replace(/<table\b/g, '<div class="table-wrap"><table')
    .replace(/<\/table>/g, "</table></div>");
}
