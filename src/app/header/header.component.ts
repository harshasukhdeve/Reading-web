import { Component, OnInit } from '@angular/core';
import { SelectedItemService } from './../selected-item.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers: [SelectedItemService],
})
export class HeaderComponent implements OnInit {
  message: string;

  constructor(private data: SelectedItemService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }

  dataPass(msg: string) {
    this.data.changeMessage(msg);
  }
}