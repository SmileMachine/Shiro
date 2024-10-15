import{G as j}from"./graph-ChHpIDLX.js";import{l as M}from"./layout-DX5Bo6CE.js";import{w as b}from"./json-Cvdpg1DH.js";import{i as A,u as H,s as W,a as _,b as q,g as D,p as O,c as z,d as K,e as Q,f as U,h as $,j as B}from"./edges-5962ec63-DtAvfUob.js";import{l as s,c as T,H as X}from"./index.demo-fjweZ_GN.js";import{a as V}from"./createText-4a4f35c9-z04wBPci.js";import{s as p}from"./isEmpty-DrOE0CRk.js";let l={},g={},J={};const Y=()=>{g={},J={},l={}},S=(n,t)=>(s.trace("In isDescendant",t," ",n," = ",g[t].includes(n)),!!g[t].includes(n)),Z=(n,t)=>(s.info("Descendants of ",t," is ",g[t]),s.info("Edge is ",n),n.v===t||n.w===t?!1:g[t]?g[t].includes(n.v)||S(n.v,t)||S(n.w,t)||g[t].includes(n.w):(s.debug("Tilt, ",t,",not in descendants"),!1)),L=(n,t,e,r)=>{s.warn("Copying children of ",n,"root",r,"data",t.node(n),r);const i=t.children(n)||[];n!==r&&i.push(n),s.warn("Copying (nodes) clusterId",n,"nodes",i),i.forEach(a=>{if(t.children(a).length>0)L(a,t,e,r);else{const d=t.node(a);s.info("cp ",a," to ",r," with parent ",n),e.setNode(a,d),r!==t.parent(a)&&(s.warn("Setting parent",a,t.parent(a)),e.setParent(a,t.parent(a))),n!==r&&a!==n?(s.debug("Setting parent",a,n),e.setParent(a,n)):(s.info("In copy ",n,"root",r,"data",t.node(n),r),s.debug("Not Setting parent for node=",a,"cluster!==rootId",n!==r,"node!==clusterId",a!==n));const h=t.edges(a);s.debug("Copying Edges",h),h.forEach(f=>{s.info("Edge",f);const u=t.edge(f.v,f.w,f.name);s.info("Edge data",u,r);try{Z(f,r)?(s.info("Copying as ",f.v,f.w,u,f.name),e.setEdge(f.v,f.w,u,f.name),s.info("newGraph edges ",e.edges(),e.edge(e.edges()[0]))):s.info("Skipping copy of edge ",f.v,"-->",f.w," rootId: ",r," clusterId:",n)}catch(w){s.error(w)}})}s.debug("Removing node",a),t.removeNode(a)})},R=(n,t)=>{const e=t.children(n);let r=[...e];for(const i of e)J[i]=n,r=[...r,...R(i,t)];return r},N=(n,t)=>{s.trace("Searching",n);const e=t.children(n);if(s.trace("Searching children of id ",n,e),e.length<1)return s.trace("This is a valid node",n),n;for(const r of e){const i=N(r,t);if(i)return s.trace("Found replacement for",n," => ",i),i}},C=n=>!l[n]||!l[n].externalConnections?n:l[n]?l[n].id:n,I=(n,t)=>{if(!n||t>10){s.debug("Opting out, no graph ");return}else s.debug("Opting in, graph ");n.nodes().forEach(function(e){n.children(e).length>0&&(s.warn("Cluster identified",e," Replacement id in edges: ",N(e,n)),g[e]=R(e,n),l[e]={id:N(e,n),clusterData:n.node(e)})}),n.nodes().forEach(function(e){const r=n.children(e),i=n.edges();r.length>0?(s.debug("Cluster identified",e,g),i.forEach(a=>{if(a.v!==e&&a.w!==e){const d=S(a.v,e),h=S(a.w,e);d^h&&(s.warn("Edge: ",a," leaves cluster ",e),s.warn("Descendants of XXX ",e,": ",g[e]),l[e].externalConnections=!0)}})):s.debug("Not a cluster ",e,g)});for(let e of Object.keys(l)){const r=l[e].id,i=n.parent(r);i!==e&&l[i]&&!l[i].externalConnections&&(l[e].id=i)}n.edges().forEach(function(e){const r=n.edge(e);s.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),s.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(n.edge(e)));let i=e.v,a=e.w;if(s.warn("Fix XXX",l,"ids:",e.v,e.w,"Translating: ",l[e.v]," --- ",l[e.w]),l[e.v]&&l[e.w]&&l[e.v]===l[e.w]){s.warn("Fixing and trixing link to self - removing XXX",e.v,e.w,e.name),s.warn("Fixing and trixing - removing XXX",e.v,e.w,e.name),i=C(e.v),a=C(e.w),n.removeEdge(e.v,e.w,e.name);const d=e.w+"---"+e.v;n.setNode(d,{domId:d,id:d,labelStyle:"",labelText:r.label,padding:0,shape:"labelRect",style:""});const h=structuredClone(r),f=structuredClone(r);h.label="",h.arrowTypeEnd="none",f.label="",h.fromCluster=e.v,f.toCluster=e.v,n.setEdge(i,d,h,e.name+"-cyclic-special"),n.setEdge(d,a,f,e.name+"-cyclic-special")}else if(l[e.v]||l[e.w]){if(s.warn("Fixing and trixing - removing XXX",e.v,e.w,e.name),i=C(e.v),a=C(e.w),n.removeEdge(e.v,e.w,e.name),i!==e.v){const d=n.parent(i);l[d].externalConnections=!0,r.fromCluster=e.v}if(a!==e.w){const d=n.parent(a);l[d].externalConnections=!0,r.toCluster=e.w}s.warn("Fix Replacing with XXX",i,a,e.name),n.setEdge(i,a,r,e.name)}}),s.warn("Adjusted Graph",b(n)),P(n,0),s.trace(l)},P=(n,t)=>{if(s.warn("extractor - ",t,b(n),n.children("D")),t>10){s.error("Bailing out");return}let e=n.nodes(),r=!1;for(const i of e){const a=n.children(i);r=r||a.length>0}if(!r){s.debug("Done, no node has children",n.nodes());return}s.debug("Nodes = ",e,t);for(const i of e)if(s.debug("Extracting node",i,l,l[i]&&!l[i].externalConnections,!n.parent(i),n.node(i),n.children("D")," Depth ",t),!l[i])s.debug("Not a cluster",i,t);else if(!l[i].externalConnections&&n.children(i)&&n.children(i).length>0){s.warn("Cluster without external connections, without a parent and with children",i,t);let d=n.graph().rankdir==="TB"?"LR":"TB";l[i]&&l[i].clusterData&&l[i].clusterData.dir&&(d=l[i].clusterData.dir,s.warn("Fixing dir",l[i].clusterData.dir,d));const h=new j({multigraph:!0,compound:!0}).setGraph({rankdir:d,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});s.warn("Old graph before copy",b(n)),L(i,n,h,i),n.setNode(i,{clusterNode:!0,id:i,clusterData:l[i].clusterData,labelText:l[i].labelText,graph:h}),s.warn("New graph after copy node: (",i,")",b(h)),s.debug("Old graph after copy",b(n))}else s.warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!l[i].externalConnections," no parent: ",!n.parent(i)," children ",n.children(i)&&n.children(i).length>0,n.children("D"),t),s.debug(l);e=n.nodes(),s.warn("New list of nodes",e);for(const i of e){const a=n.node(i);s.warn(" Now next level",i,a),a.clusterNode&&P(a.graph,t+1)}},k=(n,t)=>{if(t.length===0)return[];let e=Object.assign(t);return t.forEach(r=>{const i=n.children(r),a=k(n,i);e=[...e,...a]}),e},tt=n=>k(n,n.children()),et=(n,t)=>{s.info("Creating subgraph rect for ",t.id,t);const e=T(),r=n.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),i=r.insert("rect",":first-child"),a=X(e.flowchart.htmlLabels),d=r.insert("g").attr("class","cluster-label"),h=t.labelType==="markdown"?V(d,t.labelText,{style:t.labelStyle,useHtmlLabels:a}):d.node().appendChild($(t.labelText,t.labelStyle,void 0,!0));let f=h.getBBox();if(X(e.flowchart.htmlLabels)){const c=h.children[0],o=p(h);f=c.getBoundingClientRect(),o.attr("width",f.width),o.attr("height",f.height)}const u=0*t.padding,w=u/2,x=t.width<=f.width+u?f.width+u:t.width;t.width<=f.width+u?t.diff=(f.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,s.trace("Data ",t,JSON.stringify(t)),i.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-x/2).attr("y",t.y-t.height/2-w).attr("width",x).attr("height",t.height+u);const{subGraphTitleTopMargin:v}=D(e);a?d.attr("transform",`translate(${t.x-f.width/2}, ${t.y-t.height/2+v})`):d.attr("transform",`translate(${t.x}, ${t.y-t.height/2+v})`);const y=i.node().getBBox();return t.width=y.width,t.height=y.height,t.intersect=function(c){return B(t,c)},r},nt=(n,t)=>{const e=n.insert("g").attr("class","note-cluster").attr("id",t.id),r=e.insert("rect",":first-child"),i=0*t.padding,a=i/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2-a).attr("width",t.width+i).attr("height",t.height+i).attr("fill","none");const d=r.node().getBBox();return t.width=d.width,t.height=d.height,t.intersect=function(h){return B(t,h)},e},it=(n,t)=>{const e=T(),r=n.insert("g").attr("class",t.classes).attr("id",t.id),i=r.insert("rect",":first-child"),a=r.insert("g").attr("class","cluster-label"),d=r.append("rect"),h=a.node().appendChild($(t.labelText,t.labelStyle,void 0,!0));let f=h.getBBox();if(X(e.flowchart.htmlLabels)){const c=h.children[0],o=p(h);f=c.getBoundingClientRect(),o.attr("width",f.width),o.attr("height",f.height)}f=h.getBBox();const u=0*t.padding,w=u/2,x=t.width<=f.width+t.padding?f.width+t.padding:t.width;t.width<=f.width+t.padding?t.diff=(f.width+t.padding*0-t.width)/2:t.diff=-t.padding/2,i.attr("class","outer").attr("x",t.x-x/2-w).attr("y",t.y-t.height/2-w).attr("width",x+u).attr("height",t.height+u),d.attr("class","inner").attr("x",t.x-x/2-w).attr("y",t.y-t.height/2-w+f.height-1).attr("width",x+u).attr("height",t.height+u-f.height-3);const{subGraphTitleTopMargin:v}=D(e);a.attr("transform",`translate(${t.x-f.width/2}, ${t.y-t.height/2-t.padding/3+(X(e.flowchart.htmlLabels)?5:3)+v})`);const y=i.node().getBBox();return t.height=y.height,t.intersect=function(c){return B(t,c)},r},st=(n,t)=>{const e=n.insert("g").attr("class",t.classes).attr("id",t.id),r=e.insert("rect",":first-child"),i=0*t.padding,a=i/2;r.attr("class","divider").attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2).attr("width",t.width+i).attr("height",t.height+i);const d=r.node().getBBox();return t.width=d.width,t.height=d.height,t.diff=-t.padding/2,t.intersect=function(h){return B(t,h)},e},rt={rect:et,roundedWithTitle:it,noteGroup:nt,divider:st};let F={};const at=(n,t)=>{s.trace("Inserting cluster");const e=t.shape||"rect";F[t.id]=rt[e](n,t)},ct=()=>{F={}},G=async(n,t,e,r,i,a)=>{s.info("Graph in recursive render: XXX",b(t),i);const d=t.graph().rankdir;s.trace("Dir in recursive render - dir:",d);const h=n.insert("g").attr("class","root");t.nodes()?s.info("Recursive render XXX",t.nodes()):s.info("No nodes found for",t),t.edges().length>0&&s.trace("Recursive edges",t.edge(t.edges()[0]));const f=h.insert("g").attr("class","clusters"),u=h.insert("g").attr("class","edgePaths"),w=h.insert("g").attr("class","edgeLabels"),x=h.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(c){const o=t.node(c);if(i!==void 0){const m=JSON.parse(JSON.stringify(i.clusterData));s.info("Setting data for cluster XXX (",c,") ",m,i),t.setNode(i.id,m),t.parent(c)||(s.trace("Setting parent",c,i.id),t.setParent(c,i.id,m))}if(s.info("(Insert) Node XXX"+c+": "+JSON.stringify(t.node(c))),o&&o.clusterNode){s.info("Cluster identified",c,o.width,t.node(c));const m=await G(x,o.graph,e,r,t.node(c),a),E=m.elem;H(o,E),o.diff=m.diff||0,s.info("Node bounds (abc123)",c,o,o.width,o.x,o.y),W(E,o),s.warn("Recursive render complete ",E,o)}else t.children(c).length>0?(s.info("Cluster - the non recursive path XXX",c,o.id,o,t),s.info(N(o.id,t)),l[o.id]={id:N(o.id,t),node:o}):(s.info("Node - the non recursive path",c,o.id,o),await _(x,t.node(c),d))})),t.edges().forEach(function(c){const o=t.edge(c.v,c.w,c.name);s.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(c)),s.info("Edge "+c.v+" -> "+c.w+": ",c," ",JSON.stringify(t.edge(c))),s.info("Fix",l,"ids:",c.v,c.w,"Translating: ",l[c.v],l[c.w]),q(w,o)}),t.edges().forEach(function(c){s.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(c))}),s.info("#############################################"),s.info("###                Layout                 ###"),s.info("#############################################"),s.info(t),M(t),s.info("Graph after layout:",b(t));let v=0;const{subGraphTitleTotalMargin:y}=D(a);return tt(t).forEach(function(c){const o=t.node(c);s.info("Position "+c+": "+JSON.stringify(t.node(c))),s.info("Position "+c+": ("+o.x,","+o.y,") width: ",o.width," height: ",o.height),o&&o.clusterNode?(o.y+=y,O(o)):t.children(c).length>0?(o.height+=y,at(f,o),l[o.id].node=o):(o.y+=y/2,O(o))}),t.edges().forEach(function(c){const o=t.edge(c);s.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(o),o),o.points.forEach(E=>E.y+=y/2);const m=z(u,c,o,l,e,t,r);K(o,m)}),t.nodes().forEach(function(c){const o=t.node(c);s.info(c,o.type,o.diff),o.type==="group"&&(v=o.diff)}),{elem:h,diff:v}},wt=async(n,t,e,r,i)=>{A(n,e,r,i),Q(),U(),ct(),Y(),s.warn("Graph at first:",JSON.stringify(b(t))),I(t),s.warn("Graph after:",JSON.stringify(b(t)));const a=T();await G(n,t,r,i,void 0,a)};export{wt as r};
