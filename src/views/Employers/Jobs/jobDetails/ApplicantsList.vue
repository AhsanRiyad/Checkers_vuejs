<template>
  <div class="applicant__list">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card flat class="ja__card pt-0">
            <!--********** Job applied table start **************-->
           <div  style="overflow-x: auto !important;">
             <table>
               <tbody>

               <tr v-for="app in applicant" :key="app.id">
                 <td class="text-center"><p class="font-weight-bold"></p></td>
                 <td style="width: 10%" v-for="photo in app.biodata" :key="photo.id">
                   <v-avatar size="85">
                     <img :src=" $store.getters.imageUrl + photo.photo"
                          :alt="photo.full_name">
                   </v-avatar>
                 </td>
                 <td>
                   <div v-for="bio in app.biodata" :key="bio.id">
                     <p class="mb-4"><a @click="applicantResume(bio.userId)" style="font-size: 20px; text-transform: capitalize">{{ bio.full_name }} </a><span class="age_outline font-weight-bold"> Age: {{bio.age}}</span></p>
                     <p>{{ bio.address }}</p>
                   </div>
                   <div v-for="qua in app.qualification" :key="qua.id">
                     <p>{{qua.institute}}</p>
                     <p><span>{{qua.exam_title}}</span> in <span>{{qua.subject}}</span></p>
                   </div>
                 </td>
                 <td>
                   <div v-for="(ex) in app.experiences" :key="ex.id">
                     <p class="font-weight-bold">{{ex.company_name}}</p>
                     <p>{{ex.job_title}}</p>
                   </div>
                 </td>
                 <td></td>
                 <td>
                   <p > <span class="mr-2"><v-icon small>mdi-briefcase</v-icon></span><span>{{ app.total_experice.years }} <span class="font-weight-bold ml-1 mr-1">Years</span> {{app.total_experice.months}} <span class="font-weight-bold ml-1 mr-1">Month</span> {{app.total_experice.days}} <span class="font-weight-bold ml-1 mr-1">Days</span></span></p>
                   <div v-for="apear in app.job_appliers" :key="apear.id">
                     <p> <span class="mr-2" >{{ apear.currency_code }}</span>{{ apear.expected_salary }}</p>
                     <p> <span class="mr-2 font-weight-bold">Applied On: </span><span>{{ getHumanDate(apear.created_at) }}</span></p>
                   </div>
                 </td>
                 <td class="action text-center">
                   <v-btn class="interactn c-grey" color="success" icon>
                     <i class="material-icons">check</i>
                   </v-btn>
                   <v-btn class="interactn  mr-2 ml-1 mr-1 c-green" color="error" icon>
                     <i class="material-icons">close</i>
                   </v-btn>
                 </td>
               </tr>
               </tbody>
             </table>
           </div>
            <!--********** Job applied table end **************-->
            <!--********** pagination start **************-->
            <div class="pagination">
              <ul class="d-flex pg-list">
                <li>
                  <v-btn class="pg-btn" small text>
                    <v-icon>mdi-chevron-double-left</v-icon>
                  </v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>1</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>2</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>3</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>..124</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>
                    <v-icon>mdi-chevron-double-right</v-icon>
                  </v-btn>
                </li>
              </ul>
            </div>
            <!--********** pagination end **************-->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import "../../../../sass/employers/_jobs.scss"
import moment from "moment";
export default {
  name: "ApplicantsList",
  props: {
    applicant: Array,
    experience: Array,
    biodata: Array,
    qualification: Array,
    jobAppliers: Array,
    totalExp: Object,
    length: Number,
    pageNo: Number,
    jobResponsibilities: Array,
  },
  data: () => {
    return {
      showModal: false,
      applicantsReg: {}
    }
  },
 methods: {
   getHumanDate: function (date) {
     return moment(date, 'YYYY-MM-DD').format("MMM Do YY");
   },
   applicantResume(n){
     this.$router.push({name: 'ApplicantResume', params: {id: n}})
   }
 }
}
</script>

