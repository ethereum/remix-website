---
---
function getScript(source, callback) {
  var el = document.createElement('script');
  el.onload = callback;
  el.src = source;
  document.body.appendChild(el);
}

//If a files had no dependencies, simply use...
//  loadJS('path/to/file.js');

getScript('https://code.jquery.com/jquery-3.2.1.slim.min.js', function(){
  // use loadJS('path/to/js/file/with/jQuery/decendencies.js'); here
  getScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js', function(){
    // use loadJS('path/to/js/file/with/popper/decendencies.js'); here
    loadJS('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js');
  });
});

// use the getScript function to load any scripts who have dependencies
// for example you could use...
// getScript('path/to/your/jQuery.min.js', function(){
//  loadJS('path/to/js/file/with/jQuery/decendencies.js');
//  loadJS('path/to/js/another-file/with/jQuery/decendencies.js');
// });
