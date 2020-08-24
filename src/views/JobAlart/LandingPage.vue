<template>
<span :style="{'background-image': 'url(' + require('../../assets/background.png') + ')' , 'background-size':'cover'}" >
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
    Header,
    Footer
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