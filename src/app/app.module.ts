import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JackpotCardsComponent } from './components/jackpot-cards/jackpot-cards.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JackpotCardsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
