# 以前のバージョンのクリーンアップ
rm -rf __deployme
mkdir __deployme

# ビルド
sh scripts/build.sh

# js minify
uglify -s bundle.js -o __deployme/bundle.js
# css minify
cssshrink bundle.css > __deployme/bundle.css

# copy
cp index.html __deployme/index.html
cp -r images/ __deployme/images/

date; echo;
