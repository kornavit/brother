<template>
    <div
      class="w-1/3 rounded-lg border-2 p-4 shadow-lg bg-white duration-300 ease-in-out hover:bg-blue-300 hover:scale-105"
    >
      <div class="w-2/3 rounded-full mx-auto" alt="" width="200px" height="200px"></div>
      <img v-bind:src="image" v-bind:width="100" class="rounded-full">
      <div class="flex justify-between w-2/3 mx-auto p-3">
      <div class="text-xl font-bold uppercase">My Profile</div>
      <div class="w-2/3 mx-auto">
        <div class="text-lg">{{ name }}</div>
        <div class="text-base">{{ work }}</div>
        <div class="text-base">{{ birthday }}</div>
        <div class="text-lg font-normal">{{ content }}</div>
      </div>
      </div>
      <div class="w-2/3 mx-auto space-x-3 border-t-2 p-2">
        <font-awesome-icon icon="fa-brands fa-instagram" class="text-2xl"/>
        <font-awesome-icon icon="fa-brands fa-facebook" class="text-2xl" />
        <font-awesome-icon icon="fa-solid fa-xmark" class="text-2xl"/>
        <font-awesome-icon icon="fa-solid fa-caret-down" class="text-2xl"/>
      </div>
    </div>
</template>

<script>

export default{
    props: {
        name:{
            type: String,
            default: "AAAAAAAAA"
        },
        content:{
            type: String,
            default: "641045----"
        },
        birthday:{
            type: String,
            default: "23 november 2022"
        },
        work:{
            type: String,
            default: "KU--"
        },
        image:{
          type: String,
          default: "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/288677917_1076799693044353_4505368874177456681_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGge74_0WEeZDmOGK8LrEI1u5U4LLR-IiC7lTgstH4iIMETi4mVILAU4Y-qjfsLvzoY1Sl9VrOC0xRk22we_Q7C&_nc_ohc=-DNnLrj_XtcAX_1xscE&_nc_oc=AQlt47W-xNf8IDWXOutEbNlZ12G_I83GjvalMhf9UyEbeUABsX3vHKtvZZvTApFD1FXJIYrFNC8Po2i5MyGYIIMZ&_nc_ht=scontent-sin6-1.xx&oh=00_AfAZ5qMyCCNv9MCSyP578tI0qsD7CUCZ44ynRG7dViY0Tw&oe=63715F4D"
        }
    },  
    methods:
    {
        getUrlImage(imagePath){
            return {'background-image': 'url("./src'+ imagePath + '")'};
        }
        // getUrl(imagePath){
        //     let url = new URL('https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FVue.js&psig=AOvVaw025qe68WeYA4nDiJgjJxgU&ust=1668134271544000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOif8MrKovsCFQAAAAAdAAAAABAD');
        //     return url;
        // }
    }
};
</script>