
document.addEventListener("DOMContentLoaded", function() {
	const urlPath = window.location.pathname; 
	const navItems = document.querySelectorAll('.navigation a'); 

	navItems.forEach(link => {
			if (link.getAttribute('href') === urlPath) {
					link.parentElement.classList.add('active'); 
			}
	});
});
