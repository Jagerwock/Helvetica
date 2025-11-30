const header = document.querySelector('[data-elevate]');
const onScroll = () => {
  if (window.scrollY > 8) header.classList.add('is-elevated');
  else header.classList.remove('is-elevated');
};
window.addEventListener('scroll', onScroll);
onScroll();

const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const backdrop = document.querySelector('.nav-backdrop');

function setMenu(open){
  document.body.classList.toggle('menu-open', open);
  btn?.classList.toggle('is-open', open);
  btn?.setAttribute('aria-expanded', String(open));
  if (backdrop){
    backdrop.hidden = !open;
    backdrop.style.display = open ? 'block' : 'none';
  }
}

btn?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
backdrop?.addEventListener('click', () => setMenu(false));

nav?.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    setMenu(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });
});

window.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

setMenu(false);



