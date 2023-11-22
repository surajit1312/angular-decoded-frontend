import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolutionModifierComponent } from './resolution-modifier.component';

const routes: Routes = [{ path: '', component: ResolutionModifierComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResolutionModifierRoutingModule {}
