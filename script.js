const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const revealItems = document.querySelectorAll('.reveal');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  header?.classList.toggle('is-open');
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const currentYear = new Date().getFullYear();
const footerParagraph = document.querySelector('.site-footer p:last-child');

if (footerParagraph) {
  footerParagraph.textContent = `Fictional studio website template. ${currentYear}.`;
}