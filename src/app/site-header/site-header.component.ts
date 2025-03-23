import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment-hijri';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {
  hijriDate: string = '';

  ngOnInit() {
    this.updateHijriDate();
  }

  updateHijriDate() {
    moment.locale('ar');
    this.hijriDate = moment().locale('ar-SA').format('iD iMMMM iYYYY هـ'); 
  }

}
