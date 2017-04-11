import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../translate/translate.service";

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: [ './frontpage.component.css' ]
}
)
export class FrontpageComponent implements OnInit {

  public title: string;

  constructor(private _translate: TranslateService) { }

  ngOnInit() {}

}
