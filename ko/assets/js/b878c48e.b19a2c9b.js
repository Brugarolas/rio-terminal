"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[3086],{7849:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(5893),o=i(1151);const r={title:"Hyperlinks",language:"en"},t=void 0,l={id:"features/hyperlinks",title:"Hyperlinks",description:"Rio terminal supports opening hyperlinks from the terminal.",source:"@site/versioned_docs/version-0.x.x/features/hyperlinks.md",sourceDirName:"features",slug:"/features/hyperlinks",permalink:"/rio/ko/docs/0.x.x/features/hyperlinks",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/versioned_docs/version-0.x.x/features/hyperlinks.md",tags:[],version:"0.x.x",frontMatter:{title:"Hyperlinks",language:"en"},sidebar:"docs",previous:{title:"Color automation for navigation",permalink:"/rio/ko/docs/0.x.x/features/color-automation-for-navigation"},next:{title:"Kitty keyboard protocol",permalink:"/rio/ko/docs/0.x.x/features/kitty-keyboard-protocol"}},a={},c=[{value:"MacOS",id:"macos",level:2},{value:"Windows / Linux / BSD",id:"windows--linux--bsd",level:2},{value:"OSC 8",id:"osc-8",level:2},{value:"OSC 8 Example",id:"osc-8-example",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Rio terminal supports opening hyperlinks from the terminal."}),"\n",(0,s.jsx)(n.h2,{id:"macos",children:"MacOS"}),"\n",(0,s.jsxs)(n.p,{children:["To activate hyperlink feature hold ",(0,s.jsx)(n.code,{children:"Command"})," key when hovering a link:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Demo macos hyperlink",src:i(5241).Z+"",width:"960",height:"323"})}),"\n",(0,s.jsx)(n.h2,{id:"windows--linux--bsd",children:"Windows / Linux / BSD"}),"\n",(0,s.jsxs)(n.p,{children:["To activate hyperlink feature hold ",(0,s.jsx)(n.code,{children:"alt"})," key when hovering a link:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Demo windows hyperlink",src:i(2104).Z+"",width:"851",height:"288"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Demo linux hyperlink",src:i(9258).Z+"",width:"484",height:"186"})}),"\n",(0,s.jsx)(n.h2,{id:"osc-8",children:"OSC 8"}),"\n",(0,s.jsx)(n.p,{children:"Rio terminal support OSC 8 for defining hyperlinks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"OSC 8 ; [params] ; [url] ST\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"[params]"})," consists of zero or more colon-delimited key-value pairs. A key-value pair is formatted as ",(0,s.jsx)(n.code,{children:"key=value"}),". The only currently defined key is id."]}),"\n",(0,s.jsx)(n.p,{children:"If the url is absent then that ends the hyperlink. Typical usage would look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"OSC 8 ; ; https://example.com/ ST Link to example website OSC 8 ; ; ST\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Will work as default rio terminal hyperlinks, by holding command or ",(0,s.jsx)(n.code,{children:"alt"})," key (depending of your platform) and clicking the link."]}),"\n",(0,s.jsx)(n.h3,{id:"osc-8-example",children:"OSC 8 Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"printf '\\e]8;;https://raphamorim.io/rio/\\e\\\\This is a link\\e]8;;\\e\\\\\\n'\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Demo hyperlink using OSC 8",src:i(4379).Z+"",width:"1050",height:"524"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9258:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/demo-hyperlink-linux-339465d615924f3479be8f3160f2da24.png"},5241:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/demo-hyperlink-macos-bcd970e199272b3059983654cf7a47f4.gif"},4379:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/demo-hyperlink-osc-8-24440978c28617b4118f5caf4c2a6fff.png"},2104:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/demo-hyperlink-windows-ef5193d465c7c6f3278e60b9dcd3052c.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var s=i(7294);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);