"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[1568],{89809:function(e,o,a){var t=a(24150),r=a(49579),n=a(66252);class i{async login({username:e,password:o}){try{const a=t.hi.post("/auth/signin",{username:e,password:o});return a.data.accessToken&&r.Z.setUser(a.date),a.data}catch(a){console.log(a)}}logout(){r.Z.removeUser()}async register(e,o,a,r,n,i){return await t.hi.post("/register",{name:e,gender:o,email:a,phone:r,password:n,user_type:i})}async sendEmail(){let e=null;const o=await t.hi.post("email/verification-notification").catch((e=>{e=e.response.data.message}));return{data:o.data,error:e}}async resetEmail(e){try{const o=await t.hi.post("email/reset",{email:e});return o.data.data}catch(o){return o.response}}async resetPassword(e,o,a){let r=new FormData;r.append("password",e),r.append("email",o),r.append("token",a);try{const e=await t.hi.post("password/reset",r);return e.data}catch(n){return n.response}}async forgetPassword(e){try{const o=await t.hi.post("password/forgot-password",{email:e});return o.data}catch(o){return o.response}}async sessionData(){try{const e=await t.hi.get("session-data");return e.data.data}catch(e){(0,n.S3)(e)}}async refreshToken(){try{const e=await t.hi.post("/refresh");return e.data.data}catch(e){(0,n.S3)(e)}}async returnToTeam(){try{const e=await t.hi.get("/return-to-team");return e.data.data}catch(e){(0,n.S3)(e)}}}o.Z=new i},67455:function(e,o,a){var t=a(24150),r=a(79940);class n{async getUserProfileById(e){try{const o=await t.hi.get(`user-profile/show/${e}`);return o.data.data}catch(o){(0,r.F)(o,"UserProfileById")}}async getUserProfileToUpdate(){try{const e=await t.hi.get("user-profile/show-to-update");return e.data.data}catch(e){return e}}async update(e){try{const o=await t.hi.post("/user-profile/update",e,{headers:{"Content-type":"multipart/form-data"}});return o.data.data}catch(o){return o}}async updateProfilePic(e){let o=new FormData;o.append("test"," profilePictureForm.profile_picture[0]"),o.append("profile_picture",e.profile_picture[0]);try{const e=await t.hi.post("user-profile/update-profile-pic",o,{headers:{"Content-Type":"multipart/form-data"}});return e.data.data}catch(a){return a}}async updateProfileCover(e){let o=new FormData;o.append("test"," profilePictureForm.cover_picture[0]"),o.append("cover_picture",e.cover_picture[0]);try{const e=await t.hi.post("user-profile/update-profile-cover",o,{headers:{"Content-Type":"multipart/form-data"}});return e.data.data}catch(a){return a}}async getImages(e,o){try{const a=await t.hi.get(`user-profile/profile-image/${e}/${o}`);return a}catch(a){return a}}async getProfileStatistics(e){try{const o=await t.hi.get(`user-profile/statistics/${e}`);return o.data.data}catch(o){return o}}}o.Z=new n},79940:function(e,o,a){a.d(o,{F:function(){return r}});a(70560);var t=a(1120);function r(e,o=""){throw console.log(`[ERROR] ${o} =>`,e.response.data),404===e.response.data.statusCode?t.Z.push({name:"NotFound"}):403===e.response.data.statusCode&&t.Z.push({name:"NotAuthorized"}),e}},41711:function(e,o,a){a.r(o),a.d(o,{default:function(){return mo}});a(76265);var t=a(66252),r=a(49963),n=a(3577),i=a(72918),c=a(84621),s=a.p+"img/update-profile-info.63fb2ea0.png",m=a(79885),d=a.p+"img/social-media.1d521c05.png",l=a(15584);const f={class:"col-sm-12 mt-3 text-center"},u={class:"iq-card-body p-3"},p={class:"iq-card-body profile-page p-0"},_={class:"profile-header"},h={class:"cover-container"},g=["src"],v={key:1,src:i,alt:"profile-bg",class:"rounded img-fluid"},w={class:"profile-img"},y=["src"],b={key:1,src:c,alt:"profile-img",class:"avatar-130 img-fluid",style:{border:"4px solid #1d1a55"}},F={class:"mt-3 row"},k={class:"form-group col-6"},M=(0,t._)("label",{class:"form-label",for:"profile_picture"}," صورة الملف الشخصي ",-1),$={class:"form-group col-6"},x=(0,t._)("label",{class:"form-label",for:"cover_picture"}," صورة الغلاف ",-1),P=(0,t._)("div",{class:"iq-card-header-toolbar d-flex align-items-center mx-auto"},[(0,t._)("h3",{class:"text-center mt-3 mb-3"},"البيانات الشخصية")],-1),I={class:"iq-card-body p-3"},C=(0,t._)("div",{class:"image-block text-center"},[(0,t._)("img",{src:s,class:"img-fluid rounded w-50",alt:"profile-img"})],-1),S={class:"d-flex align-items-center mt-3"},E={class:"form-group col-12"},D=(0,t._)("h4",null,"اسمك الكامل بالعربية",-1),U={class:"form-group row"},q={key:0,style:{color:"red"}},T={class:"form-group row"},G={class:"form-group row"},A={key:1,style:{color:"red"}},B={class:"form-group col-12"},V=(0,t._)("h4",null,"تاريخ الميلاد",-1),R={class:"form-group col-12"},Z=(0,t._)("h4",null,"الدولة",-1),N=(0,t._)("option",{value:"",selected:""},"الدولة",-1),K=["value"],L={class:"form-group col-12"},H=(0,t._)("h4",null,"بلد الاقامة",-1),O=(0,t._)("option",{value:"",selected:""},"بلد الاقامة",-1),W=["value"],Y={class:"form-group col-12"},z=(0,t._)("h4",null,"من أنا",-1),J={class:"form-group row"},Q={key:0},X={key:0,style:{color:"red"}},j={class:"form-group row"},ee={key:1,style:{color:"red"}},oe={class:"form-group row"},ae={key:2,style:{color:"red"}},te={class:"form-group row"},re={key:3,style:{color:"red"}},ne={class:"form-group col-12"},ie=(0,t._)("h4",null,"قسم القراءة المفضل",-1),ce=(0,t._)("option",{value:"",selected:""},"اختر قسمك المفضل",-1),se=["value"],me=(0,t._)("hr",null,null,-1),de={class:"form-group"},le=["disabled"],fe={key:0,class:"col-sm-12 text-center"},ue=(0,t._)("img",{src:m,alt:"loader",style:{height:"100px"}},null,-1),pe=[ue],_e={key:1,class:"text-center mt-3 mb-3"},he=(0,t._)("div",{class:"iq-card-header-toolbar d-flex align-items-center mx-auto"},[(0,t._)("h3",{class:"text-center mt-3 mb-3"},"مواقع التواصل الاجتماعي")],-1),ge={class:"iq-card-body p-3"},ve=(0,t._)("div",{class:"image-block text-center"},[(0,t._)("img",{src:d,class:"img-fluid rounded w-50",alt:"profile-img"})],-1),we={class:"d-flex align-items-center mt-3"},ye={class:"form-group col-12"},be=(0,t._)("hr",null,null,-1),Fe={class:"form-group"},ke=["disabled"],Me={key:0,class:"col-sm-12 text-center"},$e=(0,t._)("img",{src:m,alt:"loader",style:{height:"100px"}},null,-1),xe=[$e],Pe={key:1,class:"text-center mt-3 mb-3"},Ie={class:"d-flex align-items-center mt-3 row"},Ce={class:"d-inline-block w-100 text-center col-12"},Se=(0,t._)("span",null,"عودة للملف الشخصي",-1),Ee=(0,t._)("span",{class:"align-middle material-symbols-outlined"}," keyboard_return ",-1),De=[Se,Ee],Ue=(0,t._)("div",{class:"iq-card-header-toolbar d-flex align-items-center mx-auto"},[(0,t._)("h3",{class:"text-center mt-3 mb-3"}," اعادة تعيين البريد الالكتروني ")],-1),qe={class:"iq-card-body p-3"},Te=(0,t._)("div",{class:"image-block text-center"},[(0,t._)("img",{src:l,class:"img-fluid rounded w-50",alt:"profile-img"})],-1),Ge={class:"d-flex align-items-center mt-3"},Ae={class:"alert alert-warning w-75 mb-2",role:"alert"},Be={class:"form-group"},Ve=(0,t._)("label",{class:"form-label",for:"email"},"ادخل بريدك الالكتروني الجديد",-1),Re={key:0,class:"p-2 text-center",style:{color:"red"}},Ze={key:0,class:"col-sm-12 text-center"},Ne=(0,t._)("img",{src:m,alt:"loader",style:{height:"100px"}},null,-1),Ke=[Ne],Le={key:1,class:"text-center mt-3 mb-3"},He=(0,t._)("div",{class:"d-inline-block w-100 text-center"},[(0,t._)("button",{type:"submit",class:"btn d-block btn-primary mt-3 mb-3 w-75 mx-auto"}," تعيين ")],-1),Oe={class:"d-flex align-items-center mt-3 row"},We={class:"d-inline-block w-100 text-center col-12"},Ye=(0,t._)("span",null,"عودة للملف الشخصي",-1),ze=(0,t._)("span",{class:"align-middle material-symbols-outlined"}," keyboard_return ",-1),Je=[Ye,ze];function Qe(e,o,a,i,c,s){const m=(0,t.up)("iq-card");return(0,t.wg)(),(0,t.iD)("div",f,[(0,t.Wm)(m,{class:"iq-card"},{default:(0,t.w5)((()=>[(0,t._)("div",u,[(0,t._)("div",p,[(0,t._)("div",_,[(0,t._)("div",h,[c.profileInfo&&c.profileInfo.cover_picture?((0,t.wg)(),(0,t.iD)("img",{key:0,src:s.resolve_porfile_img("1300x325",c.profileInfo.cover_picture,c.profileInfo.id),alt:"profile-bg",class:"rounded img-fluid"},null,8,g)):((0,t.wg)(),(0,t.iD)("img",v))])])]),(0,t._)("div",w,[c.profileInfo&&c.profileInfo.profile_picture?((0,t.wg)(),(0,t.iD)("img",{key:0,src:s.resolve_porfile_img("150x150",c.profileInfo.profile_picture,c.profileInfo.id),alt:"profile-img",class:"avatar-130 img-fluid",style:{border:"4px solid #1d1a55"}},null,8,y)):((0,t.wg)(),(0,t.iD)("img",b))]),(0,t._)("div",F,[(0,t._)("div",k,[M,(0,t._)("input",{class:"form-control",type:"file",name:"profile_picture",id:"profile_picture",ref:"profile_picture",accept:"image/*",onChange:o[0]||(o[0]=(...e)=>s.submitProfilePic&&s.submitProfilePic(...e))},null,544)]),(0,t._)("div",$,[x,(0,t._)("input",{class:"form-control",type:"file",name:"cover_picture",id:"cover_picture",ref:"cover_picture",accept:"image/*",onChange:o[1]||(o[1]=(...e)=>s.submitProfileCover&&s.submitProfileCover(...e))},null,544)])])])])),_:1}),(0,t.Wm)(m,{class:"iq-card"},{default:(0,t.w5)((()=>[P,(0,t._)("div",I,[C,(0,t._)("div",S,[(0,t._)("form",{onSubmit:o[13]||(o[13]=(0,r.iM)(((...e)=>s.submitProfileInfo&&s.submitProfileInfo(...e)),["prevent"])),class:"post-text ml-3 w-100 row"},[(0,t._)("div",E,[D,(0,t._)("div",U,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control mt-2",name:"first_name_ar",id:"first_name_ar","onUpdate:modelValue":o[2]||(o[2]=e=>i.v$.infoForm.first_name_ar.$model=e),placeholder:"الاسم الأول"},null,512),[[r.nr,i.v$.infoForm.first_name_ar.$model]])]),i.v$.infoForm.first_name_ar.$error?((0,t.wg)(),(0,t.iD)("small",q," قم بادخال الاسم الأول ")):(0,t.kq)("",!0),(0,t._)("div",T,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control mt-2",name:"middle_name_ar",id:"middle_name_ar","onUpdate:modelValue":o[3]||(o[3]=e=>c.infoForm.middle_name_ar=e),placeholder:"الاسم الثاني"},null,512),[[r.nr,c.infoForm.middle_name_ar]])]),(0,t._)("div",G,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control mt-2",name:"last_name_ar",id:"last_name_ar","onUpdate:modelValue":o[4]||(o[4]=e=>i.v$.infoForm.last_name_ar.$model=e),placeholder:"الاسم الأخير"},null,512),[[r.nr,i.v$.infoForm.last_name_ar.$model]])]),i.v$.infoForm.last_name_ar.$error?((0,t.wg)(),(0,t.iD)("small",A," قم بادخال الاسم الأخير ")):(0,t.kq)("",!0)]),(0,t._)("div",B,[V,(0,t.wy)((0,t._)("input",{type:"date",class:"form-control mt-2",name:"birthdate",id:"birthdate","onUpdate:modelValue":o[5]||(o[5]=e=>c.infoForm.birthdate=e),placeholder:"تاريخ الملاد"},null,512),[[r.nr,c.infoForm.birthdate]])]),(0,t._)("div",R,[Z,(0,t.wy)((0,t._)("select",{class:"form-select mt-2","onUpdate:modelValue":o[6]||(o[6]=e=>c.infoForm.country=e)},[N,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(c.countries,((e,o)=>((0,t.wg)(),(0,t.iD)("option",{key:o,value:e.code},(0,n.zw)(e.name),9,K)))),128))],512),[[r.bM,c.infoForm.country]])]),(0,t._)("div",L,[H,(0,t.wy)((0,t._)("select",{class:"form-select mt-2","data-trigger":"",name:"resident",id:"resident","onUpdate:modelValue":o[7]||(o[7]=e=>c.infoForm.resident=e)},[O,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(c.countries,((e,o)=>((0,t.wg)(),(0,t.iD)("option",{key:o,value:e.code},(0,n.zw)(e.name),9,W)))),128))],512),[[r.bM,c.infoForm.resident]])]),(0,t._)("div",Y,[z,(0,t._)("div",J,[(0,t.wy)((0,t._)("textarea",{rows:"3",placeholder:"نبذة عني",class:"rounded form-control mt-2 col-12",id:"bio","onUpdate:modelValue":o[8]||(o[8]=e=>i.v$.infoForm.bio.$model=e),name:"bio",dir:"rtl"},"\r\n                ",512),[[r.nr,i.v$.infoForm.bio.$model]]),i.v$.infoForm.bio.$model?((0,t.wg)(),(0,t.iD)("span",Q,(0,n.zw)(i.v$.infoForm.bio.$model.length)+"/600 حرف",1)):(0,t.kq)("",!0)]),i.v$.infoForm.bio.$error?((0,t.wg)(),(0,t.iD)("small",X," قم بادخال نبدة عنك لا يزيد عدد حروفها عن 600 حرف ")):(0,t.kq)("",!0),(0,t._)("div",j,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",name:"fav_book",id:"fav_book","onUpdate:modelValue":o[9]||(o[9]=e=>i.v$.infoForm.fav_book.$model=e),placeholder:"كتابي المفضل"},null,512),[[r.nr,i.v$.infoForm.fav_book.$model]])]),i.v$.infoForm.fav_book.$error?((0,t.wg)(),(0,t.iD)("small",ee," قم بادخال اسم كتاب لا يزيد عدد حروفه عن 250 ")):(0,t.kq)("",!0),(0,t._)("div",oe,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",name:"fav_writer",id:"fav_writer","onUpdate:modelValue":o[10]||(o[10]=e=>i.v$.infoForm.fav_writer.$model=e),placeholder:"الكاتب المفضل"},null,512),[[r.nr,i.v$.infoForm.fav_writer.$model]])]),i.v$.infoForm.fav_writer.$error?((0,t.wg)(),(0,t.iD)("small",ae," قم بادخال اسم كاتب لا يزيد عدد حروفه عن 250 ")):(0,t.kq)("",!0),(0,t._)("div",te,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",name:"fav_quote",id:"fav_quote","onUpdate:modelValue":o[11]||(o[11]=e=>i.v$.infoForm.fav_quote.$model=e),placeholder:"الاقتباس المفضل"},null,512),[[r.nr,i.v$.infoForm.fav_quote.$model]])]),i.v$.infoForm.fav_quote.$error?((0,t.wg)(),(0,t.iD)("small",re," قم بادخال اقتباس لا يزيد عدد حروفه عن 250 ")):(0,t.kq)("",!0)]),(0,t._)("div",ne,[ie,(0,t.wy)((0,t._)("select",{class:"form-select mt-2","data-trigger":"",name:"section",id:"section","onUpdate:modelValue":o[12]||(o[12]=e=>c.infoForm.fav_section=e)},[ce,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(c.sections,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.id,value:e.section},(0,n.zw)(e.section),9,se)))),128))],512),[[r.bM,c.infoForm.fav_section]])]),me,(0,t._)("div",de,[(0,t._)("button",{type:"submit",disabled:c.message,class:"btn d-block btn-primary mt-3 mb-3 w-75 mx-auto"}," تعديل ",8,le)]),c.loader?((0,t.wg)(),(0,t.iD)("div",fe,pe)):(0,t.kq)("",!0),c.message?((0,t.wg)(),(0,t.iD)("h4",_e,(0,n.zw)(c.message),1)):(0,t.kq)("",!0)],32)])])])),_:1}),(0,t.Wm)(m,{class:"iq-card"},{default:(0,t.w5)((()=>[he,(0,t._)("div",ge,[ve,(0,t._)("div",we,[(0,t._)("form",{onSubmit:o[17]||(o[17]=(0,r.iM)(((...e)=>s.submitSociaMedia&&s.submitSociaMedia(...e)),["prevent"])),class:"post-text ml-3 w-100 row"},[(0,t._)("div",ye,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control mt-2",name:"facebook",id:"facebook","onUpdate:modelValue":o[14]||(o[14]=e=>c.socialMediaForm.facebook=e),placeholder:"فيسبوك"},null,512),[[r.nr,c.socialMediaForm.facebook]]),(0,t.wy)((0,t._)("input",{type:"text",class:"form-control mt-2",name:"instagram",id:"instagram","onUpdate:modelValue":o[15]||(o[15]=e=>c.socialMediaForm.instagram=e),placeholder:"انستغرام"},null,512),[[r.nr,c.socialMediaForm.instagram]]),(0,t.wy)((0,t._)("input",{type:"text",class:"form-control mt-2",name:"twitter",id:"twitter","onUpdate:modelValue":o[16]||(o[16]=e=>c.socialMediaForm.twitter=e),placeholder:"تويتر"},null,512),[[r.nr,c.socialMediaForm.twitter]])]),be,(0,t._)("div",Fe,[(0,t._)("button",{type:"submit",disabled:c.socialMediaMessage,class:"btn d-block btn-primary mt-3 mb-3 w-75 mx-auto"}," تعديل ",8,ke)]),c.loader?((0,t.wg)(),(0,t.iD)("div",Me,xe)):(0,t.kq)("",!0),c.message?((0,t.wg)(),(0,t.iD)("h4",Pe,(0,n.zw)(c.socialMediaMessage),1)):(0,t.kq)("",!0)],32)]),(0,t._)("div",Ie,[(0,t._)("div",Ce,[(0,t._)("a",{role:"button",onClick:o[18]||(o[18]=e=>s.back()),class:"d-block mt-3 mb-3 w-75 mx-auto"},De)])])])])),_:1}),(0,t.Wm)(m,{class:"iq-card"},{default:(0,t.w5)((()=>[Ue,(0,t._)("div",qe,[Te,(0,t._)("div",Ge,[(0,t._)("form",{class:"mt-4 w-100",onSubmit:o[20]||(o[20]=(0,r.iM)(((...e)=>s.resetEmail&&s.resetEmail(...e)),["prevent"]))},[(0,t._)("div",Ae," الايميل المسجل به: "+(0,n.zw)(s.user.email),1),(0,t._)("div",Be,[Ve,(0,t.wy)((0,t._)("input",{type:"email",class:"form-control mb-0 w-75 mx-auto",id:"email",placeholder:"  ادخل بريدك الالكتروني ","onUpdate:modelValue":o[19]||(o[19]=e=>i.v$.resetEmailForm.email.$model=e)},null,512),[[r.nr,i.v$.resetEmailForm.email.$model]]),i.v$.resetEmailForm.email.$error?((0,t.wg)(),(0,t.iD)("p",Re,"قم بادخال بريدك الالكتروني")):(0,t.kq)("",!0)]),c.loader?((0,t.wg)(),(0,t.iD)("div",Ze,Ke)):(0,t.kq)("",!0),c.resetEmailMsg?((0,t.wg)(),(0,t.iD)("h4",Le,(0,n.zw)(c.resetEmailMsg),1)):(0,t.kq)("",!0),He],32)]),(0,t._)("div",Oe,[(0,t._)("div",We,[(0,t._)("a",{role:"button",onClick:o[21]||(o[21]=e=>s.back()),class:"d-block mt-3 mb-3 w-75 mx-auto"},Je)])])])])),_:1})])}a(70560);var Xe=a(5705),je=a(10760),eo=a(67455),oo=a(24150);class ao{async getByUserId(e){try{const o=await oo.hi.get(`socialMedia/show/${e}`);return o.data.data}catch(o){return o}}async add(e){try{const o=await oo.hi.post("/socialMedia/add-social-media",e,{headers:{"Content-type":"multipart/form-data"}});return o.data.data}catch(o){return o}}}var to=new ao,ro=a(2933),no=a(89809),io=(a(49579),{name:"update profile",async created(){const e=await eo.Z.getUserProfileToUpdate();this.sections=e.sections,this.profileInfo=e.profileInfo,this.profileInfo&&(this.infoForm.first_name_ar=this.profileInfo.first_name_ar,this.infoForm.middle_name_ar=this.profileInfo.middle_name_ar,this.infoForm.last_name_ar=this.profileInfo.last_name_ar,this.infoForm.birthdate=this.profileInfo.birthdate,this.infoForm.country=this.profileInfo.country,this.infoForm.resident=this.profileInfo.resident,this.infoForm.bio=this.profileInfo.bio,this.infoForm.fav_book=this.profileInfo.fav_book,this.infoForm.fav_quote=this.profileInfo.fav_quote,this.infoForm.fav_writer=this.profileInfo.fav_writer,this.infoForm.fav_section=this.profileInfo.fav_section);const o=await to.getByUserId(this.$route.params.user_id);o&&(this.socialMediaForm.facebook=o.facebook,this.socialMediaForm.instagram=o.instagram,this.socialMediaForm.twitter=o.twitter)},setup(){return{v$:(0,Xe.ZP)()}},data(){return{resetEmailForm:{email:""},loader:!1,profileInfo:null,profilePictureForm:{profile_picture:[],cover_picture:[]},fileExtnError:null,countries:[{code:"SA",name:"المملكة العربية السعودية"},{code:"ET",name:"إثيوبيا"},{code:"AZ",name:"أذربيجان"},{code:"AM",name:"أرمينيا"},{code:"AW",name:"أروبا"},{code:"ER",name:"إريتريا"},{code:"ES",name:"أسبانيا"},{code:"AU",name:"أستراليا"},{code:"EE",name:"إستونيا"},{code:"AF",name:"أفغانستان"},{code:"IO",name:"إقليم المحيط الهندي البريطاني"},{code:"EC",name:"إكوادور"},{code:"AR",name:"الأرجنتين"},{code:"JO",name:"الأردن"},{code:"AE",name:"الإمارات العربية المتحدة"},{code:"AL",name:"ألبانيا"},{code:"BR",name:"البرازيل"},{code:"PT",name:"البرتغال"},{code:"BA",name:"البوسنة والهرسك"},{code:"GA",name:"الجابون"},{code:"DZ",name:"الجزائر"},{code:"DK",name:"الدانمارك"},{code:"CV",name:"الرأس الأخضر"},{code:"PS",name:"فلسطين"},{code:"SV",name:"السلفادور"},{code:"SN",name:"السنغال"},{code:"SD",name:"السودان"},{code:"SE",name:"السويد"},{code:"SO",name:"الصومال"},{code:"CN",name:"الصين"},{code:"IQ",name:"العراق"},{code:"PH",name:"الفلبين"},{code:"CM",name:"الكاميرون"},{code:"CG",name:"الكونغو"},{code:"CD",name:"الكونغو (جمهورية الكونغو الديمقراطية)"},{code:"KW",name:"الكويت"},{code:"DE",name:"ألمانيا"},{code:"HU",name:"المجر"},{code:"MA",name:"المغرب"},{code:"MX",name:"المكسيك"},{code:"UK",name:"المملكة المتحدة"},{code:"TF",name:"المناطق الفرنسية الجنوبية ومناطق انتراكتيكا"},{code:"NO",name:"النرويج"},{code:"AT",name:"النمسا"},{code:"NE",name:"النيجر"},{code:"IN",name:"الهند"},{code:"ye",name:"اليمن"},{code:"US",name:"الولايات المتحدة"},{code:"JP",name:"اليابان"},{code:"GR",name:"اليونان"},{code:"AQ",name:"أنتاركتيكا"},{code:"AG",name:"أنتيغوا وبربودا"},{code:"AD",name:"أندورا"},{code:"ID",name:"إندونيسيا"},{code:"AO",name:"أنغولا"},{code:"AI",name:"أنغويلا"},{code:"UY",name:"أوروجواي"},{code:"UZ",name:"أوزبكستان"},{code:"UG",name:"أوغندا"},{code:"UA",name:"أوكرانيا"},{code:"IR",name:"إيران"},{code:"IE",name:"أيرلندا"},{code:"IS",name:"أيسلندا"},{code:"IT",name:"إيطاليا"},{code:"PG",name:"بابوا-غينيا الجديدة"},{code:"PY",name:"باراجواي"},{code:"BB",name:"باربادوس"},{code:"PK",name:"باكستان"},{code:"PW",name:"بالاو"},{code:"BM",name:"برمودا"},{code:"BN",name:"بروناي"},{code:"BE",name:"بلجيكا"},{code:"BG",name:"بلغاريا"},{code:"BD",name:"بنجلاديش"},{code:"PA",name:"بنما"},{code:"BJ",name:"بنين"},{code:"BT",name:"بوتان"},{code:"BW",name:"بوتسوانا"},{code:"PR",name:"بورتو ريكو"},{code:"BF",name:"بوركينا فاسو"},{code:"BI",name:"بوروندي"},{code:"PL",name:"بولندا"},{code:"BO",name:"بوليفيا"},{code:"PF",name:"بولينزيا الفرنسية"},{code:"PE",name:"بيرو"},{code:"BY",name:"بيلاروس"},{code:"BZ",name:"بيليز"},{code:"TH",name:"تايلاند"},{code:"TW",name:"تايوان"},{code:"TM",name:"تركمانستان"},{code:"TR",name:"تركيا"},{code:"TT",name:"ترينيداد وتوباجو"},{code:"TD",name:"تشاد"},{code:"CL",name:"تشيلي"},{code:"TZ",name:"تنزانيا"},{code:"TG",name:"توجو"},{code:"TV",name:"توفالو"},{code:"TK",name:"توكيلاو"},{code:"TO",name:"تونجا"},{code:"TN",name:"تونس"},{code:"TP",name:"تيمور الشرقية (تيمور الشرقية)"},{code:"JM",name:"جامايكا"},{code:"GM",name:"جامبيا"},{code:"GI",name:"جبل طارق"},{code:"GL",name:"جرينلاند"},{code:"AN",name:"جزر الأنتيل الهولندية"},{code:"PN",name:"جزر البتكارين"},{code:"BS",name:"جزر البهاما"},{code:"VG",name:"جزر العذراء البريطانية"},{code:"VI",name:"جزر العذراء، الولايات المتحدة"},{code:"KM",name:"جزر القمر"},{code:"CC",name:"جزر الكوكوس (كيلين)"},{code:"MV",name:"جزر المالديف"},{code:"TC",name:"جزر تركس وكايكوس"},{code:"AS",name:"جزر ساموا الأمريكية"},{code:"SB",name:"جزر سولومون"},{code:"FO",name:"جزر فايرو"},{code:"UM",name:"جزر فرعية تابعة للولايات المتحدة"},{code:"FK",name:"جزر فوكلاند (أيزلاس مالفيناس)"},{code:"FJ",name:"جزر فيجي"},{code:"KY",name:"جزر كايمان"},{code:"CK",name:"جزر كوك"},{code:"MH",name:"جزر مارشال"},{code:"MP",name:"جزر ماريانا الشمالية"},{code:"CX",name:"جزيرة الكريسماس"},{code:"BV",name:"جزيرة بوفيه"},{code:"IM",name:"جزيرة مان"},{code:"NF",name:"جزيرة نورفوك"},{code:"HM",name:"جزيرة هيرد وجزر ماكدونالد"},{code:"CF",name:"جمهورية أفريقيا الوسطى"},{code:"CZ",name:"جمهورية التشيك"},{code:"DO",name:"جمهورية الدومينيكان"},{code:"ZA",name:"جنوب أفريقيا"},{code:"GT",name:"جواتيمالا"},{code:"GP",name:"جواديلوب"},{code:"GU",name:"جوام"},{code:"GE",name:"جورجيا"},{code:"GS",name:"جورجيا الجنوبية وجزر ساندويتش الجنوبية"},{code:"GY",name:"جيانا"},{code:"GF",name:"جيانا الفرنسية"},{code:"DJ",name:"جيبوتي"},{code:"JE",name:"جيرسي"},{code:"GG",name:"جيرنزي"},{code:"VA",name:"دولة الفاتيكان"},{code:"DM",name:"دومينيكا"},{code:"RW",name:"رواندا"},{code:"RU",name:"روسيا"},{code:"RO",name:"رومانيا"},{code:"RE",name:"ريونيون"},{code:"ZM",name:"زامبيا"},{code:"ZW",name:"زيمبابوي"},{code:"WS",name:"ساموا"},{code:"SM",name:"سان مارينو"},{code:"PM",name:"سانت بيير وميكولون"},{code:"VC",name:"سانت فينسنت وجرينادينز"},{code:"KN",name:"سانت كيتس ونيفيس"},{code:"LC",name:"سانت لوشيا"},{code:"SH",name:"سانت هيلينا"},{code:"ST",name:"ساوتوماي وبرينسيبا"},{code:"SJ",name:"سفالبارد وجان ماين"},{code:"SK",name:"سلوفاكيا"},{code:"SI",name:"سلوفينيا"},{code:"SG",name:"سنغافورة"},{code:"SZ",name:"سوازيلاند"},{code:"SY",name:"سوريا"},{code:"SR",name:"سورينام"},{code:"CH",name:"سويسرا"},{code:"SL",name:"سيراليون"},{code:"LK",name:"سيريلانكا"},{code:"SC",name:"سيشل"},{code:"RS",name:"صربيا"},{code:"TJ",name:"طاجيكستان"},{code:"OM",name:"عمان"},{code:"GH",name:"غانا"},{code:"GD",name:"غرينادا"},{code:"GN",name:"غينيا"},{code:"GQ",name:"غينيا الاستوائية"},{code:"GW",name:"غينيا بيساو"},{code:"VU",name:"فانواتو"},{code:"FR",name:"فرنسا"},{code:"VE",name:"فنزويلا"},{code:"FI",name:"فنلندا"},{code:"VN",name:"فيتنام"},{code:"CY",name:"قبرص"},{code:"QA",name:"قطر"},{code:"KG",name:"قيرقيزستان"},{code:"KZ",name:"كازاخستان"},{code:"NC",name:"كاليدونيا الجديدة"},{code:"KH",name:"كامبوديا"},{code:"HR",name:"كرواتيا"},{code:"CA",name:"كندا"},{code:"CU",name:"كوبا"},{code:"CI",name:"كوت ديفوار (ساحل العاج)"},{code:"KR",name:"كوريا"},{code:"KP",name:"كوريا الشمالية"},{code:"CR",name:"كوستاريكا"},{code:"CO",name:"كولومبيا"},{code:"KI",name:"كيريباتي"},{code:"KE",name:"كينيا"},{code:"LV",name:"لاتفيا"},{code:"LA",name:"لاوس"},{code:"LB",name:"لبنان"},{code:"LI",name:"لختنشتاين"},{code:"LU",name:"لوكسمبورج"},{code:"LY",name:"ليبيا"},{code:"LR",name:"ليبيريا"},{code:"LT",name:"ليتوانيا"},{code:"LS",name:"ليسوتو"},{code:"MQ",name:"مارتينيك"},{code:"MO",name:"ماكاو"},{code:"FM",name:"ماكرونيزيا"},{code:"MW",name:"مالاوي"},{code:"MT",name:"مالطا"},{code:"ML",name:"مالي"},{code:"MY",name:"ماليزيا"},{code:"YT",name:"مايوت"},{code:"MG",name:"مدغشقر"},{code:"EG",name:"مصر"},{code:"MK",name:"مقدونيا، جمهورية يوغوسلافيا السابقة"},{code:"BH",name:"مملكة البحرين"},{code:"MN",name:"منغوليا"},{code:"MR",name:"موريتانيا"},{code:"MU",name:"موريشيوس"},{code:"MZ",name:"موزمبيق"},{code:"MD",name:"مولدوفا"},{code:"MC",name:"موناكو"},{code:"MS",name:"مونتسيرات"},{code:"ME",name:"مونتينيغرو"},{code:"MM",name:"ميانمار"},{code:"NA",name:"ناميبيا"},{code:"NR",name:"ناورو"},{code:"NP",name:"نيبال"},{code:"NG",name:"نيجيريا"},{code:"NI",name:"نيكاراجوا"},{code:"NU",name:"نيوا"},{code:"NZ",name:"نيوزيلندا"},{code:"HT",name:"هايتي"},{code:"HN",name:"هندوراس"},{code:"NL",name:"هولندا"},{code:"HK",name:"هونغ كونغ SAR"},{code:"WF",name:"واليس وفوتونا"}],infoForm:{first_name_ar:"",middle_name_ar:"",last_name_ar:"",country:"",resident:"",birthdate:"",bio:"",fav_book:"",fav_writer:"",fav_quote:"",fav_section:""},socialMediaForm:{facebook:"",instagram:"",twitter:""},sections:[],message:null,socialMediaMessage:null,resetEmailMsg:""}},validations(){return{infoForm:{first_name_ar:{required:je.C1},last_name_ar:{required:je.C1},bio:{maxLength:(0,je.BS)(600)},fav_book:{maxLength:(0,je.BS)(100)},fav_writer:{maxLength:(0,je.BS)(100)},fav_quote:{maxLength:(0,je.BS)(300)}},resetEmailForm:{email:{required:je.C1,email:je.Do}}}},methods:{async submitProfileInfo(){if(this.v$.$touch(),!this.v$.infoForm.$invalid){this.message="",this.loader=!0;try{const e=await eo.Z.update(this.infoForm);this.loader=!1,this.message=e,this.v$.infoForm.$reset()}catch(e){console.log(e)}}},async submitSociaMedia(){this.socialMediaMessage="",this.loader=!0;try{const e=await to.add(this.socialMediaForm);this.loader=!1,this.socialMediaMessage=e}catch(e){console.log(e)}},async resetEmail(){if(this.v$.$touch(),!this.v$.resetEmailForm.$invalid){this.resetEmailMsg="",this.loader=!0;const e=await no.Z.resetEmail(this.resetEmailForm.email);console.log(e),"Reset Successfully!"==e?(this.resetEmailMsg=" تم التعيين - تفقد بريدك الالكتروني وقم بتسجيل الدخول مرة أخرى",setTimeout(this.logout,1e4)):this.resetEmailMsg=" حدث خطأ",this.loader=!1}},async submitProfilePic(){this.profilePictureForm.profile_picture=this.$refs.profile_picture.files;const e=await eo.Z.updateProfilePic(this.profilePictureForm);this.profileInfo=e,this.$refs.profile_picture.value=null,this.$store.commit("SET_PROFILE_PICTURE",e.profile_picture)},async submitProfileCover(){this.profilePictureForm.cover_picture=this.$refs.cover_picture.files;const e=await eo.Z.updateProfileCover(this.profilePictureForm);this.profileInfo=e,this.$refs.cover_picture.value=null},resolve_porfile_img(e,o,a){return ro.Z.resolve_porfile_img(e,o,a)},back(){this.$router.push({name:"user.profile",params:{user_id:this.$route.params.user_id}})}},computed:{user(){return this.$store.getters.getUser}}}),co=a(83744);const so=(0,co.Z)(io,[["render",Qe]]);var mo=so},72918:function(e,o,a){e.exports=a.p+"img/book-banner.6a2a5a9c.png"},15584:function(e,o,a){e.exports=a.p+"img/no-friend-req.36ea3495.png"},84621:function(e,o,a){e.exports=a.p+"img/reader.b5157672.png"}}]);
//# sourceMappingURL=1568.89782f72.js.map