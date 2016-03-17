var $ = (function() {

  var opt, postData;
  var xhr = new XMLHttpRequest;

  var ajax = function(options) {
    setOptions(options);
    setEvents();
    makeURL();
    xhr.open(opt.type, opt.url, opt.async)
    setHeaders();
    send();
    return xhr;
  }

  var send = function() {
    if (opt.type === "POST") {
      xhr.send(postData)
    } else if (opt.type === "GET") {
      xhr.send()
    }
  }

  var setOptions = function(options) {
    opt = options;
    opt.async = opt.async || true;
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
      xhr.setRequestHeader(key, opt.headers[key])
    }
    if (opt.type === "POST") {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
  }

  var makeURL = function() {
    opt.url += "/"
    var data = [];
    for (var key in opt.data) {
        data.push(encodeURIComponent(key) + "=" + encodeURIComponent(opt.data[key]))
    }
    if (opt.type === "GET") {
      opt.url += ("?" + data.join("&"))
    } 
    else if (opt.type === "POST") {
      postData = data.join("&")
    }
  }

  var get = function(options) {
    var opt = options
    opt.type = "GET"
    ajax(opt)
  }

  var post = function(options) {
    var opt = options
    opt.type = "POST"
    ajax(opt)
  }

  return {
    ajax: ajax,
    get: get,
    post: post
  }

})();


var testAjaxHappy = {
  url: " http://jsonplaceholder.typicode.com/users",
  data: {
      id: 1
  },
  type: "GET",
  dataType : "json",
  async: true,
  headers: {"foo": 1, "bar": "bar"},
  success: function( json ) {
    alert("Successful call!");
  },
  error: function( xhr, status, errorThrown ) {
      alert( "Sorry, there was a problem!" );
      console.log( "Error: " + errorThrown );
      console.log( "Status: " + status );
      console.dir( xhr );
  },
  complete: function( xhr, status ) {
      alert( "The request is complete!" );
  }
}


var testGetSad = {
  url: "http://jsonplaceholder.typicode.com/users",
  data: {
      id: 200
  },  
  success: function( json ) {
    alert("Successful call! " + json);
  }
}


var testPostHappy = {
  url: "http://jsonplaceholder.typicode.com/users",
  data: {
      name: "paul rudd",
      movies: "I Love You Man"
  },
  success: function( json ) {
    alert("Successful call!  " + json);
  }
}



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


