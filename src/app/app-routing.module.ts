import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './pages/footer/footer.component';
import { AppComponent } from './app.component';



const routes: Routes = [
    //{ path: 'footer', component: FooterComponent },
    
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
