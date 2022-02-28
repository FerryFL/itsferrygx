const toggleButton = document.querySelector('.toggle-button');
const navbarRight = document.querySelector('.navbar-right');

toggleButton.addEventListener('click', function () {
	navbarRight.classList.toggle('active');
});
