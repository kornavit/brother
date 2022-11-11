<template>
    <div>
    <!-- <div class="text-red-400" v-for="member in members" :key="member.id">
      {{member.name}}
    </div> -->
    <br>
    <div v-for="member in members" :key="member">
    <ProfileVue v-if="member.ismember"
      :name="member.name"
      :work="member.work"
      :birthday="member.birthday"
      :content="member.content"
      :image="member.image"
    ></ProfileVue>
    <br>
    </div>
    <!-- <ProfileVue
      :name="name"
      :work="work"
      :birthday="birthday"
      :content="content"
      :image="image"
    ></ProfileVue> -->
    </div>
</template>

<script>
import ProfileVue from "../components/Profile.vue";
export default{
    data(){
        return{
            members: [
              {
                content: "6410450079",
                name: "นาย กรณวิทย์ พัฒนโชควานิช",
                birthday: "23 november",
                work: "KU81",
                ismember: true
              },
              {
                content: "6410450265",
                name: "นาย วิทวัส ประพันธ์วงศ์",
                birthday: "9 november",
                work: "KU81",
                image: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-1/268802209_3011631129048916_317198998399826305_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEYD02_O4AH-GQHJOLI68wGnV-k36cV3J6dX6TfpxXcnihG8hhBOOFnRDabGC5oq-ENlUgpiWxiVZGfmpn31IyN&_nc_ohc=iPL3_WeY33IAX-muOZW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbkk14-1.fna&oh=00_AfBnKpsP4TnSxb7cmjXu-bALAnvw31YS1ALfkHFgp_q6Yw&oe=637236CF",
                ismember: true
              },
              {
                content: "6510405482",
                name: "นาย ณัฐดนัย พิณะเวศน์",
                birthday: "12 ------",
                work: "KU82",
                image: "https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-1/262044289_4169110556528381_308360111332433225_n.jpg?stp=c0.25.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEREcpPpT7OVQCEEgH_fOVHhq_u6sUKkASGr-7qxQqQBDMuRrpm633pMEzq2V3FhgUMymY4KLTJ1OKqa0-hFw6c&_nc_ohc=AHNctsJKgEwAX9UMbj-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfCgDba4fQXEq4lVQFjMikU5tO9QMDR7XC7wRY185mDPMA&oe=6371C3B7",
                ismember: true
              }
            ]
        };
    },
    components:{
      ProfileVue
    }
};
</script>

<style>
</style>