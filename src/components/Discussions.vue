<template>
	<div>
		<div v-if="currentChannel== null" class="container">
			<div class="field">
				<label class="label">Nom</label>
				<div class="control">
					<input v-model="chan_name" class="input is-rounded" type="text" name="chan_name" placeholder="Nom de la discussions">
				</div>
			</div>

			<div class="field">
				<label class="label">Sujet</label>
				<div class="control">
					<input v-model="topic" class="input is-rounded" type="text" name="topic" placeholder="Sujet de la discussions">
				</div>
			</div>
			<div class="field">
				<div class="control">
					<button @click="submit()" class="button is-link">Envoyer</button>
				</div>
			</div>
			<ul>
				<li v-for="item in this.channels">
					<router-link :to="{
						name: 'discussion', 
						params: { id: item.id }
					}">
						<p>{{item}}</p>
					</router-link>
				</li>
			</ul>
		</div>
		<hr>
		<div v-if="currentChannel">
			<h1 class="title">Messages: </h1>
			<p v-if="this.messages.length == 0">Aucun messages trouvés</p>
			<ul v-else>
				<li v-for="msg in this.messages">
					<router-link :to="{
								name: 'member',
								params: { id: msg.member_id}
					}">
					{{getMemberName(msg.member_id)}}
					</router-link>
					<span>:</span>
					{{msg.message}}
					<a v-if="$store.state.member.id == msg.member_id" @click="deleteMsg(msg.id)">
						<span class="icon has-text-danger">
	  						<i class="fas fa-trash-alt"></i>
						</span>
					</a>
					<hr>
				</li>
			</ul>
			<div class="field">
				<div class="control">
					<input @keyup.13="sendMessage()" v-model="message" class="input is-rounded" type="text" name="message" placeholder="Envoyer un message">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods :{

			submit(){
				let data = {}
				data.label = this.chan_name
				data.topic = this.topic 
				axios
				.post('channels',data)
				.then(response => console.log(response.data))
			},
			loadChannel(){
				axios.get('channels/'+this.$route.params.id).then(response => {
					this.currentChannel = response.data;
					this.loadMsg();
					this.loadChannels();
				})
			},
			loadChannels(){
				axios
				.get('channels')
				.then(response => {
					this.channels = response.data;
				});
			},
			loadMsg(){
				if(this.currentChannel){
					axios
					.get('channels/'+this.currentChannel.id+'/posts')
					.then(response => {
						console.log("Messages loaded");
						this.messages = response.data.reverse();
					});
				}
			},
			sendMessage(){
				let msgData = {};
				msgData.message = this.message
				axios
					.post('channels/'+this.currentChannel.id+'/posts', msgData)
					.then(response => {
						console.log("Messages sended");
						this.loadMsg()
						this.message = ""		
					});
			},
			deleteMsg(id){
				axios.delete('channels/'+this.currentChannel.id+'/posts/'+id)
				.then(response => {
					console.log(response.data)
					this.loadMsg()
				})
			},
			onRouteChange(){
				if(this.$route.params.id){
					this.loadChannel();
				} else {
					this.loadChannels();
				}
			}
		}, 
		data(){
			return {
				currentChannel : null,
				channels : null,
				messages : [],
				topic : '',
				chan_name: '',
				message: '',
//				token: this.$store.state.user_token
			}
		},
		watch:{
		    $route (to, from){
		    	this.onRouteChange();
		    }
		}, 		
		mounted(){
			if(this.$route.params.id){
				this.loadChannel();
			} else {
				this.loadChannels();
			}
			this.$bus.$on('reloadChannel', this.loadChannel);
			setInterval(this.loadChannel, 5000)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.fas {
		cursor: pointer
	}

</style>
