 // GlobalStuff

// var avgPrice, priceRange, britMoney, woodStuff, manyMaterials, artisanTrinkets;
//**********
//**********

// answer 1

function priceAvg(arr){
    var sum = 0;
    arr.forEach( function( item ){
    sum = sum + item.price;
    return sum
  });
  var avg = sum / arr.length; 
  return avg;
}
var avgPrice = priceAvg( items ).toFixed( 2 );
$('#a1').text( 'The average price is $' + avgPrice );
// var prices = items.map( function( item ){
//   return item.price
// });

//********************

// answer 2

var inMyBudget = items.filter( function( item ){
  return ( item.price >= 14
    && item.price <= 18 )
  }) .map( function( item ) {
      return item.title
});
    console.log( inMyBudget );

  inMyBudget.forEach( function( item ){
    var $listElement = $( '<li></li>' );
    $listElement.append( item );
    $('h5').text('These are the items in your price range:');
    $('#a2').append( $listElement );
  });

// // console.log( priceRanger( items ) );
// var a2 = document.querySelector( '#a2' );
// a2.textContent = inMyBudget;

//********************
/// answer 3

var britStuff = items.filter( function( item ){
  return item.currency_code === 'GBP'
}).forEach( function( item ){
  $('#a3').text( item.title + ' £' + item.price);   
})

//********************
/// answer 4

var woodstuff = items
  .filter( function( item ){
    return ( item.materials.indexOf('wood' !== -1))
  }) .map( function( woodthing ){
      return '<li>'+ woodthing.title + '</li>'
  });

$('#a4').append( woodstuff )

//********************
  // answer 5

//var a5 = document.querySelector('#a5');
$('#a5')
// console.log( a5 );

// a5.textContent =
 
// console.log( 


  var manyThings = items.filter( function( item ){
    return item.materials.length >= 9;
  });
 console.log( manyThings );
 
manyThings.forEach(function( thing ){
  var item = '<h5><h5/>'
  $('#a5').text(  thing.title + '<br>' ) 
});

console.log( manyThings);

//********************
// answer 6
var artisanTrinkets = items.filter(function( item ){
  if ( item.who_made === 'i_did' ){
    return true;
  }
});
$('#a6').text('There are '+artisanTrinkets.length+' handmade artisan trinkets in my store')
