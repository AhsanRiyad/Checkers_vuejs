(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7729d84d"],{1681:function(t,e,i){},"32f0":function(t,e,i){"use strict";var a=i("5c17"),s=i.n(a);s.a},"4bd4":function(t,e,i){"use strict";i("a4d3"),i("4de4"),i("7db0"),i("4160"),i("caad"),i("e439"),i("dbb4"),i("b64b"),i("07ac"),i("2532"),i("159b");var a=i("2fa7"),s=i("58df"),r=i("7e2b"),n=i("3206");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=Object(s["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"5c17":function(t,e,i){},"8ce9":function(t,e,i){},a844:function(t,e,i){"use strict";i("a4d3"),i("4de4"),i("4160"),i("a9e3"),i("e439"),i("dbb4"),i("b64b"),i("acd8"),i("e25e"),i("159b");var a=i("2fa7"),s=(i("1681"),i("8654")),r=i("58df");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var c=Object(r["a"])(s["a"]);e["a"]=c.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return o({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},s["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},ce7e:function(t,e,i){"use strict";i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b");var a=i("2fa7"),s=(i("8ce9"),i("7560"));function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:n({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:n({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},db4d:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rd-main-card"},[i("div",{staticClass:"default-resume-main-card applicant_resume"},[i("div",{staticClass:"top-section d-flex justify-space-between align-center"},[i("div",{staticClass:"action_btn"},[i("v-btn",{staticClass:"ml-1 mr-1",attrs:{small:"",color:t.getResume.short_listed?"error":"success"},on:{click:function(e){return e.stopPropagation(),t.applicantShortListed(e)}}},[t._v(t._s(t.getResume.short_listed?"Not Shortlisted":"Shortlisted")+" ")]),i("v-btn",{staticClass:"ml-1 mr-1",attrs:{small:"",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v("Interview Call ")]),i("v-btn",{staticClass:"ml-1 mr-1",attrs:{small:"",color:"success"},on:{click:function(e){return e.stopPropagation(),t.downloadResume(e)}}},[t._v("Download Resume ")])],1),i("div",{staticClass:"close_btn"},[i("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.$emit("closeD")}}},[i("v-icon",{staticClass:"grey--text text--darken-4"},[t._v("mdi-close")])],1)],1)]),i("div",{staticClass:"defaultResume-title"},[i("div",{staticClass:"dr-main-text-div"},[i("p",{staticClass:"defaultResume-title-text"},[t._v(" "+t._s(t.getResume.biodata.full_name)+" ")]),i("p",[t._v("Mobile: "+t._s(t.getResume.biodata.mobile_number))]),i("p",[t._v("Email: "+t._s(t.getResume.biodata.contact_email))])]),i("div",{staticClass:"dr-title-photo"},[i("v-avatar",{attrs:{size:"130"}},[i("img",{attrs:{src:this.$store.getters.imageUrl+t.getResume.biodata.photo,alt:"John"}})])],1)]),i("div",{staticClass:"dr-career-objective"},[i("p",{staticClass:"dr-title-all"},[t._v("Career Objective:")]),i("div",{staticClass:"resume_gap",domProps:{innerHTML:t._s(t.getResume.biodata.objectives)}})]),i("div",{staticClass:"dr-career-objective"},[i("p",{staticClass:"dr-title-all"},[t._v("Career Description:")]),i("div",{staticClass:"resume_gap",domProps:{innerHTML:t._s(t.getResume.biodata.career_description)}})]),i("div",{staticClass:"dr-career-objective"},[i("p",{staticClass:"dr-title-all"},[t._v("Employement History:")]),i("p",{staticClass:"resume_gap years-of-experience"},[t._v(" Total year of experiences: "+t._s(this.R.isNil(t.getResume.userTotalExperiences.years)?0:t.getResume.userTotalExperiences.years)+" Year(s) "+t._s(this.R.isNil(t.getResume.userTotalExperiences.months)?0:t.getResume.userTotalExperiences.months)+" Month(s) "+t._s(this.R.isNil(t.getResume.userTotalExperiences.days)?0:t.getResume.userTotalExperiences.days)+" Day(s) ")])]),i("div",{staticClass:"dr-academic-certificate"},[i("p",{staticClass:"dr-title-all"},[t._v("Work Experiences:")]),t._l(t.getResume.experiences,(function(e){return i("div",{key:e.id,staticClass:"work_exp"},[i("div",{staticClass:"exp_list"},[i("p",[i("b",[t._v("Designation ")]),t._v(" : "+t._s(e.job_title))]),i("p",[i("b",[t._v(" Compnay Name ")]),t._v(" : "+t._s(e.company_name))]),i("p",[i("b",[t._v(" Compnay Location ")]),t._v(" : "+t._s(e.company_location))]),i("p",[i("b",[t._v(" Duration ")]),t._v(" : "+t._s(e.from_date+" to "+e.to_date))]),i("p",[i("b",[t._v(" Job Description ")]),t._v(" : "),i("span",{domProps:{innerHTML:t._s(e.job_description)}})])])])}))],2),i("div",{staticClass:"dr-academic-qualification mt-0"},[i("p",{staticClass:"dr-title-all mt-0"},[t._v("Academic Qualification:")]),i("table",{staticClass:"resume_table resume_gap"},[t._m(0),i("tbody",t._l(t.getResume.qualification,(function(e){return i("tr",{key:e.id},[i("td",[t._v(t._s(e.exam.title))]),i("td",[i("p",{domProps:{textContent:t._s(e.institute)}})]),i("td",[i("p",[t._v(t._s(e.subject))])]),i("td",[i("p",[t._v(t._s(e.end_year))])]),i("td",{staticClass:"action"},[i("p",[t._v(t._s(e.result))])])])})),0)])]),i("div",{staticClass:"dr-skills"},[i("p",{staticClass:"dr-title-all"},[t._v("Skills:")]),i("p",{staticClass:"resume_gap"},[t._v(t._s(t.getResume.skills.name))])]),t._m(1),i("div",{staticClass:"resume_gap"},[i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Looking For")]),i("div",{staticClass:"dr-application-info-2 text-capitalize"},[t._v(": "+t._s(t.getResume.applicationInfo.job_level))])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Available For")]),i("div",{staticClass:"dr-application-info-2"},[t._v(": "+t._s(t.getResume.applicationInfo.available_for))])])]),t._m(2),i("div",{staticClass:"dr-application-info resume_gap"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Address")]),i("div",{staticClass:"dr-application-info-2"},[t._v(" : "+t._s(t.getResume.biodata.address)+" ")])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("City")]),i("div",{staticClass:"dr-application-info-2"},[t._v(": "+t._s(t.getResume.biodata.city))])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Zip/Post Code")]),i("div",{staticClass:"dr-application-info-2"},[t._v(": "+t._s(t.getResume.biodata.zip_post_code))])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Country")]),i("div",{staticClass:"dr-application-info-2"},[t._v(": "+t._s(t.getResume.biodata.country))])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Nationality")]),i("div",{staticClass:"dr-application-info-2"},[t._v(": "+t._s(t.getResume.biodata.nationality))])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Date Of Birth")]),i("div",{staticClass:"dr-application-info-2"},[t._v(": "+t._s(t.getResume.biodata.date_of_birth))])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Gender")]),i("div",{staticClass:"dr-application-info-2"},[t._v(": "+t._s(t.getResume.biodata.gender))])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("NID/ Passpot Number")]),i("div",{staticClass:"dr-application-info-2"},[t._v(": "+t._s(t.getResume.biodata.identity_number))])])]),i("v-dialog",{attrs:{absolute:"","max-width":"400",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("div",[[i("v-card",{staticClass:"mx-auto",staticStyle:{"max-width":"500px"}},[i("v-toolbar",{attrs:{color:"deep-purple accent-4",cards:"",dark:"",flat:""}},[i("v-btn",{attrs:{icon:""}},[i("v-icon",{on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.dialog=!1}}},[t._v("mdi-arrow-left ")])],1),i("v-card-title",{staticClass:"title font-weight-regular"},[t._v(" Interview Call Info ")])],1),i("v-form",{ref:"form",staticClass:"pa-4 pt-6"},[i("v-text-field",{attrs:{rules:[t.rules.email],filled:"",color:"deep-purple",label:"Enter Email to get candidate resume",type:"email"},model:{value:t.company_email,callback:function(e){t.company_email=e},expression:"company_email"}}),i("v-textarea",{attrs:{"auto-grow":"",filled:"",rules:[function(t){return(t||"").length<=160||"Description must be 160 characters or less"},t.rules.required],color:"deep-purple",label:"Interview Message",hint:"Description must be 160 characters or less",rows:"4"},model:{value:t.interview_message,callback:function(e){t.interview_message=e},expression:"interview_message"}})],1),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{text:""},on:{click:function(e){return t.$refs.form.reset()}}},[t._v(" Clear")]),i("v-spacer"),i("v-btn",{staticClass:"white--text",attrs:{loading:t.isLoading,color:"deep-purple accent-4",depressed:""},on:{click:t.applicantInterviewCall}},[t._v(" interview call ")])],1)],1)]],2)])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("Title")]),i("th",{staticStyle:{width:"45%"}},[t._v("Institution name")]),i("th",[t._v("Field of study")]),i("th",{staticClass:"text-center"},[t._v("End Year")]),i("th",[t._v("Result")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"appInfo-title"},[i("p",{staticClass:"dr-title-all"},[t._v("Application Information:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"appInfo-title"},[i("p",{staticClass:"dr-title-all"},[t._v("Personal Details:")])])}],r=(i("a4d3"),i("99af"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("d3b7"),i("ac1f"),i("466d"),i("159b"),i("2fa7")),n=i("56d7");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l={name:"ApplicantResume",props:{applicantResume:Object,applicantBiodata:Object,skills:Object,experiences:Array,applicntInfo:Object,exams:Object,userId:String,dialogShowing:Boolean,dialogShow:Boolean},data:function(){return{agreement:!1,bio:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",dialog:!1,company_email:"",interview_message:"",form:!1,isLoading:!1,rules:{email:function(t){return!!(t||"").match(/@/)||"Please enter a valid email"},required:function(t){return!!t||"This field is required & Description must be 160 characters or less"}}}},mounted:function(){this.appResume()},updated:function(){this.$nextTick((function(){}))},computed:{getResume:function(){return this.$store.getters.resume.payload},dialogVisible:{get:function(){return this.dialogShowing},set:function(t){t||this.$emit("close")}}},methods:{downloadResume:function(){var t=this;this.$store.dispatch("callApi",{url:"resume/applicant/".concat(this.userId,"/").concat(this.$store.getters.job),method:"get",data:{}}).then((function(e){var i="http://3.17.234.251/jobsresume/resumes/public/".concat(e.file,"?access_token=").concat(t.$cookies.get("accessToken")),a=document.createElement("a");a.href=i,a.setAttribute("download","file.pdf"),a.setAttribute("target","_blank"),document.body.appendChild(a),a.click(),document.body.removeChild(a)})).catch((function(){t.$awn.alert("Failed! Email/Password doesn't match")})).finally((function(){t.loading=!1}))},appResume:function(){var t=this;this.$store.dispatch("callApi",{url:"resume/"+this.userId,method:"get",params:{job_id:this.$store.getters.job},data:{}}).then((function(t){})).catch((function(e){t.$awn.alert("Failed")})).finally((function(){}))},applicantShortListed:function(t){var e=this;t&&t.preventDefault(),this.$store.dispatch("callApi",{url:"jobs/".concat(this.$store.getters.job,"/").concat(this.userId,"/shortlist"),method:"put",data:{}}).then((function(t){var i=c({},e.getResume,{short_listed:t.short_list});e.$store.commit("resume",i),e.$awn.success("Updated Successfully!"),n["eventBus"].$emit("updateApplicantList")})).catch((function(){e.$awn.alert("Failed!")}))},applicantInterviewCall:function(t){var e=this;this.$refs.form.validate()&&(t&&t.preventDefault(),this.dialogShowing=!1,this.$store.dispatch("callApi",{url:"jobs/".concat(this.$store.getters.job,"/").concat(this.userId,"/interview-call"),method:"put",data:{company_email:this.company_email,interview_message:this.interview_message}}).then((function(t){e.dialog=!0,e.$awn.success("Updated Successfully!")})).catch((function(){e.$awn.alert("Failed!")})).finally((function(){e.dialog=!1})))}}},d=l,u=(i("32f0"),i("2877")),p=i("6544"),f=i.n(p),v=i("8212"),h=i("8336"),m=i("b0af"),b=i("99d9"),_=i("169a"),g=i("ce7e"),y=i("4bd4"),w=i("132d"),C=i("2fa4"),O=i("8654"),j=i("a844"),x=i("71d9"),P=Object(u["a"])(d,a,s,!1,null,null,null);e["default"]=P.exports;f()(P,{VAvatar:v["a"],VBtn:h["a"],VCard:m["a"],VCardActions:b["a"],VCardTitle:b["c"],VDialog:_["a"],VDivider:g["a"],VForm:y["a"],VIcon:w["a"],VSpacer:C["a"],VTextField:O["a"],VTextarea:j["a"],VToolbar:x["a"]})}}]);
//# sourceMappingURL=chunk-7729d84d.8f5fe2d8.js.map