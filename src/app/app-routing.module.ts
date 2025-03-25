import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AzkarDetailsComponent } from './azkar-details/azkar-details.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, title: "الرئيسية"
  },
  {
    path: 'azkar', component: AzkarDetailsComponent, title: "الاذكار"
  },
  {
    path: '', component: HomeComponent, pathMatch: 'full', title: "الرئيسية"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
