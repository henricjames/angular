import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [{path:"userprofile/:id",component:UserprofileComponent},{path:'',component:TestComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
