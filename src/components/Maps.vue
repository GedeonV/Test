<template>
	<div class="container">
		<div v-if="errorStr">
		    Sorry, but the following error
		    occurred: {{errorStr}}
		</div>
	  
	  	<div v-if="gettingLocation">
	    	<i>Getting your location...</i>
	  	</div>
	  
	  	<div v-if="location">
	    	Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}
	  	</div>
	</div>
</template>

<script>
	export default {
		name : 'Maps',
		data(){
			return {
				location: null
		    	gettingLocation: false
		    	errorStr: null
			}
		},
		mounted() {
			if(!("geolocation" in navigator)) {
		      this.errorStr = 'Geolocation is not available.';
		      return;
		    }

		    this.gettingLocation = true;
		    // get position
		    navigator.geolocation.getCurrentPosition(pos => {
		      this.gettingLocation = false;
		      this.location = pos;
		    }, err => {
		      this.gettingLocation = false;
		      this.errorStr = err.message;
		    })
		},

		methods :{
			
		},
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
