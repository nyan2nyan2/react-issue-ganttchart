(this["webpackJsonpreact-issue-ganttchart"]=this["webpackJsonpreact-issue-ganttchart"]||[]).push([[0],{101:function(t,e,n){},113:function(t,e,n){},114:function(t,e,n){},115:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),c=(n(78),n(14)),s=n.n(c),u=n(21),l=n(28),d=n(29),h=n(33),p=n(30),f=n(43),g=n(34),m=n(12),k=(n(80),function(t){return t.length>1&&/\/$/.test(t)&&(t=t.slice(0,-1)),t}),v=function(t){return t.length>1&&/ +$/.test(t)&&(t=t.slice(0,-1)),t},b=function(t){var e=t;return e=k(e),e=v(e),e=k(e),e=v(e)},_=function(t){if(null==t)return null;var e=t.match(/start_date: \d{4}\/\d{1,2}\/\d{1,2}/);return null==e?null:(e=e[0].match(/\d{4}\/\d{1,2}\/\d{1,2}/)[0],new Date(e))},w=function(t,e){return null!=_(t)?t.replace(/start_date: \d{4}\/\d{1,2}\/\d{1,2}/,"start_date: "+e):"start_date: "+e+"  \n"+t},C=function(t){if(null==t)return null;var e=t.match(/due_date: \d{4}\/\d{1,2}\/\d{1,2}/);return null==e?null:(e=e[0].match(/\d{4}\/\d{1,2}\/\d{1,2}/)[0],new Date(e))},y=function(t){if(null==t)return null;var e=t.match(/progress: \d{1}\.\d{1}/);return null==e?.1:(e=e[0].match(/\d{1}\.\d{1}/)[0],parseFloat(e))},j=function(t,e){var n=y(t),a=Math.round(10*e)/10;return null!=n?t.replace(/progress: \d{1}\.\d{1}/,"progress: "+a):"progress: "+a+"  \n"+t},D=n(47),O=n.n(D),L=function(t,e){var n=new Date(t);return O()(n).add(e-1,"d").toDate().toLocaleDateString("ja-JP")},S=function(t,e,n){return null!=t&&null!=e?t.toLocaleDateString("ja-JP"):new Date(n).toLocaleDateString("ja-JP")},G=function(t,e){return null!=t&&null!=e?function(t,e){var n=O()(t);return O()(e).diff(n,"days")+1}(t,e):1},E=function(t,e){return null==t||null==e},P=function(t,e){var n=[];n.push(t),n={data:n,links:[]},e.parse(n),e.sort("start_date",!1)},U=function(t){return/github\.com/.test(t)},Z=function(t){var e=t.split("/");if(e.length>=5)return e[3]},x=function(t){var e=t.split("/");if(e.length>=5)return e[4]},R=function(t){var e=b(t);return"https://api.github.com/repos/"+Z(e)+"/"+x(e)},A=function(t){var e=b(t);return"https://github.com/"+Z(e)+"/"+x(e)},z=function(t,e){var n=_(t),a=C(t);return{id:e.number,text:e.title,start_date:S(n,a,e.created_at),duration:G(n,a),progress:y(t),unscheduled:E(n,a)}},T=function(t,e){var n=new Date(e.start_date).toLocaleDateString("ja-JP"),a=L(n,e.duration);return t=function(t,e){return null!=C(t)?t.replace(/due_date: \d{4}\/\d{1,2}\/\d{1,2}/,"due_date: "+e):"due_date: "+e+"  \n"+t}(t=j(t,e.progress),a),t=w(t,n)},J=function(t){return/gitlab\.com/.test(t)},W=function(t){var e=t.split("/");if(e.length>=5)return e[3]},M=function(t){var e=t.split("/");if(e.length>=5)return e[4]},N=function(t){var e=b(t);return"https://gitlab.com/api/v4/projects/"+W(e)+"%2F"+M(e)},V=function(t){var e=b(t);return"https://gitlab.com/"+W(e)+"/"+M(e)},I=function(t){var e=_(t.description),n=new Date(t.due_date).toLocaleDateString("ja-JP");return{id:t.iid,text:t.title,start_date:S(e,n,t.created_at),duration:G(e,n),progress:y(t.description),unscheduled:E(e,n)}},B=n(17),F=n.n(B),$=function(){var t=Object(u.a)(s.a.mark((function t(e,n,a){var o,r,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o="",null==a&&a==[]||(o+="?labels=",a.map((function(t){o+=t.name+","}))),r=R(n)+"/issues"+o,i=R(n)+"/issues",F.a.get(r).then((function(t){t.data.map((function(t){return F.a.get(i+"/"+t.number).then((function(n){var a=z(n.data.body,t);P(a,e)})),null}))}));case 5:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),H=function(){var t=Object(u.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=R(n)+"/labels",F.a.get(a).then((function(t){var n=[];t.data.map((function(t){return n.push(t),null})),e.setState({labels:n})}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Y=n(50),q=n.n(Y),K=n(61),Q=function(){var t=Object(K.a)(q.a.mark((function t(e,n,a){var o;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=N(n)+"/issues?access_token="+a,F.a.get(o).then((function(t){t.data.map((function(t){var n=I(t);return P(n,e),null}))}));case 2:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),X=function(t,e,n,a){var o=N(a)+"/issues?access_token="+e;F.a.get(o).then((function(o){o.data.map((function(o){if(o.iid===t.id){var r=function(t,e){var n=new Date(e.start_date).toLocaleDateString("ja-JP");return t=j(t,e.progress),t=w(t,n),encodeURIComponent(t)}(o.description,t),i=new Date(t.start_date).toLocaleDateString("ja-JP"),c=L(i,t.duration),s=N(a)+"/issues/"+t.id+"?access_token="+e+"&description="+r+"&due_date="+c;F.a.put(s).then((function(t){console.log("success update issue")})).catch((function(t){alert("failed update GitLab issue. check your token."),Q(n,a)}))}return null}))}))},tt=function(){var t=Object(u.a)(s.a.mark((function t(e,n,a,o){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.clearAll(),U(n)&&$(e,n,o),J(n)&&Q(e,n,a);case 3:case"end":return t.stop()}}),t)})));return function(e,n,a,o){return t.apply(this,arguments)}}(),et=function(){var t=Object(u.a)(s.a.mark((function t(e,n,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(n)&&H(e,n);case 1:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),nt=function(t,e,n,a){U(a)&&function(t,e,n,a){var o=R(a)+"/issues/"+t.id;F.a.get(o).then((function(r){var i=T(r.data.body,t);F.a.post(o,{body:i},{headers:{Authorization:"token ".concat(e)}}).then((function(t){console.log("success update issue")})).catch((function(t){alert("failed update GitHub issue. check your token."),$(n,a)}))}))}(t,e,n,a),J(a)&&X(t,e,n,a)},at=function(t,e){U(e)&&function(t,e){window.open(A(e)+"/issues/"+t,"_blank")}(t,e),J(e)&&function(t,e){window.open(V(e)+"/-/issues/"+t,"_blank")}(t,e)},ot=function(t,e){U(e)&&function(t,e){var n="";n+="start_date:%20"+(new Date).toLocaleDateString("ja-JP")+"%0D%0A",n+="due_date:%20"+(new Date).toLocaleDateString("ja-JP")+"%0D%0A",n+="progress:%200.1%0D%0A",window.open(A(e)+"/issues/new?assignees=&labels=&title=&body="+n,"_blank")}(0,e),J(e)&&function(t,e){var n="";n+="start_date:%20"+(new Date).toLocaleDateString("ja-JP")+"%20%20%0D%0A",n+="progress:%200.1%0D%0A",window.open(V(e)+"/issues/new?issue[description]="+n,"_blank")}(0,e)},rt=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(p.a)(e).call(this,t))).dataProcessor=null,n.initZoom(),n}return Object(g.a)(e,t),Object(d.a)(e,[{key:"initZoom",value:function(){m.gantt.ext.zoom.init({levels:[{name:"Days",scale_height:60,min_column_width:70,scales:[{unit:"week",step:1,format:"%M, %d week"},{unit:"day",step:1,format:"%d %M"}]},{name:"Weeks",scale_height:60,min_column_width:70,scales:[{unit:"month",step:1,format:"%Y %F"},{unit:"week",step:1,format:"%M, %d week"}]}]})}},{key:"setZoom",value:function(t){m.gantt.ext.zoom.setLevel(t)}},{key:"initGanttDataProcessor",value:function(){var t=this.props.onDataUpdated;this.dataProcessor=m.gantt.createDataProcessor((function(e,n,a,o){return new Promise((function(r,i){return t&&t(e,n,a,o),r()}))}))}},{key:"updateGantt",value:function(t){tt(m.gantt,this.props.git_url,this.props.token,t)}},{key:"shouldComponentUpdate",value:function(t){return this.props.zoom!==t.zoom}},{key:"componentDidMount",value:function(){var t=this;m.gantt.config.xml_date="%Y/%m/%d %H:%i",m.gantt.config.order_branch=!0,m.gantt.config.order_branch_free=!0,m.gantt.config.keep_grid_width=!0,m.gantt.config.grid_resize=!0,m.gantt.config.show_unscheduled=!0,m.gantt.config.sort=!0,m.gantt.attachEvent("onTaskDblClick",(function(e,n){at(e,t.props.git_url)})),m.gantt.attachEvent("onTaskCreated",(function(e,n){ot(0,t.props.git_url)})),m.gantt.attachEvent("onAfterTaskUpdate",(function(e,n){nt(n,t.props.token,m.gantt,t.props.git_url)})),m.gantt.init(this.ganttContainer),this.initGanttDataProcessor(),this.updateGantt()}},{key:"componentWillUnmount",value:function(){this.dataProcessor&&(this.dataProcessor.destructor(),this.dataProcessor=null)}},{key:"render",value:function(){var t=this,e=this.props.zoom;return this.setZoom(e),o.a.createElement("div",{ref:function(e){t.ganttContainer=e},style:{width:"100%",height:"100%"}})}}]),e}(a.Component),it=(n(101),rt),ct=n(4),st=n(151),ut=n(64),lt=n.n(ut),dt=n(152),ht=n(62),pt=n(117),ft=n(150),gt=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(o)))).handleGitURLChange=function(t){n.props.onGitURLChange&&n.props.onGitURLChange(t.target.value)},n.handleTokenChange=function(t){n.props.onTokenChange&&n.props.onTokenChange(t.target.value)},n.handleUpdateClick=function(t){n.props.onUpdateClick&&n.props.onUpdateClick()},n.handleClickWeeks=function(t){n.handleZoomChange("Weeks")},n.handleClickDays=function(t){n.handleZoomChange("Days")},n.handleZoomChange=function(t){n.props.onZoomChange&&n.props.onZoomChange(t)},n.handleChange=function(t){n.setState({personName:t.target.value})},n.onSelect=function(t){n.props.onLabelChange&&n.props.onLabelChange(t)},n.onRemove=function(t){n.props.onLabelChange&&n.props.onLabelChange(t)},n}return Object(g.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.classes;return o.a.createElement("form",{noValidate:!0},o.a.createElement(dt.a,{className:t.root,required:!0,placeholder:"https://github.com/lamact/react-issue-ganttchart",defaultValue:"https://github.com/lamact/react-issue-ganttchart",label:"Git Repository URL",style:{width:"25%",verticalAlign:"middle"},onChange:this.handleGitURLChange}),o.a.createElement(dt.a,{className:t.root,type:"password",placeholder:"Access Token",defaultValue:"Access Token",label:"Access Token",style:{width:"10%",verticalAlign:"middle"},onChange:this.handleTokenChange}),o.a.createElement(ht.Multiselect,{className:t.root,options:this.props.labels,selectedValues:this.props.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name",style:mt,placeholder:"filter by labels",hidePlaceholder:"false",emptyRecordMsg:"No Labels",closeIcon:"cancel"}),o.a.createElement(ft.a,{size:"small",style:{height:"34px"}},o.a.createElement(pt.a,{onClick:this.handleClickWeeks},"Weeks"),o.a.createElement(pt.a,{onClick:this.handleClickDays},"Days")),o.a.createElement(st.a,{color:"primary",style:{verticalAlign:"middle"}},o.a.createElement(lt.a,{onClick:this.handleUpdateClick})))}}]),e}(a.Component),mt={multiselectContainer:{width:"50%",display:"inline-block",verticalAlign:"middle",padding:"4px",alignItems:"flex-end"},chips:{background:"light blue",fontSize:"15px"},searchBox:{border:"none"}},kt=Object(ct.a)((function(t){return{root:{"& > *":{margin:t.spacing(1),fontSize:"15px"}}}}))(gt),vt=(n(113),kt),bt=n(18),_t=(n(114),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(p.a)(e).call(this,t))).handleZoomChange=function(t){n.setState({currentZoom:t}),Object(bt.bake_cookie)("currentZoom",t)},n.handleTokenChange=function(t){n.setState({token:t})},n.handleGitURLChange=function(t){n.setState({git_url:t})},n.updateGantt=function(){var t=Object(u.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.GanttRef.current.updateGantt(e),Object(bt.bake_cookie)("token",n.state.token),Object(bt.bake_cookie)("git_url",n.state.git_url),et(Object(f.a)(n),n.state.git_url,n.state.token);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.handleUpdateClick=function(){n.updateGantt([])},n.handleLabelChange=function(t){n.updateGantt(t)},n.state={currentZoom:"Weeks",messages:[],git_url:"",token:"",labels:[]},n.GanttRef=o.a.createRef(),n}return Object(g.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.setState({token:Object(bt.read_cookie)("token")}),this.setState({git_url:Object(bt.read_cookie)("git_url")}),"Weeks"!==Object(bt.read_cookie)("currentZoom")&&"Days"!==Object(bt.read_cookie)("currentZoom")||this.setState({currentZoom:Object(bt.read_cookie)("currentZoom")})}},{key:"render",value:function(){var t=this.state,e=t.currentZoom,n=t.git_url,a=t.token,r=t.labels;return o.a.createElement("div",null,o.a.createElement("div",{className:"zoom-bar"},o.a.createElement(vt,{zoom:e,onZoomChange:this.handleZoomChange,git_url:n,onGitURLChange:this.handleGitURLChange,token:a,onTokenChange:this.handleTokenChange,onUpdateClick:this.handleUpdateClick,labels:r,onLabelChange:this.handleLabelChange})),o.a.createElement("div",{className:"gantt-container"},o.a.createElement(it,{ref:this.GanttRef,zoom:e,git_url:n,token:a})))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(_t,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},73:function(t,e,n){t.exports=n(115)},78:function(t,e,n){}},[[73,1,2]]]);
//# sourceMappingURL=main.07a194a9.chunk.js.map