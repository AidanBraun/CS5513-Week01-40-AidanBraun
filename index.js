

let myhttp = require('http');


let myserver = myhttp.createServer(
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    let mytext;
    if ( myrequest.url === "/superSecretPasscode" ) {
      mytext = "Access granted! Welcome into my web server!";
    } else {
      mytext = "Access has been denied!";
    }
    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    myresponse.end( mytext );
  }
);

myserver.listen(8080, "0.0.0.0");

console.log("myserver has started");