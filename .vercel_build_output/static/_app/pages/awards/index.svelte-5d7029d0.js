import{S as ue,i as de,s as he,l as x,f as j,d as f,e as _,k as z,c as v,a as k,n as w,a2 as V,b as o,Y as u,I as T,N as Y,Z as ne,t as R,g as q,O as fe,aa as _e,ab as Ae,x as J,u as X,h as Ge,j as ve,m as me,o as ge,v as pe,r as Se,w as Pe,a9 as je}from"../../chunks/vendor-60eb0dec.js";import{g as Ve}from"../../chunks/leagueAwards-121d6657.js";import"../../chunks/index.svelte_svelte&type=style&lang-b0d2c838.js";import{c as ke,a as C}from"../../chunks/universalFunctions-311859ab.js";import"../../chunks/leagueUsers-b0fdd0b7.js";import"../../chunks/news-c1036290.js";import"../../chunks/navigation-51b348a1.js";import"../../chunks/singletons-ff603286.js";function be(a,e,s){const l=a.slice();return l[19]=e[s],l}function He(a){let e,s,l,t,c,r,i,d,n,m,D,L=a[6](a[19].manager.name,a[19].manager.rosterID)+"",M,S,P;function I(N,h){return N[19].name?Ce:Te}let E=I(a)(a);function G(){return a[15](a[19])}function K(){return a[16](a[19])}return{c(){e=_("div"),E.c(),s=z(),l=_("div"),t=_("img"),i=z(),d=_("img"),m=z(),D=_("span"),M=z(),this.h()},l(N){e=v(N,"DIV",{class:!0});var h=k(e);E.l(h),s=w(h),l=v(h,"DIV",{class:!0});var H=k(l);t=v(H,"IMG",{src:!0,class:!0,alt:!0}),i=w(H),d=v(H,"IMG",{src:!0,class:!0,alt:!0}),H.forEach(f),m=w(h),D=v(h,"SPAN",{class:!0});var Q=k(D);Q.forEach(f),M=w(h),h.forEach(f),this.h()},h(){V(t.src,c=a[19].manager.avatar)||o(t,"src",c),o(t,"class","divisionLeader clickable svelte-zcagvz"),o(t,"alt",r=""+(a[19].name+" champion")),V(d.src,n="./medal.png")||o(d,"src",n),o(d,"class","medal svelte-zcagvz"),o(d,"alt","champion"),o(l,"class","leaderBlock svelte-zcagvz"),o(D,"class","genLabel clickable svelte-zcagvz"),o(e,"class","division svelte-zcagvz")},m(N,h){j(N,e,h),E.m(e,null),u(e,s),u(e,l),u(l,t),u(l,i),u(l,d),u(e,m),u(e,D),D.innerHTML=L,u(e,M),S||(P=[T(t,"click",G),T(D,"click",K)],S=!0)},p(N,h){a=N,E.p(a,h)},d(N){N&&f(e),E.d(),S=!1,ne(P)}}}function Te(a){let e,s;return{c(){e=_("h6"),s=R("Regular Season Champion"),this.h()},l(l){e=v(l,"H6",{class:!0});var t=k(e);s=q(t,"Regular Season Champion"),t.forEach(f),this.h()},h(){o(e,"class","svelte-zcagvz")},m(l,t){j(l,e,t),u(e,s)},p:Y,d(l){l&&f(e)}}}function Ce(a){let e,s=a[19].name+"",l,t;return{c(){e=_("h6"),l=R(s),t=R(" Division"),this.h()},l(c){e=v(c,"H6",{class:!0});var r=k(e);l=q(r,s),t=q(r," Division"),r.forEach(f),this.h()},h(){o(e,"class","svelte-zcagvz")},m(c,r){j(c,e,r),u(e,l),u(e,t)},p:Y,d(c){c&&f(e)}}}function ze(a){let e,s=a[19].manager&&He(a);return{c(){s&&s.c(),e=x()},l(l){s&&s.l(l),e=x()},m(l,t){s&&s.m(l,t),j(l,e,t)},p(l,t){l[19].manager&&s.p(l,t)},d(l){s&&s.d(l),l&&f(e)}}}function Be(a){let e,s,l,t,c,r,i,d,n,m,D,L,M=a[6](a[5].name,a[5].rosterID)+"",S,P;return{c(){e=_("div"),s=_("img"),t=z(),c=_("div"),r=_("img"),d=z(),n=_("img"),D=z(),L=_("span"),this.h()},l(I){e=v(I,"DIV",{class:!0});var A=k(e);s=v(A,"IMG",{src:!0,class:!0,alt:!0}),t=w(A),c=v(A,"DIV",{class:!0});var E=k(c);r=v(E,"IMG",{src:!0,class:!0,alt:!0}),d=w(E),n=v(E,"IMG",{src:!0,class:!0,alt:!0}),E.forEach(f),D=w(A),L=v(A,"SPAN",{class:!0});var G=k(L);G.forEach(f),A.forEach(f),this.h()},h(){V(s.src,l="./toilet-banner.png")||o(s,"src",l),o(s,"class","toilet-banner svelte-zcagvz"),o(s,"alt","The Toilet Bowl"),V(r.src,i=a[5].avatar)||o(r,"src",i),o(r,"class","toiletWinner clickable svelte-zcagvz"),o(r,"alt","toilet bowl winner"),V(n.src,m="./toilet-bowl-2.png")||o(n,"src",m),o(n,"class","toilet svelte-zcagvz"),o(n,"alt","toilet bowl"),o(c,"class","toiletBowl svelte-zcagvz"),o(L,"class","genLabel clickable svelte-zcagvz"),o(e,"class","toiletParent svelte-zcagvz")},m(I,A){j(I,e,A),u(e,s),u(e,t),u(e,c),u(c,r),u(c,d),u(c,n),u(e,D),u(e,L),L.innerHTML=M,S||(P=[T(r,"click",a[17]),T(L,"click",a[18])],S=!0)},p:Y,d(I){I&&f(e),S=!1,ne(P)}}}function Re(a){let e,s,l,t,c,r,i,d,n,m,D,L,M,S,P,I,A,E,G,K=a[6](a[1].name,a[1].rosterID)+"",N,h,H,Q,F,Ee=a[6](a[2].name,a[2].rosterID)+"",ee,O,ce,te,U,$e=a[6](a[3].name,a[3].rosterID)+"",le,W,ae,se,ie,Z=a[4],$=[];for(let g=0;g<Z.length;g+=1)$[g]=ze(be(a,Z,g));let B=a[5]&&Be(a);return{c(){e=_("div"),s=_("h3"),l=R(a[0]),t=R(" Awards"),c=z(),r=_("img"),d=z(),n=_("div"),m=_("img"),L=z(),M=_("img"),P=z(),I=_("img"),E=z(),G=_("span"),N=z(),h=_("img"),Q=z(),F=_("span"),ee=z(),O=_("img"),te=z(),U=_("span"),le=z(),W=_("div");for(let g=0;g<$.length;g+=1)$[g].c();ae=z(),B&&B.c(),this.h()},l(g){e=v(g,"DIV",{class:!0});var y=k(e);s=v(y,"H3",{class:!0});var p=k(s);l=q(p,a[0]),t=q(p," Awards"),p.forEach(f),c=w(y),r=v(y,"IMG",{src:!0,class:!0,alt:!0}),d=w(y),n=v(y,"DIV",{id:!0,class:!0});var b=k(n);m=v(b,"IMG",{src:!0,class:!0,alt:!0}),L=w(b),M=v(b,"IMG",{src:!0,class:!0,alt:!0}),P=w(b),I=v(b,"IMG",{src:!0,class:!0,alt:!0}),E=w(b),G=v(b,"SPAN",{class:!0});var ye=k(G);ye.forEach(f),N=w(b),h=v(b,"IMG",{src:!0,class:!0,alt:!0}),Q=w(b),F=v(b,"SPAN",{class:!0});var Le=k(F);Le.forEach(f),ee=w(b),O=v(b,"IMG",{src:!0,class:!0,alt:!0}),te=w(b),U=v(b,"SPAN",{class:!0});var Ne=k(U);Ne.forEach(f),b.forEach(f),le=w(y),W=v(y,"DIV",{class:!0});var oe=k(W);for(let re=0;re<$.length;re+=1)$[re].l(oe);oe.forEach(f),ae=w(y),B&&B.l(y),y.forEach(f),this.h()},h(){o(s,"class","svelte-zcagvz"),V(r.src,i="./banner.png")||o(r,"src",i),o(r,"class","banner svelte-zcagvz"),o(r,"alt","The Champion's Cup"),V(m.src,D="./podium.png")||o(m,"src",D),o(m,"class","podiumImage svelte-zcagvz"),o(m,"alt","podium"),V(M.src,S=a[1].avatar)||o(M,"src",S),o(M,"class","first champ clickable svelte-zcagvz"),o(M,"alt","champion"),V(I.src,A="./laurel.png")||o(I,"src",A),o(I,"class","laurel svelte-zcagvz"),o(I,"alt","laurel"),o(G,"class","label firstLabel clickable svelte-zcagvz"),V(h.src,H=a[2].avatar)||o(h,"src",H),o(h,"class","second champ clickable svelte-zcagvz"),o(h,"alt","2nd"),o(F,"class","label secondLabel clickable svelte-zcagvz"),V(O.src,ce=a[3].avatar)||o(O,"src",ce),o(O,"class","third champ clickable svelte-zcagvz"),o(O,"alt","3rd"),o(U,"class","label thirdLabel clickable svelte-zcagvz"),o(n,"id","podium"),o(n,"class","svelte-zcagvz"),o(W,"class","divisions svelte-zcagvz"),o(e,"class","awards svelte-zcagvz")},m(g,y){j(g,e,y),u(e,s),u(s,l),u(s,t),u(e,c),u(e,r),u(e,d),u(e,n),u(n,m),u(n,L),u(n,M),u(n,P),u(n,I),u(n,E),u(n,G),G.innerHTML=K,u(n,N),u(n,h),u(n,Q),u(n,F),F.innerHTML=Ee,u(n,ee),u(n,O),u(n,te),u(n,U),U.innerHTML=$e,u(e,le),u(e,W);for(let p=0;p<$.length;p+=1)$[p].m(W,null);u(e,ae),B&&B.m(e,null),se||(ie=[T(M,"click",a[9]),T(G,"click",a[10]),T(h,"click",a[11]),T(F,"click",a[12]),T(O,"click",a[13]),T(U,"click",a[14])],se=!0)},p(g,[y]){if(y&80){Z=g[4];let p;for(p=0;p<Z.length;p+=1){const b=be(g,Z,p);$[p]?$[p].p(b,y):($[p]=ze(b),$[p].c(),$[p].m(W,null))}for(;p<$.length;p+=1)$[p].d(1);$.length=Z.length}g[5]&&B.p(g,y)},i:Y,o:Y,d(g){g&&f(e),fe($,g),B&&B.d(),se=!1,ne(ie)}}}function qe(a,e,s){let{podium:l,currentManagers:t}=e;const{year:c,champion:r,second:i,third:d,divisions:n,toilet:m}=l,D=(h,H)=>ke(h)!=ke(t[H].name)?`${h}<div class="curOwner">(${t[H].name})</div>`:h,L=()=>C(r.rosterID),M=()=>C(r.rosterID),S=()=>C(i.rosterID),P=()=>C(i.rosterID),I=()=>C(d.rosterID),A=()=>C(d.rosterID),E=h=>C(h.manager.rosterID),G=h=>C(h.manager.rosterID),K=()=>C(m.rosterID),N=()=>C(m.rosterID);return a.$$set=h=>{"podium"in h&&s(7,l=h.podium),"currentManagers"in h&&s(8,t=h.currentManagers)},[c,r,i,d,n,m,D,l,t,L,M,S,P,I,A,E,G,K,N]}class Oe extends ue{constructor(e){super();de(this,e,qe,Re,he,{podium:7,currentManagers:8})}}function we(a){a[1]=a[3].podiums,a[2]=a[3].currentManagers}function Ie(a,e,s){const l=a.slice();return l[4]=e[s],l}function Ye(a){let e,s,l=a[7].message+"",t;return{c(){e=_("p"),s=R("Something went wrong: "),t=R(l)},l(c){e=v(c,"P",{});var r=k(e);s=q(r,"Something went wrong: "),t=q(r,l),r.forEach(f)},m(c,r){j(c,e,r),u(e,s),u(e,t)},p(c,r){r&1&&l!==(l=c[7].message+"")&&Ge(t,l)},i:Y,o:Y,d(c){c&&f(e)}}}function Fe(a){we(a);let e,s,l=a[1],t=[];for(let i=0;i<l.length;i+=1)t[i]=Me(Ie(a,l,i));const c=i=>X(t[i],1,1,()=>{t[i]=null});let r=null;return l.length||(r=De()),{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=x(),r&&r.c()},l(i){for(let d=0;d<t.length;d+=1)t[d].l(i);e=x(),r&&r.l(i)},m(i,d){for(let n=0;n<t.length;n+=1)t[n].m(i,d);j(i,e,d),r&&r.m(i,d),s=!0},p(i,d){if(we(i),d&1){l=i[1];let n;for(n=0;n<l.length;n+=1){const m=Ie(i,l,n);t[n]?(t[n].p(m,d),J(t[n],1)):(t[n]=Me(m),t[n].c(),J(t[n],1),t[n].m(e.parentNode,e))}for(Se(),n=l.length;n<t.length;n+=1)c(n);Pe(),l.length?r&&(r.d(1),r=null):r||(r=De(),r.c(),r.m(e.parentNode,e))}},i(i){if(!s){for(let d=0;d<l.length;d+=1)J(t[d]);s=!0}},o(i){t=t.filter(Boolean);for(let d=0;d<t.length;d+=1)X(t[d]);s=!1},d(i){fe(t,i),i&&f(e),r&&r.d(i)}}}function De(a){let e,s;return{c(){e=_("p"),s=R("No seasons have been completed yet, so no awards have been earned..."),this.h()},l(l){e=v(l,"P",{class:!0});var t=k(e);s=q(t,"No seasons have been completed yet, so no awards have been earned..."),t.forEach(f),this.h()},h(){o(e,"class","nothingYet svelte-ocifrf")},m(l,t){j(l,e,t),u(e,s)},d(l){l&&f(e)}}}function Me(a){let e,s;return e=new Oe({props:{podium:a[4],currentManagers:a[2]}}),{c(){ve(e.$$.fragment)},l(l){me(e.$$.fragment,l)},m(l,t){ge(e,l,t),s=!0},p(l,t){const c={};t&1&&(c.podium=l[4]),t&1&&(c.currentManagers=l[2]),e.$set(c)},i(l){s||(J(e.$$.fragment,l),s=!0)},o(l){X(e.$$.fragment,l),s=!1},d(l){pe(e,l)}}}function Ue(a){let e,s,l,t,c,r;return c=new je({props:{indeterminate:!0}}),{c(){e=_("div"),s=_("p"),l=R("Retrieving awards data..."),t=z(),ve(c.$$.fragment),this.h()},l(i){e=v(i,"DIV",{class:!0});var d=k(e);s=v(d,"P",{});var n=k(s);l=q(n,"Retrieving awards data..."),n.forEach(f),t=w(d),me(c.$$.fragment,d),d.forEach(f),this.h()},h(){o(e,"class","loading svelte-ocifrf")},m(i,d){j(i,e,d),u(e,s),u(s,l),u(e,t),ge(c,e,null),r=!0},p:Y,i(i){r||(J(c.$$.fragment,i),r=!0)},o(i){X(c.$$.fragment,i),r=!1},d(i){i&&f(e),pe(c)}}}function We(a){let e,s,l,t={ctx:a,current:null,token:null,hasCatch:!0,pending:Ue,then:Fe,catch:Ye,value:3,error:7,blocks:[,,,]};return _e(s=a[0],t),{c(){e=_("div"),t.block.c(),this.h()},l(c){e=v(c,"DIV",{class:!0});var r=k(e);t.block.l(r),r.forEach(f),this.h()},h(){o(e,"class","awards svelte-ocifrf")},m(c,r){j(c,e,r),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null,l=!0},p(c,[r]){a=c,t.ctx=a,r&1&&s!==(s=a[0])&&_e(s,t)||Ae(t,a,r)},i(c){l||(J(t.block),l=!0)},o(c){for(let r=0;r<3;r+=1){const i=t.blocks[r];X(i)}l=!1},d(c){c&&f(e),t.block.d(),t.token=null,t=null}}}async function at(){return{props:{awardsData:Ve()}}}function Ze(a,e,s){let{awardsData:l}=e;return a.$$set=t=>{"awardsData"in t&&s(0,l=t.awardsData)},[l]}class st extends ue{constructor(e){super();de(this,e,Ze,We,he,{awardsData:0})}}export{st as default,at as load};
