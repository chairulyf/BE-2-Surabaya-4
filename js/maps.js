
  function initMap() {
    // Koordinat lokasi awal
    var myLatLng = {lat: -6.2088, lng: 106.8456};

    // Membuat objek peta
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12, // Tingkat zoom
      center: myLatLng // Pusat peta
    });

    // Membuat marker di lokasi awal
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Lokasi Saya'
    });
  }

