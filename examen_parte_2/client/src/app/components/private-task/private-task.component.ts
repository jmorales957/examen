import { Component, OnInit } from '@angular/core';
import { TasksService } from "../../services/tasks.service";


@Component({
  selector: 'app-private-task',
  templateUrl: './private-task.component.html',
  styleUrls: ['./private-task.component.css']
})
export class PrivateTaskComponent implements OnInit {

  tasks = []
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.getPriveteTask()
  }

  getPriveteTask(){
    this.taskService.privategetTask()
    .subscribe(
      res=> {
        this.tasks = res
      },
      err => console.log(err)
    )
  }

}
