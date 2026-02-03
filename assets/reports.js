// Edite esta lista para adicionar/remover links públicos do Power BI
const REPORTS = [
  {
    id: 'gestao-comercial-v1',
    title: 'Relatório - Saldo de Contratos',
    domain: 'Gestão de Contratos',
    description: 'Atualizações mensais - antonio.silva@grupodr.com.br',
    owner: 'Gestão Contratual - Maria Tereza Silva de Albuquerque',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiN2I3YTNlYjMtNjA4ZC00ZmI1LWExNWYtMGQxZjAxMTY4YTk4IiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dashboardFinanceiro-rev03',
    title: 'Dashboard - Resultado Financeiro DR',
    domain: 'Comercial',
    description: 'Atualizações segundas as Sextas 10:00 - antonio.silva@grupodr.com.br',
    owner: 'Comercial - Antonio Augusto da Silva',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiZWJmZDliZjItM2QwYi00MmY2LTkxYmYtZmY5MTViNWYzYzAyIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dashboardFinanceiro-gerencial',
    title: 'Dashboard - Resultado Gerencial DR',
    domain: 'Financeiro',
    description: 'Atualizações segundas as Sextas 10:00 - antonio.silva@grupodr.com.br',
    owner: 'Comercial - Antonio Augusto da Silva',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiYjFkMjJkNjYtNmVkMC00YjVlLWE2OTEtOGM5MmUxOWM5ZmUzIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'saldoNotas',
    title: 'Dashboard - Saldo de Notas',
    domain: 'Financeiro',
    description: 'Atualizações segundas as Sextas 10:00 - antonio.silva@grupodr.com.br',
    owner: 'Comercial - Antonio Augusto da Silva',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiMzEzZjE5ZDAtYTE4YS00N2RjLWI1ZDgtYTRkNTJjZjZmYzBlIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dashboard - Reunião Semanal',
    title: 'Dashboard Reunião Semanal',
    domain: 'Financeiro',
    description: 'Atualizações segundas as Sextas 10:00 - antonio.silva@grupodr.com.br',
    owner: 'Comercial - Antonio Augusto da Silva',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiNTM4NGRjNDMtMTQzNi00ZWQyLTkyMzktOThjNWI5Njk1NzM0IiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dr_fuel',
    title: 'Dashboard - Combustíveis',
    domain: 'Comercial',
    description: 'Atualizações segundas as Sextas 10:00 - antonio.silva@grupodr.com.br',
    owner: 'Comercial - Antonio Augusto da Silva',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiNmNhMTVjM2MtYjE4ZS00ZGQ5LWE0OGEtNGU1Mjk1M2MwZTI2IiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },

];

window.REPORTS = REPORTS;