<template>
	<div class="container">
		<div v-if="errorStr">
		    Désolé une erreur est apparue : {{errorStr}}
		</div>
	  
	  	<div v-if="gettingLocation">
	    	<i>Récupération de votre localisation...</i>
	  	</div>
	  
	  	<div v-if="location">
	    	Votre localisation est {{ location.coords.latitude }}, {{ location.coords.longitude}}
	  	</div>
	</div>
</template>

<script>
	export default {
		name : 'Maps',
		data(){
			return {
				location: null,
		    	gettingLocation: false,
		    	errorStr: null,
			}
		},
		mounted() {
			if(!("geolocation" in navigator)) {
		      this.errorStr = 'Le service de géolocalisation n\'est pas disponnible';
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
