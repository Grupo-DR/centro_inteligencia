# Centro de Inteligência Gerencial - DR Construtora

Este repositório contém o código-fonte do **Portal Centro de Inteligência Gerencial** da DR Construtora. Trata-se de uma aplicação web puramente estática (HTML, CSS e JavaScript vanilla) desenvolvida para servir como um catálogo centralizado de relatórios gerenciais e dashboards (via Power BI).

## 🚀 Visão Geral

O objetivo do portal é fornecer acesso ágil e seguro aos relatórios da empresa. A interface utiliza uma estética moderna com efeitos de *glassmorphism* (fundo desfocado e cartões translúcidos), construída com base no **Bootstrap 5.3**.

### Arquitetura
Como é uma aplicação estática sem frameworks complexos (como React ou Angular) ou processos de build avançados, a manutenção é muito simples:
- Sem necessidade de `npm install` ou build de produção.
- Todos os arquivos podem ser servidos diretamente por qualquer servidor web estático.
- Os relatórios são embutidos via `<iframe>` usando a funcionalidade "Publish to web" do Power BI (ou links seguros, dependendo da configuração).

## 📂 Estrutura do Projeto

Os arquivos principais estão organizados da seguinte forma:

- `index.html`: Página principal que exibe o catálogo de relatórios em formato de cards.
- `viewer.html`: Página de visualização de um relatório específico. Ela recebe um parâmetro de URL (`?id=...`) para saber qual relatório renderizar.
- `netlify.toml`: Arquivo de configuração de deploy para o Netlify. Contém regras de redirecionamento (SPA fallback) e configurações de publicação.
- `assets/`
  - `app.js`: Script principal responsável por renderizar dinamicamente o catálogo no `index.html` e injetar o iframe correto no `viewer.html`.
  - `reports.js`: **[MUITO IMPORTANTE]** Arquivo onde a lista de relatórios é configurada. É aqui que você adicionará novos relatórios ou atualizará os links existentes.
  - `styles.css`: Arquivo de estilos customizados (fundo com blur, cards com efeito de vidro, etc).
  - `auth.local.js` / `auth.msal.js`: Scripts de autenticação. O `auth.msal.js` é um template comentado para futura integração com Microsoft Authentication Library (MSAL) usando o Azure AD.
- `img/`: Diretório contendo as imagens estáticas da interface (background, logos, ícones).

## 💻 Como Rodar Localmente

Para desenvolver e testar localmente, basta servir os arquivos HTML com um servidor local estático.

**Opção 1: VS Code (Recomendado)**
1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

**Opção 2: Usando Node.js / npx**
Se você tiver o Node.js instalado, abra o terminal na pasta do projeto e rode:
```bash
npx serve .
```

## 📝 Como Adicionar ou Editar Relatórios

A gestão de conteúdo do portal é feita diretamente no arquivo `assets/reports.js`. 

1. Abra o arquivo `assets/reports.js`.
2. Você encontrará um array de objetos. Cada objeto representa um relatório.
3. Para adicionar um novo, basta incluir um objeto com a seguinte estrutura:
   ```javascript
   {
       id: "nome-unico-do-relatorio",
       title: "Título do Relatório que aparecerá no card",
       category: "Categoria (ex: Financeiro, Obras, etc)",
       url: "LINK_DO_POWER_BI_AQUI",
       description: "Breve descrição do relatório",
       thumbnail: "caminho/para/imagem.jpg" // Opcional
   }
   ```
4. Salve o arquivo. O `index.html` fará a leitura e criará o card automaticamente.

## 🔐 Autenticação e Segurança (Trabalhos Futuros)

O portal foi desenhado com preparo para autenticação, mas atualmente funciona de forma estática. 

Caso deseje habilitar o login no futuro via Microsoft/Azure AD:
1. Em `index.html` e `viewer.html`, descomente as tags `<script>` referentes ao MSAL e ao arquivo `auth.msal.js`.
2. Em `assets/auth.msal.js`, preencha as variáveis `TENANT_ID` e `CLIENT_ID` com os dados do aplicativo registrado no Azure AD da empresa.
3. Em `assets/app.js`, descomente a chamada `ensureSignedIn()` dentro do evento `DOMContentLoaded`.
4. Em `index.html`, descomente os elementos referentes ao perfil do usuário (avatar, nome e botão de sair) na navbar.

*Nota: Em hospedagens puramente estáticas, isso protegerá a UI via JavaScript. Para proteger os arquivos fisicamente, recomenda-se usar uma camada de borda que exija autenticação (ex: Azure Static Web Apps com Auth).*

## 🚀 Como Publicar (Deploy)

A aplicação está configurada com um `netlify.toml`, o que significa que está pronta para ser publicada no Netlify.
Para publicar alterações:
1. Faça o commit e push para a branch `main` deste repositório no GitHub.
2. Se a integração com o Netlify já estiver configurada, o deploy ocorrerá automaticamente.
3. Alternativamente, os arquivos podem ser hospedados em qualquer outro serviço (Vercel, GitHub Pages, Cloudflare Pages, S3, etc).

---
**Desenvolvido para DR Construtora e Serviços Ltda.**
