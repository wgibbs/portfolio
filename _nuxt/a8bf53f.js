(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4,5],{198:function(t,e,l){"use strict";l.r(e);var r=l(36),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header"},[l("div",{staticClass:"container p-5 mx-auto flex flex-col md:flex-row items-center"},[t._m(0),t._v(" "),l("ul",{staticClass:"w-full md:w-1/2 mt-2 md:mt-0 flex flex-col md:flex-row items-center justify-center md:justify-end font-open-sans font-medium text-lg"},[l("li",{staticClass:"w-full md:w-auto mx-2"},[l("a",{staticClass:"p-2 flex items-center justify-center border-2 border-solid rounded hover:border-black focus:outline-none focus:border-black transition-all duration-300",attrs:{href:"https://github.com/wgibbs",target:"_blank"}},[t._v("\n          GitHub\n          "),l("svg",{staticClass:"h-6 w-6 ml-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}})])])]),t._v(" "),l("li",{staticClass:"w-full md:w-auto mx-2 mt-2 md:mt-0"},[l("a",{staticClass:"p-2 flex items-center justify-center border-2 border-solid w-full md:w-auto rounded hover:border-black focus:outline-none focus:border-black transition-all duration-300",attrs:{href:"https://www.linkedin.com/in/wes-gibbs-a311198/",target:"_blank"}},[t._v("\n          LinkedIn\n          "),l("svg",{staticClass:"h-6 w-6 ml-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}})])])]),t._v(" "),l("li",{staticClass:"w-full md:w-auto mx-2 mt-2 md:mt-0"},[l("a",{staticClass:"p-2 flex items-center justify-center border-2 border-solid w-full md:w-auto rounded hover:border-black focus:outline-none focus:border-black transition-all duration-300",attrs:{href:"/portfolio/pdf/resume.pdf",target:"_blank"}},[t._v("\n          Resume\n          "),l("svg",{staticClass:"h-6 w-6 ml-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}})])])])])]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"},[l("h1",{staticClass:"font-noto-sans font-bold text-4xl md:text-5xl"},[t._v("wes gibbs")]),t._v(" "),l("h2",{staticClass:"font-open-sans text-2xl md:text-3xl mt-1 md:mt-2"},[t._v("front-end developer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mx-auto"},[e("hr",{staticClass:"border border-black"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:l(198).default})},199:function(t,e,l){"use strict";l.r(e);var r=l(36),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container pt-10 pb-20 mx-auto"},[e("hr",{staticClass:"border border-black"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(199).default})},200:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{projects:[{title:"Job Posts App",description:"A single page application prototype for Job Posts built with Create React App, Material-UI and Fuse.js. I contributed UI/UX Design and front-end development.",img_url:"./img/job-posts-app.jpg",link_1_url:"https://www.wgibbs.com/job-posts-app/",link_2_url:"https://github.com/wgibbs/job-posts-app"},{title:"Photo Gallery App",description:"A single page application photo gallery created with Nuxt.js + Tailwind CSS and built to showcase some of my nature/outdoor photography. I contributed UI/UX Design and front-end development.",img_url:"./img/photo-gallery-app.jpg",link_1_url:"https://wgibbs.com/photo-gallery-app/",link_2_url:"https://github.com/wgibbs/photo-gallery-app"},{title:"MJML Email Builder",description:"A system incorporating MJML + Gulp to create fully responsive emails. The project example is a prototype email newsletter template I designed and developed to go along with my Photo Gallery.",img_url:"./img/mjml-email-builder.jpg",link_1_url:"https://www.wgibbs.com/mjml-email-builder-template-1/",link_2_url:"https://github.com/wgibbs/mjml-email-builder"}]}}},o=l(36),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"project-items"},[l("div",{staticClass:"container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"},t._l(t.projects,(function(e,r){return l("div",{staticClass:"border rounded p-5 flex flex-col"},[l("div",{staticClass:"border rounded bg-gray-200 flex-grow-0 p-3"},[l("img",{attrs:{src:e.img_url,alt:e.title}})]),t._v(" "),l("h2",{staticClass:"mt-5 text-2xl font-noto-sans"},[t._v(t._s(e.title))]),t._v(" "),l("hr",{staticClass:"border mt-2 w-24"}),t._v(" "),l("p",{staticClass:"mx-auto mt-2 flex-grow text-lg"},[t._v(t._s(e.description))]),t._v(" "),e.link_1_url?l("ul",{staticClass:"p-0 mt-5 flex flex-grow flex-col xl:flex-row items-center"},[l("li",{staticClass:"mr-0 xl:mr-2 w-full xl:w-1/2"},[l("a",{staticClass:"p-2 flex items-center justify-center border-2 border-solid rounded hover:border-black focus:outline-none focus:border-black font-open-sans font-medium text-lg transition-all duration-300",attrs:{"aria-label":"View the "+e.title+" Project",href:e.link_1_url,target:"_blank"}},[t._v("\n            View Project\n            "),l("svg",{staticClass:"h-6 w-6 ml-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}})])])]),t._v(" "),e.link_2_url?l("li",{staticClass:"mt-3 xl:mt-0 w-full xl:w-1/2"},[l("a",{staticClass:"p-2 flex items-center justify-center border-2 border-solid rounded hover:border-black focus:outline-none focus:border-black font-open-sans font-medium text-lg transition-all duration-300",attrs:{"aria-label":"Go to the "+e.title+" GitHub Repo",href:e.link_2_url,target:"_blank"}},[t._v("\n            GitHub Repo\n            "),l("svg",{staticClass:"h-6 w-6 ml-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}})])])]):t._e()]):t._e()])})),0)])}),[],!1,null,null,null);e.default=component.exports},201:function(t,e,l){"use strict";l.r(e);var r=l(36),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"introduction"},[l("div",{staticClass:"container py-7 px-5 mx-auto font-open-sans"},[l("h3",{staticClass:"font-semibold text-3xl text-center md:text-left"},[t._v("\n      Hello, and thanks for stopping by.\n    ")]),t._v(" "),l("p",{staticClass:"mt-2 font-normal text-lg md:text-xl text-center md:text-left"},[t._v("\n      I'm a front-end web developer who gravitates towards the visual side of the technology world. I specialize in building fully responsive microsites, landing pages and emails - primarily working with HTML, CSS/SCSS/Tailwind, MJML and JavaScript/React/Vue/jQuery.\n    ")]),t._v(" "),l("p",{staticClass:"mt-3 font-open-sans font-normal flex text-lg md:text-xl text-center md:text-left"},[t._v("\n      Please see below for some of my recent projects.\n    ")])])])}],!1,null,null,null);e.default=component.exports},202:function(t,e,l){"use strict";l.r(e);var r=l(36),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",{staticClass:"portfolio-main-container"},[l("Header"),t._v(" "),l("Intro"),t._v(" "),l("Projects"),t._v(" "),l("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:l(198).default,Intro:l(201).default,Projects:l(200).default,Footer:l(199).default})}}]);