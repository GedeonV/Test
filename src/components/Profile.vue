<template>
	<div>
		<v-gravatar :email="currentUser.email"/>
		<h1 class="title">{{currentUser.nickname}}</h1>
		<h2 class="subtitle">{{currentUser.first_name}} {{currentUser.last_name}}</h2>
		<h2 class="subtitle">Email : {{currentUser.email}}</h2>
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
