function showLoader() {
  // document.getElementById('loader').style.display = 'block';
  document.getElementById('loader').style.width = '0%';
  document.getElementById('overlay').style.display = 'flex';

}

function hideLoader() {
  // document.getElementById('loader').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.querySelector('.h-text').style.backgroundColor = 'black';
  document.querySelector('.h-text').style.color = 'white';
}

function loadAction() {
  showLoader();
  
  setTimeout(function() {
    hideLoader();
    console.log('loading!');
  }, 3000);
}

function reset() {
  document.querySelector('.h-text').style.color = 'maroon';
  document.querySelector('.h-text').style.backgroundColor = '';
}

function resetInitial() {
  console.log('back to initial state!');
  reset();
}








