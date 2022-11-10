<template>
    <div>
    <div class="text-read-400" v-for="member in members" :key="member.id">
      {{member.name}}
    </div>
    <div v-for="member in members" :key="member">
    <ProfileVue v-if="member.ismember"
      :name="member.name"
      :work="member.work"
      :birthday="member.birthday"
      :content="member.content"
    ></ProfileVue>
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
                birthday: "23 november 2022",
                work: "KU81",
                ismember: true
              },
              {
                content: "6410455623",
                name: "นาย เอกสัด",
                birthday: "23 november 2022",
                work: "KU81",
                ismember: true
              },
              {
                content: "6410457894",
                name: "นาย บาส งงง้วย",
                birthday: "12 november 2022",
                work: "KU81",
                ismember: false
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