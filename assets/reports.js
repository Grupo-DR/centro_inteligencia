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
    periodicidade: 'Duas atualizações diárias de Segunda a Sexta',
    detalhes: `
      <ul>
        <li><strong>Indicadores financeiros consolidados</strong>, incluindo:
          <ul>
            <li>Faturamento bruto e líquido</li>
            <li>Custos e despesas</li>
            <li>Resultado total (margem em R$)</li>
          </ul>
        </li>
        <li><strong>Análise histórica por ano</strong>, com:
          <ul>
            <li>Detalhamento por grupo de contas</li>
            <li>Comparação entre exercícios</li>
          </ul>
        </li>
        <li><strong>Resultado mensal</strong>, apresentando:
          <ul>
            <li>Valores realizados</li>
            <li>Comparativos com budget e forecast</li>
            <li>Percentuais de variação</li>
          </ul>
        </li>
        <li><strong>Evolução do resultado mensal</strong>, com:
          <ul>
            <li>Faturamento x custos/despesas por mês</li>
            <li>Evolução da margem total</li>
          </ul>
        </li>
        <li><strong>Gestão de fornecedores e clientes</strong>, com:
          <ul>
            <li>Ranking por valor total</li>
            <li>Detalhamento por empresa/pessoa, centro de custo e histórico</li>
          </ul>
        </li>
        <li><strong>Análise de headcount</strong>, incluindo:
          <ul>
            <li>Quantidade de pessoas (diretos e indiretos)</li>
            <li>Comparativo entre budget, forecast e realizado</li>
            <li>Indicadores de custo por pessoa</li>
          </ul>
        </li>
        <li><strong>Filtros interativos</strong>, permitindo segmentação por:
          <ul>
            <li>Ano, Mês</li>
            <li>Centro de custo</li>
            <li>Empresa/Pessoa</li>
            <li>Contexto</li>
          </ul>
        </li>
      </ul>
    `,
    url: 'https://app.powerbi.com/view?r=eyJrIjoiNzU4ZGM5Y2EtNjllNi00ODM3LTgyOTYtN2IxNDIzNWE5MmQ4IiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dashboardFinanceiro-gerencial',
    title: 'Dashboard - Resultado Gerencial DR',
    area: 'Financeiro',
    guardiao: 'Sergio Farinacio (Controladoria)',
    responsavel: 'Antonio Augusto da Silva (Comercial)',
    fontes: 'Razão Contábil TOTVS e Tabelas Medições',
    periodicidade: 'Duas atualizações diárias de Segunda a Sexta',
    detalhes: `
      <ul>
        <li><strong>Indicadores gerenciais consolidados</strong>, incluindo:
          <ul>
            <li>Medição bruta e líquida</li>
            <li>Custos e despesas totais</li>
            <li>Resultado total (margem em R$)</li>
          </ul>
        </li>
        <li><strong>Análise gerencial por grupo de contas</strong>, com:
          <ul>
            <li>Comparação entre Budget, Forecast e Real</li>
            <li>Percentuais de variação (% Budget, % Forecast, % Real)</li>
            <li>Comparativo mês contra mês (% M-1)</li>
          </ul>
        </li>
        <li><strong>Detalhamento mensal por grupo</strong>, apresentando:
          <ul>
            <li>Valores mês a mês</li>
            <li>Total acumulado por conta</li>
          </ul>
        </li>
        <li><strong>Gestão de fornecedores e clientes</strong>, com:
          <ul>
            <li>Ranking por valor total</li>
            <li>Histórico de notas faturadas</li>
            <li>Detalhamento por empresa/pessoa, centro de custo e mês</li>
          </ul>
        </li>
        <li><strong>Análise de headcount</strong>, incluindo:
          <ul>
            <li>Quantidade de pessoas (diretos e indiretos)</li>
            <li>Comparação entre budget e realizado</li>
            <li>Indicadores de faturamento, despesa e resultado por pessoa</li>
          </ul>
        </li>
        <li><strong>Filtros interativos</strong>, permitindo segmentação por:
          <ul>
            <li>Ano, Mês</li>
            <li>Centro de custo</li>
            <li>Empresa/Pessoa</li>
            <li>Contexto</li>
          </ul>
        </li>
      </ul>
    `,
    url: "https://app.powerbi.com/view?r=eyJrIjoiYjc2YjQ1Y2EtNjBhMC00MzNiLWE1MDItNDM5ZWM0MjdiZTRhIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9&pageName=fe92497007061cb7b309"
  },
  {
    id: 'saldoNotas',
    title: 'Dashboard - Saldo de Notas',
    area: 'Financeiro',
    guardiao: 'Sergio Farinacio (Controladoria)',
    responsavel: 'Antonio Augusto da Silva (Comercial)',
    fontes: 'Razão Contábil TOTVS e Tabelas Medições',
    periodicidade: 'Duas atualizações diárias de Segunda a Sexta',
    detalhes: `
      <ul>
        <li><strong>Visão consolidada de saldo de notas</strong>, incluindo:
          <ul>
            <li>Medição do mês</li>
            <li>Faturamento do mês</li>
            <li>Saldo mensal</li>
            <li>Saldo acumulado final</li>
          </ul>
        </li>
        <li><strong>Análise por regional e centro de custo</strong>, com:
          <ul>
            <li>Detalhamento hierárquico</li>
            <li>Identificação de saldos positivos e negativos</li>
          </ul>
        </li>
        <li><strong>Evolução mensal</strong>, apresentando:
          <ul>
            <li>Medição x faturamento por mês</li>
            <li>Evolução do saldo acumulado ao longo do período</li>
          </ul>
        </li>
        <li><strong>Saldo residual</strong>, destacando:
          <ul>
            <li>Valores pendentes</li>
            <li>Ajustes acumulados</li>
          </ul>
        </li>
        <li><strong>Detalhamento mensal por centro de custo</strong>, com:
          <ul>
            <li>Valores mês a mês</li>
            <li>Total acumulado por período</li>
          </ul>
        </li>
        <li><strong>Filtros interativos</strong>, permitindo segmentação por:
          <ul>
            <li>Tipo de centro de custo</li>
            <li>Ano</li>
            <li>Status</li>
            <li>Mês</li>
          </ul>
        </li>
      </ul>
    `,
    url: 'https://app.powerbi.com/view?r=eyJrIjoiMzEzZjE5ZDAtYTE4YS00N2RjLWI1ZDgtYTRkNTJjZjZmYzBlIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'dashboardReuniaoSemanal',
    title: 'Dashboard - Reunião Semanal',
    area: 'Financeiro',
    guardiao: 'Sergio Farinacio (Controladoria)',
    responsavel: 'Antonio Augusto da Silva (Comercial)',
    fontes: 'Razão Contábil TOTVS e Tabelas Medições',
    periodicidade: 'Duas atualizações diárias de Segunda a Sexta',
    detalhes: `
      <ul>
        <li><strong>Indicadores financeiros consolidados</strong>, incluindo:
          <ul>
            <li>Faturamento (Budget, Forecast, Projeção e Real)</li>
            <li>Custos (Budget, Forecast, Projeção e Real)</li>
          </ul>
        </li>
        <li><strong>Controle por etapas de lançamento</strong>, permitindo:
          <ul>
            <li>Acompanhamento por fase (Etapas 1 a 4)</li>
            <li>Análise de valores lançados e projetados</li>
          </ul>
        </li>
        <li><strong>Análise gerencial por grupo de contas</strong>, com:
          <ul>
            <li>Comparação entre Budget, Forecast, Projeção e Real</li>
            <li>Percentuais de variação (% Budget, % Forecast, % Projeção, % Real)</li>
          </ul>
        </li>
        <li><strong>Detalhamento por centro de custo e regional</strong>, possibilitando:
          <ul>
            <li>Análises segmentadas</li>
            <li>Identificação de desvios semanais</li>
          </ul>
        </li>
        <li><strong>Histórico de notas faturadas</strong>, com:
          <ul>
            <li>Detalhamento por mês, centro de custo e descrição</li>
            <li>Totalização por período</li>
          </ul>
        </li>
        <li><strong>Filtros interativos</strong>, permitindo segmentação por:
          <ul>
            <li>Contexto (Construtora / Rental)</li>
            <li>Regional, Etapa</li>
            <li>Ano, Mês</li>
            <li>Centro de custo</li>
          </ul>
        </li>
      </ul>
    `,
    url: 'https://app.powerbi.com/view?r=eyJrIjoiZjRiYmZjMTAtZGI0YS00ZWJjLTliZjQtMGMyZWUzN2JkNWJjIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  },
  {
    id: 'Dashboard - Gestão Combustível',
    title: 'Dashboard - Gestão de Abastecimentos',
    area: 'Gestão de Ativos',
    guardiao: 'Ana Luiza (Gestão de Ativos)',
    responsavel: 'Antonio Augusto da Silva (Comercial)',
    fontes: 'Ticket Log',
    periodicidade: 'Duas atualizações diárias de Segunda a Sexta',
    detalhes: `
      <ul>
        <li><strong>Indicadores consolidados de abastecimento</strong>, incluindo:
          <ul>
            <li>Valor total de abastecimentos por tipo de combustível</li>
            <li>Média mensal de gastos</li>
          </ul>
        </li>
        <li><strong>Análise de despesas</strong>, com:
          <ul>
            <li>Despesa mensal total</li>
            <li>Despesa por centro de custo</li>
            <li>Despesa por estado, cidade e posto</li>
          </ul>
        </li>
        <li><strong>Análise de preços de combustíveis</strong>, apresentando:
          <ul>
            <li>Preço médio por produto</li>
            <li>Valores mínimos, médios e máximos por litro</li>
            <li>Comparativo mensal de variação de preços</li>
          </ul>
        </li>
        <li><strong>Visão analítica detalhada</strong>, com:
          <ul>
            <li>Índices de informações por UF, cidade e estabelecimento</li>
            <li>Total abastecido</li>
            <li>Média de valor por litro</li>
            <li>Média ponderada por volume</li>
          </ul>
        </li>
        <li><strong>Filtros interativos</strong>, permitindo segmentação por:
          <ul>
            <li>Ano, Mês</li>
            <li>UF, Cidade, Estabelecimento</li>
            <li>Tipo de combustível</li>
            <li>Centro de custo</li>
            <li>Regional</li>
          </ul>
        </li>
      </ul>
    `,
    url: 'https://app.powerbi.com/view?r=eyJrIjoiY2MzZWZmYWItYThhNC00MTE5LThmMDUtYmU2Nzg4YjIwNTFhIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZC'
  },
  /*
  {
    id: 'gestao-absenteismo',
    title: 'Dashboard - Indicadores de Gestão de Absenteísmo',
    area: 'Capital Humano',
    guardiao: 'Eloisa Vilela (Capital Humano)',
    responsavel: 'Antonio Augusto da Silva (Comercial)',
    fontes: 'Espelho de Ponto (TOTVS) e Folha de Pagamento',
    periodicidade: 'Mensal',
    detalhes: `
      <ul>
        <li><strong>Taxa de Absenteísmo Geral</strong>, incluindo:
          <ul>
            <li>Taxa de faltas (% do total)</li>
            <li>Taxa de atrasos (% do total)</li>
          </ul>
        </li>
        <li><strong>Volume de horas de absenteísmo</strong>:
          <ul>
            <li>Horas de faltas</li>
            <li>Horas de atrasos</li>
            <li>Dias equivalentes de ausência (base 9h/dia)</li>
          </ul>
        </li>
        <li><strong>Evolução mensal da taxa de absenteísmo</strong>, comparando horas de atrasos, horas de faltas e taxa consolidada ao longo dos meses</li>
        <li><strong>Visão executiva por Regional e Sede (Metas x Realizado)</strong>:
          <ul>
            <li>Comparativo de metas e resultados percentuais</li>
            <li>Indicadores de aderência por regional (Regional 01, Regional 02, Sede e Total)</li>
          </ul>
        </li>
        <li><strong>Indicadores detalhados por Colaborador</strong>:
          <ul>
            <li>Visão analítica com Chapa, Nome, Horas e Taxas de absenteísmo/atrasos/faltas</li>
            <li>Classificação de status de absenteísmo (Crítico, Atenção, Saudável)</li>
            <li>Filtros por regional, status e centro de custo</li>
          </ul>
        </li>
        <li><strong>Histórico detalhado de ocorrências</strong>:
          <ul>
            <li>Lançamentos individuais por data, colaborador, chapa e centro de custo</li>
            <li>Pesquisa direta por nome de colaborador</li>
          </ul>
        </li>
      </ul>
    `,
    url: 'https://app.powerbi.com/view?r=eyJrIjoiNmY4NDcyZjgtNGM1MS00OWZiLTg4ZjgtMmRlMjczMWFmZThmIiwidCI6ImZhMmNlZmIyLTgzMWQtNGJkZS1iNGI5LTA5ZDM4NGE4NGZmZCJ9'
  }
  */
];



window.REPORTS = REPORTS;
