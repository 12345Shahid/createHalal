"use strict";(()=>{var e={};e.id=913,e.ids=[913],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6124:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>c,patchFetch:()=>g,requestAsyncStorage:()=>l,routeModule:()=>u,serverHooks:()=>p,staticGenerationAsyncStorage:()=>d});var a={};r.r(a),r.d(a,{default:()=>i});var o=r(9303),s=r(8716),n=r(670);function i(e,t){if("POST"===e.method)try{let{text:r,targetLanguage:a}=e.body;if(!r||!a)return t.status(400).json({error:"Text and target language are required"});t.status(200).json({message:"Translation completed."})}catch(e){t.status(500).json({error:"Internal Server Error"})}else t.setHeader("Allow",["POST"]),t.status(405).end(`Method ${e.method} Not Allowed`)}let u=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/tools/writing/translate/route",pathname:"/api/tools/writing/translate",filename:"route",bundlePath:"app/api/tools/writing/translate/route"},resolvedPagePath:"/Users/shahidhasan/createHalal/app/api/tools/writing/translate/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:p}=u,c="/api/tools/writing/translate/route";function g(){return(0,n.patchFetch)({serverHooks:p,staticGenerationAsyncStorage:d})}},9303:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[8948],()=>r(6124));module.exports=a})();