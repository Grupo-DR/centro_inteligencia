// assets/auth.local.js  —  autenticação local (JSON + SHA-256)

const AUTH_STORE_KEY = "cig_user"; // onde guardo a sessão no sessionStorage

async function sha256Hex(text) {
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

async function loadUsers() {
  // <- seu users.json está em assets/data/users.json
  const res = await fetch("assets/data/users.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Não foi possível carregar users.json");
  const json = await res.json();
  return json.users || [];
}

async function localLogin(username, password) {
  const users = await loadUsers();
  const u = users.find(x => x.username.toLowerCase() === (username || "").toLowerCase());
  if (!u) throw new Error("Usuário ou senha inválidos");

  const hash = await sha256Hex(password);
  if (hash !== u.hash) throw new Error("Usuário ou senha inválidos");

  const session = {
    username: u.username,
    name: u.name,
    role: u.role || "USER",
    photo: u.photo || null,     // <<< adicionamos a foto na sessão
    loginAt: new Date().toISOString()
  };
  sessionStorage.setItem(AUTH_STORE_KEY, JSON.stringify(session));
  return session;
}

function getSession() {
  const raw = sessionStorage.getItem(AUTH_STORE_KEY);
  return raw ? JSON.parse(raw) : null;
}

function requireSessionOrRedirect() {
  const s = getSession();
  if (!s) {
    window.location.href = "login.html";
    return null;
  }
  return s;
}

function logout() {
  sessionStorage.removeItem(AUTH_STORE_KEY);
  window.location.href = "login.html";
}

// Exponha tudo no escopo global para ser usado pelo login.html / app.js
window.localLogin = localLogin;
window.getSession = getSession;
window.requireSessionOrRedirect = requireSessionOrRedirect;
window.logout = logout;
