(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79c3c2ae"],{5473:function(t,a,i){},a925:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"rd-main-card"},[i("div",{staticClass:"default-resume-main-card"},[i("div",{staticClass:"defaultResume-title"},[i("div",{staticClass:"dr-main-text-div"},[i("v-btn",{staticStyle:{"margin-bottom":"20px"},attrs:{disabled:t.loading,loading:t.loading,small:"",color:"success"},on:{click:function(a){return a.stopPropagation(),t.downloadResume(a)}}},[t._v("Download")]),i("p",{staticClass:"defaultResume-title-text"},[t._v(" "+t._s(this.resume.payload.biodata.full_name)+" ")]),i("p",[t._v("Mobile: "+t._s(this.resume.payload.biodata.mobile_number))]),i("p",[t._v("Email: "+t._s(this.resume.payload.biodata.contact_email))])],1),i("div",{staticClass:"dr-title-photo"},[i("v-avatar",{attrs:{size:"130"}},[i("img",{attrs:{src:this.$store.getters.imageUrl+this.resume.payload.biodata.photo,alt:"John"}})])],1)]),i("div",{staticClass:"dr-career-objective"},[i("p",{staticClass:"dr-title-all"},[t._v("Career Objective:")]),i("div",{staticClass:"resume_gap",domProps:{innerHTML:t._s(this.resume.payload.biodata.objectives)}})]),i("div",{staticClass:"dr-career-objective"},[i("p",{staticClass:"dr-title-all"},[t._v("Career Description:")]),i("div",{staticClass:"resume_gap",domProps:{innerHTML:t._s(this.resume.payload.biodata.career_description)}})]),i("div",{staticClass:"dr-career-objective"},[i("p",{staticClass:"dr-title-all"},[t._v("Employement History:")]),i("p",{staticClass:"resume_gap years-of-experience"},[t._v(" Total year of experiences: "+t._s(t.getExperience)+" ")])]),i("div",{staticClass:"dr-academic-certificate"},[i("p",{staticClass:"dr-title-all"},[t._v("Work Experiences:")]),t._l(this.resume.payload.experiences,(function(a){return i("div",{key:a.id,staticClass:"work_exp"},[i("div",{staticClass:"exp_list"},[i("p",[i("b",[t._v("Designation ")]),t._v(" : "+t._s(a.job_title))]),i("p",[i("b",[t._v(" Compnay Name ")]),t._v(" : "+t._s(a.company_name))]),i("p",[i("b",[t._v(" Compnay Location ")]),t._v(" : "+t._s(a.company_location))]),i("p",[i("b",[t._v(" Duration ")]),t._v(" : "+t._s(a.from_date+" to "+t.R.isNil(a.to_date)?"Currently Working Here":a.to_date)+" ")]),i("p",[i("b",[t._v(" Job Description ")]),t._v(" : "),i("span",{domProps:{innerHTML:t._s(a.job_description)}})])])])}))],2),i("div",{staticClass:"dr-academic-qualification"},[i("p",{staticClass:"dr-title-all mt-0"},[t._v("Academic Qualification:")]),i("div",{staticStyle:{"overflow-x":"scroll"}},[i("table",{staticClass:"resume_table resume_gap"},[t._m(0),i("tbody",t._l(this.resume.payload.qualification,(function(a){return i("tr",{key:a.id},[i("td",[i("p",[t._v(t._s(a.exam.title))])]),i("td",[i("p",{domProps:{textContent:t._s(a.institute)}})]),i("td",[i("p",[t._v(t._s(a.subject))])]),i("td",[i("p",[t._v(t._s(a.end_year))])]),i("td",{staticClass:"action"},[i("p",[t._v(t._s(a.result))])])])})),0)])])]),i("div",{staticClass:"dr-skills"},[i("p",{staticClass:"dr-title-all"},[t._v("Skills:")]),i("p",{staticClass:"resume_gap"},[t._v(t._s(this.resume.payload.skills.name))])]),t._m(1),i("div",{staticClass:"resume_gap"},[i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Looking For")]),i("div",{staticClass:"dr-application-info-2 text-capitalize"},[t._v(" : "+t._s(this.resume.payload.applicationInfo.job_level)+" ")])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Avalable For")]),i("div",{staticClass:"dr-application-info-2"},[t._v(" : "+t._s(this.resume.payload.applicationInfo.available_for)+" ")])])]),t._m(2),i("div",{staticClass:"dr-application-info resume_gap"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Address")]),i("div",{staticClass:"dr-application-info-2"},[t._v(" : "+t._s(this.resume.payload.biodata.address)+" ")])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("City")]),i("div",{staticClass:"dr-application-info-2"},[t._v(" : "+t._s(this.resume.payload.biodata.city)+" ")])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Zip/Post Code")]),i("div",{staticClass:"dr-application-info-2"},[t._v(" : "+t._s(this.resume.payload.biodata.zip_post_code)+" ")])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Country")]),i("div",{staticClass:"dr-application-info-2"},[t._v(" : "+t._s(this.resume.payload.biodata.country_id.country_name)+" ")])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Nationality")]),i("div",{staticClass:"dr-application-info-2"},[t._v(" : "+t._s(this.resume.payload.biodata.nationality)+" ")])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Date Of Birth")]),i("div",{staticClass:"dr-application-info-2"},[t._v(" : "+t._s(this.resume.payload.biodata.date_of_birth)+" ")])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("Gender")]),i("div",{staticClass:"dr-application-info-2"},[t._v(" : "+t._s(this.resume.payload.biodata.gender)+" ")])]),i("div",{staticClass:"dr-application-info"},[i("div",{staticClass:"dr-application-info-1"},[t._v("NID/ Passpot Number")]),i("div",{staticClass:"dr-application-info-2"},[t._v(" : "+t._s(this.resume.payload.biodata.identity_number)+" ")])])])])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",[i("th",[t._v("Title")]),i("th",{staticStyle:{width:"45%"}},[t._v("Institution name")]),i("th",[t._v("Field of study")]),i("th",{staticClass:"text-center"},[t._v("End Year")]),i("th",[t._v("Result")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"appInfo-title"},[i("p",{staticClass:"dr-title-all"},[t._v("Application Information:")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"appInfo-title"},[i("p",{staticClass:"dr-title-all"},[t._v("Personal Details:")])])}],o=(i("99af"),i("d3b7"),i("5473"),{name:"DefaultResume",data:function(){return{loading:!1}},methods:{downloadResume:function(){var t=this;this.loading=!0,this.$store.dispatch("callApi",{url:"resume/applicant/".concat(this.resume.payload.applicationInfo.user_id),method:"get",data:{}}).then((function(a){t.loading=!1;var i="http://3.17.234.251/jobsresume/resumes/public/".concat(a.file,"?access_token=").concat(t.$cookies.get("accessToken")),s=document.createElement("a");s.href=i,s.setAttribute("download","file.pdf"),s.setAttribute("target","_blank"),document.body.appendChild(s),s.click(),document.body.removeChild(s)})).catch((function(){t.$awn.alert("Failed! Email/Password doesn't match")})).finally((function(){t.loading=!1}))}},computed:{getExperience:function(){var t="0";t=this.resume.payload.userTotalExperiences.years>1?this.resume.payload.userTotalExperiences.years+" years ":this.resume.payload.userTotalExperiences.years+" year ";var a="0";return a=this.resume.payload.userTotalExperiences.months>1?this.resume.payload.userTotalExperiences.months+" months ":this.resume.payload.userTotalExperiences.months+" month ",t+a},resume:function(){return this.$store.getters.resume}},mounted:function(){}}),l=o,n=i("2877"),r=i("6544"),d=i.n(r),c=i("8212"),p=i("8336"),_=Object(n["a"])(l,s,e,!1,null,null,null);a["default"]=_.exports;d()(_,{VAvatar:c["a"],VBtn:p["a"]})}}]);
//# sourceMappingURL=chunk-79c3c2ae.1e987422.js.map