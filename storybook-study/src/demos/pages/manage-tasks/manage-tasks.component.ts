import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-tasks',
  templateUrl: './manage-tasks.component.html',
  styleUrls: ['./manage-tasks.component.css'],
})
export class ManageTasksComponent implements OnInit {
  fakeTasksData = [
    { name: 'Lavar vasilhas do almoço', duration: 45 },
    { name: 'Limpar sacada', duration: 10 },
    { name: 'Lavar o banheiro', duration: 30 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
