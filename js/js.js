const burger = document.querySelector('.nav__burger');
const burgerMenu = document.querySelector('.nav__menu');

burger.addEventListener('click', function () {
	burger.classList.toggle('active')
	burgerMenu.classList.toggle('active')
});
document.onclick = function (e) {
	if (e.target !== burger && e.target !== burgerMenu) {
		burgerMenu.classList.remove('active');
		burger.classList.remove('active');
	}
}


const nav = document.getElementById('header')
function scrollHeader() {
	// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 80) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



const loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.addEventListener('click', function () {

	let boxes = document.querySelectorAll('.portfolio__card');
	for (var i = currentItem; i < currentItem + 3; i++) {
		if (boxes[i]) {
			boxes[i].style.display = 'grid';
		}
	}
	currentItem += 3;

	if (currentItem >= boxes.length) {
		loadMoreBtn.style.display = 'none';
	}
})






let validatrForms = function (selector, rules, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
		submitHangler: function (form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest;;
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}



			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();
		}
	})
}

validatrForms('.contact__form', { email: { required: true, email: true } })

