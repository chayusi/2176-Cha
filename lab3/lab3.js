var http = require("http");

var server = http.createServer(function (req, res) {
if (req.url == '/') {

res.writeHead(200, {'Content-Type': 'text/html' });

res.write(' <hmtl><body><p> Welcome to my Node.js Application </p></body><//hmtl>');
res.end('Welcome John Smith. This is an activity about basics of Node.js\n');
function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.fullName = function () {
    return firstName + ' ' + lastName;
  };
}
module.exports = person;
}

else if(req.url =='/about') {
res.writeHead(200, {'Content-Type': 'text/html' });
res.write(' <hmtl><body><p> This is the About Page </p></body><//hmtl>');
res.end(' Hello John Smith. This activity will teach on how to deal with a simple server and local modules in Node.js');
function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  
    this.fullName = function () {
      return firstName + ' ' + lastName;
    };
  }
  module.exports = person;
}

else if(req.url =='/contact') {
res.writeHead(200, {'Content-Type': 'text/html' });
res.write(' <hmtl><body><p> This is the Contact Page </p></body><//hmtl>');
res.end('John Smith, if you want additional details about this activity go to this site https://www.turorialsteacher.com/nodejs/nodejs-tutorials');
function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  
    this.fullName = function () {
      return firstName + ' ' + lastName;
    };
  }
  module.exports = person;
}

else if(req.url =='/gallery') {
res.writeHead(200, {'Content-Type': 'text/html' });
res.write(' <hmtl><body><p> This is the Gallery Page </p></body><//hmtl>');
res.end();
function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  
    this.fullName = function () {
      return firstName + ' ' + lastName;
    };
  }
  module.exports = person;
}

else
res.end('Invalid Request');

});
server.listen(5000);
console.log('Server running at http://LocalHost:5000/');