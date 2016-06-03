var clicks= 0;

// jQuery setup
$(document).ready(function(){
  // FUNCTION 1: creates Generate button and click events
  $('#generateRow').on('click', function(){
    // increments clicks to use in output of number of times clicked
    clicks++;
    // creates new container div row with yellow background color
    var newContainer = document.createElement('div');
    newContainer.className='container';
    $(newContainer).css({'background-color': 'yellow'});
    // creates new button Change inside div to change the background color upon click event
    var changeButton = document.createElement('button');
    changeButton.textContent='Change';
    changeButton.className = 'change';
    newContainer.appendChild( changeButton );
    // creates new button Delete which deletes that container div upon click event
    var deleteButton = document.createElement('button');
    deleteButton.textContent='Delete';
    deleteButton.className = 'delete';
    newContainer.appendChild( deleteButton );
    // appends the newly created container div to the DOM in body
    $('body').append( newContainer );
    // sets the value of <p> in the DOM to the newly incremented number of clicks
    $('p').text( clicks );
  });

  //FUNCTION 2: changes background color of div upon click event
  $(document).on('click', '.change', function(){
    var parent = $(this).parent();     // finds parent of clicked button which is div
    var parentClass = parent.attr('class');
    // conditional to change backbround color depending upon value of current color
    if( parentClass == 'red'){
      parent.removeClass().addClass('yellow');
      parent.css({ 'background-color': 'yellow' });
    }else{
      parent.removeClass().addClass('red');
      parent.css({'background-color': 'red'});
    }
  });
  // FUNCTION 3: deletes current div upon click event
  $(document).on('click', '.delete', function(){
    $(this).parent().remove();
  });

});
