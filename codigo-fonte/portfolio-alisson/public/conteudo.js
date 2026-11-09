// EDITE AQUI: altere os textos entre aspas e mantenha a pontuação do arquivo.
// As instruções completas estão em LEIA-ME-EDICAO.md.
window.PORTFOLIO_CONTEUDO = {
  perfil: {
    nome: 'João Alisson',
    nomeCompleto: 'João Alisson da Silva Fonseca',
    cidade: 'Maceió, AL',
    area: 'Desenvolvimento web',
    apresentacao: 'Formado em Análise e Desenvolvimento de Sistemas. Desenvolvo aplicações web e atuo com suporte e infraestrutura de TI.',
    email: 'alisson_fonseca1@hotmail.com',
    whatsapp: '5582998025511',
    whatsappExibicao: '(82) 99802-5511',
    linkedin: 'https://www.linkedin.com/in/joaoalissondasilvafonseca',
    linkedinNome: 'joaoalissondasilvafonseca',
    instagram: 'https://www.instagram.com/_alissonfonseca/',
    instagramNome: '@_alissonfonseca',
    github: 'https://github.com/alissonfonseca9',
    curriculo: './portfolio-media/curriculo-joao-alisson.pdf'
  },
  sobre: {
    primeiroParagrafo: 'Sou tecnólogo em Análise e Desenvolvimento de Sistemas e trabalho com suporte técnico e infraestrutura. Ao longo dessa trajetória, desenvolvi experiência em diagnóstico, documentação e atendimento a usuários.',
    segundoParagrafo: 'Também estudo e desenvolvo projetos de software, com interesse em interfaces web, lógica de programação e aplicações que resolvam problemas do dia a dia.',
    fatos: [
      { titulo: 'ADS', linha1: 'Formação superior', linha2: '2019 — 2021' },
      { titulo: 'TI', linha1: 'Experiência em suporte', linha2: 'e infraestrutura' },
      { titulo: 'WEB', linha1: 'Projetos e interesse', linha2: 'em desenvolvimento' }
    ]
  },
  habilidades: [
    { titulo: 'Interfaces web', descricao: 'Criação de interfaces e aplicações para a web.', itens: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { titulo: 'Programação e dados', descricao: 'Lógica de programação, APIs e bancos de dados.', itens: ['Node.js', 'Python', 'Java', 'C', 'C#', 'SQL', 'MySQL', 'PostgreSQL'] },
    { titulo: 'Suporte e infraestrutura', descricao: 'Diagnóstico de incidentes, sistemas e conectividade.', itens: ['Windows', 'Linux', 'Active Directory', 'Microsoft 365', 'TCP/IP', 'DNS', 'DHCP', 'VPN'] }
  ],
  trajetoria: {
    introducao: 'Experiência em suporte, atendimento e análise de problemas, com formação em desenvolvimento de sistemas.',
    destaques: [
      { titulo: '5+ anos', descricao: 'de experiência em suporte técnico N1/N2' },
      { titulo: 'Diagnóstico', descricao: 'investigação de falhas, resolução de incidentes e verificação das soluções' },
      { titulo: 'Atendimento', descricao: 'suporte remoto, comunicação com usuários e trabalho orientado a SLA' }
    ],
    experiencias: [
      { periodo: '2022 — ATUAL', cargo: 'Técnico de Suporte Pleno', empresa: 'Sulwork', atividades: ['Suporte N1/N2 e diagnóstico de incidentes em sistemas, equipamentos e conectividade.', 'Verificação das soluções, orientação a usuários e documentação de procedimentos para problemas recorrentes.', 'Suporte a redes locais e manutenção de computadores e impressoras.'] },
      { periodo: '2021 — 2022', cargo: 'Suporte Help Desk', empresa: 'Almaviva do Brasil', atividades: ['Atendimento técnico em sistemas operacionais, softwares e redes, com orientação a usuários.', 'Atuação com indicadores de desempenho e prazos de resposta definidos em SLA.'] },
      { periodo: '2018 — 2021', cargo: 'Representante de Atendimento — Retenção', empresa: 'Almaviva do Brasil', resumo: 'Atendimento a clientes de telecomunicações, negociação, retenção e resolução de solicitações.' },
      { periodo: '2017 — ATUAL', cargo: 'Técnico em Manutenção de Computadores', empresa: 'Autônomo', resumo: 'Suporte remoto, manutenção de computadores, configuração de redes e instalação e recuperação de sistemas Windows, Linux e macOS.' }
    ],
    formacao: 'Análise e Desenvolvimento de Sistemas',
    instituicao: 'Faculdade Pitágoras · 2019 — 2021',
    cursos: 'Redes de Computadores (30h), Manutenção e Montagem de Computadores (40h), Inglês Técnico (40h) e HTML, CSS e Inovação.',
    estudos: 'Estudos em andamento: fundamentos de ITIL e Jira Service Management.',
    suporte: 'Windows, Linux, Active Directory, Microsoft 365, redes TCP/IP, DNS, DHCP e VPN.',
    qa: 'Análise e reprodução de falhas, verificação de funcionamento, documentação de incidentes e conhecimentos em SQL e MySQL.',
    desenvolvimento: 'Conhecimentos em JavaScript, Python, Java, HTML e CSS.'
  },
  // Escolha os projetos da página inicial usando os IDs da lista abaixo.
  projetosDestaque: ['agenda-clara', 'forest-shuffle'],
  projetos: [
    {
      id: 'forest-shuffle', nomeCurto: 'Forest Shuffle', titulo: 'Forest Shuffle Score Counter', categoria: 'JOGO & FERRAMENTA',
      descricao: 'Uma calculadora interativa para organizar cartas e acompanhar a pontuação do jogo. A aplicação considera posições, símbolos e combinações entre as cartas de cada floresta.',
      desafio: 'Facilitar a contagem de pontos em uma partida com cartas cujos valores dependem de outras cartas e posições.',
      solucao: 'Organização visual por árvores, registro das cartas jogadas e cálculo das combinações e pontuações.',
      participacao: 'Desenvolvimento da interface e da lógica de organização e pontuação da aplicação.',
      tecnologias: ['React', 'JavaScript', 'HTML', 'CSS'],
      imagens: [{ arquivo: './portfolio-media/forest-real-1.png', titulo: 'Floresta e pontuação no computador' }, { arquivo: './portfolio-media/forest-real-4.png', titulo: 'Catálogo e jogadores no computador' }],
      link: './projeto/index.html', textoLink: 'Explorar o projeto', externo: false, observacao: 'Capturas reais da aplicação.'
    },
    {
      id: 'forest-mobile', nomeCurto: 'Forest Mobile', titulo: 'Forest Shuffle Mobile', categoria: 'APLICAÇÃO MOBILE',
      descricao: 'Versão para celular da calculadora, com navegação por toque entre floresta, cartas, pontuação e jogadores.',
      desafio: 'Adaptar a montagem da floresta e a consulta da pontuação a uma tela menor.',
      solucao: 'Navegação por abas e controles adaptados ao toque para organizar cartas, jogadores e pontos.',
      participacao: 'Adaptação da interface e da navegação para celular, a partir da calculadora principal.',
      tecnologias: ['React', 'JavaScript', 'HTML', 'CSS'],
      imagens: [{ arquivo: './portfolio-media/forest-real-2.png', titulo: 'Floresta no celular' }, { arquivo: './portfolio-media/forest-real-3.png', titulo: 'Pontuação no celular' }],
      retrato: true, link: './projeto-mobile/index.html', textoLink: 'Abrir versão mobile', externo: false, observacao: 'Capturas reais da aplicação.'
    },
    {
      id: 'login', nomeCurto: 'Login', titulo: 'Login & autenticação', categoria: 'APLICAÇÃO WEB',
      descricao: 'Aplicação com cadastro, entrada por e-mail ou Google, recuperação de senha e área protegida. O projeto integra autenticação Firebase a uma API NestJS.',
      desafio: 'Organizar o acesso de usuários com diferentes formas de autenticação e uma área protegida.',
      solucao: 'Interface em React integrada ao Firebase e a uma API para consultar dados do usuário autenticado.',
      participacao: 'Desenvolvimento da interface e da integração com autenticação e API.',
      tecnologias: ['React', 'TypeScript', 'Firebase', 'NestJS'],
      imagens: [{ arquivo: './portfolio-media/login-1.svg', titulo: 'Tela de entrada' }, { arquivo: './portfolio-media/login-2.svg', titulo: 'Cadastro' }, { arquivo: './portfolio-media/login-3.svg', titulo: 'Recuperação de senha' }, { arquivo: './portfolio-media/login-4.svg', titulo: 'Área do usuário' }],
      link: 'https://github.com/alissonfonseca9/api-login-firebase', textoLink: 'Ver repositório do front-end', externo: true,
      linkAdicional: 'https://github.com/alissonfonseca9/api-login-backend', textoLinkAdicional: 'Ver repositório da API',
      observacao: 'Imagens ilustrativas da interface. O front-end e a API estão em repositórios separados.'
    },
    {
      id: 'gamesettings', nomeCurto: 'GameSettings', titulo: 'GameSettings', categoria: 'FERRAMENTA DESKTOP',
      descricao: 'Ferramenta em Python que identifica componentes e jogos instalados para sugerir configurações gráficas de acordo com o hardware e um banco de dados editável.',
      desafio: 'Ajudar na escolha de configurações gráficas considerando os componentes do computador e os jogos instalados.',
      solucao: 'Identificação de hardware e jogos, com consulta a um banco editável de recomendações.',
      participacao: 'Desenvolvimento da ferramenta em Python e organização das regras de recomendação.',
      tecnologias: ['Python', 'JSON', 'Windows', 'CLI'],
      imagens: [{ arquivo: './portfolio-media/game-1.svg', titulo: 'Detecção de hardware' }, { arquivo: './portfolio-media/game-2.svg', titulo: 'Jogos instalados' }, { arquivo: './portfolio-media/game-3.svg', titulo: 'Recomendações gráficas' }, { arquivo: './portfolio-media/game-4.svg', titulo: 'Relatório' }],
      link: 'https://github.com/alissonfonseca9/gamesettings', textoLink: 'Ver repositório', externo: true, observacao: 'Imagens ilustrativas da ferramenta.'
    },
    {
      id: 'agenda-clara', nomeCurto: 'Agenda Clara', titulo: 'Agenda Clara', categoria: 'APLICAÇÃO WEB',
      descricao: 'Aplicação de agendamento para pequenos negócios, com serviços, consulta de horários, reservas e painel administrativo para acompanhar atendimentos.',
      desafio: 'Organizar os horários de atendimento e facilitar as reservas de clientes em pequenos negócios.',
      solucao: 'Cadastro de serviços, consulta de disponibilidade, reserva de horários e painel para acompanhar atendimentos.',
      participacao: 'Desenvolvimento da interface web e integração com uma API e banco de dados.',
      tecnologias: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      imagens: [{ arquivo: './portfolio-media/agenda-real-cliente.png', titulo: 'Página do cliente — captura real' }, { arquivo: './portfolio-media/agenda-real-admin.png', titulo: 'Painel administrativo — captura real' }, { arquivo: './portfolio-media/agenda-1.svg', titulo: 'Página de agendamento — ilustração' }, { arquivo: './portfolio-media/agenda-2.svg', titulo: 'Escolha de data e horário — ilustração' }, { arquivo: './portfolio-media/agenda-3.svg', titulo: 'Acesso à conta — ilustração' }, { arquivo: './portfolio-media/agenda-4.svg', titulo: 'Painel do negócio — ilustração' }],
      link: 'https://github.com/alissonfonseca9/AgendaClara', textoLink: 'Ver repositório', externo: true, observacao: 'Capturas reais e imagens ilustrativas da interface.'
    }
  ]
};
