webpackJsonp([6],{HFmE:function(e,t){},MPLU:function(e,t,a){"use strict";var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"singleTable",staticStyle:{width:"100%"},attrs:{border:e.isBorder,data:e.tableContent,align:"center","header-align":"center","highlight-current-row":""},on:{"current-change":e.handleCurrentChange,"selection-change":e.handleSelectionChange}},[e.isSelection?[a("el-table-column",{attrs:{type:"selection",width:"55"}})]:e._e(),e._v(" "),e._l(e.tableHeader,function(t){return[t.columnInfoShow?e._t(t.columnInfoShow):e._e(),e._v(" "),t.type?a("el-table-column",{key:t.index,attrs:{type:t.type,property:t.type,label:t.label,width:t.width,formatter:t.formatter,"show-overflow-tooltip":"",align:"center"}}):a("el-table-column",{attrs:{fixed:"right",label:t.label,width:t.width||120,align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return e._l(t.detail,function(t){return t.value&&""==n.row.value?a("el-button",{key:t.index,attrs:{type:"text",disabled:""},on:{click:function(a){return e.$emit(t.event,n.row)}}},[e._v(e._s(t.operation))]):a("el-button",{key:t.index,attrs:{type:"text"},on:{click:function(a){return e.$emit(t.event,n.row)}}},[e._v(e._s(t.operation))])})}}],null,!0)})]})],2)],1)},staticRenderFns:[]};var l=a("VU/8")({data:function(){return{loading:!0}},created:function(){},mounted:function(){this.loading=!1!==this.loadingFlag},props:["tableHeader","tableContent","isSelection","loadingFlag","isBorder"],methods:{handleCurrentChange:function(e){this.currentRow=e},handleSelectionChange:function(e){this.$emit("selectionChange",e)},handleClick:function(e){}},watch:{tableContent:function(e,t){this.loading=!1}}},n,!1,function(e){a("HFmE")},null,null);t.a=l.exports},WpuP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("QiB2");var n={data:function(){return{border:!0,loading:!1,taskName:"",timer:null,TableHeader:[{label:"序号",type:"index"},{label:"任务名称",type:"name"},{label:"状态",type:"state"},{label:"开始时间",type:"type"},{label:"结束时间",type:"jsstandard"},{label:"任务列表",type:"klstandard"},{label:"总预算",type:"klstandard"},{label:"人群及预算占比",type:"klstandard"},{label:"操作",detail:[{operation:"详情",event:"lookDetailFn"}]}],TableData:[{name:"发多少",state:"正常",type:"CPS",jsstandard:"12",klstandard:"1"}]}},components:{TableList:a("MPLU").a},watch:{taskName:function(e){clearTimeout(this.timer),this.timer=null,this.timer=setTimeout(function(){console.log(e)},500)}},methods:{addNewTask:function(){this.$router.push("/NewTask")},lookDetailFn:function(){}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("header",[e._v("任务列表")]),e._v(" "),a("div",{staticClass:"search-box"},[a("div",{staticClass:"search-boxItem"},[a("el-input",{attrs:{placeholder:"请输入任务名称","prefix-icon":"el-icon-search"},model:{value:e.taskName,callback:function(t){e.taskName=t},expression:"taskName"}})],1),e._v(" "),a("div",{staticClass:"search-boxItem"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.addNewTask}},[e._v("新增任务")])],1)]),e._v(" "),a("div",{staticClass:"table"},[a("table-list",{attrs:{tableHeader:e.TableHeader,tableContent:e.TableData,loadingFlag:e.loading,isBorder:e.border},on:{lookDetailFn:function(t){return e.lookDetailFn(t)}}})],1)])},staticRenderFns:[]};var i=a("VU/8")(n,l,!1,function(e){a("iKKv")},"data-v-5ecd6a50",null);t.default=i.exports},iKKv:function(e,t){}});
//# sourceMappingURL=6.b19c99aa7b9d7613fd65.js.map