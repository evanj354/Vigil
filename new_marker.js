<!DOCTYPE html>
<html>
  <head>
    <style>
      #map {
        height: 400px;
        width: 100%;
       }
    </style>
  </head>
  <body>
    <h3>My Google Maps Demo</h3>
    <div id="map"></div>
    <script>
      function initMap() {
        var myPosition = {lat: 37.349642, lng: -121.938987};
        var markedPosition = {lat: 37.449642, lng: -121.838987}
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: myPosition
        });
        var marker = new google.maps.Marker({
          position: myPosition,
          map: map,
          title: 'SCU'
        });
        map.addListener('center_changed', function() {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function() {
            map.panTo(marker.getPosition());
        }, 3000);
        });

        marker.addListener('click', function() {
          map.setZoom(10);
          map.setCenter(marker.getPosition());
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0Oft58Xy_ABt9PMh9A7OmgqdqHZnS-S4&callback=initMap">
    </script>
  </body>
</html>