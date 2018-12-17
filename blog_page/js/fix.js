  $( document ).ready( function() {
    var jbOffset = $( ".top" ).offset();
      console.log(jbOffset);
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > jbOffset.top ) {
        $( '.top' ).addClass( 'jbFixed' );
      }
      else {
        $( 'top' ).removeClass( 'jbFixed' );
      }
    });
  } );