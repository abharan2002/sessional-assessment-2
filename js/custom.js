const req = new XMLHttpRequest();
req.onload = function() {
    const data = JSON.parse(this.responseText);
    console.log(data);

    // Added random number for random post from 100's of data from api
    // post 1 Code
    var randomNumber = Math.floor(Math.random() * 100);

    const post1Data = data[randomNumber];

    const post1Title = document.querySelector("#post-1 h1");
    const post1Body = document.querySelector("#post-1 .in-content p");
    const post1UserId = document.querySelector("#post-1 .foot-post a");
    post1Title.textContent = post1Data.title;
    post1Body.textContent = post1Data.body;
    post1UserId.textContent = post1Data.userId;


    // Added random number for random post from 100's of data from api
    // post 2 Code
    randomNumber = Math.floor(Math.random() * 100);

    const post2Data = data[randomNumber];

    const post2Title = document.querySelector("#post-2 h1");
    const post2Body = document.querySelector("#post-2 .in-content p");
    const post2UserId = document.querySelector("#post-2 .foot-post a");
    post2Title.textContent = post2Data.title;
    post2Body.textContent = post2Data.body;
    post2UserId.textContent = post2Data.userId;

    // Added random number for random post from 100's of data from api
    // post 3 Code
    randomNumber = Math.floor(Math.random() * 100);

    const post3Data = data[randomNumber];

    const post3Title = document.querySelector("#post-3 h1");
    const post3Body = document.querySelector("#post-3 .in-content p");
    const post3UserId = document.querySelector("#post-3 .foot-post a");
    post3Title.textContent = post3Data.title;
    post3Body.textContent = post3Data.body;
    post3UserId.textContent = post3Data.userId;

    // Added random number for random post from 100's of data from api
    // post 4 Code
    randomNumber = Math.floor(Math.random() * 100);

    const post4Data = data[randomNumber];

    const post4Title = document.querySelector("#post-4 h1");
    const post4Body = document.querySelector("#post-4 .in-content p");
    const post4UserId = document.querySelector("#post-4 .foot-post a");
    post4Title.textContent = post4Data.title;
    post4Body.textContent = post4Data.body;
    post4UserId.textContent = post4Data.userId;

    // Added random number for random post from 100's of data from api
    // post 5 Code
    randomNumber = Math.floor(Math.random() * 100);

    const post5Data = data[randomNumber];

    const post5Title = document.querySelector("#post-5 h1");
    const post5Body = document.querySelector("#post-5 .in-content p");
    const post5UserId = document.querySelector("#post-5 .foot-post a");
    post5Title.textContent = post5Data.title;
    post5Body.textContent = post5Data.body;
    post5UserId.textContent = post5Data.userId;

    // Added random number for random post from 100's of data from api
    // post 6 Code
    randomNumber = Math.floor(Math.random() * 100);

    const post6Data = data[randomNumber];

    const post6Title = document.querySelector("#post-6 h1");
    const post6Body = document.querySelector("#post-6 .in-content p");
    const post6UserId = document.querySelector("#post-6 .foot-post a");
    post6Title.textContent = post6Data.title;
    post6Body.textContent = post6Data.body;
    post6UserId.textContent = post6Data.userId;


}

req.onerror = function() {
    console.log("ERROR!!!!");
    length.log(this);
}

req.open("GET","https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09");
req.send();


