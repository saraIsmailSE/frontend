(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[7765],{20425:function(e){!function(t,n){e.exports=n()}(0,(function(){var e="__v-click-outside",t="undefined"!=typeof window,n="undefined"!=typeof navigator,r=t&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],i=function(e){var t=e.event,n=e.handler;(0,e.middleware)(t)&&n(t)},a=function(t,n){var a=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||r,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe),capture:Boolean(e.capture)}}(n.value),c=a.handler,s=a.middleware,u=a.detectIframe,o=a.capture;if(a.isActive){if(t[e]=a.events.map((function(e){return{event:e,srcTarget:document.documentElement,handler:function(e){return function(e){var t=e.el,n=e.event,r=e.handler,a=e.middleware,c=n.path||n.composedPath&&n.composedPath();(c?c.indexOf(t)<0:!t.contains(n.target))&&i({event:n,handler:r,middleware:a})}({el:t,event:e,handler:c,middleware:s})},capture:o}})),u){var l={event:"blur",srcTarget:window,handler:function(e){return function(e){var t=e.el,n=e.event,r=e.handler,a=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&i({event:n,handler:r,middleware:a})}),0)}({el:t,event:e,handler:c,middleware:s})},capture:o};t[e]=[].concat(t[e],[l])}t[e].forEach((function(n){var r=n.event,i=n.srcTarget,a=n.handler;return setTimeout((function(){t[e]&&i.addEventListener(r,a,o)}),0)}))}},c=function(t){(t[e]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,e.capture)})),delete t[e]},s=t?{beforeMount:a,updated:function(e,t){var n=t.value,r=t.oldValue;JSON.stringify(n)!==JSON.stringify(r)&&(c(e),a(e,{value:n}))},unmounted:c}:{};return{install:function(e){e.directive("click-outside",s)},directive:s}}))},96444:function(e,t,n){"use strict";var r=n(50124),i=n(48534),a=n(13087),c=n(62833),s=n(66252),u=n(24150),o=function(){function e(){(0,a.Z)(this,e)}return(0,c.Z)(e,[{key:"getAllFriends",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.hi.get("friends/user/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getFriendsRequests",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.hi.get("/friends/un-accepted");case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.hi.post("/friends/create",{friend_id:t});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getFriendshipById",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.hi.post("/friends/show",{friendship_id:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"accept",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.hi.get("/friends/accept/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"acceptAll",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.hi.get("/friends/accept-all");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"deleteAllUnAccepted",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.hi.get("/friends/delete-all-unaccepted");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i,a;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=new FormData,i.append("user_id",t),i.append("friend_id",n),e.prev=3,e.next=6,u.hi.post("/friends/delete",i);case 6:return a=e.sent,e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e["catch"](3),(0,s.S3)(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}();t.Z=new o},27765:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(66252),i=n(3577),a=n(76560),c={class:"row"},s=(0,r._)("h4",{class:"card-title"},"قائمة الأصدقاء",-1),u={key:0,class:"request-list list-inline m-0 p-0"},o={class:"flex-grow-1 ms-3"},l={class:"d-flex justify-content-end flex-grow-1 ms-3"},d=["onClick"],f=(0,r._)("a",{class:"dropdown-item d-flex align-items-center"},[(0,r._)("span",{class:"material-symbols-outlined me-2 md-18"}," person "),(0,r.Uk)(" الملف الشخصي ")],-1),p=["onClick"],h=(0,r._)("span",{class:"material-symbols-outlined me-2 md-18"}," person_remove ",-1),m=["onClick"],v=(0,r._)("span",{class:"material-symbols-outlined me-2 md-18"}," person_remove ",-1),w=["onClick"],g=(0,r._)("span",{class:"material-symbols-outlined me-2 md-18"}," group_add ",-1),_={key:0,class:"d-block text-center mb-0 pb-0"},k={key:1,class:"col-sm-12"},y=(0,r._)("div",{class:"iq-card-body p-0"},[(0,r._)("div",{class:"image-block text-center"},[(0,r._)("img",{src:a,class:"img-fluid rounded w-50",alt:"blog-img"})]),(0,r._)("h4",{class:"text-center mt-3 mb-3"},"لا يوجد أصدقاء")],-1);function x(e,t,n,a,x,b){var Z=(0,r.up)("BaseAvatar"),A=(0,r.up)("router-link"),C=(0,r.up)("iq-card"),O=(0,r.Q2)("click-outside");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(C,null,{headerTitle:(0,r.w5)((function(){return[s]})),body:(0,r.w5)((function(){return[b.friendsLoaded.length>0?(0,r.wy)(((0,r.wg)(),(0,r.iD)("ul",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(b.friendsLoaded,(function(e,t){return(0,r.wg)(),(0,r.iD)("li",{class:"d-flex align-items-center justify-content-between flex-wrap",key:t},[(0,r.Wm)(Z,{profileImg:e.profile.profile_picture,profile_id:e.profile.id,title:e.name,gender:e.gender,avatarClass:"rounded-circle avatar-40",containerClass:"flex-shrink-0"},null,8,["profileImg","profile_id","title","gender"]),(0,r._)("div",o,[(0,r._)("h5",null,(0,i.zw)(e.name),1)]),(0,r._)("div",l,[(0,r._)("span",{role:"button",onClick:function(e){return b.showList(t)},class:"material-symbols-outlined"}," more_horiz ",8,d),(0,r._)("div",{class:(0,i.C_)("dropdown-menu dropdown-menu-right ".concat(x.controlList[t]?"show":"")),"aria-labelledby":"dropdownMenuButton"},[(0,r.Wm)(A,{to:{name:"user.profile",params:{user_id:e.id}}},{default:(0,r.w5)((function(){return[f]})),_:2},1032,["to"]),x.user_id==b.auth.id?((0,r.wg)(),(0,r.iD)("a",{key:0,class:"dropdown-item d-flex align-items-center",onClick:function(t){return b.deleteFriendship(b.auth.id,e.id)}},[h,(0,r.Uk)(" الغاء الصداقة ")],8,p)):b.checkNotFriendsOfAuth(e.id)?((0,r.wg)(),(0,r.iD)("a",{key:1,class:"dropdown-item d-flex align-items-center",onClick:function(t){return b.createFriendship(e.id)}},[v,(0,r.Uk)(" الغاء طلب الصداقة ")],8,m)):b.checkFriendsOfAuth(e.id)?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("a",{key:2,class:"dropdown-item d-flex align-items-center",onClick:function(t){return b.createFriendship(e.id)}},[g,(0,r.Uk)(" اضافة ")],8,w))],2)])])})),128)),x.friends.length>x.length?((0,r.wg)(),(0,r.iD)("li",_,[(0,r._)("a",{class:"me-3 btn",role:"button",onClick:t[0]||(t[0]=function(e){return b.loadMore()})},"عرض المزيد")])):(0,r.kq)("",!0)])),[[O,b.onClickOutside]]):((0,r.wg)(),(0,r.iD)("div",k,[(0,r.Wm)(C,{class:"iq-card"},{default:(0,r.w5)((function(){return[y]})),_:1})]))]})),_:1})])}var b=n(50124),Z=n(48534),A=(n(97895),n(70560),n(76801),n(43843),n(89730),n(96444)),C=n(20425),O=n.n(C),F={name:"FriendList",created:function(){var e=this;return(0,Z.Z)((0,b.Z)().mark((function t(){var n;return(0,b.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,A.Z.getAllFriends(e.user_id);case 2:n=t.sent,e.friends=n.allFriends,e.friendsOfAuth=n.friendsOfAuth,e.notFriendsOfAuth=n.notFriendsOfAuth;case 6:case"end":return t.stop()}}),t)})))()},directives:{clickOutside:O().directive},data:function(){return{controlList:[],friends:[],friendsOfAuth:[],notFriendsOfAuth:[],length:10,user_id:this.$route.params.user_id}},methods:{showList:function(e){this.controlList.fill(!1),this.controlList[e]=!0},onClickOutside:function(){this.controlList.fill(!1)},deleteFriendship:function(e,t){var n=this.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-primary btn-lg ms-2"},buttonsStyling:!1});n.fire({title:"هل أنت متأكد؟",text:"لا يمكنك التراجع عن هذا الاجراء",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم، قم بالحذف",cancelButtonText:"تراجع  ",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}).then((function(r){r.isConfirmed&&A.Z.delete(e,t).then((function(e){n.fire({title:"تم الحذف",text:"تم حذف طلب الصداقة",icon:"success",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}),setTimeout((function(){location.reload(!0)}),2e3)})).catch((function(e){console.log(e)}))}))},createFriendship:function(e){var t=this;return(0,Z.Z)((0,b.Z)().mark((function n(){var r;return(0,b.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A.Z.create(e);case 3:n.sent,t.notFriendsOfAuth.push(e),r=t.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg"},buttonsStyling:!1}),r.fire({title:"تم الارسال",text:"تم ارسال طلب الصداقة",icon:"success",confirmButtonText:"حسنا",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},loadMore:function(){this.length>this.friends.length||(this.length=this.length+10)},checkFriendsOfAuth:function(e){return this.friendsOfAuth.includes(e)},checkNotFriendsOfAuth:function(e){return this.notFriendsOfAuth.includes(e)}},computed:{friendsLoaded:function(){return this.friends.slice(0,this.length)},auth:function(){return this.$store.getters.getUser}}},T=n(83744);const L=(0,T.Z)(F,[["render",x]]);var S=L},76560:function(e,t,n){"use strict";e.exports=n.p+"img/no-friends.2bab3c44.png"},62872:function(e,t,n){"use strict";var r=n(90690),i=n(27578),a=n(6310);e.exports=function(e){var t=r(this),n=a(t),c=arguments.length,s=i(c>1?arguments[1]:void 0,n),u=c>2?arguments[2]:void 0,o=void 0===u?n:i(u,n);while(o>s)t[s++]=e;return t}},27413:function(e,t,n){"use strict";var r=n(44201),i=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(r){}}return!1}},42124:function(e,t,n){"use strict";var r=n(91245),i=TypeError;e.exports=function(e){if(r(e))throw new i("The method doesn't accept regular expressions");return e}},97895:function(e,t,n){"use strict";var r=n(79989),i=n(62872),a=n(87370);r({target:"Array",proto:!0},{fill:i}),a("fill")},76801:function(e,t,n){"use strict";var r=n(79989),i=n(84328).includes,a=n(3689),c=n(87370),s=a((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:s},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},43843:function(e,t,n){"use strict";var r=n(79989),i=n(68844),a=n(42124),c=n(74684),s=n(34327),u=n(27413),o=i("".indexOf);r({target:"String",proto:!0,forced:!u("includes")},{includes:function(e){return!!~o(s(c(this)),s(a(e)),arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=7765-legacy.cb01106f.js.map