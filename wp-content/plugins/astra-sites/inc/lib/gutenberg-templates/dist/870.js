"use strict";(globalThis.webpackChunkast_block_templates=globalThis.webpackChunkast_block_templates||[]).push([[870],{7870:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var a=o(5711),s=o(5940),r=o(7363),n=o(8195),l=o(5302),c=o(1882),i=o(8096),p=o(5868),m=o(4142),u=o(9148),d=o(6128),g=o(1569),b=o(5622),f=o(8680),h=o(1277),y=o(7712),k=o(6302);const{post:v}=wp.ajax,{parse:I}=wp.blocks,w=(0,a.Z)((0,s.Z)((e=>{const{getImportItemInfo:t,getCurrentScreen:o,getSitePreview:a,getActiveBlockPaletteSlug:s,getActivePagePaletteSlug:r,getDisableAi:n,getAdaptiveMode:l}=e("ast-block-templates");return{importItemInfo:t(),sitePreview:a(),currentScreen:o(),activeBlockPaletteSlug:s(),activePagePaletteSlug:r(),disableAI:n(),adaptiveMode:l()}})),(0,i.Z)((e=>{const{setImportItemInfo:t,setTogglePopup:o,setOnboardingAiPopup:a}=e("ast-block-templates"),{insertBlocks:s}=wp.data.dispatch("core/block-editor");return{setImportItemInfo:t,onSetTogglePopup:o,insertBlocks:s,setOnboardingAiPopup:a}})))((0,r.memo)((({setImportItemInfo:e,requiredPlugins:t,importItemInfo:o,title:a,btnClass:s,insertBlocks:i,onSetTogglePopup:w,item:_,onClick:P,onBlockImport:E,activeBlockPaletteSlug:S,activePagePaletteSlug:x,currentScreen:A,disableAI:R,importing:N=!1,adaptiveMode:C,showIcon:T=!0})=>{let[$]=(0,r.useState)(o),j=t||[];const B=s||"",[O]=(0,r.useState)(a||"Import"),{index:Z}=wp.data.select("core/block-editor").getBlockInsertionPoint(),{importInProgress:L,syncLibNotice:D,stepData:{token:q}}=(0,l.Z)((e=>{const{getImportInProgress:t,getNotice:o,getAIStepData:a}=e(k.L);return{importInProgress:t(),syncLibNotice:o(),stepData:a()}}),[]),{setImportInProgress:M,toggleConnectZipAI:z}=(0,c.Z)(k.L),F="info"===D?.type,W=(0,n.gt)(),H=(e,t,o)=>{(0,h.Am)((0,y.Z)({title:e,message:t}),y.Z.getOptions({type:o}))},K=async()=>{try{await(0,u.j)({slug:"ultimate-addons-for-gutenberg",init:"ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php",name:"Spectra"})}catch(e){M(!1),H("Import failed!","Spectra activation failed!","error")}},Q=()=>{(0,u.j)({slug:"wpforms-lite",init:"wpforms-lite/wpforms.php",name:"WPForms Lite"}).then((()=>{J()})).catch((()=>{M(!1),H("Import failed!","WPForms activation failed!","error")}))},U=()=>{const e=$.original_content,t="all-blocks-grid"===A?"block":"page",o="block"===t?$["blocks-category"][0]:$["pages-category"][0];v({action:"ast_block_templates_import_block",content:e,category:o,_ajax_nonce:ast_block_template_vars._ajax_nonce,style:"all-blocks-grid"===A?S:x,disableAI:R,block_type:t,adaptiveMode:C}).done((e=>{M(!1);const t=(0,n.CN)(I(e));i(t,Z,"",!1),V(t[0].clientId),w(),document.getElementById("ast-block-templates-modal-wrap").classList.remove("open"),document.body.classList.remove("ast-block-templates-modal-open"),(W.inactive||W.notInstalled)&&(0,b.iP)(),"function"==typeof E&&E(e,Z)})).fail((()=>{M(!1),H("Import failed!","Failed to import the block. Please try again later or contact support for assistance.","error")}))},V=e=>{e&&setTimeout((()=>{const t=G(),o="block-"+e,a=t.getElementById(o);a&&a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2500)},G=()=>{const e=document.getElementsByClassName("is-tablet-preview"),t=document.getElementsByClassName("is-mobile-preview");if(0!==e.length||0!==t.length){const o=e[0]||t[0];let a=!1;o&&(a=o.getElementsByTagName("iframe")[0]);const s=a?.contentWindow.document||a?.contentDocument;if(s)return s}return document},J=()=>{$?.["post-meta"]?.["astra-site-wpforms-path"]||""?v({action:"ast_block_templates_import_wpforms",id:$.id,_ajax_nonce:ast_block_template_vars._ajax_nonce}).done((()=>{U()})).fail((()=>{M(!1),H("Import failed!","WPForms import failed!","error")})):U()};return React.createElement(p.Z,{className:(0,n.AK)("min-w-[4.875rem] h-7 hover:shadow-small sp-text-sm",B,(L&&!N||F)&&"opacity-50 cursor-not-allowed"),type:"button",variant:"primary",onClick:q?async t=>{L||F||(M(!0),"function"==typeof P&&P(t),W.notInstalled?await(async()=>{try{await(0,u.H)({slug:"ultimate-addons-for-gutenberg",init:"ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php",name:"Spectra"}),await K()}catch(e){M(!1),H("Import failed!","Spectra installation failed!","error")}})():W.inactive&&await K(),(0,g.I)(_.ID,"astra-blocks").then((t=>{e(t),$=t,j=t?.["post-meta"]?.["astra-blocks-required-plugins"]?d.t.parse(t["post-meta"]["astra-blocks-required-plugins"]):[],j.length?"not-installed"===ast_block_template_vars.wpforms_status?(0,u.H)({slug:"wpforms-lite",init:"wpforms-lite/wpforms.php",name:"WPForms Lite"}).then((()=>{Q()})).catch((()=>{M(!1),H("Import failed!","WPForms installation failed!","error")})):"inactive"===ast_block_template_vars.wpforms_status?Q():J():J()})).catch((e=>{H("Import failed!",e,"error"),M(!0)})))}:async()=>{z(),(0,n.jw)("ast-import",{blockId:_.ID,blockType:_.type,blockPaletteSlug:S,pagePaletteSlug:x})},isSmall:!0,hasPrefixIcon:!N&&T},N?React.createElement(m.Z,{className:"h-4 w-4 !shrink-0"}):React.createElement(React.Fragment,null,T&&React.createElement(f.Z,{className:"h-4 w-4 !shrink-0"}),React.createElement("span",{className:"truncate"},O)))})));var _=o(168);const P=e=>{const t=["skip","logo","fav-icon"];for(const o of t)if(e.includes(o))return!0;return!1},E={linearTween:(e,t,o,a)=>o*e/a+t,easeInQuad:(e,t,o,a)=>o*(e/=a)*e+t,easeOutQuad:(e,t,o,a)=>-o*(e/=a)*(e-2)+t,easeInOutQuad:(e,t,o,a)=>(e/=a/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t,easeInCubic:(e,t,o,a)=>o*(e/=a)*e*e+t,easeOutCubic:(e,t,o,a)=>(e/=a,o*(--e*e*e+1)+t),easeInOutCubic:(e,t,o,a)=>(e/=a/2)<1?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t};Object.seal(E);const S=E;var x=o(6810);const{spectra_common_styles:A,is_rtl:R}=ast_block_template_vars,N="visible",C=(0,a.Z)((0,s.Z)((e=>{const{getDisableAi:t,getDisablePreview:o,getTogglePopup:a}=e("ast-block-templates");return{disableAi:t(),disablePreview:o(),togglePopup:a()}})))((0,r.memo)((({item:e,content:t,stylesheet:o,astraCustomizer:a,globalStylesheet:s,colorPalette:l,dynamicContent:c,selectedImages:i,disableAi:p,togglePopup:m,email:u,phone:d,address:g})=>{const b=(0,r.useRef)(null),f=(0,r.useRef)(null),h=e["thumbnail-image-url"]||"",y=e["featured-image-url"]||"",k=(0,n.gt)();let v=0,I=0,E=0;const[C,T]=(0,r.useState)({importing:!1}),[$,j]=(0,r.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`),[B,O]=(0,r.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`);function Z(){const e=b?.current,t=f?.current;if(!e||!t)return;const o=e.parentNode.offsetWidth/1200,a=o*t.offsetHeight;e.style.transform=`scale(${o})`,e.style.height=`${a}px`}(0,r.useLayoutEffect)((()=>{let e=!0;const r={landscape:[],portrait:[]};i?.forEach((e=>{"landscape"===e.orientation?r.landscape.push(e):r.portrait.push(e)}));const n=r,m=new Image;m.src=h;const b=new Image;b.src=y;const k=f.current;function w(t,o){e&&(t.onload=()=>{o(t.src)})}w(m,j),w(b,O);const _=document.getElementById("astra-wp-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container"),S=document.getElementById("astra-block-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container");let x="";var R,C,T;if(o&&(R=o,C=n?.landscape,o=p?R:0!==Object.keys(c).length&&c?C&&0===C.length?R:R.replace(/background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/g,(function(e,t){if(P(t))return e;if(!C[E]?.url)return"";const o=C[E]?.url;return E++,E%=C.length,'background-image: url("'+o+'")'})):R),x+=a?`<style type="text/css" id="gt-astra-customizer">${a}</style>`:"",x+=`<style type="text/css" id="gt-spectra-common-stylesheet">${A}</style>`,x=o?`${x} <style type="text/css" id="gt-common-stylesheet">${o}</style>`:x,s&&(x+=`<style type="text/css" id="gt-global-stylesheet"> ${s} </style>`),_&&(x+=`<style type="text/css" id="gt-wpeditor-css" > ${_} </style>`),S&&(x+=`<style type="text/css" id="gt-blockeditor-css"> ${S} </style>`),k&&t){let e=k.shadowRoot;if(null===e&&(e=k.attachShadow({mode:"open"})),null===e)return;let o=t;if(!p){const e=c??[];e&&Object.keys(e)?.length>0&&Object.keys(e).forEach((t=>{o=null!==e[t]?o.replace(t,e[t]):o})),c&&Object.keys(c).length>0&&(T=o,u&&(T=T.replace("contact@example.com",u)),d&&(T=T.replace("202-555-0188",d)),g&&(T=T.replace("2360 Hood Avenue, San Diego, CA, 92123",g)),o=T,o=D(o))}e.innerHTML=x+'<div class="st-block-container">'+o+"</div>",l.forEach(((t,o)=>{e?.host.style.setProperty(`--ast-global-color-${o}`,t)}));const a=k.shadowRoot.querySelectorAll("img");e&&(a.forEach((e=>{P(e.src)||p||0===n.landscape.length||0===n.portrait.length||0===Object.keys(c).length||!c||L(e,"hidden")})),Z(),((e,t)=>{if(p)return;if(0===Object.keys(c).length||!c)return;const o=t.landscape?t.landscape:[],a=t.portrait?t.portrait:[];0!==o.length&&0!==a.length&&e?.forEach((function(e,t){P(e.src)||(e.onload=()=>{const s=e.getAttribute("src")||"";if(s.includes("unsplash")||s.includes("pexels")||s.includes("pixabay"))return void L(e,N);const r=(e=>{const t=new Image;return t.src=e,t.width>t.height?"landscape":"portrait"})(e.src);let n;if(v=t%o.length,I=t%a.length,n="landscape"===r?o[v]:a[I],void 0!==n)if(n.url.includes("unsplash")||n.url.includes("pexels")||n.url.includes("pixabay")){if("landscape"===r?(v++,v%=o.length):(I++,I%=a.length),"PICTURE"===e.parentNode.nodeName)e.parentNode.querySelectorAll("source").forEach((e=>{e.setAttribute("srcset",n.optimized_url)})),e.parentNode.querySelector("img").setAttribute("src",n.optimized_url);else{const t=document.createElement("img");t.src=n.optimized_url,e.parentNode.replaceChild(t,e)}L(e,N)}else L(e,N);else L(e,N)},e.onerror=()=>{L(e,N)})}))})(a,n))}return()=>{e=!1}}),[e,p,c,i]),(0,r.useEffect)((()=>{const e=new ResizeObserver(Z);return e.observe(document.documentElement),()=>{e&&e.disconnect()}}),[]),(0,r.useEffect)((()=>{const e=document.querySelector("#ast-block-templates-modal-wrap");if(!e)return;const t=new MutationObserver(Z);return t.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{t&&t.disconnect()}}),[]),(0,r.useEffect)((()=>{const e=f?.current;if(e){const t=e.shadowRoot;l.forEach(((e,o)=>{null!==t&&t.host.style.setProperty(`--ast-global-color-${o}`,e)}))}}),[l]);const L=(e,t)=>{e&&(e.style.visibility=t)},D=(e="")=>g?e.replace(/(src="https:\/\/maps\.google\.com\/maps\?q=)([^&]+)(&z=\d+&hl=en&t=m&output=embed&iwloc=near")/g,`$1${encodeURIComponent(g)}$3`):e;let q=0,M=0;const z=(e,t,o)=>{const a=e.scrollTop,s=t-a;let r=0;const n=function(){r+=20;const t=S.linearTween(r,a,s,o);e.scrollTop=t,r<o&&(q=setTimeout(n,20))};n()};(0,r.useEffect)((()=>{m||(v=0,I=0,E=0)}),[m]);const F=R?"origin-top-right":"origin-top-left";return React.createElement(x.Z,{className:(0,n.AK)("w-full h-fit p-5",!0===C.importing?"importing":"")},React.createElement("div",{className:(0,n.AK)("cursor-pointer relative border border-solid border-border-primary hover:border-accent-spectra transition duration-150 ease-in-out overflow-hidden group",C.importing&&"border-accent-spectra")},React.createElement("div",{className:`thumbnail left-0 m-0 min-h-[auto] overflow-visible text-left top-0 ${F} relative pointer-events-none`,ref:b},React.createElement("div",{className:"absolute w-[1200px] pointer-events-none max-h-[1600px] overflow-hidden",ref:f},!t&&React.createElement("img",{srcSet:`${B}, ${$}`,src:$,alt:"Preview"}),React.createElement("div",{className:"preview"},React.createElement("span",{className:"ast-block-templates-icon ast-block-templates-icon-search"})))),React.createElement("div",{className:"absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-end",onMouseEnter:()=>{if("page"!==e.type)return;const t=f.current;q&&clearTimeout(q),M=setTimeout((()=>{z(t,t.scrollHeight,4e3)}),1e3)},onMouseLeave:()=>{M&&clearTimeout(M);const e=f.current;q&&clearTimeout(q),z(e,0,1500)}},React.createElement("div",{className:(0,n.AK)("opacity-0 group-hover:opacity-100 w-full flex items-center justify-between px-3 py-2 backdrop-blur-sm bg-white/[0.85] shadow-action-buttons transition-all duration-150 ease-in-out",!0===C.importing?"opacity-100":"")},React.createElement(w,{title:k.notInstalled?"Install Spectra & Insert":k.inactive?"Activate Spectra & Insert":"Insert",showIcon:k.active,liveRequest:!0,item:e,importing:C.importing,onClick:()=>{T({...C,importing:!0})},onBlockImport:()=>{T({...C,importing:!1})}}),React.createElement(_.Z,{item:e})))))})))}}]);