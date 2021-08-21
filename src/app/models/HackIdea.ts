import { Employee } from './Employee';
import { Tag } from './Tag';

export class HackIdea {
  id: number;
  title: string;
  description: string;
  tags: Array<Tag>;
  creationDate: Date;
  voteCount: number;
  employeeVotes: Array<string>;

  constructor(
    id: number,
    title: string,
    description: string,
    tags: Array<Tag>,
    creationDate: Date,
    voteCount: number,
    employeeVotes: Array<string>
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.creationDate = creationDate;
    this.voteCount = voteCount;
    this.employeeVotes = employeeVotes;
  }
}
