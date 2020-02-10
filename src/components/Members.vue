<template>
	<div>
		<div v-if="!currentMember">
			<ul>
				<li v-for="member in allMembers">
					<router-link :to="{
								name: 'member',
								params: { id: member.id }
					}">
					<v-gravatar :email="member.email"/> {{member}}
					</router-link>
				</li>	
			</ul>
		</div>
		<div v-if="currentMember">
			<v-gravatar :email="currentMember.email"/>
			<h1 class="title">{{currentMember.fullname}}</h1>
			<h2 class="subtitle">Créer le : {{currentMember.created_at}}</h2>
			<h2 class="subtitle">Email : {{currentMember.email}}</h2>
			<hr>
			<h1 class="title">Derniers messages :</h1>
			<ul>
				<li></li>
			</ul>
			<hr>
			<button v-if="this.$store.state.member.id != currentMember.id" @click="deleteMember()" class="button is-danger is-outlined">Supprimer</button>
		</div>
	</div>
</template>

<script>
	export default{

		methods: {
			showProfile(id){
				//console.log(id);
				this.getMembers(id);
				this.currentMember = this.getMembers(id)

			},
			loadMembers(){
				//this.allMembers = this.$store.state.members
				axios.get('members').then(response => {
					this.allMembers = response.data
          		})
				this.currentMember = false
			},
			onRouteChange(){
				if(this.$route.params.id){
					this.showProfile(this.$route.params.id);
				} else {
					this.loadMembers();
				}
			},
			deleteMember(){
				axios.delete('members/'+this.currentMember.id)
				.then(response => alert(response.data.message))
				this.$router.push('/members')
				this.loadMembers()
			}
		},

		data(){
			return {
				allMembers : null,
				currentMember : false
			}
		},

		watch:{
		    $route (to, from){
		    	this.onRouteChange();
		    }
		}, 	

		mounted(){
			if(this.$route.params.id){
				this.showProfile(this.$route.params.id);
			} else {
				this.loadMembers();
			}
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	img{
		border-radius: 50%;
	}
</style>
