import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-boolean-selector',
  templateUrl: './boolean-selector.component.html'
})
export class BooleanSelectorComponent implements OnInit {
  @Input() isTrue: boolean;
  @Input() label: string;
  @Input() disabled = false;
  @Output() setValue: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
