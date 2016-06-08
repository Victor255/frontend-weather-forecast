//My key cde8c106c3396508

$(document).ready(function() {

	/*this function will search for the name and the country entered by the user*/
	$("#SearchWeather").click(function(){
		var country = $("#country").val();
		var state = $("#state").val();
		var typeTemperature = $("input[name=temperature]:checked").val();

		if(country != "" && state != ""){

			$.ajax({
				url : "http://api.wunderground.com/api/cde8c106c3396508/conditions/q/" + country + "/" + state + ".json",
				data : "jsonp",

				/*This verifies if the names entered are incorrect*/
				success : function(json_parsed){
					try {
						var city = json_parsed["current_observation"]["display_location"]["full"];
					} catch(error) {
						alert("Write the correct names please!");
						location.reload();
					}
					/*This obtains data from the api json*/
					var weather = json_parsed["current_observation"]["weather"];
					var icon = json_parsed["current_observation"]["icon_url"];
					var wind = json_parsed["current_observation"]["wind_kph"];
					var temp_f = json_parsed["current_observation"]["temp_f"];
					var temp_c = json_parsed["current_observation"]["temp_c"];
					var humidity = json_parsed["current_observation"]["relative_humidity"];
					var latitude = json_parsed["current_observation"]["display_location"]["latitude"];
					var longitude = json_parsed["current_observation"]["display_location"]["longitude"];
					var elevation = json_parsed["current_observation"]["observation_location"]["elevation"];
					/*this hides several entries*/
					$(".to-hide").addClass("hide");
					$("#city").html(city);
					$("#weather").html(weather);
					$("#icon").html("<img src" + "=" + "'" + icon + "'" + "/>");
					$(".black").removeClass("hide");
					$("#wind").html(wind + " kph");
					$("#humidity").html(humidity);
					$("#latitude").html(latitude);
					$("#longitude").html(longitude);
					$("#elevation").html(elevation);
					$("#date").html(new Date());
					$("#new-search").removeClass("hide");
					if(typeTemperature === "fahrenheit"){
						$("#temperature").html(temp_f + " °F");
					} else {
						$("#temperature").html(temp_c + " °C");
					}
				}
			});
		} else {
			alert("Insert a Country and State plase!")
		}
	});

	/*This function will a new search*/ 
	$("#new-search").click(function(){
		location.reload();
		$(".to-hide").removeClass("hide");
		$(".see").addClass("hide");

	});
});
