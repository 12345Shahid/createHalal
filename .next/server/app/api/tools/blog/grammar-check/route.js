"use strict";(()=>{var e={};e.id=9505,e.ids=[9505],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5061:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>d,patchFetch:()=>m,requestAsyncStorage:()=>l,routeModule:()=>n,serverHooks:()=>c,staticGenerationAsyncStorage:()=>p});var a={};r.r(a),r.d(a,{default:()=>i});var o=r(9303),s=r(8716),u=r(670);function i(e,t){"POST"===e.method?t.status(200).json({message:"Grammar check successful"}):(t.setHeader("Allow",["POST"]),t.status(405).end(`Method ${e.method} Not Allowed`))}let n=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/tools/blog/grammar-check/route",pathname:"/api/tools/blog/grammar-check",filename:"route",bundlePath:"app/api/tools/blog/grammar-check/route"},resolvedPagePath:"/Users/shahidhasan/createHalal/app/api/tools/blog/grammar-check/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:l,staticGenerationAsyncStorage:p,serverHooks:c}=n,d="/api/tools/blog/grammar-check/route";function m(){return(0,u.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:p})}},9303:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[8948],()=>r(5061));module.exports=a})();