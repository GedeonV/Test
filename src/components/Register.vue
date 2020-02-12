<template>
		<div class="container">
				<div class="field">
					<label class="label">Nom</label>
					<div class="control">
						<input v-model="first_name" class="input is-rounded" type="text" name="nom" required placeholder="Nom">
					</div>
				</div>

				<div class="field">
					<label class="label">Prénom</label>
					<div class="control">
						<input v-model="last_name" class="input is-rounded" type="text" name="prenom" required placeholder="Prénom">
					</div>
				</div>

				<div class="field">
					<label class="label">Pseudo</label>
					<div class="control">
						<input v-model="nickname" v-bind:class="{'is-danger' : missingNickname, 'is-rounded' : enable, 'input' : enable}" required placeholder="Pseudo">
						<p v-show="missingNickname" class="help is-danger">Le champ doit être rempli</p>
					</div>
				</div>

				<div class="field">
					<label class="label">Age</label>
					<div class="control">
						<input v-model="age" v-bind:class="{'is-danger' : missingAge, 'is-rounded' : enable, 'input' : enable}" type="number" name="age" required placeholder="Age">
						<p v-show="missingAge" class="help is-danger">Le champ doit être rempli</p>
					</div>
				</div>

				<div class="field">
					<label class="label">Date de naissance</label>
					<div class="control">
						<input v-model="birth_date" class="input is-rounded" type="date" name="birth_date" required placeholder="Date de naissance">
					</div>
				</div>

				<div class="field">
					<label class="label">Email</label>
					<div class="control">
						<input v-model="email" v-bind:class="{'is-danger' : missingEmail, 'is-rounded' : enable, 'input' : enable}" type="text" name="email" required placeholder="Email">
						<p v-show="missingEmail" class="help is-danger">Le champ doit être rempli</p>
					</div>
				</div>

				<div class="field">
					<label class="label">Mot de passe</label>
					<div class="control">
						<input v-model="password" v-bind:class="{'is-danger' : wrongPassword, 'is-rounded' : enable, 'input' : enable}" type="password" name="psswd" required placeholder="Mot de passe">
						<p v-show="wrongPassword" class="help is-danger">Le mot passe doit contenir plus de 6 caractères</p>
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
		return {
			first_name : "",
			last_name: "",
			nickname: "",
			missingNickname : false,
			age: "",
			missingAge : false, 
			birth_date: "",
			email : "",
			missingEmail : false,
			password : "",
			wrongPassword: false,
			enable: true,
		}
	},
	methods : {
		register(){
			if(this.email.length > 0 && this.password.length > 6 && this.age.length > 0 && this.nickname.length > 0){
					let informations = {}
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
						this.$router.push("login")
					});
			} else {
				this.missingEmail = true;
				this.wrongPassword = true;
				this.missingNickname = true;
				this.missingAge = true;
			}

		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	

</style>
