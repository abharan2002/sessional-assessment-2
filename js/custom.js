const req = new XMLHttpRequest();
var data;
req.onload = function() {
    data = JSON.parse(this.responseText);
    console.log(data);
}

req.onerror = function() {
    console.log("ERROR!!!!");
    length.log(this);
}

req.open("GET","https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09");
req.send();