"use strict";(()=>{var e={};e.id=2336,e.ids=[2336],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4922:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>c,patchFetch:()=>h,requestAsyncStorage:()=>n,routeModule:()=>d,serverHooks:()=>l,staticGenerationAsyncStorage:()=>p});var a={};o.r(a),o.d(a,{default:()=>i});var r=o(9303),s=o(8716),u=o(670);function i(e,t){"POST"===e.method?t.status(200).json({message:"Ideas generation completed."}):(t.setHeader("Allow",["POST"]),t.status(405).end(`Method ${e.method} Not Allowed`))}let d=new r.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/tools/youtube/ideas/route",pathname:"/api/tools/youtube/ideas",filename:"route",bundlePath:"app/api/tools/youtube/ideas/route"},resolvedPagePath:"/Users/shahidhasan/createHalal/app/api/tools/youtube/ideas/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:n,staticGenerationAsyncStorage:p,serverHooks:l}=d,c="/api/tools/youtube/ideas/route";function h(){return(0,u.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:p})}},9303:(e,t,o)=>{e.exports=o(517)}};var t=require("../../../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),a=t.X(0,[8948],()=>o(4922));module.exports=a})();