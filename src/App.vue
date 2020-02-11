<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="!this.$store.state.user" to="/login">Connexion | </router-link> 
      <router-link v-if="!this.$store.state.user" to="/register">Inscriptions | </router-link> 
      <!-- <router-link to="/members">Membres</router-link> | -->
      <router-link to="/maps">Maps</router-link> |
      <a v-if="this.$store.state.user" type="button" @click="logout()" class="router-link-active" href="#">Déconnexion</a>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>

<script type="text/javascript">
  export default{
    methods :{
      logout(){
        this.$store.commit('logout')
        this.$router.push('home')
      }
    },

    mounted(){
      /*axios.get('members').then(response => {
          this.$store.commit('members',response.data);
        })

        if(this.$store.state.member == false){
          this.$router.push('login')
        }*/

        let header = document.createElement('script')
        header.setAttribute('src', 'https://use.fontawesome.com/releases/v5.3.1/js/all.js')
        document.head.appendChild(header)
      },

    computed : {
      tokenSet(){
        return (this.$store.state.user_token !== '') ? this.$store.state.user_token : ""
      }
    },
  }
</script>

<!-- fd794b8d0fee9d04504f7b7027c3810e497d2e52 -->