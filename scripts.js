const header = document.querySelector('[data-elevate]');
const onScroll = () => header?.classList.toggle('is-elevated', window.scrollY > 12);
window.addEventListener('scroll', onScroll); onScroll();

const btn = document.querySelector('.menu-toggle');
const backdrop = document.querySelector('.nav-backdrop');
function setMenu(open){
  document.body.classList.toggle('menu-open', open);
  btn?.classList.toggle('is-open', open);
  if (backdrop) backdrop.hidden = !open;
}
btn?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
backdrop?.addEventListener('click', () => setMenu(false));

const I18N_KEYS = document.querySelectorAll('[data-i18n]');
const I18N_HTML = document.querySelectorAll('[data-i18n-html]');
const I18N_PLACEHOLDERS = document.querySelectorAll('[data-i18n-placeholder]');
const LANG_BUTTONS = document.querySelectorAll('[data-lang]');
const officeImage = document.querySelector('[data-office-image]');
const officeAddress = document.querySelector('[data-office-address]');
const footerAddress = document.querySelector('[data-footer-address]');
const locationButtons = document.querySelectorAll('[data-location]');
const DICT = {
  en: {
    nav_about: "About Us",
    nav_purpose: "Our Purpose",
    nav_team: "Executive Team",
    nav_sust: "Sustainability",
    nav_comp: "Compliance",
    nav_contact: "Contact Us",
    hero_title: "Transforming mineral supply chains with integrity.",
    hero_tag: "We secure sustainable supply chains through rigorous due diligence and ethical practice.",
    hero_cta: "Invest With Us",
    tiles_title: "Our Purpose & Mission",
    tiles_tag: "We strengthen responsible mineral supply chains through ethical sourcing, transparent practices, and full compliance with international standards.",
    tile1_h: "Sourcing",
    tile1_p: "We identify responsible sources of minerals and materials.",
    tile2_h: "Compliance",
    tile2_p: "We ensure compliance with international standards and regulations.",
    tile3_h: "Transparency",
    tile3_p: "We promote transparency in all aspects of mineral trade.",
    offices_title: "Visit our offices",
    offices_cusco_addr: "Avenida de la Cultura, Urbanización Magisterial, N - 15, Cusco",
    offices_lima_addr: "Av. El Derby 250, 12th Floor, Office 1210, Santiago de Surco, Lima",
    office_cusco_alt: "Historic Cusco cityscape at dusk",
    office_lima_alt: "Lima business district skyline",
    locations_title: "Locations",
    locations_cusco: "Cusco",
    locations_lima: "Lima",
    connect_p: "Connect with us",
    connect_h: "Join us in shaping the future",
    connect_btn: "Contact Us",
    about_title: "Who we are",
    about_tag: "Independent commodity firm specialized in creating value across the gold supply chain.",
    mission_title: "Our mission",
    mission_item1: "Integrated physical trading & mining finance platform connecting mines to global buyers.",
    mission_item2: "Focus on responsible investment in artisanal & small-scale mining (ASM).",
    mission_item3: "Stable, transparent returns through insured & traceable operations.",
    mission_item4: "OECD-aligned compliance, due diligence and development impact.",
    pillars_title: "Platform pillars",
    pillar_item1: "Lawful origin verification and documentation",
    pillar_item2: "Transparency and audit trail across the chain-of-custody",
    pillar_item3: "AML/CFT controls consistent with international standards",
    pillar_item4: "Secure export pathways & authorized offtake",
    purpose_title: "Our Purpose",
    purpose_tag: "Value creation is driven through due diligence and active risk management.",
    trade_model_title: "Our Trade Model",
    trade_model_tag: "Ensuring compliance, traceability & ethical sourcing.",
    trade_step1_label: "SOURCING:",
    trade_step1_desc: "Purchase from verified small-scale producers.",
    trade_step2_label: "VALIDATION:",
    trade_step2_desc: "Compliance due diligence; fire assay & paperwork verification.",
    trade_step3_label: "LOGISTICS:",
    trade_step3_desc: "Secured & insured transport to refinery.",
    trade_step4_label: "REFINING:",
    trade_step4_desc: "Accredited facilities, quality control.",
    trade_step5_label: "DELIVERY:",
    trade_step5_desc: "Responsible sale with full traceability.",
    trade_cycle: "Cycle: 6–8 working days • Fully insured • OECD-aligned.",
    core_title: "Core Functions",
    core_item1_label: "Responsible Sourcing & Verification:",
    core_item1_desc: "titles, KYS, on-site checks, assays.",
    core_item2_label: "Due Diligence & Risk Management:",
    core_item2_desc: "OECD 5-step, AML/CFT, continuous monitoring.",
    core_item3_label: "Secure Logistics:",
    core_item3_desc: "Armored transport, chain-of-custody, customs, insurance.",
    core_item4_label: "Responsible Offtake:",
    core_item4_desc: "Accredited refiners, authorized end-users, audit trail.",
    sust_title: "Sustainability & Responsible Trade",
    sust_tag: "Fostering transparent and integrated supply chains.",
    sust_trade_title: "Responsible Trade",
    sust_trade_item1: "OECD Guidelines applied to ASM integration.",
    sust_trade_item2: "Risk-based due diligence across sourcing.",
    sust_trade_item3: "Promotes formalization, not exclusion.",
    sust_trade_item4: "Zero tolerance for forced/child labor and environmental abuse.",
    sust_trade_item5: "Local development benefits from responsible trade.",
    sust_commit_title: "Commitments",
    sust_commit_item1: "Human Rights: no child/forced labor; safe work.",
    sust_commit_item2: "Environment: oversight of chemical use; safer methods.",
    sust_commit_item3: "ASM Support: engagement, legal registration, compliance.",
    sust_commit_item4: "Governance: OECD-aligned DD; LBMA conflict-free; AML/CFT.",
    team_title: "Executive Team",
    team_tag: "We invest where we are — trust, transparency & opportunity in every transaction.",
    team_gonzalo_role1: "Lima Bar Association — Code 58643",
    team_gonzalo_role2: "LL.B., University of Lima; Postgrad UPC",
    team_gonzalo_role3: "Mining/Energy/Infrastructure Law; community relations; AML compliance",
    team_hugo_role1: "Magister in Criminal Law & Criminology (USMP)",
    team_hugo_role2: "LL.B. (USMP)",
    team_hugo_role3: "Criminal Compliance, AML/CFT, SPLAFT advisor (20+ years)",
    team_anais_role1: "LL.B., San Juan Bautista",
    team_anais_role2: "Economic Criminal Law & Compliance Management",
    team_anais_role3: "Certified AML/CFT (SPLAFT) — Compliance Officer, metal trading",
    contact_visit: "Visit us",
    contact_cusco_label: "Cusco:",
    contact_lima_addr: "Av. El Derby 250, 12th Floor, Office 1210, Santiago de Surco, Lima",
    contact_lima_label: "Lima:",
    contact_lima_addr: "Av. El Derby 250, Piso 12, Oficina 1210, Santiago de Surco",
    contact_email_label: "Email:",
    contact_phone_label: "Phone:",
    contact_write: "Write to us",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_message: "Message",
    contact_form_submit: "Send",
    contact_disclaimer: "Information subject to verification and due diligence.",
    comp_title: "Compliance & Frameworks",
    comp_tag: "Integrity, traceability, and regulatory excellence.",
    comp_oecd_title: "OECD Due Diligence (5 steps)",
    comp_oecd_desc: "Risk-based process for responsible mineral sourcing and ASM formalization.",
    comp_lbma_title: "LBMA Responsible Gold (v9)",
    comp_lbma_desc: "Conflict-free sourcing, AML/CFT controls and supply chain transparency.",
    comp_splaft_title: "SPLAFT (Peru)",
    comp_splaft_desc: "Legal framework for LA/FT detection and reporting to UIF, integrated in our processes.",
    comp_ops_title: "Operational Commitments",
    comp_ops_item1: "Lawful origin & full traceability",
    comp_ops_item2: "Secure, insured logistics with authorized partners",
    comp_ops_item3: "Human-rights–aligned responsible sourcing",
    comp_ops_item4: "Transparency embedded across the supply chain",
    comp_team_title: "Compliance Team",
    comp_team_desc: "Gonzalo Campos • Hugo Rivas • Anais Guzman — mining law, AML/CFT, and regulatory specialists.",
    foot_priv: "Privacy Policy",
    foot_terms: "Terms of Service",
    foot_copy: "© 2025 Helvetica Mineral Resources. All rights reserved."
  },
  es: {
    nav_about: "Quiénes somos",
    nav_purpose: "Propósito",
    nav_team: "Equipo ejecutivo",
    nav_sust: "Sostenibilidad",
    nav_comp: "Cumplimiento",
    nav_contact: "Contáctanos",
    hero_title: "Transformamos cadenas minerales con integridad.",
    hero_tag: "Aseguramos cadenas sostenibles con debida diligencia rigurosa y prácticas éticas.",
    hero_cta: "Invierte con nosotros",
    tiles_title: "Nuestro propósito y misión",
    tiles_tag: "Fortalecemos cadenas responsables con abastecimiento ético, prácticas transparentes y cumplimiento internacional.",
    tile1_h: "Abastecimiento",
    tile1_p: "Identificamos fuentes responsables de minerales y materiales.",
    tile2_h: "Cumplimiento",
    tile2_p: "Aseguramos cumplimiento con estándares y normativas internacionales.",
    tile3_h: "Transparencia",
    tile3_p: "Promovemos la transparencia en todo el comercio mineral.",
    offices_title: "Visita nuestras oficinas",
    offices_cusco_addr: "Avenida de la Cultura, Urbanización Magisterial, N - 15, Cusco",
    offices_lima_addr: "Av. El Derby 250, Piso 12, Oficina 1210, Santiago de Surco, Lima",
    office_cusco_alt: "Vista del centro histórico de Cusco al atardecer",
    office_lima_alt: "Skyline corporativo de Lima",
    locations_title: "Nuestras sedes",
    locations_cusco: "Cusco",
    locations_lima: "Lima",
    connect_p: "Conecta con nosotros",
    connect_h: "Únete a dar forma al futuro",
    connect_btn: "Contáctanos",
    about_title: "Quiénes somos",
    about_tag: "Firma independiente especializada en crear valor en toda la cadena del oro.",
    mission_title: "Nuestra misión",
    mission_item1: "Plataforma integrada de trading físico y financiamiento minero que conecta minas con compradores globales.",
    mission_item2: "Enfoque en inversión responsable en la minería artesanal y de pequeña escala (MAPE).",
    mission_item3: "Retornos estables y transparentes mediante operaciones aseguradas y trazables.",
    mission_item4: "Cumplimiento, debida diligencia e impacto alineados a la OCDE.",
    pillars_title: "Pilares de la plataforma",
    pillar_item1: "Verificación y documentación del origen lícito",
    pillar_item2: "Transparencia y trazabilidad en toda la cadena de custodia",
    pillar_item3: "Controles LA/FT acordes con estándares internacionales",
    pillar_item4: "Vías seguras de exportación y offtake autorizado",
    purpose_title: "Nuestro propósito",
    purpose_tag: "Creamos valor mediante debida diligencia y gestión activa de riesgos.",
    trade_model_title: "Modelo de comercio",
    trade_model_tag: "Garantizamos cumplimiento, trazabilidad y abastecimiento ético.",
    trade_step1_label: "ABASTECIMIENTO:",
    trade_step1_desc: "Compra a productores pequeños verificados.",
    trade_step2_label: "VALIDACIÓN:",
    trade_step2_desc: "Debida diligencia; ensaye al fuego y verificación documental.",
    trade_step3_label: "LOGÍSTICA:",
    trade_step3_desc: "Transporte asegurado hacia la refinería.",
    trade_step4_label: "REFINACIÓN:",
    trade_step4_desc: "Instalaciones acreditadas y control de calidad.",
    trade_step5_label: "ENTREGA:",
    trade_step5_desc: "Venta responsable con trazabilidad total.",
    trade_cycle: "Ciclo: 6–8 días hábiles • Totalmente asegurado • Alineado a OCDE.",
    core_title: "Funciones clave",
    core_item1_label: "Abastecimiento responsable y verificación:",
    core_item1_desc: "títulos, KYS, verificaciones en sitio y ensayes.",
    core_item2_label: "Debida diligencia y gestión de riesgos:",
    core_item2_desc: "5 pasos OCDE, LA/FT y monitoreo continuo.",
    core_item3_label: "Logística segura:",
    core_item3_desc: "Transporte blindado, cadena de custodia, aduanas, seguros.",
    core_item4_label: "Offtake responsable:",
    core_item4_desc: "Refinerías acreditadas, usuarios finales autorizados y trazabilidad.",
    sust_title: "Sostenibilidad y comercio responsable",
    sust_tag: "Impulsamos cadenas integradas y transparentes.",
    sust_trade_title: "Comercio responsable",
    sust_trade_item1: "Aplicamos Guías OCDE para integrar la MAPE.",
    sust_trade_item2: "Debida diligencia basada en riesgo en el abastecimiento.",
    sust_trade_item3: "Promovemos la formalización, no la exclusión.",
    sust_trade_item4: "Cero tolerancia al trabajo forzado/infantil y daño ambiental.",
    sust_trade_item5: "El comercio responsable genera desarrollo local.",
    sust_commit_title: "Compromisos",
    sust_commit_item1: "Derechos humanos: sin trabajo infantil/forzado; seguridad laboral.",
    sust_commit_item2: "Medio ambiente: control de químicos; métodos más seguros.",
    sust_commit_item3: "Apoyo a la MAPE: acompañamiento, formalización y cumplimiento.",
    sust_commit_item4: "Gobernanza: DD alineada OCDE; oro libre de conflicto LBMA; LA/FT.",
    team_title: "Equipo ejecutivo",
    team_tag: "Invertimos donde estamos: confianza, transparencia y oportunidad en cada operación.",
    team_gonzalo_role1: "Colegio de Abogados de Lima — Código 58643",
    team_gonzalo_role2: "Abogado, Universidad de Lima; Postgrado UPC",
    team_gonzalo_role3: "Derecho minero/energía/infraestructura; relaciones comunitarias; cumplimiento LA/FT",
    team_hugo_role1: "Magíster en Derecho Penal y Criminología (USMP)",
    team_hugo_role2: "Abogado (USMP)",
    team_hugo_role3: "20+ años en cumplimiento penal, LA/FT y asesoría SPLAFT",
    team_anais_role1: "Abogada, San Juan Bautista",
    team_anais_role2: "Derecho Penal Económico y Gestión de Compliance",
    team_anais_role3: "Oficial de Cumplimiento LA/FT (SPLAFT) en comercio de metales",
    contact_visit: "Visítanos",
    contact_cusco_label: "Cusco:",
    contact_cusco_addr: "Avenida de la Cultura, Urbanización Magisterial, N - 15, Cusco",
    contact_lima_label: "Lima:",
    contact_lima_addr: "Av. El Derby 250, Piso 12, Oficina 1210, Santiago de Surco, Lima",
    contact_email_label: "Correo:",
    contact_phone_label: "Teléfono:",
    contact_write: "Escríbenos",
    contact_form_name: "Nombre",
    contact_form_email: "Correo",
    contact_form_message: "Mensaje",
    contact_form_submit: "Enviar",
    contact_disclaimer: "Información sujeta a verificación y debida diligencia.",
    comp_title: "Cumplimiento y marcos",
    comp_tag: "Integridad, trazabilidad y excelencia regulatoria.",
    comp_oecd_title: "Debida diligencia OCDE (5 pasos)",
    comp_oecd_desc: "Proceso basado en riesgos para abastecimiento responsable e integración de la MAPE.",
    comp_lbma_title: "Oro Responsable LBMA (v9)",
    comp_lbma_desc: "Abastecimiento libre de conflicto, controles LA/FT y transparencia en la cadena.",
    comp_splaft_title: "SPLAFT (Perú)",
    comp_splaft_desc: "Marco legal para detección y reporte LA/FT a la UIF, integrado en nuestros procesos.",
    comp_ops_title: "Compromisos operativos",
    comp_ops_item1: "Origen lícito y trazabilidad total",
    comp_ops_item2: "Logística segura y asegurada con socios autorizados",
    comp_ops_item3: "Abastecimiento responsable alineado a derechos humanos",
    comp_ops_item4: "Transparencia incorporada en toda la cadena",
    comp_team_title: "Equipo de cumplimiento",
    comp_team_desc: "Gonzalo Campos • Hugo Rivas • Anais Guzman — especialistas en derecho minero, LA/FT y regulación.",
    foot_priv: "Política de privacidad",
    foot_terms: "Términos del servicio",
    foot_copy: "© 2025 Helvetica Mineral Resources. Todos los derechos reservados."
  }
};

