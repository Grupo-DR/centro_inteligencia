// ======== GUARD (checa sessão) ========
function ensureSignedInGuard() {
  const s = (typeof requireSessionOrRedirect === 'function')
    ? requireSessionOrRedirect()
    : null;
  if (!s) return false;

  // Preenche navbar
  const chip = document.getElementById('user-chip');
  const btn = document.getElementById('btn-logout');
  const ava = document.getElementById('user-avatar');

  if (chip) {
    chip.textContent = s.name || s.username;
    chip.classList.remove('d-none');
  }
  if (ava && s.photo) {
    ava.src = s.photo;
    ava.classList.remove('d-none');
  }
  if (btn) {
    btn.classList.remove('d-none');
    btn.addEventListener('click', () => logout());
  }

  return true;
}

// ======== UTIL ========
function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

// ======== RENDER CATÁLOGO ========
function renderCatalog() {
  const grid =
    document.getElementById('catalog') ||
    document.getElementById('catalog-grid');
  if (!grid || !Array.isArray(window.REPORTS)) return;

  grid.innerHTML = window.REPORTS.map(r => `
    <div class="col-md-4">
      <div class="card bg-glass shadow-sm h-100">
        <div class="card-body">
          <small class="text-uppercase text-muted">${r.category || r.domain || ''}</small>
          <h5 class="mt-2">${r.title}</h5>
          <p class="small text-secondary">${r.description || ''}</p>
          <p class="small mb-0">Owner: ${r.owner || ''}</p>
          <a href="viewer.html?id=${r.id}" class="stretched-link"></a>
        </div>
      </div>
    </div>
  `).join('');
}

// ======== RENDER VIEWER (iframe do Power BI) ========
function renderViewer() {
  const id = getParam('id');
  if (!id || !window.REPORTS) return;

  const r = window.REPORTS.find(x => x.id === id);
  const frame = document.getElementById('pbi-frame');
  const notFound = document.getElementById('not-found');
  const titleEl = document.getElementById('report-title');

  if (!r) {
    if (frame) frame.classList.add('d-none');
    if (notFound) notFound.classList.remove('d-none');
    return;
  }

  if (frame) {
    frame.classList.remove('d-none');
    frame.src = r.url;
  }

  if (titleEl) {
    titleEl.textContent = r.title;
  }
}

// ======== BOOT =========
document.addEventListener('DOMContentLoaded', () => {
  const ok = ensureSignedInGuard();
  if (!ok) return;

  try { renderCatalog && renderCatalog(); } catch (e) { }
  try { renderViewer && renderViewer(); } catch (e) { }
});
