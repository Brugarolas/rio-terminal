"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[4690],{8098:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(5893),i=t(1151);const r={title:"Frequently Asked Questions",language:"en"},s=void 0,l={id:"frequently-asked-questions/index",title:"Frequently Asked Questions",description:"I get errors about the terminal being unknown or opening the terminal failing or functional keys like arrow keys don\u2019t work?",source:"@site/docs/frequently-asked-questions/index.md",sourceDirName:"frequently-asked-questions",slug:"/frequently-asked-questions/",permalink:"/rio/docs/next/frequently-asked-questions/",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/frequently-asked-questions/index.md",tags:[],version:"current",frontMatter:{title:"Frequently Asked Questions",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Vi mode",permalink:"/rio/docs/next/features/vi-mode"},next:{title:"Install",permalink:"/rio/docs/next/install/"}},a={},c=[{value:"I get errors about the terminal being unknown or opening the terminal failing or functional keys like arrow keys don\u2019t work?",id:"i-get-errors-about-the-terminal-being-unknown-or-opening-the-terminal-failing-or-functional-keys-like-arrow-keys-dont-work",level:3},{value:"Colors scheme not working as intended with tmux",id:"colors-scheme-not-working-as-intended-with-tmux",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"i-get-errors-about-the-terminal-being-unknown-or-opening-the-terminal-failing-or-functional-keys-like-arrow-keys-dont-work",children:"I get errors about the terminal being unknown or opening the terminal failing or functional keys like arrow keys don\u2019t work?"}),"\n",(0,o.jsx)(n.p,{children:"The famous case of \"'rio' unknown terminal type\"."}),"\n",(0,o.jsxs)(n.p,{children:["All the issues all have the same root cause: the rio terminfo is not available. The most common way this happens is SSHing into a computer that does not have the rio terminfo files. The simplest fix would be install the terminfo files on the remote machine (following terminfo instruction in install section ",(0,o.jsx)(n.a,{href:"/docs/0.x.x/install/terminfo",children:"install/terminfo"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["Other alternative is use a different terminfo either in config or per connection with environment variable like ",(0,o.jsx)(n.code,{children:"TERM=xterm-256color ssh"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you are using a well maintained Linux distribution, it will have a rio-terminfo package that you can simply install to make the rio terminfo files available system-wide. Then the problem will no longer occur. Arch Linux for example ",(0,o.jsx)(n.a,{href:"https://archlinux.org/packages/extra/x86_64/rio-terminfo/",children:"rio-terminfo"})]}),"\n",(0,o.jsx)(n.h3,{id:"colors-scheme-not-working-as-intended-with-tmux",children:"Colors scheme not working as intended with tmux"}),"\n",(0,o.jsx)(n.p,{children:"The reason it happens is because tmux is using 256 colors configuration, you need to enable it or stop using Rio term without tmux (in case want to keep with 256 colors)."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["In case your shell does not report this correctly, add the following to your ",(0,o.jsx)(n.code,{children:"~/.${SHELL}rc"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"export COLORTERM=truecolor\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Please also note you need to add true color override to your ",(0,o.jsx)(n.code,{children:".tmux.conf"})," file:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'set -g default-terminal "rio"\nset-option -ga terminal-overrides ",rio:Tc"\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Optionally you can also use ",(0,o.jsx)(n.code,{children:"screen-256color"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'set -g default-terminal "screen-256color"\nset-option -ga terminal-overrides ",screen-256color:Tc"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);