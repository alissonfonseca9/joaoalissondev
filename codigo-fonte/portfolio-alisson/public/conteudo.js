// EDITE AQUI: altere os textos entre aspas e mantenha a pontuação do arquivo.
// As instruções completas estão em LEIA-ME-EDICAO.md.
window.PORTFOLIO_CONTEUDO = {
  perfil: {
    nome: 'João Alisson',
    nomeCompleto: 'João Alisson da Silva Fonseca',
    cidade: 'Maceió, AL',
    area: 'Desenvolvimento web',
    apresentacao: 'Desenvolvo interfaces e aplicações web com foco em experiências claras e problemas reais. Sou formado em Análise e Desenvolvimento de Sistemas e tenho experiência em suporte técnico.',
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
    primeiroParagrafo: 'Sou formado em Análise e Desenvolvimento de Sistemas e desenvolvo projetos voltados à web. Gosto de transformar necessidades práticas em interfaces claras e funcionais.',
    segundoParagrafo: 'Minha experiência em suporte e infraestrutura me ensinou a investigar problemas, ouvir usuários e documentar soluções. Levo essa atenção aos detalhes para cada projeto de desenvolvimento.',
    fatos: [
      { titulo: 'Formação', linha1: 'Análise e Desenvolvimento', linha2: 'de Sistemas' },
      { titulo: 'Experiência', linha1: 'Suporte técnico', linha2: 'e infraestrutura' },
      { titulo: 'Foco atual', linha1: 'Projetos web', linha2: 'e desenvolvimento' }
    ]
  },
  habilidades: [
    { titulo: 'Nos meus projetos', descricao: 'Tecnologias utilizadas nas aplicações apresentadas no portfólio.', itens: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Firebase', 'NestJS', 'Python'] },
    { titulo: 'Outros conhecimentos', descricao: 'Linguagens, fundamentos e bancos de dados presentes na minha formação e estudos.', itens: ['Node.js', 'Java', 'C', 'C#', 'SQL', 'MySQL', 'PostgreSQL'] },
    { titulo: 'Suporte e infraestrutura', descricao: 'Diagnóstico de incidentes, sistemas e conectividade.', itens: ['Windows', 'Linux', 'Active Directory', 'Microsoft 365', 'TCP/IP', 'DNS', 'DHCP', 'VPN'] }
  ],
  trajetoria: {
    introducao: 'Uma trajetória em suporte e tecnologia, com formação em desenvolvimento de sistemas e experiência em análise de problemas e documentação de soluções.',
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
      descricao: 'Calculadora de pontuação para Forest Shuffle. Permite montar a floresta, registrar cartas ao redor das árvores e acompanhar os pontos de cada jogador.',
      desafio: 'Traduzir uma pontuação que depende das espécies, dos símbolos e da posição das cartas em uma interface fácil de consultar.',
      solucao: 'Catálogo por posição, florestas individuais, contagem da caverna e explicação dos pontos calculados.',
      participacao: 'Desenvolvimento da interface e da lógica de organização e pontuação da aplicação.',
      tecnologias: ['React', 'JavaScript', 'HTML', 'CSS'],
      imagens: [{ arquivo: './portfolio-media/forest-real-1.png', titulo: 'Floresta e pontuação no computador' }, { arquivo: './portfolio-media/forest-real-4.png', titulo: 'Catálogo e jogadores no computador' }],
      link: 'https://forestshufflecounter.netlify.app/', textoLink: 'Explorar o projeto', externo: true, observacao: 'Capturas reais da aplicação.'
    },
    {
      id: 'forest-mobile', nomeCurto: 'Forest Mobile', titulo: 'Forest Shuffle Mobile', categoria: 'APLICAÇÃO MOBILE',
      descricao: 'Versão para celular da calculadora Forest Shuffle, com acesso por toque à floresta, ao catálogo, aos pontos e aos jogadores.',
      desafio: 'Adaptar a montagem da floresta e a consulta da pontuação a uma tela menor.',
      solucao: 'Abas para alternar entre as etapas e seleção de cartas adaptada a telas menores.',
      participacao: 'Adaptação da interface e da navegação para celular, a partir da calculadora principal.',
      tecnologias: ['React', 'JavaScript', 'HTML', 'CSS'],
      imagens: [{ arquivo: './portfolio-media/forest-real-2.png', titulo: 'Floresta no celular' }, { arquivo: './portfolio-media/forest-real-3.png', titulo: 'Pontuação no celular' }],
      retrato: true, link: 'https://forestshufflecountermobile.netlify.app/', textoLink: 'Abrir versão mobile', externo: true, observacao: 'Capturas reais da aplicação.'
    },
    {
      id: 'login', nomeCurto: 'Login', titulo: 'Login & autenticação', categoria: 'APLICAÇÃO WEB',
      descricao: 'Aplicação de autenticação com cadastro, login por e-mail ou Google, recuperação de senha e painel protegido.',
      desafio: 'Integrar diferentes formas de autenticação e proteger o acesso aos dados do usuário.',
      solucao: 'React e Firebase Authentication cuidam do acesso; um token é enviado à API NestJS para consultar o usuário autenticado.',
      participacao: 'Desenvolvimento da interface e da integração com autenticação e API.',
      tecnologias: ['React', 'TypeScript', 'Firebase', 'NestJS'],
      imagens: [{ arquivo: './portfolio-media/login-1.svg', titulo: 'Tela de entrada' }, { arquivo: './portfolio-media/login-2.svg', titulo: 'Cadastro' }, { arquivo: './portfolio-media/login-3.svg', titulo: 'Recuperação de senha' }, { arquivo: './portfolio-media/login-4.svg', titulo: 'Área do usuário' }],
      link: 'https://github.com/alissonfonseca9/api-login-firebase', textoLink: 'Ver repositório do front-end', externo: true,
      linkAdicional: 'https://github.com/alissonfonseca9/api-login-backend', textoLinkAdicional: 'Ver repositório da API',
      observacao: 'Imagens ilustrativas da interface. O front-end e a API estão em repositórios separados.'
    },
    {
      id: 'gamesettings', nomeCurto: 'GameSettings', titulo: 'GameSettings', categoria: 'FERRAMENTA DESKTOP',
      descricao: 'Ferramenta de linha de comando em Python que identifica hardware e jogos para sugerir configurações gráficas.',
      desafio: 'Ajudar na escolha de configurações gráficas considerando os componentes do computador e os jogos instalados.',
      solucao: 'Consulta a perfis editáveis de jogos e GPUs para sugerir ajustes conforme resolução e prioridade de desempenho, equilíbrio ou qualidade.',
      participacao: 'Desenvolvimento da ferramenta em Python e organização das regras de recomendação.',
      tecnologias: ['Python', 'JSON', 'Windows', 'CLI'],
      imagens: [{ arquivo: './portfolio-media/game-1.svg', titulo: 'Detecção de hardware' }, { arquivo: './portfolio-media/game-2.svg', titulo: 'Jogos instalados' }, { arquivo: './portfolio-media/game-3.svg', titulo: 'Recomendações gráficas' }, { arquivo: './portfolio-media/game-4.svg', titulo: 'Relatório' }],
      link: 'https://github.com/alissonfonseca9/gamesettings', textoLink: 'Ver repositório', externo: true, observacao: 'Imagens ilustrativas. As recomendações são estimativas e não alteram os jogos automaticamente.'
    },
    {
      id: 'agenda-clara', nomeCurto: 'Agenda Clara', titulo: 'Agenda Clara', categoria: 'APLICAÇÃO WEB',
      descricao: 'Sistema de agendamento para pequenos negócios, com catálogo de serviços, reserva de horários e painel administrativo.',
      desafio: 'Exibir horários disponíveis conforme a duração dos serviços e evitar reservas sobrepostas.',
      solucao: 'A API calcula a disponibilidade por data e serviço, verifica conflitos nas reservas e permite ao administrador acompanhar e cancelar atendimentos.',
      participacao: 'Desenvolvimento da interface em React e integração com API em Node.js e Express e banco PostgreSQL.',
      tecnologias: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      imagens: [{ arquivo: './portfolio-media/agenda-real-cliente.png', titulo: 'Página do cliente — captura real' }, { arquivo: './portfolio-media/agenda-real-admin.png', titulo: 'Painel administrativo — captura real' }],
      link: 'https://github.com/alissonfonseca9/AgendaClara', textoLink: 'Ver repositório', externo: true, observacao: 'Capturas reais da interface.'
    }
  ]
};
