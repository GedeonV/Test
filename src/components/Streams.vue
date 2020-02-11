<template>
	<div>
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
				<button @click="postStream()" class="button is-link">Envoyer</button>
			</div>
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

		},
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
