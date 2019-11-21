import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './pages/blog/blog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    RouterModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
