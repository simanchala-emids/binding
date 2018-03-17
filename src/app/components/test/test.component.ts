import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <h2> Welcome {{ name }}</h2>
      <input id="{{ myid }}" type="text" value="sim"/><br>
      <input [id]="myId" type="text" value="sim"/><br>
      <input disabled type="text" value="disabled"/><br>
      <input disabled="false" type="text" value="disabled"/><br>
      <input disabled="true" type="text" value="disabled"/><br>
      <input disabled="{{false}}" type="text" value="disabled"/><br>
      <input [disabled]="isDisabled" type="text" value="disabled"/><br>
      <input bind-disabled="isDisabled" type="text" value="disabled"/>
  `,
  styles: [` `]
})
export class TestComponent implements OnInit {

  public name = "Simanchala";
  public myId = "testId";
  public isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }
}
