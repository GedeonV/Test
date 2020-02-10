<template>
	<div>
		<div>
			Position actuelle : {{latitude}}, {{longitude}}, {{altitude}}
		</div>
	</div>
</template>

<script>
	export default{
	
	mounted(){
		if(navigator.geolocation)
  			navigator.geolocation.getCurrentPosition(this.findPosition);
	},		

	data(){
		latitude: ''
		longitude: ''
		altitude: ''
	},

	methods : {
		findPosition(position){
			this.latitude = position.coords.latitude
			this.longitude = position.coords.longitude
			this.altitude = position.coords.altitude
		}
	},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
