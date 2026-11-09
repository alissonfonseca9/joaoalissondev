const fs=require('fs');
const path=require('path');

const directory=process.argv[2]?path.resolve(process.argv[2]):__dirname;
const settings=JSON.parse(fs.readFileSync(path.join(directory,'configuracao-site.json'),'utf8'));
const address=String(settings.urlPublica||'').trim();
if(!address){console.error('Informe o endereço público em configuracao-site.json antes de configurar a prévia.');process.exit(1)}
let base;
try{base=new URL(address.endsWith('/')?address:address+'/')}catch{throw Error('O endereço público não é válido.')}
if(!['http:','https:'].includes(base.protocol))throw Error('Use um endereço que comece com http:// ou https://.');
const escape=value=>value.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const image=escape(new URL('portfolio-media/compartilhamento.png',base).href);
for(const name of ['index.html','projetos.html','sobre.html','habilidades.html','trajetoria.html']){
 const file=path.join(directory,name);
 let html=fs.readFileSync(file,'utf8');
 html=html.replace(/(<meta property="og:image" content=")[^"]*(">)/,`$1${image}$2`);
 html=html.replace(/(<meta name="twitter:image" content=")[^"]*(">)/,`$1${image}$2`);
 const page=escape(new URL(name==='index.html'?'':name,base).href);
 if(/<meta property="og:url" content="[^"]*">/.test(html))html=html.replace(/<meta property="og:url" content="[^"]*">/,`<meta property="og:url" content="${page}">`);
 else html=html.replace('</head>',`<meta property="og:url" content="${page}"></head>`);
 fs.writeFileSync(file,html);
}
console.log('Prévia de compartilhamento configurada para '+base.href);
