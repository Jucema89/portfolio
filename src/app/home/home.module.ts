import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DragDropTableComponent } from './components/drag-drop-table/drag-drop-table.component';
import { DragDropCardComponent } from './components/drag-drop-card/drag-drop-card.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropStepComponent } from './components/drag-drop-step/drag-drop-step.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';



@NgModule({
  declarations: [
    DragDropTableComponent,
    DragDropCardComponent,
    DragDropStepComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    DragDropTableComponent
  ]
})
export class HomeModule { }
