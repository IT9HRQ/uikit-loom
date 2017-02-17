
//
require("angular");
require("angular-ui-router");

//
$layout = require("angular-layout");

//
$layout.html = require("./partials/layouts/default.html");

//
angular
    .module("app", ["$layout", "ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {

        //
        $urlRouterProvider.otherwise("/");

        //
        $stateProvider
            .state("home", {
                url: "/",
                template: require("./partials/simple.html"),
                controller: "SimpleController"
            })
    });

/*
//
var ns = require("angular-namespace")
       . namespace("games.wargame.killthename.app", "app")
       . use("factories", "")
       . use("controllers.simple")
       . use("controllers.advanced")
    . use("controllers.advanced")

//
angular.module(ns.app, [
    ns.app.factories
    ns.app.controllers.simple
]).controller(ns.app.controllers.PageController);

//



console.log(ns.component);

//
window._ = require("lodash");
window.$ = window.jQuery = require("jquery");


ns.use("app")


//ns.use("");

//

//require("datatables.net");
//require("datatables.net-bs");
require("uikit");

angular.module(ns.components, []);

    */