import{r as o,j as e,R as E}from"./index-DzXv2h3l.js";import{u as j}from"./useQuery-CG0m1S0n.js";import{c as C,a as f,L as p,b as Q}from"./StyledButton-_Y_F-r2m.js";import{F as J,f as H,L as e1,d as $,e as N,u as t1,j as a1,I as M,M as s1,N as n1}from"./owner-B8l3KTfh.js";import{p as L,k as P,n as r1,R as c1,L as i1,N as U,q as l1,A as o1,l as d1,X as m1,m as h1,B as u1}from"./utils--93wlG4H.js";import{b as _,u as x1}from"./viewport-CeMjbQNW.js";import{g as Y}from"./cookie-CxM6RtAL.js";import"./provider-BBJhObbf.js";import{f as p1}from"./index-DwfQl2qc.js";import{d as l,b as y,R as Z,e as j1,f as g1}from"./util-6tL4FOhW.js";import{b as f1,n as w1,W as v1,L as O,s as C1,C as N1}from"./alert-DAq4Pop4.js";import{F as q}from"./FloatPopover-BnlsEg74.js";import{M as M1,W as y1}from"./Gallery-BNxhLP-R.js";import"./use-is-dark-D7ASBa2u.js";import{m as V}from"./proxy-eQ4Uy79O.js";import{A as Z1}from"./index-Dyujttsy.js";import{D as h,a as x}from"./use-is-unmounted-ypfETvPA.js";import"./use-ref-value-De_876yy.js";import"./index-BzeFtr3G.js";import"./dom-BowoBODo.js";import"./spring-C80N1tKa.js";import"./image-BpFqU6dS.js";import"./customParseFormat-DQr1NHOz.js";import"./SocialSourceLink-BoLmzT6N.js";import"./use-drag-controls-yk-v0z6q.js";import"./visual-element-CCz8W7as.js";import"./LinkCard-BexWDOq2.js";import"./use-motion-template-iGYtahaS.js";import"./Shiki-ZkiNvCVS.js";import"./use-event-callback-ygsJ6s2h.js";import"./index-Cy7WcttL.js";import"./Collapse-BLTnWwGU.js";const k1=()=>{const t=J(s=>s.url);return{adminUrl:H(e1),...t}},b1=()=>{const{adminUrl:t}=k1();return o.useCallback(a=>{if(!t)return"";const s=new URL(t.replace(/\/$/,"")),n=Y();return n&&s.searchParams.set("token",n),`${s.protocol}//${s.host}${s.pathname}${a||""}${s.search}`},[t])},L1=t=>{const a=_();console.log(a);const s=b1(),{id:n,type:c,className:i}=t;if(!a)return null;const r=s(`#/${c}/edit?id=${n}`);return r?e.jsxs("a",{href:r,"data-hide-print":!0,target:"_blank",className:C("flex size-8 rounded-full text-accent no-underline opacity-80 ring-1 ring-slate-200 duration-200 center hover:opacity-100 dark:ring-neutral-800",i),rel:"noreferrer",children:[e.jsx("i",{className:"i-mingcute-quill-pen-line"}),e.jsx("span",{className:"sr-only",children:"编辑"})]}):null},A={"with-indent":"_with-indent_1ff6d_1","with-serif":"_with-serif_1ff6d_94"},A1=()=>{const t=l(s=>s?.data.title),a=l(s=>s?.data.id);return t?e.jsxs("div",{className:"relative",children:[e.jsx("h1",{className:"my-8 text-balance text-left text-4xl font-bold leading-tight text-base-content/95",children:t}),e.jsx(L1,{type:"notes",id:a,className:"absolute right-0 top-0"})]}):null},B1=()=>{const t=l(s=>s?.data.created);if(!t)return null;const a=$(t).locale("zh-cn").format("YYYY 年 M 月 D 日 dddd");return e.jsxs("span",{className:"inline-flex items-center space-x-1",children:[e.jsx(P,{}),e.jsx("time",{className:"font-medium",suppressHydrationWarning:!0,children:a})]})},T1=()=>{const t=l(s=>({created:s?.data.created,modified:s?.data.modified}));if(!t?.created)return null;const a=`创建于 ${L(t.created,"YYYY 年 M 月 D 日 dddd")}${t.modified?`，修改于 ${L(t.modified,"YYYY 年 M 月 D 日 dddd")}`:""}`;return e.jsx(q,{sheet:{triggerAsChild:!1},as:"span",mobileAsSheet:!0,type:"tooltip",TriggerComponent:B1,children:a})},I1=()=>{const t=l(a=>a?.data.text);return e.jsx(f1,{className:"mt-10",allowsScript:!0,renderers:F1,value:t})},D1=t=>{const a=l(s=>s?.data.images||w1);return e.jsx(M1,{images:a,children:t.children})},F1={text:{react(t,a,s){return e.jsx("span",{children:t.content},s?.key)}}},S1=t=>e.jsx("article",{className:f("prose relative",A["with-indent"],A["with-serif"]),children:t.children}),w=N(null),R1=o.memo(({nid:t,children:a})=>{const s=t1(w);return r1(()=>{a1.set(w,t)}),o.useEffect(()=>{s(t)},[t]),a});R1.displayName="CurrentNoteIdProvider";const W=()=>H(w),v={info:"bg-sky-50 dark:bg-sky-800 dark:text-white",warning:"bg-orange-100 dark:bg-orange-800 dark:text-white",error:"bg-rose-100 dark:bg-rose-800 dark:text-white",success:"bg-emerald-100 dark:bg-emerald-800 dark:text-white",secondary:"bg-sky-100 dark:bg-sky-800 dark:text-white"},z1=()=>{let a=l(s=>s?.data.meta)?.banner;if(a)return typeof a=="string"?{type:"info",message:a,className:v.info}:(a={...a},a.type??="info",a.className??=v[a.type],a)},E1=()=>{const t=z1();return t?e.jsx("div",{className:"mb-4 mt-8",children:e.jsx(H1,{...t})}):null},H1=t=>e.jsx("div",{className:C("mt-4 flex justify-center p-4 text-base leading-8","lg:-ml-12 lg:w-[calc(100%+6rem)]","mx-[var(--padding-h)]",v[t.type],t.className),style:t.style,children:t.message});function $1(t){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"m15.54 3.5l4.96 4.97l-1.43 1.41l-4.95-4.95l1.42-1.43M3.5 19.78l6.5-6.47c-.1-.31-.03-.7.23-.96c.39-.39 1.03-.39 1.42 0c.39.4.39 1.03 0 1.42c-.26.26-.65.33-.96.23l-6.47 6.5l10.61-3.55l3.53-6.36l-4.94-4.95l-6.37 3.53L3.5 19.78Z"})})}const P1={allowedTypes:["text","paragraph","codeInline","link","linkMailtoDetector","linkBareUrlDetector","linkAngleBraceStyleDetector","textStrikethroughed","textEmphasized","textBolded","textEscaped"],forceBlock:!0,wrapper:({children:t})=>e.jsx("div",{className:"leading-7",children:t})},B=t=>e.jsx(v1,{options:P1,children:t.children}),U1=t=>{const{topic:a}=t,{id:s}=a,{data:n,isLoading:c}=j({queryKey:[`topic-${s}`],queryFn:()=>M.note.getNoteByTopicId(s,1,1,{sortBy:"created",sortOrder:-1})}),i=x1();return p1()?e.jsxs("div",{className:"flex w-[400px] flex-col",children:[e.jsxs(p,{href:y(Z.NoteTopic,{slug:a.slug}),children:[e.jsx("h1",{className:"!m-0 inline-block pb-2 text-lg font-medium",children:a.name}),i&&e.jsx("i",{className:"i-mingcute-arrow-right-up-line ml-2 translate-y-[2px] opacity-70"})]}),e.jsx("div",{className:"line-clamp-2 break-all text-neutral-content",children:e.jsx(B,{children:a.introduce})}),a.description&&e.jsxs(e.Fragment,{children:[e.jsx(h,{}),e.jsx("div",{className:"leading-8 opacity-90",children:e.jsx(B,{children:a.description})})]}),e.jsx(h,{}),c?e.jsx(O,{className:"my-4"}):n?.data[0]&&e.jsxs("p",{className:"flex items-center",children:[e.jsx(P,{}),e.jsx(x,{}),e.jsx("span",{className:"shrink-0",children:"最近更新"}),e.jsx(x,{}),e.jsxs("span",{className:"inline-flex min-w-0 shrink",children:[e.jsx(p,{href:`/data?.data/${n?.data[0].nid}`,className:"truncate",children:n?.data[0]?.title}),e.jsxs("span",{className:"shrink-0",children:["（",e.jsx(c1,{date:n?.data[0].modified||n?.data[0].created,displayAbsoluteTimeAfterDay:1/0}),"）"]})]})]}),!c&&e.jsxs(e.Fragment,{children:[e.jsx(h,{}),e.jsxs("p",{className:"flex items-center",children:[e.jsx($1,{}),e.jsx(x,{}),"共有文章：",n?.pagination?.total," 篇"]})]})]}):null},_1=()=>{const t=l(a=>a?.data.topic);return t?e.jsx(p,{href:y(Z.NoteTopic,{slug:t.slug}),children:e.jsx("span",{className:"grow truncate opacity-80 hover:opacity-100",children:t.name})}):null},Y1=({children:t})=>{const a=l(r=>r?.data.publicAt),s=l(r=>r?.data.nid),n=o.useMemo(()=>new Date(a),[a]),c=a?$(a).isAfter(new Date):!1,i=_();if(o.useEffect(()=>{if(!s)return;let r;const d=+n-Date.now();return c&&d&&d<28&&(r=setTimeout(()=>{s1("刷新以查看解锁的文章","info",{autoClose:!1})},d)),()=>{clearTimeout(r)}},[c,n,s]),!s)return null;if(c){const r=a?Intl.DateTimeFormat("zh-cn",{hour12:!1,hour:"numeric",minute:"numeric",year:"numeric",day:"numeric",month:"long"}).format(new Date(a)):"";return i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"my-6 text-center",children:[e.jsxs("p",{children:["这是一篇非公开的文章。(将在 ",r," 解锁)"]}),e.jsx("p",{children:"现在处于登录状态，预览模式："})]}),t]}):e.jsxs("div",{className:"my-6 text-center",children:["这篇文章暂时没有公开呢，将会在 ",r," 解锁，再等等哦"]})}return t};N(0);const T=Q({base:"text-neutral-content min-w-0 truncate text-left opacity-50 transition-all tabular-nums hover:opacity-80",variants:{status:{active:"ml-2 opacity-100"}}}),I={opacity:1e-4},O1={opacity:1},k=o.memo(t=>{const{active:a,nid:s,title:n,layout:c,attachToken:i}=t,r=y(Z.Note,{id:s});return e.jsxs(V.li,{layout:c,className:"flex items-center",layoutId:c?`note-${s}`:void 0,initial:I,animate:O1,exit:I,children:[a&&e.jsx(i1,{as:"span",className:"inline-flex items-center",children:e.jsx("i",{className:"i-material-symbols-arrow-circle-right-outline-rounded duration-200"})}),e.jsx(p,{onClick:C1,className:C(a?T({status:"active"}):T()),href:i?`${r}?token=${Y()}`:r,scroll:!1,children:n})]})});k.displayName="MemoedItem";const q1=o.memo(()=>W()?e.jsx(W1,{}):null);q1.displayName="NoteTimeline";const V1={transition:{staggerChildren:.5}},W1=()=>{const t=l(i=>{const r=i?.data;return r?{id:r.id,nid:r.nid,title:r.title,created:r.created,hide:r.hide}:null}),a=W(),s=t?.id,{data:n}=j({queryKey:["note_timeline",s],queryFn:async({queryKey:i})=>{const[,r]=i;if(!r)throw"";return(await M.note.getMiddleList(r,10)).$serialized.data},enabled:s!==void 0,placeholderData:n1}),c=t?[{title:t.title,nid:t.nid,id:t.id,created:t.created,hide:t.hide}]:[];return e.jsx(Z1,{children:e.jsx(V.ul,{className:"space-y-1 [&_i]:hover:text-accent",animate:V1,children:(n||c)?.map(i=>{const r=i.nid===Number.parseInt(a||"0");return e.jsx(k,{layout:!0,active:r,title:i.title,nid:i.nid,attachToken:i.hide},i.id)})})})},X1=o.memo(()=>{const t=l(a=>a?.data.topic);return t?e.jsxs(e.Fragment,{children:[e.jsx(h,{className:"!w-3/4"}),e.jsx("p",{className:"mb-1 flex min-w-0 flex-col overflow-hidden text-neutral-content/50",children:"此文章收录于专栏："}),e.jsx(q,{placement:"right",strategy:"fixed",wrapperClassName:"flex flex-grow flex-shrink min-w-0",TriggerComponent:_1,children:e.jsx(U1,{topic:t})}),t.id&&e.jsx(G1,{topicId:t.id})]}):null});X1.displayName="NoteTopicInfo";const G1=({topicId:t})=>{const a=l(c=>c?.data.id),{data:s}=j({queryKey:[`topic-${t}`],refetchOnMount:!0,queryFn:()=>M.note.getNoteByTopicId(t,1,6,{sortBy:"created",sortOrder:-1})}),n=o.useMemo(()=>{if(!s)return null;const{data:c}=s;return c.filter(i=>i.id!==a).slice(0,5)},[a,s]);return e.jsx(e.Fragment,{children:!!n?.length&&e.jsxs(e.Fragment,{children:[e.jsx(h,{}),e.jsx("p",{className:"mb-1 flex min-w-0 flex-col overflow-hidden text-neutral-content/50",children:"此专栏的其他文章："}),e.jsx("ul",{className:"space-y-1 opacity-80",children:n.map(c=>e.jsx(k,{attachToken:c.hide,active:!1,title:c.title,nid:c.nid},c.id))})]})})};function K1(t){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",...t,children:e.jsx("path",{fill:"currentColor",d:"M7.651 11.628c-.406 0-.713-.149-.92-.445c-.209-.295-.312-.69-.312-1.182c0-1.084.41-1.627 1.232-1.627c.164 0 .342.055.534.164s.353.3.484.574l1.232-.64c-.492-.887-1.308-1.33-2.447-1.33c-.778 0-1.422.257-1.93.771c-.51.516-.765 1.211-.765 2.088c0 .898.253 1.6.756 2.103c.504.504 1.168.754 1.988.754a2.697 2.697 0 0 0 2.416-1.445l-1.135-.574c-.219.525-.597.789-1.133.789zm5.307 0c-.406 0-.713-.149-.92-.445c-.209-.295-.312-.69-.312-1.182c0-1.084.41-1.627 1.232-1.627c.174 0 .357.055.549.164c.192.11.353.3.486.574l1.215-.64c-.482-.887-1.293-1.33-2.432-1.33c-.777 0-1.42.257-1.93.771c-.509.516-.763 1.211-.763 2.088c0 .898.248 1.6.747 2.103c.498.504 1.163.754 1.996.754c.503 0 .97-.129 1.396-.384a2.831 2.831 0 0 0 1.02-1.06l-1.151-.575c-.219.525-.598.789-1.133.789zm3.855-8.444C14.954 1.328 12.679.4 9.987.4c-2.659 0-4.91.928-6.752 2.784C1.345 5.104.4 7.375.4 10c0 2.624.945 4.88 2.835 6.768c1.89 1.888 4.142 2.832 6.752 2.832c2.644 0 4.935-.952 6.874-2.856C18.687 14.936 19.6 12.688 19.6 10c0-2.688-.93-4.96-2.787-6.816zM15.61 15.496c-1.586 1.568-3.452 2.352-5.6 2.352c-2.146 0-3.996-.776-5.55-2.329c-1.554-1.551-2.33-3.391-2.33-5.52c0-2.127.784-3.983 2.354-5.567C5.99 2.896 7.832 2.127 10.01 2.127c2.18 0 4.03.769 5.552 2.305C17.101 5.952 17.87 7.807 17.87 10c0 2.208-.753 4.04-2.259 5.496z"})})}function D(t){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 256 256",...t,children:e.jsx("path",{fill:"currentColor",d:"M128 56a72 72 0 1 0 72 72a72.1 72.1 0 0 0-72-72Zm0 120a48 48 0 1 1 48-48a48 48 0 0 1-48 48ZM116 28V12a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0Zm74.2 37.8a12 12 0 0 1 0-17l11.3-11.3a12 12 0 0 1 17 17l-11.3 11.3a12 12 0 0 1-8.5 3.5a12.2 12.2 0 0 1-8.5-3.5ZM256 128a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12Zm-37.5 73.5a12 12 0 0 1 0 17a11.6 11.6 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5l-11.3-11.3a12 12 0 0 1 17-17ZM140 228v16a12 12 0 0 1-24 0v-16a12 12 0 0 1 24 0Zm-74.2-37.8a12 12 0 0 1 0 17l-11.3 11.3A12 12 0 0 1 46 222a11.6 11.6 0 0 1-8.5-3.5a12 12 0 0 1 0-17l11.3-11.3a12 12 0 0 1 17 0ZM28 140H12a12 12 0 0 1 0-24h16a12 12 0 0 1 0 24Zm9.5-85.5a12 12 0 0 1 17-17l11.3 11.3a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5Z"})})}function F(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",children:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M11 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm10 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-9.2 3.4a1 1 0 1 0-1.6 1.2c.69.92 2.688 2.4 5.8 2.4c3.112 0 5.11-1.48 5.8-2.4a1 1 0 0 0-1.6-1.2c-.31.413-1.712 1.6-4.2 1.6c-2.488 0-3.89-1.188-4.2-1.6Z"}),e.jsx("path",{d:"M4.763 5.423C7.313 2.654 11.095 1 16 1c4.904 0 8.686 1.654 11.235 4.423c2.537 2.755 3.764 6.515 3.764 10.576c0 4.061-1.227 7.82-3.764 10.576c-2.55 2.769-6.331 4.423-11.235 4.423c-4.904 0-8.686-1.654-11.236-4.423C2.226 23.82 1 20.06 1 15.999c0-4.061 1.226-7.821 3.763-10.576Zm1.472 1.355C4.105 9.089 3 12.328 3 15.998c0 3.671 1.106 6.91 3.235 9.222c2.116 2.298 5.333 3.778 9.764 3.778c4.43 0 7.648-1.48 9.764-3.778c2.129-2.311 3.235-5.55 3.235-9.221c0-3.67-1.106-6.91-3.235-9.221C23.647 4.48 20.43 3 16 3S8.352 4.48 6.236 6.778Z"})]})})}function Q1(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",children:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M9.07 9.988c-.594.563-.952 1.24-1.096 1.67a.5.5 0 1 1-.948-.316c.19-.57.631-1.392 1.355-2.08C9.113 8.567 10.148 8 11.5 8a.5.5 0 1 1 0 1c-1.048 0-1.846.433-2.43.988ZM14 15a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-4 10a1.99 1.99 0 0 1-.619 1.446A2 2 0 0 1 6 25v-3a2 2 0 1 1 4 0v3Zm11-7a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-8.707 4.293a1 1 0 0 0 1.404 1.424l.008-.007a2.7 2.7 0 0 1 .492-.315c.378-.19.976-.395 1.803-.395s1.425.206 1.803.394a2.7 2.7 0 0 1 .492.316l.008.007a1 1 0 0 0 1.404-1.424l-.001-.002l-.002-.001l-.003-.003l-.008-.008l-.02-.02a3.347 3.347 0 0 0-.26-.215a4.69 4.69 0 0 0-.716-.438C18.075 21.294 17.173 21 16 21s-2.075.294-2.697.606a4.69 4.69 0 0 0-.716.438a3.347 3.347 0 0 0-.26.215l-.02.02l-.008.008l-.003.003l-.002.002h-.001ZM22.93 9.988c.594.563.952 1.24 1.096 1.67a.5.5 0 1 0 .948-.316c-.19-.57-.631-1.392-1.355-2.08C22.887 8.567 21.852 8 20.5 8a.5.5 0 1 0 0 1c1.048 0 1.846.433 2.43.988Z"}),e.jsx("path",{d:"M4.763 5.423C7.313 2.654 11.095 1 16 1c4.904 0 8.686 1.654 11.235 4.423c2.537 2.755 3.764 6.515 3.764 10.576c0 4.061-1.227 7.82-3.764 10.576c-2.55 2.769-6.331 4.423-11.235 4.423c-4.904 0-8.686-1.654-11.236-4.423C2.226 23.82 1 20.06 1 15.999c0-4.061 1.226-7.821 3.763-10.576Zm1.472 1.355C4.105 9.089 3 12.328 3 15.998c0 2.879.68 5.492 2 7.6V25a3 3 0 0 0 4.463 2.62c1.78.875 3.952 1.378 6.536 1.378c4.43 0 7.648-1.48 9.764-3.778c2.129-2.311 3.235-5.55 3.235-9.221c0-3.67-1.106-6.91-3.235-9.221C23.647 4.48 20.43 3 16 3S8.352 4.48 6.236 6.778Z"})]})})}function J1(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",children:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M14.211 19a4.442 4.442 0 0 1-3.68 1.95c-.452 0-.889-.067-1.301-.192a.147.147 0 0 0-.19.138a1.104 1.104 0 0 1-2.209 0V20a1 1 0 0 1 1-1h6.38Zm3.539 0a4.442 4.442 0 0 0 3.68 1.95c.452 0 .89-.067 1.302-.192c.093-.029.19.04.19.138a1.104 1.104 0 0 0 2.208 0V20a1 1 0 0 0-1-1h-6.38ZM10.016 7.404l.003-.016a.5.5 0 0 1 .986.165l-.493-.082l.493.083v.002l-.001.004l-.002.01a1.753 1.753 0 0 1-.033.151a4.498 4.498 0 0 1-.745 1.552c-.65.866-1.795 1.702-3.718 1.702a.5.5 0 0 1 0-1c1.583 0 2.44-.667 2.917-1.302a3.496 3.496 0 0 0 .575-1.194l.018-.075Zm12.007 0l-.003-.016v-.001a.5.5 0 0 0-.986.166l.493-.082l-.493.083v.002l.001.004l.002.01a1.753 1.753 0 0 0 .034.151a4.494 4.494 0 0 0 .745 1.552c.65.866 1.794 1.702 3.717 1.702a.5.5 0 1 0 0-1c-1.583 0-2.44-.667-2.917-1.302a3.497 3.497 0 0 1-.575-1.194a1.791 1.791 0 0 1-.018-.075Zm-8.506 15.031a.75.75 0 0 0-1.003 1.115c.926.834 2.25 1.206 3.506 1.206c1.254 0 2.58-.372 3.506-1.206a.75.75 0 1 0-1.004-1.115c-.576.518-1.504.822-2.502.822c-.999 0-1.927-.304-2.503-.822Zm1.3-6.15c0 .619-.152 1.202-.42 1.715H7.834a3.701 3.701 0 1 1 6.982-1.715Zm-1.288.054c.546-.378.614-1.226.151-1.894c-.462-.669-1.28-.904-1.826-.527c-.546.378-.614 1.227-.151 1.895c.462.668 1.28.904 1.826.526ZM17.565 18h6.561a3.701 3.701 0 1 0-6.561 0Zm5.446-1.66c-.546.377-1.364.141-1.826-.527c-.463-.668-.395-1.517.151-1.895c.547-.377 1.364-.142 1.827.527c.462.668.394 1.516-.152 1.894Z"}),e.jsx("path",{d:"M4.768 5.391C7.321 2.62 11.108.963 16.018.963s8.698 1.656 11.25 4.428c2.541 2.759 3.769 6.524 3.769 10.59c0 4.067-1.228 7.832-3.768 10.59C24.716 29.343 20.929 31 16.019 31S7.32 29.343 4.768 26.57C2.227 23.813 1 20.048 1 15.981c0-4.066 1.228-7.831 3.768-10.59ZM6.24 6.746C4.108 9.061 3 12.306 3 15.981c0 3.676 1.108 6.92 3.24 9.236C8.359 27.517 11.58 29 16.018 29c4.438 0 7.66-1.482 9.78-3.784c2.131-2.315 3.239-5.559 3.239-9.235c0-3.675-1.108-6.92-3.24-9.235c-2.12-2.301-5.341-3.783-9.779-3.783c-4.437 0-7.659 1.482-9.778 3.783Z"})]})})}function S(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",children:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M14.999 13.29a.75.75 0 0 0-.71-.789c-.828-.044-1.504-.241-2.039-.613c-.527-.367-.979-.948-1.289-1.876a.75.75 0 1 0-1.422.476c.394 1.18 1.019 2.049 1.854 2.63c.828.577 1.8.827 2.817.88a.75.75 0 0 0 .789-.708Zm2.002 0a.75.75 0 0 1 .709-.789c.83-.044 1.505-.241 2.04-.613c.526-.367.978-.948 1.289-1.876a.75.75 0 1 1 1.422.476c-.394 1.18-1.019 2.049-1.854 2.63c-.828.577-1.8.827-2.817.88a.75.75 0 0 1-.79-.708Zm-4.107 12.157C13.066 25.104 13.995 24 16 24s2.934 1.104 3.105 1.447a1 1 0 0 0 1.79-.894C20.398 23.563 18.794 22 16 22c-2.795 0-4.4 1.562-4.895 2.553a1 1 0 0 0 1.79.894ZM12 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm8 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"}),e.jsx("path",{d:"M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Zm11.999-14c0 3.476-1.046 6.455-2.97 8.545c-1.9 2.063-4.835 3.455-9.03 3.455c-4.193 0-7.128-1.393-9.028-3.455C5.046 22.453 4 19.473 4 15.999c0-3.475 1.046-6.454 2.97-8.544C8.87 5.392 11.805 4 16 4s7.129 1.392 9.028 3.455c1.925 2.09 2.97 5.07 2.97 8.544Z"})]})})}function e2(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",children:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M13 5.5a.5.5 0 0 0-1 0c0 .864-.32 1.476-.77 1.876c-.46.409-1.087.624-1.73.624a.5.5 0 0 0 0 1c.857 0 1.73-.285 2.395-.876C12.569 7.524 13 6.636 13 5.5Zm6.5-.5a.5.5 0 0 0-.5.5c0 1.136.43 2.024 1.105 2.624c.666.591 1.538.876 2.395.876a.5.5 0 0 0 0-1c-.643 0-1.27-.215-1.73-.624c-.45-.4-.77-1.012-.77-1.876a.5.5 0 0 0-.5-.5Zm4 19c.829 0 1.513-.677 1.377-1.494a9.002 9.002 0 0 0-17.754 0C6.987 23.323 7.671 24 8.5 24h15ZM8.106 10.553a1 1 0 0 1 1.341-.448l4 2a1 1 0 0 1 0 1.79l-4 2a1 1 0 1 1-.894-1.79L10.763 13l-2.21-1.106a1 1 0 0 1-.447-1.341Zm14.447-.448a1 1 0 0 1 .894 1.79L21.237 13l2.21 1.105a1 1 0 0 1-.894 1.79l-4-2a1 1 0 0 1 0-1.79l4-2Z"}),e.jsx("path",{d:"M15.999 1C11.095 1 7.313 2.654 4.763 5.423C2.226 8.178 1 11.938 1 15.999c0 4.061 1.226 7.82 3.763 10.576c2.55 2.769 6.332 4.423 11.236 4.423c4.904 0 8.686-1.654 11.235-4.423c2.537-2.755 3.764-6.515 3.764-10.576c0-4.061-1.227-7.821-3.764-10.576C24.684 2.654 20.903 1 16 1ZM3 15.999c0-3.67 1.106-6.91 3.235-9.221C8.35 4.48 11.568 3 15.999 3c4.43 0 7.648 1.48 9.764 3.778c2.129 2.311 3.235 5.55 3.235 9.22c0 3.671-1.106 6.91-3.235 9.222c-2.116 2.298-5.333 3.778-9.764 3.778c-4.43 0-7.648-1.48-9.764-3.778C4.105 22.91 3 19.67 3 16Z"})]})})}function R(){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",children:[e.jsx("path",{fill:"currentColor",d:"M8 22v-3h16v3H8Zm3-7a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm10 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"}),e.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.765 5.423C7.315 2.654 11.096 1 16 1c4.904 0 8.686 1.654 11.235 4.423C29.773 8.178 31 11.938 31 15.999c0 4.061-1.226 7.82-3.764 10.576c-2.55 2.769-6.331 4.423-11.235 4.423c-4.904 0-8.686-1.654-11.235-4.423C2.227 23.82 1 20.06 1 15.999c0-4.061 1.226-7.821 3.764-10.576Zm-1.726 9.41a17.66 17.66 0 0 0-.038 1.166c0 2.189.393 4.224 1.162 6.001H8v2h16v-2h3.837c.769-1.777 1.162-3.812 1.162-6.001c0-.394-.013-.783-.038-1.166L24 17.589V17H8v.589l-4.96-2.756Zm.283-2.131l5.593 3.107c.152-.092.318-.164.496-.212C11.073 15.153 13.876 14.5 16 14.5c2.124 0 4.927.653 6.589 1.097c.178.048.344.12.495.212l5.594-3.107c-.47-2.306-1.45-4.335-2.914-5.924C23.648 4.48 20.431 3 16 3c-4.43 0-7.648 1.48-9.764 3.778c-1.464 1.59-2.444 3.618-2.914 5.924ZM26.736 24h-2.759a1.868 1.868 0 0 1-1.181 1.484C21.22 26.076 18.379 27 16 27c-2.379 0-5.22-.924-6.796-1.516A1.868 1.868 0 0 1 8.023 24H5.264c.296.43.62.838.972 1.22c2.116 2.298 5.333 3.778 9.764 3.778c4.43 0 7.648-1.48 9.764-3.778c.352-.382.676-.79.972-1.22Z",clipRule:"evenodd"})]})}function t2(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",children:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M6.235 6.778c-1.84 1.996-2.915 4.685-3.174 7.746l-2.053 2.053A19.92 19.92 0 0 1 1 16c0-4.061 1.226-7.821 3.763-10.576C7.313 2.654 11.095 1 16 1c4.904 0 8.686 1.654 11.235 4.423c2.537 2.755 3.764 6.515 3.764 10.576l-.003.332l-2.084-2.085c-.3-2.945-1.365-5.532-3.148-7.468C23.647 4.48 20.43 3 16 3S8.352 4.48 6.236 6.778ZM27.937 21.76a11.491 11.491 0 0 1-2.174 3.46c-2.116 2.298-5.333 3.778-9.764 3.778c-4.43 0-7.648-1.48-9.764-3.778a11.47 11.47 0 0 1-2.14-3.38a3.138 3.138 0 0 1-2.175-.092c.624 1.803 1.568 3.442 2.843 4.827c2.55 2.769 6.332 4.423 11.236 4.423c4.904 0 8.686-1.654 11.235-4.423c1.25-1.358 2.183-2.96 2.807-4.722a3.135 3.135 0 0 1-2.104-.094Z"}),e.jsx("path",{d:"M22.669 16H9.58a3.107 3.107 0 0 1-.874 1.707l-1.21 1.211C8.302 21.547 10.424 25 16 25c5.712 0 7.8-3.626 8.561-6.274l-1.018-1.019A3.107 3.107 0 0 1 22.669 16ZM4.63 20.37L8 17a2.121 2.121 0 1 0-3-3l-3.37 3.37a2.121 2.121 0 0 0 3 3ZM24.25 17l3.37 3.37a2.121 2.121 0 1 0 3-3L27.25 14a2.121 2.121 0 0 0-3 3ZM9.349 10.412c-.21.228-.32.532-.367.779a1 1 0 0 1-1.964-.382c.089-.456.31-1.153.858-1.749C8.453 8.431 9.316 8 10.5 8c1.195 0 2.062.452 2.636 1.082c.544.597.77 1.292.85 1.747a1 1 0 0 1-1.971.342a1.546 1.546 0 0 0-.358-.742C11.47 10.222 11.142 10 10.5 10c-.653 0-.972.217-1.151.412Zm11.001 0c-.21.228-.32.532-.368.779a1 1 0 0 1-1.963-.382c.088-.456.31-1.153.857-1.749C19.453 8.431 20.316 8 21.5 8c1.196 0 2.062.452 2.636 1.082c.544.597.77 1.292.85 1.747a1 1 0 0 1-1.971.342a1.545 1.545 0 0 0-.358-.742C22.47 10.222 22.142 10 21.5 10c-.653 0-.971.217-1.15.412Z"})]})})}function z(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",children:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M12 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm8 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm.901 8.006c.11.542-.35.994-.902.994H12c-.552 0-1.01-.452-.901-.994a5.002 5.002 0 0 1 9.802 0Z"}),e.jsx("path",{d:"M15.999 1C11.095 1 7.313 2.654 4.763 5.423C2.226 8.178 1 11.938 1 15.999c0 4.061 1.226 7.82 3.763 10.576c2.55 2.769 6.332 4.423 11.236 4.423c4.904 0 8.686-1.654 11.235-4.423c2.537-2.755 3.764-6.515 3.764-10.576c0-4.061-1.227-7.821-3.764-10.576C24.684 2.654 20.903 1 16 1ZM3 15.999c0-3.67 1.106-6.91 3.235-9.221C8.35 4.48 11.568 3 15.999 3c4.43 0 7.648 1.48 9.764 3.778c2.129 2.311 3.235 5.55 3.235 9.22c0 3.671-1.106 6.91-3.235 9.222c-2.116 2.298-5.333 3.778-9.764 3.778c-4.43 0-7.648-1.48-9.764-3.778C4.105 22.91 3 19.67 3 16Z"})]})})}function a2(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",children:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM8.512 23.677A2.988 2.988 0 0 0 11 25h10a2.989 2.989 0 0 0 2.437-1.25A2.984 2.984 0 0 0 24 22c0-.699-.24-1.342-.64-1.852A2.995 2.995 0 0 0 21 19H11c-.906 0-1.718.401-2.268 1.036A2.988 2.988 0 0 0 8 22c0 .621.189 1.198.512 1.677ZM11 20h10a2 2 0 0 1 1.792 1.11a.998.998 0 0 1-.792.39H10a.998.998 0 0 1-.792-.39A2 2 0 0 1 11 20Zm11.792 2.89A2 2 0 0 1 21 24H11a2 2 0 0 1-1.792-1.11a.998.998 0 0 1 .792-.39h12c.322 0 .609.152.792.39Z"}),e.jsx("path",{d:"M15.999 1C11.095 1 7.313 2.654 4.763 5.423C2.226 8.178 1 11.938 1 15.999c0 4.061 1.226 7.82 3.763 10.576c2.55 2.769 6.332 4.423 11.236 4.423c4.904 0 8.686-1.654 11.235-4.423c2.537-2.755 3.764-6.515 3.764-10.576c0-4.061-1.227-7.821-3.764-10.576C24.684 2.654 20.903 1 16 1ZM3 15.999c0-3.67 1.106-6.91 3.235-9.221C8.35 4.48 11.568 3 15.999 3c4.43 0 7.648 1.48 9.764 3.778c2.129 2.311 3.235 5.55 3.235 9.22c0 3.671-1.106 6.91-3.235 9.222c-2.116 2.298-5.333 3.778-9.764 3.778c-4.43 0-7.648-1.48-9.764-3.778C4.105 22.91 3 19.67 3 16Z"})]})})}function s2(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",children:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M9.07 8.988c-.594.562-.952 1.24-1.096 1.67a.5.5 0 1 1-.948-.316c.19-.57.631-1.392 1.355-2.08C9.113 7.567 10.148 7 11.5 7a.5.5 0 1 1 0 1c-1.048 0-1.846.433-2.43.988ZM14 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-5 7c1.657 0 3-.895 3-2s-1.343-2-3-2s-3 .895-3 2s1.343 2 3 2Zm17-2c0 1.105-1.343 2-3 2s-3-.895-3-2s1.343-2 3-2s3 .895 3 2Zm-6-3a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm2.93-7.012c.594.562.952 1.24 1.096 1.67a.5.5 0 1 0 .948-.316c-.19-.57-.631-1.392-1.355-2.08C22.887 7.567 21.852 7 20.5 7a.5.5 0 1 0 0 1c1.048 0 1.846.433 2.43.988ZM13 23a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"}),e.jsx("path",{d:"M15.999 1C11.095 1 7.313 2.654 4.763 5.423C2.226 8.178 1 11.938 1 15.999c0 4.061 1.226 7.82 3.763 10.576c2.55 2.769 6.332 4.423 11.236 4.423c4.904 0 8.686-1.654 11.235-4.423c2.537-2.755 3.764-6.515 3.764-10.576c0-4.061-1.227-7.821-3.764-10.576C24.684 2.654 20.903 1 16 1ZM3 15.999c0-3.67 1.106-6.91 3.235-9.221C8.35 4.48 11.568 3 15.999 3c4.43 0 7.648 1.48 9.764 3.778c2.129 2.311 3.235 5.55 3.235 9.22c0 3.671-1.106 6.91-3.235 9.222c-2.116 2.298-5.333 3.778-9.764 3.778c-4.43 0-7.648-1.48-9.764-3.778C4.105 22.91 3 19.67 3 16Z"})]})})}function n2(t){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M9.984 5.06a6.5 6.5 0 1 1 11.286 6.436A5.5 5.5 0 0 1 17.5 21L9 20.999a8 8 0 1 1 .984-15.94zm2.071.544a8.026 8.026 0 0 1 4.403 4.495a5.529 5.529 0 0 1 3.12.307a4.5 4.5 0 0 0-7.522-4.802z"})})}function r2(t){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M19.35 10.03A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97Z"})})}function c2(t){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"m20.79 13.95l-2.33.62l-2-1.13v-2.88l2-1.13l2.33.62l.52-1.93l-1.77-.47l.46-1.77l-1.93-.52l-.62 2.33l-2 1.13L13 7.38V5.12l1.71-1.71L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12v2.26L8.5 8.82l-2-1.13l-.58-2.33L4 5.88l.47 1.77l-1.77.47l.52 1.93l2.33-.62l2 1.13v2.89l-2 1.13l-2.33-.62l-.52 1.93l1.77.47L4 18.12l1.93.52l.62-2.33l2-1.13L11 16.62v2.26l-1.71 1.71L10.71 22L12 20.71L13.29 22l1.41-1.41l-1.7-1.71v-2.26l2.5-1.45l2 1.13l.62 2.33l1.88-.51l-.47-1.77l1.77-.47l-.51-1.93M9.5 10.56L12 9.11l2.5 1.45v2.88L12 14.89l-2.5-1.45v-2.88Z"})})}function i2(t){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",...t,children:e.jsx("path",{fill:"currentColor",d:"M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"})})}function l2(t){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",...t,children:e.jsx("path",{fill:"currentColor",d:"M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"})})}const o2=t=>{const a={晴:D,多云:n2,阴:r2,雪:c2,雨:i2,雷雨:l2};return E.createElement(a[t]||D)},d2=t=>{const a={开心:F,伤心:J1,大哭:Q1,生气:S,痛苦:e2,悲哀:R,不快:R,激动:t2,担心:z,可怕:a2,可恶:S,绝望:z,焦虑:s2};return E.createElement(a[t]||F)},u=e.jsx(x,{className:"!mx-2 scale-y-50"}),g="flex items-center space-x-1 flex-shrink-0",m2=()=>e.jsxs(e.Fragment,{children:[e.jsx(h2,{}),e.jsx(u2,{}),e.jsx(x2,{}),e.jsx(p2,{}),e.jsx(j2,{})]}),h2=()=>{const t=l(a=>a?.data.weather);return t?e.jsxs(e.Fragment,{children:[u,e.jsxs("span",{className:g,children:[o2(t),e.jsx("span",{className:"font-medium",children:t})]},"weather")]}):null},u2=()=>{const t=l(a=>a?.data.mood);return t?e.jsxs(e.Fragment,{children:[u,e.jsxs("span",{className:g,children:[d2(t),e.jsx("span",{className:"font-medium",children:t})]},"mood")]}):null},x2=()=>{const t=l(a=>a?.data.count.read);return t?e.jsxs(e.Fragment,{children:[u,e.jsxs("span",{className:g,children:[e.jsx("i",{className:"i-mingcute-book-6-line"}),e.jsx("span",{className:"font-medium",children:e.jsx(U,{children:t})})]},"readcount")]}):null},p2=()=>{const t=l(a=>a?.data.count.like);return t?e.jsxs(e.Fragment,{children:[u,e.jsxs("span",{className:g,children:[e.jsx("i",{className:"i-mingcute-heart-line"}),e.jsx("span",{className:"font-medium",children:e.jsx(U,{children:t})})]},"linkcount")]}):null},j2=()=>e.jsxs(e.Fragment,{children:[u,e.jsx("span",{className:"inline-flex items-center",children:e.jsx("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh",target:"_blank",className:"inline-flex cursor-pointer items-center text-current",rel:"noreferrer",children:e.jsx("span",{title:"知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议",className:"inline-flex items-center",children:e.jsx(K1,{})})})},"cc")]});function g2(t){return new Promise((a,s)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>{const c=document.createElement("canvas"),i=c.getContext("2d"),r=838/224;let d=n.width,m=d/r;m>n.height&&(m=n.height,d=m*r);const X=(n.width-d)/2,G=(n.height-m)/2;c.width=d,c.height=m,i.drawImage(n,X,G,d,m,0,0,d,m),c.toBlob(b=>{if(b){const K=URL.createObjectURL(b);a(K)}else s("Blob conversion failed")},"image/jpeg")},n.onerror=s,n.src=t})}const f2=({image:t})=>t?e.jsx(w2,{image:t}):null,w2=({image:t})=>{const[a,s]=o.useState(null),c=l(i=>i?.data.images?.find(r=>r.src===t))?.accent;return o.useLayoutEffect(()=>{let i=!0;return g2(t).then(r=>{i&&s(r)}),()=>{i=!1}},[t]),e.jsxs(e.Fragment,{children:[e.jsx("div",{"data-hide-print":!0,className:f("z-1 absolute inset-x-0",a||c?"h-[224px]":"0","cover-mask-b top-[-6.5rem] md:top-0"),style:{backgroundColor:c},children:!!a&&e.jsx("div",{style:{backgroundImage:`url(${a})`},className:"size-full animate-fade bg-cover bg-center bg-no-repeat"})}),e.jsx("div",{"data-hide-print":!0,className:f("h-[120px]","hidden md:block")})]})},Q2=t=>{const{data:a,isLoading:s}=j({...l1.note.byNid(t.noteId.toString())}),n=o.useMemo(()=>N(null),[]);if(s)return e.jsx(O,{className:"w-full",useDefaultLoadingText:!0});if(!a)return null;const c=a.data;return e.jsxs(j1,{overrideAtom:n,children:[e.jsx(g1,{data:a}),!!c.id&&e.jsx(o1,{id:c.id,type:"note"}),e.jsxs(d1,{children:[e.jsx(f2,{image:c.meta?.cover}),e.jsxs(S1,{children:[e.jsxs("header",{children:[e.jsx(A1,{}),e.jsxs("span",{className:"flex flex-wrap items-center text-sm text-neutral-content/60",children:[e.jsx(T1,{}),e.jsx(N1,{children:e.jsx(m2,{})})]}),e.jsx(E1,{})]}),e.jsxs(Y1,{children:[e.jsx(m1,{cid:h1(a)}),e.jsx(y1,{eoaDetect:!0,children:e.jsx(u1,{children:e.jsx(D1,{children:e.jsx(I1,{})})})})]})]})]})]})};export{Q2 as NotePreview};
