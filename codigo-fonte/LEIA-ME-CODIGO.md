# Código-fonte do portfólio

O código React está na pasta `portfolio-alisson`. As pastas `forest-react/dist` e `forest-mobile/dist` acompanham o pacote porque o preparo do site inclui as duas versões da calculadora.

## Executar no computador

Instale uma versão recente do Node.js. Dentro da pasta `portfolio-alisson`, execute:

```bash
npm install
npm run dev
```

Abra no navegador o endereço mostrado pelo Vite. Para criar os arquivos finais para hospedagem:

```bash
npm run build
npm run preparar
```

O resultado estará em `portfolio-alisson/site-pronto`. Envie o conteúdo dessa pasta para a hospedagem, mantendo a estrutura.

## Onde editar

- `public/conteudo.js`: dados pessoais, textos, habilidades, trajetória, projetos e escolha dos projetos em destaque.
- `public/portfolio-media`: imagens e currículo em PDF. A imagem do personagem enviado está em `developer-illustration-enviada.png`.
- `src/style.css`: cores, tamanhos e apresentação visual.
- `src/main.jsx`: componentes e funcionamento do portfólio em React.
- `tools/gerar_curriculo.py`: conteúdo e formatação do currículo em PDF. Para gerar novamente, é necessário Python com a biblioteca ReportLab.
- `tools/gerar_preview.ps1`: gera a imagem de prévia de compartilhamento no Windows.
- `configuracao-site.json`: endereço público para configurar a prévia depois de preparar a build. O passo a passo está no `LEIA-ME-EDICAO.md` dentro do site pronto.

As alterações nos dados de `public/conteudo.js` aparecem ao atualizar o navegador durante o desenvolvimento. Para colocá-las no site publicado, gere os arquivos novamente e envie a pasta `site-pronto`.
