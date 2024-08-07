const containerPopularGrid = document.querySelector('.popular__content-grid');
const containerMenuMobile = document.querySelector('.menu-mobile');
const btnMenu = document.querySelector('.header__button-menu');
const btnsSwitch = document.querySelectorAll('.popular__content-button');
const linksNavigationLi = document.querySelectorAll('.header__navigation-li');

linksNavigationLi.forEach((element) => {
	element.addEventListener('click', () => {
		btnMenu.classList.toggle('active');
		containerMenuMobile.classList.toggle('show');
		document.body.classList.toggle('overflow-hidden');
	});
});

const renderPopularItem = (count, desc) =>
	(containerPopularGrid.innerHTML = `
						<div class="popular__content-item grid-item-1">
							<img src="images/build${count}.webp" alt="Inter Img" />
						</div>
						<div class="popular__content-item grid-item-2">
							<img src="images/inter${count}.webp" alt="Build Img" />
						</div>
						<div class="popular__content-item grid-item-3">
							<p class="popular__content-item-desc">
								${desc}
							</p>
						</div>
					`);

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
					renderPopularItem(
						1,
						`45-этажный бизнес центр класса А в центре Манхэттена. Доступно
								более 40 офисов и open space пространств`
					);
				}
				break;
			}
			case 'One Five One': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					renderPopularItem(
						2,
						`45-этажный бизнес центр класса А в центре Манхэттена. Доступно
								более 40 офисов и open space пространств`
					);
				}
				break;
			}
			case '401 Rutland RD': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					renderPopularItem(
						3,
						`45-этажный бизнес центр класса А в центре Манхэттена. Доступно
								более 40 офисов и open space пространств`
					);
				}
				break;
			}
			case '20 Grand Ave': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					renderPopularItem(
						4,
						`45-этажный бизнес центр класса А в центре Манхэттена. Доступно
								более 40 офисов и open space пространств`
					);
				}
				break;
			}
			case '69 Stratford Rd': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					renderPopularItem(
						5,
						`45-этажный бизнес центр класса А в центре Манхэттена. Доступно
								более 40 офисов и open space пространств`
					);
				}
				break;
			}
			case '8305 Bergenline Ave': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					renderPopularItem(
						6,
						`45-этажный бизнес центр класса А в центре Манхэттена. Доступно
								более 40 офисов и open space пространств`
					);
				}
				break;
			}
			case '825 Third Ave': {
				if (!element.classList.contains('active')) {
					btnsSwitch.forEach((el) => el.classList.remove('active'));
					element.classList.toggle('active');
					renderPopularItem(
						7,
						`45-этажный бизнес центр класса А в центре Манхэттена. Доступно
								более 40 офисов и open space пространств`
					);
				}
				break;
			}
		}
	});
});
