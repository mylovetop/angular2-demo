System.register("main/service/todo", [], function($__export) {
  "use strict";
  var __moduleName = "main/service/todo";
  var todoList,
      Todo;
  return {
    setters: [],
    execute: function() {
      todoList = ['java', 'h5', 'js', 'es6'];
      Todo = {get: function() {
          return todoList;
        }};
      $__export("Todo", Todo);
    }
  };
});
