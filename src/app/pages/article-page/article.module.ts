import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';



@NgModule({
  declarations: [
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ArticleComponent,
  ],
})
export class ArticleModule { }
