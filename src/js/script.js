// Select button
const button = document.querySelector('.card__footer-button');
// Select overlay
const overlay = document.querySelector('.card__footer-overlay');

// Listen to button click event
button.addEventListener('click', _ => {
	// Toggle 'active' class on button
	button.classList.toggle('active');

	// Toggle 'hide' class on overlay
	overlay.classList.toggle('hide');

	// Toggle 'aria-expanded' attribute on button from true to false and vice versa
	button.classList.contains('active')
		? button.setAttribute('aria-expanded', true)
		: button.setAttribute('aria-expanded', false);

	// Toggle 'aria-hidden' attribute on overlay from true to false and vice versa
	overlay.classList.contains('hide')
		? overlay.setAttribute('aria-hidden', true)
		: overlay.setAttribute('aria-hidden', false);
});
