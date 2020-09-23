<template>
  <div class="applicant__list">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card flat class="ja__card pt-0">
            <!--********** Job activities start **************-->
            <div class="jobActivity">
              <v-row>
                <v-col cols="12" lg="4">
                  <p class="jaif">Total Job: <span>23</span></p>
                </v-col>
              </v-row>
            </div>
            <!--********** Job activities end **************-->
            <!--********** Job applied table start **************-->
           <div  style="overflow-x: auto !important;">
             <table>
               <tbody>
               <tr v-for="(applicant, i) in applicants" :key="i">
                 <td class="text-center"><p class="font-weight-bold">{{ applicant.id }}</p></td>
                 <td style="width: 10%">
                   <v-avatar size="85">
                     <img src="https://cdn.vuetifyjs.com/images/john.jpg"
                          alt="John">
                   </v-avatar>
                 </td>
                 <td>
                   <p><a href="">{{ applicant.name }} </a><span class="age_outline">{{applicant.age}}</span></p>
                   <p>{{ applicant.address }}</p>
                   <p>{{ applicant.institution_name }}</p>
                   <p><span>{{applicant.degree}}</span> in <span>{{applicant.subject}}</span></p>
                 </td>
                 <td>
                   <div v-for="(ex, i) in applicant.exp" :key="i">
                     <p class="font-weight-bold">{{ex.companyName}}</p>
                     <p>{{ex.designation}}</p>
                   </div>
                 </td>
                 <td></td>
                 <td>
                   <p> <span class="mr-2"><v-icon small>mdi-briefcase</v-icon></span><span>{{ applicant.totalExp }} + years</span></p>
                   <p> <span class="mr-2">&#2547;</span>{{ applicant.expectedSalary }}</p>
                   <p> <span class="mr-2 font-weight-bold">Applied On: </span><span>{{ applicant.appliedOn }}</span></p>
                 </td>
                 <td class="action text-center">
                   <v-btn class="interactn c-grey" color="success" icon>
                     <i class="material-icons">check</i>
                   </v-btn>
                   <v-btn class="interactn  mr-2 ml-2 c-green" color="error" icon>
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
export default {
  name: "ApplicantsList",
  data: () => {
    return {
      applicants: [
        {
          id: 1,
          name: 'Mizanur Rahman',
          img: 'assets/balgownie-avatar.jpg',
          age: 25,
          address: 'Dhaka, Bangladesh',
          institution_name: 'IUB',
          degree: 'B.Sc Engineering',
          graduation: '30000',
          subject: 'CSE',
          contactNumber: '01712794616',
          matched: "50%",
          exp: [
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
          ],
          shortlisted: true,
          rejected: true,
          expectedSalary: '60,689',
          views: 73,
          totalExp: '5',
          appliedOn: '20 August 2020'
        },
        {
          id: 2,
          name: 'Mizanur Rahman',
          img: 'assets/balgownie-avatar.jpg',
          age: 25,
          address: 'Dhaka, Bangladesh',
          institution_name: 'IUB',
          degree: 'B.Sc Engineering',
          graduation: '30000',
          subject: 'CSE',
          contactNumber: '01712794616',
          matched: "50%",
          exp: [
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
          ],
          shortlisted: true,
          rejected: true,
          expectedSalary: '60,689',
          views: 73,
          totalExp: '5',
          appliedOn: '20 August 2020'
        },
        {
          id: 3,
          name: 'Mizanur Rahman',
          img: 'assets/balgownie-avatar.jpg',
          age: 25,
          address: 'Dhaka, Bangladesh',
          institution_name: 'IUB',
          degree: 'B.Sc Engineering',
          graduation: '30000',
          subject: 'CSE',
          contactNumber: '01712794616',
          matched: "50%",
          exp: [
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
          ],
          shortlisted: true,
          rejected: true,
          expectedSalary: '60,689',
          views: 73,
          totalExp: '5',
          appliedOn: '20 August 2020'
        },
        {
          id: 4,
          name: 'Mizanur Rahman',
          img: 'assets/balgownie-avatar.jpg',
          age: 25,
          address: 'Dhaka, Bangladesh',
          institution_name: 'IUB',
          degree: 'B.Sc Engineering',
          graduation: '30000',
          subject: 'CSE',
          contactNumber: '01712794616',
          matched: "50%",
          exp: [
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
          ],
          shortlisted: true,
          rejected: true,
          expectedSalary: '60,689',
          views: 73,
          totalExp: '5',
          appliedOn: '20 August 2020'
        },
        {
          id: 5,
          name: 'Mizanur Rahman',
          img: 'assets/balgownie-avatar.jpg',
          age: 25,
          address: 'Dhaka, Bangladesh',
          institution_name: 'IUB',
          degree: 'B.Sc Engineering',
          graduation: '30000',
          subject: 'CSE',
          contactNumber: '01712794616',
          matched: "50%",
          exp: [
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
            {companyName: 'One One and Co. Limited', designation: 'software engineer', experience:'3'},
          ],
          shortlisted: true,
          rejected: true,
          expectedSalary: '60,689',
          views: 73,
          totalExp: '5',
          appliedOn: '20 August 2020'
        }
      ]
    }
  },
}
</script>

