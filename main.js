!function(t){var n={};function o(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,n,i){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)o.d(i,s,function(n){return t[n]}.bind(null,s));return i},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=0)}([function(t,n,o){"use strict";o(1);var i=function(t){return t&&t.__esModule?t:{default:t}}(o(3));o(4);if(!("IntersectionObserver"in window)){var s=document.createElement("script");s.src="https://raw.githubusercontent.com/w3c/IntersectionObserver/master/polyfill/intersection-observer.js",document.getElementsByTagName("head")[0].appendChild(s)}window.onload=function(){var t=(0,i.default)();t.observe(),document.querySelectorAll(".lozad").forEach(function(n,o){t.triggerLoad(n)}),document.querySelectorAll(".video-ctrl").forEach(function(t){var n=t.getAttribute("target"),o=document.getElementById(n);t.onclick=function(){o.paused?(o.play(),t.innerHTML="stop video"):(o.pause(),t.innerHTML="play video")},o.autoplay?t.innerHTML="stop video":t.innerHTML="play video"}),document.querySelectorAll(".animate").forEach(function(t){t.classList.add("in")})}},function(t,n,o){},,function(t,n,o){
/*! lozad.js - v1.14.0 - 2019-10-19
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
t.exports=function(){"use strict";var t="undefined"!=typeof document&&document.documentMode,n={rootMargin:"0px",threshold:0,load:function(n){if("picture"===n.nodeName.toLowerCase()){var o=document.createElement("img");t&&n.getAttribute("data-iesrc")&&(o.src=n.getAttribute("data-iesrc")),n.getAttribute("data-alt")&&(o.alt=n.getAttribute("data-alt")),n.append(o)}if("video"===n.nodeName.toLowerCase()&&!n.getAttribute("data-src")&&n.children){for(var i=n.children,s=void 0,e=0;e<=i.length-1;e++)(s=i[e].getAttribute("data-src"))&&(i[e].src=s);n.load()}if(n.getAttribute("data-src")&&(n.src=n.getAttribute("data-src")),n.getAttribute("data-srcset")&&n.setAttribute("srcset",n.getAttribute("data-srcset")),n.getAttribute("data-background-image"))n.style.backgroundImage="url('"+n.getAttribute("data-background-image").split(",").join("'),url('")+"')";else if(n.getAttribute("data-background-image-set")){var c=n.getAttribute("data-background-image-set").split(","),g=c[0].substr(0,c[0].indexOf(" "))||c[0];g=-1===g.indexOf("url(")?"url("+g+")":g,1===c.length?n.style.backgroundImage=g:n.setAttribute("style",(n.getAttribute("style")||"")+"background-image: "+g+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}n.getAttribute("data-toggle-class")&&n.classList.toggle(n.getAttribute("data-toggle-class"))},loaded:function(){}};function o(t){t.setAttribute("data-loaded",!0)}var i=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var t,s,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},g=Object.assign({},n,c),p=g.root,r=g.rootMargin,a=g.threshold,u=g.load,m=g.loaded,f=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(f=new IntersectionObserver((t=u,s=m,function(n,e){n.forEach(function(n){(0<n.intersectionRatio||n.isIntersecting)&&(e.unobserve(n.target),i(n.target)||(t(n.target),o(n.target),s(n.target)))})}),{root:p,rootMargin:r,threshold:a})),{observe:function(){for(var t=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:n.querySelectorAll(t)}(e,p),n=0;n<t.length;n++)i(t[n])||(f?f.observe(t[n]):(u(t[n]),o(t[n]),m(t[n])))},triggerLoad:function(t){i(t)||(u(t),o(t),m(t))},observer:f}}}()},function(t,n,o){var i={"./docs/Renoj_Varghese_Resume.pdf":5,"./docs/VargheseRenoj2021.pdf":6,"./docs/gaship-dmd-renoj.pdf":7,"./docs/gaship-tgs-supplemental.pdf":8,"./docs/resume copy 10.pdf":9,"./docs/resume_renoj_varghese-2.pdf":10,"./docs/resume_renoj_varghese.pdf":11,"./docs/transcript-renoj-varghese.pdf":12,"./docs/transcript_renoj_varghese.pdf":13,"./img/glassdoor/icon.png":14,"./img/govcontact/briana-message.png":15,"./img/govcontact/briana-terry-flow.png":16,"./img/govcontact/briana.png":17,"./img/govcontact/briana_terry_flow.png":18,"./img/govcontact/competitive-analysis-2.png":19,"./img/govcontact/competitive-analysis.png":20,"./img/govcontact/current-design-2.png":21,"./img/govcontact/current-design.png":22,"./img/govcontact/deep-dive-feed.png":23,"./img/govcontact/deep-dive-message.png":24,"./img/govcontact/deep-dive-rep.png":25,"./img/govcontact/final-feed.png":26,"./img/govcontact/final-rep.png":27,"./img/govcontact/first-prototype.png":28,"./img/govcontact/gc-feed.mp4":29,"./img/govcontact/gc-hero-large.png":30,"./img/govcontact/gc-hero-small.png":31,"./img/govcontact/gc-mess-1.mp4":32,"./img/govcontact/gc-rep.mp4":33,"./img/govcontact/icon.png":34,"./img/govcontact/learning-flow-2.png":35,"./img/govcontact/learning-flow.png":36,"./img/govcontact/onboarding-flow.png":37,"./img/govcontact/onboarding.png":38,"./img/govcontact/rep-profile.png":39,"./img/govcontact/rep-profiles-2.png":40,"./img/govcontact/results.png":41,"./img/govcontact/second-prototype.png":42,"./img/govcontact/single-page-layout.png":43,"./img/govcontact/sol-1.png":44,"./img/govcontact/sol-2.png":45,"./img/govcontact/sol-3.png":46,"./img/govcontact/terry-message.png":47,"./img/govcontact/terry.png":48,"./img/govcontact/user-flow.png":49,"./img/govcontact/user-stories.png":50,"./img/govcontact/visual-design.png":51,"./img/govcontact/visual_design.png":52,"./img/govcontact/wireframe.png":53,"./img/govcontact/wireframes.png":54,"./img/husky/color palette.png":55,"./img/husky/complete-module-study.jpg":56,"./img/husky/contact-nurses.jpg":57,"./img/husky/design.png":58,"./img/husky/green.png":59,"./img/husky/information architecture_v1.png":60,"./img/husky/information_architecture.png":61,"./img/husky/mockup.png":62,"./img/husky/orange.png":63,"./img/husky/original-ui.png":64,"./img/husky/profile/ejm.jpg":65,"./img/husky/profile/jb.jpg":66,"./img/husky/profile/ne.jpg":67,"./img/husky/profile/rv.jpg":68,"./img/husky/profile/sb.png":69,"./img/husky/profile/sm.png":70,"./img/husky/profile/tm.jpg":71,"./img/husky/profile/yh.jpg":72,"./img/husky/user-flow.png":73,"./img/husky/user-flow–goal-activity.png":74,"./img/husky/user-flow–goal-checkin.png":75,"./img/husky/visual-design.jpg":76,"./img/husky/visual-exploration.png":77,"./img/jobhunting/final-stills.png":78,"./img/jobhunting/icon.png":79,"./img/jobhunting/storyboard-1.png":80,"./img/jobhunting/storyboard-2.png":81,"./img/jobhunting/storyboards.png":82,"./img/jobhunting/style-frame.png":83,"./img/jobhunting/wireframe-style.png":84,"./img/sanskriti/color.png":85,"./img/sanskriti/final.png":86,"./img/sanskriti/icon.png":87,"./img/sanskriti/results.png":88,"./img/sanskriti/shape.png":89,"./img/sanskriti/sol-1.png":90,"./img/sanskriti/typeface.png":91,"./img/sanskriti/visual-research.png":92,"./img/subconscious/ab-test.png":93,"./img/subconscious/donate-grid copy.png":94,"./img/subconscious/donate-grid.png":95,"./img/subconscious/donate-percent.png":96,"./img/subconscious/get-help.png":97,"./img/subconscious/home copy.png":98,"./img/subconscious/home-search.png":99,"./img/subconscious/icon.png":100,"./img/subconscious/mockups.png":101,"./img/subconscious/mural-header.png":102,"./img/subconscious/our-story-copy-2.png":103,"./img/subconscious/our-story-copy.png":104,"./img/subconscious/persona-journey-map-subsconsious.pdf":105,"./img/subconscious/personas-maps.png":106,"./img/subconscious/results.png":107,"./img/subconscious/sketches.png":108,"./img/subconscious/sol-1.png":109,"./img/subconscious/sol-2.png":110,"./img/subconscious/sol-3.png":111,"./img/subconscious/story.png":112,"./img/subconscious/test-a.png":113,"./img/subconscious/test-b.png":114};function s(t){var n=e(t);return o(n)}function e(t){var n=i[t];if(!(n+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return n}s.keys=function(){return Object.keys(i)},s.resolve=e,t.exports=s,s.id=4},function(t,n,o){t.exports=o.p+"static/docs/Renoj_Varghese_Resume.pdf"},function(t,n,o){t.exports=o.p+"static/docs/VargheseRenoj2021.pdf"},function(t,n,o){t.exports=o.p+"static/docs/gaship-dmd-renoj.pdf"},function(t,n,o){t.exports=o.p+"static/docs/gaship-tgs-supplemental.pdf"},function(t,n,o){t.exports=o.p+"static/docs/resume copy 10.pdf"},function(t,n,o){t.exports=o.p+"static/docs/resume_renoj_varghese-2.pdf"},function(t,n,o){t.exports=o.p+"static/docs/resume_renoj_varghese.pdf"},function(t,n,o){t.exports=o.p+"static/docs/transcript-renoj-varghese.pdf"},function(t,n,o){t.exports=o.p+"static/docs/transcript_renoj_varghese.pdf"},function(t,n,o){t.exports=o.p+"static/img/glassdoor/icon.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/briana-message.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/briana-terry-flow.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/briana.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/briana_terry_flow.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/competitive-analysis-2.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/competitive-analysis.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/current-design-2.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/current-design.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/deep-dive-feed.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/deep-dive-message.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/deep-dive-rep.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/final-feed.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/final-rep.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/first-prototype.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/gc-feed.mp4"},function(t,n,o){t.exports=o.p+"static/img/govcontact/gc-hero-large.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/gc-hero-small.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/gc-mess-1.mp4"},function(t,n,o){t.exports=o.p+"static/img/govcontact/gc-rep.mp4"},function(t,n,o){t.exports=o.p+"static/img/govcontact/icon.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/learning-flow-2.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/learning-flow.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/onboarding-flow.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/onboarding.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/rep-profile.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/rep-profiles-2.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/results.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/second-prototype.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/single-page-layout.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/sol-1.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/sol-2.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/sol-3.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/terry-message.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/terry.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/user-flow.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/user-stories.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/visual-design.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/visual_design.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/wireframe.png"},function(t,n,o){t.exports=o.p+"static/img/govcontact/wireframes.png"},function(t,n,o){t.exports=o.p+"static/img/husky/color palette.png"},function(t,n,o){t.exports=o.p+"static/img/husky/complete-module-study.jpg"},function(t,n,o){t.exports=o.p+"static/img/husky/contact-nurses.jpg"},function(t,n,o){t.exports=o.p+"static/img/husky/design.png"},function(t,n,o){t.exports=o.p+"static/img/husky/green.png"},function(t,n,o){t.exports=o.p+"static/img/husky/information architecture_v1.png"},function(t,n,o){t.exports=o.p+"static/img/husky/information_architecture.png"},function(t,n,o){t.exports=o.p+"static/img/husky/mockup.png"},function(t,n,o){t.exports=o.p+"static/img/husky/orange.png"},function(t,n,o){t.exports=o.p+"static/img/husky/original-ui.png"},function(t,n,o){t.exports=o.p+"static/img/husky/profile/ejm.jpg"},function(t,n,o){t.exports=o.p+"static/img/husky/profile/jb.jpg"},function(t,n,o){t.exports=o.p+"static/img/husky/profile/ne.jpg"},function(t,n,o){t.exports=o.p+"static/img/husky/profile/rv.jpg"},function(t,n,o){t.exports=o.p+"static/img/husky/profile/sb.png"},function(t,n,o){t.exports=o.p+"static/img/husky/profile/sm.png"},function(t,n,o){t.exports=o.p+"static/img/husky/profile/tm.jpg"},function(t,n,o){t.exports=o.p+"static/img/husky/profile/yh.jpg"},function(t,n,o){t.exports=o.p+"static/img/husky/user-flow.png"},function(t,n,o){t.exports=o.p+"static/img/husky/user-flow–goal-activity.png"},function(t,n,o){t.exports=o.p+"static/img/husky/user-flow–goal-checkin.png"},function(t,n,o){t.exports=o.p+"static/img/husky/visual-design.jpg"},function(t,n,o){t.exports=o.p+"static/img/husky/visual-exploration.png"},function(t,n,o){t.exports=o.p+"static/img/jobhunting/final-stills.png"},function(t,n,o){t.exports=o.p+"static/img/jobhunting/icon.png"},function(t,n,o){t.exports=o.p+"static/img/jobhunting/storyboard-1.png"},function(t,n,o){t.exports=o.p+"static/img/jobhunting/storyboard-2.png"},function(t,n,o){t.exports=o.p+"static/img/jobhunting/storyboards.png"},function(t,n,o){t.exports=o.p+"static/img/jobhunting/style-frame.png"},function(t,n,o){t.exports=o.p+"static/img/jobhunting/wireframe-style.png"},function(t,n,o){t.exports=o.p+"static/img/sanskriti/color.png"},function(t,n,o){t.exports=o.p+"static/img/sanskriti/final.png"},function(t,n,o){t.exports=o.p+"static/img/sanskriti/icon.png"},function(t,n,o){t.exports=o.p+"static/img/sanskriti/results.png"},function(t,n,o){t.exports=o.p+"static/img/sanskriti/shape.png"},function(t,n,o){t.exports=o.p+"static/img/sanskriti/sol-1.png"},function(t,n,o){t.exports=o.p+"static/img/sanskriti/typeface.png"},function(t,n,o){t.exports=o.p+"static/img/sanskriti/visual-research.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/ab-test.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/donate-grid copy.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/donate-grid.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/donate-percent.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/get-help.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/home copy.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/home-search.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/icon.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/mockups.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/mural-header.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/our-story-copy-2.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/our-story-copy.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/persona-journey-map-subsconsious.pdf"},function(t,n,o){t.exports=o.p+"static/img/subconscious/personas-maps.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/results.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/sketches.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/sol-1.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/sol-2.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/sol-3.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/story.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/test-a.png"},function(t,n,o){t.exports=o.p+"static/img/subconscious/test-b.png"}]);