"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[3995],{6706:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=t(4848),r=t(8453),l=t(1470),a=t(9365);const s={},o="\ud83d\udc50 $project",c={id:"simple-queries/project",title:"\ud83d\udc50 $project",description:"Including fields in a projection",source:"@site/docs/30-simple-queries/3-project.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/project",permalink:"/aggregation-pipeline-lab/docs/simple-queries/project",draft:!1,unlisted:!1,editUrl:"https://github.com/toj11001/aggregation-pipeline-lab/blob/main/docs/30-simple-queries/3-project.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 $match",permalink:"/aggregation-pipeline-lab/docs/simple-queries/match"},next:{title:"\ud83d\udc50 $limit",permalink:"/aggregation-pipeline-lab/docs/simple-queries/limiting-results"}},d={},u=[{value:"Including fields in a projection",id:"including-fields-in-a-projection",level:2},{value:"Excluding fields",id:"excluding-fields",level:2},{value:"Including and excluding fields",id:"including-and-excluding-fields",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-project",children:"\ud83d\udc50 $project"})}),"\n",(0,i.jsx)(n.h2,{id:"including-fields-in-a-projection",children:"Including fields in a projection"}),"\n",(0,i.jsxs)(n.p,{children:["A document from the ",(0,i.jsx)(n.code,{children:"books"})," collection looks like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  _id: '0395623650',\n  title: 'Platero y yo / Platero and I (Spanish-English Bilingual Edition) (English and Spanish Edition)',\n  authors: [\n    {\n      _id: '64cc2db4830ba29148db5180',\n      name: 'Juan Ram\xf3n Jim\xe9nez'\n    }\n  ],\n  pages: 64,\n  year: 1994,\n  synopsis: 'Selections from a classic of world literature present a picture of life in the town of Moguer, in Andalusia, Spain.\\n' +\n    '\\n' +\n    '\\n' +\n    '                        Presents a picture of life in the town of Moguer, in Andalusia, Spain, as seen through the eyes of a wandering poet and his faithful donkey.\\n',\n  cover: 'https://images.isbndb.com/covers/36/57/9780395623657.jpg',\n  attributes: [\n    {\n      key: 'edition',\n      value: 'F First Edition Thus'\n    },\n    {\n      key: 'dimensions',\n      value: 'Height: 10.499979 Inches, Length: 6.999986 Inches, Weight: 2.0502990366 Pounds, Width: 0.12499975 Inches'\n    },\n    {\n      key: 'isbn13',\n      value: '9780395623657'\n    },\n    {\n      key: 'msrp',\n      value: 1.99\n    },\n    {\n      key: 'isbn',\n      value: '0395623650'\n    },\n    {\n      key: 'isbn10',\n      value: '0395623650'\n    }\n  ],\n  totalInventory: 1,\n  available: 1,\n  binding: 'Hardcover',\n  language: 'en',\n  longTitle: 'Platero y yo / Platero and I (Spanish-English Bilingual Edition) (English and Spanish Edition)',\n  publisher: 'Clarion Books'\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If we're interested in the titles, we can use ",(0,i.jsx)(n.code,{children:"$project"})," to select just the fields we're interested in. As an example, to get just the book's title and year, we'll write:"]}),"\n",(0,i.jsxs)(l.A,{groupId:"aggregations",children:[(0,i.jsx)(a.A,{value:"atlas",label:"Compass UI",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"[\n  {\n    $project: { title: 1, year: 1 }\n  }\n]\n"})})}),(0,i.jsx)(a.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([\n  {\n    $project: { title: 1, year: 1 }\n  }\n])\n"})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'1 means "show that field.". Once you started an inclusion projection you can\'t exclude other fields (you just keep adding the fields you want to see)'}),"\n",(0,i.jsx)(n.li,{children:"0 means \"hide that field.\". Once you started an exclusion projection you can't include other fields (you just keep adding the fields you don't want to see)"}),"\n",(0,i.jsxs)(n.li,{children:["The primary key ",(0,i.jsx)(n.code,{children:"_id"})," field is shown by default."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["So we can exclude fields and show all fields except ",(0,i.jsx)(n.code,{children:"attributes"})," using:"]}),"\n",(0,i.jsxs)(l.A,{groupId:"aggregations",children:[(0,i.jsx)(a.A,{value:"atlas",label:"Compass UI",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"[\n  {\n    $project: { attributes: 0 }\n  }\n]\n"})})}),(0,i.jsx)(a.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([\n  {\n    $project: { attributes: 0 }\n  }\n])\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udc50 Show only ",(0,i.jsx)(n.code,{children:"title"})," and ",(0,i.jsx)(n.code,{children:"cover"}),"."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Answer"}),(0,i.jsx)("div",{children:(0,i.jsxs)(l.A,{groupId:"aggregations",children:[(0,i.jsx)(a.A,{value:"atlas",label:"Compass UI",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"[\n  {\n    $project: { title: 1, cover: 1 }\n  }\n]\n"})})}),(0,i.jsx)(a.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([\n  {\n    $project: { title: 1, cover: 1 }\n  }\n])\n"})})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"excluding-fields",children:"Excluding fields"}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udc50 Exclude the ",(0,i.jsx)(n.code,{children:"cover"}),", ",(0,i.jsx)(n.code,{children:"attributes"}),", and ",(0,i.jsx)(n.code,{children:"_id"})," fields from the result."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Answer"}),(0,i.jsx)("div",{children:(0,i.jsxs)(l.A,{groupId:"aggregations",children:[(0,i.jsx)(a.A,{value:"atlas",label:"Compass UI",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"[\n  {\n    $project: {_id: 0, attributes: 0, cover: 0}\n  }\n]\n"})})}),(0,i.jsx)(a.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$project: {_id: 0, attributes: 0, cover: 0}}])\n"})})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"including-and-excluding-fields",children:"Including and excluding fields"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"You can't include and exclude fields in the same projection. If you start including, you must keep including, and vice versa."})}),"\n",(0,i.jsx)(n.p,{children:"For instance, this will fail:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$project: {title: 1, attributes: 0}}])\n\nMongoServerError: Invalid $project :: caused by :: Cannot do exclusion on field attributes in inclusion projection\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The only exception to this rule is the ",(0,i.jsx)(n.code,{children:"_id"})," field, which we can exclude in an inclusion projection."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$project: {title: 1, _id: 0}}])\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var i=t(8215);const r={tabItem:"tabItem_Ymn6"};var l=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(6540),r=t(8215),l=t(3104),a=t(6347),s=t(205),o=t(7485),c=t(1682),d=t(679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[a,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:l}))),[c,u]=g({queryString:t,groupId:r}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),b=(()=>{const e=c??j;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function x(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==i&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const r={},l=i.createContext(r);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);