"use strict";

const products = [
	{ id: 1, title: 'Notebook', price: 1000 },
	{ id: 2, title: 'Mouse', price: 100 },
	{ id: 3, title: 'Keyboard', price: 250 },
	{ id: 4, title: 'Gamepad', price: 100 }
];

const renderProduct = (title = 'any gadget', price = 0) => {
	return `<div class="product-item">
			<h3>${title}</h3>
			<p>${price}</p>
			<button class="by-btn">Добавить</button>
			</div>`;
};

// const renderProduct = (title = 'any gadget', price = 0) =>
// 			`<div class="product-item">
// 			<h3>${title}</h3>
// 			<p>${price}</p>
// 			<button class="by-btn">Добавить</button>
// 			</div>`;

const renderProducts = (list) => {
	const productList = list.map((item) => {
		return renderProduct(item.title, item.price);
	}).join('');
	document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);