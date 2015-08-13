System.register("main/app", ["angular2/angular2", "main/service/todo"], function($__export) {
  "use strict";
  var __moduleName = "main/app";
  var Component,
      View,
      bootstrap,
      NgFor,
      Todo,
      myApp;
  function main() {
    bootstrap(myApp);
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      bootstrap = $__m.bootstrap;
      NgFor = $__m.NgFor;
    }, function($__m) {
      Todo = $__m.Todo;
    }],
    execute: function() {
      myApp = function() {
        function myApp() {
          this.names = Todo.get();
          this.newName = '';
        }
        return ($traceurRuntime.createClass)(myApp, {}, {});
      }();
      Object.defineProperty(myApp, "annotations", {get: function() {
          return [new Component({selector: 'my-app'}), new View({
            directives: [NgFor],
            templateUrl: 'resources/template/my-app.html'
          })];
        }});
      ;
    }
  };
});
