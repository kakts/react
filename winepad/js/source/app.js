'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Excel from './components/Excel';

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');

if (!headers) {
  headers = ['タイトル', '年', '評価', 'コメント'];
  data = [['テスト', '2015', '3', 'あああ']];
}
ReactDOM.render(
  <div>
    <h1>
      <Logo /> winepadにようこそ！
    </h1>
    <Excel headers={headers} initialData={data} />
  </div>,
  document.getElementById('pad')
);
