import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GenerationsComponent} from './components/generations/generations.component';
import {PokemonsComponent} from './components/pokemons/pokemons.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {PokemonComponent} from './components/pokemon/pokemon.component';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from './components/search/search.component';
import {MatInputModule} from "@angular/material/input";
import {NavbarComponent} from './components/navbar/navbar.component';

const appRoutes: Routes = [
  {path: "Generations", component: GenerationsComponent, pathMatch: "full"},
  {path: "Pokemons", component: PokemonsComponent, pathMatch: "full"},
  // {path: "pathname", component: nomDuComposant},
]

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokemonComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
