import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router} from '@angular/router';
import { TagRelatedDirective } from '../common/directive/tag-related.directive';
import { HackIdea } from '../models/HackIdea';
import { Tag } from '../models/Tag';
import { HackIdeaServiceService } from '../services/hack-idea-service.service';
import { TagServiceService } from '../services/tag-service.service';
import { TagRelatedComponent } from '../tag-related/tag-related.component';

@Component({
  selector: 'app-add-hack-ideas',
  templateUrl: './add-hack-ideas.component.html',
  styleUrls: ['./add-hack-ideas.component.less'],
})
export class AddHackIdeasComponent implements OnInit {
  title = '';
  description = '';
  tagSelect = '';
  tagsArray: Array<Tag> = [];
  selectedTagsArray: Array<Tag> = [];
  hackIdeaArray: Array<HackIdea> = [];

  @ViewChild(TagRelatedDirective)
  tagDirective!: TagRelatedDirective;

  constructor(
    private tagService: TagServiceService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private hackIdeaService: HackIdeaServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.tagsArray = this.tagService.getTags();
    this.hackIdeaArray = this.hackIdeaService.getHackIdeas();
  }
  findSelectedTag(
    specifictagArray: Array<Tag>,
    selectedTag: string
  ): Tag | undefined {
    const selectedTagObj = specifictagArray.find((tag: Tag) => {
      return tag.id === parseInt(selectedTag, 10);
    });
    if (selectedTagObj) {
      return selectedTagObj;
    }
    return undefined;
  }
  createTag(selectedTag: Tag): void {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        TagRelatedComponent
      );
    const viewContainerRef = this.tagDirective.viewContainerRef;
    const componentRef =
      viewContainerRef.createComponent<TagRelatedComponent>(componentFactory);
    componentRef.instance.data = selectedTag;

    componentRef.instance.deleteEvent.subscribe(() => {
      this.deleteSpecificTag(componentRef, selectedTag);
    });
  }

  selectTag(): void {
    const selectedTagObj = this.findSelectedTag(this.tagsArray, this.tagSelect);
    if (selectedTagObj) {
      this.createTag(selectedTagObj);
      this.selectedTagsArray.push(selectedTagObj);
    }
  }

  deleteSpecificTag(
    componentRef: ComponentRef<TagRelatedComponent>,
    selectedTag: Tag
  ): void {
    componentRef.destroy();
    this.selectedTagsArray = this.selectedTagsArray.filter((tag: Tag) => {
      return selectedTag.id !== tag.id;
    });
  }

  checkIfSelected(selectedTag: Tag): boolean | null {
    const selectedTagObj = this.findSelectedTag(
      this.selectedTagsArray,
      `${selectedTag.id}`
    );
    if (selectedTagObj) {
      return true;
    }
    return null;
  }

  checkIfAddHackFormValid(
    isTitleRequired: boolean,
    isDescRequired: boolean,
    isTagRequired: boolean
  ): boolean | null {
    if (
      isTitleRequired ||
      isDescRequired ||
      isTagRequired ||
      !this.selectedTagsArray.length
    ) {
      return true;
    }
    return null;
  }

  submitHackIdea(): void {
    const newHackIdea = new HackIdea(
      this.tagsArray.length + 1,
      this.title,
      this.description,
      this.selectedTagsArray,
      new Date(),
      0,
      []
    );
    this.hackIdeaArray.push(newHackIdea);
    this.hackIdeaService.setHackIdeas(this.hackIdeaArray);
    this.cancelAddHackIdea();
  }

  cancelAddHackIdea(): void {
    this.route.navigate(['/home']);
  }
}
