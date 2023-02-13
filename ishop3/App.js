import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

let shopTitle = 'Интернет-магазин техники iShop';
let shopCurrency = ' руб.';
let itemRemoveText = 'Удалить';
let shopListHead = [
    {code: 1, title: 'Наименование'},
    {code: 2, title: 'Цена'},
    {code: 3, title: 'Изображение'},
    {code: 4, title: 'Остаток на складе'},
    {code: 5, title: 'Действия'},
];
let shopList = require('./products.json');

ReactDOM.render(
    React.createElement(Shop, {
        title: shopTitle, 
        currency: shopCurrency, 
        listHead: shopListHead, 
        list: shopList,
        removeText: itemRemoveText,
    }),
    document.getElementById('container')
);