// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("GET", "http://jsonplaceholder.typicode.com/users", true);
// xhr.send();


// // Create a post
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("POST", "http://jsonplaceholder.typicode.com/posts", true);
// xhr.send("title=Foo&body=Bar&userId=1");


// // Create a valid get
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("GET", "http://jsonplaceholder.typicode.com/users/1", true);
// xhr.send();


// // Create an invalid user get
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("GET", "http://jsonplaceholder.typicode.com/users/100", true);
// xhr.send();



var $ = {
  ajax: function(options) {
      options.complete:  function() {

      },
     error: function() {

     },
     success: function() {

     },
     data: {},
     url: {},
     headers: {},
     errors: {},
     success: {},
     async: true
}