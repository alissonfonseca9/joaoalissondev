# Portfólio | João Alisson

Portfólio pessoal com apresentação, habilidades, trajetória profissional e projetos de desenvolvimento. O site inclui galerias de imagens e as versões para computador e celular da calculadora de pontos Forest Shuffle.

## Estrutura

- A raiz contém a versão pronta para uma hospedagem estática, incluindo as cinco páginas HTML e seus recursos.
- `conteudo.js` reúne os textos, os contatos, os projetos e os destaques da página inicial.
- `portfolio-media/` contém as imagens, o currículo e a imagem de compartilhamento.
- `codigo-fonte/portfolio-alisson/` contém o projeto do portfólio em React e Vite.
- `codigo-fonte/forest-react/dist/` e `codigo-fonte/forest-mobile/dist/` contêm as builds das calculadoras usadas ao preparar o site.

Consulte [LEIA-ME-EDICAO.md](LEIA-ME-EDICAO.md) para alterar textos, imagens, contatos e a prévia de compartilhamento.

## Executar o projeto React

Com Node.js e npm instalados, execute:

```bash
cd codigo-fonte/portfolio-alisson
npm install
npm run dev
```

Abra o endereço informado no terminal. Para gerar uma nova versão pronta para hospedagem:

```bash
npm run build
npm run preparar
```

Os arquivos finais estarão em `codigo-fonte/portfolio-alisson/site-pronto/`. Para atualizar a versão estática da raiz, copie o conteúdo dessa pasta para a raiz do repositório e confira as alterações antes do commit.

Mais detalhes sobre o código estão em [codigo-fonte/LEIA-ME-CODIGO.md](codigo-fonte/LEIA-ME-CODIGO.md).
