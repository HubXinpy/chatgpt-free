import{e as w,q as T,f as U,s as v,aW as N,be as j,bf as O,b9 as S,ba as I,o as p,g as c,h as u,w as t,u as a,N as P,O as Z,Z as f,m as V,j as G,aY as L,aX as W,aZ as X}from"./.pnpm.aa9acb74.js";import{r as b,f as Y}from"./index.83cc6034.js";import{P as z}from"./index.6fbe50e6.js";function oe(d){return b.get({url:"/model/list",params:d})}function H(d){return b.get({url:"/model/detail",params:d})}function J(d){return b.post({url:"/model/update",params:d})}const K={class:"edit-popup"},Q={key:0,class:"form-tips"},$={key:1,class:"form-tips"},ee=G("div",{class:"form-tips"},"\u6570\u503C\u8D8A\u5927\u8D8A\u9760\u524D",-1),te=w({__name:"edit",emits:["success"],setup(d,{expose:k,emit:A}){const F=T("add"),B=U(()=>F.value=="edit"?"\u7F16\u8F91\u6A21\u578B":"\u6DFB\u52A0\u6A21\u578B"),_=v(),g=v(),l=N({id:0,driver:"openai",name:"",maxTokens:"4096",chargeMode:"tokens",chargeRate:"10",sort:"100",isDisable:0}),E=[{value:"openai",label:"openai"},{value:"midjourney",label:"midjourney"}],h={driver:[{required:!0,message:"\u8BF7\u9009\u62E9\u9A71\u52A8",trigger:"blur"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:"blur"}],maxTokens:[{required:!0,message:"\u8BF7\u8F93\u5165\u6700\u5927tokens",trigger:"blur"}],chargeMode:[{required:!0,message:"\u8BF7\u9009\u62E9\u8BA1\u8D39\u6A21\u5F0F",trigger:"blur"}],chargeRate:[{required:!0,message:"\u8F93\u5165\u8BA1\u8D39\u500D\u6570",trigger:"blur"}],sort:[{required:!0,message:"\u8F93\u5165\u6392\u5E8F\u6570\u5B57",trigger:"blur"}],isDisable:[{required:!0,message:"\u8BF7\u9009\u62E9\u72B6\u6001",trigger:"blur"}]},R=async r=>{const e=await H({id:r.id});for(const n in l)e[n]!=null&&e[n]!=null&&(l[n]=e[n])},x=async()=>{var r,e;await((r=_.value)==null?void 0:r.validate()),await J(l),(e=g.value)==null||e.close(),A("success"),Y.msgSuccess("\u64CD\u4F5C\u6210\u529F")},y=(r="add")=>{var e;F.value=r,(e=g.value)==null||e.open()},C=()=>{var r;(r=_.value)==null||r.resetFields()};return k({open:y,setFormData:R}),(r,e)=>{const n=j,M=O,s=L,i=W,m=S,D=I,q=X;return p(),c("div",K,[u(z,{ref_key:"popupRef",ref:g,title:a(B),async:!0,width:"550px",onClose:C,onConfirm:x},{default:t(()=>[u(q,{ref_key:"formRef",ref:_,model:a(l),rules:h,"label-width":"100px"},{default:t(()=>[u(s,{label:"\u6A21\u578B\u9A71\u52A8",prop:"driver"},{default:t(()=>[u(M,{modelValue:a(l).driver,"onUpdate:modelValue":e[0]||(e[0]=o=>a(l).driver=o),class:"w-[100%]"},{default:t(()=>[(p(),c(P,null,Z(E,o=>u(n,{key:o.value,label:o.label,value:o.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),u(s,{label:"\u6A21\u578B\u540D\u79F0",prop:"name"},{default:t(()=>[u(i,{modelValue:a(l).name,"onUpdate:modelValue":e[1]||(e[1]=o=>a(l).name=o),clearable:""},null,8,["modelValue"])]),_:1}),u(s,{label:"maxTokens",prop:"maxTokens"},{default:t(()=>[u(i,{modelValue:a(l).maxTokens,"onUpdate:modelValue":e[2]||(e[2]=o=>a(l).maxTokens=o),clearable:"",placeholder:"\u6700\u5927tokens"},null,8,["modelValue"])]),_:1}),u(s,{label:"\u8BA1\u8D39\u6A21\u5F0F",prop:"chargeMode"},{default:t(()=>[u(D,{modelValue:a(l).chargeMode,"onUpdate:modelValue":e[3]||(e[3]=o=>a(l).chargeMode=o)},{default:t(()=>[u(m,{label:"times"},{default:t(()=>[f("\u6B21\u6570")]),_:1}),u(m,{label:"tokens"},{default:t(()=>[f("tokens")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(s,{label:"\u8BA1\u8D39\u500D\u6570",prop:"chargeRate"},{default:t(()=>[u(i,{modelValue:a(l).chargeRate,"onUpdate:modelValue":e[4]||(e[4]=o=>a(l).chargeRate=o),clearable:"",placeholder:""},null,8,["modelValue"]),a(l).chargeMode=="times"?(p(),c("div",Q,"\u6D88\u8017\u79EF\u5206 = \u6B21\u6570 * \u500D\u6570")):V("",!0),a(l).chargeMode=="tokens"?(p(),c("div",$,"\u6D88\u8017\u79EF\u5206 = tokens * \u500D\u6570")):V("",!0)]),_:1}),u(s,{label:"\u5C55\u793A\u987A\u5E8F",prop:"sort"},{default:t(()=>[u(i,{modelValue:a(l).sort,"onUpdate:modelValue":e[5]||(e[5]=o=>a(l).sort=o),clearable:"",placeholder:"\u6570\u503C\u8D8A\u5927\u8D8A\u9760\u524D"},null,8,["modelValue"]),ee]),_:1}),u(s,{label:"\u542F\u7528\u72B6\u6001",prop:"isDisable"},{default:t(()=>[u(D,{modelValue:a(l).isDisable,"onUpdate:modelValue":e[6]||(e[6]=o=>a(l).isDisable=o)},{default:t(()=>[u(m,{label:0},{default:t(()=>[f("\u542F\u52A8")]),_:1}),u(m,{label:1},{default:t(()=>[f("\u7981\u7528")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{te as _,oe as g};