"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[8936],{5893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(4848),a=r(8453),l=r(1470),s=r(9365);const i={},o="\ud83d\udc50 $limit",u={id:"simple-queries/limiting-results",title:"\ud83d\udc50 $limit",description:"\u5982\u679c\u6211\u4eec\u8fd4\u56de\u4e86\u592a\u591a\u7684\u6587\u6863\uff0c\u4f46\u6211\u4eec\u53ea\u5bf9\u5176\u4e2d\u7684\u4e00\u90e8\u5206\u611f\u5174\u8da3\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 $limit \u6765\u9650\u5236\u8fd4\u56de\u7684\u6587\u6863\u6570\u91cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/30-simple-queries/4-limiting-results.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/limiting-results",permalink:"/aggregation-pipeline-lab/zh/docs/simple-queries/limiting-results",draft:!1,unlisted:!1,editUrl:"https://github.com/toj11001/aggregation-pipeline-lab/blob/main/docs/30-simple-queries/4-limiting-results.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 $project",permalink:"/aggregation-pipeline-lab/zh/docs/simple-queries/project"},next:{title:"\ud83d\udc50 \u7ec4\u5408\u9636\u6bb5",permalink:"/aggregation-pipeline-lab/zh/docs/simple-queries/combining-them-all"}},c={},d=[];function p(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"-limit",children:"\ud83d\udc50 $limit"})}),"\n",(0,n.jsxs)(t.p,{children:["\u5982\u679c\u6211\u4eec\u8fd4\u56de\u4e86\u592a\u591a\u7684\u6587\u6863\uff0c\u4f46\u6211\u4eec\u53ea\u5bf9\u5176\u4e2d\u7684\u4e00\u90e8\u5206\u611f\u5174\u8da3\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"$limit"})," \u6765\u9650\u5236\u8fd4\u56de\u7684\u6587\u6863\u6570\u91cf\u3002"]}),"\n",(0,n.jsxs)(l.A,{groupId:"aggregations",children:[(0,n.jsx)(s.A,{value:"atlas",label:"Compass UI",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"[\n    { $limit: 1 }\n]\n"})})}),(0,n.jsx)(s.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"db.books.aggregate([{$limit: 1}])\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:"\u8fd9\u53ea\u8fd4\u56de\u4e00\u4e2a\u6587\u6863\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\ud83d\udc50 \u53ea\u8fd4\u56de 7 \u672c ",(0,n.jsx)(t.code,{children:"books"}),"\u3002"]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u7b54\u6848"}),(0,n.jsx)("div",{children:(0,n.jsxs)(l.A,{groupId:"aggregations",children:[(0,n.jsx)(s.A,{value:"atlas",label:"Compass UI",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"[\n    { $limit: 7 }\n]\n"})})}),(0,n.jsx)(s.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"db.books.aggregate([{$limit: 7}])\n"})})})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(8215);const a={tabItem:"tabItem_Ymn6"};var l=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),a=r(8215),l=r(3104),s=r(6347),i=r(205),o=r(7485),u=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=p(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,d]=h({queryString:r,groupId:a}),[b,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=u??b;return m({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),a=i[r].value;a!==n&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:l}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(6540);const a={},l=n.createContext(a);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);