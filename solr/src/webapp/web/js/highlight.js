var hljs=new function(){var p={};var a={};function n(c){return c.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function k(s,r){if(!s){return false}for(var c=0;c<s.length;c++){if(s[c]==r){return true}}return false}function e(s,r,c){var t="m"+(s.cI?"i":"")+(c?"g":"");return new RegExp(r,t)}function j(r){for(var c=0;c<r.childNodes.length;c++){node=r.childNodes[c];if(node.nodeName=="CODE"){return node}if(!(node.nodeType==3&&node.nodeValue.match(/\s+/))){return null}}}function h(u,t){var s="";for(var r=0;r<u.childNodes.length;r++){if(u.childNodes[r].nodeType==3){var c=u.childNodes[r].nodeValue;if(t){c=c.replace(/\n/g,"")}s+=c}else{if(u.childNodes[r].nodeName=="BR"){s+="\n"}else{s+=h(u.childNodes[r])}}}s=s.replace(/\r/g,"\n");return s}function b(t){var r=t.className.split(/\s+/);r=r.concat(t.parentNode.className.split(/\s+/));for(var c=0;c<r.length;c++){var s=r[c].replace(/^language-/,"");if(p[s]||s=="no-highlight"){return s}}}function d(c){var r=[];(function(t,u){for(var s=0;s<t.childNodes.length;s++){if(t.childNodes[s].nodeType==3){u+=t.childNodes[s].nodeValue.length}else{if(t.childNodes[s].nodeName=="BR"){u+=1}else{r.push({event:"start",offset:u,node:t.childNodes[s]});u=arguments.callee(t.childNodes[s],u);r.push({event:"stop",offset:u,node:t.childNodes[s]})}}}return u})(c,0);return r}function m(z,A,y){var s=0;var x="";var u=[];function v(){if(z.length&&A.length){if(z[0].offset!=A[0].offset){return(z[0].offset<A[0].offset)?z:A}else{return(z[0].event=="start"&&A[0].event=="stop")?A:z}}else{return z.length?z:A}}function t(E){var F="<"+E.nodeName.toLowerCase();for(var C=0;C<E.attributes.length;C++){var D=E.attributes[C];F+=" "+D.nodeName.toLowerCase();if(D.nodeValue!=undefined){F+='="'+n(D.nodeValue)+'"'}}return F+">"}function B(C){return"</"+C.nodeName.toLowerCase()+">"}while(z.length||A.length){var w=v().splice(0,1)[0];x+=n(y.substr(s,w.offset-s));s=w.offset;if(w.event=="start"){x+=t(w.node);u.push(w.node)}else{if(w.event=="stop"){var r=u.length;do{r--;var c=u[r];x+=B(c)}while(c!=w.node);u.splice(r,1);while(r<u.length){x+=t(u[r]);r++}}}}x+=y.substr(s);return x}function g(K,E){function A(r,N){for(var M=0;M<N.sm.length;M++){if(N.sm[M].bR.test(r)){return N.sm[M]}}return null}function x(M,r){if(D[M].e&&D[M].eR.test(r)){return 1}if(D[M].eW){var N=x(M-1,r);return N?N+1:0}return 0}function y(r,M){return M.iR&&M.iR.test(r)}function B(P,O){var N=[];for(var M=0;M<P.sm.length;M++){N.push(P.sm[M].b)}var r=D.length-1;do{if(D[r].e){N.push(D[r].e)}r--}while(D[r+1].eW);if(P.i){N.push(P.i)}return e(O,"("+N.join("|")+")",true)}function t(N,M){var O=D[D.length-1];if(!O.t){O.t=B(O,I)}O.t.lastIndex=M;var r=O.t.exec(N);if(r){return[N.substr(M,r.index-M),r[0],false]}else{return[N.substr(M),"",true]}}function c(P,r){var M=I.cI?r[0].toLowerCase():r[0];for(var O in P.keywordGroups){if(!P.keywordGroups.hasOwnProperty(O)){continue}var N=P.keywordGroups[O].hasOwnProperty(M);if(N){return[O,N]}}return false}function G(N,Q){if(!Q.k||!Q.l){return n(N)}if(!Q.lR){var P="("+Q.l.join("|")+")";Q.lR=e(I,P,true)}var O="";var R=0;Q.lR.lastIndex=0;var M=Q.lR.exec(N);while(M){O+=n(N.substr(R,M.index-R));var r=c(Q,M);if(r){u+=r[1];O+='<span class="'+r[0]+'">'+n(M[0])+"</span>"}else{O+=n(M[0])}R=Q.lR.lastIndex;M=Q.lR.exec(N)}O+=n(N.substr(R,N.length-R));return O}function L(r,N){if(N.subLanguage&&a[N.subLanguage]){var M=g(N.subLanguage,r);u+=M.keyword_count;C+=M.r;return M.value}else{return G(r,N)}}function J(N,r){var M=N.nM?"":'<span class="'+N.displayClassName+'">';if(N.rB){s+=M;N.buffer=""}else{if(N.eB){s+=n(r)+M;N.buffer=""}else{s+=M;N.buffer=r}}D[D.length]=N}function F(M,O,R){var P=D[D.length-1];if(R){s+=L(P.buffer+M,P);return false}var S=A(O,P);if(S){s+=L(P.buffer+M,P);J(S,O);C+=S.r;return S.rB}var r=x(D.length-1,O);if(r){var T=P.nM?"":"</span>";if(P.rE){s+=L(P.buffer+M,P)+T}else{if(P.eE){s+=L(P.buffer+M,P)+T+n(O)}else{s+=L(P.buffer+M+O,P)+T}}while(r>1){T=D[D.length-2].nM?"":"</span>";s+=T;r--;D.length--}var Q=D[D.length-1];D.length--;D[D.length-1].buffer="";if(Q.starts){for(var N=0;N<I.m.length;N++){if(I.m[N].cN==Q.starts){J(I.m[N],"");break}}}return P.rE}if(y(O,P)){throw"Illegal"}}var I=p[K];var D=[I.dM];var C=0;var u=0;var s="";try{var w=0;I.dM.buffer="";do{var z=t(E,w);var v=F(z[0],z[1],z[2]);w+=z[0].length;if(!v){w+=z[1].length}}while(!z[2]);if(D.length>1){throw"Illegal"}return{language:K,r:C,keyword_count:u,value:s}}catch(H){if(H=="Illegal"){return{language:null,r:0,keyword_count:0,value:n(E)}}else{throw H}}}function i(){function r(y,x){if(y.compiled){return}if(y.b){y.bR=e(x,"^"+y.b)}if(y.e){y.eR=e(x,"^"+y.e)}if(y.i){y.iR=e(x,"^(?:"+y.i+")")}if(y.r==undefined){y.r=1}if(!y.displayClassName){y.displayClassName=y.cN}if(!y.cN){y.nM=true}for(var w in y.k){if(!y.k.hasOwnProperty(w)){continue}if(y.k[w] instanceof Object){y.keywordGroups=y.k}else{y.keywordGroups={keyword:y.k}}break}y.sm=[];if(y.c){for(var v=0;v<y.c.length;v++){if(y.c[v] instanceof Object){y.sm.push(y.c[v])}else{for(var u=0;u<x.m.length;u++){if(x.m[u].cN==y.c[v]){y.sm.push(x.m[u])}}}}}y.compiled=true;for(var v=0;v<y.sm.length;v++){r(y.sm[v],x)}}for(var t in p){if(!p.hasOwnProperty(t)){continue}var c=[p[t].dM].concat(p[t].m);for(var s=0;s<c.length;s++){r(c[s],p[t])}}}function f(){if(f.called){return}f.called=true;i();a=p}function q(v,A,r){f();var C=h(v,r);var t=b(v);if(t=="no-highlight"){return}if(t){var y=g(t,C)}else{var y={language:"",keyword_count:0,r:0,value:n(C)};var z=y;for(var B in a){if(!a.hasOwnProperty(B)){continue}var w=g(B,C);if(w.keyword_count+w.r>z.keyword_count+z.r){z=w}if(w.keyword_count+w.r>y.keyword_count+y.r){z=y;y=w}}}var u=v.className;if(!u.match(y.language)){u=u?(u+" "+y.language):y.language}var c=d(v);if(c.length){var s=document.createElement("pre");s.innerHTML=y.value;y.value=m(c,d(s),C)}if(A){y.value=y.value.replace(/^((<[^>]+>|\t)+)/gm,function(D,G,F,E){return G.replace(/\t/g,A)})}if(r){y.value=y.value.replace(/\n/g,"<br>")}if(/MSIE [678]/.test(navigator.userAgent)&&v.tagName=="CODE"&&v.parentNode.tagName=="PRE"){var s=v.parentNode;var x=document.createElement("div");x.innerHTML="<pre><code>"+y.value+"</code></pre>";v=x.firstChild.firstChild;x.firstChild.cN=s.cN;s.parentNode.replaceChild(x.firstChild,s)}else{v.innerHTML=y.value}v.className=u;v.dataset={};v.dataset.result={language:y.language,kw:y.keyword_count,re:y.r};if(z&&z.language){v.dataset.second_best={language:z.language,kw:z.keyword_count,re:z.r}}}function l(){if(l.called){return}l.called=true;f();if(arguments.length){for(var c=0;c<arguments.length;c++){if(p[arguments[c]]){a[arguments[c]]=p[arguments[c]]}}}var s=document.getElementsByTagName("pre");for(var c=0;c<s.length;c++){var r=j(s[c]);if(r){q(r,hljs.tabReplace)}}}function o(){var c=arguments;var r=function(){l.apply(null,c)};if(window.addEventListener){window.addEventListener("DOMContentLoaded",r,false);window.addEventListener("load",r,false)}else{if(window.attachEvent){window.attachEvent("onload",r)}else{window.onload=r}}}this.LANGUAGES=p;this.initHighlightingOnLoad=o;this.highlightBlock=q;this.initHighlighting=l;this.IMR="\\b|\\B";this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:["escape"],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:["escape"],r:0};this.BE={cN:"escape",b:"\\\\.",e:this.IMR,nM:true,r:0};this.CLCM={cN:"comment",b:"//",e:"$",r:0};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NUMBER_MODE={cN:"number",b:this.NR,e:this.IMR,r:0};this.CNM={cN:"number",b:this.CNR,e:this.IMR,r:0};this.inherit=function(c,t){var s={};for(var r in c){s[r]=c[r]}if(t){for(var r in t){s[r]=t[r]}}return s}}();var initHighlightingOnLoad=hljs.initHighlightingOnLoad;(function(){var d="[A-Za-z0-9\\._:-]+";var k={cN:"pi",b:"<\\?",e:"\\?>",r:10};var i={cN:"doctype",b:"<!DOCTYPE",e:">",r:10};var j={cN:"comment",b:"<!--",e:"-->"};var g={cN:"tag",b:"</?",e:"/?>",c:["title","tag_internal"]};var e={cN:"title",b:d,e:hljs.IMR};var b={cN:"tag_internal",b:hljs.IMR,eW:true,nM:true,c:["attribute","value_container"],r:0};var f={cN:"attribute",b:d,e:hljs.IMR,r:0};var a={cN:"value_container",b:'="',rB:true,e:'"',nM:true,c:[{cN:"value",b:'"',eW:true}]};var c={cN:"value_container",b:"='",rB:true,e:"'",nM:true,c:[{cN:"value",b:"'",eW:true}]};hljs.LANGUAGES.xml={dM:{c:["pi","doctype","comment","cdata","tag"]},cI:true,m:[{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},k,i,j,g,hljs.inherit(e,{r:1.75}),b,f,a,c]};var h={code:1,kbd:1,font:1,noscript:1,style:1,img:1,title:1,menu:1,tt:1,tr:1,param:1,li:1,tfoot:1,th:1,input:1,td:1,dl:1,blockquote:1,fieldset:1,big:1,dd:1,abbr:1,optgroup:1,dt:1,button:1,isindex:1,p:1,small:1,div:1,dir:1,em:1,frame:1,meta:1,sub:1,bdo:1,label:1,acronym:1,sup:1,body:1,basefont:1,base:1,br:1,address:1,strong:1,legend:1,ol:1,script:1,caption:1,s:1,col:1,h2:1,h3:1,h1:1,h6:1,h4:1,h5:1,table:1,select:1,noframes:1,span:1,area:1,dfn:1,strike:1,cite:1,thead:1,head:1,option:1,form:1,hr:1,"var":1,link:1,b:1,colgroup:1,ul:1,applet:1,del:1,iframe:1,pre:1,frameset:1,ins:1,tbody:1,html:1,samp:1,map:1,object:1,a:1,xmlns:1,center:1,textarea:1,i:1,q:1,u:1,section:1,nav:1,article:1,aside:1,hgroup:1,header:1,footer:1,figure:1,figurecaption:1,time:1,mark:1,wbr:1,embed:1,video:1,audio:1,source:1,canvas:1,datalist:1,keygen:1,output:1,progress:1,meter:1,details:1,summary:1,command:1};hljs.LANGUAGES.html={dM:{c:["comment","pi","doctype","vbscript","tag"]},cI:true,m:[{cN:"tag",b:"<style",e:">",l:[hljs.IR],k:{style:1},c:["tag_internal"],starts:"css"},{cN:"tag",b:"<script",e:">",l:[hljs.IR],k:{script:1},c:["tag_internal"],starts:"javascript"},{cN:"css",e:"</style>",rE:true,subLanguage:"css"},{cN:"javascript",e:"<\/script>",rE:true,subLanguage:"javascript"},{cN:"vbscript",b:"<%",e:"%>",subLanguage:"vbscript"},j,k,i,hljs.inherit(g),hljs.inherit(e,{l:[hljs.IR],k:h}),hljs.inherit(b),f,a,c,{cN:"value_container",b:"=",e:hljs.IMR,c:[{cN:"unquoted_value",displayClassName:"value",b:"[^\\s/>]+",e:hljs.IMR}]}]}})();