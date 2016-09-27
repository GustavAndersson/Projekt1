var myCenter = new google.maps.LatLng(56.480126619009006, 14.09721851348877);

function initialize() {
var mapProp = {
center:myCenter,
zoom:12,
scrollwheel:true,
draggable:true,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
position:myCenter
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

