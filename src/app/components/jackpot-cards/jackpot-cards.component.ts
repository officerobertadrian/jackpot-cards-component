import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JackpotCard } from 'src/app/interfaces/jackpot-card.interface';

@Component({
  selector: 'app-jackpot-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jackpot-cards.component.html',
  styleUrls: ['./jackpot-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JackpotCardsComponent {
  @Input() jackpotCardsData: JackpotCard[] = [];
  jackpotCardsFlipped: string[] = [];
  jackpotCardsWinner: string | null = null;

  constructor() {
    
  }

  flipJackpotCard(jackpotCard: JackpotCard, index: number) {
    if (!this.jackpotCardsWinner) {
      if (!this.jackpotCardsData[index].flipped) {
        this.jackpotCardsData[index].flipped = true;
        this.jackpotCardsFlipped.push(jackpotCard.name);

        let jackpotCardsFlippedDuplicates = 0;
        this.jackpotCardsFlipped.forEach((jackpotCardFlipped) => {
          if (jackpotCardFlipped === jackpotCard.name) {
            jackpotCardsFlippedDuplicates += 1;
          }
        });

        if (jackpotCardsFlippedDuplicates === 3) {
          this.jackpotCardsWinner = jackpotCard.name;
        }
      }
    }
  }
}
