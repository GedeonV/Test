<template>
	<div>
		<div>
			Position actuelle :  {{infopos}}
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
		infopos : ''
	},

	methods : {
		findPosition(position){
			this.infopos += "Latitude : "+position.coords.latitude +"\n";
			this.infopos += "Longitude: "+position.coords.longitude+"\n";
			this.infopos += "Altitude : "+position.coords.altitude +"\n";
			console.log(this.infopos)
		}
	},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
