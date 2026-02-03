DR Portal (Static) — HTML + CSS + JS (versão final)

ARQUIVOS:
- index.html          -> catálogo de relatórios (cards)
- viewer.html         -> página do relatório (usa ?id=...)
- assets/styles.css   -> estilos (fundo com blur, cards vidro)
- assets/reports.js   -> lista de relatórios para editar
- assets/app.js       -> renderização do catálogo e viewer
- assets/auth.msal.js -> TEMPLATE COMENTADO de autenticação MSAL.js
- img/background.jpg, img/logo.png, img/onedrive.png -> coloque aqui seus arquivos

COMO RODAR LOCALMENTE:
- Abra index.html ou sirva com um servidor estático (Live Server, npx serve, etc).

COMO PUBLICAR:
- Qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3/CloudFront, etc).

EDITAR RELATÓRIOS:
- Edite assets/reports.js (url = link Publish to web do Power BI).

HABILITAR LOGIN (OPCIONAL FUTURO - COMENTADO):
1) Em index.html e viewer.html, descomente os dois <script> do MSAL e do arquivo auth.msal.js.
2) Em assets/auth.msal.js, preencha TENANT_ID e CLIENT_ID.
3) Em assets/app.js, descomente a chamada ensureSignedIn() no DOMContentLoaded.
4) (Opcional) Em index.html, descomente os elementos de usuário/botão sair na navbar.
OBS: Em hospedagem puramente estática, isso controla a UI via JS. Para proteger o acesso a arquivos,
    use um serviço que ofereça autenticação na borda (ex.: Azure Static Web Apps Auth).
