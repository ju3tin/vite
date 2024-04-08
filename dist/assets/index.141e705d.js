import{m as j,n as K,P as M,r,u as E,a as L,b as R,A as I,c as U,j as e,f as S,d as k,S as B,e as q,g as c,h as H,i as T,B as $,k as F,R as W,l as G,C as V,W as Z,o as J}from"./vendor.28d89ec8.js";const Y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};Y();const Q=a=>`https://gravatar.com/avatar/${j(a)}?s=400&d=robohash&r=x`,X=()=>K(" "),ee="0.1.0",te="blog_sol",se=[{name:"USER_SEED",type:{defined:"&[u8]"},value:'b"user"'},{name:"POST_SEED",type:{defined:"&[u8]"},value:'b"post"'}],ne=[{name:"initUser",accounts:[{name:"userAccount",isMut:!0,isSigner:!1},{name:"authority",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"name",type:"string"},{name:"avatar",type:"string"}]},{name:"createPost",accounts:[{name:"postAccount",isMut:!0,isSigner:!1},{name:"userAccount",isMut:!0,isSigner:!1},{name:"authority",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"title",type:"string"},{name:"content",type:"string"}]}],ae=[{name:"UserAccount",type:{kind:"struct",fields:[{name:"name",type:"string"},{name:"avatar",type:"string"},{name:"authority",type:"publicKey"},{name:"lastPostId",type:"u8"},{name:"postCount",type:"u8"}]}},{name:"PostAccount",type:{kind:"struct",fields:[{name:"id",type:"u8"},{name:"title",type:"string"},{name:"content",type:"string"},{name:"user",type:"publicKey"},{name:"authority",type:"publicKey"}]}}],oe={address:"FVDLUX9ZnEp943trRR3taTCpEHbZouRRi1bkKqWHPb3j"};var A={version:ee,name:te,constants:se,instructions:ne,accounts:ae,metadata:oe};const re=new M(A.metadata.address),z=r.exports.createContext(),D=()=>{const a=r.exports.useContext(z);if(!a)throw new Error("Parent must be wrapped inside PostsProvider");return a},ce=({children:a})=>{const[o,n]=r.exports.useState(),[i,t]=r.exports.useState(!1),[s,u]=r.exports.useState([]),[h,m]=r.exports.useState(!1),[v,b]=r.exports.useState(!1),[f,N]=r.exports.useState(),w=E(),{connection:P}=L(),{publicKey:d}=R(),l=r.exports.useMemo(()=>{if(w){const g=new I(P,w,I.defaultOptions());return new U(A,re,g)}},[P,w]);r.exports.useEffect(()=>{(async()=>{if(l&&d)try{const[y]=await S([k.encode("user"),d.toBuffer()],l.programId),p=await l.account.userAccount.fetch(y);if(p){t(!0),n(p),N(p.lastPostId);const _=await l.account.postAccount.all(d.toString());u(_)}}catch(y){console.log(y),t(!1)}})()},[l,d,h]);const x=async()=>{if(l&&d)try{m(!0);const[g]=S([k.encode("user"),d.toBuffer()],l.programId),y=X(),p=Q(y);await l.methods.initUser(y,p).accounts({userAccount:g,authority:d,systemProgram:B.programId}).rpc(),t(!0)}catch(g){console.log(g)}finally{m(!1)}},O=async(g,y)=>{if(l&&d){m(!0);try{const[p]=S([k.encode("user"),d.toBuffer()],l.programId),[_]=S([k.encode("post"),d.toBuffer(),Uint8Array.from([f])],l.programId);await l.methods.createPost(g,y).accounts({userAccount:p,postAccount:_,authority:d,systemProgram:B.programId}).rpc(),b(!1)}catch(p){console.error(p)}finally{m(!1)}}};return e(z.Provider,{value:{user:o,posts:s,initialized:i,initUser:x,createPost:O,showModal:v,setShowModal:b},children:a})};async function ie(a,o){try{const n=await o.account.postAccount.fetch(new M(a)),i=n.user.toString();return i===B.programId.toString()?void 0:{id:a,title:n.title,content:n.content,userId:i}}catch(n){console.log(n.message)}}const le=new M(A.metadata.address);function de(a){return new U(A,le,a)}const ue=()=>{const{id:a}=q(),o=E(),{connection:n}=L(),[i,t]=r.exports.useState(),[s,u]=r.exports.useState();return r.exports.useEffect(()=>{try{i&&(async()=>{const m=de(i),v=await ie(a.toString(),m);u(v)})()}catch{}},[i]),r.exports.useEffect(()=>{if(o){const h=new I(n,o,{});t(h)}},[n,o]),c("article",{className:"hentry background-color",children:[e("div",{className:"featured-image",children:e("img",{src:"https://images.unsplash.com/photo-1531096187418-86ac6b31baea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d6cd4e7c48dfc78f5e9c0fb07b692f0&auto=format&fit=crop&w=1350&q=80",alt:""})}),e("h1",{className:"entry-title",children:s?.title}),e("div",{className:"entry-meta",children:c("p",{children:[c("span",{className:"author",children:["Written by ",e("a",{href:"#",children:"Lavi Perchik"})]})," ",e("span",{className:"date",children:"Monday, July 9, 2018"})]})}),e("div",{className:"entry-content",children:e("p",{children:s?.content})})]})},C=({children:a,loading:o=!1,disabled:n,className:i="",leftIcon:t,...s})=>(n=n||o,c("button",{disabled:n,className:`rounded-lg flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-gradient-to-r pink focus:outline-none shadow-md 
			${i} ${n?"opacity-60 cursor-not-allowed":"transform hover:-translate-y-px focus:shadow-sm focus:-translate-y-0"}
			`,...s,children:[!n&&!o&&t,n&&!o&&e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),o&&e("svg",{className:"animate-spin h-5 w-5 text-white mr-1",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"})}),a]})),me=a=>{const{user:o}=D(),{onSubmit:n,postTitle:i,postContent:t,setPostContent:s,setPostTitle:u,formHeader:h,buttonText:m="Post"}=a,[v,b]=r.exports.useState(!1);return c("div",{className:"rounded-lg py-4 px-6 bg- flex flex-col ",children:[h,e("input",{value:i,onChange:f=>u(f.target.value),type:"text",placeholder:"Post title",className:"bg-white rounded-3xl h-10 px-4 black"}),e("textarea",{value:t,onChange:f=>s(f.target.value),name:"content",id:"content-area",rows:3,placeholder:"Describe your post...",className:"bg-white rounded-xl px-4 py-2 mt-3 black"}),e(C,{className:"mt-3",disabled:!o,loading:v,onClick:async()=>{b(!0),await n(),b(!1)},children:m})]})},pe=()=>{const a=H(),[o,n]=r.exports.useState(!1),{connected:i,select:t}=R(),{user:s,posts:u,initialized:h,initUser:m,createPost:v,showModal:b,setShowModal:f}=D(),[N,w]=r.exports.useState(""),[P,d]=r.exports.useState(""),l=()=>{n(!0),t(T)};return r.exports.useEffect(()=>{s&&n(!1)},[s]),c("div",{className:"dashboard background-color overflow-auto h-screen",children:[e("header",{className:"fixed z-10 w-full h-14  shadow-md",children:c("div",{className:"flex justify-between items-center h-full container",children:[e("h2",{className:"text-2xl font-bold",children:e("div",{className:"bg-clip-text bg-gradient-to-br from-indigo-300 colorpink",children:"Onaki"})}),i?c("div",{className:"flex items-center",children:[e("p",{className:" font-bold text-sm ml-2 capitalize underlinepink",children:"Home"}),e("p",{className:" font-bold text-sm ml-2 capitalize mr-4 underlinepink",children:"Blog"}),e("img",{src:s?.avatar,alt:"avatar",className:"w-8 h-8 rounded-full bg-gray-200 shadow ring-2 ring-indigo-400 ring-offset-2 ring-opacity-50"}),e("p",{className:" font-bold text-sm ml-2 capitalize",children:s?.name}),h?e(C,{className:"ml-3 mr-2",onClick:()=>{f(!0)},children:"Create Post"}):e(C,{className:"ml-3 mr-2",onClick:()=>{m()},children:"Initialize User"})]}):e(C,{loading:o,className:"w-28",onClick:l,leftIcon:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),children:"Connect"})]})}),c("main",{className:"dashboard-main pb-4 container flex relative",children:[e("div",{className:"pt-3",children:c("div",{className:"row",children:[c("article",{className:"best-post",children:[e("div",{className:"best-post-image",style:{backgroundImage:'url("https://user-images.githubusercontent.com/62637513/184338364-a14b7272-d1dc-49f3-9f43-3ac37dacbe85.png")'}}),c("div",{className:"best-post-content",children:[c("div",{className:"best-post-content-cat",children:["December 2, 2021",e("span",{className:"dot",children:" "}),"Blog"]}),e("div",{className:"best-post-content-title",children:"Lorem ipsum dolor sit amet, consectetur"}),e("div",{className:"best-post-content-sub",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),e("div",{className:"all__posts",children:u.map(x=>e("article",{className:"post__card-2",onClick:()=>{a.push(`/read-post/${x.publicKey.toString()}`)},children:c("div",{className:"post__card_-2",children:[e("div",{className:"post__card__image-2",style:{backgroundImage:'url("https://user-images.githubusercontent.com/62637513/184338539-9cdbdc58-1e72-4c48-8203-0b7ec23d3eb0.png")'}}),e("div",{children:c("div",{className:"post__card_meta-2",children:[c("div",{className:"post__card_cat",children:["December 2, 2021",e("span",{className:"dot",children:" "}),x.account.title," "]}),e("p",{className:"post__card_alttitle-2",children:x.account.content})]})})]})},x.account.id))})]})}),e("div",{className:`modal ${b&&"show-modal"}`,children:c("div",{className:"modal-content",children:[e("span",{className:"close-button",onClick:()=>f(!1),children:"\xD7"}),e(me,{postTitle:N,postContent:P,setPostTitle:w,setPostContent:d,onSubmit:()=>v(N,P)})]})})]})]})},he=()=>e($,{children:c(F,{children:[e(W,{path:"/",exact:!0,children:e(pe,{})}),e(W,{path:"/read-post/:id",children:e(ue,{})})]})});const fe=()=>{const a="https://muddy-aged-panorama.solana-devnet.discover.quiknode.pro/0fe7822c98ade63f96ae1be8e82d17b26d57cacc/",o=r.exports.useMemo(()=>[new G],[]);return e(V,{endpoint:a,children:e(Z,{wallets:o,autoConnect:!0,children:e(ce,{children:e(he,{})})})})};J.render(e(fe,{}),document.getElementById("root"));
