import { Component } from '@angular/core';
import { _ } from 'lodash';
import SavedSearch from './savedSearch';

const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pig Latin Converter';
  convertedWords = '';
  wordsSearchedHistory: SavedSearch[] = [];

  public onClickMe(sentence: string) {
    const words: string[] = sentence.split(' ');
    let result;
    const convertedWords: string[] = words.map( word => {
      const firstLetter = word.charAt(0).toLowerCase();
          if (vowels.includes(firstLetter)) {
            result = this.convertWordStartingWithVowel(word, firstLetter);
            return result;
          } else {
            result = this.convertWordStartingWithConsonant(word, firstLetter);
            return result;
          }
    });

    this.convertedWords = convertedWords.join(' ');
    const savedSearch: SavedSearch = { searchedSentence: sentence, convertedSentence: this.convertedWords };
    this.wordsSearchedHistory.push(savedSearch);
  }

  public convertWordStartingWithConsonant(word, firstLetter) {
    return word = `${word.substring(1)}${firstLetter}ay`;
  }

  public convertWordStartingWithVowel(word, firstLetter) {
    return word = `${word.substring(1)}${firstLetter}i`;
  }

}
