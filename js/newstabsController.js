app.controller('newstabsController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };


}]);

app.controller('newstabsController2', function($scope, $http, $window) {

  var loggedIn = false;

  if (loggedIn) {
    $scope.userIcon = 'img/icons/ic_account_circle.svg';
    $scope.userName = "Sathvik";
  }
  else {
    $scope.userIcon = 'img/icons/ic_account_circle.svg';
    $scope.userName = "Not logged in";
  }

  $scope.showDescription = true;
  
  var baseUrl = "https://newstabs-sathvik1709.c9.io/php/tryrss.php?rssurl=";

  var tabs = [{
    title: 'NPR Headlines',
    url: baseUrl + "http://www.npr.org/rss/rss.php?id=1001",
    content: "",
    showProgress: true
  }, {
    title: 'NPR Business',
    url: baseUrl + "http://www.npr.org/rss/rss.php?id=1006",
    content: "",
    showProgress: true
  }, {
    title: 'NPR Health',
    url:baseUrl + "http://www.npr.org/rss/rss.php?id=1007",
    content: "",
    showProgress: true
  }, {
    title: 'NPR Politics',
    url: baseUrl + "http://www.npr.org/rss/rss.php?id=1012",
    content: "",
    showProgress: true
  }, {
    title: 'ABC Tech',
    url: baseUrl + "http://feeds.abcnews.com/abcnews/technologyheadlines",
    content: "",
    showProgress: true
  }, {
    title: 'TOI Top storiess',
    url: baseUrl + "http://dynamic.feedsportal.com/pf/555218/http://toi.timesofindia.indiatimes.com/rssfeedstopstories.cms",
    content: "",
    showProgress: true
  }];

  $scope.tabs = tabs;

  angular.forEach($scope.tabs, function(value, key) {
    $http.get(value.url)
      .success(function(response) {
        value.content = response;
        value.showProgress = false;
      });
  });

  $scope.openTab = function(url) {
    $window.open(url, '_blank');
  };


});
