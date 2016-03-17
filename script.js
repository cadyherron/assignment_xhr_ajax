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
// xhr.open("GET", "http://jsonplaceholder.typicode.com/users/1", true);
// xhr.send();


// THIS IS WHAT THE FUNCTION CALL WILL LOOK LIKE:
// $.ajax( {
//   // The URL (path) for the request
//   // The below would submit to http://www.yoursite.com/post
//   url: "post",
//   // the data to send (will be converted to a query string)
//   // note that this is an object
//   data: {
//       id: 123
//   },
//   // HTTP verb (aka "Type" of request)
//   type: "GET",
//   // the type of data we expect back
//   dataType : "json",
//   // Success callback to run if the request succeeds.
//   // The response is passed to the function
//   // as a variable, usually called `data` or `json`
//   success: function( json ) {
//       // for example, build a post object onto the body
//       $( "<h1/>" ).text( json.title ).appendTo( "body" );
//       $( "<div class=\"content\"/>").html( json.html ).appendTo( "body" );
//   },
//   // Error callback to run if the request fails
//   // (e.g. server returns an error code like 301)
//   // The raw request and any status codes are 
//   // passed to the callback
//   error: function( xhr, status, errorThrown ) {
//       alert( "Sorry, there was a problem!" );
//       console.log( "Error: " + errorThrown );
//       console.log( "Status: " + status );
//       console.dir( xhr );
//   },
//   // Complete callback to run regardless of the outcome
//   complete: function( xhr, status ) {
//       alert( "The request is complete!" );
//   }
// });


// test call:
// $.ajax( {
//   url: " http://jsonplaceholder.typicode.com/users",
//   data: {
//       id: 200
//   },
//   type: "GET",
//   dataType : "json",
//   async: true,
//   success: function( json ) {
//     alert("Successful call!");
//   },
//   error: function( xhr, status, errorThrown ) {
//       alert( "Sorry, there was a problem!" );
//       console.log( "Error: " + errorThrown );
//       console.log( "Status: " + status );
//       console.dir( xhr );
//   },
//   complete: function( xhr, status ) {
//       alert( "The request is complete!" );
//   }
// });



var $ = (function() {

  var opt, postData;
  var xhr = new XMLHttpRequest;


  var ajax = function(options) {
    setOptions(options);
    setEvents();
    makeURL();
    xhr.open(opt.type, opt.url, opt.async) // open
    setHeaders(); // add headers
    xhr.send() // send
    parseResponse();
  }


  var setOptions = function(options) {
    opt = options;
    // don't create errors if these are missing: 
    opt.error = opt.error || function() {};
    opt.success = opt.success || function() {};
    opt.complete = opt.complete || function() {};
  }


  var setEvents = function() {
    xhr.addEventListener("load", function() {
      // if successful, run opt.success
      if (this.status >= 200 && this.status < 300) {
        opt.success(this.response, this.statusText, this)
      }
      // otherwise, run opt.error
      else {
        opt.error(this, xhr.status, xhr.statusText)
      }
      // run the complete function, regardless of success/error
      opt.complete(this, xhr.statusText)

    })
  }


  var setHeaders = function() {
    for (var key in opt.headers) {
      xhr.setRequestHeader(key, opt.headers[k])
    }
  }


  var makeURL = function() {
    if (opt.type === "GET") {
      for (var key in opt.data) {
        opt.url = opt.url + "/" + opt.data[key]
      }
    } else {

    }
  };


  var parseResponse = function(callback) {
    callback(console.log(xhr.response))
  }


  var get = function() {
    opt.type = "GET"
    ajax({
      url: url,
      data: data,
      success: success,
      dataType: dataType
    })
  }




  return {
    ajax: ajax,

  }



})();