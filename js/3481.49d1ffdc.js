"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[3481],{19057:function(t,e,a){var s=a(66252),o=a(24150);class r{async getUserBooks(t){try{const e=await o.hi.get(`user-books/show/${t}`);return e.data.data}catch(e){return e}}async getAllFree(t,e){try{const a=await o.hi.get(`user-books/free-books/${e}/${t}`);return a.data.data}catch(a){return a}}async eligibleToWriteThesis(t){try{const e=await o.hi.get(`user-books/eligible-to-write-thesis/${t}`);return e.data.data}catch(e){return e}}async laterBooks(t){try{const e=await o.hi.get(`user-books/later-books/${t}`);return e.data.data}catch(e){return e}}async deleteForLeater(t){try{const e=await o.hi.get(`user-books/delete-for-later-book/${t}`);return e.data.data}catch(e){return e}}async saveBookForLater(t){try{const e=await o.hi.patch(`/user-books/${t}/save-for-later`);return e.data}catch(e){(0,s.S3)(e)}}}e.Z=new r},23481:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var s=a(66252),o=a(3577),r=a(8584);const i={class:"col-sm-12 mt-3 text-center"},n=(0,s._)("div",{class:"iq-card-header-toolbar d-flex align-items-center mx-auto"},[(0,s._)("h3",{class:"text-center mt-3 mb-3"},"كتب للقراءة لاحقاً")],-1),c={class:"iq-card-body p-3"},l=(0,s._)("div",{class:"image-block text-center"},[(0,s._)("img",{src:r,class:"img-fluid rounded w-50",alt:"profile-img"})],-1),u={key:0,class:"mt-3 list-group"},d={role:"button"},b={class:"rounded-pill badge bg-primary"},k=["onClick"],g={key:1,class:"mt-3 list-group"},h=(0,s._)("h4",{class:"text-center mt-3 mb-3"},"لا يوجد كتب",-1);function m(t,e,a,r,m,w){const p=(0,s.up)("router-link"),y=(0,s.up)("iq-card");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(y,{class:"iq-card"},{default:(0,s.w5)((()=>[n,(0,s._)("div",c,[l,m.books.length>0?((0,s.wg)(),(0,s.iD)("ul",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(m.books,(t=>((0,s.wg)(),(0,s.iD)("li",{class:"list-group-item d-flex justify-content-between align-items-center",key:t.id},[(0,s.Wm)(p,{to:{name:"book.book-details",params:{book_id:t.book.id}}},{default:(0,s.w5)((()=>[(0,s._)("h5",d,(0,o.zw)(t.book.name),1)])),_:2},1032,["to"]),(0,s._)("div",null,[(0,s._)("span",b,(0,o.zw)(t.book.section.section),1),w.isAuth?((0,s.wg)(),(0,s.iD)("span",{key:0,role:"button",class:"align-middle material-symbols-outlined later-book later-book-on ms-2",onClick:e=>w.deleteForLeater(t.id)}," delete ",8,k)):(0,s.kq)("",!0)])])))),128))])):((0,s.wg)(),(0,s.iD)("ul",g,[h,w.isAuth?((0,s.wg)(),(0,s.j4)(p,{key:0,class:"btn btn-primary w-100","aria-current":"page",to:{name:"osboha.book"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" أضف للقائمة ")])),_:1},8,["to"])):(0,s.kq)("",!0)]))])])),_:1})])}a(32320);var w=a(19057),p=a(8209),y={name:"Later Books",async created(){this.books=await w.Z.laterBooks(this.$route.params.user_id)},data(){return{books:[]}},computed:{isAuth(){return this.$store.getters.getUser.id===parseInt(this.$route.params.user_id)}},methods:{async deleteForLeater(t){this.books=await w.Z.deleteForLeater(t),p.Z.toggleToast("تم الحذف ","success")}}},f=a(83744);const _=(0,f.Z)(y,[["render",m]]);var v=_},8584:function(t,e,a){t.exports=a.p+"img/reading_list.1a92b0ea.png"}}]);
//# sourceMappingURL=3481.49d1ffdc.js.map