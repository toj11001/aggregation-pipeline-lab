"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[5616],{569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=t(4848),r=t(8453),s=t(1470),l=t(9365);const i={},o="\ud83d\udc50 Adding New Fields to Results",d={id:"modifying-results/adding-fields",title:"\ud83d\udc50 Adding New Fields to Results",description:"$addFields",source:"@site/docs/80-modifying-results/adding-fields.mdx",sourceDirName:"80-modifying-results",slug:"/modifying-results/adding-fields",permalink:"/aggregation-pipeline-lab/docs/modifying-results/adding-fields",draft:!1,unlisted:!1,editUrl:"https://github.com/toj11001/aggregation-pipeline-lab/blob/main/docs/80-modifying-results/adding-fields.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modifying Results",permalink:"/aggregation-pipeline-lab/docs/category/modifying-results"},next:{title:"\ud83e\uddb8 Missing Data",permalink:"/aggregation-pipeline-lab/docs/modifying-results/missing-data"}},u={},c=[{value:"$addFields",id:"addfields",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"-adding-new-fields-to-results",children:"\ud83d\udc50 Adding New Fields to Results"})}),"\n",(0,a.jsx)(n.h2,{id:"addfields",children:"$addFields"}),"\n",(0,a.jsxs)(n.p,{children:["We want to estimate the reading time for a book. But we don't have that field stored in our data. We can use ",(0,a.jsx)(n.code,{children:"$addFields"})," for this. If the field exists, it'll get updated, and if it doesn't, it's added."]}),"\n",(0,a.jsxs)(s.A,{groupId:"aggregations",children:[(0,a.jsx)(l.A,{value:"atlas",label:"Compass UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'[\n    {$project: {\n        title: 1,\n        pages: 1,\n        }\n    },\n    {$addFields: {readingTimeHours: {$divide: [{$multiply: ["$pages", 2]}, 60]}}},\n]\n'})})}),(0,a.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n    {$project: {\n        title: 1,\n        pages: 1,\n        }\n    },\n    {$addFields: {readingTimeHours: {$divide: [{$multiply: ["$pages", 2]}, 60]}}},\n])\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\ud83d\udc50 Add a new field, ",(0,a.jsx)(n.code,{children:"notes"}),", that contains the text ",(0,a.jsx)(n.code,{children:"PLACEHOLDER"})," for all documents."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Answer"}),(0,a.jsx)("div",{children:(0,a.jsxs)(s.A,{groupId:"aggregations",children:[(0,a.jsx)(l.A,{value:"atlas",label:"Compass UI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'[\n    {$project: \n        {\n            title: 1,\n            pages: 1,\n        }\n    },\n    {$addFields: {notes: "PLACEHOLDER"}}\n]\n'})})}),(0,a.jsx)(l.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n    {$project: \n        {\n            title: 1,\n            pages: 1,\n        }\n    },\n    {$addFields: {notes: "PLACEHOLDER"}}\n])\n'})})})]})}),(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/operator/aggregation/set/#mongodb-pipeline-pipe.-set",children:"$set"})," is an alias for $addFields that you'll find on many older posts and documentation."]})})]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var a=t(8215);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),r=t(8215),s=t(3104),l=t(6347),i=t(205),o=t(7485),d=t(1682),u=t(679);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,c]=h({queryString:t,groupId:r}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=d??f;return g({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),m(e)}),[c,m,s]),tabValues:s}}var m=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=i[t].value;r!==a&&(d(n),l(r))},c=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:c,onClick:u,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,v.jsx)(y,{...e,children:c(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var a=t(6540);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);