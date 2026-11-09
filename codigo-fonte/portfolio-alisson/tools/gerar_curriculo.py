from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public' / 'portfolio-media' / 'curriculo-joao-alisson.pdf'
FONT_DIR = Path(r'C:\Windows\Fonts')
pdfmetrics.registerFont(TTFont('Segoe', str(FONT_DIR / 'segoeui.ttf')))
pdfmetrics.registerFont(TTFont('SegoeBold', str(FONT_DIR / 'segoeuib.ttf')))
pdfmetrics.registerFontFamily('Segoe', normal='Segoe', bold='SegoeBold')

ink = colors.HexColor('#18241d')
muted = colors.HexColor('#445a4b')
accent = colors.HexColor('#148449')
line = colors.HexColor('#cfdcd2')
styles = {
    'name': ParagraphStyle('name', fontName='SegoeBold', fontSize=21, leading=25, textColor=ink, spaceAfter=2),
    'role': ParagraphStyle('role', fontName='SegoeBold', fontSize=9.7, leading=13, textColor=accent, spaceAfter=6),
    'contact': ParagraphStyle('contact', fontName='Segoe', fontSize=9.1, leading=12.8, textColor=muted),
    'section': ParagraphStyle('section', fontName='SegoeBold', fontSize=10.8, leading=14, textColor=accent, spaceBefore=9, spaceAfter=3),
    'body': ParagraphStyle('body', fontName='Segoe', fontSize=9.6, leading=14, textColor=ink, alignment=TA_LEFT, spaceAfter=2),
    'item': ParagraphStyle('item', fontName='Segoe', fontSize=9.4, leading=13.3, textColor=ink, spaceAfter=3),
}

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=19*mm, leftMargin=19*mm, topMargin=15*mm, bottomMargin=15*mm,
                        title='João Alisson da Silva Fonseca - Desenvolvimento web', author='João Alisson da Silva Fonseca')
story = [
    Paragraph('JOÃO ALISSON DA SILVA FONSECA', styles['name']),
    Paragraph('DESENVOLVIMENTO WEB  |  TECNOLOGIA', styles['role']),
    Paragraph('Maceió, AL  |  (82) 98759-0704  |  <link href="mailto:alisson_fonseca1@hotmail.com" color="#148449">alisson_fonseca1@hotmail.com</link>', styles['contact']),
    Paragraph('<link href="https://www.linkedin.com/in/joaoalissondasilvafonseca" color="#148449">linkedin.com/in/joaoalissondasilvafonseca</link>  |  <link href="https://github.com/alissonfonseca9" color="#148449">github.com/alissonfonseca9</link>', styles['contact']),
    Spacer(1, 6), HRFlowable(width='100%', thickness=0.6, color=line),
    Paragraph('PERFIL', styles['section']),
    Paragraph('Tecnólogo em Análise e Desenvolvimento de Sistemas, com experiência em suporte técnico, diagnóstico e documentação de incidentes. Desenvolve projetos web e ferramentas, com interesse em interfaces, lógica de programação e aplicações para o dia a dia.', styles['body']),
    Paragraph('TECNOLOGIAS E CONHECIMENTOS', styles['section']),
    Paragraph('<b>Web:</b> HTML, CSS, JavaScript, React, TypeScript e Node.js.  <b>Programação e dados:</b> Python, Java, C, C#, SQL, MySQL e PostgreSQL.  <b>Suporte:</b> Windows, Linux, Active Directory, Microsoft 365 e redes TCP/IP.', styles['body']),
    Paragraph('PROJETOS', styles['section']),
    Paragraph('<link href="https://github.com/alissonfonseca9/AgendaClara" color="#148449"><b>Agenda Clara</b></link> - Aplicação de agendamentos com serviços, horários, reservas e painel administrativo. React, Node.js, Express e PostgreSQL.', styles['item']),
    Paragraph('<b>Forest Shuffle Score Counter</b> - Calculadora interativa de pontos com organização de cartas, combinação de efeitos e versão adaptada para celular. React e JavaScript.', styles['item']),
    Paragraph('<link href="https://github.com/alissonfonseca9/api-login-firebase" color="#148449"><b>Login e autenticação</b></link> - Interface de cadastro e acesso com Firebase e integração a uma API. React, TypeScript, Firebase e NestJS.', styles['item']),
    Paragraph('<link href="https://github.com/alissonfonseca9/gamesettings" color="#148449"><b>GameSettings</b></link> - Ferramenta em Python que identifica hardware e jogos instalados para sugerir configurações gráficas.', styles['item']),
    Paragraph('EXPERIÊNCIA PROFISSIONAL', styles['section']),
    Paragraph('<b>Técnico de Suporte Pleno - Sulwork</b>  |  2022 - atual<br/>Suporte N1/N2, diagnóstico de incidentes, manutenção de equipamentos, conectividade e documentação de soluções.', styles['item']),
    Paragraph('<b>Suporte Help Desk - Almaviva do Brasil</b>  |  2021 - 2022<br/>Atendimento a usuários, resolução de problemas em sistemas e redes e acompanhamento de prazos de resposta.', styles['item']),
    Paragraph('<b>Técnico em Manutenção de Computadores - Autônomo</b>  |  2017 - atual<br/>Suporte remoto, manutenção, configuração de redes e recuperação de sistemas.', styles['item']),
    Paragraph('<b>Representante de Atendimento - Almaviva do Brasil</b>  |  2018 - 2021<br/>Atendimento, negociação e resolução de solicitações de clientes.', styles['item']),
    Paragraph('FORMAÇÃO E CURSOS', styles['section']),
    Paragraph('<b>Análise e Desenvolvimento de Sistemas</b> - Faculdade Pitágoras, 2019 - 2021.', styles['body']),
    Paragraph('HTML, CSS e Inovação (Fundação Bradesco); Redes de Computadores (30h); Inglês Técnico (40h). Estudos em fundamentos de ITIL e Jira Service Management.', styles['body']),
]
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc.build(story)
print(OUTPUT)
