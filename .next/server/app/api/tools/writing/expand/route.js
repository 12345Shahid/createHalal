"use strict";(()=>{var e={};e.id=8343,e.ids=[8343],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},827:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>c,patchFetch:()=>x,requestAsyncStorage:()=>d,routeModule:()=>p,serverHooks:()=>l,staticGenerationAsyncStorage:()=>u});var o={};r.r(o),r.d(o,{default:()=>i});var a=r(9303),s=r(8716),n=r(670);function i(e,t){if("POST"===e.method)try{let{text:r}=e.body;if(!r)return t.status(400).json({error:"Text is required"});t.status(200).json({message:"Expansion completed."})}catch(e){t.status(500).json({error:"Internal Server Error"})}else t.setHeader("Allow",["POST"]),t.status(405).end(`Method ${e.method} Not Allowed`)}let p=new a.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/tools/writing/expand/route",pathname:"/api/tools/writing/expand",filename:"route",bundlePath:"app/api/tools/writing/expand/route"},resolvedPagePath:"/Users/shahidhasan/createHalal/app/api/tools/writing/expand/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:d,staticGenerationAsyncStorage:u,serverHooks:l}=p,c="/api/tools/writing/expand/route";function x(){return(0,n.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:u})}},9303:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[8948],()=>r(827));module.exports=o})();