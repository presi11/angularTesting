import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';3
import { RomanNumeralsComponent } from './roman-numerals/roman-numerals.component';

const routes: Routes = [
  { path: '', redirectTo: '/roman-numerals', pathMatch: 'full' },
  {
    path: 'roman-numerals',
    component: RomanNumeralsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
