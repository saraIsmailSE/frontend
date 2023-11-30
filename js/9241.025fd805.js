"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[9241],{94268:function(t,e,s){var a=s(24150);class i{constructor(){this.prefix="audit-marks"}async groupAuditMarks(t){try{const e=await a.hi.get(`${this.prefix}/group-audit-marks/${t}`).catch((t=>{t.response?(0,a.LO)(t.response.status):t.request?console.log(t.request):console.log("Error",t.message)}));return e.data.data}catch(e){return e}}async markForAudit(t){try{const e=await a.hi.get(`${this.prefix}/mark-for-audit/${t}`).catch((t=>{t.response?(0,a.LO)(t.response.status):t.request?console.log(t.request):console.log("Error",t.message)}));return e.data.data}catch(e){return e}}async updateMarkForAuditStatus(t,e){try{const s=a.hi.patch(`${this.prefix}/update-mark-for-audit-status/${e}`,{status:t}).catch((t=>{t.response?(0,a.LO)(t.response.status):t.request?console.log(t.request):console.log("Error",t.message)}));return s.data.data}catch(s){return s}}async addNote(t){try{const e=await a.hi.post(`/${this.prefix}/add-note`,t,{headers:{"Content-type":"multipart/form-data"}}).catch((t=>{t.response?(0,a.LO)(t.response.status):t.request?console.log(t.request):console.log("Error",t.message)}));return e.data.data}catch(e){return e}}async groupsAudit(t){try{const e=await a.hi.get(`/${this.prefix}/groups-audit/${t}`).catch((t=>{t.response?(0,a.LO)(t.response.status):t.request?console.log(t.request):console.log("Error",t.message)}));return e.data.data}catch(e){return e}}async supervisorsAudit(t){try{const e=await a.hi.get(`/${this.prefix}/supervisors-audit/${t}`).catch((t=>{t.response?(0,a.LO)(t.response.status):t.request?console.log(t.request):console.log("Error",t.message)}));return e.data.data}catch(e){return e}}async advisorMainAudit(t){try{const e=await a.hi.get(`/${this.prefix}/advisor-main-audit/${t}`).catch((t=>{t.response?(0,a.LO)(t.response.status):t.request?console.log(t.request):console.log("Error",t.message)}));return e.data.data}catch(e){return e}}async getNotes(t){try{const e=await a.hi.get(`/${this.prefix}/get-notes/${t}`).catch((t=>{t.response?(0,a.LO)(t.response.status):t.request?console.log(t.request):console.log("Error",t.message)}));return e.data.data}catch(e){return e}}async pendingTheses(t){try{const e=await a.hi.get(`/${this.prefix}/pending-theses/${t}`).catch((t=>{t.response?(0,a.LO)(t.response.status):t.request?console.log(t.request):console.log("Error",t.message)}));return e.data.data}catch(e){return e}}}e.Z=new i},69887:function(t,e,s){s.d(e,{Z:function(){return v}});var a=s(66252),i=s(3577);const r=t=>((0,a.dD)("data-v-347baa10"),t=t(),(0,a.Cn)(),t),l={key:0,class:"d-flex align-items-center p-3"},o={class:"d-flex align-items-center w-100 row"},n={class:"col-lg-3 col-md-3 col-sm-12 ms-3"},u={class:"d-inline-block"},d={class:"col-lg-5 col-md-5 col-sm-12 form-check mt-2"},c={class:"d-block w-100"},p={class:"progress"},g={class:"col-lg-3 col-md-3 col-sm-12 text-center"},h=r((()=>(0,a._)("span",{class:"badge bg-primary ms-0 ms-md-3 my-1 my-md-0 w-75 text-center text-white",role:"button"},"عرض ",-1)));function m(t,e,s,r,m,_){const w=(0,a.up)("BaseAvatar"),k=(0,a.up)("router-link");return s.audit?((0,a.wg)(),(0,a.iD)("li",l,[(0,a.Wm)(w,{profileImg:s.audit.mark.user.user_profile.profile_picture,profile_id:s.audit.mark.user.user_profile.id,title:s.audit.mark.user.name,gender:s.audit.mark.user.gender,avatarClass:"rounded-circle avatar-40"},null,8,["profileImg","profile_id","title","gender"]),(0,a._)("div",o,[(0,a._)("div",n,[(0,a._)("h6",u,[(0,a._)("span",{class:(0,i.C_)(`ms-2 rounded badge text-white ${_.statusClass(s.audit.status)}`)},(0,i.zw)(m.audit_status[s.audit.status]),3),(0,a._)("strong",null,(0,i.zw)(s.audit.mark.user.name),1)])]),(0,a._)("div",d,[(0,a._)("div",c,[(0,a._)("div",p,[(0,a._)("div",{class:(0,i.C_)([`${_.markClass(s.audit.mark.reading_mark+s.audit.mark.writing_mark+s.audit.mark.support)}`,"progress-bar progress-bar-striped"]),role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:(0,i.j5)(`width: ${s.audit.mark.reading_mark+s.audit.mark.writing_mark+s.audit.mark.support}%;`)},null,6)])])]),(0,a._)("div",g,[(0,a.Wm)(k,{to:{name:"group.markAudit",params:{mark_for_audit:s.audit.id}}},{default:(0,a.w5)((()=>[h])),_:1},8,["to"])])])])):(0,a.kq)("",!0)}var _={name:"Achievement Progress",props:{audit:{type:[Object],required:!0}},data(){return{audit_status:{acceptable:"مقبول",unacceptable:"مرفوض",not_audited:"لم يتم تدقيقه"}}},methods:{markClass(t){switch(t){case 100:return"full-mark";case 0:return"zero-mark";default:return"incomplete"}},statusClass(t){switch(t){case"acceptable":return"bg-primary";case"unacceptable":return"bg-danger";default:return"bg-dark"}}}},w=s(83744);const k=(0,w.Z)(_,[["render",m],["__scopeId","data-v-347baa10"]]);var v=k},99241:function(t,e,s){s.r(e),s.d(e,{default:function(){return ht}});var a=s(66252),i=s(3577),r=s(49963),l=s(84621);const o={class:"row"},n={class:"col-12"},u={class:"card position-relative inner-page-bg",style:{"background-color":"#cae0cd",height:"100px"}},d={class:"inner-page-title"},c={class:"text-dark",style:{direction:"rtl"}},p={class:"text-dark",style:{direction:"rtl"}},g={key:0},h={class:"todo-task-lists m-2 p-0"},m={class:"card position-relative",style:{"background-color":"#208040",height:"60px"}},_={class:"d-flex align-items-center justify-content-between w-100"},w={class:"inner-page-title"},k={class:"text-light d-flex justify-content-between"},v={key:0},f={key:0,class:"d-block text-center mb-0 pb-0"},y={key:1},x=(0,a._)("h4",{class:"text-center"},"لا يوجد",-1),b=[x],A={class:"todo-task-lists m-2 p-0"},q={class:"card position-relative",style:{"background-color":"#831018",height:"60px"}},L={class:"inner-page-title"},D={class:"text-light d-flex justify-content-between"},C={key:0},$={key:0,class:"d-block text-center mb-0 pb-0"},O={key:1},j=(0,a._)("h4",{class:"text-center"},"لا يوجد",-1),E=[j],z={class:"todo-task-lists m-2 p-0"},M={class:"card position-relative",style:{"background-color":"#1d1a55",height:"60px"}},F={class:"d-flex align-items-center justify-content-between w-100"},W={class:"inner-page-title"},Z={class:"text-light d-flex justify-content-between"},I={key:0},P={key:1},H=(0,a._)("h4",{class:"text-center"},"لا يوجد",-1),K=[H],U=(0,a._)("div",{class:"iq-card-body p-0"},[(0,a._)("div",{class:"image-block text-center"},[(0,a._)("img",{src:l,class:"img-fluid rounded w-75 mt-3",alt:"no-amb"})])],-1),Y={key:1},B=(0,a._)("div",{class:"iq-card-body p-0"},[(0,a._)("div",{class:"image-block text-center"},[(0,a._)("img",{src:l,class:"img-fluid rounded w-75 mt-3",alt:"no-amb"})]),(0,a._)("h4",{class:"text-center mt-3 mb-3"}," لا يوجد تدقيق لهذا الاسبوع ")],-1),N={key:0,class:"d-flex align-items-center mt-3 row"},V={class:"d-inline-block w-100 text-center col-12"},G=(0,a._)("span",null,"تدقيق المراقب",-1),S=(0,a._)("span",{class:"align-middle material-symbols-outlined"}," keyboard_return ",-1);function T(t,e,s,l,x,j){const H=(0,a.up)("AchievementProgress"),T=(0,a.up)("Exceptions"),J=(0,a.up)("iq-card"),Q=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",n,[(0,a.Wm)(J,{"body-class":"p-0"},{body:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a._)("div",d,[(0,a._)("h3",c," تدقيق العلامات || "+(0,i.zw)(x.group.name),1),(0,a._)("h4",p," الأسبوع "+(0,i.zw)(x.week.title),1)])]),x.audit?((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("ul",h,[(0,a._)("div",m,[(0,a._)("div",_,[(0,a._)("div",w,[(0,a._)("h3",k,[(0,a.Uk)(" انجاز كامل "),x.show_full_audit?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",{key:0,role:"button",class:"display-6 text-light material-symbols-outlined",onClick:e[0]||(e[0]=t=>x.show_full_audit=!x.show_full_audit)}," expand_more ")),x.show_full_audit?((0,a.wg)(),(0,a.iD)("span",{key:1,role:"button",class:"display-6 text-light material-symbols-outlined",onClick:e[1]||(e[1]=t=>x.show_full_audit=!x.show_full_audit)}," expand_less ")):(0,a.kq)("",!0)])])])]),(0,a.wy)((0,a._)("div",null,[j.fullAuditLoaded&&j.fullAuditLoaded.length>0?((0,a.wg)(),(0,a.iD)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(j.fullAuditLoaded,((t,e)=>((0,a.wg)(),(0,a.j4)(H,{key:e,audit:t},null,8,["audit"])))),128)),x.fullAudit.length>x.fullAuditLength?((0,a.wg)(),(0,a.iD)("li",f,[(0,a._)("a",{class:"me-3 btn",role:"button",onClick:e[2]||(e[2]=t=>j.loadMoreFullAudit())},"عرض المزيد")])):(0,a.kq)("",!0)])):((0,a.wg)(),(0,a.iD)("div",y,b))],512),[[r.F8,x.show_full_audit]])]),(0,a._)("ul",A,[(0,a._)("div",q,[(0,a._)("div",L,[(0,a._)("h3",D,[(0,a.Uk)(" انجازات متفرقة "),x.show_variant_audit?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",{key:0,role:"button",class:"display-6 text-light material-symbols-outlined",onClick:e[3]||(e[3]=t=>x.show_variant_audit=!x.show_variant_audit)}," expand_more ")),x.show_variant_audit?((0,a.wg)(),(0,a.iD)("span",{key:1,role:"button",class:"display-6 text-light material-symbols-outlined",onClick:e[4]||(e[4]=t=>x.show_variant_audit=!x.show_variant_audit)}," expand_less ")):(0,a.kq)("",!0)])])]),(0,a.wy)((0,a._)("div",null,[j.variantAuditLoaded&&j.variantAuditLoaded.length>0?((0,a.wg)(),(0,a.iD)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(j.variantAuditLoaded,((t,e)=>((0,a.wg)(),(0,a.j4)(H,{key:e,audit:t},null,8,["audit"])))),128)),x.variantAudit.length>x.variantAuditLength?((0,a.wg)(),(0,a.iD)("li",$,[(0,a._)("a",{class:"me-3 btn",role:"button",onClick:e[5]||(e[5]=t=>j.loadMoreVariantAudit())},"عرض المزيد")])):(0,a.kq)("",!0)])):((0,a.wg)(),(0,a.iD)("div",O,E))],512),[[r.F8,x.show_variant_audit]])]),(0,a._)("ul",z,[(0,a._)("div",M,[(0,a._)("div",F,[(0,a._)("div",W,[(0,a._)("h3",Z,[(0,a.Uk)(" الاعفاءات "),x.show_exceptions?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",{key:0,role:"button",class:"display-6 text-light material-symbols-outlined",onClick:e[6]||(e[6]=t=>x.show_exceptions=!x.show_exceptions)}," expand_more ")),x.show_exceptions?((0,a.wg)(),(0,a.iD)("span",{key:1,role:"button",class:"display-6 text-light material-symbols-outlined",onClick:e[7]||(e[7]=t=>x.show_exceptions=!x.show_exceptions)}," expand_less ")):(0,a.kq)("",!0)])])])]),(0,a.wy)((0,a._)("div",null,[x.exceptions.length>0?((0,a.wg)(),(0,a.iD)("div",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(x.exceptions,((t,e)=>((0,a.wg)(),(0,a.j4)(T,{key:e,exception:t},null,8,["exception"])))),128))])):((0,a.wg)(),(0,a.iD)("div",P,K))],512),[[r.F8,x.show_exceptions]])]),(0,a.Wm)(J,{class:"iq-card"},{default:(0,a.w5)((()=>[U])),_:1})])):((0,a.wg)(),(0,a.iD)("div",Y,[(0,a.Wm)(J,{class:"iq-card"},{default:(0,a.w5)((()=>[B])),_:1})]))])),default:(0,a.w5)((()=>[x.audit?((0,a.wg)(),(0,a.iD)("div",N,[(0,a._)("div",V,[(0,a.Wm)(Q,{to:{name:"group.groupsAudit",params:{supervisor_id:x.audit.auditor_id}},class:"d-block mt-3 mb-3 w-75 mx-auto"},{default:(0,a.w5)((()=>[G,S])),_:1},8,["to"])])])):(0,a.kq)("",!0)])),_:1})])])}var J=s(94268),Q=s(69887);const R={class:"row d-flex align-items-center p-3"},X={class:"row"},tt={class:"col"},et={class:"d-inline-block ms-3"},st={class:"row mt-2 m-auto"},at={class:"col"},it={class:"row mt-2 m-auto"},rt={class:"col d-flex text-center"},lt=(0,a._)("i",{class:(0,i.C_)("material-symbols-outlined")},"bolt",-1);function ot(t,e,s,r,l,o){const n=(0,a.up)("BaseAvatar");return(0,a.wg)(),(0,a.iD)("li",R,[(0,a._)("div",X,[(0,a._)("div",tt,[(0,a.Wm)(n,{profileImg:s.exception.user.user_profile.profile_picture,profile_id:s.exception.user.user_profile.id,title:s.exception.user.name,gender:s.exception.user.gender,avatarClass:"rounded-circle avatar-40"},{default:(0,a.w5)((()=>[(0,a._)("h6",et,[(0,a._)("strong",null,(0,i.zw)(s.exception.user.name),1)])])),_:1},8,["profileImg","profile_id","title","gender"])])]),(0,a._)("div",st,[(0,a._)("div",at,[(0,a._)("h5",null,"نوع الاعفاء: "+(0,i.zw)(s.exception.type.type),1)])]),(0,a._)("div",it,[(0,a._)("div",rt,[lt,(0,a._)("h5",null,(0,i.zw)(s.exception.reason),1)])])])}var nt={name:"Achievement Pages",props:{exception:{type:[Object],required:!0}},data(){return{}}},ut=s(83744);const dt=(0,ut.Z)(nt,[["render",ot]]);var ct=dt,pt={name:"List All Group Ambassadors Achievement",async created(){try{const t=await J.Z.groupAuditMarks(this.group_id);this.audit=t.audit_mark,this.week=t.week,this.group=t.group,this.fullAudit=t.fullAudit,this.variantAudit=t.variantAudit,this.exceptions=t.exceptions}catch(t){console.log(t)}},components:{AchievementProgress:Q.Z,Exceptions:ct},data(){return{week:[],group_id:this.$route.params.group_id,group:[],audit:null,fullAudit:[],fullAuditLength:10,show_full_audit:!1,variantAudit:[],variantAuditLength:10,show_variant_audit:!1,exceptions:null,show_exceptions:!1}},methods:{loadMoreFullAudit(){this.fullAuditLength>this.fullAudit.length||(this.length=this.length+10)},loadMoreVariantAudit(){this.variantAuditLength>this.variantAudit.length||(this.length=this.length+10)}},computed:{fullAuditLoaded(){return this.fullAudit.slice(0,this.fullAuditLength)},variantAuditLoaded(){return this.variantAudit.slice(0,this.variantAuditLength)}}};const gt=(0,ut.Z)(pt,[["render",T]]);var ht=gt},84621:function(t,e,s){t.exports=s.p+"img/reader.b5157672.png"}}]);
//# sourceMappingURL=9241.025fd805.js.map