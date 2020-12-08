import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { DynamicComponent } from './dynamic/dynamic.component';



@NgModule({
  declarations: [TestComponent, DynamicComponent],
  exports: [DynamicComponent],
  entryComponents: [TestComponent],
  imports: [
    CommonModule
  ]
})
export class SubModule { }
