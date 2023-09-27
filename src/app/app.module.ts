import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { CardComponent } from './card/card.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, FooterComponent, SidebarComponent, PageWrapperComponent, CardComponent, ListaDeUsuariosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
