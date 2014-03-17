angular.module('fsCordova', [])
  .service('CordovaService', ['$document', '$q',
    function($document, $q) {

      var d = $q.defer(),
        resolved = false;

      this.ready = d.promise;

      document.addEventListener('deviceready', function() {
        resolved = true;
        console.log('Cordova services available!');
        d.resolve(window.cordova);
      });

      // Check to make sure we didn't miss the 
      // event (just in case)
      setTimeout(function() {
        if (!resolved) {
          if (window.cordova) d.resolve(window.cordova);
        }
      }, 3000);
    }
  ]);