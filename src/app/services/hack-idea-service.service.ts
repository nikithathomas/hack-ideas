import { Injectable } from '@angular/core';
import { HackIdea } from '../models/HackIdea';
import hackIdeas from '../common/HackIdeas';

@Injectable({
  providedIn: 'root'
})
export class HackIdeaServiceService {

  constructor() {
    const sessionHackIdeas = this.getHackIdeas();
    if (!sessionHackIdeas.length) {
      sessionStorage.setItem('hackIdeas', JSON.stringify(hackIdeas));
    }
  }

  getHackIdeas(): Array<HackIdea> {
    const obtainedHackIdeas = sessionStorage.getItem('hackIdeas');
    if (obtainedHackIdeas !== null) {
      return JSON.parse(obtainedHackIdeas);
    }
    return [];
  }

  setHackIdeas(newHackIdeas: Array<HackIdea>): void {
    sessionStorage.setItem('hackIdeas', JSON.stringify(newHackIdeas));
  }
}
