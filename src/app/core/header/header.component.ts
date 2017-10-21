import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() languageChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    this.languageChanged.emit(lang);
  }

}
