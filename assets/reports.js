// Edite esta lista para adicionar/remover links públicos do Power BI
const REPORTS = [
  {
    id: 'gestao-comercial-v1',
    title: 'Dashboard - Saldo de Contratos',
    area: 'Gestão de Contratos',
    guardiao: 'Maria Tereza Silva de Albuquerque (Gestão Contratual)',
    responsavel: 'Antonio Augusto da Silva (Comercial)',
    fontes: 'Planilha de Controle de Contratos',
    periodicidade: 'Mensal',
    detalhes: `
      <ul>
        <li><strong>Valor total do contrato</strong></li>
        <li><strong>Medição acumulada</strong></li>
        <li><strong>Saldo contratual</strong>, em valor e percentual utilizado</li>
        <li><strong>Acompanhamento de prazos contratuais</strong>, incluindo:
          <ul>
            <li>Prazo total</li>
            <li>Prazo decorrido</li>
            <li>Prazo residual</li>
          </ul>
        </li>
        <li><strong>Evolução mensal da execução</strong>, com:
          <ul>
            <li>Executado do mês</li>
            <li>Saldo de contrato</li>
            <li>Execução acumulada por período</li>
          </ul>
        </li>
        <li><strong>Filtros por centro de custo</strong>, permitindo análises segmentadas</li>
      </ul>
    `,
    url: 'https://app.powerbi.com/view?r=eyJrIjoiN2I3YTNlYjMtNjA4ZC00ZmI1LWExNWYtMGQxZjAxMTY4YTk4IiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dashboardFinanceiro-rev03',
    title: 'Dashboard - Resultado Financeiro DR',
    area: 'Financeiro',
    guardiao: 'Sergio Farinacio (Controladoria)',
    responsavel: 'Antonio Augusto da Silva (Comercial)',
    fontes: 'Razão Contábil TOTVS',
    periodicidade: 'Segunda a Sexta Até (10:00 hrs)',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiZWJmZDliZjItM2QwYi00MmY2LTkxYmYtZmY5MTViNWYzYzAyIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dashboardFinanceiro-gerencial',
    title: 'Dashboard - Resultado Gerencial DR',
    area: 'Financeiro',
    guardiao: 'Sergio Farinacio (Controladoria)',
    responsavel: 'Antonio Augusto da Silva (Comercial)',
    fontes: 'Razão Contábil TOTVS e Tabelas Medições',
    periodicidade: 'Segunda a Sexta Até (10:00 hrs)',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiYjFkMjJkNjYtNmVkMC00YjVlLWE2OTEtOGM5MmUxOWM5ZmUzIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'saldoNotas',
    title: 'Dashboard - Saldo de Notas',
    area: 'Financeiro',
    guardiao: 'Sergio Farinacio (Controladoria)',
    responsavel: 'Antonio Augusto da Silva (Comercial)',
    fontes: 'Razão Contábil TOTVS e Tabelas Medições',
    periodicidade: 'Segunda a Sexta Até (10:00 hrs)',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiMzEzZjE5ZDAtYTE4YS00N2RjLWI1ZDgtYTRkNTJjZjZmYzBlIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dashboardReuniaoSemanal',
    title: 'Dashboard - Reunião Semanal',
    area: 'Financeiro',
    guardiao: 'Sergio Farinacio (Controladoria)',
    responsavel: 'Antonio Augusto da Silva (Comercial)',
    fontes: 'Razão Contábil TOTVS e Tabelas Medições',
    periodicidade: 'Segunda a Sexta Até (10:00 hrs)',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiNTM4NGRjNDMtMTQzNi00ZWQyLTkyMzktOThjNWI5Njk1NzM0IiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGB5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dr_fuel',
    title: 'Dashboard - Gestão de Abastecimentos',
    area: 'Gestão de Ativos',
    guardiao: 'Ana Luiza (Gestão de Ativos)',
    responsavel: 'Antonio Augusto da Silva (Comercial)',
    fontes: 'Ticket Log',
    periodicidade: 'Segunda a Sexta Até (10:00 hrs)',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiNmNhMTVjM2MtYjE4ZS00ZGQ5LWE0OGEtNGU1Mjk1M2MwZTI2IiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
];



window.REPORTS = REPORTS;