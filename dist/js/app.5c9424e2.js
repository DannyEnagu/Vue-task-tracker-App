(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Vue-task-tracker-App/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},2511:function(e,t,n){},3118:function(e,t,n){"use strict";n("4c27")},4155:function(e,t,n){"use strict";n("2511")},"4c27":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("Header",{attrs:{title:"Task Tracker",showAddTask:e.showAddTask},on:{"toggle-add-task":e.toggleAddTask}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showAddTask,expression:"showAddTask"}]},[n("AddTask",{on:{"add-task":e.addTask}})],1),n("Tasks",{attrs:{tasks:e.tasks},on:{"delete-task":e.deleteTask,"toggle-reminder":e.toggleReminder}}),n("Footer")],1)},s=[],o=n("5530"),i=n("2909"),c=n("1da1"),u=(n("96cf"),n("d3b7"),n("e9c4"),n("99af"),n("4de4"),n("d81d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v(e._s(e.title))]),n("Button",{attrs:{text:e.showAddTask?"Close":"Add Task",color:e.showAddTask?"red":"green"},on:{"btn-click":function(t){return e.$emit("toggle-add-task")}}})],1)}),d=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn",style:{background:e.color},on:{click:function(t){return e.onClick()}}},[e._v(e._s(e.text))])},f=[],m={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}},p=m,h=n("2877"),k=Object(h["a"])(p,l,f,!1,null,null,null),v=k.exports,b={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:v}},g=b,x=(n("c2a8"),Object(h["a"])(g,u,d,!1,null,"2d3fa3dc",null)),y=x.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("Copyright © 2021 ")]),n("a",{attrs:{href:"/about"}},[e._v("About")])])}],_={},j=_,O=(n("8a65"),Object(h["a"])(j,w,T,!1,null,"2dcb96e6",null)),A=O.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.tasks,(function(t){return n("ul",{key:t.id},[n("Task",{attrs:{task:t},on:{"toggle-reminder":function(n){return e.$emit("toggle-reminder",t.id)},"delete-task":function(n){return e.$emit("delete-task",t.id)}}})],1)})),0)},R=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:[e.task.reminder?"reminder":"","task"],on:{dblclick:function(t){return e.$emit("toggle-reminder",e.task.id)}}},[n("h3",[e._v(e._s(e.task.text)+" "),n("i",{staticClass:"fas fa-times",on:{click:function(t){return e.$emit("delete-task",e.task.id)}}})]),n("p",[e._v(" "+e._s(e.task.day)+" ")])])},C=[],P={name:"Task",props:{task:Object}},E=P,N=(n("3118"),Object(h["a"])(E,S,C,!1,null,"0cc03cb1",null)),F=N.exports,B={name:"Tasks",props:{tasks:Array},components:{Task:F},emit:["delete-task","toggle-reminder"]},D=B,J=(n("4155"),Object(h["a"])(D,$,R,!1,null,null,null)),M=J.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"add-form",on:{submit:e.onSubmit}},[n("div",{staticClass:"form-control"},[n("label",{attrs:{htmlFor:"add-task"}},[e._v("Task")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",name:"add-task",id:"task-input",placeholder:"Add Task"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})]),n("div",{staticClass:"form-control"},[n("label",{attrs:{htmlFor:"add-dt"}},[e._v("Day & Time")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],attrs:{type:"text",name:"add-dt",id:"dt-input",placeholder:"Add Day & Time"},domProps:{value:e.day},on:{input:function(t){t.target.composing||(e.day=t.target.value)}}})]),n("div",{staticClass:"form-control form-control-check"},[n("label",{attrs:{htmlFor:"add-task"}},[e._v("Set Reminder")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.reminder,expression:"reminder"}],attrs:{type:"checkbox",name:"add-task",id:"task-input"},domProps:{checked:Array.isArray(e.reminder)?e._i(e.reminder,null)>-1:e.reminder},on:{change:function(t){var n=e.reminder,r=t.target,a=!!r.checked;if(Array.isArray(n)){var s=null,o=e._i(n,s);r.checked?o<0&&(e.reminder=n.concat([s])):o>-1&&(e.reminder=n.slice(0,o).concat(n.slice(o+1)))}else e.reminder=a}}})]),n("input",{staticClass:"btn btn-block",attrs:{type:"submit",value:"Save Task"}})])},L=[],U={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}},V=U,q=(n("fdeb"),Object(h["a"])(V,H,L,!1,null,"04d517c3",null)),z=q.exports,G={name:"App",components:{Header:y,Footer:A,Tasks:M,AddTask:z},data:function(){return{tasks:[],showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask},addTask:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:5001/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,t.tasks=[].concat(Object(i["a"])(t.tasks),[a]);case 7:case"end":return n.stop()}}),n)})))()},deleteTask:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!confirm("Are you sure?")){n.next=5;break}return n.next=3,fetch("http://localhost:5001/tasks/".concat(e),{method:"DELETE"});case 3:r=n.sent,200===r.status?t.tasks=t.tasks.filter((function(t){return t.id!==e})):alert("Error deleting task");case 5:case"end":return n.stop()}}),n)})))()},toggleReminder:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchTask(e);case 2:return r=n.sent,a=Object(o["a"])(Object(o["a"])({},r),{},{reminder:!r.reminder}),n.next=6,fetch("http://localhost:5001/tasks/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 6:return s=n.sent,n.next=9,s.json();case 9:i=n.sent,t.tasks=t.tasks.map((function(t){return t.id===e?Object(o["a"])(Object(o["a"])({},t),{},{reminder:i.reminder}):t}));case 11:case"end":return n.stop()}}),n)})))()},fetchTasks:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},fetchTask:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5001/tasks/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTasks();case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},I=G,K=(n("034f"),Object(h["a"])(I,a,s,!1,null,null,null)),Q=K.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Q)}}).$mount("#app")},"679d":function(e,t,n){},"85ec":function(e,t,n){},"8a65":function(e,t,n){"use strict";n("679d")},b8f6:function(e,t,n){},bdde:function(e,t,n){},c2a8:function(e,t,n){"use strict";n("bdde")},fdeb:function(e,t,n){"use strict";n("b8f6")}});
//# sourceMappingURL=app.5c9424e2.js.map