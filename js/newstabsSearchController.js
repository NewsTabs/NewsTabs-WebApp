app.controller('newstabsSearchController', ['$scope', '$http', function($scope, $http) {

    var srcList = [];
    var allSrcInXml;
    $scope.sources = srcList;

    $scope.selectedItemChange = selectedItemChange;
    $scope.searchTextChange = searchTextChange;
    $scope.filterResults = filterResults;

    var url = "data_source/newstabs_allsources.xml";
    var getAllSourcesAjax = $http.get(url);
    getAllSourcesAjax.success(function(data) {
        allSrcInXml = data;
        $(data).find("outline").each(function() {
            var checkTitle = $(this).attr('xmlUrl');
            if (checkTitle == null) {
                var sTitle = $(this).attr('title');
                srcList.push(sTitle);
            }
        });
    });
    getAllSourcesAjax.error(function() {
        srcList = [];
        console.log("Could not load sources!");
    });

    function searchTextChange(text) {
        console.log('Text changed to ' + text);
    }

    function selectedItemChange(item) {
        console.log('Item changed to ' + JSON.stringify(item));
    }

    function filterResults(searchText) {
        var filteredSrcList = _.filter(srcList, function(src) {return src.indexOf(searchText) > -1;
        });
        return filteredSrcList;
    }

}]);
