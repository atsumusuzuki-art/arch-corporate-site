#!/bin/zsh -l
# ARCH 公式サイト：確認用ローカルサーバーを起動する（本番公開はしない）
# Finder でダブルクリックすると、ターミナルが開いて http://localhost:3000 で確認できます。
# 止めるときは、このターミナルで control + C を押すか、ウィンドウを閉じてください。

[ -f "$HOME/.zshrc" ] && source "$HOME/.zshrc" >/dev/null 2>&1
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" >/dev/null 2>&1

cd "$(dirname "$0")/.." || exit 1
echo "────────────────────────────────"
echo " ARCH 確認用サーバーを起動します"
echo " フォルダ: $(pwd)"
echo "────────────────────────────────"

if ! command -v npm >/dev/null 2>&1; then
  echo "Node.js（npm）が見つかりません。Node.js をインストールしてから再度実行してください。"
  read -k 1 "?何かキーを押すと閉じます"
  exit 1
fi

# 外付けSSD（exFAT）では macOS が "._" ファイルを作り、Turbopack のキャッシュが壊れて起動できないため、
# 確認用サーバーは webpack で起動する（本番ビルドには影響しない）
npx next dev --webpack -p 3000
