$(document).ready(function() {

  new WOW().init();

  $('body').scrollspy({
    target: '.dotted-scrollspy'
  });


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

  // Device Compatibility
      // Copyright 2014-2015 Twitter, Inc.
      // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
      // IE 10
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
          document.createTextNode(
            '@-ms-viewport{width:auto!important}'
          )
        )
        document.head.appendChild(msViewportStyle)
      }

      // Android Stock Browser
      $(function () {
        var nua = navigator.userAgent
        var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
        if (isAndroid) {
          $('select.form-control').removeClass('form-control').css('width', '100%')
        }
      })

});
