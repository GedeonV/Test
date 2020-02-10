<template>
	<div class="container">
		<div class="field">
			<label class="label">Nom</label>
			<div class="control">
				<input v-model="fullname" class="input is-rounded" type="text" name="nom" placeholder="Nom">
			</div>
		</div>

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
				<button @click="signup()" class="button is-link">Envoyer</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name : 'Signup',
	data() {
		return{
			fullname : "",
			email : "",
			password : ""
			}
	},
	methods : {
		signup(){
			let informations = {}
			informations.fullname = this.fullname
			informations.email = this.email 
			informations.password = this.password 
			console.log(informations)
			axios
			.post('members',informations).then(response => (console.log(response)))
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
