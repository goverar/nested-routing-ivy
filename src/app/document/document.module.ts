import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentRoutingModule } from './document-routing.module';
import { DocumentComponent } from './pages/document/document.component';

@NgModule({
  declarations: [DocumentComponent],
  imports: [
    CommonModule,
    RouterModule,
    DocumentRoutingModule
  ]
})
export class DocumentModule { }
