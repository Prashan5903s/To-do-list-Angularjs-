import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;
  @Input() todo: Todo = new Todo;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor(){}
  ngOnInit(): void {
  }
  OnSubmit(){
    const todo = {
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }
}
