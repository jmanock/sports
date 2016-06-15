(function() {
  'use strict';

  angular
    .module('sports')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
