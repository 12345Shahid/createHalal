(()=>{var e={};e.id=9985,e.ids=[9985],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7404:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>s.a,__next_app__:()=>d,originalPathname:()=>b,pages:()=>l,routeModule:()=>c,tree:()=>x}),t(8382),t(5866),t(1506);var a=t(3191),n=t(8716),m=t(7922),s=t.n(m),o=t(5231),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);t.d(r,i);let x=["",{children:["(auth)",{children:["forgot-password",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8382)),"/Users/shahidhasan/createHalal/app/(auth)/forgot-password/page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(t.t.bind(t,1506,23)),"/Users/shahidhasan/createHalal/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],l=["/Users/shahidhasan/createHalal/app/(auth)/forgot-password/page.tsx"],b="/(auth)/forgot-password/page",d={require:t,loadChunk:()=>Promise.resolve()},c=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(auth)/forgot-password/page",pathname:"/forgot-password",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:x}})},4321:(e,r,t)=>{Promise.resolve().then(t.bind(t,4544))},4099:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},5303:()=>{},4544:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var a=t(326),n=t(5116),m=t(2643),s=t(7577),o=t(5999),i=t(2991),x=t(134);function l(){let[e,r]=(0,s.useState)(!1),t=async e=>{try{r(!0),await (0,x.LS)(i.I,e),o.Am.success("Password reset email sent")}catch(e){o.Am.error("Error sending reset email")}finally{r(!1)}};return a.jsx("div",{className:"container flex h-screen w-full flex-col items-center justify-center",children:(0,a.jsxs)(m.Zb,{className:"w-[350px]",children:[(0,a.jsxs)(m.Ol,{children:[a.jsx(m.ll,{children:"Reset password"}),a.jsx(m.SZ,{children:"Enter your email to reset your password"})]}),a.jsx(m.aY,{children:a.jsx(n.B,{type:"forgot-password",onSubmit:t,isLoading:e})})]})})}},5116:(e,r,t)=>{"use strict";t.d(r,{B:()=>C});var a=t(326),n=t(7577),m=t(434),s=t(6438),o=t(4723),i=t(7281),x=t(9360),l=t(7863);let b=(0,x.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=n.forwardRef(({className:e,...r},t)=>a.jsx(i.f,{ref:t,className:(0,l.cn)(b(),e),...r}));d.displayName=i.f.displayName;let c=o.RV,u=n.createContext({}),p=({...e})=>a.jsx(u.Provider,{value:{name:e.name},children:a.jsx(o.Qr,{...e})}),f=()=>{let e=n.useContext(u),r=n.useContext(h),{getFieldState:t,formState:a}=(0,o.Gc)(),m=t(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:s}=r;return{id:s,name:e.name,formItemId:`${s}-form-item`,formDescriptionId:`${s}-form-item-description`,formMessageId:`${s}-form-item-message`,...m}},h=n.createContext({}),g=n.forwardRef(({className:e,...r},t)=>{let m=n.useId();return a.jsx(h.Provider,{value:{id:m},children:a.jsx("div",{ref:t,className:(0,l.cn)("space-y-2",e),...r})})});g.displayName="FormItem";let v=n.forwardRef(({className:e,...r},t)=>{let{error:n,formItemId:m}=f();return a.jsx(d,{ref:t,className:(0,l.cn)(n&&"text-destructive",e),htmlFor:m,...r})});v.displayName="FormLabel";let y=n.forwardRef(({...e},r)=>{let{error:t,formItemId:n,formDescriptionId:m,formMessageId:o}=f();return a.jsx(s.g7,{ref:r,id:n,"aria-describedby":t?`${m} ${o}`:`${m}`,"aria-invalid":!!t,...e})});y.displayName="FormControl",n.forwardRef(({className:e,...r},t)=>{let{formDescriptionId:n}=f();return a.jsx("p",{ref:t,id:n,className:(0,l.cn)("text-sm text-muted-foreground",e),...r})}).displayName="FormDescription";let j=n.forwardRef(({className:e,children:r,...t},n)=>{let{error:m,formMessageId:s}=f(),o=m?String(m?.message):r;return o?a.jsx("p",{ref:n,id:s,className:(0,l.cn)("text-sm font-medium text-destructive",e),...t,children:o}):null});j.displayName="FormMessage";let w=n.forwardRef(({className:e,type:r,...t},n)=>a.jsx("input",{type:r,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));w.displayName="Input";var N=t(772);function C({type:e,onSubmit:r,form:t,isLoading:s}){let[o,i]=(0,n.useState)("");return"forgot-password"===e?(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),r(o)},className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx(d,{htmlFor:"email",children:"Email"}),a.jsx(w,{id:"email",placeholder:"name@example.com",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:s,value:o,onChange:e=>i(e.target.value)})]}),(0,a.jsxs)(N.z,{disabled:s,type:"submit",className:"w-full",children:[s&&a.jsx(Object(function(){var e=Error("Cannot find module '../ui/icons'");throw e.code="MODULE_NOT_FOUND",e}()).spinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Send reset link"]})]}):a.jsx(c,{...t,children:(0,a.jsxs)("form",{onSubmit:t.handleSubmit(r),className:"space-y-4",children:[a.jsx(Object(function(){var e=Error("Cannot find module '../ui/icons'");throw e.code="MODULE_NOT_FOUND",e}()),{}),a.jsx(p,{control:t.control,name:"email",render:({field:e})=>(0,a.jsxs)(g,{children:[a.jsx(v,{children:"Email"}),a.jsx(y,{children:a.jsx(w,{placeholder:"name@example.com",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:s,...e})}),a.jsx(j,{})]})}),a.jsx(p,{control:t.control,name:"password",render:({field:e})=>(0,a.jsxs)(g,{children:[a.jsx(v,{children:"Password"}),a.jsx(y,{children:a.jsx(w,{placeholder:"Enter your password",type:"password",autoComplete:"current-password",disabled:s,...e})}),a.jsx(j,{})]})}),"login"===e&&a.jsx("div",{className:"flex items-center justify-end",children:a.jsx(m.default,{href:"/forgot-password",className:"text-sm text-primary hover:underline",children:"Forgot password?"})}),(0,a.jsxs)(N.z,{disabled:s,type:"submit",className:"w-full",children:[s&&a.jsx(Object(function(){var e=Error("Cannot find module '../ui/icons'");throw e.code="MODULE_NOT_FOUND",e}()).spinner,{className:"mr-2 h-4 w-4 animate-spin"}),"login"===e?"Sign in":"Sign up"]})]})})}!function(){var e=Error("Cannot find module '../ui/icons'");throw e.code="MODULE_NOT_FOUND",e}()},772:(e,r,t)=>{"use strict";t.d(r,{z:()=>x});var a=t(326),n=t(7577),m=t(6438),s=t(9360),o=t(7863);let i=(0,s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),x=n.forwardRef(({className:e,variant:r,size:t,asChild:n=!1,...s},x)=>{let l=n?m.g7:"button";return a.jsx(l,{className:(0,o.cn)(i({variant:r,size:t,className:e})),ref:x,...s})});x.displayName="Button"},2643:(e,r,t)=>{"use strict";t.d(r,{Ol:()=>o,SZ:()=>x,Zb:()=>s,aY:()=>l,ll:()=>i});var a=t(326),n=t(7577),m=t(7863);let s=n.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,m.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));s.displayName="Card";let o=n.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,m.cn)("flex flex-col space-y-1.5 p-6",e),...r}));o.displayName="CardHeader";let i=n.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,m.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));i.displayName="CardTitle";let x=n.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,m.cn)("text-sm text-muted-foreground",e),...r}));x.displayName="CardDescription";let l=n.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,m.cn)("p-6 pt-0",e),...r}));l.displayName="CardContent",n.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,m.cn)("flex items-center p-6 pt-0",e),...r})).displayName="CardFooter"},2991:(e,r,t)=>{"use strict";t.d(r,{I:()=>s});var a=t(2585),n=t(134);let m=(0,a.ZF)({apiKey:"AIzaSyAsVuVtY-ZgNfqTZ2Wfe4aGKdmN-kQqZjE",authDomain:"hasan-8466d.firebaseapp.com",projectId:"hasan-8466d",storageBucket:"hasan-8466d.firebasestorage.app",messagingSenderId:"1037187451735",appId:"1:1037187451735:web:b4b1f403667bb6c9ebcc12",measurementId:"G-Z9PXNQ2FH8"}),s=(0,n.v0)(m)},7863:(e,r,t)=>{"use strict";t.d(r,{cn:()=>m});var a=t(1135),n=t(1009);function m(...e){return(0,n.m6)((0,a.W)(e))}},8382:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});let a=(0,t(8570).createProxy)(String.raw`/Users/shahidhasan/createHalal/app/(auth)/forgot-password/page.tsx#default`)},1506:()=>{throw Error('Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-swc-loader.js):\nError: \n  \x1b[31mx\x1b[0m the name `default` is exported multiple times\n    ,-[\x1b[36;1;4m/Users/shahidhasan/createHalal/app/layout.tsx\x1b[0m:12:1]\n \x1b[2m12\x1b[0m |       description: \'Create amazing halal content for blogs, YouTube, and more with AI assistance.\',\n \x1b[2m13\x1b[0m |     }\n \x1b[2m14\x1b[0m |     \n \x1b[2m15\x1b[0m | \x1b[31;1m,\x1b[0m\x1b[31;1m-\x1b[0m\x1b[31;1m>\x1b[0m export default function RootLayout({\n \x1b[2m16\x1b[0m | \x1b[31;1m|\x1b[0m     children,\n \x1b[2m17\x1b[0m | \x1b[31;1m|\x1b[0m   }: {\n \x1b[2m18\x1b[0m | \x1b[31;1m|\x1b[0m     children: React.ReactNode\n \x1b[2m19\x1b[0m | \x1b[31;1m|\x1b[0m   }) {\n \x1b[2m20\x1b[0m | \x1b[31;1m|\x1b[0m     return (\n \x1b[2m21\x1b[0m | \x1b[31;1m|\x1b[0m       <html lang="en" suppressHydrationWarning>\n \x1b[2m22\x1b[0m | \x1b[31;1m|\x1b[0m         <body className={inter.className}>\n \x1b[2m23\x1b[0m | \x1b[31;1m|\x1b[0m           <ThemeProvider attribute="class" defaultTheme="light">\n \x1b[2m24\x1b[0m | \x1b[31;1m|\x1b[0m             <Header />\n \x1b[2m25\x1b[0m | \x1b[31;1m|\x1b[0m             <main className="min-h-screen">{children}</main>\n \x1b[2m26\x1b[0m | \x1b[31;1m|\x1b[0m             <Footer />\n \x1b[2m27\x1b[0m | \x1b[31;1m|\x1b[0m           </ThemeProvider>\n \x1b[2m28\x1b[0m | \x1b[31;1m|\x1b[0m         </body>\n \x1b[2m29\x1b[0m | \x1b[31;1m|\x1b[0m       </html>\n \x1b[2m30\x1b[0m | \x1b[31;1m|\x1b[0m     )\n \x1b[2m31\x1b[0m | \x1b[31;1m|\x1b[0m\x1b[31;1m-\x1b[0m\x1b[31;1m>\x1b[0m }\n    : \x1b[31;1m`\x1b[0m\x1b[31;1m---\x1b[0m\x1b[31;1m-\x1b[0m \x1b[31;1mprevious exported here\x1b[0m\n \x1b[2m32\x1b[0m |     \n \x1b[2m33\x1b[0m |     // File: /app/page.tsx\n \x1b[2m34\x1b[0m |     import Image from \'next/image\'\n \x1b[2m35\x1b[0m |     import { Button } from \'@/components/ui/button\'\n \x1b[2m36\x1b[0m |     \n \x1b[2m37\x1b[0m | \x1b[33;1m,\x1b[0m\x1b[33;1m-\x1b[0m\x1b[33;1m>\x1b[0m export default function Home() {\n \x1b[2m38\x1b[0m | \x1b[33;1m|\x1b[0m     return (\n \x1b[2m39\x1b[0m | \x1b[33;1m|\x1b[0m       <div className="container mx-auto px-4">\n \x1b[2m40\x1b[0m | \x1b[33;1m|\x1b[0m         <section className="py-20">\n \x1b[2m41\x1b[0m | \x1b[33;1m|\x1b[0m           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">\n \x1b[2m42\x1b[0m | \x1b[33;1m|\x1b[0m             <div>\n \x1b[2m43\x1b[0m | \x1b[33;1m|\x1b[0m               <h1 className="text-4xl lg:text-6xl font-bold mb-6">\n \x1b[2m44\x1b[0m | \x1b[33;1m|\x1b[0m                 Create Amazing Halal Content with AI\n \x1b[2m45\x1b[0m | \x1b[33;1m|\x1b[0m               </h1>\n \x1b[2m46\x1b[0m | \x1b[33;1m|\x1b[0m               <p className="text-xl mb-8">\n \x1b[2m47\x1b[0m | \x1b[33;1m|\x1b[0m                 Discover an all-in-one platform built to help you create amazing content,\n \x1b[2m48\x1b[0m | \x1b[33;1m|\x1b[0m                 boost your marketing, and streamline your programming tasks – all while\n \x1b[2m49\x1b[0m | \x1b[33;1m|\x1b[0m                 staying true to Halal values.\n \x1b[2m50\x1b[0m | \x1b[33;1m|\x1b[0m               </p>\n \x1b[2m51\x1b[0m | \x1b[33;1m|\x1b[0m               <Button size="lg">Get Started</Button>\n \x1b[2m52\x1b[0m | \x1b[33;1m|\x1b[0m             </div>\n \x1b[2m53\x1b[0m | \x1b[33;1m|\x1b[0m             <div className="relative h-[400px]">\n \x1b[2m54\x1b[0m | \x1b[33;1m|\x1b[0m               <Image\n \x1b[2m55\x1b[0m | \x1b[33;1m|\x1b[0m                 src="/api/placeholder/800/600"\n \x1b[2m56\x1b[0m | \x1b[33;1m|\x1b[0m                 alt="Hero illustration"\n \x1b[2m57\x1b[0m | \x1b[33;1m|\x1b[0m                 layout="fill"\n \x1b[2m58\x1b[0m | \x1b[33;1m|\x1b[0m                 objectFit="contain"\n \x1b[2m59\x1b[0m | \x1b[33;1m|\x1b[0m               />\n \x1b[2m60\x1b[0m | \x1b[33;1m|\x1b[0m             </div>\n \x1b[2m61\x1b[0m | \x1b[33;1m|\x1b[0m           </div>\n \x1b[2m62\x1b[0m | \x1b[33;1m|\x1b[0m         </section>\n \x1b[2m63\x1b[0m | \x1b[33;1m|\x1b[0m         {/* Additional sections will go here */}\n \x1b[2m64\x1b[0m | \x1b[33;1m|\x1b[0m       </div>\n \x1b[2m65\x1b[0m | \x1b[33;1m|\x1b[0m     )\n \x1b[2m66\x1b[0m | \x1b[33;1m|\x1b[0m\x1b[33;1m-\x1b[0m\x1b[33;1m>\x1b[0m }\n    : \x1b[33;1m`\x1b[0m\x1b[33;1m---\x1b[0m\x1b[33;1m-\x1b[0m \x1b[33;1mexported more than once\x1b[0m\n    `----\n\nError: \n  \x1b[36m>\x1b[0m Exported identifiers must be unique\n')}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[8948,4471,7555,9526],()=>t(7404));module.exports=a})();