(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-add-or-update/forum-add-or-update"],{"25bc":function(n,e,t){"use strict";(function(n){t("d135");r(t("66fd"));var e=r(t("d4d3"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},4151:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,r,u,a,o){try{var i=n[a](o),c=i.value}catch(s){return void t(s)}i.done?e(c):Promise.resolve(c).then(r,u)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var o=n.apply(e,t);function i(n){a(o,r,u,i,c,"next",n)}function c(n){a(o,r,u,i,c,"throw",n)}i(void 0)}))}}var i={data:function(){return{forum:{content:"",id:"",title:"",isdone:"开放",parentid:0},index:0,options:["开放","关闭"],username:"",user:{}}},onLoad:function(e){var t=this;return o(r.default.mark((function u(){var a,o,i;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=n.getStorageSync("nowTable"),r.next=3,t.$api.session(a);case 3:if(o=r.sent,t.user=o.data,"zuke"==a&&(t.username=t.user.yonghuming),"fangdong"==a&&(t.username=t.user.fangdongzhanghao),!e.id){r.next=13;break}return t.id=e.id,r.next=11,t.$api.info("forum",t.id);case 11:i=r.sent,t.forum=i.data;case 13:t.styleChange();case 14:case"end":return r.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var n=this;return o(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.forum.username=n.username,!n.id){e.next=6;break}return e.next=4,n.$api.update("forum",n.forum);case 4:e.next=8;break;case 6:return e.next=8,n.$api.save("forum",n.forum);case 8:n.$utils.msgBack("操作成功");case 9:case"end":return e.stop()}}),e)})))()},setIsDoneTap:function(n){this.index=n.target.value,this.forum.isdone=this.options[this.index]}}};e.default=i}).call(this,t("543d")["default"])},"4ac8":function(n,e,t){"use strict";t.r(e);var r=t("4151"),u=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=u.a},"61f9":function(n,e,t){"use strict";var r=t("d5ae"),u=t.n(r);u.a},"7e64":function(n,e,t){"use strict";var r;t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return r}));var u=function(){var n=this,e=n.$createElement;n._self._c},a=[]},d4d3:function(n,e,t){"use strict";t.r(e);var r=t("7e64"),u=t("4ac8");for(var a in u)"default"!==a&&function(n){t.d(e,n,(function(){return u[n]}))}(a);t("61f9");var o,i=t("f0c5"),c=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports},d5ae:function(n,e,t){}},[["25bc","common/runtime","common/vendor"]]]);