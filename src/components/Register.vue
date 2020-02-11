<template>
	<div class="field">
		<label class="label">Nom</label>
			<div class="control">
				<input v-model="first_name" class="input is-rounded" type="text" name="nom" placeholder="Nom">
			</div>
		</div>

		<div class="field">
			<label class="label">Prénom</label>
			<div class="control">
				<input v-model="last_name" class="input is-rounded" type="text" name="prenom" placeholder="Prénom">
			</div>
		</div>

		<div class="field">
			<label class="label">Pseudo</label>
			<div class="control">
				<input v-model="nickname" class="input is-rounded" type="text" name="nickname" placeholder="Pseudo">
			</div>
		</div>

		<div class="field">
			<label class="label">Age</label>
			<div class="control">
				<input v-model="age" class="input is-rounded" type="number" name="age" placeholder="Age">
			</div>
		</div>

		<div class="field">
			<label class="label">Date de naissance</label>
			<div class="control">
				<input v-model="birth_date" class="input is-rounded" type="date" name="birth_date" placeholder="Date de naissance">
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
				<button @click="register()" class="button is-link">Envoyer</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name : 'Register',
	data() {
		return{
			first_name : "",
			last_name: "",
			nickname: "",
			age: "",
			birth_date: "",
			email : "",
			password : ""
			}
	},
	methods : {
		register(){
			informations.first_name = this.first_name
			informations.last_name = this.last_name
			informations.nickname = this.nickname
			informations.age = this.age
			informations.birth_date = this.birth_date
			informations.email = this.email 
			informations.password = this.password 
			console.log(informations)
			axios
			.post('users/register',informations).then(response => {
				console.log(response)
				this.router.push("login")
			});
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
