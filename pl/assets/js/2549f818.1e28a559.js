"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[2605],{7608:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var l=i(5893),s=i(1151);const r={title:"Configuration file",language:"en"},o=void 0,d={id:"configuration-file",title:"Configuration file",description:"The configuration should be the following paths otherwise Rio will use the default configuration.",source:"@site/versioned_docs/version-0.x.x/configuration-file.md",sourceDirName:".",slug:"/configuration-file",permalink:"/rio/pl/docs/0.x.x/configuration-file",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/versioned_docs/version-0.x.x/configuration-file.md",tags:[],version:"0.x.x",frontMatter:{title:"Configuration file",language:"en"},sidebar:"docs",previous:{title:"Command-line interface",permalink:"/rio/pl/docs/0.x.x/command-line-interface"},next:{title:"Escape Sequence Support",permalink:"/rio/pl/docs/0.x.x/escape-sequence-support"}},c={},a=[{value:"Cursor",id:"cursor",level:2},{value:"Line height",id:"line-height",level:2},{value:"Editor",id:"editor",level:2},{value:"Blinking Cursor",id:"blinking-cursor",level:2},{value:"Hide cursor when typing",id:"hide-cursor-when-typing",level:2},{value:"Ignore theme selection foreground color",id:"ignore-theme-selection-foreground-color",level:2},{value:"Themes",id:"themes",level:2},{value:"Padding-x",id:"padding-x",level:2},{value:"Option as Alt",id:"option-as-alt",level:2},{value:"Startup directory",id:"startup-directory",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Use fork",id:"use-fork",level:2},{value:"Confirm before quitting",id:"confirm-before-quitting",level:2},{value:"Window",id:"window",level:2},{value:"Using blur and background opacity:",id:"using-blur-and-background-opacity",level:3},{value:"Using image as background:",id:"using-image-as-background",level:3},{value:"Renderer",id:"renderer",level:2},{value:"Fonts",id:"fonts",level:2},{value:"Keyboard",id:"keyboard",level:2},{value:"Scroll",id:"scroll",level:2},{value:"Navigation",id:"navigation",level:2},{value:"Shell",id:"shell",level:2},{value:"Shell Examples",id:"shell-examples",level:3},{value:"Colors",id:"colors",level:2},{value:"Bindings",id:"bindings",level:2},{value:"Log level",id:"log-level",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"The configuration should be the following paths otherwise Rio will use the default configuration."}),"\n",(0,l.jsxs)(n.p,{children:["MacOS and Linux configuration file path is ",(0,l.jsx)(n.code,{children:"~/.config/rio/config.toml"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Windows configuration file path is ",(0,l.jsx)(n.code,{children:"C:\\Users\\USER\\AppData\\Local\\rio\\config.toml"}),' (replace "USER" with your user name).']}),"\n",(0,l.jsx)(n.p,{children:"Updates to the configuration file automatically triggers Rio to render the terminal with the new configuration."}),"\n",(0,l.jsx)(n.h2,{id:"cursor",children:"Cursor"}),"\n",(0,l.jsxs)(n.p,{children:["Default cursor is ",(0,l.jsx)(n.code,{children:"Block"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Other available options are: ",(0,l.jsx)(n.code,{children:"_"})," and ",(0,l.jsx)(n.code,{children:"|"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"cursor = '\u2587'\n"})}),"\n",(0,l.jsx)(n.h2,{id:"line-height",children:"Line height"}),"\n",(0,l.jsx)(n.p,{children:"This option will apply an modifier to line-height."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"line-height = 1.0\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Example with line-height as ",(0,l.jsx)(n.code,{children:"1.6"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://github.com/raphamorim/rio/assets/3630346/2700741e-f2bd-4fd8-ada1-b5f54ae4b20c",alt:"Demo line height 1.6"})}),"\n",(0,l.jsx)(n.h2,{id:"editor",children:"Editor"}),"\n",(0,l.jsxs)(n.p,{children:["Default editor is ",(0,l.jsx)(n.code,{children:"vi"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Whenever the key binding ",(0,l.jsx)(n.code,{children:"OpenConfigEditor"})," is triggered it will use the value of the editor along with the rio configuration path."]}),"\n",(0,l.jsx)(n.p,{children:"An example, considering you have VS Code installed and you want to use it as your editor:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"editor = 'code'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Whenever ",(0,l.jsx)(n.code,{children:"OpenConfigEditor"})," runs it will trigger ",(0,l.jsx)(n.code,{children:"$ code <path-to-rio-configuration-file>"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"blinking-cursor",children:"Blinking Cursor"}),"\n",(0,l.jsxs)(n.p,{children:["Default is ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"blinking-cursor = false\n"})}),"\n",(0,l.jsx)(n.h2,{id:"hide-cursor-when-typing",children:"Hide cursor when typing"}),"\n",(0,l.jsxs)(n.p,{children:["Default is ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"hide-cursor-when-typing = false\n"})}),"\n",(0,l.jsx)(n.h2,{id:"ignore-theme-selection-foreground-color",children:"Ignore theme selection foreground color"}),"\n",(0,l.jsxs)(n.p,{children:["Default is ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"ignore-selection-foreground-color = false\n"})}),"\n",(0,l.jsx)(n.h2,{id:"themes",children:"Themes"}),"\n",(0,l.jsx)(n.p,{children:"Rio looks for a specified theme in the themes folder."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["MacOS and Linux: ",(0,l.jsx)(n.code,{children:"~/.config/rio/themes/dracula.toml"})]}),"\n",(0,l.jsxs)(n.li,{children:["Windows: ",(0,l.jsx)(n.code,{children:"C:\\Users\\USER\\AppData\\Local\\rio\\themes\\dracula.toml"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'theme = "dracula"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"padding-x",children:"Padding-x"}),"\n",(0,l.jsx)(n.p,{children:"Define x axis padding (default is 0)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"padding-x = 10\n"})}),"\n",(0,l.jsx)(n.h2,{id:"option-as-alt",children:"Option as Alt"}),"\n",(0,l.jsx)(n.p,{children:"This config only works on MacOS."}),"\n",(0,l.jsxs)(n.p,{children:["Possible choices: ",(0,l.jsx)(n.code,{children:"both"}),", ",(0,l.jsx)(n.code,{children:"left"})," and ",(0,l.jsx)(n.code,{children:"right"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"option-as-alt = 'left'\n"})}),"\n",(0,l.jsx)(n.h2,{id:"startup-directory",children:"Startup directory"}),"\n",(0,l.jsx)(n.p,{children:"Directory the shell is started in. If this is unset the working directory of the parent process will be used."}),"\n",(0,l.jsxs)(n.p,{children:["This configuration only works if ",(0,l.jsx)(n.a,{href:"#use-fork",children:(0,l.jsx)(n.code,{children:"use-fork"})})," is disabled."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'working-dir = "/Users/raphael/Documents/"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"env-vars = []\n"})}),"\n",(0,l.jsx)(n.h2,{id:"use-fork",children:"Use fork"}),"\n",(0,l.jsx)(n.p,{children:"Defaults for POSIX-based systems (Windows is not configurable):"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MacOS: spawn processes"}),"\n",(0,l.jsx)(n.li,{children:"Linux/BSD: fork processes"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"use-fork = false\n"})}),"\n",(0,l.jsx)(n.h2,{id:"confirm-before-quitting",children:"Confirm before quitting"}),"\n",(0,l.jsxs)(n.p,{children:["Require confirmation before quitting (Default: ",(0,l.jsx)(n.code,{children:"true"}),")."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"confirm-before-quit = true\n"})}),"\n",(0,l.jsx)(n.h2,{id:"window",children:"Window"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"width"})," - define the initial window width."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Default: ",(0,l.jsx)(n.code,{children:"600"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"height"})," - define the initial window height."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Default: ",(0,l.jsx)(n.code,{children:"400"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"mode"})," - define how the window will be created"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Windowed"})," (default) is based on width and height"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Maximized"})," window is created with maximized"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Fullscreen"})," window is created with fullscreen"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"foreground-opacity"})," Set text opacity."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Default: ",(0,l.jsx)(n.code,{children:"1.0"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"background-opacity"})," Set background opacity."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Default: ",(0,l.jsx)(n.code,{children:"1.0"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"blur"})," Set blur on the window background. Changing this config requires restarting Rio to take effect."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Default: ",(0,l.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"background-image"})," Set an image as background."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Default: ",(0,l.jsx)(n.code,{children:"None"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"decorations"})," - Set window decorations"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Enabled"})," (default) enable window decorations."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Disabled"})," disable all window decorations."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Transparent"})," window decorations with transparency."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Buttonless"})," remove buttons from window decorations."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[window]\nwidth = 600\nheight = 400\nmode = "Windowed"\nforeground-opacity = 1.0\nbackground-opacity = 1.0\nblur = false\ndecorations = "Enabled"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"using-blur-and-background-opacity",children:"Using blur and background opacity:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"[window]\nforeground-opacity = 1.0\nbackground-opacity = 0.5\nblur = true\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Demo blur and background opacity",src:i(7018).Z+"",width:"1592",height:"1152"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Demo blur and background opacity 2",src:i(8523).Z+"",width:"1922",height:"1080"})}),"\n",(0,l.jsx)(n.h3,{id:"using-image-as-background",children:"Using image as background:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[window.background-image]\npath = "/Users/hugoamor/Desktop/musashi.png"\nopacity = 0.5\nwidth = 400.0\nheight = 400.0\nx = 0.0\ny = -100.0\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Demo image as background",src:i(7737).Z+"",width:"1538",height:"1064"})}),"\n",(0,l.jsx)(n.h2,{id:"renderer",children:"Renderer"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Performance"})," - Set WGPU rendering performance"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"High"}),": Adapter that has the highest performance. This is often a discrete GPU."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Low"}),": Adapter that uses the least possible power. This is often an integrated GPU."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Backend"})," - Set WGPU rendering backend"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Automatic"}),": Leave Sugarloaf/WGPU to decide"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"GL"}),": Supported on Linux/Android, and Windows and macOS/iOS via ANGLE"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Vulkan"}),": Supported on Windows, Linux/Android"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"DX12"}),": Supported on Windows 10"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Metal"}),": Supported on macOS/iOS"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"disable-unfocused-render"})," - This property disable renderer processes while Rio is unfocused."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[renderer]\nperformance = "High"\nbackend = "Automatic"\ndisable-unfocused-render = false\n'})}),"\n",(0,l.jsx)(n.h2,{id:"fonts",children:"Fonts"}),"\n",(0,l.jsx)(n.p,{children:"Configure fonts used by the terminal."}),"\n",(0,l.jsx)(n.p,{children:"Note: You can set different font families but Rio terminal\nwill always look for regular font bounds whene"}),"\n",(0,l.jsx)(n.p,{children:"You can also set family on root to overwrite all fonts."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[fonts]\nfamily = "cascadiamono"\n'})}),"\n",(0,l.jsx)(n.p,{children:"You can also specify extra fonts to load:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[fonts]\nextras = [{ family = "Microsoft JhengHei" }]\n'})}),"\n",(0,l.jsx)(n.p,{children:"The font configuration default:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[fonts]\nsize = 18\n\n[fonts.regular]\nfamily = "cascadiamono"\nstyle = "normal"\nweight = 400\n\n[fonts.bold]\nfamily = "cascadiamono"\nstyle = "normal"\nweight = 800\n\n[fonts.italic]\nfamily = "cascadiamono"\nstyle = "italic"\nweight = 400\n\n[fonts.bold-italic]\nfamily = "cascadiamono"\nstyle = "italic"\nweight = 800\n'})}),"\n",(0,l.jsx)(n.h2,{id:"keyboard",children:"Keyboard"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"use-kitty-keyboard-protocol"})," - Enable Kitty Keyboard protocol"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"disable-ctlseqs-alt"})," - Disable ctlseqs with ALT keys"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Useful for example if you would like Rio to replicate Terminal.app, since it does not deal with ctlseqs with ALT keys"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"[keyboard]\nuse-kitty-keyboard-protocol = false\ndisable-ctlseqs-alt = false\n"})}),"\n",(0,l.jsx)(n.h2,{id:"scroll",children:"Scroll"}),"\n",(0,l.jsxs)(n.p,{children:["You can change how many lines are scrolled each time by setting this option. Scroll calculation for canonical mode will be based on ",(0,l.jsx)(n.code,{children:"lines = (accumulated scroll * multiplier / divider)"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"If you want a quicker scroll, keep increasing the multiplier. If you want to reduce scroll speed you will need to increase the divider."}),"\n",(0,l.jsx)(n.p,{children:"You can combine both properties to find the best scroll for you."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Multiplier default is ",(0,l.jsx)(n.code,{children:"3.0"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Divider default is ",(0,l.jsx)(n.code,{children:"1.0"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"[scroll]\nmultiplier = 3.0\ndivider = 1.0\n"})}),"\n",(0,l.jsx)(n.h2,{id:"navigation",children:"Navigation"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"mode"})," - Define navigation mode"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"NativeTab"})," (MacOS only)"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"CollapsedTab"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"BottomTab"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"TopTab"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Breadcrumb"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Plain"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"clickable"})," - Enable click on tabs to switch."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"use-current-path"})," - Use same path whenever a new tab is created (Note: requires ",(0,l.jsx)(n.a,{href:"/docs/0.x.x/configuration-file/#use-fork",children:(0,l.jsx)(n.code,{children:"use-fork"})})," to be set to false)."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"color-automation"})," - Set a specific color for the tab whenever a specific program is running, or in a specific directory."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[navigation]\nmode = "CollapsedTab"\nclickable = false\nuse-current-path = false\ncolor-automation = []\n'})}),"\n",(0,l.jsx)(n.h2,{id:"shell",children:"Shell"}),"\n",(0,l.jsxs)(n.p,{children:["You can set ",(0,l.jsx)(n.code,{children:"shell.program"})," to the path of your favorite shell, e.g. ",(0,l.jsx)(n.code,{children:"/bin/fish"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Entries in ",(0,l.jsx)(n.code,{children:"shell.args"})," are passed unmodified as arguments to the shell."]}),"\n",(0,l.jsx)(n.p,{children:"Default:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"(macOS) user login shell"}),"\n",(0,l.jsx)(n.li,{children:"(Linux/BSD) user login shell"}),"\n",(0,l.jsx)(n.li,{children:"(Windows) powershell"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"shell-examples",children:"Shell Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"MacOS using fish shell from bin path:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[shell]\nprogram = "/bin/fish"\nargs = ["--login"]\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Windows using powershell:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[shell]\nprogram = "pwsh"\nargs = []\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"Windows using powershell with login:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[shell]\nprogram = "pwsh"\nargs = ["-l"]\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"MacOS with tmux installed by homebrew:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[shell]\nprogram = "/opt/homebrew/bin/tmux"\nargs = ["new-session", "-c", "/var/www"]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"colors",children:"Colors"}),"\n",(0,l.jsx)(n.p,{children:"Defining colors in the configuration file will not have any effect if you're using a theme."}),"\n",(0,l.jsx)(n.p,{children:"The default configuration is without a theme."}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"[colors]\nbackground = '#0F0D0E'\nforeground = '#F9F4DA'\ncursor = '#F38BA3'\ntabs = '#443d40'\ntabs-active = '#F38BA3'\ngreen = '#0BA95B'\nred = '#ED203D'\nblue = '#12B5E5'\nyellow = '#FCBA28'\n"})}),"\n",(0,l.jsx)(n.h2,{id:"bindings",children:"Bindings"}),"\n",(0,l.jsxs)(n.p,{children:["You can create custom key bindings for Rio terminal, ",(0,l.jsx)(n.a,{href:"/docs/0.x.x/key-bindings#custom-key-bindings",children:"more information"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[bindings]\nkeys = [\n  { key = "q", with = "super", action = "Quit" },\n  # Bytes[27, 91, 53, 126] is equivalent to "\\x1b[5~"\n  { key = "home", with = "super | shift", bytes = [27, 91, 53, 126] },\n]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"log-level",children:"Log level"}),"\n",(0,l.jsx)(n.p,{children:'This property enables log level filter. Default is "OFF".'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[developer]\nlog-level = "OFF"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["If you have any suggestion of configuration ideas to Rio, please feel free to ",(0,l.jsx)(n.a,{href:"https://github.com/raphamorim/rio/issues/new",children:"open an issue"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},7737:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/demo-background-image-4d29d27b29f4e444761920928e691218.png"},7018:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/demo-macos-blur-ebfc5442d2e668dd82f6be67a561a4bd.png"},8523:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/demos-nixos-blur-dfa4b67dda6acce0ed64d810d3276bac.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var l=i(7294);const s={},r=l.createContext(s);function o(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);