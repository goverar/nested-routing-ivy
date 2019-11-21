import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './pages/logs/logs.component';

@NgModule({
  declarations: [LogsComponent],
  imports: [
    CommonModule,
    RouterModule,
    LogsRoutingModule
  ]
})
export class LogsModule { }
