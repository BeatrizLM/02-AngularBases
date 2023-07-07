import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBZMainComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    DBZMainComponent,
  ],
  exports: [
    DBZMainComponent,
  ],
  imports: [
    CommonModule,
    
  ]
})
export class DbzModule { }
