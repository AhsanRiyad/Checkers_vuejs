<template>
<div>
  <Header></Header>
  <span :style="{'background-image': 'url(' + require('../../assets/background.png') + ')' , 'background-size':'cover'}" >
    <router-view></router-view>
  </span>
  <Footer></Footer>
</div>
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
