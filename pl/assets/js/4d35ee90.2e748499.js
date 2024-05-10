"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[1353],{9760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(5893),i=t(1151);const r={title:"Plugins",language:"en"},s=void 0,a={id:"plugins",title:"Plugins",description:"Note: Plugins are not ready yet",source:"@site/versioned_docs/version-0.x.x/plugins.md",sourceDirName:".",slug:"/plugins",permalink:"/rio/pl/docs/0.x.x/plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/versioned_docs/version-0.x.x/plugins.md",tags:[],version:"0.x.x",frontMatter:{title:"Plugins",language:"en"}},l={},c=[{value:"Note: Plugins are not ready yet",id:"note-plugins-are-not-ready-yet",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"note-plugins-are-not-ready-yet",children:"Note: Plugins are not ready yet"}),"\n",(0,o.jsx)(n.p,{children:"Plugins in Rio terminal are powered by WebAssembly. Which means they can be written in any programming language, as long as it is able to be compiled to WebAssembly."}),"\n",(0,o.jsx)(n.p,{children:"Rio provides hooks and controlling functions to WASM modules that are loaded in initialization time. Let's take a look in a plugin written with JavaScript or Rust."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'#[link(wasm_import_module = "Rio")]\nextern "C" {\n    fn render() -> bool;\n}\n\n#[export_name = "render"]\npub fn render() {\n\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);