const profilePhotos = document.getElementsByClassName('profilephoto');
const goHome = document.getElementsByClassName('homePage');
const openReels = document.getElementsByClassName('openReel');
const opentheSearch = document.getElementsByClassName('openSearch');


// Iterate over the collection and add event listener to each element
for (let i = 0; i < profilePhotos.length; i++) {
  profilePhotos[i].addEventListener('click', function(event) {
    event.preventDefault();
    openProfilePage();
  });
}

function openProfilePage() {
  location.href = 'profile.html';
}
for (let i = 0; i < opentheSearch.length; i++) {
  opentheSearch[i].addEventListener('click', function(event) {
    event.preventDefault();
    openSearchPage();
  });
}

function openSearchPage() {
  location.href = 'search.html';
}



for (let i = 0; i < openReels.length; i++) {
  openReels[i].addEventListener('click', function(event) {
    event.preventDefault();
    openReelPage();
  });
}

function openReelPage() {
  location.href = 'reels.html';
}




for (let i = 0; i < goHome.length; i++) {
  goHome[i].addEventListener('click', function(event) {
    event.preventDefault();
    openHomePage();
  });
}

function openHomePage() {
  location.href='index.html';
}
