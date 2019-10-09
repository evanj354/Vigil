
var config = {
  apiKey: "AIzaSyAZMASVmLHKGFd4cn73sWslnmzb3v5te7g",
  authDomain: "vigilrs-123.firebaseapp.com",
  databaseURL: "https://vigilrs-123.firebaseio.com",
  projectId: "vigilrs-123",
  storageBucket: "vigilrs-123.appspot.com",
  messagingSenderId: "562799414989"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

var reference = database.ref('users/teachers/');


var safeZones = [];
var unsafeZones = [];
var teacher_info = [];
var my_map = 0;
reference.on("value", function(user_names){
    var length = user_names.numChildren();
    var count = 0;

    user_names.forEach(function(user_info){
        teacher_info[count++]= [user_info.child("/name").val(), user_info.child("/status").val() , user_info.child("/latitude").val(), user_info.child("/longitude").val(), user_info.child("/room").val(), user_info.child("/headcount").val()];
    });
    initMap();
});





function initMap() {
    if(!teacher_info.length){
        return;
    }

    my_map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: new google.maps.LatLng(37.349642, -121.938987),
        
        styles: [
            {
                "elementType": "geometry",
                "stylers": [{
                    "color": "#1d2c4d"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#8ec3b9"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#1a3646"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#4b6878"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#64779e"
                }]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#4b6878"
                }]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#334e87"
                }]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#023e58"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#283d6a"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#6f9ba5"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#1d2c4d"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#023e58"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#3C7680"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#304a7d"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#98a5be"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#1d2c4d"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2c6675"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#255763"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#b0d5ce"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#023e58"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#98a5be"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#1d2c4d"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#283d6a"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#3a4762"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#0e1626"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#4e6d70"
                }]
            }
		]
        
    });
    var marker, i;

    console.log("entering for loop");
    for (i = 0; i < teacher_info.length; ++i) {
        if(teacher_info[i][1] == "safe"){
            marker=new google.maps.Marker({
                position: new google.maps.LatLng(teacher_info[i][2],teacher_info[i][3]),
                map: my_map,
                title: teacher_info[i][0],
                icon:{
					url: 'green-symbol.png',
					scaledSize: new google.maps.Size(27,27),
                    anchor: new google.maps.Point(16,16),
                    origin: new google.maps.Point(0,0)
				}
            });
        }
        else if(teacher_info[i][1] == "unsafe"){       
            marker=new google.maps.Marker({
                position: new google.maps.LatLng(teacher_info[i][2],teacher_info[i][3]),
                map: my_map,
                title: teacher_info[i][0],
                icon: {
					url: 'red-symbol.png',
					scaledSize: new google.maps.Size(16, 16),
                    anchor: new google.maps.Point(10,10),
                    origin: new google.maps.Point(0,0)
				}
            });
        }

        var prev_infowindow = false;

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function(){
                if(prev_infowindow){
                    prev_infowindow.close();
                }

                prev_infowindow = new google.maps.InfoWindow({
                  content: 'room ' + teacher_info[i][4] + ' is ' + teacher_info[i][1] + ' with ' + teacher_info[i][5] + ' students'
                });
                
                prev_infowindow.open(my_map, marker);
            }
        })(marker, i));
    }

}


function updateStatus(){
    var room = String(document.getElementsByName("room_number")[0].value);
    var headcount = String(document.getElementsByName("headcount")[0].value)
    var status = document.getElementsByName("yes_no");
    if(status[0].checked){
        status = status[0].value;
    }
    else{
        status = status[1].value;
    }
    var teacher_ref = database.ref('users/teachers/navid');
    teacher_ref.update ({
        "room": room,
        "headcount": headcount,
        "status": status
    });
}





