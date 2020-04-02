<template>
  <div id="home">
    <header-desktop></header-desktop>
    <h2>Essential Links</h2>
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import HeaderDesktop from './components/HeaderDesktop.vue';
export default {
  name: 'app',
    components: {
        HeaderDesktop
    },
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        cv: {
            name: "Kazi Jahurul Islam",
            address: "Plot: 204. KDA Shilpa Abashik Elaka, Sonali jute mills Ltd.- 9206, Khulna.",
            mobile: "01719564542",
            email: "jahurul.sust@gmail.com",
            experiences: [
                {
                    designation: "Front-end Developer",
                    company: "Authlab Ltd.",
                    role: "Developing different types of responsive website and web application user interface using HTML5, CSS3, JQuery, ootstrap, SASS."
                }
            ],
            strengths: [
                "Ability to work independently and in team",
                "Ability to analyze and interpret information",
                "Creative and innovative",
                "Strong logical and reasoning abilities"
            ],
            academicQualifications: [
                {
                    name: "Top-up IT Training in Web Development",
                    passingYear: 2016,
                    institute: "Leveraging ICT for Growth, Employment & Governance Project by Bangladesh Computer Council (BCC)"
                },
                {
                    name: "PGD in Information Technology",
                    passingYear: 2015,
                    institute: "Institute of Information and Communication Technology, Shahjalal University of Science and Technology, et."
                },
                {
                    name: "M.S. in Statistics",
                    passingYear: 2014,
                    institute: "Shahjalal University of Science and Technology, Sylhet."
                }
            ],
            references: [
                {
                    name: "Dr. Md. Shahidur Rahman",
                    designation: "Associate Professor",
                    address: "Department of Civil & Environmental Engineering",
                    organization: "Shahjalal University of Science and Technology, Sylhet.",
                    mobile: "+88-01982283070",
                    email: "msr.ceesust@gmail.com"
                }
            ]
        }
    }
  }
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
