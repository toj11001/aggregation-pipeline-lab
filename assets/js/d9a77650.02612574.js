"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[7318],{6360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(4848),o=n(8453),r=n(1470),s=n(9365);const l={},i="\ud83d\udc50 $count",c={id:"counting-sorting/counting-documents",title:"\ud83d\udc50 $count",description:"How can we be sure that this pipeline is returning exactly 15 books?",source:"@site/docs/50-counting-sorting/1-counting-documents.mdx",sourceDirName:"50-counting-sorting",slug:"/counting-sorting/counting-documents",permalink:"/aggregation-pipeline-lab/docs/counting-sorting/counting-documents",draft:!1,unlisted:!1,editUrl:"https://github.com/toj11001/aggregation-pipeline-lab/blob/main/docs/50-counting-sorting/1-counting-documents.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Counting and Sorting",permalink:"/aggregation-pipeline-lab/docs/category/counting-and-sorting"},next:{title:"\ud83d\udc50 Sorting",permalink:"/aggregation-pipeline-lab/docs/counting-sorting/sorting"}},u={},d=[{value:"The order of stages is important",id:"the-order-of-stages-is-important",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"-count",children:"\ud83d\udc50 $count"})}),"\n",(0,a.jsx)(t.p,{children:"How can we be sure that this pipeline is returning exactly 15 books?"}),"\n",(0,a.jsxs)(r.A,{groupId:"aggregations",children:[(0,a.jsx)(s.A,{value:"atlas",label:"Compass UI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"[\n    {$match: {$and: [{year: 1985}, {pages: {$gte: 150}}]}},\n    {$project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1}},\n    {$limit: 15}\n]\n"})})}),(0,a.jsx)(s.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"let moreThan150pages =  {pages: {$gte: 150}}\nlet booksFrom1985WithMoreThan150pages = {$match: {$and: [{year: 1985}, moreThan150pages]}};\nlet showOnlyTheseFields = {$project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1}};\nlet getJust15books =  {$limit: 15};\n\ndb.books.aggregate([\n    booksFrom1985WithMoreThan150pages,\n    showOnlyTheseFields,\n    getJust15books,\n]);\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"By counting the books! Let's add a new stage to the pipeline to count those books:"}),"\n",(0,a.jsxs)(r.A,{groupId:"aggregations",children:[(0,a.jsx)(s.A,{value:"atlas",label:"Compass UI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'[\n    {$match: {$and: [{year: 1985}, {pages: {$gte: 150}} ]}},\n    {$project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1}},\n    {$limit: 15},\n    {$count: "totalBooks"},\n]\n'})})}),(0,a.jsx)(s.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'let moreThan150pages =  {pages: {$gte: 150}}\nlet booksFrom1985WithMoreThan150pages = {$match: {$and: [{year: 1985}, moreThan150pages]}};\nlet showOnlyTheseFields = {$project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1}};\nlet getJust15books =  {$limit: 15};\nlet count = {$count: "totalBooks"}\n\ndb.books.aggregate([\n    booksFrom1985WithMoreThan150pages,\n    showOnlyTheseFields,\n    getJust15books,\n    count,\n]);\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:["Here, ",(0,a.jsx)(t.code,{children:"$count"})," will count the resulting docs and will return a document with just one field: ",(0,a.jsx)(t.code,{children:"totalBooks"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"{\n  totalBooks: 15\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\ud83d\udc50 How many authors do we have in our ",(0,a.jsx)(t.code,{children:"authors"})," collection?"]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Answer"}),(0,a.jsx)("div",{children:(0,a.jsxs)(r.A,{groupId:"aggregations",children:[(0,a.jsx)(s.A,{value:"atlas",label:"Compass UI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'[ {$count: "authorCount"} ]\n'})})}),(0,a.jsx)(s.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'db.authors.aggregate([{$count: "authorCount"}])\n'})})})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"the-order-of-stages-is-important",children:"The order of stages is important"}),"\n",(0,a.jsxs)(t.p,{children:["If we count after the ",(0,a.jsx)(t.code,{children:"$match"})," stage, the document we're passing to the next steps contains only the ",(0,a.jsx)(t.code,{children:"totalBooks"})," field. So the ",(0,a.jsx)(t.code,{children:"$project"})," stage will return an empty document."]}),"\n",(0,a.jsxs)(r.A,{groupId:"aggregations",children:[(0,a.jsx)(s.A,{value:"atlas",label:"Compass UI",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'[\n    {$match: {$and: [{year: 1985}, {pages: {$gte: 150}} ]}},\n    {$count: "totalBooks"},\n    {$project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1}},\n    {$limit: 15},\n]\n'})})}),(0,a.jsx)(s.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'let moreThan150pages =  {pages: {$gte: 150}}\nlet booksFrom1985WithMoreThan150pages = {$match: {$and: [{year: 1985}, moreThan150pages]}};\nlet showOnlyTheseFields = {$project: {_id: 0, title: 1, year: 1, totalInventory: 1, available: 1}};\nlet getJust15books =  {$limit: 15};\nlet count = {$count: "totalBooks"}\n\ndb.books.aggregate([\n    booksFrom1985WithMoreThan150pages,\n    count,\n    showOnlyTheseFields,\n    getJust15books,\n]);\n'})})})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(8215);const o={tabItem:"tabItem_Ymn6"};var r=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(6540),o=n(8215),r=n(3104),s=n(6347),l=n(205),i=n(7485),c=n(1682),u=n(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=p({queryString:n,groupId:o}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,u.Dv)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),f=(()=>{const e=c??m;return g({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),o=l[n].value;o!==a&&(c(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,j.jsx)(x,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(6540);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);