<template>
    <div>
        <div>this is onclick dropdown</div>

        <button class="p-2 bg-slate-400" @click="dropdown=!dropdown">menu</button>
        <div v-if="dropdown">sus</div>

        <div>this is onchange</div>
        <input class="p-2 border-2" type="text" @change="count++">
        <div>count is {{count}}</div>

        <div>this is v-model</div>
        <input id="fuck" type="text" v-model="name" class="border-solid border-2 border-lime-600 rounded-md">
        <div>{{name}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            count: 0,
            dropdown: false,
            name: "default"
        }
    }
}
</script>

<style>
#fuck:hover{
    border-color: red;
}
</style>