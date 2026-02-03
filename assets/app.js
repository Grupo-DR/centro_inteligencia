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
async function loadStatus() {
  try {
    const res = await fetch("assets/data/status.json", { cache: "no-store" });
    if (res.ok) {
      window.REPORT_STATUS = await res.json();
    }
  } catch (e) {
    console.error("Erro ao carregar status:", e);
    window.REPORT_STATUS = {};
  }
}

function renderCatalog() {
  const grid =
    document.getElementById('catalog') ||
    document.getElementById('catalog-grid');
  if (!grid || !Array.isArray(window.REPORTS)) return;

  const statusData = window.REPORT_STATUS || {};

  grid.innerHTML = window.REPORTS.map(r => {
    const s = statusData[r.id] || { status: 'unknown', updatedAt: '-' };
    const dotClass = s.status === 'updated' ? 'bg-success' : (s.status === 'outdated' ? 'bg-danger' : 'bg-secondary');

    return `
      <div class="col-md-6 mb-4">
        <div class="card bg-glass shadow-sm h-100 border-0">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="badge bg-primary-subtle text-primary border-primary-subtle">${r.area || ''}</span>
              <div class="d-flex align-items-center small text-secondary">
                <span class="status-dot ${dotClass} me-2"></span>
                <span>Atu: ${s.updatedAt}</span>
              </div>
            </div>
            <h5 class="card-title fw-bold mb-3">${r.title}</h5>
            
            <div class="metadata-grid small text-secondary mb-3">
              <div class="mb-1"><strong>Guardião Informação:</strong> ${r.guardiao || '-'}</div>
              <div class="mb-1"><strong>Responsável pela Atualização:</strong> ${r.responsavel || '-'}</div>
              <div class="mb-1"><strong>Fontes:</strong> ${r.fontes || '-'}</div>
              <div class="mb-1"><strong>Período de Atualização:</strong> ${r.periodicidade || '-'}</div>
            </div>

            ${r.detalhes ? `
              <div id="desc-${r.id}" class="description-box mb-3 d-none">
                <div class="p-3 bg-light rounded-3 small">
                  ${r.detalhes}
                </div>
              </div>
            ` : ''}
            
            <div class="mt-auto d-flex gap-2">
              <a href="viewer.html?id=${r.id}" class="btn btn-primary btn-sm flex-grow-1">
                Acessar Relatório
              </a>
              ${r.detalhes ? `
                <button onclick="toggleDesc('${r.id}')" class="btn btn-outline-secondary btn-sm">
                  Ver Detalhes
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleDesc(id) {
  const el = document.getElementById(`desc-${id}`);
  if (el) {
    el.classList.toggle('d-none');
    // Mudar texto do botão (opcional, mas bom)
    const btn = event.target;
    if (btn && btn.tagName === 'BUTTON') {
      btn.textContent = el.classList.contains('d-none') ? 'Ver Detalhes' : 'Ocultar Detalhes';
    }
  }
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
document.addEventListener('DOMContentLoaded', async () => {
  const ok = ensureSignedInGuard();
  if (!ok) return;

  await loadStatus();

  try { renderCatalog && renderCatalog(); } catch (e) { }
  try { renderViewer && renderViewer(); } catch (e) { }
});
