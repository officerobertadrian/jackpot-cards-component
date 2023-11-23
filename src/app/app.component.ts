import { Component } from '@angular/core';
interface JackpotCard {
  iconPath: string;
  flipped: boolean;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  jackpotCardsDataMock: JackpotCard[] = [];

  constructor() {
    this.jackpotCardsDataMock = JSON.parse(
      JSON.stringify([
        {
          name: 'Slot',
          iconPath: '/assets/icons/slot-icon.png',
          flipped: false,
        },
        {
          name: 'Roulette',
          iconPath: '/assets/icons/roulette-icon.png',
          flipped: false,
        },
        {
          name: 'Poker',
          iconPath: '/assets/icons/poker-icon.png',
          flipped: false,
        },
        {
          name: 'Poker',
          iconPath: '/assets/icons/poker-icon.png',
          flipped: false,
        },
        {
          name: 'Roulette',
          iconPath: '/assets/icons/roulette-icon.png',
          flipped: false,
        },
        {
          name: 'Slot',
          iconPath: '/assets/icons/slot-icon.png',
          flipped: false,
        },
        {
          name: 'Poker',
          iconPath: '/assets/icons/poker-icon.png',
          flipped: false,
        },
        {
          name: 'Roulette',
          iconPath: '/assets/icons/roulette-icon.png',
          flipped: false,
        },
        {
          name: 'Slot',
          iconPath: '/assets/icons/slot-icon.png',
          flipped: false,
        },
      ])
    ).sort(this.randomSortFunction);
  }
  
  randomSortFunction(a: any, b: any) {
    return 0.5 - Math.random();
  }
}
