<template>
	<div class="container">
		<div class="field">
			<label class="label">Email</label>
			<div class="control">
				<input v-model="email" class="input is-rounded" type="text" name="email" placeholder="Email">
			</div>
		</div>

		<div class="field">
			<label class="label">Mot de passe</label>
			<div class="control">
				<input v-model="password" class="input is-rounded" type="password" name="psswd" placeholder="Mot de passe">
			</div>
		</div>
			
		<div class="field">
			<div class="control">
				<button @click="signin()" class="button is-link">Envoyer</button>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<router-link to="/signup">Pas inscrit ?</router-link>
			</div>	
		</div>
	</div>
</template>

<script>
	export default {
		name : 'Login',
		data(){
			return {
				email : "zinni.arthur@gmail.com",
				password : "1234"
			}
		},
		mounted() {

		},
		methods :{
			signin(){
				let log = {}
				log.email = this.email
				log.password = this.password
				console.log(log)
				axios
				.post('members/signin',log).then(response => {
					this.$store.commit('token',response.data)
					this.$router.push("home")
				
				});
			}
		},
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
