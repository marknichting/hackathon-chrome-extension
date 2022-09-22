// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

// document.addEventListener('DOMContentLoaded', () => {
//https://ia800605.us.archive.org/8/items/NeverGonnaGiveYouUp/jocofullinterview41.mp3


function updateImages() {
  const images = document.querySelectorAll('img');
  for (const image of images) {
    // const parentEl = image.parentElement
    // image = <img src="./rick-astley.jpeg" alt = "RICK ROLL"  />
    image.setAttribute('src', 'https://media4.giphy.com/media/Ju7l5y9osyymQ/giphy.gif?cid=ecf05e47pbo9yvfwo6py5dmdkxe1m8tbnylnzs9w3yccw4lt&rid=giphy.gif&ct=g');
    image.setAttribute('alt', 'RICK ROLL');
  }
}

function keepUpdatingImages() {
  console.log("updating");
  updateImages();
  setTimeout(() => {
    keepUpdatingImages()
  }, 2000);
}

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('musicID').play();
    document.removeEventListener('click', musicPlay);
}


const body = document.querySelector('body');
const audio = document.createElement('div');
audio.innerHTML =`<audio controls autoplay id='musicID'><source src='https://ia800605.us.archive.org/8/items/NeverGonnaGiveYouUp/jocofullinterview41.mp3' type="audio/mp3" /></audio>`;
body.appendChild(audio);

// var audio = new Audio('https://ia800605.us.archive.org/8/items/NeverGonnaGiveYouUp/jocofullinterview41.mp3');
// audio.play();

keepUpdatingImages();



// demo notes
// google images, youtube