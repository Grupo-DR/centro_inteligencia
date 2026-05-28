const fs = require('fs');
const path = require('path');

// Caminho absoluto para o status.json a partir deste script
const statusFilePath = path.join(__dirname, '../../assets/data/status.json');

// Recebe as variáveis do ambiente injetadas pelo GitHub Actions
const reportId = process.env.REPORT_ID;
const updatedAtInput = process.env.UPDATED_AT;

console.log(`Iniciando atualização de status...`);
console.log(`REPORT_ID recebido: ${reportId}`);
console.log(`UPDATED_AT recebido: ${updatedAtInput}`);

if (!reportId || !updatedAtInput) {
  console.error("Erro: As variáveis de ambiente REPORT_ID e UPDATED_AT são obrigatórias.");
  process.exit(1);
}

// 1. Validar se o arquivo status.json existe
if (!fs.existsSync(statusFilePath)) {
  console.error(`Erro: Arquivo status.json não encontrado em: ${statusFilePath}`);
  process.exit(1);
}

try {
  // 2. Ler e parsear o status.json
  const fileContent = fs.readFileSync(statusFilePath, 'utf8');
  const statusData = JSON.parse(fileContent);

  // 3. Formatar a data para garantir que ela esteja amigável
  // O Power Automate pode passar a data em formato ISO ou texto.
  // Vamos tentar formatar caso venha como objeto Date, ou usar o texto diretamente.
  let formattedDate = updatedAtInput;
  try {
    const dateObj = new Date(updatedAtInput);
    if (!isNaN(dateObj.getTime())) {
      // Usando Intl.DateTimeFormat para formatar no fuso de Brasília (America/Sao_Paulo)
      // independente do fuso horário da máquina/servidor onde o script roda.
      const formatter = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      
      const formattedParts = formatter.formatToParts(dateObj);
      const day = formattedParts.find(p => p.type === 'day').value;
      const month = formattedParts.find(p => p.type === 'month').value;
      const year = formattedParts.find(p => p.type === 'year').value;
      const hour = formattedParts.find(p => p.type === 'hour').value;
      const minute = formattedParts.find(p => p.type === 'minute').value;
      
      formattedDate = `${day}/${month}/${year} ${hour}:${minute}`;
    }
  } catch (err) {
    console.log("Mantendo formato original de data informado.");
  }

  // 4. Suportar múltiplos IDs separados por vírgula (ex: "id1,id2,id3")
  const reportIds = reportId.split(',').map(id => id.trim());

  reportIds.forEach(id => {
    if (!statusData[id]) {
      console.log(`Relatório '${id}' não existia no status.json. Criando nova entrada.`);
      statusData[id] = {};
    }
    statusData[id].status = "updated";
    statusData[id].updatedAt = formattedDate;
  });

  // 5. Escrever de volta no status.json de forma bonita (indentação de 4 espaços)
  fs.writeFileSync(statusFilePath, JSON.stringify(statusData, null, 4), 'utf8');
  console.log(`Sucesso: Os relatórios [${reportIds.join(', ')}] foram atualizados para '${formattedDate}'.`);

} catch (error) {
  console.error("Ocorreu um erro ao atualizar o arquivo status.json:", error);
  process.exit(1);
}
