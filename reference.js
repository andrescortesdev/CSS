(function () {
'use strict';
const {lessons} = window.CSSLab;
const groupNames={
 'CSS Color':'Color','CSS Fonts':'Tipografía','CSS Text':'Texto','CSS Text Decoration':'Decoración de texto','CSS Backgrounds and Borders':'Fondos y bordes','CSS Box Model':'Modelo de caja','CSS Box Sizing':'Dimensiones','CSS Display':'Display','CSS Flexible Box Layout':'Flexbox','CSS Grid Layout':'Grid','CSS Box Alignment':'Alineación','CSS Positioned Layout':'Posicionamiento','CSS Logical Properties and Values':'Propiedades lógicas','CSS Animations':'Animaciones','CSS Transitions':'Transiciones','CSS Transforms':'Transformaciones','CSS Overflow':'Desbordamiento','CSS Containment':'Contención','CSS Conditional Rules':'Reglas condicionales','CSS Masking':'Máscaras','Filter Effects':'Filtros','CSS Basic User Interface':'Interfaz','CSS Lists and Counters':'Listas y contadores','CSS Table':'Tablas','CSS Scroll Snap':'Scroll snap','CSS Scrollbars Styling':'Barras de desplazamiento','CSS Values and Units':'Valores y unidades','CSS Writing Modes':'Modos de escritura','CSS Multi-column Layout':'Columnas','CSS Paged Media':'Impresión','CSS Fragmentation':'Fragmentación','CSS Anchor Positioning':'Anclajes','Scalable Vector Graphics':'SVG','CSS Shapes':'Formas','CSS Speech':'Voz','CSS Custom Properties for Cascading Variables':'Variables','Compositing and Blending':'Composición y mezcla','Scroll-driven Animations':'Animación por scroll','CSS View Transitions':'Transiciones de vista','Motion Path':'Trayectorias','CSS Images':'Imágenes','CSS Cascading and Inheritance':'Cascada','CSS Will Change':'Optimización','Selectors':'Selectores','Microsoft Extensions':'Extensiones Microsoft','Mozilla Extensions':'Extensiones Mozilla','WebKit Extensions':'Extensiones WebKit'};
const statusNames={standard:'Estándar',experimental:'Experimental',nonstandard:'No estándar',obsolete:'Obsoleta'};
const catalogs=window.CSSLab.catalogs;
async function loadCatalogs(){
 if(!catalogs||!catalogs.properties||!catalogs.selectors||!catalogs['at-rules']||!catalogs.functions)throw new Error('Falta catalogs.js: conserva todos los archivos del sitio en la misma carpeta.');
 return catalogs;
}
const valueSets={
 color:['#7951d8','#31916e','hsl(25 50% 45%)'], 'background-color':['#ede5fa','#edf5ef','#f9e8de'], background:['linear-gradient(135deg, #ede5fa, #bb9ed8)','#edf5ef'], 'background-image':['linear-gradient(135deg, #ede5fa, #7951d8)','radial-gradient(circle, #b69ad5, #f3edfa)','repeating-linear-gradient(45deg, #ede5fa 0 10px, white 10px 20px)'],
 display:['flex','grid','block','none'],position:['relative','absolute','sticky','static'],float:['left','right','none'],clear:['both','left','none'],opacity:['.4','.75','1'],visibility:['hidden','visible'],isolation:['isolate','auto'],
 width:['180px','80%','100%'],height:['140px','220px','auto'],'min-width':['150px','220px'],'max-width':['180px','280px'],'min-height':['120px','200px'],'max-height':['100px','160px'],'aspect-ratio':['1','16 / 9','4 / 3'],'box-sizing':['border-box','content-box'],
 margin:['20px','0 auto','12px 24px'],padding:['24px','8px 30px','32px 12px'],gap:['8px','24px','12px 28px'],'row-gap':['8px','28px'],'column-gap':['8px','28px'],
 border:['3px solid #7951d8','3px dashed #b39ace','6px double #31916e'],'border-color':['#7951d8','#31916e'],'border-width':['1px','6px'],'border-style':['dashed','dotted','double','solid'],'border-radius':['0','16px','50%','8px 28px'],'border-collapse':['collapse','separate'],'border-spacing':['0','12px'],'table-layout':['fixed','auto'],'caption-side':['top','bottom'],'empty-cells':['hide','show'],
 outline:['3px solid #7951d8','3px dashed #31916e'],'outline-offset':['4px','10px'],'box-shadow':['0 12px 24px #7951d840','inset 0 0 0 4px #cdb6e3','8px 8px 0 #ded0ee'],
 'font-family':['Georgia, serif','system-ui, sans-serif','monospace'],'font-size':['14px','24px','2rem'],'font-weight':['400','700','900'],'font-style':['normal','italic'],'font-stretch':['condensed','expanded'],'line-height':['1.2','1.8','2.2'],'letter-spacing':['0','.1em','.2em'],'word-spacing':['0','8px','16px'],'font-variant':['small-caps','normal'],'font-variant-caps':['small-caps','all-small-caps'],'font-variant-numeric':['tabular-nums','oldstyle-nums'],'font-feature-settings':['"liga" 0','"kern" 1'],'font-variation-settings':['"wght" 700','"wght" 300'],font:['italic 20px Georgia, serif','700 16px system-ui, sans-serif'],
 'text-align':['left','center','right','justify'],'text-transform':['uppercase','capitalize','lowercase'],'text-decoration':['underline','line-through','underline wavy #7951d8'],'text-decoration-line':['underline','line-through','overline'],'text-decoration-style':['wavy','dashed','double'],'text-decoration-thickness':['1px','4px'],'text-underline-offset':['3px','8px'],'text-indent':['0','24px'],'text-shadow':['2px 3px 0 #cdb6e3','0 0 8px #7951d8'],'text-overflow':['ellipsis','clip'],'white-space':['normal','nowrap','pre-wrap'],'overflow-wrap':['anywhere','normal'],'word-break':['normal','break-all'],'hyphens':['auto','none'],'writing-mode':['horizontal-tb','vertical-rl','vertical-lr'],direction:['ltr','rtl'],
 'flex-direction':['row','column','row-reverse'],'flex-wrap':['wrap','nowrap'],'flex-flow':['row wrap','column nowrap'],'justify-content':['center','space-between','space-around','flex-end'],'align-items':['center','stretch','flex-end'],'align-content':['center','space-between','stretch'],'align-self':['center','flex-end','stretch'],'justify-items':['center','end','stretch'],'justify-self':['center','end','stretch'],'place-items':['center','end','stretch'],'place-content':['center','space-between'],'place-self':['center','end'],'flex-grow':['0','1','3'],'flex-shrink':['0','1','3'],'flex-basis':['60px','120px','auto'],flex:['1 1 60px','2 1 100px','0 0 80px'],order:['-1','0','2'],
 'grid-template-columns':['1fr 1fr','repeat(3, 1fr)','80px 1fr'],'grid-template-rows':['60px 100px','repeat(3, 60px)'],'grid-template-areas':['"a a" "b c"','"a b" "a c"'],'grid-auto-flow':['row','column','row dense'],'grid-auto-rows':['50px','90px'],'grid-auto-columns':['60px','100px'],'grid-column':['auto','1 / -1','span 2'],'grid-row':['auto','span 2'],'grid-column-start':['1','2'],'grid-column-end':['3','span 2'],'grid-row-start':['1','2'],'grid-row-end':['3','span 2'],
 transform:['rotate(10deg)','scale(.85)','translateX(25px)','skew(-10deg)'],translate:['20px 10px','-20px 0'],rotate:['15deg','-15deg'],scale:['.8','1.15'],'transform-origin':['center','top left','bottom right'],perspective:['200px','600px'],
 filter:['blur(2px)','grayscale(1)','brightness(1.3)','hue-rotate(90deg)'],'backdrop-filter':['blur(6px)','grayscale(1)'],'mix-blend-mode':['multiply','screen','difference'],'background-blend-mode':['multiply','screen'],
 overflow:['hidden','auto','visible','clip'],'overflow-x':['auto','hidden','visible'],'overflow-y':['auto','hidden','scroll'],resize:['both','vertical','none'],cursor:['pointer','crosshair','help','grab'],'user-select':['none','all','text'],'pointer-events':['none','auto'],'accent-color':['#7951d8','#31916e','#c88745'],appearance:['none','auto'],'caret-color':['#7951d8','#31916e'],
 'list-style-type':['decimal-leading-zero','lower-alpha','square','"✦  "'],'list-style-position':['inside','outside'],'list-style':['square inside','decimal outside'],
 'column-count':['2','3','auto'],'column-width':['100px','180px'],'column-rule':['1px solid #cdb6e3','3px dashed #7951d8'],'column-fill':['balance','auto'],'column-span':['all','none'],
 'clip-path':['circle(45%)','polygon(50% 0, 100% 100%, 0 100%)','inset(10% round 20px)'],'shape-outside':['circle(50%)','ellipse(50% 40%)'],'shape-margin':['0','16px'],'mask-image':['linear-gradient(black, transparent)','radial-gradient(circle, black 40%, transparent 70%)'],
 'object-fit':['cover','contain','fill'],'object-position':['center','left','right'],
 animation:['pulso 2s ease-in-out infinite alternate','pulso 4s linear infinite alternate'],'animation-name':['pulso','none'],'animation-duration':['1s','4s'],'animation-delay':['0s','1s'],'animation-direction':['normal','alternate','reverse'],'animation-iteration-count':['1','3','infinite'],'animation-play-state':['running','paused'],'animation-fill-mode':['none','forwards','both'],'animation-timing-function':['linear','ease-in-out','steps(4, end)'],
 transition:['transform .3s ease','transform 1s linear'],'transition-duration':['.2s','1.5s'],'transition-delay':['0s','.7s'],'transition-property':['transform','background-color','all'],'transition-timing-function':['ease','linear','cubic-bezier(.2,.8,.2,1)'],
 'z-index':['0','2','10'],'content-visibility':['visible','auto','hidden'],contain:['none','layout paint','strict'],'will-change':['auto','transform'],'scroll-behavior':['smooth','auto'],'scroll-snap-type':['x mandatory','x proximity','none'],'scroll-snap-align':['start','center','end'],'scrollbar-width':['auto','thin','none'],'scrollbar-color':['#7951d8 #eee5f7','auto'],'overscroll-behavior':['contain','none','auto'],'touch-action':['auto','pan-y','none'],
 fill:['#7951d8','#31916e','none'],stroke:['#7951d8','#31916e','none'],'stroke-width':['2px','10px'],'stroke-dasharray':['none','8 4','2 6'],'stroke-linecap':['butt','round','square'],'stroke-linejoin':['miter','round','bevel'],'fill-opacity':['.3','1'],'stroke-opacity':['.3','1'],r:['30px','60px'],cx:['60px','120px'],cy:['60px','100px'],x:['10px','50px'],y:['10px','50px'],rx:['0','20px'],ry:['0','30px'],
 content:['"✦ Hola, CSS"','"→ Contenido generado"'],'counter-reset':['paso 0','paso 4'],'counter-increment':['paso 1','paso 2'],'vertical-align':['top','middle','bottom'],'break-inside':['avoid','auto'],'color-scheme':['light','dark'],'all':['unset','initial','revert']
};
const baseCard='<article class="demo"><span class="badge">EXPLORA CSS</span><h2>Una idea toma forma.</h2><p>Prueba otro valor y observa qué cambia en esta pequeña tarjeta.</p><p>0123456789 · Aa Bb Cc</p></article>';
const richText='Aprender CSS significa practicar con ideas pequeñas. Cambia una propiedad cada vez y observa cómo se transforma el resultado. Este texto contiene una-palabra-extraordinariamente-larga-para-probar-saltos. ';
const itemHtml='<div class="demo"><div class="item">01</div><div class="item">02</div><div class="item">03</div></div>';
const itemCss='.item { padding: 18px; border-radius: 8px; background: #e8dcf6; color: #7951d8; text-align: center; min-width: 35px; }';

function propertyValues(name,meta){
 if(name==='--*')return ['#7951d8','#31916e'];
 if(valueSets[name])return valueSets[name];
 if(/^(margin|padding|inset|scroll-margin|scroll-padding)(-|$)/.test(name))return ['8px','24px','40px'];
 if(/^(top|right|bottom|left)$/.test(name))return ['0','20px','40px'];
 if(/^border.*color$|^outline-color$|^text-decoration-color$|^column-rule-color$/.test(name))return ['#7951d8','#31916e'];
 if(/^border.*radius$/.test(name))return ['0','16px','40px'];
 if(/^border.*width$|^outline-width$|^column-rule-width$/.test(name))return ['1px','5px','10px'];
 if(/^border.*style$|^outline-style$|^column-rule-style$/.test(name))return ['solid','dashed','dotted'];
 if(/^border-(block|inline|top|right|bottom|left)/.test(name))return ['3px solid #7951d8','5px dashed #31916e'];
 if(/(inline|block)-size$/.test(name))return ['120px','220px','auto'];
 if(/background-position/.test(name))return ['left top','center','right bottom'];
 if(/background-size/.test(name))return ['40px 40px','100px 100px','cover'];
 if(/background-repeat/.test(name))return ['repeat','no-repeat','space'];
 if(/background-(origin|clip)/.test(name))return ['border-box','padding-box','content-box'];
 const keywords=[...new Set((meta.syntax||'').replace(/<[^>]+>/g,'').match(/\b[a-z][a-z-]+\b/g)||[])].filter(k=>!['in','of','and'].includes(k));
 const candidates=[...keywords];
 const syntax=meta.syntax||'';
 if(syntax.includes('<color>'))candidates.unshift('#7951d8');
 if(syntax.includes('<length'))candidates.unshift('24px');
 if(syntax.includes('<time>'))candidates.unshift('2s');
 if(syntax.includes('<number'))candidates.unshift('1','2');
 if(syntax.includes('<integer'))candidates.unshift('2','3');
 if(syntax.includes('<percentage'))candidates.unshift('50%');
 if(typeof meta.initial==='string')candidates.push(meta.initial);
 const supported=candidates.filter(v=>CSS.supports(name,v));
 return [...new Set(supported)].slice(0,6).length?[...new Set(supported)].slice(0,6):['initial'];
}

function propertyDemo(name,meta,value){
 if(name==='--*'){const lesson=lessons.find(l=>l.id==='variables');return {html:lesson.html,css:lesson.css.replace('#7951d8',value),note:'--* representa una familia, no un nombre literal válido. Este ejemplo usa --acento: define un valor con ese nombre y reutilízalo con var(--acento).'}}
 const group=(meta.groups||[]).join(' ');let html=baseCard,selector='.demo';
 let base='.demo { padding: 22px; background: #f4eefb; border: 1px solid #e4d7f0; border-radius: 12px; }\nh2 { font-size: 22px; margin: 12px 0; }\np { font-size: 13px; line-height: 1.7; }\n.badge { font-size: 9px; letter-spacing: .13em; color: #9e83b9; }';
 let note='El selector .demo aplica la propiedad a la tarjeta. Cambia el valor, pulsa Ejecutar y compara con el estado inicial.';
 if(/Flexible|Grid|Box Alignment/.test(group)||/^(gap|row-gap|column-gap|order|place-)/.test(name)){
  html=itemHtml;const grid=/Grid/.test(group)||/^justify-(items|self)|^place-/.test(name);
  base=`.demo { display: ${grid?'grid':'flex'}; ${grid?'grid-template-columns: 1fr 1fr;':'flex-wrap: wrap;'} gap: 12px; min-height: 190px; border: 1px dashed #ded1ef; padding: 12px; }\n${itemCss}`;
  if(name==='grid-template-areas')base+='\n.item:nth-child(1) { grid-area: a; }\n.item:nth-child(2) { grid-area: b; }\n.item:nth-child(3) { grid-area: c; }';
  if(/^(flex($|-grow|-shrink|-basis)|order|align-self|justify-self|place-self|grid-(area|column|row))/.test(name)&&!/^flex-(direction|wrap|flow)/.test(name))selector='.item:nth-child(2)';
  note=`El contenedor usa ${grid?'Grid':'Flexbox'}. ${selector==='.demo'?'La propiedad se aplica al contenedor.':'La propiedad se aplica al segundo hijo; los otros dos sirven de comparación.'}`;
 }
 if(/CSS Text|CSS Fonts|CSS Writing|Text Decoration/.test(group)){
  html=`<div class="demo" lang="es">${richText}<br>123456 · 098765 · Aa Bb Cc</div>`;
  base='.demo { max-width: 280px; padding: 18px; background: #f3edfa; border-radius: 10px; font-size: 16px; line-height: 1.7; }';
  if(/decoration|underline/.test(name))base+='\n.demo { text-decoration: underline; }';
  if(name==='text-overflow')base+='\n.demo { white-space: nowrap; overflow: hidden; }';
 }
 if(/CSS Multi-column/.test(group)){
  html=`<div class="demo"><h3>Ideas que fluyen</h3>${richText.repeat(3)}</div>`;
  base='.demo { column-count: 2; column-gap: 20px; max-height: 230px; font-size: 13px; }';
  if(name==='column-span')selector='h3';
 }
 if(/CSS Table/.test(group)||name==='vertical-align'){
  html='<table class="demo"><caption>Tabla de práctica</caption><tr><th>Tema</th><th>Tiempo</th></tr><tr><td>CSS</td><td>20 min</td></tr><tr><td></td><td>15 min</td></tr></table>';
  base='table { width: 100%; border: 1px solid #cdb6e3; }\nth, td { padding: 16px; border: 1px solid #cdb6e3; background: #f3edfa; text-align: left; }';
  if(name==='vertical-align'){selector='td';base+='\ntr { height: 100px; }'}
 }
 if(/Lists/.test(group)||name.startsWith('list-style')){
  html='<ul class="demo"><li>Lee el código</li><li>Cambia un valor</li><li>Ejecuta el ejemplo</li></ul>';
  base='.demo { padding: 20px 32px; background: #f3edfa; border-radius: 10px; }\nli { padding: 10px; }\nli::marker { color: #7951d8; }';
 }
 if(/counter-(reset|increment)/.test(name)){
  html='<div class="demo"><p>Lee el código</p><p>Prueba un valor</p><p>Ejecuta</p></div>';
  base='.demo { counter-reset: paso; }\n.demo p { counter-increment: paso; padding: 12px; background: #f3edfa; }\n.demo p::before { content: counter(paso) ". "; color: #7951d8; }';
  if(name==='counter-increment')selector='.demo p';
 }
 if(name==='content'){html='<div class="demo"></div>';selector='.demo::before';base='.demo { padding: 30px; background: #f3edfa; border-radius: 10px; color: #7951d8; }';}
 if(/SVG|Scalable Vector/.test(group)){
  html='<svg width="100%" height="210" viewBox="0 0 250 180" role="img" aria-label="Forma de prueba"><rect class="demo" x="35" y="25" width="160" height="120" rx="12" fill="#d8c4ed" stroke="#7951d8" stroke-width="3"/></svg>';
  if(['r','cx','cy'].includes(name))html='<svg width="100%" height="210" viewBox="0 0 250 180" role="img" aria-label="Círculo de prueba"><circle class="demo" cx="120" cy="85" r="55" fill="#d8c4ed" stroke="#7951d8" stroke-width="3"/></svg>';
  base='/* .demo es una figura SVG, no una caja HTML. */';note='Esta propiedad se prueba sobre una figura SVG. Las propiedades geométricas y de trazo pueden necesitar un tipo concreto de figura.';
 }
 if(/animation/.test(name)){
  html='<div class="demo">✦</div>';
  base='@keyframes pulso { from { transform: scale(.8); opacity: .5; } to { transform: scale(1.1); opacity: 1; } }\n.demo { font-size: 90px; text-align: center; color: #a488c2; padding: 25px; animation: pulso 2s ease-in-out infinite alternate; }';
  note='La animación pulso ya está definida en @keyframes. La propiedad cambia su comportamiento. Ejecutar reinicia la secuencia; la preferencia de reducir movimiento puede detenerla.';
 }
 if(/^transition/.test(name)){
  html='<button class="demo">Pasa el cursor o usa Tab</button>';
  base='.demo { padding: 20px; margin: 45px 10px; border: 0; border-radius: 10px; background: #7951d8; color: white; cursor: pointer; transition: transform .3s ease; }\n.demo:is(:hover, :focus-visible) { transform: translateY(-15px); background: #31916e; }';
  note='La transición necesita un cambio de estado. Pasa el cursor o enfoca el botón con Tab después de ejecutar.';
 }
 if(/scroll|overflow|overscroll|resize/.test(name)){
  html=`<div class="demo"><h2>Desplázate aquí</h2><p>${richText.repeat(5)}</p></div>`;
  base='.demo { height: 160px; overflow: auto; padding: 16px; border: 2px solid #ded1ef; border-radius: 10px; font-size: 13px; }';
  if(/scroll-snap/.test(name)){
   html=itemHtml;base='.demo { display: flex; gap: 12px; overflow-x: auto; scroll-snap-type: x mandatory; }\n.item { flex: 0 0 85%; padding: 65px 20px; background: #ede5fa; scroll-snap-align: start; }';
   if(name!=='scroll-snap-type')selector='.item';
  }
  note='Este ejemplo tiene un área desplazable. Interactúa dentro de la vista previa para observar el efecto. Algunas opciones dependen del sistema operativo o del dispositivo.';
 }
 if(/^(accent-color|appearance|caret-color)$/.test(name)){
  html='<label><input type="checkbox" class="demo" checked> Una opción</label><br><br><input class="demo" type="text" value="Escribe aquí"><br><br><input class="demo" type="range" aria-label="Valor de ejemplo">';
  base='input[type="text"] { padding: 12px; border: 1px solid #ded1ef; border-radius: 6px; }';
  note='La propiedad se aplica a los controles del formulario. Haz clic o escribe para comprobarla. La apariencia exacta varía entre navegadores.';
 }
 if(/^(object-fit|object-position)$/.test(name)){
  html='<img class="demo" alt="Composición de un círculo y un fondo violeta" src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 200%27%3E%3Crect width=%27400%27 height=%27200%27 fill=%27%23ede5fa%27/%3E%3Ccircle cx=%27300%27 cy=%2770%27 r=%2760%27 fill=%27%237951d8%27/%3E%3C/svg%3E">';
  base='.demo { width: 190px; height: 190px; object-fit: cover; border-radius: 12px; background: #eef4ee; }';
 }
 if(/^(top|right|bottom|left|inset)/.test(name))base+='\nbody { position: relative; min-height: 260px; }\n.demo { position: relative; }';
 if(/background-(position|size|repeat|origin|clip)/.test(name))base+='\n.demo { background-image: radial-gradient(circle, #b89bd5 30%, transparent 32%); background-size: 50px 50px; border: 12px dashed #bda4d8; }';
 if(/^(transform|rotate|scale|translate|perspective)/.test(name))base+='\n.demo { margin: 20px; transform-style: preserve-3d; }';
 if(/^shape-/.test(name)){
  html=`<div class="figura demo"></div><p>${richText.repeat(2)}</p>`;
  base='.figura { float: left; width: 110px; height: 110px; margin: 0 12px 8px 0; border-radius: 50%; background: #d8c4ed; shape-outside: circle(50%); }\np { font-size: 13px; line-height: 1.8; }';
 }
 if(name==='z-index'){
  html='<div class="escena"><div class="otra">Caja A · z-index: 1</div><div class="demo">Caja B</div></div>';
  base='.escena { position: relative; height: 220px; }\n.otra, .demo { position: absolute; padding: 25px; width: 130px; height: 130px; border-radius: 10px; }\n.otra { background: #d8e9dd; left: 10px; top: 10px; z-index: 1; }\n.demo { background: #d8c4ed; left: 80px; top: 60px; }';
 }
 if(name==='backdrop-filter')base+='\nbody { background: repeating-linear-gradient(45deg, #d8c4ed 0 15px, #edf5ef 15px 30px); }\n.demo { background: #ffffff66; }';
 if(/Speech|Paged Media|Fragmentation|Ruby|Anchor|View Transitions|Scroll-driven/.test(group))note+=' Esta familia puede requerir un medio, una estructura o una API adicional. Consulta las condiciones de uso en MDN; el reconocimiento de sintaxis no garantiza un efecto visible en este escenario.';
 return {html,css:`${base}\n\n/* Propiedad en estudio: cambia este valor */\n${selector} {\n  ${name}: ${value};\n}`,note};
}

const selectMap={'Type selectors':'p','Class selectors':'.destacado','ID selectors':'#especial','Universal selectors':'*','Attribute selectors':'[data-tema]','Nesting selector':'&','Selector list':'h2, p','Next-sibling combinator':'h2 + p','Subsequent-sibling combinator':'h2 ~ p','Child combinator':'.grupo > p','Descendant combinator':'.grupo p','Pseudo-classes':'p:first-child','Pseudo-elements':'p::first-letter'};
const parameters={':dir()':'rtl',':lang()':'es',':has()':'input:checked',':is()':'h2, p',':not()':'.silencioso',':where()':'h2, p',':nth-child()':'2n',':nth-last-child()':'2',':nth-last-of-type()':'2',':nth-of-type()':'2',':host()':'.activo',':host-context()':'.oscuro',':state()':'activo','::part()':'boton','::slotted()':'p','::highlight()':'busqueda','::view-transition-group()':'root','::view-transition-image-pair()':'root','::view-transition-new()':'root','::view-transition-old()':'root','::picker()':'select',':active-view-transition-type()':'navegar'};
function selectorDemo(name,meta){
 let html='<section class="grupo" lang="es">\n  <h2 id="especial">Un título</h2>\n  <p class="destacado" data-tema="css">Primer párrafo</p>\n  <p>Segundo párrafo</p>\n  <p class="silencioso">Otro párrafo</p>\n  <label><input type="checkbox"> Marca esta opción</label>\n  <input type="email" placeholder="Tu correo" required>\n  <button>Un botón</button>\n</section>';
 let selector=selectMap[name]||name.replace('()',`(${parameters[name]||'*'})`);
 let base='.grupo { padding: 14px; }\np { padding: 8px; margin: 5px 0; border-radius: 5px; }\nh2 { font-size: 20px; }\ninput, button { margin: 8px 0; padding: 8px; border: 1px solid #ded1ef; border-radius: 5px; }';
 let note='La regla resalta las coincidencias con color y fondo. Modifica los atributos y el orden del HTML para entender qué elementos selecciona.';
 if(name==='Nesting selector')return {...propertyDemo('color',{groups:[]},'#7951d8'),css:'.demo {\n  background: #f3edfa; padding: 20px;\n  & h2 { color: #7951d8; }\n}',note:'& representa el selector padre en una regla anidada.'};
 if(['::before','::after'].includes(name)){selector='.grupo'+name;base+='\n'+selector+' { content: "✦ Contenido generado"; display: block; padding: 12px; }';}
 if(name==='::marker'){html='<ul><li>Primera idea</li><li>Segunda idea</li></ul>';base='li { padding: 12px; }';}
 if(name==='::placeholder')selector='input::placeholder';
 if(name==='::file-selector-button'){html='<input type="file" aria-label="Elige un archivo local de ejemplo">';}
 if(name===':has()')selector='.grupo:has(input:checked)';
 if(name===':target'){html+='<a href="#especial">Activa el destino</a>';}
 if(name===':open'||name==='::details-content'){html='<details open><summary>Abre y cierra</summary><p>Contenido expandido</p></details>';}
 if(name===':in-range'||name===':out-of-range'){html='<label>Número entre 1 y 10 <input type="number" min="1" max="10" value="5"></label>';}
 if(/host|slotted|part|state|view-transition|highlight|cue|picker|scroll-marker|target-text|current|future|past|playing|paused|buffering|stalled|seeking|volume|muted|fullscreen|modal|popover|picture-in-picture|autofill|indeterminate|grammar|spelling|visited|:first$|:left$|:right$|Namespace|Column combinator|xr-overlay/.test(name)){
  note='Este selector depende de un contexto especial (por ejemplo Shadow DOM, una API del navegador, multimedia, impresión o un estado controlado por el navegador). El HTML básico de este laboratorio puede no producir coincidencias. Consulta el enlace de MDN para construir ese contexto.';
 }
 if(name==='Column combinator')selector='col || td';
 if(name==='Namespace separator')selector='svg|rect';
 if(name===':root')selector=':root';
 return {html,css:`${base}\n\n/* Selector en estudio */\n${selector} {\n  color: #7951d8;\n  background-color: #ede5fa;\n  outline: 1px solid #cbb6e3;\n}`,note};
}

const ruleLessons={'@container':'container-queries','@keyframes':'animaciones','@layer':'capas','@media':'media-queries','@page':'impresion','@property':'property','@scope':'scope','@supports':'supports'};
const ruleExamples={
 '@charset':'@charset "UTF-8";\n.demo { color: #7951d8; }',
 '@counter-style':'@counter-style estrellas {\n  system: cyclic;\n  symbols: "✦";\n  suffix: " ";\n}\n.demo { list-style: estrellas; }\nli { padding: 12px; }',
 '@font-face':'@font-face {\n  font-family: "MiFuenteLocal";\n  src: local("Georgia");\n}\n.demo { font-family: "MiFuenteLocal", serif; font-size: 22px; }',
 '@font-feature-values':'@font-feature-values "MiFuente" {\n  @styleset { editorial: 1; }\n}\n.demo { font-family: "MiFuente", serif; font-variant-alternates: styleset(editorial); }',
 '@font-palette-values':'@font-palette-values --mi-paleta {\n  font-family: "MiFuenteColor";\n  base-palette: 0;\n  override-colors: 0 #7951d8;\n}\n.demo { font-family: "MiFuenteColor"; font-palette: --mi-paleta; }',
 '@import':'/* En un archivo real, antes de las reglas: */\n@import url("base.css") layer(base);\n\n.demo { color: #7951d8; }\n/* Las solicitudes externas están bloqueadas en esta vista previa. */',
 '@namespace':'@namespace svg url("http://www.w3.org/2000/svg");\nsvg|rect { fill: #7951d8; }',
 '@document':'/* Extensión no estándar dependiente del navegador. */\n@-moz-document url-prefix("https://example.com/") {\n  .demo { color: #7951d8; }\n}',
 '@position-try':'.ancla { anchor-name: --ancla; }\n.demo {\n  position: absolute;\n  position-anchor: --ancla;\n  position-area: bottom;\n  position-try-fallbacks: --arriba;\n}\n@position-try --arriba { position-area: top; }',
 '@starting-style':'.demo {\n  opacity: 1;\n  transition: opacity 2s;\n  padding: 24px; background: #ede5fa;\n}\n@starting-style { .demo { opacity: 0; } }',
 '@view-transition':'/* Se aplica a transiciones entre documentos del mismo origen. */\n@view-transition { navigation: auto; }\n::view-transition-old(root),\n::view-transition-new(root) { animation-duration: .5s; }\n.demo { color: #7951d8; }'
};
function ruleDemo(name,meta){
 const lesson=lessons.find(l=>l.id===ruleLessons[name]);if(lesson)return {html:lesson.html,css:lesson.css,note:lesson.intro,lesson:lesson.id};
 let html=baseCard;
 if(name==='@counter-style')html='<ul class="demo"><li>Lee</li><li>Cambia</li><li>Ejecuta</li></ul>';
 if(name==='@namespace')html='<svg viewBox="0 0 220 160" height="200" role="img" aria-label="Rectángulo SVG"><rect x="20" y="20" width="180" height="120" rx="15"/></svg>';
 if(name==='@position-try')html='<button class="ancla">Ancla</button><div class="demo">Contenido anclado</div>';
 return {html,css:ruleExamples[name]||`/* Sintaxis de referencia */\n${meta.syntax}`,note:['@font-feature-values','@font-palette-values'].includes(name)?'Necesitas una fuente que ofrezca las características o paletas indicadas. Los nombres de fuente son ilustrativos: carga una fuente adecuada en tu proyecto real.':name==='@starting-style'?'Pulsa Ejecutar de nuevo: la vista se vuelve a crear y puede mostrar la transición de entrada si el navegador admite @starting-style.':'Algunas reglas requieren otro archivo, una navegación, una fuente o un medio específico. La vista previa está aislada y no carga recursos externos; revisa las condiciones en MDN.'};
}

const functionValues={
 'abs()':['width','abs(-180px)'],'acos()':['rotate','acos(.5)'],'asin()':['rotate','asin(.5)'],'atan()':['rotate','atan(1)'],'atan2()':['rotate','atan2(100, 100)'],'cos()':['width','calc(200px * cos(45deg))'],'sin()':['width','calc(200px * sin(45deg))'],'tan()':['rotate','calc(tan(45deg) * 15deg)'],'exp()':['width','calc(exp(2) * 20px)'],'log()':['width','calc(log(8, 2) * 50px)'],'pow()':['width','calc(pow(3, 2) * 20px)'],'sqrt()':['width','calc(sqrt(16) * 40px)'],'hypot()':['width','hypot(120px, 90px)'],'sign()':['opacity','sign(5)'],'round()':['width','round(nearest, 175px, 50px)'],'mod()':['width','calc(mod(350, 200) * 1px)'],'rem()':['width','calc(rem(350, 200) * 1px)'],
 'calc()':['width','calc(100% - 30px)'],'clamp()':['font-size','clamp(16px, 4vw, 28px)'],'min()':['width','min(100%, 220px)'],'max()':['width','max(50%, 150px)'],'calc-size()':['width','calc-size(auto, size - 20px)'],'fit-content()':['grid-template-columns','fit-content(120px) 1fr'],'minmax()':['grid-template-columns','repeat(2, minmax(70px, 1fr))'],
 'var()':['color','var(--acento, #7951d8)'],'attr()':['content','attr(data-label)'],'env()':['padding','max(16px, env(safe-area-inset-top))'],
 'rgb()':['color','rgb(121 81 216)'],'rgba()':['background','rgba(121, 81, 216, .2)'],'hsl()':['background','hsl(270 40% 85%)'],'hsla()':['background','hsla(270, 40%, 65%, .3)'],'hwb()':['background','hwb(270 65% 10%)'],'lab()':['background','lab(75% 25 -30)'],'lch()':['background','lch(75% 35 300)'],'oklab()':['background','oklab(80% .06 -.1)'],'oklch()':['background','oklch(80% .1 300)'],'color()':['background','color(display-p3 .7 .5 .8)'],'color-mix()':['background','color-mix(in oklch, #7951d8 25%, white)'],'light-dark()':['background','light-dark(#ede5fa, #352442)'],
 'linear-gradient()':['background','linear-gradient(135deg, #ede5fa, #b69ad5)'],'radial-gradient()':['background','radial-gradient(circle, #ede5fa, #b69ad5)'],'conic-gradient()':['background','conic-gradient(#7951d8, #ede5fa, #5a9673, #7951d8)'],'repeating-linear-gradient()':['background','repeating-linear-gradient(45deg, #ede5fa 0 10px, #cbb6e3 10px 20px)'],'repeating-radial-gradient()':['background','repeating-radial-gradient(circle, #ede5fa 0 10px, #cbb6e3 10px 20px)'],'repeating-conic-gradient()':['background','repeating-conic-gradient(#ede5fa 0deg 20deg, #b69ad5 20deg 40deg)'],
 'blur()':['filter','blur(2px)'],'brightness()':['filter','brightness(1.3)'],'contrast()':['filter','contrast(1.5)'],'drop-shadow()':['filter','drop-shadow(5px 8px 5px #7951d855)'],'grayscale()':['filter','grayscale(1)'],'hue-rotate()':['filter','hue-rotate(90deg)'],'invert()':['filter','invert(.8)'],'opacity()':['filter','opacity(.5)'],'saturate()':['filter','saturate(3)'],'sepia()':['filter','sepia(1)'],
 'circle()':['clip-path','circle(45%)'],'ellipse()':['clip-path','ellipse(48% 40%)'],'polygon()':['clip-path','polygon(50% 0, 100% 100%, 0 100%)'],'inset()':['clip-path','inset(10% round 20px)'],'path()':['clip-path','path("M 0 0 L 250 0 L 180 200 L 0 180 Z")'],'xywh()':['clip-path','xywh(10px 10px 200px 180px round 15px)'],'rect()':['clip-path','rect(10px 220px 180px 10px round 15px)'],
 'rotate()':['transform','rotate(12deg)'],'rotate3d()':['transform','rotate3d(1, 1, 0, 30deg)'],'rotateX()':['transform','rotateX(35deg)'],'rotateY()':['transform','rotateY(35deg)'],'rotateZ()':['transform','rotateZ(12deg)'],'scale()':['transform','scale(.85)'],'scale3d()':['transform','scale3d(.8, .8, 1)'],'scaleX()':['transform','scaleX(.75)'],'scaleY()':['transform','scaleY(.75)'],'scaleZ()':['transform','perspective(300px) rotateY(35deg) scaleZ(2)'],'skew()':['transform','skew(-10deg, 5deg)'],'skewX()':['transform','skewX(-10deg)'],'skewY()':['transform','skewY(10deg)'],'translate()':['transform','translate(20px, 10px)'],'translate3d()':['transform','translate3d(20px, 10px, 0)'],'translateX()':['transform','translateX(25px)'],'translateY()':['transform','translateY(20px)'],'translateZ()':['transform','perspective(400px) translateZ(-80px)'],'matrix()':['transform','matrix(1, .1, -.1, 1, 10, 10)'],'matrix3d()':['transform','matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 15,10,0,1)'],'perspective()':['transform','perspective(250px) rotateY(30deg)'],
 'counter()':['content','counter(paso)'],'counters()':['content','counters(paso, ".")'],'symbols()':['list-style-type','symbols(cyclic "✦" "→")'],'cubic-bezier()':['animation-timing-function','cubic-bezier(.2, .8, .2, 1)'],'steps()':['animation-timing-function','steps(4, end)'],'linear()':['animation-timing-function','linear(0, .2 30%, 1)'],
 'anchor()':['top','anchor(bottom)'],'anchor-size()':['width','anchor-size(width)'],'ray()':['offset-path','ray(45deg closest-side)'],'scroll()':['animation-timeline','scroll()'],'view()':['animation-timeline','view()'],
 'image-set()':['background-image','image-set(linear-gradient(#ede5fa, #b69ad5) 1x)'],'cross-fade()':['background-image','cross-fade(linear-gradient(red, blue) 50%, linear-gradient(green, white) 50%)'],'image()':['background-image','image(#ede5fa)'],'paint()':['background-image','paint(mi-pintor)'],'element()':['background-image','element(#origen)'],'layer()':['--referencia','layer(base)'],'leader()':['content','leader(dotted)'],'target-counter()':['content','target-counter(attr(href), page)'],'target-counters()':['content','target-counters(attr(href), section, ".")'],'target-text()':['content','target-text(attr(href))'],'palette-mix()':['font-palette','palette-mix(in oklab, normal, dark)'],'alpha()':['color','alpha(from #7951d8 / 50%)'],'param()':['--parametro','param(--acento, #7951d8)']
};
function functionDemo(name,meta){
 const pair=functionValues[name];
 if(!pair)return {html:baseCard,css:`/* Sintaxis formal; requiere adaptar sus parámetros. */\n/* ${meta.syntax} */\n.demo { color: #7951d8; }`,note:'Esta función requiere un contexto específico. Consulta su sintaxis y los ejemplos de MDN antes de incorporarla.'};
 const [property,value]=pair;let demo=propertyDemo(property,{groups:property==='transform'?['CSS Transforms']:property==='animation-timing-function'?['CSS Animations']:property==='grid-template-columns'?['CSS Grid Layout']:[]},value);
 if(['attr()','counter()','counters()'].includes(name)){demo={html:'<div class="demo" data-label="Hola desde un atributo"></div>',css:`.demo { counter-reset: paso 3; padding: 25px; background: #f3edfa; }\n.demo::before { content: ${value}; color: #7951d8; }`,note:'La función produce contenido generado en ::before. Prueba a cambiar el atributo o el valor del contador.'};}
 if(name==='var()')demo.css=':root { --acento: #31916e; }\n'+demo.css;
 if(name==='symbols()')demo=propertyDemo(property,{groups:['CSS Lists and Counters']},value);
 if(['paint()','element()','layer()','leader()','target-counter()','target-counters()','target-text()','param()','anchor()','anchor-size()','view()','scroll()','palette-mix()'].includes(name))demo.note='Esta función necesita un contexto adicional, como un worklet, un motor de impresión, una fuente de color, un ancla o una línea temporal. El fragmento muestra su posición en CSS; puede no producir un efecto visible en esta vista previa aislada. Consulta MDN.';
 return {...demo,property,value};
}
const categoryLabels={properties:'Propiedades',selectors:'Selectores','at-rules':'Reglas @',functions:'Funciones'};
function buildDemo(kind,name,meta,value){return kind==='properties'?propertyDemo(name,meta,value||propertyValues(name,meta)[0]):kind==='selectors'?selectorDemo(name,meta):kind==='at-rules'?ruleDemo(name,meta):functionDemo(name,meta);}

Object.assign(window.CSSLab, {groupNames, statusNames, loadCatalogs, catalogs, propertyValues, propertyDemo, selectorDemo, ruleDemo, functionDemo, categoryLabels, buildDemo});
})();
