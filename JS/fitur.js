// fitur hamburger-menu

var menuList = document.getElementById('menuList');

menuList.style.maxHeight = '0px';

function togglemenu() {
	if (menuList.style.maxHeight == '0px') {
		menuList.style.maxHeight = '130px';
	} else {
		menuList.style.maxHeight = '0px';
	}
}

//fitur hide content

var link = document.getElementById('myLink');
var image = document.getElementById('myImage');

link.addEventListener('click', function () {
	if (image.style.display === 'none') {
		image.style.display = 'block';
	} else {
		image.style.display = 'none';
	}
});

//fitur detail produk

function open_box(productId) {
	console.log('Munculkan box for product ' + productId);
	let buybox = document.getElementById(productId).querySelector('.buy-box');
	buybox.style.display = 'block';
}

function close_box(productId) {
	console.log('Tutup Box for product ' + productId);
	let buybox = document.getElementById(productId).querySelector('.buy-box');
	buybox.style.display = 'none';
}
