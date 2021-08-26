
  const locations = [
    {lat:-25.436902826636604, lng: -49.25751842163817},
    {lat: -25.434577499383817, lng: -49.256241690227014},
    {lat:-25.43596301228264, lng: -49.26251805907601 },
    {lat: -25.43922810905567, lng: -49.270596872569094},
    {lat:-25.44690775406794, lng: -49.29424760072968},
    {lat: -25.44940722317197, lng: -49.303281280433914},
    {lat: -25.448528035797576, lng: -49.30738243797654},
    {lat: -25.45064965291946, lng: -49.31495699603844},
    {lat:-25.452173394144616, lng: -49.32534206175093},
    {lat:-25.44927678431212, lng: -49.33076012398993},
];

var count = 0;
var marker = null;
var map = null; 

function initMap() {
    console.log(' initMap. . . ');
    const position = null;
    const rodoCwb = { lat: -25.43684810378758, lng: -49.25734561482979 };
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: rodoCwb,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    updateLocation();
    setInterval(updateLocation, 33000);
  };


function updateLocation(){

    if(marker){
        marker.setMap(null);
    }

    count++;
    if(count >= locations.length){
        count = 0;
    }

    var _location =  locations[count];

    marker = new google.maps.Marker({
        position: _location,
        map: map,
        icon: 'bus_icon.png',
    });

    document.getElementById("finish_at").innerHTML = "18:37  (1h "+(60-count)+" min).";

    var _now = new Date(); 

    document.getElementById("update_at").innerHTML = _now.getHours()+":"+_now.getMinutes()+":"+_now.getSeconds();

    map.panTo(_location);

  };
  