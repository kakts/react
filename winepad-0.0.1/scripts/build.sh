# jsのトランスパイル
babel --presets react,es2015 js/source -d js/build
# jsのパッケージング
browserify js/build/app.js -o bundle.js
# cssのパッケージング
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
date; echo
