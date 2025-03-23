import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thkr';

  constructor(private translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.translate.setDefaultLang('ar'); // Default language
    this.setDirection('ar'); // Set initial direction
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  setDirection(lang: string) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }


}
