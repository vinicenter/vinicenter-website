(self["webpackChunkvinicenter_website"]=self["webpackChunkvinicenter_website"]||[]).push([[781],{5835:function(t,e,a){"use strict";a.r(e);var s=a(8081),o=a.n(s),r=a(3645),i=a.n(r),n=i()(o());n.push([t.id,".icon[data-v-88158750]{color:var(--text-color)}.icon[data-v-88158750]:hover{color:var(--hover-color);transition:color .15s ease,color .15s ease}",""]),e["default"]=n},1272:function(t,e,a){"use strict";a.d(e,{Z:function(){return c}});var s=a(3396),o=a(7139);const r=["href","data-bs-toggle","data-bs-dismiss","data-bs-target"];function i(t,e,a,i,n,d){const l=(0,s.up)("RouterLink");return"router"==a.type?((0,s.wg)(),(0,s.j4)(l,{key:0,to:a.href,class:(0,o.C_)("btn btn-"+a.style),"data-bs-toggle":a.dataBsToggle,"data-bs-target":a.dataBsTarget,"data-bs-dismiss":a.dataBsDismiss},{default:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"default")])),_:3},8,["to","class","data-bs-toggle","data-bs-target","data-bs-dismiss"])):((0,s.wg)(),(0,s.iD)("a",{key:1,href:a.href,class:(0,o.C_)("btn btn-"+a.style),"data-bs-toggle":a.dataBsToggle,"data-bs-dismiss":a.dataBsDismiss,"data-bs-target":a.dataBsTarget},[(0,s.WI)(t.$slots,"default")],10,r))}var n={props:{style:{type:String,default:"primary"},type:{type:String,default:"link"},href:{type:String,default:"#"},dataBsToggle:{type:String,default:""},dataBsTarget:{type:String,default:""},dataBsDismiss:{type:String,default:""}}},d=a(89);const l=(0,d.Z)(n,[["render",i]]);var c=l},8392:function(t,e,a){"use strict";a.d(e,{Z:function(){return l}});var s=a(3396),o=a(7139);function r(t,e,a,r,i,n){return(0,s.wg)(),(0,s.iD)("i",{class:(0,o.C_)(a.isHover?"icon "+a.icon:a.icon),style:(0,o.j5)("font-size: "+a.size+"px")},null,6)}var i={props:{isHover:{type:Boolean,default:!0},icon:{type:String,require:!0},size:{type:Number,require:!1,default:25}}},n=(a(4978),a(89));const d=(0,n.Z)(i,[["render",r],["__scopeId","data-v-88158750"]]);var l=d},3668:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return v}});var s=a(3396),o=a(4870),r=a(7139),i=a(6265),n=a.n(i),d=a(98),l=a(6753),c=a(6986),g=a(367),u=a(8392),p=a(1272);const f={key:0,class:"row"},b={data(){return{database:{blog:{},contact:{}},isLoaded:!1,loadingHasError:!1,loadingBlogHasError:!1}},beforeCreate(){n().get((0,d.Z)("api.apiBlog")).then((t=>{this.database.blog=t.data})).catch((()=>{this.loadingBlogHasError=!0})),n().get((0,d.Z)("api.database.contact")).then((t=>{this.database.contact=t.data,this.isLoaded=!0})).catch((()=>{this.loadingHasError=!0}))},methods:{getBadgesFromBlogCategories(t){const e=[];return t.forEach((t=>{const a={0:"primary"};a[1]=t,e.push(a)})),e},getPubDateFormated(t){return t.substring(0,10)},getMediumLinkFromContact(t){let e=null;return t.social.networks.forEach((t=>{"medium"===t.name&&(e=t.url)})),e}},components:{PageComposition:c.Z,CardComposition:g.Z,IconComponent:u.Z,ButtonComponent:p.Z}};var m=Object.assign(b,{setup(t){return(t,e)=>((0,s.wg)(),(0,s.j4)(c.Z,{title:(0,o.SU)(l).views.blog.title,description:(0,o.SU)(l).views.blog.description,isLoaded:t.isLoaded,loadingHasError:t.loadingHasError},{default:(0,s.w5)((()=>[(0,s.Wm)(p.Z,{style:"secondary",target:"_blank",class:"mb-3",href:t.getMediumLinkFromContact(t.database.contact)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)((0,o.SU)(l).post.viewAllPostsOnMedium)+" ",1),(0,s.Wm)(u.Z,{size:12,isHover:!1,icon:"fa-solid fa-up-right-from-square"})])),_:1},8,["href"]),t.loadingBlogHasError?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.database.blog.items,(e=>((0,s.wg)(),(0,s.j4)(g.Z,{key:e,collum:"col-12",title:e.title,badges:t.getBadgesFromBlogCategories(e.categories),description:e.author+" "+(0,o.SU)(l).post.postedOn+" "+t.getPubDateFormated(e.pubDate)},{default:(0,s.w5)((()=>[(0,s.Wm)(p.Z,{style:"primary",type:"router",href:t.$route.path+"/"+e.link.split(".com/")[1].split("?")[0]},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)((0,o.SU)(l).generic.buttons.details),1)])),_:2},1032,["href"])])),_:2},1032,["title","badges","description"])))),128))]))])),_:1},8,["title","description","isLoaded","loadingHasError"]))}});const h=m;var v=h},4978:function(t,e,a){var s=a(5835);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var o=a(7037).Z;o("9d21e676",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=781.14e21098.js.map