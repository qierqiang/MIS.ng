(function () {

    var app = angular.module("app", []);

    app.controller("tabController", ["$http", function ($http) {
        this.tabHeaders = [];
        this.tabPages = [];
        this.curTabName = "welcome";
        this.hoverTabName = "";
        this.setCurTab = function (tabName) {
            this.curTabName = tabName;
        };
        this.openTab = function (name, title, url, fixed) {
            this.tabHeaders.push({ name: name, title: title, fixed: fixed });
            this.tabPages.push({ name: name, url: url });
        };
        
        var i = 0;
        this.openTab("welcome", "欢迎页", "welcome.html", true);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
        this.openTab(`welcome${i}`, "欢迎页", `welcome${i++}.html`, false);
    }]);

    //菜单
    app.directive("menuSection", function () {
        return {
            restrict: "E",
            templateUrl: "menuSection.html",
            controllerAs: "menuSection",
            controller: ["$http", function ($http) {

                //菜单
                this.menus = [];

                //判断菜单是否包含子项
                this.hasSub = function (menu) {
                    return menu.submenus != undefined && menu.submenus.length != 0;
                };

                //菜单是否显示
                this.isShow = false;

                //切换菜单显示状态
                this.troggleVisiable = function () {
                    var h = this.isShow ? 0 : document.body.scrollHeight;
                    angular.element(".menuArea").height(h);
                    this.isShow = !this.isShow;
                };

                var self = this;
                $http.get("./menuAll.json").then(function (response) {
                    self.menus = response.data;
                }, function () { });
            }]
        };
    });
    
})();