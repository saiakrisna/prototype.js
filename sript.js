

// Buatlah method pada string yang dapat mengembalikan nilai
// string itu sendiri dalam keadaan terbalik
// Contoh:
// thor -> roht
// rusak -> kasur

//The above function is a function that, once defined, will exist for every string
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
  };

  console.log("Hello guys!!!".reverse());//!!!syug olleh
  
  
  //sc:https://cwestblog.com/2011/10/07/javascript-snippet-string-prototype-reverse/




  // Buatlah method pada number bernama ‘isPrima()’ yang dapat
// mengembalikan nilai boolean ‘true’ jika number tersebut
// merupakan bilangan prima
// Contoh:
// 7.isPrima() -> true
// 6.isPrima() -> false


Number.prototype.isPrima = function() {
   // this keyword refers to number object
    if ( this === 0 || this === 1 ) {
        return false;
    }
    for ( let i = 2; i < this; i++ ) {
        if ( this % i === 0 ) {
            return false;
        }
    }
    return true;
};

let numb = [2,4,];

for ( var i = 0; i < numb.length; i++ ) {
    console.log(numb[i].isPrima());
}


//sc:https://stackoverflow.com/questions/23045746/understanding-number-functions-in-javascript?noredirect=1&lq=1