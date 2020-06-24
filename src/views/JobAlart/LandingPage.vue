<template>
<span :style="{'background-image': 'url(' + require('../../assets/background.png') + ')'}" > 
<Header></Header>
<router-view></router-view>
<Footer></Footer>
</span>
</template>

<script>
import Header from '../layout/Header'
import Footer from '../layout/Footer';
export default {
  name: "LandingPage",
  components:{
    Header: Header,
    Footer: Footer
  },
  data() {
    return {
      drawer: true,
       items: [
        ['mdi-email', 'Inbox'],
        ['mdi-account-supervisor-circle', 'Supervisors'],
        ['mdi-clock-start', 'Clock-in'],
      ],
    };
  }
};
</script>