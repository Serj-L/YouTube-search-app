(this["webpackJsonpsibdev-test"]=this["webpackJsonpsibdev-test"]||[]).push([[0],{115:function(e,t,r){e.exports={label:"FavoritesForm_label__2DGU2",btnWrapper:"FavoritesForm_btnWrapper__1Op4z"}},116:function(e,t,r){e.exports={title:"FavoritesScreen_title__2_lDt",favoritesList:"FavoritesScreen_favoritesList__1RtFm",itemTitle:"FavoritesScreen_itemTitle__3l2pI",editLink:"FavoritesScreen_editLink__1Hd4s",deleteLink:"FavoritesScreen_deleteLink__ia70Z"}},128:function(e,t,r){e.exports={logoWrapper:"Header_logoWrapper__20zeq",navlink:"Header_navlink__RNhPn",menuItem:"Header_menuItem__3F_MM"}},316:function(e,t,r){},317:function(e,t,r){"use strict";r.r(t);var n=r(33),a=r.n(n),i=r(34),s=r(66),c=r(31),o=r(0),l=r(320),u=r(114),d=r(73),j=r(1),b=r.n(j),f=r(5),p=r(52),h=r(211),m=r(82),v=r(97),x=r(202),O=(Object(x.a)({apiKey:"AIzaSyByiMgQXzByXmCRjcsTm5RCadKOQ9SiiPA",authDomain:"search-app-9c54b.firebaseapp.com",projectId:"search-app-9c54b",storageBucket:"search-app-9c54b.appspot.com",messagingSenderId:"533183716632",appId:"1:533183716632:web:a7efb5b5da647a9398526d"}),Object(v.c)()),g=Object(m.c)();Object(m.d)(g,m.a);var y=function(){var e=Object(f.a)(b.a.mark((function e(t){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isSignedForm){e.next=6;break}return e.next=3,Object(m.b)(g,t.userEmail,t.password);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,Object(m.e)(g,t.userEmail,t.password);case 8:e.t0=e.sent;case 9:return r=e.t0,n=r.user,e.abrupt("return",{uid:n.uid});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(Object(v.a)(O,"users",t.userId),{favorites:t.favorites});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.b)(Object(v.a)(O,"users",t));case 2:return r=e.sent,e.abrupt("return",r.data());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=Object(p.b)("user/saveFavoritesToDbThunk",function(){var e=Object(f.a)(b.a.mark((function e(t,r){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,w(t);case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.code));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()),I=Object(p.b)("user/getFavoritesFromDbThunk",function(){var e=Object(f.a)(b.a.mark((function e(t,r){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,S(t);case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.code));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()),k=Object(p.c)({name:"favorites",initialState:{favorites:[],updateDb:!1,isLoading:!1,isError:!1},reducers:{setFavorites:function(e,t){var r=t.payload,n={query:r.query,title:r.title,id:r.id,order:r.order,resultsPerPage:r.resultsPerPage};e.favorites.push(n),e.updateDb=!0},deleteFavoriteItem:function(e,t){e.favorites=e.favorites.filter((function(e){return e.id!==t.payload.id})),e.updateDb=!0},editFavoriteItem:function(e,t){var r=t.payload,n={query:r.query,title:r.title,id:r.id,order:r.order,resultsPerPage:r.resultsPerPage};e.favorites=e.favorites.map((function(e){return e.id===n.id?n:e})),e.updateDb=!0},setFavoritesToInitialState:function(e){e.favorites=[]}},extraReducers:function(e){e.addCase(_.pending,(function(e){e.isLoading=!0,e.isError&&(e.isError=!1)})),e.addCase(_.fulfilled,(function(e){h.b.success('\u0420\u0430\u0437\u0434\u0435\u043b "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435" \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d.'),e.isLoading=!1,e.updateDb&&(e.updateDb=!1)})),e.addCase(_.rejected,(function(e,t){h.b.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.payload)),e.isLoading=!1,e.isError=!0,e.updateDb&&(e.updateDb=!1)})),e.addCase(I.pending,(function(e){e.isLoading=!0,e.isError&&(e.isError=!1)})),e.addCase(I.fulfilled,(function(e,t){var r=t.payload;r&&(e.favorites=r.favorites),e.isLoading=!1})),e.addCase(I.rejected,(function(e,t){h.b.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.payload)),e.isLoading=!1,e.isError=!0}))}}),L=k.actions,C=L.setFavorites,F=L.deleteFavoriteItem,N=L.editFavoriteItem,T=L.setFavoritesToInitialState,q=k.reducer,R=Object(p.c)({name:"screenParams",initialState:{isMobile:!1,searchScreenYOffset:0,favoriteScreenYOffset:0},reducers:{setIsMobile:function(e,t){e.isMobile=t.payload},setSearchScreenYOffset:function(e,t){e.searchScreenYOffset=t.payload},setFavoriteScreenYOffset:function(e,t){e.favoriteScreenYOffset=t.payload}}}),E=R.actions,P=E.setIsMobile,z=E.setSearchScreenYOffset,M=E.setFavoriteScreenYOffset,W=R.reducer,B=r(40),Q={userId:localStorage.getItem("authToken")||""},V=Object(p.b)("user/userAuthThunk",function(){var e=Object(f.a)(b.a.mark((function e(t,r){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,y(t);case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.code));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()),D=Object(p.c)({name:"user",initialState:Q,reducers:{setUserId:function(e,t){e.userId=t.payload}},extraReducers:function(e){e.addCase(V.fulfilled,(function(e,t){var r=t.payload;e.userId=r.uid,localStorage.setItem("authToken",r.uid)})),e.addCase(V.rejected,(function(e,t){e.userId="",h.b.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.payload))}))}}),H=D.actions.setUserId,A=D.reducer,Y=r(331),U=r(67),Z=r(324),X=r(329),G=r(178),J=r.n(G),K=J.a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",key:"AIzaSyCdzkEGeI4Ihl2LfibnT8NADU9thYpo9EM",q:"",order:"relevance",maxResults:12,resultsPerPage:12,type:"video"}}),$=function(){var e=Object(f.a)(b.a.mark((function e(t){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("/search",{params:t});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(f.a)(b.a.mark((function e(t){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.get("https://www.googleapis.com/youtube/v3/videos?key=".concat("AIzaSyCdzkEGeI4Ihl2LfibnT8NADU9thYpo9EM","&fields=items(snippet(title,channelTitle,publishedAt),id,statistics(viewCount))&part=snippet,statistics&id=").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=Object(p.b)("youtubeSearch/searchVideos",function(){var e=Object(f.a)(b.a.mark((function e(t,r){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,$(t);case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()),re=Object(p.b)("youtubeSearch/getVideosStats",function(){var e=Object(f.a)(b.a.mark((function e(t,r){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,ee(t);case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()),ne=Object(p.c)({name:"youtubeSearch",initialState:{videos:[],totalCount:0,isLoading:!1,query:"",queryStatus:"",errorMessage:"",videoIdList:"",statsQueryStatus:"",isQueryInFavorites:!1},reducers:{setQuery:function(e,t){e.query=t.payload.query},setIsQueryInFavorites:function(e,t){e.isQueryInFavorites=t.payload.value},logOut:function(e){e.videos=[],e.totalCount=0,e.isLoading=!1,e.query="",e.queryStatus="",e.errorMessage="",e.videoIdList="",e.statsQueryStatus=""}},extraReducers:function(e){e.addCase(te.pending,(function(e){e.isLoading=!0,e.queryStatus="pending",e.errorMessage=""})),e.addCase(te.fulfilled,(function(e,t){var r=t.payload;e.totalCount=r.pageInfo.totalResults,e.videos=r.items.map((function(e){return{videoId:e.id.videoId,title:e.snippet.channelTitle,description:e.snippet.description,channelTitle:e.snippet.channelTitle,channelId:e.snippet.channelId,thumbnail:{width:e.snippet.thumbnails.medium.width,height:e.snippet.thumbnails.medium.height,url:e.snippet.thumbnails.medium.url}}})),e.videoIdList="",e.videos.forEach((function(t,r,n){r<n.length-1?e.videoIdList+=t.videoId+",":e.videoIdList+=t.videoId})),e.isLoading=!1,e.queryStatus="fulfilled",e.errorMessage="",e.statsQueryStatus="getStats"})),e.addCase(te.rejected,(function(e,t){e.isLoading=!1,e.queryStatus="rejected",e.errorMessage="".concat(t.payload)})),e.addCase(re.pending,(function(e){e.statsQueryStatus="pending"})),e.addCase(re.fulfilled,(function(e,t){var r=t.payload;e.videos.map((function(e){var t;return e.viewCount=null===(t=r.items.filter((function(t){return t.id===e.videoId}))[0])||void 0===t?void 0:t.statistics.viewCount,e})),e.statsQueryStatus="fulfilled"})),e.addCase(re.rejected,(function(e,t){e.statsQueryStatus="rejected",console.log("view counts recive error",t.payload)}))}}),ae=ne.actions,ie=ae.setQuery,se=ae.logOut,ce=ae.setIsQueryInFavorites,oe=ne.reducer,le=r(10),ue=function(e){var t=e.width,r=void 0===t?88:t,n=e.height,a=void 0===n?88:n;return Object(le.jsxs)("svg",{width:r,height:a,viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(le.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M59.1488 43.5667L24.683 60.9559V79.399L59.1488 62.0098V43.5667Z",fill:"#1390E5"}),Object(le.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.683 26.1787L59.1487 43.5679V62.0111L24.683 44.6218V26.1787Z",fill:"#1180CB"}),Object(le.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M59.1488 8.79071L24.683 26.1799V44.623L59.1488 27.2338V8.79071Z",fill:"#35A2EC"})]})},de=r(128),je=r.n(de),be=function(){var e,t=Object(i.b)(),r=Object(B.g)().pathname,n=g.currentUser;return Object(le.jsxs)(u.a,{align:"middle",wrap:!1,children:[Object(le.jsx)(d.a,{flex:"none",children:Object(le.jsx)("div",{className:je.a.logoWrapper,children:Object(le.jsx)(ue,{width:44,height:44})})}),Object(le.jsx)(d.a,{flex:"auto",children:Object(le.jsxs)(Y.a,{mode:"horizontal",selectedKeys:[r],style:{borderColor:"transparent"},children:[Object(le.jsx)(Y.a.Item,{children:Object(le.jsx)(s.b,{to:"/",className:je.a.navlink,children:"\u041f\u043e\u0438\u0441\u043a"})},"/"),Object(le.jsx)(Y.a.Item,{children:Object(le.jsx)(s.b,{to:"/favorites",className:je.a.navlink,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})},"/favorites")]})}),Object(le.jsx)(d.a,{flex:"none",children:Object(le.jsx)(U.a,{placement:"bottomRight",color:"#ffffff",trigger:["click","hover"],title:Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(Z.a.Text,{strong:!0,style:{display:"block",marginBottom:5},children:(null===n||void 0===n?void 0:n.email)?"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ".concat(n.email):""}),Object(le.jsx)(s.b,{className:je.a.navlink,style:{display:"block",textAlign:"center"},to:"/login",onClick:function(){Object(m.f)(Object(m.c)()),localStorage.removeItem("authToken"),t(H("")),t(se()),t(T())},children:"\u0412\u044b\u0439\u0442\u0438"})]}),children:Object(le.jsx)(X.a,{shape:"square",style:{fontFamily:"Roboto, sans-serif",fontSize:16,color:"#ffffff",backgroundColor:"#1890ff",cursor:"pointer"},children:(null===n||void 0===n||null===(e=n.email)||void 0===e?void 0:e.charAt(0).toUpperCase())||"\u041f"})})})]})},fe=r(322),pe=r(332),he=r(333),me=r(93),ve=r(215),xe=r(167),Oe=r(65),ge=r.n(Oe),ye={fontFamily:"Roboto, sans-serif",fontSize:20,lineHeight:0,borderRadius:5,padding:"12px 15px"},we={fontFamily:"Roboto, sans-serif",fontSize:20,lineHeight:"100%",width:170,height:50,borderRadius:5},Se=function(e){var t=e.onSubmit,r=e.onSwitchChange,n=e.initialValues,a=e.isSignedForm,i=Object(o.useState)("password"),s=Object(c.a)(i,2),l=s[0],u=s[1],d=Object(o.useRef)(null);return Object(le.jsxs)("div",{className:ge.a.wrapper,children:[Object(le.jsx)(ue,{}),Object(le.jsx)("h3",{className:ge.a.title,children:a?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0438 \u0432\u0445\u043e\u0434":"\u0412\u0445\u043e\u0434"}),Object(le.jsxs)(fe.a,{className:ge.a.form,name:"basic",initialValues:n,layout:"vertical",onFinish:t,children:[Object(le.jsx)("span",{className:ge.a.label,children:"\u041b\u043e\u0433\u0438\u043d (Email)"}),Object(le.jsx)(fe.a.Item,{name:"userEmail",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"}],children:Object(le.jsx)(pe.a,{className:ge.a.input,style:ye})}),Object(le.jsx)("span",{className:ge.a.label,children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(le.jsx)(fe.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(le.jsxs)("div",{className:ge.a.inputWrapper,children:["password"===l?Object(le.jsx)(ve.a,{className:ge.a.icon,onClick:function(){var e;u("text"),null===(e=d.current)||void 0===e||e.focus()}}):Object(le.jsx)(xe.a,{className:ge.a.icon,onClick:function(){var e;u("password"),null===(e=d.current)||void 0===e||e.focus()}}),Object(le.jsx)(pe.a,{className:ge.a.passwInput,style:ye,type:l,ref:d})]})}),Object(le.jsx)("span",{className:ge.a.label,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u0432\u0445\u043e\u0434"}),Object(le.jsx)(fe.a.Item,{name:"isSignedForm",valuePropName:"checked",children:Object(le.jsx)(he.a,{onChange:r})}),Object(le.jsx)(fe.a.Item,{children:Object(le.jsx)("div",{className:ge.a.btnWrapper,children:Object(le.jsx)(me.a,{style:we,type:"primary",htmlType:"submit",children:a?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u0445\u043e\u0434"})})})]})]})},_e=r(334),Ie=r(325),ke=r(323),Le=r(321),Ce=r(335),Fe=r(336),Ne=r(57),Te=r.n(Ne),qe=new Intl.NumberFormat("ru");function Re(e,t){var r=Math.abs(e)%100,n=r%10;return r>10&&r<20?t[2]:n>1&&n<5?t[1]:1===n?t[0]:t[2]}var Ee=function(){var e=Object(i.c)((function(e){return e.youtubeSearch})),t=Object(i.c)((function(e){return e.youtubeSearch.videos})),r=Object(o.useState)("list"),n=Object(c.a)(r,2),a=n[0],s=n[1];return"fulfilled"!==e.queryStatus&&"fulfilled"!==e.statsQueryStatus?null:Object(le.jsxs)("div",{className:Te.a.wrapper,children:[Object(le.jsxs)(u.a,{className:Te.a.searchInfoWrapper,children:[Object(le.jsxs)(d.a,{flex:"auto",children:[Object(le.jsx)(Z.a.Text,{className:Te.a.queryTitle,children:"\u0412\u0438\u0434\u0435\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443"}),Object(le.jsx)(Z.a.Text,{className:Te.a.queryTitle,strong:!0,children:"\xab".concat(e.query,"\xbb")}),Object(le.jsx)(Z.a.Text,{className:Te.a.videosCount,style:{color:"rgba(23, 23, 25, 0.3)"},children:qe.format(e.totalCount)})]}),Object(le.jsx)(d.a,{flex:"60px",children:Object(le.jsxs)(_e.b,{children:[Object(le.jsx)(me.a,{type:"text",style:{padding:5,color:"list"===a?"#000000":"rgba(23, 23, 25, 0.3)"},disabled:"list"===a,onClick:function(){return s("list")},children:Object(le.jsx)(Ce.a,{style:{fontSize:20}})}),Object(le.jsx)(me.a,{type:"text",style:{padding:5,color:"cards"===a?"#000000":"rgba(23, 23, 25, 0.3)"},disabled:"cards"===a,onClick:function(){return s("cards")},children:Object(le.jsx)(Fe.a,{style:{fontSize:20}})})]})})]}),"list"===a?Object(le.jsx)(Ie.b,{itemLayout:"horizontal",dataSource:t,renderItem:function(e){return Object(le.jsx)(Ie.b.Item,{children:Object(le.jsx)(Ie.b.Item.Meta,{avatar:Object(le.jsx)(Z.a.Link,{href:"https://www.youtube.com/watch?v=".concat(e.videoId),target:"_blank",children:Object(le.jsx)(ke.a,{preview:!1,width:157,height:88,src:e.thumbnail.url,alt:"Video preview"})}),title:Object(le.jsx)(Z.a.Paragraph,{ellipsis:{rows:2,expandable:!1},style:{marginBottom:8},children:Object(le.jsxs)(Z.a.Link,{className:Te.a.videoLink,href:"https://www.youtube.com/watch?v=".concat(e.videoId),target:"_blank",children:[e.title," | ",e.description]})}),description:Object(le.jsxs)(Z.a.Text,{className:Te.a.viewsCount,style:{color:"rgba(23, 23, 25, 0.3)"},children:[Object(le.jsx)(Z.a.Link,{className:Te.a.channelLink,href:"https://www.youtube.com/channel/".concat(e.channelId),target:"_blank",style:{color:"rgba(23, 23, 25, 0.3)"},children:e.channelTitle}),Object(le.jsx)("br",{}),e.viewCount?Number(e.viewCount)/1e3>=1?"".concat(qe.format(Math.round(Number(e.viewCount)/1e3))," \u0442\u044b\u0441. \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"):"".concat(e.viewCount," ").concat(Re(Number(e.viewCount),["\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440","\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430","\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"])):"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"]})})},e.videoId)}}):Object(le.jsx)("ul",{className:Te.a.videoList,children:t.map((function(e){return Object(le.jsx)("li",{className:Te.a.videoListItem,children:Object(le.jsx)(Le.a,{bodyStyle:{padding:0},style:{width:245,backgroundColor:"transparent",border:"none"},cover:Object(le.jsx)(Z.a.Link,{href:"https://www.youtube.com/watch?v=".concat(e.videoId),target:"_blank",children:Object(le.jsx)(ke.a,{preview:!1,width:245,height:138,src:e.thumbnail.url,alt:"Video preview"})}),children:Object(le.jsx)(Le.a.Meta,{description:Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(Z.a.Paragraph,{ellipsis:{rows:2,expandable:!1},style:{marginBottom:8},children:Object(le.jsxs)(Z.a.Link,{className:Te.a.videoLink,href:"https://www.youtube.com/watch?v=".concat(e.videoId),target:"_blank",children:[e.title," | ",e.description]})}),Object(le.jsxs)(Z.a.Text,{className:Te.a.viewsCount,style:{color:"rgba(23, 23, 25, 0.3)"},children:[Object(le.jsx)(Z.a.Link,{className:Te.a.channelLink,href:"https://www.youtube.com/channel/".concat(e.channelId),target:"_blank",style:{color:"rgba(23, 23, 25, 0.3)"},children:e.channelTitle}),Object(le.jsx)("br",{}),Number(e.viewCount)/1e3>=1?"".concat(qe.format(Math.round(Number(e.viewCount)/1e3))," \u0442\u044b\u0441. \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"):"".concat(e.viewCount," ").concat(Re(Number(e.viewCount),["\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440","\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430","\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"]))]})]})})})},e.videoId)}))})]})},Pe=r(126),ze=r(326),Me=r(327),We=r(337),Be=r(115),Qe=r.n(Be),Ve={fontFamily:"Roboto, sans-serif",lineHeight:0,fontSize:20,borderRadius:5,padding:"12px 15px"},De={fontFamily:"Roboto, sans-serif",fontSize:20,lineHeight:"100%",width:210,height:50,borderRadius:5},He=function(e){var t=e.onSubmit,r=e.onCancel,n=e.initialValues,a=e.editMode,i=void 0!==a&&a,s=Object(o.useState)(1),l=Object(c.a)(s,2),j=l[0],b=l[1],f=fe.a.useForm(),p=Object(c.a)(f,1)[0],h=Object(o.useMemo)((function(){return i?{cancelBtn:"\u041d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c",okBtn:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}:{cancelBtn:"\u041d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c",okBtn:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}}),[i]);return Object(o.useEffect)((function(){p.resetFields()}),[p,n]),Object(le.jsxs)(fe.a,{form:p,name:"saveToFavorites",id:"saveToFavorites",initialValues:n,layout:"vertical",onFinish:t,children:[Object(le.jsx)("span",{className:Qe.a.label,children:"\u0417\u0430\u043f\u0440\u043e\u0441"}),Object(le.jsx)(fe.a.Item,{name:"query",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"}],children:Object(le.jsx)(pe.a,{style:Ve,type:"text",disabled:!i})}),Object(le.jsxs)("span",{className:Qe.a.label,children:[Object(le.jsx)("span",{style:{color:"red"},children:"* "}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"]}),Object(le.jsx)(fe.a.Item,{name:"title",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}],children:Object(le.jsx)(pe.a,{placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",style:Ve,type:"text"})}),Object(le.jsx)("span",{className:Qe.a.label,children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e"}),Object(le.jsx)(fe.a.Item,{name:"order",children:Object(le.jsxs)(Pe.a,{size:"large",style:{fontFamily:"Roboto, sans-serif",fontSize:20},suffixIcon:Object(le.jsx)(We.a,{}),children:[Object(le.jsx)(Pe.a.Option,{value:"relevance",children:"\u0411\u0435\u0437 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(le.jsx)(Pe.a.Option,{value:"title",children:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"}),Object(le.jsx)(Pe.a.Option,{value:"date",children:"\u041f\u043e \u0434\u0430\u0442\u0435 \u0440\u0435\u043b\u0438\u0437\u0430"}),Object(le.jsx)(Pe.a.Option,{value:"viewCount",children:"\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"}),Object(le.jsx)(Pe.a.Option,{value:"rating",children:"\u041f\u043e \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443"})]})}),Object(le.jsx)("span",{className:Qe.a.label,children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(le.jsxs)(u.a,{align:"middle",children:[Object(le.jsx)(d.a,{flex:"auto",children:Object(le.jsx)(fe.a.Item,{name:"resultsPerPage",children:Object(le.jsx)(ze.a,{style:{marginRight:20},min:1,max:50,value:j,onChange:function(e){return b(e)}})})}),Object(le.jsx)(d.a,{flex:"none",children:Object(le.jsx)(fe.a.Item,{name:"resultsPerPage",children:Object(le.jsx)(Me.a,{style:{fontFamily:"Roboto, sans-serif",lineHeight:0,fontSize:20,borderRadius:5,padding:"5px 0px 5px 20px"},min:1,max:50,size:"large",value:j,onChange:function(e){return b(e)}})})})]}),Object(le.jsx)(fe.a.Item,{children:Object(le.jsxs)("div",{className:Qe.a.btnWrapper,children:[Object(le.jsx)(me.a,{style:De,type:"primary",ghost:!0,onClick:r,children:h.cancelBtn}),Object(le.jsx)(me.a,{style:De,type:"primary",htmlType:"submit",children:h.okBtn})]})})]})},Ae=function(){var e=Object(B.f)(),t=Object(i.b)(),r=Object(i.c)((function(e){return e.user})).userId,n=Object(o.useState)(!1),a=Object(c.a)(n,2),s=a[0],l=a[1];Object(o.useEffect)((function(){r&&e.push("/")}),[e,r]);return Object(le.jsx)(u.a,{justify:"center",align:"middle",style:{height:"100vh"},children:Object(le.jsx)(d.a,{xs:{span:23},sm:{span:22},md:{span:22},lg:{span:20},xxl:{span:16},style:{maxWidth:510},children:Object(le.jsx)(Se,{initialValues:{userEmail:"",password:"",isSignedForm:!1},onSubmit:function(e){t(V(e))},onSwitchChange:function(){l(!s)},isSignedForm:s})})})},Ye=r(113),Ue=r(214),Ze=r(207),Xe=r(117),Ge=r(328),Je=r(338),Ke=r(339),$e=r(71),et=r(330),tt=function(e,t){var r;return function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var s;return r&&clearTimeout(r),r=setTimeout((function(){s=e.apply(void 0,a)}),t),s}},rt=r(78),nt=r.n(rt),at=function(e,t){return!!t.filter((function(t){return t.query===e.toLowerCase().trim()})).length},it=function(e,t,r,n){Ue.a[e]({message:t,description:r,placement:n})},st=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.youtubeSearch})),r=Object(i.c)((function(e){return e.favorites})).favorites,n=Object(i.c)((function(e){return e.screenParams})),a=n.isMobile,l=n.searchScreenYOffset,j=Object(o.useState)(!1),b=Object(c.a)(j,2),f=b[0],p=b[1],h=Object(o.useState)(""),m=Object(c.a)(h,2),v=m[0],x=m[1];Object(o.useEffect)((function(){"fulfilled"===t.queryStatus&&a&&window.scrollTo(0,l)}),[]),Object(o.useEffect)((function(){if(a){var t=tt((function(){e(z(window.pageYOffset))}),250);return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}}),[a,e]),Object(o.useEffect)((function(){var n=at(t.query,r);n!==t.isQueryInFavorites&&e(ce({value:n}))}),[]),Object(o.useEffect)((function(){t.errorMessage&&it("error","\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445",t.errorMessage,"topRight")}),[t.errorMessage]),Object(o.useEffect)((function(){x(t.query)}),[t.query]),Object(o.useEffect)((function(){"getStats"===t.statsQueryStatus&&e(re(t.videoIdList))}),[e,t.statsQueryStatus,t.videoIdList]);return Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(u.a,{justify:"center",align:"fulfilled"===t.queryStatus||t.videos.length?"top":"middle",style:{minHeight:"80vh"},children:Object(le.jsxs)(d.a,{xs:{span:23},sm:{span:22},md:{span:22},lg:{span:20},xxl:{span:16},children:["fulfilled"===t.queryStatus||t.videos.length?Object(le.jsx)("h2",{className:nt.a.searchResultTitle,children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}):Object(le.jsx)("h1",{className:nt.a.searchTitle,children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}),Object(le.jsxs)(fe.a,{layout:"vertical",className:nt.a.form,onFinish:function(){if(v){e(ie({query:v.toLowerCase().trim()})),e(te({q:v.toLowerCase().trim()}));var n=at(v,r);n!==t.isQueryInFavorites&&e(ce({value:n}))}else it("warning","\u041f\u043e\u0438\u0441\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u0435\u043d.","\u0412\u0432\u0435\u0434\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441.","topRight")},children:[Object(le.jsx)(fe.a.Item,{style:{flex:1,maxWidth:"fulfilled"===t.queryStatus||t.videos.length?"unset":535,marginBottom:0},children:Object(le.jsxs)("div",{className:nt.a.inputWrapper,children:[Object(le.jsx)(U.a,{className:nt.a.toolTipWrapper,placement:"bottom",color:"#ffffff",trigger:["click","hover"],title:Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(Z.a.Text,{strong:!0,style:{display:"block",marginBottom:15},children:"\u0417\u0430\u043f\u0440\u043e\u0441 \u0443\u0436\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \xab\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435\xbb"}),Object(le.jsx)(s.b,{style:{marginTop:15,fontWeight:600},to:"/favorites",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \xab\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435\xbb"})]}),zIndex:t.isQueryInFavorites?1:-1,children:t.isQueryInFavorites?Object(le.jsx)(Je.a,{className:nt.a.icon,style:{color:"#1890FF",visibility:t.videos.length?"visible":"hidden"}}):Object(le.jsx)(Ke.a,{className:nt.a.icon,style:{color:"#1890FF",visibility:t.videos.length?"visible":"hidden"},onClick:function(){return p(!0)}})}),Object(le.jsx)(pe.a,{className:nt.a.input,style:{fontFamily:"Roboto, sans-serif",fontSize:20,lineHeight:0,width:"100%",borderRadius:"5px 0px 0px 5px",padding:"12px 35px 12px 15px"},placeholder:"\u0427\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?",defaultValue:t.query,value:v,onChange:function(n){x(n.target.value);var a=at(n.target.value,r);a!==t.isQueryInFavorites&&e(ce({value:a}))}})]})}),Object(le.jsx)(fe.a.Item,{style:{marginBottom:0},children:Object(le.jsxs)(me.a,{className:nt.a.searchBtn,type:"primary",htmlType:"submit",style:{fontFamily:"Roboto, sans-serif",fontSize:20,lineHeight:"100%",height:50,borderRadius:"0px 5px 5px 0px"},children:[Object(le.jsx)(Ze.a,{spinning:t.isLoading,indicator:Object(le.jsx)($e.a,{style:{position:"absolute",fontSize:24,color:"#ffffff",top:"25%",left:"7%"}})}),"\u041d\u0430\u0439\u0442\u0438"]})})]}),"fulfilled"!==t.queryStatus&&"rejected"!==t.queryStatus||t.videos.length?Object(le.jsx)(Ee,{}):Object(le.jsx)(u.a,{justify:"center",style:{marginTop:30},children:Object(le.jsx)(d.a,{flex:"auto",children:Object(le.jsx)(Xe.a,{description:"fulfilled"===t.queryStatus?"\u041f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u0432\u0438\u0434\u0435\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b.":"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."})})})]})}),Object(le.jsxs)(Ge.a,{title:null,visible:f,closable:!1,footer:null,onCancel:function(){return p(!1)},children:[Object(le.jsx)("h3",{style:{fontFamily:"Roboto, sans-serif",textAlign:"center",fontSize:18,margin:0,padding:"15px 0 35px"},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"}),Object(le.jsx)(He,{initialValues:{id:"",title:"",query:v.toLowerCase().trim(),order:"relevance",resultsPerPage:1},onSubmit:function(t){e(C(Object(Ye.a)(Object(Ye.a)({},t),{},{id:Object(et.a)()}))),p(!1),e(ce({value:!0}))},onCancel:function(){return p(!1)}})]})]})},ct=r(127),ot=r(116),lt=r.n(ot),ut=Ge.a.confirm,dt=function(){var e=Object(i.b)(),t=Object(B.f)(),r=Object(i.c)((function(e){return e.youtubeSearch})).isQueryInFavorites,n=Object(i.c)((function(e){return e.favorites})),a=n.favorites,s=n.isLoading,l=n.isError,j=Object(i.c)((function(e){return e.screenParams})),b=j.isMobile,f=j.favoriteScreenYOffset,p=Object(o.useState)(!1),h=Object(c.a)(p,2),m=h[0],v=h[1],x=Object(o.useState)({id:"",title:"",query:"",order:"relevance",resultsPerPage:1}),O=Object(c.a)(x,2),g=O[0],y=O[1];Object(o.useEffect)((function(){b&&window.scrollTo(0,f)}),[]),Object(o.useEffect)((function(){if(b){var t=tt((function(){e(M(window.pageYOffset))}),250);return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}}),[b,e]);var w=function(n){var i=a.filter((function(e){return e.id===n}))[0];e(ie({query:i.query})),e(te({q:i.query,order:i.order?i.order:"relevance",resultsPerPage:i.resultsPerPage,maxResults:i.resultsPerPage})),t.push("/"),r||e(ce({value:!0}))};return s?Object(le.jsx)(u.a,{justify:"center",style:{paddingTop:120},children:Object(le.jsx)(Ze.a,{indicator:Object(le.jsx)($e.a,{style:{fontSize:48},spin:!0})})}):Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(u.a,{justify:"center",children:Object(le.jsxs)(d.a,{xs:{span:23},sm:{span:22},md:{span:22},lg:{span:20},xxl:{span:16},children:[Object(le.jsx)("h2",{className:lt.a.title,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),a.length?Object(le.jsx)(Ie.b,{className:lt.a.favoritesList,dataSource:a,renderItem:function(t){return Object(le.jsx)(Ie.b.Item,{style:{flexWrap:"nowrap",fontSize:16},actions:[Object(le.jsx)("a",{className:lt.a.editLink,onClick:function(){y(a.filter((function(e){return e.id===t.id}))[0]),v(!0)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"},"list-loadmore-edit"),Object(le.jsx)("a",{className:lt.a.deleteLink,onClick:function(){return r=t.query,n=t.id,void ut({title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \xab".concat(r,"\xbb \u0438\u0437 \xab\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e\xbb?"),icon:Object(le.jsx)(ct.a,{}),okText:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",onOk:function(){e(F({id:n}))}});var r,n},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"},"list-loadmore-more")],children:Object(le.jsx)(Z.a.Paragraph,{className:lt.a.itemTitle,style:{margin:0},ellipsis:{rows:1,expandable:!1},onClick:function(){return e=t,void ut({title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 ?",content:Object(le.jsxs)(le.Fragment,{children:[Object(le.jsxs)(Z.a.Text,{style:{display:"block",marginBottom:5},children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: \xab",e.title,"\xbb"]}),Object(le.jsxs)(Z.a.Text,{style:{display:"block",marginBottom:5},children:["\u0417\u0430\u043f\u0440\u043e\u0441: \xab",e.query,"\xbb"]}),Object(le.jsxs)(Z.a.Text,{style:{display:"block",marginBottom:5},children:["\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430: \xab",{relevance:"\u0411\u0435\u0437 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",title:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e",date:"\u041f\u043e \u0434\u0430\u0442\u0435 \u0440\u0435\u043b\u0438\u0437\u0430",viewCount:"\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432",rating:"\u041f\u043e \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443"}[e.order],"\xbb"]}),Object(le.jsxs)(Z.a.Text,{style:{display:"block"},children:["Max \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0438\u0434\u0435\u043e: \xab",e.resultsPerPage,"\xbb"]})]}),okText:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",icon:Object(le.jsx)(ct.a,{}),onOk:function(){w(e.id)}});var e},children:t.query})},t.id)}}):Object(le.jsx)(u.a,{justify:"center",children:Object(le.jsx)(d.a,{flex:"auto",children:Object(le.jsx)(Xe.a,{description:l?"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445.":"\u0423 \u0412\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."})})})]})}),Object(le.jsxs)(Ge.a,{title:null,visible:m,closable:!1,footer:null,onCancel:function(){return v(!1)},children:[Object(le.jsx)("h3",{style:{fontFamily:"Roboto, sans-serif",textAlign:"center",fontSize:18,margin:0,padding:"15px 0 35px"},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"}),Object(le.jsx)(He,{initialValues:{id:g.id,title:g.title,query:g.query,order:g.order,resultsPerPage:g.resultsPerPage},editMode:!0,onSubmit:function(t){var r,n,i,s,c=t.query.toLowerCase().trim();if(function(e,t,r){return!!r.filter((function(r){return r.query===e&&r.id!==t})).length}(c,g.id,a))return r="warning",n="\u0417\u0430\u043f\u0440\u043e\u0441 \xab".concat(c,"\xbb \u0443\u0436\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d \u0432 \xab\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c\xbb"),i="\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0439\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0447\u0442\u043e \u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",s="topRight",void Ue.a[r]({message:n,description:i,placement:s});e(N(Object(Ye.a)(Object(Ye.a)({},t),{},{query:c,id:g.id}))),v(!1)},onCancel:function(){return v(!1)}})]})]})},jt=function(){return Object(le.jsx)(u.a,{justify:"center",align:"middle",style:{minHeight:"80vh"},children:Object(le.jsx)(d.a,{flex:"auto",children:Object(le.jsx)(Xe.a,{description:"\u0423\u043f\u0441! \u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u0430\u044f \u0412\u0430\u043c\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430."})})})},bt=function(){return function(){var e=Object(B.g)().pathname,t=Object(B.f)();Object(i.c)((function(e){return e.user})).userId||"/login"===e||t.push("/login")}(),Object(le.jsxs)(B.c,{children:[Object(le.jsx)(B.a,{exact:!0,path:"/",component:st}),Object(le.jsx)(B.a,{exact:!0,path:"/login",component:Ae}),Object(le.jsx)(B.a,{exact:!0,path:"/favorites",component:dt}),Object(le.jsx)(B.a,{path:"*",component:jt})]})},ft=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.user})).userId,r=Object(i.c)((function(e){return e.favorites})),n=r.favorites,a=r.updateDb,s=Object(i.c)((function(e){return e.screenParams})).isMobile,j=Object(o.useState)(window.innerWidth),b=Object(c.a)(j,2),f=b[0],p=b[1];return Object(o.useEffect)((function(){var e=function(){p(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[e]),Object(o.useEffect)((function(){s&&f<992||!s&&f>=992||e(P(f<992))}),[s,f,e]),Object(o.useEffect)((function(){t&&e(I(t))}),[t,e]),Object(o.useEffect)((function(){a&&e(_({favorites:n,userId:t}))}),[a,n,t,e]),Object(le.jsxs)(l.a,{style:{minHeight:"100vh"},children:[t&&Object(le.jsx)(l.a.Header,{style:{width:"100%",background:"#ffffff",padding:0,zIndex:2,position:s?"fixed":"relative"},children:Object(le.jsx)(u.a,{justify:"center",children:Object(le.jsx)(d.a,{xs:{span:23},sm:{span:22},md:{span:22},lg:{span:20},xxl:{span:16},children:Object(le.jsx)(be,{})})})}),Object(le.jsx)(l.a.Content,{style:{marginTop:s?64:0},children:Object(le.jsx)(bt,{})})]})},pt=Object(p.a)({reducer:{youtubeSearch:oe,user:A,favorites:q,screenParams:W}});r(316);a.a.render(Object(le.jsx)(i.a,{store:pt,children:Object(le.jsx)(s.a,{children:Object(le.jsx)(ft,{})})}),document.getElementById("root"))},57:function(e,t,r){e.exports={searchInfoWrapper:"SearchResults_searchInfoWrapper__1uHxD",videoList:"SearchResults_videoList__3D5R5",videoListItem:"SearchResults_videoListItem__1-MP1",queryTitle:"SearchResults_queryTitle__1QgO_",videosCount:"SearchResults_videosCount__2150p",viewsCount:"SearchResults_viewsCount__1B0an",videoLink:"SearchResults_videoLink__3bR01",channelLink:"SearchResults_channelLink__3r7zM"}},65:function(e,t,r){e.exports={wrapper:"LoginForm_wrapper__3Nwc8",title:"LoginForm_title__3ZQ_I",form:"LoginForm_form__m7jhh",label:"LoginForm_label__3w4Np",input:"LoginForm_input__h9oQA",passwInput:"LoginForm_passwInput__1cBSq",inputWrapper:"LoginForm_inputWrapper__2ahvN",icon:"LoginForm_icon__22dgL",btnWrapper:"LoginForm_btnWrapper__E3vYh"}},78:function(e,t,r){e.exports={searchTitle:"SearchScreen_searchTitle__kiJIs",searchResultTitle:"SearchScreen_searchResultTitle__3XPvV",form:"SearchScreen_form__1wSrV",input:"SearchScreen_input__1oZ0B",inputWrapper:"SearchScreen_inputWrapper__1EReX",icon:"SearchScreen_icon__2Qdgz",toolTipWrapper:"SearchScreen_toolTipWrapper__yI53N",loaderIndicator:"SearchScreen_loaderIndicator__2CX4L",searchBtn:"SearchScreen_searchBtn__2TLwU"}}},[[317,1,2]]]);
//# sourceMappingURL=main.92694345.chunk.js.map