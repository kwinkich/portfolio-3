const containerPopularGrid = document.querySelector('.popular__content-grid');
const containerMenuMobile = document.querySelector('.menu-mobile');
const btnMenu = document.querySelector('.header__button-menu');
const btnsSwitch = document.querySelectorAll('.popular__content-button');
const linksNavigationLi = document.querySelectorAll('.header__navigation-li');

const gridItem1 = document.querySelector('#grid-content1');
const gridItem2 = document.querySelector('#grid-content2');
const gridItem3 = document.querySelector('#grid-content3');
const gridItem4 = document.querySelector('#grid-content4');
const gridItem5 = document.querySelector('#grid-content5');
const gridItem6 = document.querySelector('#grid-content6');
const gridItem7 = document.querySelector('#grid-content7');

let prevGrid = gridItem1;

const grids = [
	gridItem1,
	gridItem2,
	gridItem3,
	gridItem4,
	gridItem5,
	gridItem6,
	gridItem7,
];

linksNavigationLi.forEach((element) => {
	element.addEventListener('click', () => {
		btnMenu.classList.toggle('active');
		containerMenuMobile.classList.toggle('show');
		document.body.classList.toggle('overflow-hidden');
	});
});

btnMenu.addEventListener('click', () => {
	btnMenu.classList.toggle('active');
	containerMenuMobile.classList.toggle('show');
	document.body.classList.toggle('overflow-hidden');
});

btnsSwitch.forEach((element) => {
	element.addEventListener('click', () => {
		let build = element.innerText.trim();
		switch (build) {
			case '1155 Avenue of the Americas': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					if (prevGrid !== gridItem1) {
						gridItem1.style.display = 'grid';
						prevGrid.style.display = 'none';
						prevGrid = gridItem1;
					}
				}
				break;
			}
			case 'One Five One': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					if (prevGrid !== gridItem2) {
						gridItem2.style.display = 'grid';
						prevGrid.style.display = 'none';
						prevGrid = gridItem2;
					}
				}
				break;
			}
			case '401 Rutland RD': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					if (prevGrid !== gridItem3) {
						gridItem3.style.display = 'grid';
						prevGrid.style.display = 'none';
						prevGrid = gridItem3;
					}
				}
				break;
			}
			case '20 Grand Ave': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					if (prevGrid !== gridItem4) {
						gridItem4.style.display = 'grid';
						prevGrid.style.display = 'none';
						prevGrid = gridItem4;
					}
				}
				break;
			}
			case '69 Stratford Rd': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					if (prevGrid !== gridItem5) {
						gridItem5.style.display = 'grid';
						prevGrid.style.display = 'none';
						prevGrid = gridItem5;
					}
				}
				break;
			}
			case '8305 Bergenline Ave': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					if (prevGrid !== gridItem6) {
						gridItem6.style.display = 'grid';
						prevGrid.style.display = 'none';
						prevGrid = gridItem6;
					}
				}
				break;
			}
			case '825 Third Ave': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					if (prevGrid !== gridItem7) {
						gridItem7.style.display = 'grid';
						prevGrid.style.display = 'none';
						prevGrid = gridItem7;
					}
				}
				break;
			}
		}
	});
});
