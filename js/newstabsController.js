app.controller('newstabsController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.userIcon = 'img/icons/ic_account_circle.svg';
  $scope.userName = "Sathvik Shivaprakash";

}]);

app.controller('newstabsController2', function($scope, $http,$window) {

  $scope.showDescription = true;

  var tabs = [{
    title: 'NPR Headlines',
    url: "https://newstabs-sathvik1709.c9.io/php/getrss.php?rssurl=" + "http://www.npr.org/rss/rss.php?id=1001",
    content: "",
    showProgress: true
  }, {
    title: 'NPR Business',
    url: "https://newstabs-sathvik1709.c9.io/php/getrss.php?rssurl=" + "http://www.npr.org/rss/rss.php?id=1006",
    content: "",
    showProgress: true
  }, {
    title: 'NPR Health',
    url: "https://newstabs-sathvik1709.c9.io/php/getrss.php?rssurl=" + "http://www.npr.org/rss/rss.php?id=1007",
    content: "",
    showProgress: true
  }, {
    title: 'NPR Politics',
    url: "https://newstabs-sathvik1709.c9.io/php/getrss.php?rssurl=" + "http://www.npr.org/rss/rss.php?id=1012",
    content: "",
    showProgress: true
  }, {
    title: 'NPR World News',
    url: "https://newstabs-sathvik1709.c9.io/php/getrss.php?rssurl=" + "http://www.npr.org/rss/rss.php?id=1004",
    content: "",
    showProgress: true
  }, {
    title: 'TOI Top stories',
    url: "https://newstabs-sathvik1709.c9.io/php/getrss.php?rssurl=" + "http://dynamic.feedsportal.com/pf/555218/http://toi.timesofindia.indiatimes.com/rssfeedstopstories.cms",
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
  
  $scope.openTab = function (url) {
    $window.open(url,'_blank');
  };


});
