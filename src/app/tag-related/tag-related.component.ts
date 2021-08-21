import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-related',
  templateUrl: './tag-related.component.html',
  styleUrls: ['./tag-related.component.less']
})
export class TagRelatedComponent implements OnInit {
  @Input() data: any;
  @Output() deleteEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  deleteTag(): void {
    this.deleteEvent.emit(this);
  }
}
