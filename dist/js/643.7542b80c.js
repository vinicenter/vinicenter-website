(self["webpackChunkvinicenter_website"]=self["webpackChunkvinicenter_website"]||[]).push([[643],{2977:function(t,e,a){"use strict";a.r(e);var s=a(8081),i=a.n(s),o=a(3645),n=a.n(o),r=n()(i());r.push([t.id,".buttons{margin-right:8px;margin-bottom:8px}",""]),e["default"]=r},4319:function(t,e,a){"use strict";a.r(e);var s=a(8081),i=a.n(s),o=a(3645),n=a.n(o),r=n()(i());r.push([t.id,".banner[data-v-37b2fea9]{display:flex;justify-content:center}.banner img[data-v-37b2fea9]{width:100%;height:auto}",""]),e["default"]=r},1272:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var s=a(3396),i=a(7139);const o=["href","data-bs-toggle","data-bs-dismiss","data-bs-target"];function n(t,e,a,n,r,d){const l=(0,s.up)("RouterLink");return"router"==a.type?((0,s.wg)(),(0,s.j4)(l,{key:0,to:a.href,class:(0,i.C_)("btn btn-"+a.style),"data-bs-toggle":a.dataBsToggle,"data-bs-target":a.dataBsTarget,"data-bs-dismiss":a.dataBsDismiss},{default:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"default")])),_:3},8,["to","class","data-bs-toggle","data-bs-target","data-bs-dismiss"])):((0,s.wg)(),(0,s.iD)("a",{key:1,href:a.href,class:(0,i.C_)("btn btn-"+a.style),"data-bs-toggle":a.dataBsToggle,"data-bs-dismiss":a.dataBsDismiss,"data-bs-target":a.dataBsTarget},[(0,s.WI)(t.$slots,"default")],10,o))}var r={props:{style:{type:String,default:"primary"},type:{type:String,default:"link"},href:{type:String,default:"#"},dataBsToggle:{type:String,default:""},dataBsTarget:{type:String,default:""},dataBsDismiss:{type:String,default:""}}},d=a(89);const l=(0,d.Z)(r,[["render",n]]);var u=l},3643:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return E}});a(1703);var s=a(3396),i=a(7139),o=a(4870),n=a(6265),r=a.n(n),d=a(98),l=a(6986),u=a(367),g=a(2750),c=a(6753),p=a(1272),b=a(8740);const f={key:0},m={key:1},y={props:{buttons:{type:Array},openOnNewTab:{type:Boolean,default:!1}},components:{ButtonComponent:p.Z,TextComponent:b.Z}};var h=Object.assign(y,{setup(t){return(e,a)=>""==t.buttons?((0,s.wg)(),(0,s.iD)("div",f,[(0,s.Wm)(b.Z,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,o.SU)(c).generic.nothingFound),1)])),_:1})])):((0,s.wg)(),(0,s.iD)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.buttons,(e=>((0,s.wg)(),(0,s.j4)(p.Z,{key:e,style:(0,i.j5)(e[0]),href:e[2],target:t.openOnNewTab?"_blank":"",class:"buttons"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e[1]),1)])),_:2},1032,["style","href","target"])))),128))]))}});a(9613);const w=h;var _=w,v=a(4600);const Z={class:"row"},k={class:"banner"},T=["src"],B={class:"col"},C=["innerHTML"],j={data(){return{entity:{id:this.$route.params.id},database:{project:{}},isLoaded:!1,loadingHasError:!1}},beforeCreate(){r().get((0,d.Z)("api.database.projects")).then((t=>{if(this.database.project=t.data,this.loadEntityFromDatabase(),!1===this.isLoaded)throw new Error("Error loading API.")})).catch((()=>{this.loadingHasError=!0}))},methods:{loadEntityFromDatabase(){this.database.project.forEach((t=>{t.id===this.entity.id&&(this.entity=t,this.isLoaded=!0)}))}},components:{PageComposition:l.Z,CardComposition:u.Z,BadgeComponent:g.Z,ButtonGroupComposition:_,TitleComponent:v.Z}};var H=Object.assign(j,{setup(t){return(t,e)=>((0,s.wg)(),(0,s.j4)(l.Z,{title:t.entity.title,isDescriptionVisible:!1,isTitleVisible:!0,isLoaded:t.isLoaded,loadingHasError:t.loadingHasError},{default:(0,s.w5)((()=>[(0,s._)("div",Z,[(0,s.Wm)(u.Z,{isHeaderTitleVisible:!1,collum:"col-12 col-md-6 col-lg-6",isImageVisible:!1},{default:(0,s.w5)((()=>[(0,s.Wm)(v.Z,{type:"h2"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,o.SU)(c).pages.photo),1)])),_:1}),(0,s.Wm)(g.Z,{badges:t.entity.badges},null,8,["badges"]),(0,s._)("div",k,[(0,s._)("img",{alt:"Image",src:t.entity.imgUrl},null,8,T)])])),_:1}),(0,s._)("div",B,[(0,s.Wm)(u.Z,{isHeaderTitleVisible:!1,collum:"col-12",isImageVisible:!1},{default:(0,s.w5)((()=>[(0,s.Wm)(v.Z,{type:"h2"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,o.SU)(c).pages.description),1)])),_:1}),(0,s._)("span",{innerHTML:t.entity.description},null,8,C)])),_:1}),(0,s.Wm)(u.Z,{isHeaderTitleVisible:!1,collum:"col-12",isImageVisible:!1},{default:(0,s.w5)((()=>[(0,s.Wm)(v.Z,{type:"h2"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,o.SU)(c).pages.discover),1)])),_:1}),(0,s.Wm)(_,{openOnNewTab:!0,buttons:t.entity.urls},null,8,["buttons"])])),_:1})])])])),_:1},8,["title","isLoaded","loadingHasError"]))}}),W=(a(9134),a(89));const D=(0,W.Z)(H,[["__scopeId","data-v-37b2fea9"]]);var E=D},9613:function(t,e,a){var s=a(2977);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var i=a(7037).Z;i("11bd2e37",s,!0,{sourceMap:!1,shadowMode:!1})},9134:function(t,e,a){var s=a(4319);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var i=a(7037).Z;i("2c35b842",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=643.7542b80c.js.map