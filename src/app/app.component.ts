import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute, private meta: Meta, private title: Title) {
    this.translate.setDefaultLang('ar'); // Default language
    this.setDirection('ar'); // Set initial direction

    this.title.setTitle('أذكار | موقع الأذكار');
    this.meta.addTags([
      { name: 'description', content: 'أذكار الصباح والمساء اليومية لحماية نفسك وتحصينك' },
      { name: 'keywords', content: 'أذكار, أذكار الصباح, أذكار المساء, تسبيح, أدعية' },
      { name: 'author', content: 'Basma Almutiri' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  setDirection(lang: string) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }


}
