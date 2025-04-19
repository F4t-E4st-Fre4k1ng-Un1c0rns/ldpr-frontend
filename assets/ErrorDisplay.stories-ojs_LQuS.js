import{u as e}from"./jsxRuntime.module-BxqgnTr_.js";import"./preact.module-rHvS-6NF.js";const N={404:"😢",498:"🌐",499:"🥺",500:"🥺"};class c extends Error{constructor(s="Ошибка (",m=499){super(s),this.type=m,this.name=s}}const S=({error:r})=>{const s=N[r.type],m=r instanceof Error?r.message:r;return e("div",{className:"container mx-auto p-4 w-100 max-w-ww",children:e("div",{className:"card bg-base-200 shadow-xl",children:e("div",{className:"card-body items-center text-center",children:[e("div",{className:"text-9xl mb-4",children:s}),e("h2",{className:"text-lg mb-4",children:m})]})})})},f={component:S,title:"Components/ErrorDisplay"},o={args:{error:new c("Аниме не найдено",404)}},a={args:{error:new c("Ошибка сети",498)}},t={args:{error:new c("Внутренняя ошибка сервера",500)}},n={args:{error:new c("Произошла ошибка")}};var i,p,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    error: new DisplayError("Аниме не найдено", 404)
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,E;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    error: new DisplayError("Ошибка сети", 498)
  }
}`,...(E=(u=a.parameters)==null?void 0:u.docs)==null?void 0:E.source}}};var g,w,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    error: new DisplayError("Внутренняя ошибка сервера", 500)
  }
}`,...(x=(w=t.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,h,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    error: new DisplayError("Произошла ошибка")
  }
}`,...(D=(h=n.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const O=["NotFound","NetworkError","ServerError","DefaultError"];export{n as DefaultError,a as NetworkError,o as NotFound,t as ServerError,O as __namedExportsOrder,f as default};
