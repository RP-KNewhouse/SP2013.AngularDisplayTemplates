//Create the Angular App
var app = angular.module("AngularApp", []);

//Create our first directive
app.directive('firstDirective', function() {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: getCurrentSiteUrl() + '/_catalogs/masterpage/custom/ngTemplates/firstDirectiveTemplate.html',
        link: function(scope) {
            scope.items = getResultRows(firstCtx);
        }
    }
})
.directive('secondDirective', function () {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: getCurrentSiteUrl() + '/_catalogs/masterpage/custom/ngTemplates/secondDirectiveTemplate.html',
        link: function (scope) {
            scope.firstItemSet = getResultRows(firstCtx)
            scope.secondItemSet = getResultRows(secondCtx);
        }
    }
});

