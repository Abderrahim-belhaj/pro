import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownModule } from 'primeng/dropdown';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageaccueilComponent } from './components/dashbord/pageaccueil/pageaccueil.component';
import { GestionclientComponent } from './components/dashbord/gestionclient/gestionclient.component';
import { GestionprodroitComponent } from './components/dashbord/gestionprodroit/gestionprodroit.component';
import { ProfilavocatComponent } from './components/dashbordavocat/profilavocat/profilavocat.component';
import { GererrendezvousComponent } from './components/dashbordavocat/gererrendezvous/gererrendezvous.component';
import { ModifierprofilComponent } from './components/dashbordavocat/modifierprofil/modifierprofil.component';
import { DashbordComponent } from './components/dashbordavocat/dashbord/dashbord.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PageaccueilComponent,
    GestionclientComponent,
    GestionprodroitComponent,
    ProfilavocatComponent,
    GererrendezvousComponent,
    ModifierprofilComponent,
    DashbordComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
