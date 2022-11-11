<template>
    <div>
      <router-link to="/" class="bg-cyan-500 hover:bg-cyan-600 rounded-md">Home brother-team</router-link><br>
      <router-link to="/profile" class="bg-cyan-500 hover:bg-cyan-600 rounded-md">Profile brother-team</router-link>
      <slot></slot>
    </div>
    
</template>

<script>
export default {
  
}
</script>
  
<style>
  body{
    background-color: yellowgreen;
  }
</style>