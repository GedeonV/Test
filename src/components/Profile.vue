<template>
	<div>
		<v-gravatar :email="currentUser.email"/>
		<h1 class="title">{{currentUser.nickname}}</h1>
		<h2 class="subtitle">{{currentUser.last_name}} {{currentUser.first_name}}</h2>
		<h3 class="title is-3">{{currentUser.age}}</h3>
		<h2 class="subtitle">Email : {{currentUser.email}}</h2>
		<h2 class="subtitle">Créer le : {{currentUser.created_at}}</h2>
		
	</div>
</template>

<script>
	export default{
		methods: {

		},

		data(){
			return {
				currentUser: this.$store.state.user
			}
		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	img{
		border-radius: 50%;
	}
</style>
