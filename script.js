/* ==========================================================
   Renderizado del portafolio a partir de data.js
   ========================================================== */

const $ = (sel) => document.querySelector(sel);

const esc = (str = "") =>
  String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const cvDe = (rolId) => CVS.find((cv) => cv.id === rolId);

const ICONO_DESCARGA =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"/></svg>';

/* ---------- Hero ---------- */
function renderHero() {
  $("#hero-ubicacion").textContent = `${PERFIL.ciudad} · ${PERFIL.disponibilidad}`;
  $("#hero-nombre").textContent = PERFIL.nombre;
  $("#hero-titular").textContent = PERFIL.titular;
  $("#hero-sub").textContent = PERFIL.subtitulo;
}

/* ---------- Pestañas de sector ---------- */
function renderTabs() {
  $("#tabs").innerHTML = SECTORES.map(
    (s, i) => `
      <button class="tab" role="tab" id="tab-${s.id}" data-sector="${s.id}"
              aria-selected="false" aria-controls="panel" tabindex="-1">
        <span class="tab__num">0${i + 1}</span>
        <span class="tab__name">${esc(s.nombre)}</span>
        <span class="tab__desc">${esc(s.resumen)}</span>
      </button>`
  ).join("");

  $("#tabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (btn) seleccionarSector(btn.dataset.sector, { actualizarUrl: true });
  });

  // Navegación con flechas entre pestañas (patrón ARIA tabs)
  $("#tabs").addEventListener("keydown", (e) => {
    const tabs = [...document.querySelectorAll(".tab")];
    const i = tabs.indexOf(document.activeElement);
    if (i === -1) return;
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % tabs.length;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    if (next === null) return;
    e.preventDefault();
    tabs[next].focus();
    seleccionarSector(tabs[next].dataset.sector, { actualizarUrl: true });
  });
}

function renderTrabajo(job) {
  const lugar = job.lugar ? ` <span>· ${esc(job.lugar)}</span>` : "";
  const nota = job.nota ? ` <span>· ${esc(job.nota)}</span>` : "";
  return `
    <li class="job">
      <div class="job__top">
        <h4 class="job__puesto">${esc(job.puesto)}</h4>
        ${job.periodo ? `<span class="job__periodo">${esc(job.periodo)}</span>` : ""}
      </div>
      <p class="job__empresa">${esc(job.empresa)}${lugar}${nota}</p>
      <ul class="job__tareas">${job.tareas.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    </li>`;
}

function renderRol(rol) {
  const cv = cvDe(rol.id);
  const formacion = rol.formacion
    ? `<h4 class="subhead" style="margin-top:32px">Formación y certificaciones</h4>
       <ul class="certs" style="margin-top:0">
         ${rol.formacion
           .map(
             (f) => `<li class="cert">
                       <p class="cert__titulo">${esc(f.titulo)}</p>
                       <p class="cert__meta">${esc(f.centro)}${f.horas ? " · " + esc(f.horas) : ""}</p>
                     </li>`
           )
           .join("")}
       </ul>`
    : "";

  return `
    <article class="role">
      <header class="role__head">
        <h3 class="role__title">${esc(rol.titulo)}</h3>
        ${cv ? `<a class="role__cv" href="${cv.archivo}" download>Descargar CV (PDF) ↓</a>` : ""}
      </header>
      <div class="role__body">
        <div>
          <p class="role__perfil">${esc(rol.perfil)}</p>
          <h4 class="subhead">Competencias</h4>
          <ul class="chips">${rol.competencias.map((c) => `<li class="chip">${esc(c)}</li>`).join("")}</ul>
          ${formacion}
        </div>
        <div>
          <h4 class="subhead">Experiencia</h4>
          <ul class="timeline">${rol.experiencia.map(renderTrabajo).join("")}</ul>
        </div>
      </div>
    </article>`;
}

function seleccionarSector(id, { actualizarUrl = false } = {}) {
  const sector = SECTORES.find((s) => s.id === id) || SECTORES[0];

  document.querySelectorAll(".tab").forEach((tab) => {
    const activo = tab.dataset.sector === sector.id;
    tab.setAttribute("aria-selected", String(activo));
    tab.tabIndex = activo ? 0 : -1;
  });

  const panel = $("#panel");
  panel.setAttribute("aria-labelledby", `tab-${sector.id}`);
  panel.innerHTML = sector.roles.map(renderRol).join("");
  panel.classList.remove("is-entering");
  void panel.offsetWidth; // reinicia la animación
  panel.classList.add("is-entering");

  // La URL refleja el sector (#hosteleria, #logistica, #bienestar) sin saltar de posición
  if (actualizarUrl) history.replaceState(null, "", `#${sector.id}`);
}

/* ---------- Fortalezas, descargas y contacto ---------- */
function renderFortalezas() {
  $("#strengths").innerHTML = FORTALEZAS.map(
    (f) => `<li class="strength"><h3>${esc(f.titulo)}</h3><p>${esc(f.texto)}</p></li>`
  ).join("");
}

function renderDescargas() {
  $("#downloads").innerHTML = CVS.map(
    (cv) => `
      <li>
        <a class="download" href="${cv.archivo}" download>
          <span class="download__sector">${esc(cv.sector)}</span>
          <span class="download__titulo">${esc(cv.titulo)}</span>
          <span class="download__accion">PDF ${ICONO_DESCARGA}</span>
        </a>
      </li>`
  ).join("");
}

function renderContacto() {
  $("#contacto-disp").textContent = `${PERFIL.disponibilidad}. Respondo por teléfono, WhatsApp o correo.`;
  const items = [
    { label: "Teléfono", value: PERFIL.telefonoVisible, href: `tel:+34${PERFIL.telefono}` },
    { label: "WhatsApp", value: "Enviar mensaje →", href: PERFIL.whatsapp, externo: true },
    { label: "Email", value: PERFIL.email, href: `mailto:${PERFIL.email}` },
    { label: "Ubicación", value: PERFIL.ciudad },
  ];
  $("#contact-list").innerHTML = items
    .map((it) => {
      const inner = `<span class="contact__label">${it.label}</span><span class="contact__value">${esc(it.value)}</span>`;
      if (!it.href) return `<li><div class="contact__item">${inner}</div></li>`;
      const ext = it.externo ? ' target="_blank" rel="noopener"' : "";
      return `<li><a class="contact__item" href="${it.href}"${ext}>${inner}</a></li>`;
    })
    .join("");
}

/* ---------- Enrutado por hash ---------- */
function sectorDesdeHash() {
  const id = location.hash.slice(1);
  return SECTORES.some((s) => s.id === id) ? id : null;
}

function alCambiarHash() {
  const id = sectorDesdeHash();
  if (!id) return;
  seleccionarSector(id);
  $("#perfiles").scrollIntoView();
}

/* ---------- Detalles de interfaz ---------- */
function initTopbar() {
  const bar = $(".topbar");
  const onScroll = () => bar.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initReveal() {
  const els = document.querySelectorAll(".section__head, .strengths, .downloads, .contact");
  if (!("IntersectionObserver" in window)) return;
  els.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Inicio ---------- */
renderHero();
renderTabs();
renderFortalezas();
renderDescargas();
renderContacto();
seleccionarSector(sectorDesdeHash() || SECTORES[0].id);
if (sectorDesdeHash()) $("#perfiles").scrollIntoView();
window.addEventListener("hashchange", alCambiarHash);
$("#year").textContent = new Date().getFullYear();
initTopbar();
initReveal();
