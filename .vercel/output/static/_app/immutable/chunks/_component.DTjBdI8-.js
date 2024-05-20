import{s as dt,e as g,t as L,c as d,b as O,v as N,f as u,h as V,i as c,j as H,w as he,I as be,z as me,n as Mt,k as ge,x as te,B as le,u as de,l as pe,m as $e,a as Y,d as F,g as Pt,o as rt,p as ct,C as At}from"./scheduler.DAkf0w5B.js";import{S as pt,i as $t,t as x,b as A,h as _e,k as we,e as ht,c as C,a as B,m as E,d as I,g as ve,f as ke}from"./index.VK0yDZc7.js";import{s as ue,f as fe}from"./global-flags.C481sXFY.js";import{L as ft}from"./link.D-WNrIZQ.js";import{r as ye}from"./bar.svelte_svelte_type_style_lang.DdhlBqvV.js";import"./entry.DfH_IOsH.js";import{E as Vt,i as nt}from"./images.CsPxqRgh.js";import{I as Nt}from"./icon.DsJxqulC.js";import{T as ae}from"./tooltip.htiGdkH9.js";function xe(r){let t,e,a,l,i;return{c(){t=g("button"),e=L(r[0]),this.h()},l(n){t=d(n,"BUTTON",{class:!0,type:!0});var s=O(t);e=N(s,r[0]),s.forEach(u),this.h()},h(){V(t,"class",a=`tracking-widest whitespace-nowrap hover:text-my-black-600 transition-all ease-linear duration-200 ${r[2]?"xs:text-lg sm:text-xl text-my-black-600":"text-my-black-100 text-sm xs:text-base sm:text-lg"}`),V(t,"type","button")},m(n,s){c(n,t,s),H(t,e),l||(i=he(t,"click",function(){be(r[1])&&r[1].apply(this,arguments)}),l=!0)},p(n,[s]){r=n,s&1&&me(e,r[0]),s&4&&a!==(a=`tracking-widest whitespace-nowrap hover:text-my-black-600 transition-all ease-linear duration-200 ${r[2]?"xs:text-lg sm:text-xl text-my-black-600":"text-my-black-100 text-sm xs:text-base sm:text-lg"}`)&&V(t,"class",a)},i:Mt,o:Mt,d(n){n&&u(t),l=!1,i()}}}function Ae(r,t,e){let{text:a}=t,{onClick:l}=t,{isActive:i}=t;return r.$$set=n=>{"text"in n&&e(0,a=n.text),"onClick"in n&&e(1,l=n.onClick),"isActive"in n&&e(2,i=n.isActive)},[a,l,i]}class Xt extends pt{constructor(t){super(),$t(this,t,Ae,xe,dt,{text:0,onClick:1,isActive:2})}}function Re(r){let t,e,a,l;const i=r[4].default,n=ge(i,r,r[3],null);return{c(){t=g("div"),n&&n.c(),this.h()},l(s){t=d(s,"DIV",{class:!0});var o=O(t);n&&n.l(o),o.forEach(u),this.h()},h(){V(t,"class",e=`h-[360px] pb-sm text-my-black tracking-wide leading-relaxed gap-md ${r[1]===1||r[2]<=768?"columns-1 max-w-[650px]":"columns-1 sm:columns-2"} ${r[0]}`),te(()=>r[5].call(t))},m(s,o){c(s,t,o),n&&n.m(t,null),a=le(t,r[5].bind(t)),l=!0},p(s,[o]){n&&n.p&&(!l||o&8)&&de(n,i,s,s[3],l?$e(i,s[3],o,null):pe(s[3]),null),(!l||o&7&&e!==(e=`h-[360px] pb-sm text-my-black tracking-wide leading-relaxed gap-md ${s[1]===1||s[2]<=768?"columns-1 max-w-[650px]":"columns-1 sm:columns-2"} ${s[0]}`))&&V(t,"class",e)},i(s){l||(x(n,s),l=!0)},o(s){A(n,s),l=!1},d(s){s&&u(t),n&&n.d(s),a()}}}function Ce(r,t,e){let{$$slots:a={},$$scope:l}=t,{extraClasses:i=""}=t,{numColumns:n}=t,s;function o(){s=this.clientWidth,e(2,s)}return r.$$set=h=>{"extraClasses"in h&&e(0,i=h.extraClasses),"numColumns"in h&&e(1,n=h.numColumns),"$$scope"in h&&e(3,l=h.$$scope)},[i,n,s,l,a,o]}class ee extends pt{constructor(t){super(),$t(this,t,Ce,Re,dt,{extraClasses:0,numColumns:1})}}function Be(r){let t,e,a,l,i,n,s,o,h="<p>scroll right for more...</p>",$,v,R,G;const S=r[7].default,w=ge(S,r,r[6],null);return{c(){t=g("div"),w&&w.c(),n=Y(),s=g("div"),o=g("div"),o.innerHTML=h,this.h()},l(_){t=d(_,"DIV",{class:!0});var p=O(t);w&&w.l(p),p.forEach(u),n=F(_),s=d(_,"DIV",{class:!0});var T=O(s);o=d(T,"DIV",{class:!0,"data-svelte-h":!0}),Pt(o)!=="svelte-9fhn24"&&(o.innerHTML=h),T.forEach(u),this.h()},h(){V(t,"class",e=`max-w-full max-h-[360px] pb-[30px] overflow-x-auto overflow-y-hidden scrollbar-track-bricks-bg-gray scrollbar-thumb-my-black-50/50 hover:scrollbar-thumb-my-black-50/50 md:scrollbar-thin md:scrollbar-track-my-black-50/50 md:scrollbar-thumb-my-black-100 md:hover:scrollbar-thumb-my-black-200 ${r[1],""}`),te(()=>r[10].call(t)),V(o,"class","flex items-center gap-xs text-my-black-400 text-xs italic tracking-wide"),V(s,"class",$=`mt-xs flex justify-end transition-opacity ease-in-out duration-300 ${r[4]?"":"opacity-0"}`)},m(_,p){c(_,t,p),w&&w.m(t,null),r[8](t),a=le(t,r[10].bind(t)),c(_,n,p),c(_,s,p),H(s,o),v=!0,R||(G=he(t,"scroll",r[9]),R=!0)},p(_,[p]){w&&w.p&&(!v||p&64)&&de(w,S,_,_[6],v?$e(S,_[6],p,null):pe(_[6]),null),(!v||p&2&&e!==(e=`max-w-full max-h-[360px] pb-[30px] overflow-x-auto overflow-y-hidden scrollbar-track-bricks-bg-gray scrollbar-thumb-my-black-50/50 hover:scrollbar-thumb-my-black-50/50 md:scrollbar-thin md:scrollbar-track-my-black-50/50 md:scrollbar-thumb-my-black-100 md:hover:scrollbar-thumb-my-black-200 ${_[1],""}`))&&V(t,"class",e),(!v||p&16&&$!==($=`mt-xs flex justify-end transition-opacity ease-in-out duration-300 ${_[4]?"":"opacity-0"}`))&&V(s,"class",$)},i(_){v||(x(w,_),_&&te(()=>{v&&(i&&i.end(1),l=_e(t,fe,{easing:ue,duration:400,delay:100}),l.start())}),v=!0)},o(_){A(w,_),l&&l.invalidate(),_&&(i=we(t,fe,{easing:ue,duration:100})),v=!1},d(_){_&&(u(t),u(n),u(s)),w&&w.d(_),r[8](null),a(),_&&i&&i.end(),R=!1,G()}}}function Ee(r,t,e){let{$$slots:a={},$$scope:l}=t,{height:i}=t,{isActive:n}=t,s=!1,o,h=!1,$=!1;function v(S){rt[S?"unshift":"push"](()=>{o=S,e(2,o)})}const R=S=>{S.currentTarget.scrollLeft>20&&(e(3,h=!0),e(4,$=!1))};function G(){i=this.clientHeight,e(0,i)}return r.$$set=S=>{"height"in S&&e(0,i=S.height),"isActive"in S&&e(5,n=S.isActive),"$$scope"in S&&e(6,l=S.$$scope)},r.$$.update=()=>{if(r.$$.dirty&4&&o){const S=o.scrollWidth,w=o.offsetWidth;e(1,s=S>w),S>w&&(e(2,o.style.scrollBehavior="smooth",o),o.addEventListener("wheel",_=>{_.preventDefault(),o.scrollTo({left:o.scrollLeft+_.deltaY,behavior:"smooth"})}))}r.$$.dirty&58&&n&&s&&!h&&!$&&setTimeout(()=>{e(4,$=!0)},100)},[i,s,o,h,$,n,l,a,v,R,G]}class ne extends pt{constructor(t){super(),$t(this,t,Ee,Be,dt,{height:0,isActive:5})}}function Ie(r){let t;return{c(){t=L("Galaxy Studios")},l(e){t=N(e,"Galaxy Studios")},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function Se(r){let t;return{c(){t=L("Wes Maebe")},l(e){t=N(e,"Wes Maebe")},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function We(r){let t,e,a,l,i,n,s,o,h,$,v,R,G,S,w,_,p,T,K,j,P,Z,z,q,J,Q;return e=new Vt({props:{imageClass:"rounded-sm",meta:nt.galaxy["full-band"].src,sizes:"250px",alt:""}}),l=new ft({props:{href:"https://galaxystudios.com/",$$slots:{default:[Ie]},$$scope:{ctx:r}}}),w=new ft({props:{href:"https://www.wesonator.com/",$$slots:{default:[Se]},$$scope:{ctx:r}}}),{c(){t=g("div"),C(e.$$.fragment),a=L(`
			Raie successfully raised £4000 to help pay for the trip to Belgium’s
			`),C(l.$$.fragment),i=L(`.
			`),n=g("br"),s=g("br"),o=L(`
			This was an opportunity of a lifetime – to record an album in six days at a world leading studio
			– that houses the quietest room in the world by the way!
			`),h=g("br"),$=g("br"),v=L(`
			Without all our ‘friends of Raie’ and their generous contributions to the Crowdfunder, it’s doubtful
			we’d have been able to make the trip … but with the money raised, a really generous deal from Galaxy
			and a truly loyal, dedicated and focused band of troubadours … we managed to pay our rehearsal
			space, our Galaxy bill and feed and Eurotunnel (with gas) and fly the band … and sort accommodation
			for the string section too! So a huge thankyou to the Crowdfunders! Of course … you are all on
			the guest list for the album launch …
			`),R=g("br"),G=g("br"),S=L(`
			This news bulletin can’t go out without a big shout out to
			`),C(w.$$.fragment),_=L(`.
			`),p=g("br"),T=g("br"),K=L(`
			Wes is employed regularly by Galaxy and he convinced the studio that Raie were worth ‘a deal’ –
			he really believes in the project and is now a co-writer with Raie … plus his exquisite guitar
			playing features on the album; Raie and Wes have secured a fruitful, long lasting ‘music brother/sister’
			bond over a decade!
			`),j=g("br"),P=g("br"),Z=L(`
			Galaxy couldn’t have been more welcoming – the studio hosted us with free coffees (that the band
			really needed on 10-12 hour sessions under pressure!) … and every morning we had a visit from CEO
			Wilfried-Van-Baelen – the friendliest guy who seems to have never forgotten his early ‘chicken
			coop’ days of the studio’s history – he tells it with real humility - very entertaining!
			`),z=g("br"),q=g("br"),J=L(`
			The lunch area and grounds were sublime (the band were SO happy!) and the studio sound (including
			Steinway piano and a real Hammond set up) was … well … check it out for yourself – the album goes
			on sale November 9th – see the links page…`),this.h()},l(b){t=d(b,"DIV",{class:!0});var W=O(t);B(e.$$.fragment,W),W.forEach(u),a=N(b,`
			Raie successfully raised £4000 to help pay for the trip to Belgium’s
			`),B(l.$$.fragment,b),i=N(b,`.
			`),n=d(b,"BR",{}),s=d(b,"BR",{}),o=N(b,`
			This was an opportunity of a lifetime – to record an album in six days at a world leading studio
			– that houses the quietest room in the world by the way!
			`),h=d(b,"BR",{}),$=d(b,"BR",{}),v=N(b,`
			Without all our ‘friends of Raie’ and their generous contributions to the Crowdfunder, it’s doubtful
			we’d have been able to make the trip … but with the money raised, a really generous deal from Galaxy
			and a truly loyal, dedicated and focused band of troubadours … we managed to pay our rehearsal
			space, our Galaxy bill and feed and Eurotunnel (with gas) and fly the band … and sort accommodation
			for the string section too! So a huge thankyou to the Crowdfunders! Of course … you are all on
			the guest list for the album launch …
			`),R=d(b,"BR",{}),G=d(b,"BR",{}),S=N(b,`
			This news bulletin can’t go out without a big shout out to
			`),B(w.$$.fragment,b),_=N(b,`.
			`),p=d(b,"BR",{}),T=d(b,"BR",{}),K=N(b,`
			Wes is employed regularly by Galaxy and he convinced the studio that Raie were worth ‘a deal’ –
			he really believes in the project and is now a co-writer with Raie … plus his exquisite guitar
			playing features on the album; Raie and Wes have secured a fruitful, long lasting ‘music brother/sister’
			bond over a decade!
			`),j=d(b,"BR",{}),P=d(b,"BR",{}),Z=N(b,`
			Galaxy couldn’t have been more welcoming – the studio hosted us with free coffees (that the band
			really needed on 10-12 hour sessions under pressure!) … and every morning we had a visit from CEO
			Wilfried-Van-Baelen – the friendliest guy who seems to have never forgotten his early ‘chicken
			coop’ days of the studio’s history – he tells it with real humility - very entertaining!
			`),z=d(b,"BR",{}),q=d(b,"BR",{}),J=N(b,`
			The lunch area and grounds were sublime (the band were SO happy!) and the studio sound (including
			Steinway piano and a real Hammond set up) was … well … check it out for yourself – the album goes
			on sale November 9th – see the links page…`),this.h()},h(){V(t,"class","w-[200px] lg:w-[250px] mb-sm md:hidden")},m(b,W){c(b,t,W),E(e,t,null),c(b,a,W),E(l,b,W),c(b,i,W),c(b,n,W),c(b,s,W),c(b,o,W),c(b,h,W),c(b,$,W),c(b,v,W),c(b,R,W),c(b,G,W),c(b,S,W),E(w,b,W),c(b,_,W),c(b,p,W),c(b,T,W),c(b,K,W),c(b,j,W),c(b,P,W),c(b,Z,W),c(b,z,W),c(b,q,W),c(b,J,W),Q=!0},p(b,W){const at={};W&16&&(at.$$scope={dirty:W,ctx:b}),l.$set(at);const y={};W&16&&(y.$$scope={dirty:W,ctx:b}),w.$set(y)},i(b){Q||(x(e.$$.fragment,b),x(l.$$.fragment,b),x(w.$$.fragment,b),Q=!0)},o(b){A(e.$$.fragment,b),A(l.$$.fragment,b),A(w.$$.fragment,b),Q=!1},d(b){b&&(u(t),u(a),u(i),u(n),u(s),u(o),u(h),u($),u(v),u(R),u(G),u(S),u(_),u(p),u(T),u(K),u(j),u(P),u(Z),u(z),u(q),u(J)),I(e),I(l,b),I(w,b)}}}function Te(r){let t,e,a,l,i,n;return a=new Vt({props:{imageClass:"rounded-sm",meta:nt.galaxy["full-band"].src,sizes:"250px",alt:""}}),i=new ee({props:{numColumns:1,extraClasses:"mt-sm sm:mt-0",$$slots:{default:[We]},$$scope:{ctx:r}}}),{c(){t=g("div"),e=g("div"),C(a.$$.fragment),l=Y(),C(i.$$.fragment),this.h()},l(s){t=d(s,"DIV",{class:!0});var o=O(t);e=d(o,"DIV",{class:!0});var h=O(e);B(a.$$.fragment,h),h.forEach(u),l=F(o),B(i.$$.fragment,o),o.forEach(u),this.h()},h(){V(e,"class","w-[200px] lg:w-[250px] shrink-0 hidden md:block"),V(t,"class","flex flex-row gap-sm sm:gap-lg lg:gap-xl")},m(s,o){c(s,t,o),H(t,e),E(a,e,null),H(t,l),E(i,t,null),n=!0},p(s,o){const h={};o&16&&(h.$$scope={dirty:o,ctx:s}),i.$set(h)},i(s){n||(x(a.$$.fragment,s),x(i.$$.fragment,s),n=!0)},o(s){A(a.$$.fragment,s),A(i.$$.fragment,s),n=!1},d(s){s&&u(t),I(a),I(i)}}}function De(r){let t,e,a,l;function i(o){r[2](o)}function n(o){r[3](o)}let s={$$slots:{default:[Te]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.height=r[0]),r[1]!==void 0&&(s.isActive=r[1]),t=new ne({props:s}),rt.push(()=>ht(t,"height",i)),rt.push(()=>ht(t,"isActive",n)),{c(){C(t.$$.fragment)},l(o){B(t.$$.fragment,o)},m(o,h){E(t,o,h),l=!0},p(o,[h]){const $={};h&16&&($.$$scope={dirty:h,ctx:o}),!e&&h&1&&(e=!0,$.height=o[0],ct(()=>e=!1)),!a&&h&2&&(a=!0,$.isActive=o[1],ct(()=>a=!1)),t.$set($)},i(o){l||(x(t.$$.fragment,o),l=!0)},o(o){A(t.$$.fragment,o),l=!1},d(o){I(t,o)}}}function Le(r,t,e){let{height:a}=t,{isActive:l}=t;function i(s){a=s,e(0,a)}function n(s){l=s,e(1,l)}return r.$$set=s=>{"height"in s&&e(0,a=s.height),"isActive"in s&&e(1,l=s.isActive)},[a,l,i,n]}class Ne extends pt{constructor(t){super(),$t(this,t,Le,De,dt,{height:0,isActive:1})}}function Ve(r){let t;return{c(){t=L("Jack Stanton")},l(e){t=N(e,"Jack Stanton")},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function Ge(r){let t;return{c(){t=L("YouTube channel")},l(e){t=N(e,"YouTube channel")},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function He(r){let t;return{c(){t=L("look and listen")},l(e){t=N(e,"look and listen")},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function Oe(r){let t;return{c(){t=L("look and listen")},l(e){t=N(e,"look and listen")},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function Me(r){let t;return{c(){t=L("look for yourself")},l(e){t=N(e,"look for yourself")},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function Pe(r){let t,e,a,l,i,n,s,o,h,$="Jon Klein on free now",v,R,G,S,w,_="The whole house singing",p,T,K,j,P,Z,z,q,J,Q,b,W,at,y,M,U,tt,it,st,X,bt,_t,wt,vt,et,ot,xt;return s=new Vt({props:{imageClass:"rounded-sm",meta:nt.albums.red_brick_angels.jon_k_solo_2.src,sizes:"250px",alt:""}}),G=new Vt({props:{imageClass:"rounded-sm",meta:nt.albums.red_brick_angels.the_house_sing_2.src,sizes:"250px",alt:""}}),P=new ft({props:{href:"https://nice-productions.com/",$$slots:{default:[Ve]},$$scope:{ctx:r}}}),Q=new ft({props:{href:ye.listen.youtube.href,$$slots:{default:[Ge]},$$scope:{ctx:r}}}),M=new ft({props:{href:"https://www.facebook.com/rachel.bennett.56863/videos/1432514950845507",$$slots:{default:[He]},$$scope:{ctx:r}}}),X=new ft({props:{href:"https://www.facebook.com/rachel.bennett.56863/videos/775042324096807",$$slots:{default:[Oe]},$$scope:{ctx:r}}}),et=new ft({props:{href:"https://www.facebook.com/rachel.bennett.56863/videos/1375720152984451",$$slots:{default:[Me]},$$scope:{ctx:r}}}),{c(){t=L(`Raie performed to a full house and a standing ovation at The Camden Club when we launched the
			album Red Brick Angel ... highlights included Jon Klein's solo for Free Now and the whole room
			singing the chorus of This Thing Called Love!
			`),e=g("br"),a=g("br"),l=L(`

			We sang the album single release Young Love for our encore The venue manager Andrew Hart is a
			total angel himself - we were looked after 'with stars on' and will definitely go back to play
			there again.
			`),i=g("div"),n=g("div"),C(s.$$.fragment),o=Y(),h=g("p"),h.textContent=$,v=Y(),R=g("div"),C(G.$$.fragment),S=Y(),w=g("p"),w.textContent=_,p=L(`
			Sound man Giovanni Dominici did a great job on monitoring and our very own album producer and co-writer
			Wes Maebe ran FOH sound; Wes used an ipad system for this ... it was a new experience but his genius
			shone through - it might be the best sound I ever played to ...
			`),T=g("br"),K=g("br"),j=Y(),C(P.$$.fragment),Z=L(` photographed the night with Gregory
			Nice on still camera so watch this space for the full length footage of the live album...
			`),z=g("br"),q=g("br"),J=L(`
			Raie sold out Hope and Anchor – home of The Stranglers and Sinead O’Connor and we were delighted
			to have Sinead’s guitarist Jon Klein play lead for us on the night; check out a couple of clips
			on Raie’s `),C(Q.$$.fragment),b=L(`.
			`),W=g("br"),at=g("br"),y=L(`
			Raie went on to play for Piri Markus’ photographic exhibition at ArtFix Greenwich … a gentle but
			very appreciative crowd supported us; we were a downsized band for this cosy venue … take a
			`),C(M.$$.fragment),U=L(`.
			`),tt=g("br"),it=g("br"),st=L(`
			We packed out Music Room London to a terrific crowd and featured new songs from our upcoming album
			in our second set … the staff team at Music Room are exceptionally welcoming … even when you just
			want to book a rehearsal space – they set a standard for studios around London – clean, beautiful
			décor and a decent bar … sneak a peak at our first live performance of the title track for Red
			Brick Angel the upcoming album! Take a
			`),C(X.$$.fragment),bt=L(`.
			`),_t=g("br"),wt=g("br"),vt=L(`
			Following this we were really honoured to headline at Anthony Anaxagorou’s OUTSPOKEN at the Purcell
			Room on London’s Southbank – great sound and a fantastic technical team;
			`),C(et.$$.fragment),ot=L("."),this.h()},l(m){t=N(m,`Raie performed to a full house and a standing ovation at The Camden Club when we launched the
			album Red Brick Angel ... highlights included Jon Klein's solo for Free Now and the whole room
			singing the chorus of This Thing Called Love!
			`),e=d(m,"BR",{}),a=d(m,"BR",{}),l=N(m,`

			We sang the album single release Young Love for our encore The venue manager Andrew Hart is a
			total angel himself - we were looked after 'with stars on' and will definitely go back to play
			there again.
			`),i=d(m,"DIV",{class:!0});var D=O(i);n=d(D,"DIV",{class:!0});var lt=O(n);B(s.$$.fragment,lt),o=F(lt),h=d(lt,"P",{class:!0,"data-svelte-h":!0}),Pt(h)!=="svelte-1bmskai"&&(h.textContent=$),lt.forEach(u),v=F(D),R=d(D,"DIV",{class:!0});var ut=O(R);B(G.$$.fragment,ut),S=F(ut),w=d(ut,"P",{class:!0,"data-svelte-h":!0}),Pt(w)!=="svelte-tbokg"&&(w.textContent=_),ut.forEach(u),D.forEach(u),p=N(m,`
			Sound man Giovanni Dominici did a great job on monitoring and our very own album producer and co-writer
			Wes Maebe ran FOH sound; Wes used an ipad system for this ... it was a new experience but his genius
			shone through - it might be the best sound I ever played to ...
			`),T=d(m,"BR",{}),K=d(m,"BR",{}),j=F(m),B(P.$$.fragment,m),Z=N(m,` photographed the night with Gregory
			Nice on still camera so watch this space for the full length footage of the live album...
			`),z=d(m,"BR",{}),q=d(m,"BR",{}),J=N(m,`
			Raie sold out Hope and Anchor – home of The Stranglers and Sinead O’Connor and we were delighted
			to have Sinead’s guitarist Jon Klein play lead for us on the night; check out a couple of clips
			on Raie’s `),B(Q.$$.fragment,m),b=N(m,`.
			`),W=d(m,"BR",{}),at=d(m,"BR",{}),y=N(m,`
			Raie went on to play for Piri Markus’ photographic exhibition at ArtFix Greenwich … a gentle but
			very appreciative crowd supported us; we were a downsized band for this cosy venue … take a
			`),B(M.$$.fragment,m),U=N(m,`.
			`),tt=d(m,"BR",{}),it=d(m,"BR",{}),st=N(m,`
			We packed out Music Room London to a terrific crowd and featured new songs from our upcoming album
			in our second set … the staff team at Music Room are exceptionally welcoming … even when you just
			want to book a rehearsal space – they set a standard for studios around London – clean, beautiful
			décor and a decent bar … sneak a peak at our first live performance of the title track for Red
			Brick Angel the upcoming album! Take a
			`),B(X.$$.fragment,m),bt=N(m,`.
			`),_t=d(m,"BR",{}),wt=d(m,"BR",{}),vt=N(m,`
			Following this we were really honoured to headline at Anthony Anaxagorou’s OUTSPOKEN at the Purcell
			Room on London’s Southbank – great sound and a fantastic technical team;
			`),B(et.$$.fragment,m),ot=N(m,"."),this.h()},h(){V(h,"class","pl-xxs border-l-2 text-gray-600 text-xs mt-xs"),V(n,"class","w-[110px] xs:w-[150px] shrink-0"),V(w,"class","pl-xxs border-l-2 text-gray-600 text-xs mt-xs"),V(R,"class","w-[150px] xs:w-[190px] shrink-0"),V(i,"class","flex gap-sm my-xs")},m(m,D){c(m,t,D),c(m,e,D),c(m,a,D),c(m,l,D),c(m,i,D),H(i,n),E(s,n,null),H(n,o),H(n,h),H(i,v),H(i,R),E(G,R,null),H(R,S),H(R,w),c(m,p,D),c(m,T,D),c(m,K,D),c(m,j,D),E(P,m,D),c(m,Z,D),c(m,z,D),c(m,q,D),c(m,J,D),E(Q,m,D),c(m,b,D),c(m,W,D),c(m,at,D),c(m,y,D),E(M,m,D),c(m,U,D),c(m,tt,D),c(m,it,D),c(m,st,D),E(X,m,D),c(m,bt,D),c(m,_t,D),c(m,wt,D),c(m,vt,D),E(et,m,D),c(m,ot,D),xt=!0},p(m,D){const lt={};D&16&&(lt.$$scope={dirty:D,ctx:m}),P.$set(lt);const ut={};D&16&&(ut.$$scope={dirty:D,ctx:m}),Q.$set(ut);const mt={};D&16&&(mt.$$scope={dirty:D,ctx:m}),M.$set(mt);const Rt={};D&16&&(Rt.$$scope={dirty:D,ctx:m}),X.$set(Rt);const Ct={};D&16&&(Ct.$$scope={dirty:D,ctx:m}),et.$set(Ct)},i(m){xt||(x(s.$$.fragment,m),x(G.$$.fragment,m),x(P.$$.fragment,m),x(Q.$$.fragment,m),x(M.$$.fragment,m),x(X.$$.fragment,m),x(et.$$.fragment,m),xt=!0)},o(m){A(s.$$.fragment,m),A(G.$$.fragment,m),A(P.$$.fragment,m),A(Q.$$.fragment,m),A(M.$$.fragment,m),A(X.$$.fragment,m),A(et.$$.fragment,m),xt=!1},d(m){m&&(u(t),u(e),u(a),u(l),u(i),u(p),u(T),u(K),u(j),u(Z),u(z),u(q),u(J),u(b),u(W),u(at),u(y),u(U),u(tt),u(it),u(st),u(bt),u(_t),u(wt),u(vt),u(ot)),I(s),I(G),I(P,m),I(Q,m),I(M,m),I(X,m),I(et,m)}}}function ze(r){let t,e,a;return e=new ee({props:{numColumns:2,$$slots:{default:[Pe]},$$scope:{ctx:r}}}),{c(){t=g("div"),C(e.$$.fragment)},l(l){t=d(l,"DIV",{});var i=O(t);B(e.$$.fragment,i),i.forEach(u)},m(l,i){c(l,t,i),E(e,t,null),a=!0},p(l,i){const n={};i&16&&(n.$$scope={dirty:i,ctx:l}),e.$set(n)},i(l){a||(x(e.$$.fragment,l),a=!0)},o(l){A(e.$$.fragment,l),a=!1},d(l){l&&u(t),I(e)}}}function Ye(r){let t,e,a,l;function i(o){r[2](o)}function n(o){r[3](o)}let s={$$slots:{default:[ze]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.height=r[0]),r[1]!==void 0&&(s.isActive=r[1]),t=new ne({props:s}),rt.push(()=>ht(t,"height",i)),rt.push(()=>ht(t,"isActive",n)),{c(){C(t.$$.fragment)},l(o){B(t.$$.fragment,o)},m(o,h){E(t,o,h),l=!0},p(o,[h]){const $={};h&16&&($.$$scope={dirty:h,ctx:o}),!e&&h&1&&(e=!0,$.height=o[0],ct(()=>e=!1)),!a&&h&2&&(a=!0,$.isActive=o[1],ct(()=>a=!1)),t.$set($)},i(o){l||(x(t.$$.fragment,o),l=!0)},o(o){A(t.$$.fragment,o),l=!1},d(o){I(t,o)}}}function Fe(r,t,e){let{height:a}=t,{isActive:l}=t;function i(s){a=s,e(0,a)}function n(s){l=s,e(1,l)}return r.$$set=s=>{"height"in s&&e(0,a=s.height),"isActive"in s&&e(1,l=s.isActive)},[a,l,i,n]}class Ke extends pt{constructor(t){super(),$t(this,t,Fe,Ye,dt,{height:0,isActive:1})}}function ce(r){let t,e=r[0].caption+"",a;return{c(){t=g("p"),a=L(e),this.h()},l(l){t=d(l,"P",{class:!0});var i=O(t);a=N(i,e),i.forEach(u),this.h()},h(){V(t,"class","pl-xxs border-l-2 text-gray-600 text-xs mt-xs shrink-0 bg-white"),At(t,"width",r[1]?`${r[5]}px`:"96%")},m(l,i){c(l,t,i),H(t,a),r[8](t)},p(l,i){i&1&&e!==(e=l[0].caption+"")&&me(a,e),i&34&&At(t,"width",l[1]?`${l[5]}px`:"96%")},d(l){l&&u(t),r[8](null)}}}function je(r){let t,e,a,l,i,n=`${r[6]}px`,s=`${r[5]}px`,o,h,$;i=new Vt({props:{imageClass:"absolute w-full h-full",meta:r[0].src,sizes:"250px",alt:r[0].caption}});let v=r[0].caption&&ce(r);return{c(){t=g("div"),e=g("div"),a=g("div"),l=g("div"),C(i.$$.fragment),o=Y(),v&&v.c(),this.h()},l(R){t=d(R,"DIV",{class:!0});var G=O(t);e=d(G,"DIV",{class:!0});var S=O(e);a=d(S,"DIV",{class:!0});var w=O(a);l=d(w,"DIV",{class:!0});var _=O(l);B(i.$$.fragment,_),_.forEach(u),o=F(w),v&&v.l(w),w.forEach(u),S.forEach(u),G.forEach(u),this.h()},h(){V(l,"class","relative"),At(l,"height",n),At(l,"width",s),V(a,"class","h-full flex flex-col items-center pb-xxs"),V(e,"class","bg-my-black-100/20 border-2 border-my-black-200/10 rounded-sm"),V(t,"class","w-full h-[95%]"),te(()=>r[10].call(t))},m(R,G){c(R,t,G),H(t,e),H(e,a),H(a,l),E(i,l,null),H(a,o),v&&v.m(a,null),r[9](t),h=le(t,r[10].bind(t)),$=!0},p(R,[G]){const S={};G&1&&(S.meta=R[0].src),G&1&&(S.alt=R[0].caption),i.$set(S),G&64&&n!==(n=`${R[6]}px`)&&At(l,"height",n),G&32&&s!==(s=`${R[5]}px`)&&At(l,"width",s),R[0].caption?v?v.p(R,G):(v=ce(R),v.c(),v.m(a,null)):v&&(v.d(1),v=null)},i(R){$||(x(i.$$.fragment,R),$=!0)},o(R){A(i.$$.fragment,R),$=!1},d(R){R&&u(t),I(i),v&&v.d(),r[9](null),h()}}}const qe=8;function Je(r,t,e){let{img:a}=t,{containCaptionInImageWidth:l=void 0}=t,i,n,s,o,h,$;const v=()=>{if(s){const w=s.getBoundingClientRect(),_=w.width,p=w.height,T=o?o.getBoundingClientRect().height:0,K=p-(T===null?0:T+qe),j=_>=K,P=a.naturalDimensions.width/a.naturalDimensions.height,Z=P>=1;if(j)if(Z){const z=K*P;z>_?e(5,h=_):e(5,h=z),e(6,$=h/P)}else{const z=_/P;z>p?e(6,$=p):e(6,$=z),e(5,h=$*P)}else if(Z){const z=_/P;z>p?e(6,$=p):e(6,$=z),e(5,h=$*P)}else{const z=K*P;z>_?e(5,h=_):e(5,h=z),e(6,$=h/P)}}};function R(w){rt[w?"unshift":"push"](()=>{o=w,e(4,o)})}function G(w){rt[w?"unshift":"push"](()=>{s=w,e(3,s)})}function S(){i=this.clientWidth,e(2,i)}return r.$$set=w=>{"img"in w&&e(0,a=w.img),"containCaptionInImageWidth"in w&&e(1,l=w.containCaptionInImageWidth)},r.$$.update=()=>{r.$$.dirty&12&&s&&i&&e(7,n=s.getBoundingClientRect().height),r.$$.dirty&156&&v()},[a,l,i,s,o,h,$,n,R,G,S]}class gt extends pt{constructor(t){super(),$t(this,t,Je,je,dt,{img:0,containCaptionInImageWidth:1})}}function Ue(r){let t,e,a,l;return e=new Nt.Spotify({props:{weight:"light"}}),{c(){t=g("span"),C(e.$$.fragment),a=L(`

				YOUNG LOVE released in November ‘23`),this.h()},l(i){t=d(i,"SPAN",{class:!0});var n=O(t);B(e.$$.fragment,n),n.forEach(u),a=N(i,`

				YOUNG LOVE released in November ‘23`),this.h()},h(){V(t,"class","mr-xxs text-my-black-500")},m(i,n){c(i,t,n),E(e,t,null),c(i,a,n),l=!0},p:Mt,i(i){l||(x(e.$$.fragment,i),l=!0)},o(i){A(e.$$.fragment,i),l=!1},d(i){i&&(u(t),u(a)),I(e)}}}function Qe(r){let t,e,a,l;return e=new Nt.Spotify({props:{weight:"light"}}),{c(){t=g("span"),C(e.$$.fragment),a=L(`
				CRYSTAL GIRL released in April ‘24`),this.h()},l(i){t=d(i,"SPAN",{class:!0});var n=O(t);B(e.$$.fragment,n),n.forEach(u),a=N(i,`
				CRYSTAL GIRL released in April ‘24`),this.h()},h(){V(t,"class","mr-xxs text-my-black-500")},m(i,n){c(i,t,n),E(e,t,null),c(i,a,n),l=!0},p:Mt,i(i){l||(x(e.$$.fragment,i),l=!0)},o(i){A(e.$$.fragment,i),l=!1},d(i){i&&(u(t),u(a)),I(e)}}}function Ze(r){let t,e,a,l;return a=new Nt.Event({props:{weight:"light"}}),{c(){t=L(`Get your tickects here
				`),e=g("span"),C(a.$$.fragment),this.h()},l(i){t=N(i,`Get your tickects here
				`),e=d(i,"SPAN",{class:!0});var n=O(e);B(a.$$.fragment,n),n.forEach(u),this.h()},h(){V(e,"class","ml-xxs text-my-black-500")},m(i,n){c(i,t,n),c(i,e,n),E(a,e,null),l=!0},p:Mt,i(i){l||(x(a.$$.fragment,i),l=!0)},o(i){A(a.$$.fragment,i),l=!1},d(i){i&&(u(t),u(e)),I(a)}}}function Xe(r){let t,e,a,l,i,n,s,o,h,$,v,R,G,S,w,_,p,T,K,j,P,Z,z,q,J,Q,b,W,at,y,M,U,tt,it,st,X,bt,_t,wt,vt,et,ot,xt,m,D,lt,ut,mt,Rt,Ct,zt,Yt,Ft,Kt,jt,Bt,Et,qt,kt,It,ie,St,Jt,yt,Gt,Wt,se,Ht,Tt,Ut;return o=new gt({props:{img:nt.red_brick_angels_may_2024.backing_singers}}),$=new gt({props:{img:nt.red_brick_angels_may_2024.louis_bell}}),T=new ae({props:{text:"Listen to Young Love on Spotify",triggeredById:"latest_news-red_brick-young_love-listen"}}),j=new ft({props:{href:"https://open.spotify.com/track/4f6sNMRPmhYUTKSNrBdQGM?si=e052425e835e4665",id:"latest_news-red_brick-young_love-listen",$$slots:{default:[Ue]},$$scope:{ctx:r}}}),Q=new ae({props:{text:"Listen to Crystal Girl on Spotify",triggeredById:"latest_news-red_brick-crystal_girl-listen"}}),W=new ft({props:{href:"https://open.spotify.com/track/6FzNBR1pCBWpEhRUy7N2sX?si=638d7ceb9b38425d",id:"latest_news-red_brick-crystal_girl-listen",$$slots:{default:[Qe]},$$scope:{ctx:r}}}),M=new gt({props:{img:nt.red_brick_angels_may_2024.altea_narici}}),tt=new gt({props:{img:nt.red_brick_angels_may_2024.chris_bell}}),ot=new gt({props:{img:nt.red_brick_angels_may_2024.maria_tiimus}}),m=new gt({props:{img:nt.red_brick_angels_may_2024.tim_gardner}}),lt=new ae({props:{text:"Tickets from EventBrite",triggeredById:"latest_news-red_brick-tickets-karamel_restaurant"}}),mt=new ft({props:{href:"https://www.eventbrite.com/e/raie-bringing-sweet-music-to-the-karamel-club-tickets-883179913897?aff=ebdssbdestsearch&keep_tld=1",id:"latest_news-red_brick-tickets-karamel_restaurant",$$slots:{default:[Ze]},$$scope:{ctx:r}}}),Et=new gt({props:{img:nt.red_brick_angels_may_2024.standing_ovation,containCaptionInImageWidth:!0}}),It=new gt({props:{img:nt.red_brick_angels_may_2024.christiano_tortoioli}}),St=new gt({props:{img:nt.red_brick_angels_may_2024.jon_dunn}}),Wt=new gt({props:{img:nt.red_brick_angels_may_2024.jon_klein}}),Tt=new gt({props:{img:nt.red_brick_angels_may_2024.final_song}}),{c(){t=L(`Since our wonderful spring ’23 news update we quietly prepped for our Red Brick Angel
			launch...`),e=g("br"),a=L(`
			...and it happened!

			`),l=g("br"),i=g("br"),n=L(`

			We had a beautiful night at The Camden Club – special thanks to Andrew Hart proprietor – We
			played to a full house and a standing ovation... was a night to remember Check out the footage
			– you’ll need an evening and a glass of wine!

			`),s=g("div"),C(o.$$.fragment),h=Y(),C($.$$.fragment),v=L(`

			[link to launch footage coming soon...]

			`),R=g("br"),G=g("br"),S=L(`

			We will be releasing the album officially in June ’24 but have already released two singles
			from the album... Young Love and Crystal Girl... have a listen...

			`),w=g("br"),_=g("br"),p=Y(),C(T.$$.fragment),K=Y(),C(j.$$.fragment),P=Y(),Z=g("br"),z=L(`

			and...

			`),q=g("br"),J=Y(),C(Q.$$.fragment),b=Y(),C(W.$$.fragment),at=Y(),y=g("div"),C(M.$$.fragment),U=Y(),C(tt.$$.fragment),it=L(`

			Since the launch we have played at Bread & Roses pub in Feb ’24... where we played to a rowdy
			but appreciative audience and they hit the heights when we sang our encore... a sneak peek at
			one of the songs from a planned Raie EP (more news later)... check this out!

			`),st=g("br"),X=g("br"),bt=L(`

			[link to gig footage coming soon...]

			`),_t=g("br"),wt=g("br"),vt=L(`

			but had to take time out to bring in new players as our wonderful Louis Bell on lead guitar,
			Tim Gardner on violin and keys and Chris Bell on kit have been contracted on tours and
			labels... we hope to see them return before too long but...

			`),et=g("div"),C(ot.$$.fragment),xt=Y(),C(m.$$.fragment),D=L(`

			...meanwhile we are welcoming the Felgate Bros. – a lead guitar and kit duo … and we have a
			beautiful upcoming gig at Karamel Restaurant N22 on May 11th.

			`),C(lt.$$.fragment),ut=Y(),C(mt.$$.fragment),Rt=Y(),Ct=g("br"),zt=g("br"),Yt=L(`

			We are also proud to be one of the bands opening the Brockley Max Festival this year on May
			31st... watch this space for coverage... We’ll be back soon with more news!...

			`),Ft=g("br"),Kt=g("br"),jt=Y(),Bt=g("div"),C(Et.$$.fragment),qt=Y(),kt=g("div"),C(It.$$.fragment),ie=Y(),C(St.$$.fragment),Jt=Y(),yt=g("div"),Gt=g("div"),C(Wt.$$.fragment),se=Y(),Ht=g("div"),C(Tt.$$.fragment),this.h()},l(f){t=N(f,`Since our wonderful spring ’23 news update we quietly prepped for our Red Brick Angel
			launch...`),e=d(f,"BR",{}),a=N(f,`
			...and it happened!

			`),l=d(f,"BR",{}),i=d(f,"BR",{}),n=N(f,`

			We had a beautiful night at The Camden Club – special thanks to Andrew Hart proprietor – We
			played to a full house and a standing ovation... was a night to remember Check out the footage
			– you’ll need an evening and a glass of wine!

			`),s=d(f,"DIV",{class:!0});var k=O(s);B(o.$$.fragment,k),h=F(k),B($.$$.fragment,k),k.forEach(u),v=N(f,`

			[link to launch footage coming soon...]

			`),R=d(f,"BR",{}),G=d(f,"BR",{}),S=N(f,`

			We will be releasing the album officially in June ’24 but have already released two singles
			from the album... Young Love and Crystal Girl... have a listen...

			`),w=d(f,"BR",{}),_=d(f,"BR",{}),p=F(f),B(T.$$.fragment,f),K=F(f),B(j.$$.fragment,f),P=F(f),Z=d(f,"BR",{}),z=N(f,`

			and...

			`),q=d(f,"BR",{}),J=F(f),B(Q.$$.fragment,f),b=F(f),B(W.$$.fragment,f),at=F(f),y=d(f,"DIV",{class:!0});var Dt=O(y);B(M.$$.fragment,Dt),U=F(Dt),B(tt.$$.fragment,Dt),Dt.forEach(u),it=N(f,`

			Since the launch we have played at Bread & Roses pub in Feb ’24... where we played to a rowdy
			but appreciative audience and they hit the heights when we sang our encore... a sneak peek at
			one of the songs from a planned Raie EP (more news later)... check this out!

			`),st=d(f,"BR",{}),X=d(f,"BR",{}),bt=N(f,`

			[link to gig footage coming soon...]

			`),_t=d(f,"BR",{}),wt=d(f,"BR",{}),vt=N(f,`

			but had to take time out to bring in new players as our wonderful Louis Bell on lead guitar,
			Tim Gardner on violin and keys and Chris Bell on kit have been contracted on tours and
			labels... we hope to see them return before too long but...

			`),et=d(f,"DIV",{class:!0});var Lt=O(et);B(ot.$$.fragment,Lt),xt=F(Lt),B(m.$$.fragment,Lt),Lt.forEach(u),D=N(f,`

			...meanwhile we are welcoming the Felgate Bros. – a lead guitar and kit duo … and we have a
			beautiful upcoming gig at Karamel Restaurant N22 on May 11th.

			`),B(lt.$$.fragment,f),ut=F(f),B(mt.$$.fragment,f),Rt=F(f),Ct=d(f,"BR",{}),zt=d(f,"BR",{}),Yt=N(f,`

			We are also proud to be one of the bands opening the Brockley Max Festival this year on May
			31st... watch this space for coverage... We’ll be back soon with more news!...

			`),Ft=d(f,"BR",{}),Kt=d(f,"BR",{}),jt=F(f),Bt=d(f,"DIV",{class:!0});var Ot=O(Bt);B(Et.$$.fragment,Ot),Ot.forEach(u),qt=F(f),kt=d(f,"DIV",{class:!0});var Qt=O(kt);B(It.$$.fragment,Qt),ie=F(Qt),B(St.$$.fragment,Qt),Qt.forEach(u),Jt=F(f),yt=d(f,"DIV",{class:!0});var Zt=O(yt);Gt=d(Zt,"DIV",{class:!0});var re=O(Gt);B(Wt.$$.fragment,re),re.forEach(u),se=F(Zt),Ht=d(Zt,"DIV",{class:!0});var oe=O(Ht);B(Tt.$$.fragment,oe),oe.forEach(u),Zt.forEach(u),this.h()},h(){V(s,"class","gap-sm grid grid-cols-2 w-full h-full"),V(y,"class","gap-sm grid grid-cols-2 w-full h-full"),V(et,"class","gap-sm grid grid-cols-2 w-full h-full"),V(Bt,"class","grid grid-cols-1 w-full h-full"),V(kt,"class","gap-sm grid grid-cols-2 w-full h-full"),V(Gt,"class","w-[30%]"),V(Ht,"class","w-[70%]"),V(yt,"class","gap-sm flex w-full h-full")},m(f,k){c(f,t,k),c(f,e,k),c(f,a,k),c(f,l,k),c(f,i,k),c(f,n,k),c(f,s,k),E(o,s,null),H(s,h),E($,s,null),c(f,v,k),c(f,R,k),c(f,G,k),c(f,S,k),c(f,w,k),c(f,_,k),c(f,p,k),E(T,f,k),c(f,K,k),E(j,f,k),c(f,P,k),c(f,Z,k),c(f,z,k),c(f,q,k),c(f,J,k),E(Q,f,k),c(f,b,k),E(W,f,k),c(f,at,k),c(f,y,k),E(M,y,null),H(y,U),E(tt,y,null),c(f,it,k),c(f,st,k),c(f,X,k),c(f,bt,k),c(f,_t,k),c(f,wt,k),c(f,vt,k),c(f,et,k),E(ot,et,null),H(et,xt),E(m,et,null),c(f,D,k),E(lt,f,k),c(f,ut,k),E(mt,f,k),c(f,Rt,k),c(f,Ct,k),c(f,zt,k),c(f,Yt,k),c(f,Ft,k),c(f,Kt,k),c(f,jt,k),c(f,Bt,k),E(Et,Bt,null),c(f,qt,k),c(f,kt,k),E(It,kt,null),H(kt,ie),E(St,kt,null),c(f,Jt,k),c(f,yt,k),H(yt,Gt),E(Wt,Gt,null),H(yt,se),H(yt,Ht),E(Tt,Ht,null),Ut=!0},p(f,k){const Dt={};k&16&&(Dt.$$scope={dirty:k,ctx:f}),j.$set(Dt);const Lt={};k&16&&(Lt.$$scope={dirty:k,ctx:f}),W.$set(Lt);const Ot={};k&16&&(Ot.$$scope={dirty:k,ctx:f}),mt.$set(Ot)},i(f){Ut||(x(o.$$.fragment,f),x($.$$.fragment,f),x(T.$$.fragment,f),x(j.$$.fragment,f),x(Q.$$.fragment,f),x(W.$$.fragment,f),x(M.$$.fragment,f),x(tt.$$.fragment,f),x(ot.$$.fragment,f),x(m.$$.fragment,f),x(lt.$$.fragment,f),x(mt.$$.fragment,f),x(Et.$$.fragment,f),x(It.$$.fragment,f),x(St.$$.fragment,f),x(Wt.$$.fragment,f),x(Tt.$$.fragment,f),Ut=!0)},o(f){A(o.$$.fragment,f),A($.$$.fragment,f),A(T.$$.fragment,f),A(j.$$.fragment,f),A(Q.$$.fragment,f),A(W.$$.fragment,f),A(M.$$.fragment,f),A(tt.$$.fragment,f),A(ot.$$.fragment,f),A(m.$$.fragment,f),A(lt.$$.fragment,f),A(mt.$$.fragment,f),A(Et.$$.fragment,f),A(It.$$.fragment,f),A(St.$$.fragment,f),A(Wt.$$.fragment,f),A(Tt.$$.fragment,f),Ut=!1},d(f){f&&(u(t),u(e),u(a),u(l),u(i),u(n),u(s),u(v),u(R),u(G),u(S),u(w),u(_),u(p),u(K),u(P),u(Z),u(z),u(q),u(J),u(b),u(at),u(y),u(it),u(st),u(X),u(bt),u(_t),u(wt),u(vt),u(et),u(D),u(ut),u(Rt),u(Ct),u(zt),u(Yt),u(Ft),u(Kt),u(jt),u(Bt),u(qt),u(kt),u(Jt),u(yt)),I(o),I($),I(T,f),I(j,f),I(Q,f),I(W,f),I(M),I(tt),I(ot),I(m),I(lt,f),I(mt,f),I(Et),I(It),I(St),I(Wt),I(Tt)}}}function tn(r){let t,e,a;return e=new ee({props:{numColumns:2,$$slots:{default:[Xe]},$$scope:{ctx:r}}}),{c(){t=g("div"),C(e.$$.fragment)},l(l){t=d(l,"DIV",{});var i=O(t);B(e.$$.fragment,i),i.forEach(u)},m(l,i){c(l,t,i),E(e,t,null),a=!0},p(l,i){const n={};i&16&&(n.$$scope={dirty:i,ctx:l}),e.$set(n)},i(l){a||(x(e.$$.fragment,l),a=!0)},o(l){A(e.$$.fragment,l),a=!1},d(l){l&&u(t),I(e)}}}function en(r){let t,e,a,l;function i(o){r[2](o)}function n(o){r[3](o)}let s={$$slots:{default:[tn]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.height=r[0]),r[1]!==void 0&&(s.isActive=r[1]),t=new ne({props:s}),rt.push(()=>ht(t,"height",i)),rt.push(()=>ht(t,"isActive",n)),{c(){C(t.$$.fragment)},l(o){B(t.$$.fragment,o)},m(o,h){E(t,o,h),l=!0},p(o,[h]){const $={};h&16&&($.$$scope={dirty:h,ctx:o}),!e&&h&1&&(e=!0,$.height=o[0],ct(()=>e=!1)),!a&&h&2&&(a=!0,$.isActive=o[1],ct(()=>a=!1)),t.$set($)},i(o){l||(x(t.$$.fragment,o),l=!0)},o(o){A(t.$$.fragment,o),l=!1},d(o){I(t,o)}}}function nn(r,t,e){let{height:a}=t,{isActive:l}=t;function i(s){a=s,e(0,a)}function n(s){l=s,e(1,l)}return r.$$set=s=>{"height"in s&&e(0,a=s.height),"isActive"in s&&e(1,l=s.isActive)},[a,l,i,n]}class sn extends pt{constructor(t){super(),$t(this,t,nn,en,dt,{height:0,isActive:1})}}function an(r){let t,e,a="Raie EPK",l,i,n,s,o;return n=new Nt.ExternalLink({props:{weight:"thin"}}),{c(){t=g("a"),e=g("span"),e.textContent=a,l=Y(),i=g("span"),C(n.$$.fragment),this.h()},l(h){t=d(h,"A",{class:!0,href:!0,target:!0});var $=O(t);e=d($,"SPAN",{class:!0,"data-svelte-h":!0}),Pt(e)!=="svelte-14m4ww6"&&(e.textContent=a),l=F($),i=d($,"SPAN",{class:!0});var v=O(i);B(n.$$.fragment,v),v.forEach(u),$.forEach(u),this.h()},h(){V(e,"class","text-sm text-my-black-600 italic rounded-sm border-my-black-50/60 tracking-widest group-hover/button:text-my-black transition-colors ease-in-out duration-150"),V(i,"class","text-xs text-my-black-400 group-hover/button:text-my-black-700 transition-colors ease-in-out duration-150"),V(t,"class",s=`border items-center gap-xs py-xxs px-xs group/button ${r[0]}`),V(t,"href","https://raie.bandzoogle.com/home"),V(t,"target","_blank")},m(h,$){c(h,t,$),H(t,e),H(t,l),H(t,i),E(n,i,null),o=!0},p(h,[$]){(!o||$&1&&s!==(s=`border items-center gap-xs py-xxs px-xs group/button ${h[0]}`))&&V(t,"class",s)},i(h){o||(x(n.$$.fragment,h),o=!0)},o(h){A(n.$$.fragment,h),o=!1},d(h){h&&u(t),I(n)}}}function ln(r,t,e){let{extraClasses:a}=t;return r.$$set=l=>{"extraClasses"in l&&e(0,a=l.extraClasses)},[a]}class rn extends pt{constructor(t){super(),$t(this,t,ln,an,dt,{extraClasses:0})}}function on(r){let t;return{c(){t=L("The Camden Club")},l(e){t=N(e,"The Camden Club")},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function un(r){let t;return{c(){t=L("the link")},l(e){t=N(e,"the link")},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function fn(r){let t,e,a,l,i,n,s,o,h,$,v,R,G,S,w,_;return e=new Vt({props:{imageClass:"rounded-sm grayscale opacity-80",meta:nt.faceshots[2].src,sizes:"98px",alt:""}}),l=new ft({props:{href:"https://thecamdenclub.co.uk/",$$slots:{default:[on]},$$scope:{ctx:r}}}),n=new ft({props:{href:"https://open.spotify.com/track/4f6sNMRPmhYUTKSNrBdQGM?fbclid=IwAR1Hq03ZHNhzSkHdSD_lmZK8-kkLxkAzqIhS5wOloJdqe6H_rYK2AxjEWxw",$$slots:{default:[un]},$$scope:{ctx:r}}}),R=new rn({props:{extraClasses:"inline-flex"}}),{c(){t=g("div"),C(e.$$.fragment),a=L(`

			We launched the new album Red Brick Angel at `),C(l.$$.fragment),i=L(`
			on November 8th to a standing ovation and we have now released our first Red Brick Angel album
			single YOUNG LOVE...... listen on `),C(n.$$.fragment),s=L(` and help us increase our algorithms...

			`),o=g("br"),h=g("br"),$=Y(),v=g("div"),C(R.$$.fragment),G=Y(),S=g("br"),w=L(`

			... all 12 beautiful new tracks have now been mastered and are avaiable to listen to on this
			site!`),this.h()},l(p){t=d(p,"DIV",{class:!0});var T=O(t);B(e.$$.fragment,T),T.forEach(u),a=N(p,`

			We launched the new album Red Brick Angel at `),B(l.$$.fragment,p),i=N(p,`
			on November 8th to a standing ovation and we have now released our first Red Brick Angel album
			single YOUNG LOVE...... listen on `),B(n.$$.fragment,p),s=N(p,` and help us increase our algorithms...

			`),o=d(p,"BR",{}),h=d(p,"BR",{}),$=F(p),v=d(p,"DIV",{class:!0});var K=O(v);B(R.$$.fragment,K),K.forEach(u),G=F(p),S=d(p,"BR",{}),w=N(p,`

			... all 12 beautiful new tracks have now been mastered and are avaiable to listen to on this
			site!`),this.h()},h(){V(t,"class","w-[98px] aspect-square overflow-hidden md:hidden shrink-0 mb-sm"),V(v,"class","sm:flex gap-md")},m(p,T){c(p,t,T),E(e,t,null),c(p,a,T),E(l,p,T),c(p,i,T),E(n,p,T),c(p,s,T),c(p,o,T),c(p,h,T),c(p,$,T),c(p,v,T),E(R,v,null),c(p,G,T),c(p,S,T),c(p,w,T),_=!0},p(p,T){const K={};T&16&&(K.$$scope={dirty:T,ctx:p}),l.$set(K);const j={};T&16&&(j.$$scope={dirty:T,ctx:p}),n.$set(j)},i(p){_||(x(e.$$.fragment,p),x(l.$$.fragment,p),x(n.$$.fragment,p),x(R.$$.fragment,p),_=!0)},o(p){A(e.$$.fragment,p),A(l.$$.fragment,p),A(n.$$.fragment,p),A(R.$$.fragment,p),_=!1},d(p){p&&(u(t),u(a),u(i),u(s),u(o),u(h),u($),u(v),u(G),u(S),u(w)),I(e),I(l,p),I(n,p),I(R)}}}function cn(r){let t,e,a,l,i,n;return a=new Vt({props:{imageClass:"rounded-sm grayscale opacity-80",meta:nt.faceshots[2].src,sizes:"98px",alt:""}}),i=new ee({props:{numColumns:1,extraClasses:"",$$slots:{default:[fn]},$$scope:{ctx:r}}}),{c(){t=g("div"),e=g("div"),C(a.$$.fragment),l=Y(),C(i.$$.fragment),this.h()},l(s){t=d(s,"DIV",{class:!0});var o=O(t);e=d(o,"DIV",{class:!0});var h=O(e);B(a.$$.fragment,h),h.forEach(u),l=F(o),B(i.$$.fragment,o),o.forEach(u),this.h()},h(){V(e,"class","w-[98px] shrink-0 hidden md:block"),V(t,"class","flex flex-row gap-sm sm:gap-lg lg:gap-xl")},m(s,o){c(s,t,o),H(t,e),E(a,e,null),H(t,l),E(i,t,null),n=!0},p(s,o){const h={};o&16&&(h.$$scope={dirty:o,ctx:s}),i.$set(h)},i(s){n||(x(a.$$.fragment,s),x(i.$$.fragment,s),n=!0)},o(s){A(a.$$.fragment,s),A(i.$$.fragment,s),n=!1},d(s){s&&u(t),I(a),I(i)}}}function hn(r){let t,e,a,l;function i(o){r[2](o)}function n(o){r[3](o)}let s={$$slots:{default:[cn]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.height=r[0]),r[1]!==void 0&&(s.isActive=r[1]),t=new ne({props:s}),rt.push(()=>ht(t,"height",i)),rt.push(()=>ht(t,"isActive",n)),{c(){C(t.$$.fragment)},l(o){B(t.$$.fragment,o)},m(o,h){E(t,o,h),l=!0},p(o,[h]){const $={};h&16&&($.$$scope={dirty:h,ctx:o}),!e&&h&1&&(e=!0,$.height=o[0],ct(()=>e=!1)),!a&&h&2&&(a=!0,$.isActive=o[1],ct(()=>a=!1)),t.$set($)},i(o){l||(x(t.$$.fragment,o),l=!0)},o(o){A(t.$$.fragment,o),l=!1},d(o){I(t,o)}}}function mn(r,t,e){let{height:a}=t,{isActive:l}=t;function i(s){a=s,e(0,a)}function n(s){l=s,e(1,l)}return r.$$set=s=>{"height"in s&&e(0,a=s.height),"isActive"in s&&e(1,l=s.isActive)},[a,l,i,n]}class gn extends pt{constructor(t){super(),$t(this,t,mn,hn,dt,{height:0,isActive:1})}}function dn(r){let t,e,a;function l(n){r[12](n)}let i={isActive:r[0]==="gigs"};return r[4]!==void 0&&(i.height=r[4]),t=new Ke({props:i}),rt.push(()=>ht(t,"height",l)),{c(){C(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,s){E(t,n,s),a=!0},p(n,s){const o={};s&1&&(o.isActive=n[0]==="gigs"),!e&&s&16&&(e=!0,o.height=n[4],ct(()=>e=!1)),t.$set(o)},i(n){a||(x(t.$$.fragment,n),a=!0)},o(n){A(t.$$.fragment,n),a=!1},d(n){I(t,n)}}}function pn(r){let t,e,a;function l(n){r[11](n)}let i={isActive:r[0]==="galaxy"};return r[3]!==void 0&&(i.height=r[3]),t=new Ne({props:i}),rt.push(()=>ht(t,"height",l)),{c(){C(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,s){E(t,n,s),a=!0},p(n,s){const o={};s&1&&(o.isActive=n[0]==="galaxy"),!e&&s&8&&(e=!0,o.height=n[3],ct(()=>e=!1)),t.$set(o)},i(n){a||(x(t.$$.fragment,n),a=!0)},o(n){A(t.$$.fragment,n),a=!1},d(n){I(t,n)}}}function $n(r){let t,e,a;function l(n){r[10](n)}let i={isActive:r[0]==="album launch"};return r[2]!==void 0&&(i.height=r[2]),t=new gn({props:i}),rt.push(()=>ht(t,"height",l)),{c(){C(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,s){E(t,n,s),a=!0},p(n,s){const o={};s&1&&(o.isActive=n[0]==="album launch"),!e&&s&4&&(e=!0,o.height=n[2],ct(()=>e=!1)),t.$set(o)},i(n){a||(x(t.$$.fragment,n),a=!0)},o(n){A(t.$$.fragment,n),a=!1},d(n){I(t,n)}}}function bn(r){let t,e,a;function l(n){r[9](n)}let i={isActive:r[0]==="red brick angel news"};return r[1]!==void 0&&(i.height=r[1]),t=new sn({props:i}),rt.push(()=>ht(t,"height",l)),{c(){C(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,s){E(t,n,s),a=!0},p(n,s){const o={};s&1&&(o.isActive=n[0]==="red brick angel news"),!e&&s&2&&(e=!0,o.height=n[1],ct(()=>e=!1)),t.$set(o)},i(n){a||(x(t.$$.fragment,n),a=!0)},o(n){A(t.$$.fragment,n),a=!1},d(n){I(t,n)}}}function _n(r){let t,e,a="Latest News",l,i,n,s,o,h,$,v,R,G,S,w,_,p,T,K,j,P,Z,z,q,J,Q;n=new Xt({props:{text:"Red Brick Angel News",onClick:r[5],isActive:r[0]==="red brick angel news"}}),h=new Nt.DotOutline({props:{weight:"thin"}}),v=new Xt({props:{text:"Album Launch",onClick:r[6],isActive:r[0]==="album launch"}}),S=new Nt.DotOutline({props:{weight:"thin"}}),_=new Xt({props:{text:"Galaxy Studios",onClick:r[7],isActive:r[0]==="galaxy"}}),K=new Nt.DotOutline({props:{weight:"thin"}}),P=new Xt({props:{text:"Gigs",onClick:r[8],isActive:r[0]==="gigs"}});const b=[bn,$n,pn,dn],W=[];function at(y,M){return y[0]==="red brick angel news"?0:y[0]==="album launch"?1:y[0]==="galaxy"?2:3}return q=at(r),J=W[q]=b[q](r),{c(){t=g("div"),e=g("h3"),e.textContent=a,l=Y(),i=g("div"),C(n.$$.fragment),s=Y(),o=g("span"),C(h.$$.fragment),$=Y(),C(v.$$.fragment),R=Y(),G=g("span"),C(S.$$.fragment),w=Y(),C(_.$$.fragment),p=Y(),T=g("span"),C(K.$$.fragment),j=Y(),C(P.$$.fragment),Z=Y(),z=g("div"),J.c(),this.h()},l(y){t=d(y,"DIV",{});var M=O(t);e=d(M,"H3",{class:!0,"data-svelte-h":!0}),Pt(e)!=="svelte-ssroo9"&&(e.textContent=a),l=F(M),i=d(M,"DIV",{class:!0});var U=O(i);B(n.$$.fragment,U),s=F(U),o=d(U,"SPAN",{class:!0});var tt=O(o);B(h.$$.fragment,tt),tt.forEach(u),$=F(U),B(v.$$.fragment,U),R=F(U),G=d(U,"SPAN",{class:!0});var it=O(G);B(S.$$.fragment,it),it.forEach(u),w=F(U),B(_.$$.fragment,U),p=F(U),T=d(U,"SPAN",{class:!0});var st=O(T);B(K.$$.fragment,st),st.forEach(u),j=F(U),B(P.$$.fragment,U),U.forEach(u),Z=F(M),z=d(M,"DIV",{class:!0});var X=O(z);J.l(X),X.forEach(u),M.forEach(u),this.h()},h(){V(e,"class","tracking-widest text-xs sm:text-sm text-my-black-600 uppercase"),V(o,"class","text-my-black-50 text-sm"),V(G,"class","text-my-black-50 text-sm"),V(T,"class","text-my-black-50 text-sm"),V(i,"class","flex items-center flex-wrap gap-x-xxs xs:gap-x-xs sm:gap-x-sm gap-y-xs mt-xs max-w-full overflow-hidden"),V(z,"class","mt-md lg:mt-lg transition-all ease-in-out duration-300"),At(z,"height",`${r[0]==="album launch"?r[2]:r[0]==="galaxy"?r[3]:r[4]}px`)},m(y,M){c(y,t,M),H(t,e),H(t,l),H(t,i),E(n,i,null),H(i,s),H(i,o),E(h,o,null),H(i,$),E(v,i,null),H(i,R),H(i,G),E(S,G,null),H(i,w),E(_,i,null),H(i,p),H(i,T),E(K,T,null),H(i,j),E(P,i,null),H(t,Z),H(t,z),W[q].m(z,null),Q=!0},p(y,[M]){const U={};M&1&&(U.onClick=y[5]),M&1&&(U.isActive=y[0]==="red brick angel news"),n.$set(U);const tt={};M&1&&(tt.onClick=y[6]),M&1&&(tt.isActive=y[0]==="album launch"),v.$set(tt);const it={};M&1&&(it.onClick=y[7]),M&1&&(it.isActive=y[0]==="galaxy"),_.$set(it);const st={};M&1&&(st.onClick=y[8]),M&1&&(st.isActive=y[0]==="gigs"),P.$set(st);let X=q;q=at(y),q===X?W[q].p(y,M):(ve(),A(W[X],1,1,()=>{W[X]=null}),ke(),J=W[q],J?J.p(y,M):(J=W[q]=b[q](y),J.c()),x(J,1),J.m(z,null)),M&29&&At(z,"height",`${y[0]==="album launch"?y[2]:y[0]==="galaxy"?y[3]:y[4]}px`)},i(y){Q||(x(n.$$.fragment,y),x(h.$$.fragment,y),x(v.$$.fragment,y),x(S.$$.fragment,y),x(_.$$.fragment,y),x(K.$$.fragment,y),x(P.$$.fragment,y),x(J),Q=!0)},o(y){A(n.$$.fragment,y),A(h.$$.fragment,y),A(v.$$.fragment,y),A(S.$$.fragment,y),A(_.$$.fragment,y),A(K.$$.fragment,y),A(P.$$.fragment,y),A(J),Q=!1},d(y){y&&u(t),I(n),I(h),I(v),I(S),I(_),I(K),I(P),W[q].d()}}}function wn(r,t,e){let a="red brick angel news",l,i,n,s;const o=()=>e(0,a="red brick angel news"),h=()=>e(0,a="album launch"),$=()=>e(0,a="galaxy"),v=()=>e(0,a="gigs");function R(_){l=_,e(1,l)}function G(_){i=_,e(2,i)}function S(_){n=_,e(3,n)}function w(_){s=_,e(4,s)}return[a,l,i,n,s,o,h,$,v,R,G,S,w]}class In extends pt{constructor(t){super(),$t(this,t,wn,_n,dt,{})}}export{In as C};
