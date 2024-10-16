import{c as d,j as e,a as c,b as x}from"./utils.DmF-ZB0a.js";import{r as a}from"./index.BiFHKRHA.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=d("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),u=x("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),i=a.forwardRef(({className:r,variant:t,...s},l)=>e.jsx("div",{ref:l,role:"alert",className:c(u({variant:t}),r),...s}));i.displayName="Alert";const n=a.forwardRef(({className:r,...t},s)=>e.jsx("h5",{ref:s,className:c("mb-1 font-medium leading-none tracking-tight",r),...t}));n.displayName="AlertTitle";const o=a.forwardRef(({className:r,...t},s)=>e.jsx("div",{ref:s,className:c("text-sm [&_p]:leading-relaxed",r),...t}));o.displayName="AlertDescription";const g=()=>{const[r,t]=a.useState(null);return a.useEffect(()=>{const l=new URLSearchParams(window.location.search).get("error");t(l)},[]),e.jsx(e.Fragment,{children:r&&e.jsxs(i,{className:"ml-4 p-4",variant:"destructive",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(m,{className:"h-4 w-4"}),e.jsx(n,{children:"Error"})]}),e.jsxs(o,{children:[r,"."]})]})})};export{g as default};
