import{u as l}from"./jsxRuntime.module-BxqgnTr_.js";import{v as M}from"./v4-CtRu48qb.js";import"./preact.module-rHvS-6NF.js";function B({seasons:n,onSeasonChange:e}){return l("div",{className:"flex justify-center items-center gap-2",children:[l("span",{className:"text-lg",children:"Сезон"}),l("div",{className:"join",children:n.map(t=>l("input",{"aria-label":`${t.number}`,className:"join-item btn btn-md",name:"season-radio",onChange:()=>e(t.id),type:"radio"},t.id))})]})}const{addons:K}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:N}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:y}=__STORYBOOK_MODULE_GLOBAL__;var V=Object.defineProperty,Y=(n,e)=>{for(var t in e)V(n,t,{get:e[t],enumerable:!0})},W="storybook/actions",k=`${W}/action-event`,U={depth:10,clearOnStoryChange:!0,limit:50},j=(n,e)=>{let t=Object.getPrototypeOf(n);return!t||e(t)?t:j(t,e)},F=n=>!!(typeof n=="object"&&n&&j(n,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof n.persist=="function"),$=n=>{if(F(n)){let e=Object.create(n.constructor.prototype,Object.getOwnPropertyDescriptors(n));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(r.constructor.prototype)}),e}return n},z=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?M():Date.now().toString(36)+Math.random().toString(36).substring(2);function i(n,e={}){let t={...U,...e},r=function(...o){var O,h;if(e.implicit){let b=(O="__STORYBOOK_PREVIEW__"in y?y.__STORYBOOK_PREVIEW__:void 0)==null?void 0:O.storyRenders.find(d=>d.phase==="playing"||d.phase==="rendering");if(b){let d=!((h=globalThis==null?void 0:globalThis.FEATURES)!=null&&h.disallowImplicitActionsInRenderV8),f=new N({phase:b.phase,name:n,deprecated:d});if(d)console.warn(f);else throw f}}let a=K.getChannel(),s=z(),c=5,g=o.map($),L=o.length>1?g:g[0],w={id:s,count:0,data:{name:n,args:L},options:{...t,maxDepth:c+(t.depth||3),allowFunction:t.allowFunction||!1}};a.emit(k,w)};return r.isAction=!0,r.implicit=e.implicit,r}const{definePreview:te}=__STORYBOOK_MODULE_PREVIEW_API__,{global:u}=__STORYBOOK_MODULE_GLOBAL__;var G={};Y(G,{argsEnhancers:()=>J,loaders:()=>X});var I=(n,e)=>typeof e[n]>"u"&&!(n in e),q=n=>{let{initialArgs:e,argTypes:t,id:r,parameters:{actions:o}}=n;if(!o||o.disable||!o.argTypesRegex||!t)return{};let a=new RegExp(o.argTypesRegex);return Object.entries(t).filter(([s])=>!!a.test(s)).reduce((s,[c,g])=>(I(c,e)&&(s[c]=i(c,{implicit:!0,id:r})),s),{})},H=n=>{let{initialArgs:e,argTypes:t,parameters:{actions:r}}=n;return r!=null&&r.disable||!t?{}:Object.entries(t).filter(([o,a])=>!!a.action).reduce((o,[a,s])=>(I(a,e)&&(o[a]=i(typeof s.action=="string"?s.action:a)),o),{})},J=[H,q],S=!1,Q=n=>{let{parameters:{actions:e}}=n;if(!(e!=null&&e.disable)&&!S&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in u&&typeof u.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=u.__STORYBOOK_TEST_ON_MOCK_CALL__;t((r,o)=>{let a=r.getMockName();a!=="spy"&&(!/^next\/.*::/.test(a)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(s=>a.startsWith(s)))&&i(a)(o)}),S=!0}},X=[Q];const re={argTypes:{onSeasonChange:{action:"seasonChanged",description:"Callback when season is changed"},seasons:{control:"object",defaultValue:[{anime:"1",id:"1",number:1},{anime:"1",id:"2",number:2},{anime:"1",id:"3",number:3},{anime:"1",id:"4",number:4}],description:"Array of seasons to display"}},component:B,title:"Components/SeasonPagination"},m={args:{onSeasonChange:i("seasonChanged"),seasons:[{anime:"1",id:"1",number:1},{anime:"1",id:"2",number:2},{anime:"1",id:"3",number:3},{anime:"1",id:"4",number:4}]}},p={args:{onSeasonChange:i("seasonChanged"),seasons:[{anime:"1",id:"1",number:1}]}},_={args:{onSeasonChange:i("seasonChanged"),seasons:Array.from({length:10},(n,e)=>({anime:"1",id:String(e+1),number:e+1}))}};var E,R,T;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    onSeasonChange: action("seasonChanged"),
    seasons: [{
      anime: "1",
      id: "1",
      number: 1
    }, {
      anime: "1",
      id: "2",
      number: 2
    }, {
      anime: "1",
      id: "3",
      number: 3
    }, {
      anime: "1",
      id: "4",
      number: 4
    }]
  }
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var C,A,v;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    onSeasonChange: action("seasonChanged"),
    seasons: [{
      anime: "1",
      id: "1",
      number: 1
    }]
  }
}`,...(v=(A=p.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var x,D,P;_.parameters={..._.parameters,docs:{...(x=_.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    onSeasonChange: action("seasonChanged"),
    seasons: Array.from({
      length: 10
    }, (__, id) => ({
      anime: "1",
      id: String(id + 1),
      number: id + 1
    }))
  }
}`,...(P=(D=_.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const ae=["Default","SingleSeason","ManySeasons"];export{m as Default,_ as ManySeasons,p as SingleSeason,ae as __namedExportsOrder,re as default};
