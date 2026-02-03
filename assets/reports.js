// Edite esta lista para adicionar/remover links públicos do Power BI
const REPORTS = [
  {
    id: 'gestao-comercial-v1',
    title: 'Dashboard - Saldo de Contratos',
    area: 'Gestão de Contratos',
    guardiao: 'Maria Tereza Silva de Albuquerque (Gestão Contratual)',
    responsavel: 'Antonio Silva (antonio.silva@grupodr.com.br)',
    fontes: 'XXXXXXXXXXX',
    periodicidade: 'Mensal',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiN2I3YTNlYjMtNjA4ZC00ZmI1LWExNWYtMGQxZjAxMTY4YTk4IiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dashboardFinanceiro-rev03',
    title: 'Resultado Financeiro DR',
    area: 'Comercial',
    guardiao: 'Antonio Augusto da Silva (Comercial)',
    responsavel: 'Antonio Silva (antonio.silva@grupodr.com.br)',
    fontes: 'XXXXXXXXXXX',
    periodicidade: 'Segunda a Sexta (10:00)',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiZWJmZDliZjItM2QwYi00MmY2LTkxYmYtZmY5MTViNWYzYzAyIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dashboardFinanceiro-gerencial',
    title: 'Resultado Gerencial DR',
    area: 'Financeiro',
    guardiao: 'Antonio Augusto da Silva (Comercial)',
    responsavel: 'Antonio Silva (antonio.silva@grupodr.com.br)',
    fontes: 'XXXXXXXXXXX',
    periodicidade: 'Segunda a Sexta (10:00)',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiYjFkMjJkNjYtNmVkMC00YjVlLWE2OTEtOGM5MmUxOWM5ZmUzIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'saldoNotas',
    title: 'Saldo de Notas',
    area: 'Financeiro',
    guardiao: 'Antonio Augusto da Silva (Comercial)',
    responsavel: 'Antonio Silva (antonio.silva@grupodr.com.br)',
    fontes: 'XXXXXXXXXXX',
    periodicidade: 'Segunda a Sexta (10:00)',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiMzEzZjE5ZDAtYTE4YS00N2RjLWI1ZDgtYTRkNTJjZjZmYzBlIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dashboard - Reunião Semanal',
    title: 'Reunião Semanal',
    area: 'Financeiro',
    guardiao: 'Antonio Augusto da Silva (Comercial)',
    responsavel: 'Antonio Silva (antonio.silva@grupodr.com.br)',
    fontes: 'XXXXXXXXXXX',
    periodicidade: 'Segunda a Sexta (10:00)',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiNTM4NGRjNDMtMTQzNi00ZWQyLTkyMzktOThjNWI5Njk1NzM0IiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGB5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dr_fuel',
    title: 'Combustíveis',
    area: 'Comercial',
    guardiao: 'Antonio Augusto da Silva (Comercial)',
    responsavel: 'Antonio Silva (antonio.silva@grupodr.com.br)',
    fontes: 'XXXXXXXXXXX',
    periodicidade: 'Segunda a Sexta (10:00)',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiNmNhMTVjM2MtYjE4ZS00ZGQ5LWE0OGEtNGU1Mjk1M2MwZTI2IiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
];



window.REPORTS = REPORTS;