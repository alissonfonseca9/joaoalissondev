# Como editar o portfólio

Este pacote já está pronto para ser aberto no navegador ou enviado para uma hospedagem estática. Para mudar os textos principais, abra o arquivo **`conteudo.js`** em um editor de texto, como o Bloco de Notas ou o VS Code. Salve uma cópia antes de alterar.

Os textos ficam entre aspas. Edite o conteúdo entre elas e mantenha as aspas, vírgulas, colchetes e chaves do arquivo. Depois de salvar, atualize o navegador para conferir.

## Escolha o que alterar

1. **Nome, apresentação e contatos:** em `perfil`, altere `nome`, `nomeCompleto`, `cidade`, `area`, `apresentacao`, `email` e os endereços das redes sociais. Os campos `linkedinNome` e `instagramNome` são os textos mostrados nos cartões de contato.
2. **Texto da página Sobre:** em `sobre`, altere `primeiroParagrafo`, `segundoParagrafo` e os itens de `fatos`.
3. **Habilidades:** em `habilidades`, altere os títulos, descrições e itens de cada grupo.
4. **Trajetória:** em `trajetoria`, altere os destaques, experiências, formação, cursos e conhecimentos. O texto do currículo em PDF é separado e precisa ser substituído quando necessário.
5. **Projetos:** em `projetos`, encontre o projeto pelo campo `id`. Você pode mudar título, descrição, desafio, solução, participação, tecnologias, endereço e textos dos botões.
6. **Projetos da página inicial:** em `projetosDestaque`, coloque os IDs dos projetos que deseja destacar, por exemplo: `['agenda-clara', 'forest-shuffle']`. Mantenha esses IDs iguais aos que aparecem em `projetos`.
7. **Imagens dos projetos:** os arquivos ficam na pasta `portfolio-media`. Para trocar uma imagem, substitua o arquivo existente pelo novo com o mesmo nome ou atualize o campo `arquivo` do projeto em `conteudo.js`.
8. **Currículo:** substitua `portfolio-media/curriculo-joao-alisson.pdf` pelo seu novo PDF usando o mesmo nome. O currículo atual foi preparado com base nos documentos fornecidos e contém o telefone que aparece neles; confira os dados antes de publicar.
9. **Imagem de compartilhamento:** substitua `portfolio-media/compartilhamento.png` por uma imagem de 1200 × 630 pixels, mantendo o mesmo nome, se desejar uma nova prévia.
10. **Cores e layout:** exigem alteração dos arquivos de estilo do projeto React e uma nova build. Os textos e dados listados acima podem ser alterados diretamente neste pacote.

## Configurar a prévia quando tiver um endereço público

O site já inclui título, descrição e imagem de prévia. Para que os aplicativos encontrem a imagem com mais confiabilidade, ela precisa ter um endereço público completo. Pode ser um endereço gratuito de hospedagem; não é necessário comprar um domínio.

1. Abra `configuracao-site.json` e preencha `urlPublica`, por exemplo:

   ```json
   { "urlPublica": "https://seu-endereco-de-hospedagem/" }
   ```

2. No terminal, dentro desta pasta, execute `node configurar-compartilhamento.cjs`.
3. Envie novamente **todo o conteúdo** da pasta para a hospedagem. Se o site ficar dentro de uma subpasta, inclua essa subpasta no endereço.

O comando ajusta os endereços da prévia nas cinco páginas. A apresentação final pode variar conforme o aplicativo e seu cache. Enquanto não houver endereço público, a imagem estará no pacote, mas a prévia em aplicativos externos não pode ser garantida.

## Publicar os arquivos

Envie as cinco páginas HTML, `conteudo.js`, `favicon.svg` e as pastas `assets`, `portfolio-media`, `projeto` e `projeto-mobile`, preservando os nomes e a estrutura. Abrir somente o `index.html` isolado não inclui todos os recursos.

As pastas em `materiais-github` contêm os READMEs preparados para os repositórios de Login e GameSettings. Eles são documentos separados do site.
