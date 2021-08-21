import { Injectable } from '@angular/core';
import tags from '../common/data/Tags';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagServiceService {
  tagArray: Array<Tag>;

  constructor() {
    this.tagArray = tags;
  }

  getTags(): Array<Tag> {
    return this.tagArray;
  }
}
