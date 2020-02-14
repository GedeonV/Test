<template>
	<div class="container">
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
		<div v-if="!currentStream">
			<h1 class="title">Liste des diffusions en cours :</h1>
			<ul>
				<li v-for="stream in this.streams ">
					<router-link :to="{
						name: 'stream', 
						params: { id: stream.id_user }
					}">
					{{stream}}
				</li>
			</ul>
		</div>
		<div v-if="currentStream">
			<h1 class="title">{{currentStream.title}}</h1>
		</div>
	</div>
</template>

<script>
import io from 'socket.io-client';
export default {
	name : 'Streams',
	data() {
		return{
				title: '',
				description: '',
				streams : {},
				currentStream : false,
				socket : io('https://prj-redsquare.herokuapp.com/'),
			}
	},
	methods : {
		
		listenning(){
			this.socket.on('image', (data) => {
				console.log('data', data)
			})
		},

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
		},
		loadStream(){
			axios
			.get('streams/stream/'+this.$route.params.id).then(response => {
				this.currentStream = response.data;
				
			})
		},

		loadStreams(){
			axios
			.get('streams/').then(response => {
				console.log(response.data)
				this.streams = response.data
			})
		},

		onRouteChange(){
				if(this.$route.params.id){
					this.loadStream();
				} else {
					this.loadStreams();
				}
		}

	},
	watch:{
	    $route (to, from){
	    	this.onRouteChange();
	    }
	},
	mounted(){
		if(this.$route.params.id){
				this.loadStream();
			} else {
				this.loadStreams();
			}
		this.$bus.$on('reloadStream', this.loadStreams)
		setInterval(this.loadStreams, 15000)
		setInterval(this.listenning, 1000)
	}	
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
