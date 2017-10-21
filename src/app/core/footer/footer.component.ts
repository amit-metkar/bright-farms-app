import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // TODO: add language in footer
  @Output() languageChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    this.languageChanged.emit(lang);
  }
}
