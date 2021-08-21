import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HackIdea } from '../models/HackIdea';
import { HackIdeaServiceService } from '../services/hack-idea-service.service';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-hack-challenges',
  templateUrl: './hack-challenges.component.html',
  styleUrls: ['./hack-challenges.component.less']
})
export class HackChallengesComponent implements OnInit {
  hackIdeaArray: Array<HackIdea> = [];
  loggedInUser = '';
  sortOrder = '';
  sortAttr = '';
  sortCreationDate = 'ascending';
  sortVotes = 'ascending';

  constructor(private hackIdeaService: HackIdeaServiceService, private loginService: LoginServiceService, private route: Router) { }

  ngOnInit(): void {
    this.route.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.initializingHackChallengesArray();
    });
    if (!this.hackIdeaArray.length) {
      this.initializingHackChallengesArray();
    }
    this.loggedInUser = this.loginService.getLoginId();
  }
  initializingHackChallengesArray(): void {
    this.hackIdeaArray = this.hackIdeaService.getHackIdeas();
    this.hackIdeaArray.forEach((hackIdea) => {
      hackIdea.creationDate = new Date(hackIdea.creationDate);
    });
  }
  upVoteIdea(selectedIdea: HackIdea): void {
    selectedIdea.voteCount = selectedIdea.voteCount + 1;
    selectedIdea.employeeVotes.push(this.loggedInUser);
    this.hackIdeaService.setHackIdeas(this.hackIdeaArray);
  }

  checkIfUserVoted(hackIdea: HackIdea): boolean {
    const hasUserVoted = hackIdea.employeeVotes.find((votedEmployee: string) => {
      return votedEmployee === this.loggedInUser;
    });
    if (hasUserVoted) {
      return false;
    }
    return true;
  }

  sortVoteCounts(): void {
    if (this.sortVotes === 'ascending') {
      this.sortVotes = 'descending';
    }
    else {
      this.sortVotes = 'ascending';
    }
    this.sortAttr = 'voteCount';
    this.sortOrder = this.sortVotes;
  }

  sortCreationDates(): void {
    if (this.sortCreationDate === 'ascending') {
      this.sortCreationDate = 'descending';
    }
    else {
      this.sortCreationDate = 'ascending';
    }
    this.sortAttr = 'creationDate';
    this.sortOrder = this.sortCreationDate;
  }
}
