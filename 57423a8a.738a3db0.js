(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{174:function(e,t,a){"use strict";a.r(t);a(250);var n=a(0),r=a.n(n),u=a(320),i=a(246),o=a(241);t.default=function(e){var t=e.metadata,a=e.items,n=t.allTagsPath,l=t.name,s=t.count;return r.a.createElement(i.a,{title:'Highlights tagged "'+l+'"',description:'Highlight | Tagged "'+l+'"'},r.a.createElement("header",{className:"hero hero--clean"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,s," ",function(e,t){return e>1?t+"s":t}(s,"highlight"),' tagged with "',l,'"'),r.a.createElement("div",{className:"hero--subtitle"},r.a.createElement(o.a,{href:n},"View All Tags")))),r.a.createElement("main",{className:"container container--xs"},r.a.createElement(u.a,{items:a})))}},245:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return u}));var n=a(239);function r(){var e=Object(n.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_highlight,a=Date.parse(t.date),r=new Date,u=Math.abs(r-a),i=Math.ceil(u/864e5),o=null;return"undefined"!=typeof window&&(o=new Date(parseInt(window.localStorage.getItem("highlightsViewedAt")||"0"))),i<30&&(!o||o<a)?t:null}function u(){"undefined"!=typeof window&&window.localStorage.setItem("highlightsViewedAt",(new Date).getTime())}},246:function(e,t,a){"use strict";a(255);var n=a(0),r=a.n(n),u=a(256),i=a(244),o=a(1),l=(a(257),a(241)),s=a(258),c=a(243),m=a.n(c),D=a(259),d=a.n(D),h=a(239),f=a(238),g=a.n(f),p=a(131),E=a.n(p),b=function(){return r.a.createElement("span",{className:g()(E.a.toggle,E.a.moon)})},v=function(){return r.a.createElement("span",{className:g()(E.a.toggle,E.a.sun)})},y=function(e){var t=Object(h.a)().isClient;return r.a.createElement(d.a,Object(o.a)({disabled:!t,icons:{checked:r.a.createElement(b,null),unchecked:r.a.createElement(v,null)}},e))},F=a(245),C=a(242),w=a(262),k=a(253),N=a(254),$=a(249),_=a(132),A=a.n(_);function O(e){var t=e.href,a=e.hideIcon,n=e.label,u=e.onClick,i=(e.position,e.right),s=e.to,c=function(e,t){var a={label:e};switch(e.toLowerCase()){case"chat":return a.hideText=1==t,a.icon="message-circle",a;case"community":return a.hideText=1==t,a.icon="users",a;case"github":return a.badge="7.1k",a.hideText=!1,a.icon="github",a;case"highlights":return Object(F.a)()&&(a.badge="new",a.badgeStyle="primary"),a.hideText=1==t,a.icon="gift",a;default:return a}}(n,i)||{},m=Object(C.a)(s);return r.a.createElement(l.a,Object(o.a)({className:g()("navbar__item navbar__link",c.className,{navbar__item__icon_only:c.hideText}),title:c.hideText?n:null,onClick:u},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:m}),!a&&c.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+c.icon})," ",c.iconLabel),!c.hideText&&c.label,c.badge&&r.a.createElement("span",{className:g()("badge","badge--"+(c.badgeStyle||"secondary"))},c.badge))}var T=function(){var e,t=Object(h.a)(),a=t.siteConfig.themeConfig,u=a.navbar,i=(u=void 0===u?{}:u).title,c=u.links,D=void 0===c?[]:c,d=u.hideOnScroll,f=void 0!==d&&d,p=a.disableDarkMode,E=void 0!==p&&p,b=(t.isClient,Object(n.useState)(!1)),v=b[0],F=b[1],C=Object(n.useState)(!1),_=C[0],T=C[1],j=Object($.a)(),x=j.isDarkTheme,M=j.setLightTheme,S=j.setDarkTheme,B=Object(w.a)(f),P=B.navbarRef,L=B.isNavbarVisible,H=Object(N.a)(),I=H.logoLink,z=H.logoLinkProps,U=H.logoImageUrl,R=H.logoAlt;Object(k.a)(v);var q=Object(n.useCallback)((function(){F(!0)}),[F]),J=Object(n.useCallback)((function(){F(!1)}),[F]),G=Object(n.useCallback)((function(e){return e.target.checked?S():M()}),[M,S]);return r.a.createElement("nav",{ref:P,className:g()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":v},e[A.a.navbarHideable]=f,e[A.a.navbarHidden]=!L,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:q,onKeyDown:q},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(l.a,Object(o.a)({className:"navbar__brand",to:I},z),null!=U&&r.a.createElement(m.a,{className:"navbar__logo",src:U,alt:R}),null!=i&&r.a.createElement("strong",{className:_?A.a.hideLogoText:""},i)),D.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(O,Object(o.a)({},e,{left:!0,key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},D.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(O,Object(o.a)({},e,{right:!0,key:t}))})),!E&&r.a.createElement(y,{className:A.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:x,onChange:G}),r.a.createElement(s.a,{handleSearchBarToggle:T,isSearchBarExpanded:_}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:J}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(l.a,Object(o.a)({className:"navbar__brand",onClick:J,to:I},z),null!=U&&r.a.createElement(m.a,{className:"navbar__logo",src:U,alt:R}),null!=i&&r.a.createElement("strong",null,i)),!E&&v&&r.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:x,onChange:G})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},D.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(O,Object(o.a)({className:"menu__link"},e,{hideIcon:!0,onClick:J})))})))))))},j=a(9);a(133);var x=function(e){var t,a=e.block,n=e.buttonClass,u=e.center,i=e.description,o=e.size,l=e.width;return r.a.createElement("div",{className:g()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":u},t["mailing-list--"+o]=o,t))},!1!==i&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://app.getvero.com/forms/a748ded7ce0da69e6042fa1e21042506",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:g()("input","input--"+o),name:"email",placeholder:"you@email.com",type:"email",style:{width:l}}),r.a.createElement("button",{className:g()("button","button--"+(n||"primary"),"button--"+o),type:"submit"},"Subscribe")))},M=a(134),S=a.n(M);function B(e){var t=e.to,a=e.href,n=e.label,u=Object(j.a)(e,["to","href","label"]),i=Object(C.a)(t);return r.a.createElement(l.a,Object(o.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:i},u),n)}var P=function(e){var t=e.url,a=e.alt;return r.a.createElement(m.a,{className:"footer__logo",alt:a,src:t})};var L=function(){var e=Object(h.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},u=n.copyright,i=n.links,o=void 0===i?[]:i,l=n.logo,s=void 0===l?{}:l,c=Object(C.a)(s.src);return a?r.a.createElement("footer",{className:g()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(m.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"gnet",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(x,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/_andy_pan",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"gnet's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"gnet's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://strikefreedom.top/rss.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"gnet's RSS feed"})))),o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(B,e))}))):null)}))),(s||u)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:S.a.footerLogoLink},r.a.createElement(P,{alt:s.alt,url:c})):r.a.createElement(P,{alt:s.alt,url:c}),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.digitalocean.com/",target:"_blank",rel:"noopener noreferrer",className:S.a.footerLogoLink},r.a.createElement("img",{alt:"DigitalOcean",src:"https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_blue.svg",width:"201px"}))),u,r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/security/policy"},"Security Policy"),"\xa0\u2022\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/blob/master/PRIVACY.md"},"Privacy Policy")),r.a.createElement("br",null),r.a.createElement("small",null,"Acknowledgement for Timber, Inc.")))):null},H=a(263),I=a(264),z=a(3);a(135);t.a=function(e){var t=Object(h.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,o=(a.tagline,a.title),l=a.themeConfig.image,s=a.url,c=e.children,m=e.title,D=e.noFooter,d=e.description,f=e.image,g=e.keywords,p=(e.permalink,e.version),E=m?m+" | "+o:o,b=f||l,v=s+Object(C.a)(b),y=Object(C.a)(n),F=Object(z.h)(),w=F?"https://gnet.host"+(F.pathname.endsWith("/")?F.pathname:F.pathname+"/"):null;return r.a.createElement(I.a,null,r.a.createElement(H.a,null,r.a.createElement(i.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),n&&r.a.createElement("link",{rel:"shortcut icon",href:y}),d&&r.a.createElement("meta",{name:"description",content:d}),d&&r.a.createElement("meta",{property:"og:description",content:d}),p&&r.a.createElement("meta",{name:"docsearch:version",content:p}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),b&&r.a.createElement("meta",{property:"og:image",content:v}),b&&r.a.createElement("meta",{property:"twitter:image",content:v}),b&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),b&&r.a.createElement("meta",{name:"twitter:site",content:"@vectordotdev"}),b&&r.a.createElement("meta",{name:"twitter:creator",content:"@vectordotdev"}),w&&r.a.createElement("meta",{property:"og:url",content:w}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),w&&r.a.createElement("link",{rel:"canonical",href:w})),r.a.createElement(u.a,null),r.a.createElement(T,null),r.a.createElement("div",{className:"main-wrapper"},c),!D&&r.a.createElement(L,null)))}},247:function(e,t,a){"use strict";var n=a(12),r=a(274)(5),u=!0;"find"in[]&&Array(1).find((function(){u=!1})),n(n.P+n.F*u,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(80)("find")},248:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a(79),a(271),a(247),a(78);var n=a(252),r=a.n(n);function u(e,t){var a=new r.a;return e.map((function(e){var n=e;return"string"==typeof e&&(n={label:e,permalink:"/"+t+"/tags/"+a.slug(e)}),function(e,t){if(e.enriched)return e;var a=e.label.split(": ",2),n=a[0],r=a[1],u="primary";switch(n){case"domain":u="blue";break;case"type":u="pink";break;default:u="primary"}return{category:n,count:e.count,enriched:!0,label:e.label,permalink:e.permalink,style:u,value:r}}(n)}))}},250:function(e,t,a){var n=a(24).f,r=Function.prototype,u=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(e){return""}}})},251:function(e,t,a){"use strict";var n=a(9),r=a(0),u=a.n(r),i=a(238),o=a.n(i),l=a(239),s=(a(139),a(140)),c=a.n(s);t.a=function(e){return function(t){var a,r=t.id,i=Object(n.a)(t,["id"]),s=Object(l.a)().siteConfig,m=(s=void 0===s?{}:s).themeConfig,D=(m=void 0===m?{}:m).navbar,d=(D=void 0===D?{}:D).hideOnScroll,h=void 0!==d&&d;return r?u.a.createElement(e,i,u.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:o()("anchor",(a={},a[c.a.enhancedAnchor]=!h,a)),id:r}),u.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),i.children):u.a.createElement(e,i)}}},252:function(e,t,a){var n=a(261);e.exports=o;var r=Object.hasOwnProperty,u=/\s/g,i=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~\u2019]/g;function o(){if(!(this instanceof o))return new o;this.reset()}function l(e,t){return"string"!=typeof e?"":(t||(e=e.toLowerCase()),e.trim().replace(i,"").replace(n(),"").replace(u,"-"))}o.prototype.slug=function(e,t){for(var a=l(e,!0===t),n=a;r.call(this.occurrences,a);)this.occurrences[n]++,a=n+"-"+this.occurrences[n];return this.occurrences[a]=0,a},o.prototype.reset=function(){this.occurrences=Object.create(null)},o.slug=l},260:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(241),i=a(238),o=a.n(i);t.a=function(e){var t=e.count,a=e.label,n=e.permalink,i=e.style,l=e.value,s=e.valueOnly;return r.a.createElement(u.a,{to:n+"/",className:o()("badge","badge--rounded","badge--"+i)},s?l:a,t&&r.a.createElement(r.a.Fragment,null," (",t,")"))}},261:function(e,t){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},265:function(e,t,a){"use strict";a(250),a(247);var n=a(0),r=a.n(n),u=a(238),i=a.n(u),o=a(239);a(137);t.a=function(e){var t,a=e.bio,n=e.className,u=e.github,l=e.nameSuffix,s=e.rel,c=e.size,m=e.subTitle,D=e.vertical,d=Object(o.a)().siteConfig,h=(void 0===d?{}:d).customFields.metadata.team,f=h.find((function(e){return e.github==u}))||h.find((function(e){return"ben"==e.id}));return r.a.createElement("div",{className:i()("avatar",n,(t={},t["avatar--"+c]=c,t["avatar--vertical"]=D,t))},r.a.createElement("img",{className:i()("avatar__photo","avatar__photo--"+c),src:f.avatar}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("div",{className:"avatar__name"},r.a.createElement("a",{href:f.github,target:"_blank",rel:s},f.name),l),m&&r.a.createElement("small",{className:"avatar__subtitle"},m),!m&&a&&r.a.createElement("small",{className:"avatar__subtitle",dangerouslySetInnerHTML:{__html:f.bio}})))}},266:function(e,t,a){"use strict";var n=a(1),r=a(0),u=a.n(r),i=(a(241),a(260)),o=a(238),l=a.n(o),s=a(248),c=a(138),m=a.n(c);t.a=function(e){var t,a=e.block,r=e.colorProfile,o=e.tags,c=e.valuesOnly,D=Object(s.a)(o,r);return u.a.createElement("span",{className:l()(m.a.tags,(t={},t[m.a.tagsBlock]=a,t))},D.map((function(e,t){return u.a.createElement(i.a,Object(n.a)({key:t,valueOnly:c},e))})))}},267:function(e,t,a){var n;!function(r){"use strict";var u,i,o,l=(u=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,o=/[^-+\dA-Z]/g,function(e,t,a,n){if(1!==arguments.length||"string"!==D(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var r=(t=String(l.masks[t]||t||l.masks.default)).slice(0,4);"UTC:"!==r&&"GMT:"!==r||(t=t.slice(4),a=!0,"GMT:"===r&&(n=!0));var d=a?"getUTC":"get",h=e[d+"Date"](),f=e[d+"Day"](),g=e[d+"Month"](),p=e[d+"FullYear"](),E=e[d+"Hours"](),b=e[d+"Minutes"](),v=e[d+"Seconds"](),y=e[d+"Milliseconds"](),F=a?0:e.getTimezoneOffset(),C=c(e),w=m(e),k={d:h,dd:s(h),ddd:l.i18n.dayNames[f],dddd:l.i18n.dayNames[f+7],m:g+1,mm:s(g+1),mmm:l.i18n.monthNames[g],mmmm:l.i18n.monthNames[g+12],yy:String(p).slice(2),yyyy:p,h:E%12||12,hh:s(E%12||12),H:E,HH:s(E),M:b,MM:s(b),s:v,ss:s(v),l:s(y,3),L:s(Math.round(y/10)),t:E<12?l.i18n.timeNames[0]:l.i18n.timeNames[1],tt:E<12?l.i18n.timeNames[2]:l.i18n.timeNames[3],T:E<12?l.i18n.timeNames[4]:l.i18n.timeNames[5],TT:E<12?l.i18n.timeNames[6]:l.i18n.timeNames[7],Z:n?"GMT":a?"UTC":(String(e).match(i)||[""]).pop().replace(o,""),o:(F>0?"-":"+")+s(100*Math.floor(Math.abs(F)/60)+Math.abs(F)%60,4),S:["th","st","nd","rd"][h%10>3?0:(h%100-h%10!=10)*h%10],W:C,N:w};return t.replace(u,(function(e){return e in k?k[e]:e.slice(1,e.length-1)}))});function s(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function c(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var r=(t-a)/6048e5;return 1+Math.floor(r)}function m(e){var t=e.getDay();return 0===t&&(t=7),t}function D(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}l.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},l.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return l}.call(t,a,t,e))||(e.exports=n)}()},274:function(e,t,a){var n=a(28),r=a(54),u=a(25),i=a(27),o=a(275);e.exports=function(e,t){var a=1==e,l=2==e,s=3==e,c=4==e,m=6==e,D=5==e||m,d=t||o;return function(t,o,h){for(var f,g,p=u(t),E=r(p),b=n(o,h,3),v=i(E.length),y=0,F=a?d(t,v):l?d(t,0):void 0;v>y;y++)if((D||y in E)&&(g=b(f=E[y],y,p),e))if(a)F[y]=g;else if(g)switch(e){case 3:return!0;case 5:return f;case 6:return y;case 2:F.push(f)}else if(c)return!1;return m?-1:s||c?c:F}}},275:function(e,t,a){var n=a(276);e.exports=function(e,t){return new(n(e))(t)}},276:function(e,t,a){var n=a(14),r=a(296),u=a(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[u])&&(t=void 0)),void 0===t?Array:t}},298:function(e,t,a){"use strict";var n=a(12),r=a(30),u=a(25),i=a(13),o=[].sort,l=[1,2,3];n(n.P+n.F*(i((function(){l.sort(void 0)}))||!i((function(){l.sort(null)}))||!a(299)(o)),"Array",{sort:function(e){return void 0===e?o.call(u(this)):o.call(u(this),r(e))}})},299:function(e,t,a){"use strict";var n=a(13);e.exports=function(e,t){return!!e&&n((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},300:function(e,t,a){e.exports=function(){var e=[],t=[],a={},n={},r={};function u(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function i(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function o(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,a){return t[a]||""}))}function l(e,t){return e.replace(t[0],(function(a,n){var r=o(t[1],arguments);return i(""===a?e[n-1]:a,r)}))}function s(e,t,n){if(!e.length||a.hasOwnProperty(e))return t;for(var r=n.length;r--;){var u=n[r];if(u[0].test(t))return l(t,u)}return t}function c(e,t,a){return function(n){var r=n.toLowerCase();return t.hasOwnProperty(r)?i(n,r):e.hasOwnProperty(r)?i(n,e[r]):s(r,n,a)}}function m(e,t,a,n){return function(n){var r=n.toLowerCase();return!!t.hasOwnProperty(r)||!e.hasOwnProperty(r)&&s(r,r,a)===r}}function D(e,t,a){return(a?t+" ":"")+(1===t?D.singular(e):D.plural(e))}return D.plural=c(r,n,e),D.isPlural=m(r,n,e),D.singular=c(n,r,t),D.isSingular=m(n,r,t),D.addPluralRule=function(t,a){e.push([u(t),a])},D.addSingularRule=function(e,a){t.push([u(e),a])},D.addUncountableRule=function(e){"string"!=typeof e?(D.addPluralRule(e,"$0"),D.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},D.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),r[e]=t,n[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return D.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return D.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return D.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[e\xe9]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(D.addUncountableRule),D}()},306:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=["second","minute","hour","day","week","month","year"],i=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"],o={},l=function(e,t){o[e]=t},s=function(e){return o[e]||o.en_US},c=[60,60,24,7,365/7/12,12];function m(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function D(e,t){for(var a=e<0?1:0,n=e=Math.abs(e),r=0;e>=c[r]&&r<c.length;r++)e/=c[r];return(e=Math.floor(e))>(0===(r*=2)?9:1)&&(r+=1),t(e,r,n)[a].replace("%s",e.toString())}function d(e,t){return(+(t?m(t):new Date)-+m(e))/1e3}function h(e){return parseInt(e.getAttribute("timeago-id"))}var f={},g=function(e){clearTimeout(e),delete f[e]};function p(e,t,a,n){g(h(e));var r=n.relativeDate,u=n.minInterval,i=d(t,r);e.innerText=D(i,a);var o=setTimeout((function(){p(e,t,a,n)}),Math.min(1e3*Math.max(function(e){for(var t=1,a=0,n=Math.abs(e);e>=c[a]&&a<c.length;a++)e/=c[a],t*=c[a];return n=(n%=t)?t-n:t,Math.ceil(n)}(i),u||1),2147483647));f[o]=0,function(e,t){e.setAttribute("timeago-id",t)}(e,o)}function E(e){e?g(h(e)):Object.keys(f).forEach(g)}l("en_US",(function(e,t){if(0===t)return["just now","right now"];var a=u[Math.floor(t/2)];return e>1&&(a+="s"),[e+" "+a+" ago","in "+e+" "+a]})),l("zh_CN",(function(e,t){if(0===t)return["\u521a\u521a","\u7247\u523b\u540e"];var a=i[~~(t/2)];return[e+" "+a+"\u524d",e+" "+a+"\u540e"]}));var b,v=(b=function(e,t){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}b(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),y=function(){return(y=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},F=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dom=null,t}return v(t,e),t.prototype.componentDidMount=function(){this.renderTimeAgo()},t.prototype.componentDidUpdate=function(){this.renderTimeAgo()},t.prototype.renderTimeAgo=function(){var e,t=this.props,a=t.live,n=t.datetime,r=t.locale,u=t.opts;E(this.dom),!1!==a&&(this.dom.setAttribute("datetime",""+((e=n)instanceof Date?e.getTime():e)),function(e,t,a){var n=e.length?e:[e];n.forEach((function(e){p(e,function(e){return e.getAttribute("datetime")}(e),s(t),a||{})}))}(this.dom,r,u))},t.prototype.componentWillUnmount=function(){E(this.dom)},t.prototype.render=function(){var e=this,t=this.props,a=t.datetime,n=(t.live,t.locale),u=t.opts,i=F(t,["datetime","live","locale","opts"]);return r.a.createElement("time",y({ref:function(t){e.dom=t}},i),function(e,t,a){return D(d(e,a&&a.relativeDate),s(t))}(a,n,u))},t.defaultProps={live:!0,className:""},t}(r.a.Component);t.a=C},316:function(e,t,a){"use strict";const n=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.toLowerCase().replace(/(?:^|\s|-)\S/g,e=>e.toUpperCase())};e.exports=n,e.exports.default=n},320:function(e,t,a){"use strict";var n=a(1),r=(a(298),a(26),a(20),a(19),a(53),a(0)),u=a.n(r),i=a(251),o=(a(247),a(265)),l=a(241),s=a(266),c=a(306),m=(a(278),a(238)),D=a.n(m),d=a(267),h=a.n(d),f=a(248);var g=function(e){var t=e.authorGithub,a=e.colorize,n=e.dateString,r=e.description,i=e.headingDepth,m=e.hideAuthor,d=e.hideTags,g=e.permalink,p=e.prNumbers,E=e.tags,b=e.title,v=new Date(Date.parse(n)),y=h()(v,"mmm dS, yyyy"),F=Object(f.a)(E,"highlights"),C=(F=F.concat(p.map((function(e){return{enriched:!0,label:u.a.createElement(u.a.Fragment,null,u.a.createElement("i",{className:"feather icon-git-pull-request"})," ",e),permalink:"https://github.com/panjf2000/gnet/commit/"+e,style:"secondary"}})))).find((function(e){return"domain"==e.category})),w=C?C.value:null,k=F.find((function(e){return"type"==e.category})),N=k?k.value:null,$="h"+(i||3),_=null;if(a)switch(N){case"breaking change":_="danger";break;case"enhancement":_="pink";break;case"new feature":_="primary";break;case"performance":_="warning"}var A=u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{className:"time"},u.a.createElement("span",{className:"formatted-time"},y),u.a.createElement("span",{className:"separator"}," / "),u.a.createElement(c.a,{title:y,pubdate:"pubdate",datetime:v})),u.a.createElement("span",{className:"separator"}," / "),u.a.createElement("span",{className:"author-title"},"gnet creator"));return u.a.createElement(l.a,{to:g,className:D()("panel","panel--"+_,"domain-bg","domain-bg--hover","domain-bg--"+w)},u.a.createElement("article",null,u.a.createElement($,null,b),u.a.createElement("div",{className:"subtitle"},r),!m&&t&&u.a.createElement(o.a,{github:t,size:"sm",subTitle:A,rel:"author"}),!d&&F.length>0&&u.a.createElement("div",null,u.a.createElement(s.a,{colorProfile:"blog",tags:F}))))},p=a(252),E=a.n(p),b=a(300),v=a.n(b),y=a(316),F=a.n(y),C=(Object(i.a)("h2"),Object(i.a)("h3"));function w(e){var t=e.groupBy,a=e.group,n=new E.a;switch(t){case"release":return u.a.createElement("li",{className:"header sticky"},u.a.createElement("h3",null,u.a.createElement(l.a,{to:"/releases/"+a+"/"},F()(a))));case"type":var r=null,i=v()(F()(a)),o=null;switch(a){case"breaking change":r="alert-triangle",o="danger";break;case"enhancement":r="arrow-up-circle",o="pink";break;case"new feature":r="gift",o="primary";break;case"performance":r="zap",i="Performance Improvements",o="warning"}return u.a.createElement("li",{className:"header sticky"},u.a.createElement(C,{id:n.slug(a+"-highlights"),className:"text--"+o},r&&u.a.createElement("i",{className:"feather icon-"+r})," ",i));default:throw Error("unknown group: "+t)}}t.a=function(e){var t=e.author,a=(e.clean,e.colorize),r=e.groupBy,i=e.items,o=e.tags,l=e.timeline,s=r||"release",c=function(e){return e.map((function(e){if(e.content){var t=e.content,a=t.frontMatter,n=t.metadata,r=a.author_github,u=a.pr_numbers,i=a.release,o=a.title,l=n.date,s=n.description,c=n.permalink,m=n.tags,D={};return D.authorGithub=r,D.dateString=l,D.description=s,D.permalink=c,D.prNumbers=u,D.release=i,D.tags=m,D.title=o,D}return e}))}(i),m=_.groupBy(c,s),d=!1!==l?Object.keys(m):Object.keys(m).sort();return u.a.createElement("ul",{className:D()("connected-list","connected-list--clean")},d.map((function(e,r){var i=m[e];return u.a.createElement(u.a.Fragment,null,u.a.createElement(w,{groupBy:s,group:e}),u.a.createElement("ul",{className:D()("connected-list",{"connected-list--timeline":!1!==l})},i.map((function(e,r){return u.a.createElement("li",{key:r},u.a.createElement(g,Object(n.a)({},e,{colorize:a,hideAuthor:0==t,hideTags:0==o})))}))))})))}}}]);