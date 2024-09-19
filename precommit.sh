# pnpm run lint:fix でフォーマットエラーがある場合、エラーを出力してフォーマットを修正する
pnpm run lint:fix
if [ $? -ne 0 ]; then
    echo "フォーマットエラーがあります。"
    pnpm run lint:fix
    echo "フォーマットを修正しました。"
    echo "再度コミットしてください。"
    exit 1
fi