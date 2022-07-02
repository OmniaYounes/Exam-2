//tranding
var myHttp = new XMLHttpRequest();
var trendingMovies = [];

myHttp.open('GET' , `https://api.themoviedb.org/3/trending/all/day?api_key=cf03e9cd4f6887445f3de4007548929c`) ;

myHttp.send();

myHttp.addEventListener('readystatechange' , function(){
    
     if(myHttp.readyState ==4 && myHttp.status == 200)
    {
        trendingMovies = JSON.parse(myHttp.response).results;
        console.log("tranding");
        console.log(trendingMovies);
        displayItems();
    }

});

function displayItems(){
    var cartona = ``;

    for( var i = 0; i < trendingMovies.length; i++)
    {
        cartona += `             <div class="col-md-4 mb-4">
        <div class="poo">
            <img src='https://image.tmdb.org/t/p/w500${trendingMovies[i].poster_path}' class="w-100"> 
            <div class="layer">
              <h1>${trendingMovies[i].title}</h1>
              <h5>${trendingMovies[i].overview}</h5>
              <p>${trendingMovies[i].vote_average}</p>
              <p>${trendingMovies[i].release_date}</p>
            </div>
        </div>
    </div> `
    }

    document.getElementById('rowData').innerHTML = cartona;
};


var uName = document.getElementById('name')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var age = document.getElementById('age')
var password = document.getElementById('password')
var repassword = document.getElementById('repassword')
var validuName = document.querySelector(".valid-uName")
var validEmail = document.querySelector(".valid-email")
var validPhone = document.querySelector(".valid-phone")
var validAge = document.querySelector(".valid-age")
var validPass = document.querySelector(".valid-pass")
var validRePass = document.querySelector(".valid-repass")

function submit(){
    if (uName.value =="")
    validuName.innerHTML="Your Name is not valid";
    if (email.value =="")
    validEmail.innerHTML="Your Email is not valid";
    if (phone.value =="")
    validPhone.innerHTML="Your Phone is not valid";
    if (age.value =="")
    validAge.innerHTML="Your Age is not valid";
    if (password.value =="")
    validPass.innerHTML="Your password is not valid";
    if (repassword.value =="")
    validRePass.innerHTML="Your Re-password is not valid";

}


// //now playing
// myHttp.open('GET' , `https://api.themoviedb.org/3/movie/now_playing?api_key=cf03e9cd4f6887445f3de4007548929c&language=en-US&page=1`) ;

// //popular
// myHttp.open('GET' , `https://api.themoviedb.org/3/movie/popular?api_key=cf03e9cd4f6887445f3de4007548929c&language=en-US&page=1`) ;

// //top Rated
// myHttp.open('GET' , `https://api.themoviedb.org/3/movie/top_rated?api_key=cf03e9cd4f6887445f3de4007548929c&language=en-US&page=1`) ;


// //Upcoming
// myHttp.open('GET' , `https://api.themoviedb.org/3/movie/upcoming?api_key=cf03e9cd4f6887445f3de4007548929c&language=en-US&page=1`) ;


