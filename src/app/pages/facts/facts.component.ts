import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent{
  items: Array<any> = [];
  constructor() {
    this.items = [
      { name: 'Terry Pratchett and Neil Gaiman Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
      { name: 'Terry Pratchett and Neil Gaiman Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
      { name: 'Terry Pratchett and Neil Gaiman Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
      { name: 'Terry Pratchett and Neil Gaiman Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
      { name: 'Terry Pratchett and Neil Gaiman Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
    ];
  }
}
