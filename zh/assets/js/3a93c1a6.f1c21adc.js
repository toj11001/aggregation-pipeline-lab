"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[8482],{5350:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=o(4848),i=o(8453);const t={},r="\ud83d\udc50 Lookup \u53c8\u540d Left Outer Join\uff08\u5916\u8fde\u63a5\uff09",l={id:"lookups/lookups",title:"\ud83d\udc50 Lookup \u53c8\u540d Left Outer Join\uff08\u5916\u8fde\u63a5\uff09",description:"\u4f7f\u7528\u6587\u6863\u65f6\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7\u5d4c\u5165\u6587\u6863\u5230\u5176\u4ed6\u6587\u6863\u4e2d\u6765\u5efa\u6a211\u591a\u7684\u5173\u7cfb\uff0c\u751a\u81f3\u4f7f\u7528\u6570\u7ec4\u6765\u5b9e\u73b0\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u4f5c\u8005\u53ef\u4ee5\u6709\u5f88\u591a\u522b\u540d\uff0c\u8fd9\u4e9b\u522b\u540d\u5b58\u50a8\u5728authors\u96c6\u5408\u7684\u4e00\u4e2a\u6570\u7ec4\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/60-lookups/1-lookups.mdx",sourceDirName:"60-lookups",slug:"/lookups/lookups",permalink:"/aggregation-pipeline-lab/zh/docs/lookups/lookups",draft:!1,unlisted:!1,editUrl:"https://github.com/toj11001/aggregation-pipeline-lab/blob/main/docs/60-lookups/1-lookups.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lookups / Joins",permalink:"/aggregation-pipeline-lab/zh/docs/category/lookups--joins"},next:{title:"\ud83e\uddb8\u200d\u2642\ufe0f \u9ad8\u7ea7 lookup",permalink:"/aggregation-pipeline-lab/zh/docs/lookups/advanced-lookups"}},c={},a=[{value:"\u4ece\u4e4b\u524d\u7684\u9636\u6bb5\u8fdb\u884c\u67e5\u627e",id:"\u4ece\u4e4b\u524d\u7684\u9636\u6bb5\u8fdb\u884c\u67e5\u627e",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-lookup-\u53c8\u540d-left-outer-join\u5916\u8fde\u63a5",children:"\ud83d\udc50 Lookup \u53c8\u540d Left Outer Join\uff08\u5916\u8fde\u63a5\uff09"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u6587\u6863\u65f6\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7\u5d4c\u5165\u6587\u6863\u5230\u5176\u4ed6\u6587\u6863\u4e2d\u6765\u5efa\u6a211:1\u62161:\u591a\u7684\u5173\u7cfb\uff0c\u751a\u81f3\u4f7f\u7528\u6570\u7ec4\u6765\u5b9e\u73b0\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u4f5c\u8005\u53ef\u4ee5\u6709\u5f88\u591a\u522b\u540d\uff0c\u8fd9\u4e9b\u522b\u540d\u5b58\u50a8\u5728",(0,s.jsx)(n.code,{children:"authors"}),"\u96c6\u5408\u7684\u4e00\u4e2a\u6570\u7ec4\u4e2d\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u6709\u65f6\u6211\u4eec\u9700\u8981\u4f7f\u7528\u5f15\u7528\u800c\u4e0d\u662f\u5d4c\u5165\u6587\u6863\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u4f5c\u8005\u6709\u4e00\u4e2a\u5979\u5199\u8fc7\u7684\u4e66\u7c4d\u7684\u6570\u7ec4\uff0c\u4f46\u6211\u4eec\u4e0d\u662f\u5c06\u4e66\u7c4d\u6587\u6863\u79fb\u52a8\u5230\u4f5c\u8005\u5185\u90e8\u7684\u4e00\u4e2a\u6570\u7ec4\u4e2d\uff08\u5bf9\u4e8e\u6709\u591a\u4e2a\u4f5c\u8005\u7684\u4e66\u7c4d\u6765\u8bf4\u8fd9\u4f1a\u5f88\u68d8\u624b\uff09\uff0c\u800c\u662f\u5d4c\u5165\u4e66\u7c4d\u7684",(0,s.jsx)(n.code,{children:"_id"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u90a3\u4e48\u6211\u4eec\u5982\u4f55\u83b7\u53d6\u4f5c\u8005\u548c\u5979\u5199\u7684\u6240\u6709\u4e66\u7c4d\uff0c\u5e76\u5d4c\u5165\u5230\u6570\u7ec4\u4e2d\uff1f\u4f7f\u7528",(0,s.jsx)(n.code,{children:"$lookup"}),"\uff0c\u5b83\u5c06\u8fdb\u884c\u5916\u8fde\u63a5\u5e76\u8fd4\u56de\u5305\u542b\u4e66\u7c4d\u6587\u6863\u7684\u4f5c\u8005\u6587\u6863\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\ud83d\udc50 \u8fd0\u884c\u6b64\u805a\u5408\u5e76\u67e5\u770b\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'db.authors.aggregate([\n    {$lookup: {\n       from: "books",\n       localField: "books",\n       foreignField: "_id",\n       as: "booksWritten"\n     } \n    },\n    {$project: {_id: 0}}\n])\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u524d\u7248\u672c\u7684",(0,s.jsx)(n.code,{children:"$lookup"}),"\u8bed\u6cd5\u662f\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n   $lookup:\n     {\n       from: <\u8981\u8fde\u63a5\u7684\u96c6\u5408>,\n       localField: <\u8f93\u5165\u6587\u6863\u4e2d\u7684\u5b57\u6bb5>,\n       foreignField: <"from"\u96c6\u5408\u4e2d\u7684\u5b57\u6bb5>,\n       as: <\u8f93\u51fa\u6570\u7ec4\u5b57\u6bb5>\n     }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u4ece\u4e4b\u524d\u7684\u9636\u6bb5\u8fdb\u884c\u67e5\u627e",children:"\u4ece\u4e4b\u524d\u7684\u9636\u6bb5\u8fdb\u884c\u67e5\u627e"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5bf9\u53e6\u4e00\u4e2a\u7ba1\u9053\u7684\u7ed3\u679c\u8fdb\u884c$lookup\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u4e0e\u4e00\u4e2a\u96c6\u5408\u8fde\u63a5\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u60f3\u5728\u8fde\u63a5\u4e4b\u524d\u4ece\u4e66\u7c4d\u4e2d\u5220\u9664\u4e00\u4e9b\u566a\u97f3\uff0c\u6240\u4ee5\u6211\u4eec\u4f7f\u7528",(0,s.jsx)(n.code,{children:"$project"}),"\u6392\u9664\u51e0\u4e2a\u6570\u7ec4\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'db.authors.aggregate([\n    {$lookup: {\n       from: "books",\n       localField: "books",\n       foreignField: "_id",\n       pipeline: [\n         {$project: {title: 1, synopsis: 1}}\n       ],\n       as: "booksWritten"\n     } \n    }\n])\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u66f4\u597d\u7684\u505a\u6cd5\u662f\u6211\u4eec\u53ef\u4ee5\u63d0\u53d6\u8be5\u7ba1\u9053\u5e76\u8fdb\u884c\u6d4b\u8bd5/\u8c03\u6574\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'let justShowTitleSynopsis = [\n    {$project: {title: 1, synopsis: 1}},\n]\n\ndb.authors.aggregate([\n    {$lookup: {\n       from: "books",\n       localField: "books",\n       foreignField: "_id",\n       pipeline:\n          justShowTitleSynopsis,\n       as: "booksWritten"\n     } \n    }\n])\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var s=o(6540);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);