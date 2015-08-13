/**
 * Created by zdsoft on 15-8-13.
 */
import { Component, View, bootstrap, NgFor } from 'angular2/angular2';


import { Todo } from 'main/service/todo';

@Component({selector: 'my-app'})
@View({
    directives:[NgFor],
    templateUrl:'resources/template/my-app.html',
})
class myApp{
    constructor() {
        this.names = Todo.get();
        this.newName = '';
    }
};

export function main(){
    bootstrap(myApp);
}

//http://www.hubwiz.com/class/5599d367a164dd0d75929c76  333@qq.com