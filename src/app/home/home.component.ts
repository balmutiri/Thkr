import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 azkarList = [
  { title: 'أذكار الصباح', count: 25, icon: 'assets/images/morning-icon.png', color: '#fceabc', textColor: '#ecb70f', routerLink: "/azkar", queryParams:"morning" },
  { title: 'أذكار المساء', count: 25, icon: 'assets/images/night-icon.png', color: '#d3c9fe', textColor: '#7c60ff', routerLink: "/azkar", queryParams:"night"  },
  { title: 'الورد اليومي', count: 25, icon: 'assets/images/daily-azkar-icon.png', color: '#ffdcc8', textColor: '#eeb080', routerLink: "/azkar", queryParams:"daily"  },
  { title: 'أذكار النوم', count: 25, icon: 'assets/images/sleep-icon.png', color: '#fdc8c8', textColor: '#e57779', routerLink: "/azkar", queryParams:"sleep"  },
  { title: 'أذكار الصلاة', count: 25, icon: 'assets/images/prayer-icon.png', color: '#c8fedc', textColor: '#10c496', routerLink: "/azkar", queryParams:"praying"  },
  { title: 'تسبيح', count: 25, icon: 'assets/images/raising-hands-logo.png', color: '#90d5ff', textColor: '#3db1fc', routerLink: "/azkar", queryParams:"msbha"  },
  ]; 

  randomMessage : string = '';
  randomZaker: string = '';

  constructor(private homeService: HomeService, private titleService: Title, private metaService: Meta){
    this.titleService.setTitle('الاذكار');
    this.metaService.updateTag({
      name: 'description',
      content: 'مجموعة من الأذكار اليومية لحماية نفسك وتحصينك'
    })
  }


  ngOnInit() {
    this.homeService.getRandomMessage().subscribe({
      next: (response) => {
        this.randomMessage = response.message;
      },
      error: (err) => {
        console.error('Error fetching message:', err);
      }
    });

    this.homeService.getRandomZker().subscribe({
      next: (response) => {
        this.randomZaker = response.message;
      },
      error: (err) => {
        console.error('Error fetching message:', err);
      }
    });
  }
}
