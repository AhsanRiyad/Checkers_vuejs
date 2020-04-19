<template>
  <div class="desktop-nav">
    <div class="job_container">
      <div id="nav">
        <div class="logo">
          <router-link class="logo_link" to="/">
            <img class="logo_img" src="../assets/logo.png" alt="Job alert" />
          </router-link>
        </div>

        <nav class="right-nav">
          <router-link to="/">Jobs</router-link>
          <router-link to="/about">Recruiters</router-link>
          <router-link to="/login">Log in</router-link>
          <router-link to="/about">Employer / Post job</router-link>
          <router-link class="nav_btn job_btn" to="/about"
            >Get Alert</router-link
          >
        </nav>
      </div>
      <!-- /#nav -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
