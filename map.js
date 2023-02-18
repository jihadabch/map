var live=false;
var share;
document.getElementById("location").addEventListener("click",()=>{
	
	share=navigator.geolocation.watchPosition(
		function(position){
			document.getElementById("alert").innerHTML=`<div class="alert alert-success" 
		role="alert">
 Location is Sharing Successfully!
</div>`
			document.getElementById("map").innerHTML=`<iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=35.84150075912476%2C34.398103888560726%2C35.842959880828865%2C34.3994804733388&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=19/34.39879/35.84223">View Larger Map</a></small>`
		},
		function(error){
		switch (error.code) {
			case error.PERMISSION_DENIED:
			document.getElementById("alert").innerHTML=`<div class="alert alert-warning" role="alert">
			A simple warning alert—check it out!
		  </div>`
				break;
		
			case error.POSITION_UNAVAILABLE:
				document.getElementById("alert").innerHTML=`<div class="alert alert-warning" role="alert">
				A simple warning alert—check it out!
			  </div>`
				break;
		}
		},
	)
	
	if(live===false){
		
		document.getElementById("location").innerHTML="Stop Sharing"
		live=true
	}else{
		
		document.getElementById("alert").innerHTML=`<div class="alert alert-success" 
		role="alert">
   Sharing Stopped Successfully!
</div>`
		navigator.geolocation.clearWatch(share)
		document.getElementById("location").innerHTML="Set My Location"
		
		live= false
	}
});



class Image{
	constructor(){
		this.locatio_images=[];
this.locatio_images[0]="loca.jpg";
this.locatio_images[1]="locat.jpg";
this.locatio_images[2]="locati.jpg";

this.server=0;



setInterval(() => {
	this.setimage();
}, 2000);

	}
	
	
	setimage(){
		if(this.server<this.locatio_images.length -1){
			this.server++
		}else{
			this.server=0;
		}
		document.slider.src=this.locatio_images[this.server]
	}
	
	
};

onload = new Image();
