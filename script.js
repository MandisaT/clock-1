$(document).ready(function(){

	var nextTick = setInterval(function(){

		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var ms = time.getMilliseconds();

		$('#hr').text(hr);
		$('#min').text(min);
		$('#sec').text(sec);
		$('#ms').text(ms);

	
	////// this part changes the font color odd/even every min  //////

	   if (min%2 == 0){
			$("#min").css("color", "red");
	   } else {
			$("#min").css("color", "white");	
	   }

	  //  if (min%5 == 0){
			// $
	  //  } else {
			
	  //  }

	if(min == 0 && ms<10){
		somethingFive();
	};  ///  bu the hour 





////////////////// this part changes the background color evry 5min////////////
				setInterval(function(){
				var hex = Array( 0,1,2,3,"A","B","C");
				var r = hex[Math.floor(Math.random()*hex.length)];
				var g = hex[Math.floor(Math.random()*hex.length)];
				var b = hex[Math.floor(Math.random()*hex.length)];
			var hex = "#"+r+g+b;
			$("body").css("background-color",hex);
				},10000)


//////////////// this part changes the text color every hour //////
				// if( min==0){
				// 	somethingFive();
				// }
			somethingFive(function(){
				var hex = Array( 0,5,6,7,8,"A","B","C","D","E");
				var r = hex[Math.floor(Math.random()*hex.length)];
				var g = hex[Math.floor(Math.random()*hex.length)];
				var b = hex[Math.floor(Math.random()*hex.length)];
				var hex = "#"+r+g+b;
				$("h1").css("color",hex);
			});
				 



});

});

