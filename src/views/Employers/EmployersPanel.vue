<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="2">
        <v-card height="100%">
          <v-navigation-drawer width="100%" permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Company
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
              <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link
                  :to="item.router"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <router-view></router-view>
        <!--          <v-tabs v-model="tabs"-->
        <!--                  background-color="indigo"-->
        <!--                  dark-->
        <!--          >-->
        <!--            <v-tab>-->
        <!--              Jobs-->
        <!--            </v-tab>-->
        <!--            <v-tab>-->
        <!--              Companies-->
        <!--            </v-tab>-->
        <!--          </v-tabs>-->
        <!--          <v-tabs-items v-model="tabs">-->
        <!--            <v-tab-item>-->
        <!--              -->
        <!--            </v-tab-item>-->
        <!--            <v-tab-item>-->
        <!--              -->
        <!--            </v-tab-item>-->
        <!--          </v-tabs-items>-->
      </v-col>
    </v-row>
  </v-container>
<!--  <div class="employersPanel">-->
<!--    -->
<!--  </div>-->
</template>

<script>

export default {
  name: "EmployersPanel",
  components: {
    // EmployersJobs: () => import('./Jobs/JobsTab'),
    // EmployersCompanies: () => import('./companies/companiesTab')
  },
  data: () => {
    return {
      items: [
        { router:'/user-info', title: 'Basic Info', icon: 'mdi-view-dashboard' },
        { router:'/company-list', title: 'Company', icon: 'mdi-image' },
        { router:'/all-jobs', title: 'Job', icon: 'mdi-help-box' },
      ],
      right: null,
    }
  }
}
</script>
