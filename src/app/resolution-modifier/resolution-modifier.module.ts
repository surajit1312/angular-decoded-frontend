import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolutionModifierComponent } from './resolution-modifier.component';
import { ResolutionModifierRoutingModule } from './resolution-modifier-routing.module';



@NgModule({
  declarations: [
    ResolutionModifierComponent
  ],
  imports: [
    CommonModule,
    ResolutionModifierRoutingModule,
  ],
  exports: []
})
export class ResolutionModifierModule { }
