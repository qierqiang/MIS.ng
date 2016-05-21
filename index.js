(function () {
    var app = angular.module("app", []);
    
    app.controller("tabController", function () {
        this.tabs = [{ name: "welcome", title: "欢迎页", url: "welcome.html" },{ name: "page1", title: "页面1", url: "page1.html" },{ name: "page2", title: "页面2", url: "page2.html" },{ name: "page3", title: "页面3", url: "page3.html" }];
        this.curTabName = "welcome";
        this.setCurTab  = function (tabName) {
            this.curTabName = tabName;
        };
    });
    
    //菜单
    app.directive("menuSection", function () {
        return {
            restrict:       "E",
            templateUrl:    "menuSection.html",
            controllerAs:   "menuSection",
            controller:     ["$http", function ($http) {
                this.menus = [];
                this.hasSub = function (menu) {
                    return result = menu.submenus == undefined || menu.submenus.length == 0;
                };
                this.isShow = false;
                
                var self = this;
                $http.get("./menuAll.json").then(function (response) {
                    self.menus = response.data;
                }, function () { });
            }]
        };
    });
    
    app.directive("tabControl", function () {
        return {
            restrict:       "E",
            templateUrl:    "tabControl.html",
            controllerAs:   "tabControl",
            controller:     ["$http", function ($http) {
                this.curTab = 0;
                this.tabs = [];
                this.selTab = function (tabIndex) {
                    self.curTab = tabIndex;
                };
                this.openTab = function (url, name, title) {
                    if(url)
                    $http.get(url).then(function (response) {
                        if (url == undefined || url.length == 0) return false;
                        var tab = { url : url, name: name, title : title }
                        tabs.push(tab);
                        response.data;
                    }, function () { })
                };
            }]
        };
    });
})();