window.addEventListener("load",e => {


    /* Add "https://api.ipify.org?format=json" statement
               this will communicate with the ipify servers in
               order to retrieve the IP address $.getJSON will
               load JSON-encoded data from the server using a
               GET HTTP request */

     
    // Add "https://ipinfo.io" statement
    // this will communicate with the ipify servers
    // in order to retrieve the IP address
    let ip;
	$.get("https://ipinfo.io", function(response) {
           	ip = response.ip
        }, "json")
         
        // "json" shows that data will be fetched in json format

	$('.send').on('click', function(){
	
	  $.getJSON('https://ipapi.co/'+ip+'/json', function(data){
	      $('.city').text("You are in " + data.city);


				});
})
});