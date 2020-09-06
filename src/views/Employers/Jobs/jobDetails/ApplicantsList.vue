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
            <table>
              <thead>
              <tr class="panel-heading">
                <th>Sl</th>
                <th>Sl</th>
                <th style=" width:35%;">Job Title</th>
                <th>
                  <v-icon>mdi-bell-ring</v-icon>
                  Job Status
                </th>
                <th>
                  <v-icon>mdi-file-multiple-outline</v-icon>
                  Application
                </th>
                <th class="text-center">
                  <v-icon>mdi-account-group</v-icon>
                  Matched
                </th>
                <th class="text-center">
                  <v-icon>mdi-format-list-bulleted</v-icon>
                  Short-listed
                </th>
                <th class="text-center">
                  <v-icon>mdi-eye</v-icon>
                  View Status
                </th>
                <th class="text-center">Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(job, i) in applicants" :key="i">
                <td><p>{{ job.id }}</p></td>
                <td>
                  <a >{{ job.role }}</a>
                  <p>Published On:<span>{{ job.publishedOn }}</span></p>
                  <p>Deadline:<span>{{ job.deadline }}</span> <span><a href="">change</a></span></p>
                </td>
                <td>
                  <v-switch
                      v-model="job.jobStatus"
                      color="success"
                      value="success"
                      hide-details
                  ></v-switch>
                </td>
                <td>{{ job.applications }}</td>
                <td class="text-center">{{ job.matched }}</td>
                <td class="text-center">{{ job.shortlisted }}</td>
                <td class="text-center">{{ job.views }} | {{ job.applications }}</td>
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
          eduBackground: 'B.Sc Engineering',
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
          expectedSalary: '600689',
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
          eduBackground: 'B.Sc Engineering',
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
          expectedSalary: '600689',
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
          eduBackground: 'B.Sc Engineering',
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
          expectedSalary: '600689',
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
          eduBackground: 'B.Sc Engineering',
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
          expectedSalary: '600689',
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
          eduBackground: 'B.Sc Engineering',
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
          expectedSalary: '600689',
          views: 73,
          totalExp: '5',
          appliedOn: '20 August 2020'
        }
      ]
    }
  },
}
</script>

