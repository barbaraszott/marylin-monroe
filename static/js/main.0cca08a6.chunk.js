(this["webpackJsonpinsys-homework"]=this["webpackJsonpinsys-homework"]||[]).push([[0],{33:function(e,t,a){e.exports=a(52)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(0),o=a.n(r),c=a(13),i=a.n(c),l=a(11),s=a(28),u=a(9),m=(a(42),a(12)),p=a(8);a(43),a(44);var f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"user-photo"})),o.a.createElement("nav",{className:"navbar"},o.a.createElement(m.b,{exact:!0,to:"/",className:"navbar__link",activeClassName:"navbar__link--selected"},o.a.createElement("i",{className:"fas fa-user fa-lg"})),o.a.createElement(m.b,{to:"/gallery",className:"navbar__link",activeClassName:"navbar__link--selected"},o.a.createElement("i",{className:"far fa-image fa-lg"}))))};a(46);var h=function(){return Object(r.useEffect)((function(){document.title="Info | Marylin Monroe"})),o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"name"},"Marilyn Monroe"),o.a.createElement("span",{className:"localization"},"Poznan, PL"),o.a.createElement("section",{className:"description"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna condimentum mattis pellentesque. Interdum consectetur libero id faucibus nisl."),o.a.createElement("blockquote",{className:"description__quote"},"I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they\u2019re right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together."),o.a.createElement("p",null,"Adipiscing bibendum est ultricies integer quis. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Sapien pellentesque habitant morbi tristique senectus.")))},b=a(15),g=a(16),d=a(18),y=a(17),v=a(19),E=a(31),O=a.n(E),j=(a(47),a(48),function(e){function t(){return Object(b.a)(this,t),Object(d.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.link,a=e.imageSrc,n=e.title,r=e.author;return o.a.createElement("figure",{className:"photo-container"},o.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank",className:"photo-wrapper"},o.a.createElement("img",{src:a,alt:"".concat(n," by ").concat(r,". Click to open on Flickr"),className:"photo"})))}}]),t}(r.PureComponent)),k=a(32),w=a.n(k),N="PHOTOS_FETCHED",P={getDataFromAPI:function(){return function(e){var t=["marylin monroe"].join(),a="https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=".concat(t,"&tagmode=").concat("any");window.jsonFlickrFeed=function(t){var a=t.items.slice(0,9).map((function(e){return{title:e.title,author:e.author.match(/\("(.*)"\)/)[1],imageSrc:e.media.m,link:e.link}}));e({type:N,photos:a})},w()(a)}}},_=function(e){function t(){return Object(b.a)(this,t),Object(d.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.getDataFromAPI(),document.title="Gallery | Marylin Monroe"}},{key:"render",value:function(){return o.a.createElement("section",{className:"gallery"},this.props.photos.map((function(e){var t={link:e.link,imageSrc:e.imageSrc,title:e.title,author:e.author};return o.a.createElement(j,Object.assign({key:O()()},t))})))}}]),t}(r.Component),q=Object(u.b)((function(e){return{photos:e.photos}}),P)(_);var D=Object(u.b)()((function(){return o.a.createElement("div",{className:"app"},o.a.createElement(m.a,{basename:"/marylin-monroe"},o.a.createElement(f,null),o.a.createElement("main",{className:"main"},o.a.createElement(p.a,{exact:!0,path:"/",component:h}),o.a.createElement(p.a,{path:"/gallery",component:q}))))}));function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var S={photos:[]};var M=Object(l.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{photos:t.photos});default:return e}}),Object(l.a)(s.a)),C=document.getElementById("root");i.a.render(o.a.createElement(u.a,{store:M},o.a.createElement(D,null)),C)}},[[33,1,2]]]);
//# sourceMappingURL=main.0cca08a6.chunk.js.map