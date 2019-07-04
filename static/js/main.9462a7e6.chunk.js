(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),c=a.n(s),o=(a(18),a(10)),l=a(1),u=a.n(l),m=a(8),i=a(4),d=a(5),p=a(6),f=a(9),h=a(7),E=a(11),b=(a(20),"https://jsonplaceholder.typicode.com"),v=function(){return fetch("".concat(b,"/posts")).then(function(e){return e.json()})},_=function(){return fetch("".concat(b,"/users")).then(function(e){return e.json()})},y=function(){return fetch("".concat(b,"/comments")).then(function(e){return e.json()})},N=function(e){var t=e.comment;return r.a.createElement("section",{className:"post__comment"},r.a.createElement("span",{className:"comment__name"},r.a.createElement("a",{href:"#/"},t.name)),r.a.createElement("span",{className:"comment__body"},t.body),r.a.createElement("span",{className:"comment__email"},r.a.createElement("a",{href:"#/"},t.email)))},S=function(e){var t=e.comments;return r.a.createElement("section",{className:"post__comments"},t.map(function(e){return r.a.createElement(N,{comment:e,key:e.id})}))},g=function(e){var t=e.post;return r.a.createElement("section",{className:"post"},r.a.createElement("span",{className:"post__title"},t.title),r.a.createElement("span",{className:"post__author-name"},r.a.createElement("a",{href:"#/"},t.user.name)),r.a.createElement("span",{className:"post__body"},t.body),r.a.createElement("span",{className:"post__email"},r.a.createElement("a",{href:"#/"},t.user.email)),r.a.createElement("span",{className:"post__address"},r.a.createElement("a",{href:"#/"},t.user.address.city," ",t.user.address.street," ",t.user.address.suite)),r.a.createElement(S,{comments:t.comments}))},F=function(e){var t=e.posts;return r.a.createElement("div",{className:"postList"},t.map(function(e){return r.a.createElement(g,{post:e,key:e.id})}))},j=function(e){var t=e.searchFieldValue,a=e.updateSerachFieldValue;return r.a.createElement("input",{type:"search",className:"searchField",placeholder:"Search by title and text...",value:t,onChange:a,autoComplete:"off"})},w=function(e){var t=e.loadPosts,a=e.buttonStatus,n=e.errorText;return r.a.createElement("button",{type:"button",onClick:t,className:"loadPostsButton ".concat(n?"error":""),disabled:a},a||n?n?"Try Again":"Loading...":"Press Me")},x=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],isLoaded:!1,buttonStatus:!1,searchFieldValue:"",errorText:""},a.loadPosts=Object(i.a)(u.a.mark(function e(){var t,n,r,s,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({buttonStatus:!0,errorText:""}),e.prev=1,e.next=4,Promise.all([v(),_(),y()]);case 4:t=e.sent,n=Object(m.a)(t,3),r=n[0],s=n[1],c=n[2],a.setState({posts:a.groupAllData(r,s,c),isLoaded:!0}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),a.setState({isLoaded:!1,buttonStatus:!1,errorText:e.t0.message});case 15:case"end":return e.stop()}},e,null,[[1,12]])})),a.groupAllData=function(e,t,a){return e.map(function(e){return Object(o.a)({},e,{user:t.find(function(t){return e.userId===t.id}),comments:a.filter(function(t){return t.postId===e.id})})})},a.postToRender=function(e){var t=a.state.searchFieldValue.toLowerCase().replace(/(\s)/gm,"");if(t.trim())return a.state.posts.filter(function(e){return(e.title+e.body).replace(/(\s)/gm,"").toLowerCase().includes(t)})},a.updateSerachFieldValue=function(e){a.setState({searchFieldValue:e.target.value})},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.posts,a=e.isLoaded,n=e.errorText,s=e.buttonStatus,c=e.searchFieldValue,o=this.postToRender()||t;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"myFancyBlock"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{searchFieldValue:c,updateSerachFieldValue:this.updateSerachFieldValue}),r.a.createElement(F,{posts:o})):r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{errorText:n,loadPosts:this.loadPosts,buttonStatus:s}),r.a.createElement("div",{className:"error__message"},n))))}}]),t}(n.Component);c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9462a7e6.chunk.js.map