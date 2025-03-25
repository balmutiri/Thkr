import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AzkarService } from './azkar.service';
import { IAzkarList, IAzkarDetails } from './azkar.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-azkar-details',
  templateUrl: './azkar-details.component.html',
  styleUrls: ['./azkar-details.component.css']
})

export class AzkarDetailsComponent {
  azkarList: IAzkarList[] = [];
  filter: string = 'morning';
  isLoading: boolean = true;

  constructor(private azkarService: AzkarService, private router: Router, private route: ActivatedRoute, private meta: Meta, private title: Title){
    this.meta.updateTag({ name: 'description', content: 'مجموعة من الأذكار اليومية لحماية نفسك وتحصينك' });
  }

  ngOnInit(){
    this.azkarService.getAzkarList().subscribe((azkarList: IAzkarList[]) => {
      this.azkarList = azkarList.map(azkar => ({
        ...azkar,
        content: azkar.content.map(detail => ({
          ...detail,
          originalRepeat: detail.repeat // Store original repeat value
        }))
      }));
      this.isLoading = false;
    });

    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
  }

  removeTashkeel(text: string): string {
  return text.replace(/[\u064B-\u065F\u0670]/g, '');
}

  getFilteredAzkar() {
    if (!this.azkarList.length) return []; // Prevent undefined errors
    return this.azkarList.find((azkar) => azkar.category === this.filter)?.content;
  }

  decreaseRepeat(azkar: any): void {
    if (azkar.repeat > 0) {
      azkar.repeat--;
    }
  }
  
  resetRepeat(detail: IAzkarDetails): void {
    detail.repeat = detail.originalRepeat;
  }
}