const OFFICE_STATES = {
  cusco: { image:'Images/Sacsayhuaman.jpg', addrKey:'offices_cusco_addr', altKey:'office_cusco_alt' },
  lima: { image:'Images/Peru3.webp', addrKey:'offices_lima_addr', altKey:'office_lima_alt' }
};

let activeOffice = localStorage.getItem('officeLocation') || 'cusco';
let currentLang = localStorage.getItem('lang') || 'en';

function renderOfficeLocation(lang = currentLang){
  const dict = DICT[lang] || DICT.en;
  const data = OFFICE_STATES[activeOffice];
  if (!data) return;
  if (officeImage){
    officeImage.src = data.image;
    officeImage.alt = dict[data.altKey] || '';
  }
  if (officeAddress){
    officeAddress.textContent = dict[data.addrKey] || '';
  }
  if (footerAddress){
    footerAddress.textContent = dict[data.addrKey] || '';
  }
  locationButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.location === activeOffice));
}

function setOfficeLocation(location){
  if (!OFFICE_STATES[location]) return;
  activeOffice = location;
  localStorage.setItem('officeLocation', location);
  renderOfficeLocation();
}

locationButtons.forEach(btn => btn.addEventListener('click', () => setOfficeLocation(btn.dataset.location)));

function applyLang(lang){
  const dict = DICT[lang] || DICT.en;
  currentLang = lang;
  I18N_KEYS.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  I18N_HTML.forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) el.innerHTML = dict[key];
  });
  I18N_PLACEHOLDERS.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });
  LANG_BUTTONS.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  renderOfficeLocation(lang);
}

applyLang(currentLang);

LANG_BUTTONS.forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

window.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

setMenu(false);