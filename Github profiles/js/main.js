var button = document.querySelector('.btn-secondary');
var inputValue = document.querySelector('.form-control');
var login = document.querySelector('.login');
var named = document.querySelector('.name');
var bio = document.querySelector('.bio');
var company = document.querySelector('.company');
var followers = document.querySelector('.followers');
var following = document.querySelector('.following');
var twitterusername = document.querySelector('.twitter-username');
var url = document.querySelector('.url');
var logo = document.querySelector('.logo');
var locationd = document.querySelector('.location');

button.addEventListener('click', function() {
  fetch('https://api.github.com/users/'+inputValue.value+'')
   .then(response => response.json())
   .then(data => {
    var loginValue = data['login']
    var nameValue = data['name']
    var bioValue = data['bio']
    var companyValue = data['company']
    var followersValue = data['followers']
    var followingValue = data['following']
    var twitterusernameValue = data['twitter_username']
    var urlValue = data['html_url']
    var logoValue = data['avatar_url']
    var locationValue = data['location']

     console.log(data);

    login.innerHTML ='Login: ' + loginValue;
    named.innerHTML = nameValue;

    bio.innerHTML = 'Bio: ' + bioValue;
    company.innerHTML = 'Company: ' + companyValue;
    followers.innerHTML = 'Followers: ' + followersValue;
    following.innerHTML = 'Following: ' + followingValue;
    twitterusername.innerHTML = 'Twitter username: ' + twitterusernameValue;
    url.innerHTML = 'Profile Url: ' + `<a href="${urlValue}">  `+ urlValue +`  </a>`;
    logo.innerHTML = `<img src="${logoValue}" class="logoimg" alt="">`;
    locationd.innerHTML = 'Location: ' + locationValue;

    if (data['message'] == 'Not Found') {
        alert('wrong login');
        login.innerHTML = 'wrong login';
    }

   })




  .catch(err => alert('error'));
})



