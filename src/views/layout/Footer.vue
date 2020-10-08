<template>
 <v-footer class="pa-0 ma-0 footer">
   <!-- footer starts -->
   <v-container class="pb-0 " fluid style>
     <v-row
         cols="12"
         offset-md="0"
         md="12"
         justify="center"
         class="white--text"
         style="background: #365899"
     >
       <v-container>
         <v-row>
           <v-col cols="6" md="3" class="text-md-left text-left">
             <h2  class="mb-3">About Us</h2>
             <ul>
               <li>
                 <router-link to="/about-us" class="mt-md-3">About Us</router-link>
               </li>
               <!--            <router-link to=/ class="mt-md-n3 mt-n4">Terms & Conditions</p>-->
               <!--            <router-link to=/ class="mt-md-n3 mt-n4">International Partners</p>-->
               <!--            <router-link to=/ class="mt-md-n3 mt-n4">Other Partners</p>-->
               <li>
                 <router-link to="/privacy-policy" class="mt-md-n3 mt-n4">Privacy Policy</router-link>
               </li>
               <!--            <router-link to=/ class="mt-md-n3 mt-n4">Feedback</p>-->
               <li>
                 <router-link to="/contact" class="mt-md-n3 mt-n4">Contact Us</router-link>
               </li>
             </ul>
           </v-col>

           <v-col cols="6" md="3" class="text-md-left text-left">
             <h2  class="mb-3">Job Seekers</h2>
             <ul>
               <li>
                 <router-link to="/signup" class="mt-md-3">Create Account</router-link>
               </li>
               <li>
                 <!--                <router-link to="/" class="mt-md-n3 mt-n4">Career Counseling</router-link>-->
               </li>
             </ul>
             <router-link to="/faq-for-job-seekers" class="mt-md-n3 mt-n4">FAQ</router-link>
             <!--            <router-link to=/ class="mt-md-n3 mt-n4">Video Guide</p>-->
           </v-col>

           <v-col cols="6" md="3" class="text-md-left text-left">
             <h2  class="mb-3">Employee</h2>
             <ul>
               <li>
                 <router-link to="/signup" class="mt-md-3">Create Account</router-link>
               </li>
               <li>
                 <!--               <router-link to="/" class="mt-md-n3 mt-n4">Career Counseling</router-link>-->
               </li>
             </ul>
             <router-link to="/faq-for-company" class="mt-md-n3 mt-n4">FAQ</router-link>
             <!--            <router-link to=/ class="mt-md-n3 mt-n4">Video Guide</p>-->
           </v-col>

           <v-col cols="6" md="3" class="text-md-left text-left">
             <h2  class="mb-3">Social Media</h2>
             <ul>
               <li><router-link to="/" class="mt-md-3">Facebook</router-link></li>
               <li><router-link to="/" class="mt-md-n3 mt-n4">LinkedIn</router-link></li>
               <li> <router-link to="/" class="mt-md-n3 mt-n4">Youtube</router-link></li>
               <li><router-link to="/" class="mt-md-n3 mt-n4">Google</router-link></li>
             </ul>
           </v-col>
         </v-row>
       </v-container>
     </v-row>
   </v-container>
   <!-- footer ends -->
 </v-footer>
</template>
<script>
import "../../sass/_common.scss"
export default {
  name: "Footer",
};
</script>
