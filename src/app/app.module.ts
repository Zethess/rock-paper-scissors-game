import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';
import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from './components/modal/modal.module';
import { GameOptionsComponent } from './components/game-options/game-options.component';
import { GameOptionsModule } from './components/game-options/game-options.module';
import { GameResultModule } from './components/game-result/game-result.module';
import { GameSelectionsModule } from './components/game-selections/game-selections.module';
import { GameResultComponent } from './components/game-result/game-result.component';
import { GameSelectionsComponent } from './components/game-selections/game-selections.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    GameOptionsComponent,
    GameResultComponent,
    GameSelectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ModalModule,
    GameOptionsModule,
    GameResultModule,
    GameSelectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
