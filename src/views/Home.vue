<template>
  <div class="home">

    <Header></Header>

    <main class="site-content">

        <div class="home_search">
            <search/>
        </div> <!-- /.home_search -->

        <div class="new_to_site">
            <h2>
                New to jobalert ?
            </h2>
            <div class="home_main_btn">
                <a href="#" class="job_btn">Register with us</a>
                <a href="#" class="job_btn">Upload resume</a>
            </div>
        </div> <!-- /.new_to_site -->

        <div class="search_tags">

            <h3>Most Searches</h3>

            <div class="search_tags_row">
                <a href="#" class="search_tag">Higher Education <i class="fa fa-search"></i></a>
                <a href="#" class="search_tag">Freelance <i class="fa fa-search"></i></a>
                <a href="#" class="search_tag">Engineering <i class="fa fa-search"></i></a>
                <a href="#" class="search_tag">Pharmacy <i class="fa fa-search"></i></a>
                <a href="#" class="search_tag">House Sitting <i class="fa fa-search"></i></a>
                <a href="#" class="search_tag">Writing <i class="fa fa-search"></i></a>
                <a href="#" class="search_tag">Creative Designer <i class="fa fa-search"></i></a>
                <a href="#" class="search_tag">Army <i class="fa fa-search"></i></a>
            </div>

        </div> <!-- /.search_tags -->

    </main>

    <Footer></Footer>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import Search from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
      Footer,
      Header,
      Search
    // HelloWorld
  }
};
</script>

<style lang="scss">
    .home .site-content{
        /*min-height: calc(100vh - 335px);*/
        padding: 150px 0;
        margin-top: -90px;
        background: url("../assets/home-bg.png") top center/cover no-repeat;
    }
    .home_search{
        max-width: 600px;
        padding: 0 15px;
        margin: 0 auto 50px;
    }
    .new_to_site{
        max-width: 600px;
        padding: 0 15px;
        margin: 50px auto;
        h2{
            text-align: center;
            margin: 0 0 20px;
            font-size: 25px;
        }
        .home_main_btn{
            display: flex;
            justify-content: space-between;
            .job_btn{
                width: 48%;
                padding: 15px 0;
                font-size: 20px;
            }
        }
    }
    .search_tags{
        max-width: 950px;
        padding: 0 15px;
        margin: 0 auto;
        h3{
            color: #365899;
            text-align: center;
            font-size: 28px;
            margin: 0 0 20px;
        }
        .search_tags_row{
            display: flex;
            flex-wrap: wrap;
            a{
                padding: 10px 0;
                font-size: 16px;
                color: #fff;
                background: #8f8f8f;
                text-align: center;
                display: inline-block;
                width: 23%;
                margin-right: 2%;
                margin-bottom: 2%;
                box-shadow: 0 3px 7px 0 #8f8f8f;
                &:nth-child(4n){
                    margin-right: 0;
                }
                &:hover{
                    background: #365899;
                    box-shadow: 0 3px 10px 0 #365899;
                }
                i{
                    margin-left: 10px;
                }
            }
        }
    }

</style>
