import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from '../inventory-list/inventory-list.component';
import { RouterModule ,Routes} from '@angular/router';

const Routes:Routes=[
  {
    path:"",
    component:InventoryListComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      Routes
    ),
    CommonModule
  ]
})
export class AppRoutingModule { }
