const fs=require('fs');
const path=require('path');
const vm=require('vm');

// As calculadoras continuam autônomas em suas respectivas pastas.
function single(dir){
 let html=fs.readFileSync(path.join(dir,'index.html'),'utf8');
 html=html.replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/,(_,src)=>'<script type="module">'+fs.readFileSync(path.join(dir,src.replace(/^\//,'')),'utf8').replace(/<\/script/gi,'<\\/script')+'</script>');
 html=html.replace(/<link rel="stylesheet" crossorigin href="([^"]+)">/,(_,src)=>'<style>'+fs.readFileSync(path.join(dir,src.replace(/^\//,'')),'utf8')+'</style>');
 if(html.includes('src="/assets/')||html.includes('href="/assets/'))throw Error('Dependência local das calculadoras não incorporada');
 return html;
}
const desktop=single('../forest-react/dist');
const mobile=single('../forest-mobile/dist');

// O Vite gera um único pacote sem imports externos; um script clássico permite
// que as páginas sejam abertas por arquivo local e também em hospedagem estática.
let template=fs.readFileSync('dist/index.html','utf8');
const scriptMatch=template.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/);
const styleMatch=template.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/);
if(!scriptMatch||!styleMatch)throw Error('Arquivos da build não encontrados');
const scriptPath=scriptMatch[1].replace(/^\//,'');
const stylePath=styleMatch[1].replace(/^\//,'');
new vm.Script(fs.readFileSync(path.join('dist',scriptPath),'utf8'),{filename:scriptPath});
template=template.replace(scriptMatch[0],`<script defer src="./${scriptPath}"></script>`);
template=template.replace(styleMatch[0],`<link rel="stylesheet" href="./${stylePath}">`);
const pages=[
 ['index.html','João Alisson | Desenvolvimento','Conheça os projetos, as habilidades e a trajetória de João Alisson.'],
 ['projetos.html','Projetos | João Alisson','Aplicações web e ferramentas desenvolvidas por João Alisson.'],
 ['sobre.html','Sobre | João Alisson','Conheça a formação e os interesses de João Alisson em tecnologia.'],
 ['habilidades.html','Habilidades | João Alisson','Tecnologias e conhecimentos em desenvolvimento e suporte de João Alisson.'],
 ['trajetoria.html','Trajetória | João Alisson','Formação e experiência profissional de João Alisson em tecnologia.']
];
const out=process.env.PORTFOLIO_OUTPUT_DIR||'site-pronto';
fs.mkdirSync(path.join(out,'assets'),{recursive:true});
fs.copyFileSync(path.join('dist',scriptPath),path.join(out,scriptPath));
fs.copyFileSync(path.join('dist',stylePath),path.join(out,stylePath));
fs.copyFileSync(path.join('dist','favicon.svg'),path.join(out,'favicon.svg'));
fs.copyFileSync(path.join('dist','conteudo.js'),path.join(out,'conteudo.js'));
for(const name of ['configuracao-site.json','configurar-compartilhamento.cjs'])fs.copyFileSync(name,path.join(out,name));
fs.copyFileSync('LEIA-ME-EDICAO.md',path.join(out,'LEIA-ME-EDICAO.md'));
fs.cpSync('materiais-github',path.join(out,'materiais-github'),{recursive:true});
fs.cpSync(path.join('dist','portfolio-media'),path.join(out,'portfolio-media'),{recursive:true});
for(const [name,title,description] of pages){
 const html=template.replace(/<title>[^<]*<\/title>/,`<title>${title}</title>`).replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${description}">`).replace(/<meta property="og:title" content="[^"]*">/,`<meta property="og:title" content="${title}">`).replace(/<meta property="og:description" content="[^"]*">/,`<meta property="og:description" content="${description}">`);
 fs.writeFileSync(path.join('dist',name),html);
 fs.writeFileSync(path.join(out,name),html);
}
for(const [name,html] of [['projeto',desktop],['projeto-mobile',mobile]]){
 for(const root of ['dist',out]){
  fs.mkdirSync(path.join(root,name),{recursive:true});
  fs.writeFileSync(path.join(root,name,'index.html'),html);
 }
}
console.log('Cinco páginas e as duas calculadoras prontas para hospedagem.');
