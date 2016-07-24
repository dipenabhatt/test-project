(function () {
    'use strict';
    angular.module('myProject.com', ['myProject.directives','myProject.services']);
    angular.module('myProject.directives', ['myProject.services']);
    angular.module('myProject.services',[]);
}());