<template>
<div class="add_number">
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-center ja__headline">Verify your phone number</h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="ja__card">
          <v-form ref="form">
            <v-col>
              <p class="ma-0">To provide the best experience for job seekers and employers, we need to verify that the phone number associated with your account belongs to you. The verification process is automated and takes less than a minute.</p>
            </v-col>
            <v-col cols="12" md="8" class="col-1 mb-n4 pb-0">
              <p class="mb-1">Country</p>
              <v-autocomplete
                  v-model="select"
                  :loading="loading"
                  :items="items"
                  :rules="[v=>!!v||'required']"
                  :search-input.sync="search"
                  cache-items
                  dense
                  hide-no-data
                  hide-details
                  outlined
                  placeholder="What state are you from?"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="8" class="col-2 mb-0 mt-5 pb-0">
              <p class="mb-1">Phone Number</p>
              <v-text-field
                  class="mb-0"
                  :rules="[v=>!!v||'required']"
                  placeholder="Phone Number"
                  outlined
                  dense
              ></v-text-field>
            </v-col>
            <v-col>
              <p class="ma-0">By providing your phone number, you confirm that you are the subscriber to that phone number and you agree to receive auto dialed text messages from Indeed at that number. Message and data rates may apply.</p>
            </v-col>
            <div class="ja__button">
              <v-btn color="#00204e" class="white--text ma-2" @click.stop="submit">save</v-btn>
              <v-btn color="#00204e" class="white--text ma-2" link to="/account-settings">cancel changes</v-btn>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import '../../../sass/job-alart/_accountSettings.scss'
export default {
name: "addNumber",
  data () {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ],
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
    submit(){
      this.$refs.form.validate();
      this.$router.push('/verifyphone')
    }
  },
}
</script>