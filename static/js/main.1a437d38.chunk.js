(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/launch-home@2x.b7cae1c6.png"},2:function(e,t,a){e.exports=a.p+"static/media/launch-home.23a1b6b8.png"},20:function(e,t,a){e.exports=a.p+"static/media/launch-home@3x.59668b51.png"},21:function(e,t,a){e.exports=a.p+"static/media/spacex-logo.950ba665.png"},24:function(e,t,a){e.exports=a(53)},29:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=(a(29),a(14)),s=a(15),i=a(16),u=a(22),m=a(17),h=a(23),d=a(18),p=a.n(d),f=a(3);function g(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=function(e){if(Array.isArray(e)&&e.length)return Math.min.apply(Math,Object(f.a)(e))}(e),n=function(e){if(Array.isArray(e)&&e.length)return Math.max.apply(Math,Object(f.a)(e))}(e),r=[],c=a;c<=n;c+=t)r.push(c);return r}a(47);var b=a(2),E=a.n(b),y=a(19),v=a.n(y),w=a(20),N=a.n(w);var D=function(e){var t="".concat(E.a,", ").concat(v.a," 2x, ").concat(N.a," 3x");return r.a.createElement("section",{className:"image-decoration"},r.a.createElement("img",{srcSet:t,src:E.a,alt:""}))};a(48);var _=function(e){var t=["icon"],a=null;switch(e.type.toLowerCase()){case"arrowdown":t.push("icon--arrowdown"),a=r.a.createElement(n.Fragment,null,r.a.createElement("path",{d:"M7 10l5 5 5-5z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}));break;case"refresh":t.push("icon--refresh"),a=r.a.createElement(n.Fragment,null,r.a.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}));break;case"sort":t.push("icon--sort"),a=r.a.createElement(n.Fragment,null,r.a.createElement("path",{d:"M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}));break;default:return a}return r.a.createElement("svg",{className:t.join(" "),viewBox:"0 0 24 24","aria-hidden":"true"},a)};a(49);var k=function(e){var t=e.flight_number,a=e.launch_date_utc,n=e.mission_name,c=e.rocket_name;return r.a.createElement("li",null,r.a.createElement("span",{className:"flight-number"},"#",t),r.a.createElement("h2",{className:"mission-name"},n),r.a.createElement("h3",{className:"rocket-name"},r.a.createElement("span",{className:"visually-hidden"},"Rocket name"),c),r.a.createElement("p",{className:"launch-date"},r.a.createElement("time",{dateTime:a},function(e){var t=new Date(e);if(Number.isNaN(t.getTime()))return null;var a=t.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}).split(" ");return a[0]=function(e){switch(e.slice(-1)){case"1":return"".concat(e,"st");case"2":return"".concat(e,"nd");case"3":return"".concat(e,"rd");default:return"".concat(e,"th")}}(a[0]),a.join(" ")}(a))))};a(50);var O=function(e){var t=e.byYear,a=e.data,c=e.sortDescending,l=a.filter(function(e){return"none"===t||e.launch_year===t});c&&l.reverse();var o=r.a.createElement("p",{className:"data-message"},a.length?"There are no results for ".concat(t,"."):"Retrieving launch data..."),s=r.a.createElement("ul",{className:"launch-data"},l.map(function(e){return r.a.createElement(k,Object.assign({key:"".concat(e.flight_number,"-").concat(e.mission_name.replace(/\s/g,"-"))},e))}));return r.a.createElement(n.Fragment,null,l.length?s:o)};a(51);var j=function(e){var t=e.changedSort,a=e.changedYear,n=e.disabled,c=e.sortDescending,l=e.years,o=["button"];n&&o.push("button--disabled");var s=o.join(" ");return r.a.createElement("form",{className:"list-controls",action:"/"},r.a.createElement("p",{className:"select-wrapper"},r.a.createElement("label",{className:s,htmlFor:"filter_year"},r.a.createElement("span",{className:"visually-hidden"},"Filter by year"),r.a.createElement("select",{id:"filter_year",onChange:a,disabled:n},r.a.createElement("option",{value:"none"},"Filter by Year"),(l||[]).map(function(e){return r.a.createElement("option",{key:e,value:e},e)})),r.a.createElement(_,{type:"arrowdown"}))),r.a.createElement("p",{className:"sort-toggle"},r.a.createElement("input",{id:"filter_sort_descending",name:"filter_sort_descending",type:"checkbox",onChange:t,disabled:n}),r.a.createElement("label",{className:s,htmlFor:"filter_sort_descending"},r.a.createElement("span",{className:"label-text"},c?"Sort Ascending":"Sort Descending"),r.a.createElement(_,{type:"sort"}))))},S=a(21),x=a.n(S);a(52);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var M="https://api.spacexdata.com/v3/launches",Y=["flight_number","mission_name","launch_date_utc","launch_year","rocket/rocket_name"];var B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={filterBySortDescending:!1,filterByYear:"none",launchData:[],loading:!0},a.handleGetData=function(){p.a.get(M,{params:{filter:Y.join(","),timestamp:(new Date).getTime()}}).then(function(e){var t=e.data.reduce(function(e,t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,{rocket_name:t.rocket.rocket_name});return delete a.rocket,e.concat(a)},[]);a.setState({launchData:t,loading:!1})}).catch(function(e){console.log(e),a.setState({loading:!1})})},a.handleRefreshData=function(){a.setState({launchData:[],loading:!0}),a.handleGetData()},a.handleChangedYear=function(e){a.setState({filterByYear:e.target.value})},a.handleChangedSort=function(e){a.setState({filterBySortDescending:e.target.checked})},a.handleGetData(),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.launchData,a=e.filterBySortDescending,n=e.filterByYear,c=t.map(function(e){return e.launch_year}),l=g(c.reduce(function(e,t){return e.includes(t)||e.push(t),e},[])),o=["button","button--rounded"];return t.length||o.push("button--disabled"),r.a.createElement("div",{className:"App"},r.a.createElement("a",{className:"skip-link",href:"#main"},"Skip to main content"),r.a.createElement("header",{className:"constrain-width"},r.a.createElement("h1",{className:"logo"},r.a.createElement("img",{src:x.a,alt:""}),r.a.createElement("span",{className:"visually-hidden"},"SpaceX")," Launches"),r.a.createElement("p",{className:"refresh-control"},r.a.createElement("button",{className:o.join(" "),disabled:!t.length,onClick:this.handleRefreshData},"Reload Data",r.a.createElement(_,{type:"refresh"})))),r.a.createElement("main",{id:"main",className:"main-layout constrain-width"},r.a.createElement(j,{changedYear:this.handleChangedYear,changedSort:this.handleChangedSort,disabled:!t.length,sortDescending:a,years:l}),r.a.createElement(O,{data:t,byYear:n,sortDescending:a}),r.a.createElement(D,null)))}}]),t}(n.Component);l.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1a437d38.chunk.js.map