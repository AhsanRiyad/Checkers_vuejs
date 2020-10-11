<template>
<div>
  <Header></Header>
<<<<<<< HEAD
  <span :style="{'background-image': 'url(' + require('../../assets/background.png') + ')' , 'background-size':'cover'}" >
=======
  <span :style="{'background-image': 'url(' + require('../../assets/background.png') + ')' , 'background-size':'cover', 'display': 'block',  'height': '100%'}" >
>>>>>>> 4bdcbf9cf80c6db8528752428e4c554410a6f15c
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
