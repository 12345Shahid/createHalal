(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9985],{2888:function(e,r,t){Promise.resolve().then(t.bind(t,1698))},1698:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var n=t(7437),s=t(1712),a=t(6070),o=t(2265),i=t(4438),d=t(6023),c=t(4752);function l(){let[e,r]=(0,o.useState)(!1),t=async e=>{try{r(!0),await (0,c.LS)(d.I,e),i.Am.success("Password reset email sent")}catch(e){i.Am.error("Error sending reset email")}finally{r(!1)}};return(0,n.jsx)("div",{className:"container flex h-screen w-full flex-col items-center justify-center",children:(0,n.jsxs)(a.Zb,{className:"w-[350px]",children:[(0,n.jsxs)(a.Ol,{children:[(0,n.jsx)(a.ll,{children:"Reset password"}),(0,n.jsx)(a.SZ,{children:"Enter your email to reset your password"})]}),(0,n.jsx)(a.aY,{children:(0,n.jsx)(s.AuthForm,{type:"forgot-password",onSubmit:t,isLoading:e})})]})})}},1712:function(e,r,t){"use strict";var n=t(7437),s=t(2265);t(7648);var a=t(5293),o=t(9501),i=t(1107),d=t(535),c=t(4508);let l=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(i.f,{ref:r,className:(0,c.cn)(l(),t),...s})});u.displayName=i.f.displayName;let f=s.createContext({}),m=()=>{let e=s.useContext(f),r=s.useContext(p),{getFieldState:t,formState:n}=(0,o.Gc)(),a=t(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=r;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...a}},p=s.createContext({});s.forwardRef((e,r)=>{let{className:t,...a}=e,o=s.useId();return(0,n.jsx)(p.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:r,className:(0,c.cn)("space-y-2",t),...a})})}).displayName="FormItem",s.forwardRef((e,r)=>{let{className:t,...s}=e,{error:a,formItemId:o}=m();return(0,n.jsx)(u,{ref:r,className:(0,c.cn)(a&&"text-destructive",t),htmlFor:o,...s})}).displayName="FormLabel",s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:o,formDescriptionId:i,formMessageId:d}=m();return(0,n.jsx)(a.g7,{ref:r,id:o,"aria-describedby":s?"".concat(i," ").concat(d):"".concat(i),"aria-invalid":!!s,...t})}).displayName="FormControl",s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:a}=m();return(0,n.jsx)("p",{ref:r,id:a,className:(0,c.cn)("text-sm text-muted-foreground",t),...s})}).displayName="FormDescription",s.forwardRef((e,r)=>{let{className:t,children:s,...a}=e,{error:o,formMessageId:i}=m(),d=o?String(null==o?void 0:o.message):s;return d?(0,n.jsx)("p",{ref:r,id:i,className:(0,c.cn)("text-sm font-medium text-destructive",t),...a,children:d}):null}).displayName="FormMessage",s.forwardRef((e,r)=>{let{className:t,type:s,...a}=e;return(0,n.jsx)("input",{type:s,className:(0,c.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...a})}).displayName="Input",t(2869),t(9866)},2869:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var n=t(7437),s=t(2265),a=t(5293),o=t(535),i=t(4508);let d=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,r)=>{let{className:t,variant:s,size:o,asChild:c=!1,...l}=e,u=c?a.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(d({variant:s,size:o,className:t})),ref:r,...l})});c.displayName="Button"},6070:function(e,r,t){"use strict";t.d(r,{Ol:function(){return i},SZ:function(){return c},Zb:function(){return o},aY:function(){return l},ll:function(){return d}});var n=t(7437),s=t(2265),a=t(4508);let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});o.displayName="Card";let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...s})});i.displayName="CardHeader";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});d.displayName="CardTitle";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})});c.displayName="CardDescription";let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("p-6 pt-0",t),...s})});l.displayName="CardContent",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex items-center p-6 pt-0",t),...s})}).displayName="CardFooter"},9866:function(e,r,t){"use strict";t(7437),t(2265)},6023:function(e,r,t){"use strict";t.d(r,{I:function(){return o}});var n=t(738),s=t(4752);let a=(0,n.ZF)({apiKey:"AIzaSyAsVuVtY-ZgNfqTZ2Wfe4aGKdmN-kQqZjE",authDomain:"hasan-8466d.firebaseapp.com",projectId:"hasan-8466d",storageBucket:"hasan-8466d.firebasestorage.app",messagingSenderId:"1037187451735",appId:"1:1037187451735:web:b4b1f403667bb6c9ebcc12",measurementId:"G-Z9PXNQ2FH8"}),o=(0,s.v0)(a)},4508:function(e,r,t){"use strict";t.d(r,{cn:function(){return a}});var n=t(1994),s=t(3335);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,n.W)(r))}}},function(e){e.O(0,[749,6137,827,7648,9332,2971,2117,1744],function(){return e(e.s=2888)}),_N_E=e.O()}]);