"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[502],{89809:function(e,t,r){var n=r(50124),a=r(48534),s=r(13087),u=r(62833),c=r(24150),o=r(49579),i=r(66252),l=function(){function e(){(0,s.Z)(this,e)}return(0,u.Z)(e,[{key:"login",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.username,a=t.password,e.prev=1,s=c.hi.post("/auth/signin",{username:r,password:a}),s.data.accessToken&&o.Z.setUser(s.date),e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e["catch"](1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){o.Z.removeUser()}},{key:"register",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,s,u,o){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.hi.post("/register",{name:t,gender:r,email:a,phone:s,password:u,user_type:o});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,r,n,a,s,u){return e.apply(this,arguments)}return t}()},{key:"sendEmail",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=null,e.next=3,c.hi.post("email/verification-notification").catch((function(e){e=e.response.data.message}));case 3:return r=e.sent,e.abrupt("return",{data:r.data,error:t});case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"resetEmail",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.post("email/reset",{email:t});case 3:return r=e.sent,e.abrupt("return",r.data.data);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"resetPassword",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,a){var s,u;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=new FormData,s.append("password",t),s.append("email",r),s.append("token",a),e.prev=4,e.next=7,c.hi.post("password/reset",s);case 7:return u=e.sent,e.abrupt("return",u.data);case 11:return e.prev=11,e.t0=e["catch"](4),e.abrupt("return",e.t0.response);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"forgetPassword",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.post("password/forgot-password",{email:t});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"sessionData",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.get("session-data");case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,i.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"refreshToken",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.post("/refresh");case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,i.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"returnToTeam",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.get("/return-to-team");case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,i.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()}]),e}();t.Z=new l},89737:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(66252),a=r(3577),s=r.p+"img/excluded-ambassador.14b725d2.png",u=r(79885),c={class:"container-fluid p-0 mb-3"},o={class:"row no-gutters"},i={class:"col-sm-12 text-center"},l={class:"iq-error position-relative mt-5"},p=(0,n._)("img",{src:s,class:"img-fluid iq-error-img",alt:"403"},null,-1),d=(0,n._)("h2",{class:"mb-2 text-center"},"تم استبعادك",-1),v=(0,n._)("h5",{class:"text-center m-auto w-75"}," بسبب عدم التزامك بالقراءة طيلة الأسابيع الماضية ",-1),h={key:0,class:"col-sm-12 text-center"},m=(0,n._)("img",{src:u,alt:"loader",style:{height:"100px"}},null,-1),f=[m],w={key:1,class:"alert alert-danger m-2 p-2",role:"alert"},g={class:"text-center mt-3 mb-3"},k={class:"d-inline-block w-100 text-center"},Z=(0,n._)("i",{class:"material-symbols-outlined"},"logout",-1),b=(0,n._)("span",{class:"mobile-text d-lg-none ms-3"},"تسجيل خروج",-1),x=[Z,b],y=(0,n._)("div",{class:"d-flex justify-content-center"},[(0,n._)("a",{href:"https://www.messenger.com/t/117840717971244/",target:"_blank",class:"text-danger"},[(0,n._)("span",{class:"material-symbols-outlined"}," support_agent "),(0,n.Uk)(" راسلنا لمساعدتك ")])],-1);function _(e,t,r,s,u,m){return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",o,[(0,n._)("div",i,[(0,n._)("div",l,[p,(0,n._)("div",null,[d,v,u.loader?((0,n.wg)(),(0,n.iD)("div",h,f)):(0,n.kq)("",!0),u.message?((0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("h4",g,(0,a.zw)(u.message),1)])):(0,n.kq)("",!0),(0,n._)("div",k,[(0,n._)("button",{onClick:t[0]||(t[0]=function(e){return m.returnToTeam()}),class:"btn d-block btn-primary mt-3 mb-3 w-75 mx-auto"}," عودة إلى الفريق ")]),(0,n._)("a",{href:"javascript:void(0);",class:"d-flex align-items-center m-3",onClick:t[1]||(t[1]=function(){return m.logout&&m.logout.apply(m,arguments)})},x)])])])]),y])}var T=r(50124),D=r(48534),q=(r(70560),r(89809)),C={name:"NotAmbassadorInAnyGroup",data:function(){return{message:"",loader:!1}},methods:{logout:function(){this.$store.dispatch("logout")},returnToTeam:function(){var e=this;return(0,D.Z)((0,T.Z)().mark((function t(){var r;return(0,T.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.message="",e.loader=!0,t.next=4,q.Z.returnToTeam();case 4:r=t.sent,r?(e.message=r,"تم التعديل بنجاح"==r&&e.$router.push({name:"osboha.list"})):e.message=" حدث خطأ",e.loader=!1;case 7:case"end":return t.stop()}}),t)})))()}}},S=r(83744);const U=(0,S.Z)(C,[["render",_]]);var j=U}}]);
//# sourceMappingURL=502-legacy.d4469916.js.map