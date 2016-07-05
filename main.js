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

var a1 = document.querySelector('#a1');
console.log( a1 );

a1.textContent = priceAvg( items );

//********************

// answer 2

var inMyBudget = items.filter( function( item ){
  return ( item.price >= 14
    && item.price <= 18 )
  })
    .map( function( item ) {
      return item.title
});

// console.log( priceRanger( items ) );
var a2 = document.querySelector( '#a2' );
a2.textContent = inMyBudget;

//********************
/// answer 3

var a3 = document.querySelector('#a3');
var britStuff = items.filter( function( item ){
  return item.currency_code === 'GBP'
});

britStuff.forEach( function( item ){
  a3.innerHTML += item.title + ': £' + item.price; 
})



//********************
/// answer 4

var woodstuff = items
  .filter( function( item ){
    return ( item.materials.indexOf('wood' !== -1))
  })
    .map( function( woodthing ){
      return '<p>'+ woodthing.title +'</p>'
  });

var a4 = document.querySelector('#a4');
a4.innerHTML = woodstuff;

//********************
  // answer 5

//var a5 = document.querySelector('#a5');

// console.log( a5 );

// a5.textContent =
 
// console.log( 

// function manyThings(arr){
//   arr.filter( function( item ){
//     return item.materials.length >= 9;
//   })
//     .map(function(item){
//       return
//        { 
//           title: item.title, 
          // howMany: item.materials.length, 
          // allMaterials: item.materials 
//         }
//     });
// }




// console.log( manyThings( items ) );

//********************
// answer 6
// var artisanTrinkets = items.filter(function( item ){
//   if ( item.who_made === 'i_did' ){
//     return true;
//   }
// });

// var a6 = document.querySelector('#a6');
// a6.textContent = 'There are ' + artisanTrinkets.length + ' handmade artisan trinkets';
