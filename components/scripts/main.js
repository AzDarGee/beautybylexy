// Initialize BootStrap Material Design
// $.material.init()

$(document).ready(function() {



  new WOW().init();

  $('body').scrollspy({
    target: '.dotted-scrollspy'
  });


  // Map for contacting me
  function init_map() {
      var var_location = new google.maps.LatLng(45.345200, -75.918986);

      var var_mapoptions = {
          center: var_location,
          zoom: 14,
          draggable: false,
          disableDoubleClickZoom: true,
          zoomControl: false,
          scaleControl: false,
          rotateControl: false,
          fullscreenControl: false,
          scrollwheel: false,
          navigationControl: false
      };

      var var_marker = new google.maps.Marker({
          position: var_location,
          map: var_map,
          title: "Ottawa"
      });

      var var_map = new google.maps.Map(document.getElementById("map-container"),
          var_mapoptions);

      var_marker.setMap(var_map);

  }

  google.maps.event.addDomListener(window, 'load', init_map);

  // APlayer

  var option = {
    element: document.getElementById('player1'),                       // Optional, player element
    narrow: false,                                                     // Optional, narrow style
    autoplay: false,                                                    // Optional, autoplay song(s), not supported by mobile browsers
    showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
    mutex: true,                                                       // Optional, pause other players when this player playing
    theme: '#e6d0b2',                                                  // Optional, theme color, default: #b7daff
    mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
    preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    listmaxheight: '513px',                                             // Optional, max height of play list
    music: {                                                           // Required, music info, see: ###With playlist
        title: 'Tropical Mix 2017',                                          // Required, music title
        author: 'Kygo & ChainSmokers',                                  // Required, music author
        url: 'https://s3.ca-central-1.amazonaws.com/www.beautybylexyyy.com/dist/music/2017ChainSmokers%26Kygo-Tropical.mp3',  // Required, music url
        pic: 'https://s3.ca-central-1.amazonaws.com/www.beautybylexyyy.com/dist/images/profile/music-pic.png',  // Optional, music picture
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'                   // Optional, lrc, see: ###With lrc
    }
  }

  var ap = new APlayer(option);



});
