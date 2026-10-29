/* =============================================================
   MAIN.JS — header, menu, footer, dan fungsi bersama.
   Biasanya tidak perlu diubah. Data ada di config.js & data.js.
   ============================================================= */
(function () {
  const S = window.SITE || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const PAGE = document.body.dataset.page || "";

  /* ---------- Ikon ---------- */
  const ICONS = `
  <symbol id="i-home" viewBox="0 0 16 16"><path d="M8.7 1.3a1 1 0 0 0-1.4 0L1 7.6V14a1 1 0 0 0 1 1h4v-4.5h4V15h4a1 1 0 0 0 1-1V7.6z"/></symbol>
  <symbol id="i-pin" viewBox="0 0 16 16"><path d="M8 16s6-5.7 6-10A6 6 0 0 0 2 6c0 4.3 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></symbol>
  <symbol id="i-caret" viewBox="0 0 16 16"><path d="M1.6 4.6a1 1 0 0 1 1.4 0L8 9.6l5-5a1 1 0 1 1 1.4 1.4l-5.7 5.7a1 1 0 0 1-1.4 0L1.6 6a1 1 0 0 1 0-1.4"/></symbol>
  <symbol id="i-images" viewBox="0 0 16 16"><path d="M4.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path d="M14 14H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M2 3a1 1 0 0 0-1 1v6.3l2.6-2.6a.5.5 0 0 1 .7 0l2.2 2.2 3.7-4.4a.5.5 0 0 1 .7 0L15 9V4a1 1 0 0 0-1-1z"/></symbol>
  <symbol id="i-grid" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/></symbol>
  <symbol id="i-zoom" viewBox="0 0 16 16"><path d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m4.8-.9 3.5 3.5a.7.7 0 0 1-1 1l-3.5-3.5zM6 4h1v2h2v1H7v2H6V7H4V6h2z"/></symbol>
  <symbol id="i-ig" viewBox="0 0 16 16"><path d="M8 0C5.8 0 5.6 0 4.7.1 3.9.1 3.3.3 2.8.5a3.5 3.5 0 0 0-1.3.8A3.5 3.5 0 0 0 .6 2.7C.4 3.2.3 3.8.2 4.7.2 5.6.2 5.8.2 8s0 2.4.1 3.3c0 .8.2 1.4.4 1.9.2.5.5 1 .9 1.3.4.4.8.7 1.3.9.5.2 1.1.3 1.9.4.9 0 1.1.1 3.3.1s2.4 0 3.3-.1c.8 0 1.4-.2 1.9-.4a3.5 3.5 0 0 0 1.3-.9c.4-.4.7-.8.9-1.3.2-.5.3-1.1.4-1.9 0-.9.1-1.1.1-3.3s0-2.4-.1-3.3c0-.8-.2-1.4-.4-1.9a3.5 3.5 0 0 0-.9-1.3A3.5 3.5 0 0 0 13.2.5c-.5-.2-1.1-.3-1.9-.4C10.4 0 10.2 0 8 0m0 1.4c2.1 0 2.4 0 3.2.1.8 0 1.2.2 1.5.3.4.1.6.3.9.6.3.3.5.5.6.9.1.3.2.7.3 1.5 0 .8.1 1.1.1 3.2s0 2.4-.1 3.2c0 .8-.2 1.2-.3 1.5-.1.4-.3.6-.6.9a2.4 2.4 0 0 1-.9.6c-.3.1-.7.2-1.5.3-.8 0-1.1.1-3.2.1s-2.4 0-3.2-.1c-.8 0-1.2-.2-1.5-.3a2.4 2.4 0 0 1-.9-.6 2.4 2.4 0 0 1-.6-.9c-.1-.3-.2-.7-.3-1.5 0-.8-.1-1.1-.1-3.2s0-2.4.1-3.2c0-.8.2-1.2.3-1.5.1-.4.3-.6.6-.9.3-.3.5-.5.9-.6.3-.1.7-.2 1.5-.3.8 0 1.1-.1 3.2-.1M8 3.9a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2m0 6.8a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4m5.2-6.9a1 1 0 1 1-1.9 0 1 1 0 0 1 1.9 0"/></symbol>
  <symbol id="i-yt" viewBox="0 0 16 16"><path d="M15.7 4.1a2 2 0 0 0-1.4-1.4C13 2.4 8 2.4 8 2.4s-5 0-6.3.3A2 2 0 0 0 .3 4.1C0 5.4 0 8 0 8s0 2.6.3 3.9a2 2 0 0 0 1.4 1.4c1.3.3 6.3.3 6.3.3s5 0 6.3-.3a2 2 0 0 0 1.4-1.4c.3-1.3.3-3.9.3-3.9s0-2.6-.3-3.9M6.4 10.4V5.6L10.6 8z"/></symbol>
  <symbol id="i-wa" viewBox="0 0 16 16"><path d="M13.6 2.3A7.9 7.9 0 0 0 1.1 11.9L0 16l4.2-1.1A7.9 7.9 0 0 0 16 8a7.8 7.8 0 0 0-2.4-5.7M8 14.5a6.6 6.6 0 0 1-3.4-.9l-.2-.1-2.5.6.7-2.4-.2-.3A6.6 6.6 0 1 1 8 14.5m3.6-4.9c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1l-.6.8c-.1.1-.2.1-.4 0a5.4 5.4 0 0 1-2.7-2.3c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.6-1.5c-.2-.4-.3-.3-.4-.3h-.4a.8.8 0 0 0-.6.3 2.4 2.4 0 0 0-.7 1.8 4.2 4.2 0 0 0 .9 2.2 9.5 9.5 0 0 0 3.6 3.2c1.4.6 1.9.6 2.6.5.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1z"/></symbol>
  <symbol id="i-fb" viewBox="0 0 16 16"><path d="M16 8a8 8 0 1 0-9.3 7.9v-5.6h-2V8h2V6.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V8h2.2l-.4 2.3H9.3v5.6A8 8 0 0 0 16 8"/></symbol>
  <symbol id="i-mail" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-.8V4l6 3.8L14 4v-.8zM14 5.4 8 9.2 2 5.4V12h12z"/></symbol>
  <symbol id="i-clock" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7.3 3.5h1.4v4.2l3 1.8-.7 1.2-3.7-2.2z"/></symbol>
  <symbol id="i-close" viewBox="0 0 16 16"><path d="M2.1 2.1a1 1 0 0 1 1.4 0L8 6.6l4.5-4.5a1 1 0 1 1 1.4 1.4L9.4 8l4.5 4.5a1 1 0 0 1-1.4 1.4L8 9.4l-4.5 4.5a1 1 0 0 1-1.4-1.4L6.6 8 2.1 3.5a1 1 0 0 1 0-1.4"/></symbol>
  <symbol id="i-left" viewBox="0 0 16 16"><path d="M11.4 1.6a1 1 0 0 1 0 1.4L6.4 8l5 5a1 1 0 1 1-1.4 1.4L4.3 8.7a1 1 0 0 1 0-1.4L10 1.6a1 1 0 0 1 1.4 0"/></symbol>
  <symbol id="i-right" viewBox="0 0 16 16"><path d="M4.6 1.6a1 1 0 0 1 1.4 0l5.7 5.7a1 1 0 0 1 0 1.4L6 14.4a1 1 0 1 1-1.4-1.4l5-5-5-5a1 1 0 0 1 0-1.4"/></symbol>
  <symbol id="i-arrow" viewBox="0 0 16 16"><path d="M1 8a.8.8 0 0 1 .8-.8h10.3L8.4 3.6a.8.8 0 1 1 1.1-1.1l5 5a.8.8 0 0 1 0 1.1l-5 5a.8.8 0 1 1-1.1-1.1l3.7-3.7H1.8A.8.8 0 0 1 1 8"/></symbol>
  <symbol id="i-menu" viewBox="0 0 16 16"><path d="M1 3h14v1.6H1zm0 4.2h14v1.6H1zm0 4.2h14V13H1z"/></symbol>
  <symbol id="i-pen" viewBox="0 0 16 16"><path d="M12.1.9a2 2 0 0 1 2.9 2.9l-9 9-3.9 1 1-3.9zM1 15h14v1H1z"/></symbol>
  <symbol id="i-check" viewBox="0 0 16 16"><path d="M13.5 3.5a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L5.8 9.8l6.3-6.3a1 1 0 0 1 1.4 0"/></symbol>
  <symbol id="i-cal" viewBox="0 0 16 16"><path d="M4 0h1.5v2h5V0H12v2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2zM1.5 6v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V6z"/></symbol>
  <symbol id="i-mosque" viewBox="0 0 64 64"><path d="M32 6c-2 4-10 8-10 16h20c0-8-8-12-10-16M14 24h36v4H14zm2 6h32v26H38V42a6 6 0 0 0-12 0v14H16zM6 20h4v36H6zm48 0h4v36h-4zM8 12l2 6H6zM56 12l2 6h-4z"/></symbol>
  <symbol id="i-book" viewBox="0 0 64 64"><path d="M6 14c10-2 18 0 24 6v34c-6-6-14-8-24-6zm52 0c-10-2-18 0-24 6v34c6-6 14-8 24-6z"/></symbol>
  <symbol id="i-people" viewBox="0 0 64 64"><circle cx="22" cy="20" r="8"/><circle cx="44" cy="22" r="7"/><path d="M6 52c0-10 7-18 16-18s16 8 16 18zm32 0c0-6-1-10-4-14 2-2 6-3 10-3 8 0 14 7 14 17z"/></symbol>
  <symbol id="i-building" viewBox="0 0 64 64"><path d="M10 56V18l22-10 22 10v38H38V42H26v14zm8-30h6v6h-6zm11 0h6v6h-6zm11 0h6v6h-6z"/></symbol>
  <symbol id="i-ball" viewBox="0 0 64 64"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="4"/><path d="M32 18l9 7-3 11H26l-3-11z"/></symbol>
  <symbol id="i-award" viewBox="0 0 64 64"><circle cx="32" cy="24" r="16"/><path d="M22 36l-6 22 10-5 6 7 6-22zm20 0 6 22-10-5-6 7"/></symbol>
  <symbol id="i-user" viewBox="0 0 64 64"><circle cx="32" cy="22" r="12"/><path d="M10 58c0-12 10-22 22-22s22 10 22 22z"/></symbol>`;
  document.body.insertAdjacentHTML("afterbegin", `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${ICONS}</svg>`);
  const ic = (id, cls = "ico") => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;

  /* ---------- Helper ---------- */
  const todo = label => `<span class="todo" title="Isi di assets/js/config.js">[${esc(label)}]</span>`;
  const igUrl = S.instagram ? `https://www.instagram.com/${S.instagram}/` : "";
  const ytUrl = S.youtube || "";
  const waNum = (psb) => (psb && S.whatsappPSB) || S.whatsapp || "";
  const waLink = (msg = "", psb = false) => waNum(psb) ? `https://wa.me/${waNum(psb)}${msg ? "?text=" + encodeURIComponent(msg) : ""}` : "";
  const waShow = n => n ? "+" + n.replace(/^(\d{2})(\d{3})(\d{4})(\d+)$/, "$1 $2-$3-$4") : "";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(S.mapsQuery || S.alamat || "")}`;
  const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(S.mapsQuery || S.alamat || "")}&z=15&output=embed`;
  const fmtTgl = d => new Date(d + "T00:00:00").toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  const SHADES = ["#0d5c33", "#14814a", "#1f6f4a", "#0f4f2e", "#2a7d55", "#11663b"];
  const ph = (i, icon) => `<div class="ph" style="background:linear-gradient(135deg,${SHADES[i % 6]},${SHADES[(i + 2) % 6]})"><svg viewBox="0 0 64 64" aria-hidden="true"><use href="#${icon || "i-images"}"/></svg></div>`;
  const media = (it, i) => it.src ? `<img src="${esc(it.src)}" alt="${esc(it.title)}" loading="lazy">` : ph(i, it.icon);

  /* ---------- Menu ---------- */
  const NAV = [
    { id: "profil", label: "Profil", href: "profil.html" },
    { id: "program", label: "Program", href: "program.html", sub: (window.PROGRAM || []).map(p => ({ label: p.nama, small: p.jenjang, href: `program.html#${p.id}` })) },
    { id: "akademik", label: "Akademik", href: "akademik.html", sub: [
      { label: "Kurikulum", href: "akademik.html#kurikulum" },
      { label: "Kegiatan Harian Santri", href: "akademik.html#jadwal" },
      { label: "Ekstrakurikuler", href: "akademik.html#ekskul" },
      { label: "Kalender Akademik", href: "akademik.html#kalender" }] },
    { id: "galeri", label: "Galeri", href: "galeri.html" },
    { id: "berita", label: "Berita", href: "berita.html" },
    { id: "kontak", label: "Kontak", href: "kontak.html", sub: [
      { label: "Hubungi Kami", href: "kontak.html#hubungi" },
      { label: "Permohonan Kunjungan", href: "kontak.html#kunjungan" }] }
  ];

  const socials = cls => `<div class="${cls}">
    ${igUrl ? `<a href="${igUrl}" target="_blank" rel="noopener" aria-label="Instagram">${ic("i-ig")}</a>` : ""}
    ${ytUrl ? `<a href="${ytUrl}" target="_blank" rel="noopener" aria-label="YouTube">${ic("i-yt")}</a>` : ""}
    ${S.facebook ? `<a href="${S.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ic("i-fb")}</a>` : ""}
    ${waLink() ? `<a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${ic("i-wa")}</a>` : ""}
  </div>`;

  const header = `
  <a class="skip" href="#konten">Lewati ke konten</a>
  <header class="brand">
    <div class="wrap">
      <a href="index.html" class="brand-logo"><img src="img/logo.png" alt="Logo ${esc(S.mahad)}" width="68" height="68"></a>
      <div class="brand-text">
        <a href="index.html" class="brand-name">${esc((S.nama || "").toUpperCase())}</a>
        <div class="brand-sub">${ic("i-pin")}<span>${esc(S.alamatPendek || S.alamat)}</span></div>
      </div>
      <div class="brand-meta">
        <span class="today"></span>
        ${socials("socials")}
      </div>
    </div>
  </header>
  <nav class="nav" aria-label="Menu utama">
    <div class="wrap">
      <a href="index.html" class="nav-home${PAGE === "beranda" ? " active" : ""}" aria-label="Beranda">${ic("i-home")}</a>
      <ul class="menu" id="menu">
        ${NAV.map(n => n.sub ? `
          <li class="has-sub">
            <button type="button" class="${PAGE === n.id ? "active" : ""}" aria-expanded="false">${n.label} ${ic("i-caret", "ico caret")}</button>
            <ul class="drop">
              <li><a href="${n.href}"><b>Semua ${n.label}</b></a></li>
              ${n.sub.map(s => `<li><a href="${s.href}">${esc(s.label)}${s.small ? `<small>${esc(s.small)}</small>` : ""}</a></li>`).join("")}
            </ul>
          </li>` : `<li><a href="${n.href}" class="${PAGE === n.id ? "active" : ""}"${PAGE === n.id ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("")}
      </ul>
      <a href="psb.html" class="btn-psb${PAGE === "psb" ? " on" : ""}">${ic("i-pen")}PSB<span>&nbsp;${S.psb && S.psb.tahunAjaran ? S.psb.tahunAjaran : "Pendaftaran"}</span></a>
      <button class="burger" id="burger" type="button" aria-label="Buka menu" aria-controls="menu" aria-expanded="false">${ic("i-menu")}</button>
    </div>
  </nav>
  <div class="ticker">
    <div class="wrap">
      <span class="tag">TERKINI</span>
      <a href="berita.html" class="ticker-text" id="ticker">${esc((S.ticker || [""])[0])}</a>
    </div>
  </div>`;

  const footer = `
  <footer class="site-footer">
    <div class="wrap">
      <div class="fgrid">
        <div>
          <div class="fbrand"><img src="img/logo.png" alt="" width="56" height="56"><b>${esc(S.namaLengkap)}</b></div>
          <p>${esc(S.alamat)}</p>
          <p class="fyay">${esc(S.yayasan)}</p>
        </div>
        <div>
          <h4>Program Pendidikan</h4>
          <ul>${(window.PROGRAM || []).map(p => `<li><a href="program.html#${p.id}">${esc(p.nama)} <small>· ${esc(p.jenjang)}</small></a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Tautan</h4>
          <ul>
            <li><a href="profil.html">Profil Pondok</a></li>
            <li><a href="akademik.html">Akademik</a></li>
            <li><a href="galeri.html">Galeri</a></li>
            <li><a href="berita.html">Berita</a></li>
            <li><a href="psb.html">Pendaftaran Santri Baru</a></li>
          </ul>
        </div>
        <div>
          <h4>Kontak</h4>
          <ul class="fcontact">
            <li>${ic("i-wa")}<span>${S.whatsapp ? `<a href="${waLink()}" target="_blank" rel="noopener">${waShow(S.whatsapp)}</a>` : todo("nomor WhatsApp")}</span></li>
            ${S.email ? `<li>${ic("i-mail")}<span>${esc(S.email)}</span></li>` : ""}
            ${S.jamKantor ? `<li>${ic("i-clock")}<span>${esc(S.jamKantor)}</span></li>` : ""}
            <li>${ic("i-pin")}<span><a href="${mapsUrl}" target="_blank" rel="noopener">Buka di Google Maps</a></span></li>
          </ul>
        </div>
      </div>
      <div class="copy">
        <span>© ${new Date().getFullYear()} ${esc(S.namaLengkap)}</span>
        ${socials("fsocial")}
      </div>
    </div>
  </footer>`;

  const h = $("#site-header"), f = $("#site-footer");
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  /* ---------- Menu interaksi ---------- */
  const burger = $("#burger");
  burger && (burger.onclick = () => {
    const open = $("#menu").classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  $$(".menu > li.has-sub > button").forEach(b => b.addEventListener("click", e => {
    e.stopPropagation();
    const li = b.parentElement, was = li.classList.contains("open");
    $$(".menu > li.open").forEach(x => { x.classList.remove("open"); x.firstElementChild.setAttribute("aria-expanded", "false"); });
    if (!was) { li.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
  }));
  document.addEventListener("click", e => { if (!e.target.closest(".menu > li")) $$(".menu > li.open").forEach(x => x.classList.remove("open")); });
  $$(".menu a").forEach(a => a.addEventListener("click", () => { $("#menu").classList.remove("open"); }));

  /* ---------- Tanggal & ticker ---------- */
  $$(".today").forEach(el => el.textContent = new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }));
  const T = S.ticker || [];
  if (T.length > 1) {
    let t = 0;
    setInterval(() => {
      const el = $("#ticker"); if (!el) return;
      el.style.opacity = 0;
      setTimeout(() => { t = (t + 1) % T.length; el.textContent = T[t]; el.style.opacity = 1; }, 350);
    }, 4500);
  }

  /* ---------- Lightbox ---------- */
  let LB = null, lbItems = [], cur = 0, lastFocus = null;
  function ensureLb() {
    if (LB) return LB;
    document.body.insertAdjacentHTML("beforeend", `
    <div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Pratinjau foto" hidden>
      <div class="lb-top"><span id="lbCount"></span><button class="lb-btn" id="lbClose" type="button" aria-label="Tutup">${ic("i-close")}</button></div>
      <div class="lb-stage">
        <button class="lb-btn lb-prev" id="lbPrev" type="button" aria-label="Sebelumnya">${ic("i-left")}</button>
        <div class="lb-media" id="lbMedia"></div>
        <button class="lb-btn lb-next" id="lbNext" type="button" aria-label="Berikutnya">${ic("i-right")}</button>
      </div>
      <div class="lb-cap" id="lbCap"></div>
    </div>`);
    LB = $("#lb");
    $("#lbClose").onclick = closeLb;
    $("#lbPrev").onclick = () => showLb(cur - 1);
    $("#lbNext").onclick = () => showLb(cur + 1);
    LB.addEventListener("click", e => { if (e.target === LB || e.target.classList.contains("lb-stage")) closeLb(); });
    document.addEventListener("keydown", e => {
      if (LB.hidden) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") showLb(cur - 1);
      if (e.key === "ArrowRight") showLb(cur + 1);
    });
    let sx = null;
    LB.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
    LB.addEventListener("touchend", e => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) showLb(cur + (dx < 0 ? 1 : -1));
      sx = null;
    });
    return LB;
  }
  function showLb(v) {
    cur = (v + lbItems.length) % lbItems.length;
    const g = lbItems[cur];
    $("#lbMedia").innerHTML = media(g, g.i);
    $("#lbCap").innerHTML = `<b>${esc(g.title)}</b><span>${esc(catLabel(g.cat))}</span>`;
    $("#lbCount").textContent = `${cur + 1} / ${lbItems.length}`;
  }
  function openLb(items, v) {
    ensureLb(); lbItems = items; lastFocus = document.activeElement;
    showLb(v); LB.hidden = false;
    requestAnimationFrame(() => LB.classList.add("show"));
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  }
  function closeLb() {
    LB.classList.remove("show"); LB.hidden = true;
    document.body.style.overflow = "";
    lastFocus && lastFocus.focus();
  }

  /* ---------- Komponen konten ---------- */
  const catLabel = id => ((window.KATEGORI_GALERI || []).find(k => k.id === id) || {}).label || "";

  function galleryGrid(el, items) {
    el.innerHTML = items.length ? items.map((g, v) => `
      <figure class="item" style="animation-delay:${v * 40}ms">
        <button type="button" class="thumb" data-v="${v}" aria-label="Perbesar foto ${esc(g.title)}">
          ${media(g, g.i)}
          <span class="zoom">${ic("i-zoom")}</span>
          <span class="cap"><b>${esc(g.title)}</b><span>${esc(catLabel(g.cat))}</span></span>
        </button>
      </figure>`).join("") : `<p class="empty">Belum ada foto di kategori ini.</p>`;
    $$(".thumb", el).forEach(b => b.onclick = () => openLb(items, +b.dataset.v));
  }

  function renderGallery(opts = {}) {
    const grid = $(opts.grid || "#grid"); if (!grid) return;
    const all = (window.GALERI || []).map((g, i) => ({ ...g, i }));
    if (opts.limit) { galleryGrid(grid, all.slice(0, opts.limit)); return; }
    const fbox = $(opts.filters || "#filters");
    let filter = "all";
    const draw = () => {
      if (fbox) fbox.innerHTML = [{ id: "all", label: "Semua" }, ...(window.KATEGORI_GALERI || [])].map(k => {
        const n = k.id === "all" ? all.length : all.filter(g => g.cat === k.id).length;
        return `<button type="button" class="chip" data-f="${k.id}" aria-pressed="${k.id === filter}">${k.id === "all" ? ic("i-grid") : ""}${esc(k.label)} <span class="count">${n}</span></button>`;
      }).join("");
      galleryGrid(grid, all.filter(g => filter === "all" || g.cat === filter));
    };
    fbox && fbox.addEventListener("click", e => { const c = e.target.closest(".chip"); if (c) { filter = c.dataset.f; draw(); } });
    draw();
  }

  function renderVideos(sel = "#vgrid") {
    const el = $(sel); if (!el) return;
    const fallback = ytUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(S.namaLengkap || "")}`;
    el.innerHTML = (window.VIDEO || []).map((v, i) => `
      <a class="vcard" href="${esc(v.url || fallback)}" target="_blank" rel="noopener">
        <div class="vthumb" style="background:linear-gradient(135deg,${SHADES[(i + 1) % 6]},${SHADES[(i + 4) % 6]})">
          <span class="play">${ic("i-right")}</span>
        </div>
        <div class="vbody"><b>${esc(v.title)}</b><span>${esc(v.note)}</span></div>
      </a>`).join("");
  }

  const sortedNews = () => [...(window.BERITA || [])].sort((a, b) => b.tanggal.localeCompare(a.tanggal));
  function newsCard(b, i) {
    return `<article class="ncard">
      <a href="berita.html?id=${encodeURIComponent(b.id)}" class="nthumb">${b.gambar ? `<img src="${esc(b.gambar)}" alt="" loading="lazy">` : ph(i + 1, b.icon)}${b.contoh ? `<span class="badge-contoh">Contoh</span>` : ""}</a>
      <div class="nbody">
        <div class="nmeta"><span class="nkat">${esc(b.kategori)}</span><span>${ic("i-cal")}${fmtTgl(b.tanggal)}</span></div>
        <h3><a href="berita.html?id=${encodeURIComponent(b.id)}">${esc(b.judul)}</a></h3>
        <p>${esc(b.ringkas)}</p>
        <a class="more-link" href="berita.html?id=${encodeURIComponent(b.id)}">Selengkapnya ${ic("i-arrow")}</a>
      </div>
    </article>`;
  }
  function renderNews(sel, limit) {
    const el = $(sel); if (!el) return;
    const list = sortedNews().slice(0, limit || 999);
    el.innerHTML = list.length ? list.map(newsCard).join("") : `<p class="empty">Belum ada berita.</p>`;
  }

  function renderPrograms(sel) {
    const el = $(sel); if (!el) return;
    el.innerHTML = (window.PROGRAM || []).map((p, i) => `
      <a class="pcard" href="program.html#${p.id}">
        <span class="picon" style="background:linear-gradient(135deg,${SHADES[i % 6]},${SHADES[(i + 1) % 6]})"><svg viewBox="0 0 64 64" aria-hidden="true"><use href="#${p.icon}"/></svg></span>
        <span class="pjenjang">${esc(p.jenjang)}</span>
        <h3>${esc(p.nama)}${p.lengkap !== p.nama ? ` <small>${esc(p.lengkap)}</small>` : ""}</h3>
        <p>${esc(p.ringkas)}</p>
        <span class="more-link">Lihat program ${ic("i-arrow")}</span>
      </a>`).join("");
  }

  /* ---------- Isi otomatis elemen bertanda data-site ---------- */
  $$("[data-site]").forEach(el => {
    const k = el.dataset.site;
    const map = {
      alamat: () => esc(S.alamat),
      wa: () => S.whatsapp ? `<a href="${waLink()}" target="_blank" rel="noopener">${waShow(S.whatsapp)}</a>` : todo("nomor WhatsApp"),
      waPSB: () => waNum(true) ? `<a href="${waLink("", true)}" target="_blank" rel="noopener">${waShow(waNum(true))}</a>` : todo("nomor WhatsApp panitia"),
      email: () => S.email ? esc(S.email) : todo("email"),
      jam: () => S.jamKantor ? esc(S.jamKantor) : todo("jam layanan"),
      ig: () => S.instagram ? `<a href="${igUrl}" target="_blank" rel="noopener">@${esc(S.instagram)}</a>` : todo("Instagram"),
      tahun: () => esc(S.psb && S.psb.tahunAjaran),
      pengasuh: () => S.pengasuh ? esc(S.pengasuh) : todo("nama pengasuh"),
      berdiri: () => S.tahunBerdiri ? esc(S.tahunBerdiri) : todo("tahun"),
      santri: () => (S.statistik || {}).santri ? esc(S.statistik.santri) : "—",
      pengajar: () => (S.statistik || {}).pengajar ? esc(S.statistik.pengajar) : "—",
      alumni: () => (S.statistik || {}).alumni ? esc(S.statistik.alumni) : "—",
      yayasan: () => esc(S.yayasan),
      nama: () => esc(S.namaLengkap)
    };
    if (map[k]) el.innerHTML = map[k]();
  });
  $$("[data-href]").forEach(el => {
    const k = el.dataset.href;
    const url = { maps: mapsUrl, ig: igUrl, yt: ytUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(S.namaLengkap || "")}`, form: S.psb && S.psb.formulirOnline, wa: waLink(), waPSB: waLink("Assalamu'alaikum, saya ingin bertanya tentang pendaftaran santri baru.", true) }[k];
    if (url) el.href = url; else el.hidden = true;
  });
  $$("iframe[data-map]").forEach(f => f.src = mapsEmbed);

  /* ---------- Form → WhatsApp ---------- */
  function waForm(form, build, psb) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const out = $(".form-note", form);
      if (!form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const link = waLink(build(data), psb);
      if (!link) { out.className = "form-note warn"; out.textContent = "Nomor WhatsApp admin belum diatur. Isi 'whatsapp' di file assets/js/config.js."; return; }
      out.className = "form-note ok"; out.innerHTML = `Pesan sudah disiapkan. Jika WhatsApp tidak terbuka otomatis, <a href="${link}" target="_blank" rel="noopener">klik di sini</a>.`;
      window.open(link, "_blank", "noopener");
    });
  }

  window.APP = { $, $$, esc, ic, todo, media, ph, fmtTgl, renderGallery, renderVideos, renderNews, renderPrograms, sortedNews, newsCard, waForm, waLink, mapsUrl, SHADES };
})();
