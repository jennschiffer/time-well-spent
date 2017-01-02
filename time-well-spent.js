(function(){
  const frame = document.getElementById('frame');
  const cloudZero = document.getElementsByClassName('cloud')[0];

  /* helper functions */
  const getUniqueRandomNumberArray = function(min, max, length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      let numberChosen = false;
      do {
        const randNum = Math.floor(Math.random() * (max - min) + min);
        if (arr.indexOf(randNum) === -1) {
          arr.push(randNum);
          numberChosen = true;
        }
      }
      while ( numberChosen === false )
    }
    return arr;
  }

  const setGradient = function(elem) {
    const randNumArray = getUniqueRandomNumberArray(0, 256, 6);
    elem.style.background = 'linear-gradient( 0deg, ' +
      'rgba(' + randNumArray[0] + ', ' + randNumArray[1] + ', ' + randNumArray[2] + ', .3)' +
      ', ' +
      'rgba(' + randNumArray[3] + ', ' + randNumArray[4] + ', ' + randNumArray[5] + ', .3)' +
    ')';
  };

  const addCloud = function() {
    const cloud = cloudZero.cloneNode(true);
    cloud.style.opacity = Math.random(0, 1);
    cloud.style.top = getUniqueRandomNumberArray(0, frame.clientHeight, 1)[0] + 'px';
    frame.appendChild(cloud);
  }

  /* init drawing */
  setGradient(frame);
  addCloud();

  /* intervals */
  var backdropInterval = window.setInterval(function() {
    setGradient(frame);
  }, 10000);

  var cloudInterval = window.setInterval(function() {
    addCloud();
  }, 23000);

})();
