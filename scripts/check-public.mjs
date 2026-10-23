import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// 公開ディレクトリに内部資料やMacの補助ファイルが混ざった場合はビルドを止める。
const publicRoot = fileURLToPath(new URL("../public/", import.meta.url)); // 公開ファイルの保存先
const blocked = []; // 公開してはいけないファイルの一覧
async function inspect(directory, relative = "") {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const name = `${relative}${entry.name}`; // 公開先での相対パス
    if (entry.isSymbolicLink() || entry.name.startsWith(".") || /\.(?:md|map|log|pem|key|bak|sql|sqlite|db)$/i.test(entry.name)) {
      blocked.push(name);
    } else if (entry.isDirectory()) {
      await inspect(`${directory}/${entry.name}`, `${name}/`);
    }
  }
}
await inspect(publicRoot);
if (blocked.length) throw new Error(`公開対象外のファイルがあります: ${blocked.join(", ")}`);
console.log("公開ファイル検査: 問題なし");
