import { Pipe, PipeTransform } from "@angular/core";
import { HackIdea } from "src/app/models/HackIdea";

@Pipe({ name: 'sortPipe', pure: false })
export class SortPipe implements PipeTransform {
    transform(hackIdeaArray: Array<HackIdea>, order: string, objAttr: string): Array<HackIdea> {
        let sortedArray: Array<HackIdea> = hackIdeaArray;
        if (order === 'ascending') {
            sortedArray = this.sortAscending(hackIdeaArray, objAttr);
        }
        else if (order === 'descending') {
            sortedArray = this.sortDescending(hackIdeaArray, objAttr);
        }
        return sortedArray;
    }
    sortAscending(hackIdeaArray: Array<HackIdea>, objAttr: string): Array<HackIdea> {
        return hackIdeaArray.sort((a: any, b: any): any => {
            return a[objAttr] - b[objAttr];
        });
    }
    sortDescending(hackIdeaArray: Array<HackIdea>, objAttr: string): Array<HackIdea> {
        return hackIdeaArray.sort((a: any, b: any): any => {
            return b[objAttr] - a[objAttr];
        });
    }
}
