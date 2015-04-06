(function() {
  'use strict';

  angular
      .module('app.layout')
      .controller('Shell', Shell);

  Shell.$inject = [];

  function Shell() {
    /*jshint validthis: true */
    var vm = this;

    vm.test = 'Shell';

    // setting toastr defaults across all views via the shell
    window.toastr.options.timeOut = 4000;
    window.toastr.options.positionClass = 'toast-bottom-right';
  }
})();
