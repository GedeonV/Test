<template>
	<div>
		<div v-if="this.$store.state.user">
			<div class="field">
				<label class="label">Titre</label>
				<div class="control">
					<input v-model="title" class="input is-rounded" type="text" name="title" placeholder="Titre du flux vidéo">
				</div>
			</div>

			<div class="field">
	  			<div class="control">
	    			<textarea v-model="description" class="textarea is-info" placeholder="Description de votre diffusion"></textarea>
	  			</div>
			</div>
				
			<div class="field">
				<div class="control">
					<button @click="postStream()" class="button is-link">Lancer la diffusion</button>
				</div>
			</div>
			<hr>
		</div>
		<div>
			<h1 class="title">Liste des flux en cours :</h1>
		</div>
	</div>
</template>

<script>
export default {
	name : 'Streams',
	data() {
		return{
				title: '',
				description: '',
			}
	},
	methods : {
		postStream(){
			let streamData = {}
			streamData.user_id = this.$store.state.user.user_id
			streamData.title = this.title
			streamData.description = this.description
			console.log(streamData)
			/*axios
			.post('streams/stream',streamData).then(response => {
				console.log(response.data) 
			},*/
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
