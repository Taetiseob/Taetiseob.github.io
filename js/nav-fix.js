  $( document ).ready( function() {
    var jbOffset = $( ".logo" ).position();
      console.log(jbOffset);
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > jbOffset.top ) {
        $( 'header' ).addClass( 'jbFixed' );
          $('section').addClass('section_fake');
      }
      else {
        $( 'header' ).removeClass( 'jbFixed' );
          $('section').removeClass('section_fake');
      }
    });
  } );