"use strict";(self["webpackChunkvinicenter_website"]=self["webpackChunkvinicenter_website"]||[]).push([[115],{1272:function(t,e,a){a.d(e,{Z:function(){return g}});var s=a(3396),r=a(7139);const i=["href","data-bs-toggle","data-bs-dismiss","data-bs-target"];function d(t,e,a,d,o,n){const l=(0,s.up)("RouterLink");return"router"==a.type?((0,s.wg)(),(0,s.j4)(l,{key:0,to:a.href,class:(0,r.C_)("btn btn-"+a.style),"data-bs-toggle":a.dataBsToggle,"data-bs-target":a.dataBsTarget,"data-bs-dismiss":a.dataBsDismiss},{default:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"default")])),_:3},8,["to","class","data-bs-toggle","data-bs-target","data-bs-dismiss"])):((0,s.wg)(),(0,s.iD)("a",{key:1,href:a.href,class:(0,r.C_)("btn btn-"+a.style),"data-bs-toggle":a.dataBsToggle,"data-bs-dismiss":a.dataBsDismiss,"data-bs-target":a.dataBsTarget},[(0,s.WI)(t.$slots,"default")],10,i))}var o={props:{style:{type:String,default:"primary"},type:{type:String,default:"link"},href:{type:String,default:"#"},dataBsToggle:{type:String,default:""},dataBsTarget:{type:String,default:""},dataBsDismiss:{type:String,default:""}}},n=a(89);const l=(0,n.Z)(o,[["render",d]]);var g=l},8115:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var s=a(3396),r=a(4870),i=a(7139),d=a(6265),o=a.n(d),n=a(98),l=a(6753),g=a(367),u=a(1272),c=a(6986);const p={class:"row"},b={data(){return{database:{project:{}},isLoaded:!1,loadingHasError:!1}},beforeCreate(){o().get((0,n.Z)("api.database.projects")).then((t=>{this.database.project=t.data,this.isLoaded=!0})).catch((()=>{this.loadingHasError=!0}))},components:{CardComposition:g.Z,ButtonComponent:u.Z,PageComposition:c.Z}};var f=Object.assign(b,{setup(t){return(t,e)=>((0,s.wg)(),(0,s.j4)(c.Z,{title:(0,r.SU)(l).views.projects.title,description:(0,r.SU)(l).views.projects.description,isLoaded:t.isLoaded,loadingHasError:t.loadingHasError},{default:(0,s.w5)((()=>[(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.database.project,(e=>((0,s.wg)(),(0,s.j4)(g.Z,{key:e,headerTitle:e.headerTitle,title:e.title,description:e.description,maxDescription:48,imgUrl:e.imgUrl,url:t.$route.path+"/"+e.id,badges:e.badges},{default:(0,s.w5)((()=>[(0,s.Wm)(u.Z,{type:"router",href:t.$route.path+"/"+e.id},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,r.SU)(l).generic.buttons.details),1)])),_:2},1032,["href"])])),_:2},1032,["headerTitle","title","description","imgUrl","url","badges"])))),128))])])),_:1},8,["title","description","isLoaded","loadingHasError"]))}});const h=f;var m=h}}]);
//# sourceMappingURL=115.210dde01.js.map