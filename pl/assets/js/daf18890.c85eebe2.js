"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[1382],{5553:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=o(5893),r=o(1151);const n={title:"Kitty keyboard protocol",language:"en"},i=void 0,a={id:"features/kitty-keyboard-protocol",title:"Kitty keyboard protocol",description:"Rio terminal implements Kitty keyboard protocol. It is disabled by default, for activate you need to set the configuration as true.",source:"@site/docs/features/kitty-keyboard-protocol.md",sourceDirName:"features",slug:"/features/kitty-keyboard-protocol",permalink:"/rio/pl/docs/features/kitty-keyboard-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/features/kitty-keyboard-protocol.md",tags:[],version:"current",frontMatter:{title:"Kitty keyboard protocol",language:"en"},sidebar:"tutorialSidebar",previous:{title:"iTerm Image Protocol",permalink:"/rio/pl/docs/features/iterm-image-protocol"},next:{title:"Multi windows",permalink:"/rio/pl/docs/features/multi-windows"}},l={},c=[{value:"How it works?",id:"how-it-works",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Rio terminal implements Kitty keyboard protocol. It is disabled by default, for activate you need to set the configuration as true."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:"use-kitty-keyboard-protocol = true\n"})}),"\n",(0,s.jsx)(t.h3,{id:"how-it-works",children:"How it works?"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Note: All the information of this page was retired from: ",(0,s.jsx)(t.a,{href:"https://sw.kovidgoyal.net/kitty/keyboard-protocol/",children:"sw.kovidgoyal.net/kitty/keyboard-protocol"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"There are various problems with the current state of keyboard handling in terminals. They include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"No way to use modifiers other than ctrl and alt"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"No way to reliably use multiple modifier keys, other than, shift+alt and ctrl+alt."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Many of the existing escape codes used to encode these events are ambiguous with different key presses mapping to the same escape code."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"No way to handle different types of keyboard events, such as press, release or repeat"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["No reliable way to distinguish single Esc key presses from the start of a escape sequence. Currently, client programs use fragile timing related hacks for this, leading to bugs, for example: ",(0,s.jsx)(t.a,{href:"https://github.com/neovim/neovim/issues/2035",children:"neovim #2035"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"To solve these issues and others, kitty has created a new keyboard protocol, that is backward compatible but allows applications to opt-in to support more advanced usages."}),"\n",(0,s.jsx)(t.p,{children:"You can see this protocol with all enhancements in action by running:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"kitten show_key -m kitty\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can also run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"kitty +kitten show_key -m kitty\n"})}),"\n",(0,s.jsx)(t.p,{children:"Below an example of Rio terminal with Kitty keyboard protocol by the following instructions (MacOS keyboard example)."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Press left shift, release shift"}),"\n",(0,s.jsx)(t.li,{children:"Press right shift, release shift"}),"\n",(0,s.jsx)(t.li,{children:"Press left command"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Demo kitty keyboard protocol",src:o(9273).Z+"",width:"1424",height:"1024"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9273:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/demo-kitty-keyboard-protocol-6e329aca6a1cb396ee848b19cf805b00.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var s=o(7294);const r={},n=s.createContext(r);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);