"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[6472],{666:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=t(4848),s=t(8453);const i={description:"\u8ba9\u6211\u4eec\u6bd4\u8f83\u4e00\u4e0b SQL \u548c\u805a\u5408\u7ba1\u9053"},o="\ud83d\udcd8 SQL \u4e0e\u805a\u5408",r={id:"what-is-aggregation/sql-vs-aggregation",title:"\ud83d\udcd8 SQL \u4e0e\u805a\u5408",description:"\u8ba9\u6211\u4eec\u6bd4\u8f83\u4e00\u4e0b SQL \u548c\u805a\u5408\u7ba1\u9053",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/20-what-is-aggregation/2-sql-vs-aggregation.mdx",sourceDirName:"20-what-is-aggregation",slug:"/what-is-aggregation/sql-vs-aggregation",permalink:"/aggregation-pipeline-lab/zh/docs/what-is-aggregation/sql-vs-aggregation",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab/blob/main/docs/20-what-is-aggregation/2-sql-vs-aggregation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"\u8ba9\u6211\u4eec\u6bd4\u8f83\u4e00\u4e0b SQL \u548c\u805a\u5408\u7ba1\u9053"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 \u4ec0\u4e48\u662f\u805a\u5408\u7ba1\u9053",permalink:"/aggregation-pipeline-lab/zh/docs/what-is-aggregation/what-is-aggregation"},next:{title:"\ud83d\udcd8 \u805a\u5408\u7ba1\u9053\u7684\u7ed3\u6784",permalink:"/aggregation-pipeline-lab/zh/docs/what-is-aggregation/structure-aggregation"}},d={},c=[{value:"SQL",id:"sql",level:2},{value:"\u7b49\u6548\u7684 MongoDB \u805a\u5408\u7ba1\u9053",id:"\u7b49\u6548\u7684-mongodb-\u805a\u5408\u7ba1\u9053",level:2}];function g(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"-sql-\u4e0e\u805a\u5408",children:"\ud83d\udcd8 SQL \u4e0e\u805a\u5408"})}),"\n",(0,a.jsx)(e.h2,{id:"sql",children:"SQL"}),"\n",(0,a.jsxs)(e.p,{children:["\u4e00\u4e2a SQL \u67e5\u8be2\u8bed\u53e5\u901a\u5e38\u4ee5 ",(0,a.jsx)(e.code,{children:"SELECT"})," \u5f00\u59cb\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u5217\u51fa\u6240\u9700\u7684\u5b57\u6bb5\uff0c\u7136\u540e\u662f ",(0,a.jsx)(e.code,{children:"FROM"})," \u5b50\u53e5\u6765\u6307\u5b9a\u5c06\u8fd4\u56de\u884c\u7684\u8868\uff08\u6216\u5728\u672c\u4f8b\u4e2d\u4e3a\u5b50\u67e5\u8be2\uff09\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(e.code,{children:"WHERE"})," \u8fdb\u884c\u7b5b\u9009\uff0c\u5e76\u4f7f\u7528 ",(0,a.jsx)(e.code,{children:"GROUP"})," \u5bf9\u6570\u636e\u8fdb\u884c\u5206\u7ec4\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u6211\u4eec\u4ece\u8bfb\u53d6 SQL \u9700\u4ece\u5d4c\u5957\u4e2d\u7406\u89e3\u6574\u4e2a\u8bed\u53e5\u7684\u542b\u4e49\u3002\u5982\u679c\u5d4c\u5957\u8fc7\u591a\uff0c\u5219\u4e0d\u6613\u7406\u89e3\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'SELECT\n    city,\n    SUM(annual_spend) Total_Spend,\n    AVG(annual_spend) Average_Spend,\n    MAX(annual_spend) Max_Spend,\n    COUNT(annual_spend) customers\nFROM (\n    SELECT t1.city, customer.annual_spend\n    FROM customer \n    LEFT JOIN (\n        SELECT address.address_id, city.city,\n               address.customer_id, address.location\n        FROM address LEFT JOIN city\n        ON address.city_id = city.city_id\n        ) AS t1\n    ON\n    (customer.customer_id = t1.customer_id AND\n              t1.location = "home")\n) AS t2\nGROUP BY city;\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u7b49\u6548\u7684-mongodb-\u805a\u5408\u7ba1\u9053",children:"\u7b49\u6548\u7684 MongoDB \u805a\u5408\u7ba1\u9053"}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7\u4e09\u4e2a\u9636\u6bb5\uff0c\u4e00\u4e2a\u8fd4\u56de ",(0,a.jsx)(e.code,{children:"address"})," \u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u7684\u6587\u6863\uff0c\u7136\u540e\u6211\u4eec\u7b5b\u9009\u51fa\u4ec5\u5305\u542b ",(0,a.jsx)(e.code,{children:"home"})," \u5730\u5740\u4f4d\u7f6e\u7684\u6587\u6863\uff0c\u6700\u540e\u6211\u4eec\u8fdb\u884c\u5206\u7ec4\u3002\u6b63\u5982\u6211\u4eec\u5c06\u52a8\u624b\u5b9e\u8df5\u5e76\u770b\u5230\u7684\uff0cMongoDB \u805a\u5408\u7ba1\u9053\u53ef\u4ee5\u5206\u5f00\u6d4b\u8bd5\uff0c\u5e76\u4e14\u8fd0\u884c\u903b\u8f91\u7c7b\u4f3c\u4e8e\u6211\u4eec\u7684\u4ee3\u7801\u7ed3\u6784\u672c\u8eab\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'db.customers.aggregate([\n\t{\n\t\t$unwind: "$address",\n\t},\n\t{\n\t\t$match: {"address.location": "home"}\n\t},\n\t{\n\t\t $group: {\n\t\t\t_id: "$address.city",\n\t\t\ttotalSpend: {$sum: "$annualSpend"},\n\t\t\taverageSpend: {$avg: "$annualSpend"},\n\t\t\tmaximumSpend: {$max: "$annualSpend"},\n\t\t\tcustomers: {$sum: 1}\n\t\t}\n\t}\n])\n'})}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["\u53e6\u8bf7\u53c2\u9605 ",(0,a.jsx)(e.a,{href:"https://www.mongodb.com/docs/manual/reference/sql-aggregation-comparison/",children:"SQL \u4e0e\u805a\u5408\u6620\u5c04\u8868"})]})})]})}function l(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(g,{...n})}):g(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var a=t(6540);const s={},i=a.createContext(s);function o(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);