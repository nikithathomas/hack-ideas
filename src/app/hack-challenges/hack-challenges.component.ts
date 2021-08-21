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
  constructor(private hackIdeaService: HackIdeaServiceService, private loginService: LoginServiceService, private route: Router) { }

  ngOnInit(): void {
    this.hackIdeaArray = this.hackIdeaService.getHackIdeas();
    this.route.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.hackIdeaArray = this.hackIdeaService.getHackIdeas();
    });
    this.loggedInUser = this.loginService.getLoginId();
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
}
