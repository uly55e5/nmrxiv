import{o as c,c as w,a as o,_ as b,B as k,L as j,D as M,ak as I,al as B,am as V,an as C,k as L,l,n as d,m as e,t as n,p as u,ao as _,w as a,ai as z,u as g}from"./app.e0b65b09.js";import{r as D,a as N,b as P}from"./MailIcon.4a8590e2.js";function U(r,s){return c(),w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})])}const E={components:{Head:k,Link:j,LockClosedIcon:D,LockOpenIcon:N,MailIcon:P,PencilIcon:M,Menu:I,MenuButton:B,MenuItem:V,MenuItems:C,DotsVerticalIcon:U},setup(){},props:["project","mode"],data(){return{}},methods:{toggleUpVote(){const r="/projects/"+this.project.id+"/toggleUpVote";axios.get(r).catch(s=>{if(s.response.status!==200||s.response.status!==201)throw new Error(`API call failed with status code: ${s.response.status} after multiple attempts`)}).then(function(s){console.log(s),L.Inertia.reload({only:["projects"]})})}}},O={key:0,class:"hover:shadow-lg"},T={class:"flex flex-col rounded-lg shadow-lg"},A={class:"rounded-t-lg bg-gradient-to-tl from-sky-400 to-cyan-300 w-full h-36 bg-gray-200 overflow-hidden group-hover:opacity-75 lg:h-36 xl:h-36"},H=["src"],S={class:"float-right place-self-end"},q={class:"p-2 flex items-center"},F={class:"flex-shrink-0"},G={key:0,class:"relative z-0 inline-flex shadow-sm rounded-md"},J=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clip-rule":"evenodd"})],-1),K=[J],Q={class:"-ml-px relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-black text-dark hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"},R={style:{"min-height":"150px","max-height":"168px"},class:"flex-1 p-3"},W={class:"text-lg font-semibold text-gray-900 line-clamp-2"},X={class:"mt-2 text-sm text-gray-900 line-clamp-3"},Y={key:0,class:"p-3 rounded-b-lg bg-white border-t flex"},Z={class:"flex-0.5 self-center align-middle"},$=["src"],ee={class:"flex-auto pl-4"},te={class:"text-xs font-xs text-gray-900"},se={class:"flex-1 space-x-1 text-xs font-xs text-gray-500"},oe={datetime:"2020-03-16"},ne={class:"flex-0.5 self-center"},ae=e("span",{class:"sr-only"},"Open options",-1),le={class:"py-1"},ce=e("small",{class:"text-gray-500"},"License",-1),re=g(),ie=e("br",null,null,-1);function de(r,s,t,ue,_e,m){const h=l("Link"),p=l("DotsVerticalIcon"),x=l("MenuButton"),f=l("MenuItem"),v=l("MenuItems"),y=l("Menu");return c(),d("div",null,[t.project?(c(),d("div",O,[e("div",T,[e("div",A,[e("img",{src:t.project.photo_url,alt:"",class:"w-full h-full object-center object-cover"},null,8,H),e("div",S,[e("div",q,[e("div",F,[t.project.stats?(c(),d("span",G,[e("button",{type:"button",onClick:s[0]||(s[0]=i=>m.toggleUpVote()),class:"relative inline-flex items-center px-1 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50"},K),e("a",Q,n(t.project.stats.likes),1)])):u("",!0)])])])]),e("div",{class:_([t.mode!="mini"?"":"rounded-b-lg","flex-1 bg-white flex flex-col justify-between"])},[e("div",R,[o(h,{href:"/projects/"+t.project.slug,class:"block cursor-pointer"},{default:a(()=>[e("p",W,n(t.project.name),1),e("p",X,n(t.project.description),1)]),_:1},8,["href"])])],2),t.mode!="mini"?(c(),d("div",Y,[e("div",Z,[e("img",{class:"h-7 w-7 rounded-full",src:t.project.owner.profile_photo_url},null,8,$)]),e("div",ee,[e("p",te,[e("a",null,n(t.project.owner.first_name)+" "+n(t.project.owner.last_name),1)]),e("div",se,[e("time",oe,n(r.formatDate(t.project.created_at)),1)])]),e("div",ne,[o(y,{as:"div",class:"relative text-left"},{default:a(()=>[e("div",null,[o(x,{class:"bg-white rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"},{default:a(()=>[ae,o(p,{class:"h-5 w-5","aria-hidden":"true"})]),_:1})]),o(z,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[o(v,{class:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:a(()=>[e("div",le,[o(f,{class:"border-b"},{default:a(({active:i})=>[e("a",{class:_([i?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Download",2)]),_:1}),o(f,null,{default:a(({active:i})=>[e("a",{class:_([i?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},[ce,re,ie,g(" "+n(t.project.license.title),1)],2)]),_:1})])]),_:1})]),_:1})]),_:1})])])):u("",!0)])])):u("",!0)])}var me=b(E,[["render",de]]);export{me as P};