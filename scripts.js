const header = document.querySelector('[data-elevate]');
const onScroll = () => header?.classList.toggle('is-elevated', window.scrollY > 12);
window.addEventListener('scroll', onScroll); onScroll();

const btn = document.querySelector('.menu-toggle');
const backdrop = document.querySelector('.nav-backdrop');
function setMenu(open){
  document.body.classList.toggle('menu-open', open);
  btn?.classList.toggle('is-open', open);
}
btn?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
backdrop?.addEventListener('click', () => setMenu(false));

const I18N_KEYS = document.querySelectorAll('[data-i18n]');
const LANG_BUTTONS = document.querySelectorAll('[data-lang]');
const DICT = {
  en: {
    nav_about: "About Us",
    nav_purpose: "Our Purpose",
    nav_team: "Executive Team",
    nav_sust: "Sustainability",
    nav_comp: "Compliance",
    nav_contact: "Contact Us",
    hero_title: "Transforming mineral supply chains with integrity.",
    hero_tag: "We ensure sustainable supply chains through rigorous due diligence and ethical business practices.",
    hero_cta: "Invest With Us",
    tiles_title: "Our Purpose & Mission",
    tiles_tag: "We work to strengthen responsible mineral supply chains by promoting ethical sourcing, transparent practices, and full compliance with international standards.",
    tile1_h: "Sourcing",
    tile1_p: "We identify responsible sources of minerals and materials.",
    tile2_h: "Compliance",
    tile2_p: "We ensure compliance with international standards and regulations.",
    tile3_h: "Transparency",
    tile3_p: "We promote transparency in all aspects of mineral trade.",
    offices_title: "Visit our offices",
    offices_addr: "Avenida de la Cultura, Urbanización Magisterial, N - 15, Cusco",
    connect_p: "Connect with us",
    connect_h: "Join us in shaping the future",
    connect_btn: "Contact Us →",
    foot_priv: "Privacy Policy",
    foot_terms: "Terms of Service",
    foot_copy: "© 2025 Helvetica Mineral Resources. All rights reserved."
  },
  es: {
    nav_about: "Quiénes somos",
    nav_purpose: "Propósito",
    nav_team: "Equipo",
    nav_sust: "Sostenibilidad",
    nav_comp: "Cumplimiento",
    nav_contact: "Contacto",
    hero_title: "Transformando cadenas de suministro mineral con integridad.",
    hero_tag: "Aseguramos cadenas sostenibles mediante debida diligencia rigurosa y prácticas éticas.",
    hero_cta: "Invertir con nosotros",
    tiles_title: "Nuestro propósito y misión",
    tiles_tag: "Fortalecemos cadenas responsables promoviendo abastecimiento ético, prácticas transparentes y cumplimiento total con estándares internacionales.",
    tile1_h: "Abastecimiento",
    tile1_p: "Identificamos fuentes responsables de minerales y materiales.",
    tile2_h: "Cumplimiento",
    tile2_p: "Aseguramos cumplimiento con estándares y normativas internacionales.",
    tile3_h: "Transparencia",
    tile3_p: "Promovemos la transparencia en todo el comercio mineral.",
    offices_title: "Visita nuestras oficinas",
    offices_addr: "Avenida de la Cultura, Urbanización Magisterial, N - 15, Cusco",
    connect_p: "Conecta con nosotros",
    connect_h: "Únete a dar forma al futuro",
    connect_btn: "Contáctanos →",
    foot_priv: "Política de privacidad",
    foot_terms: "Términos del servicio",
    foot_copy: "© 2025 Helvetica Mineral Resources. Todos los derechos reservados."
  }
};

function applyLang(lang){
  const dict = DICT[lang] || DICT.en;
  I18N_KEYS.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  LANG_BUTTONS.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem('lang', lang);
}

applyLang(localStorage.getItem('lang') || 'en');

LANG_BUTTONS.forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));


window.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

setMenu(false);



