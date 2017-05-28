'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classification = require('./classification');

var _classification2 = _interopRequireDefault(_classification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  id: 'name',
  label: '名前',
  show: true,
  sample: '２ドルのジャック',
  align: 'left'
}, {
  id: 'year',
  label: '名前',
  type: 'year',
  show: true,
  sample: 2015
}, {
  id: 'grape',
  label: 'ぶどう',
  type: 'suggest',
  options: _classification2.default.grapes,
  show: true,
  sample: 'メルロー',
  align: 'left'
}, {
  id: 'rating',
  label: '評価',
  type: 'rating',
  show: true,
  sample: 3
}, {
  id: 'name',
  label: '名前',
  show: true,
  sample: '２ドルのジャック',
  align: 'left'
}];