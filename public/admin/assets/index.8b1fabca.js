import{e as A,aW as I,b2 as K,b3 as P,b5 as T,n as U,b6 as N,o as c,g as z,h as e,w as a,u as t,a$ as g,Z as _,C as L,k as h,m as R,j as C,V as $,aX as j,aY as q,ab as S,aZ as Z,b1 as W,B as X}from"./.pnpm.de1384b3.js";import{u as Y,_ as G}from"./usePaging.a9f35d76.js";import{r as w,f as H}from"./index.9c35de43.js";function J(i){return w.get({url:"/image/list",params:i})}function M(i){return w.get({url:"/image/delete",params:i})}const O=C("br",null,null,-1),Q={class:"flex justify-end mt-4"},oe=A({__name:"index",setup(i){const n=I({userId:"",prompt:"",startTime:"",endTime:""}),{pager:s,getLists:r,resetPage:d,resetParams:F}=Y({fetchFun:J,params:n}),D=async f=>{await H.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await M({id:f}),r()};return K(()=>{r()}),r(),(f,u)=>{const b=j,m=q,p=S,y=Z,E=W,o=P,V=X,k=T,B=G,v=U("edit-popup"),x=N;return c(),z("div",null,[e(E,{class:"!border-none",shadow:"never"},{default:a(()=>[e(y,{ref:"formRef",class:"mb-[-16px]",model:t(n),inline:!0},{default:a(()=>[e(m,{label:"\u63D0\u95EE\u4EBAID"},{default:a(()=>[e(b,{class:"w-[280px]",modelValue:t(n).userId,"onUpdate:modelValue":u[0]||(u[0]=l=>t(n).userId=l),placeholder:"",clearable:"",onKeyup:g(t(d),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(m,{label:"\u63D0\u95EE\u95EE\u9898"},{default:a(()=>[e(b,{class:"w-[280px]",modelValue:t(n).prompt,"onUpdate:modelValue":u[1]||(u[1]=l=>t(n).prompt=l),placeholder:"\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeyup:g(t(d),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),O,e(m,null,{default:a(()=>[e(p,{type:"primary",onClick:t(d)},{default:a(()=>[_("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(p,{onClick:t(F)},{default:a(()=>[_("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(E,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[L((c(),h(k,{size:"large",data:t(s).lists,height:"600",style:{width:"100%"}},{default:a(()=>[e(o,{label:"\u7528\u6237ID",prop:"user.id",sortable:"","min-width":"120"}),e(o,{label:"\u7528\u6237\u8D26\u53F7",prop:"user.account",sortable:"","min-width":"160"}),e(o,{label:"\u63D0\u793A\u8BCD",prop:"prompt",sortable:"","min-width":"200"}),e(o,{label:"\u4F7F\u7528\u6A21\u578B",prop:"model",sortable:"","min-width":"150"}),e(o,{label:"\u751F\u6210\u56FE\u50CF","min-width":"90"},{default:a(({row:l})=>[l.imageUrl!=""?(c(),h(V,{key:0,style:{width:"100px"},src:l.imageUrl,"zoom-rate":2,fit:"scale-down"},null,8,["src","zoom-rate"])):R("",!0)]),_:1}),e(o,{label:"\u6D88\u8017\u79EF\u5206",prop:"totalPoints",sortable:"","min-width":"130"}),e(o,{label:"\u7ED8\u56FE\u72B6\u6001",prop:"status",sortable:"","min-width":"130"}),e(o,{label:"\u7ED8\u56FE\u65F6\u95F4",prop:"createdAt",sortable:"","min-width":"180"}),e(o,{label:"\u64CD\u4F5C",width:"70",fixed:"right"},{default:a(({row:l})=>[e(p,{type:"danger",link:"",onClick:ee=>D(l.id)},{default:a(()=>[_(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[x,t(s).loading]]),C("div",Q,[e(B,{modelValue:t(s),"onUpdate:modelValue":u[2]||(u[2]=l=>$(s)?s.value=l:null),onChange:t(r)},null,8,["modelValue","onChange"])])]),_:1}),e(v,{ref:"editRef",onSuccess:t(r)},null,8,["onSuccess"])])}}});export{oe as default};