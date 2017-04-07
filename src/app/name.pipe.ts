import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(input: any[], sortValue: string) {
    if (input) {
      if(sortValue === "high") {
        let output: any[]=[];
        input.forEach(member => {
          if (member.name[0].toLowerCase() >= 'n') {
            output.push(member);
          }
        });
        return output;
      } else if (sortValue === "low") {
        let output: any[]=[];
        input.forEach(member => {
          if (member.name[0].toLowerCase() <= 'm') {
            output.push(member);
          }
        });
        return output;
      } else {
        return input;
      }
    }
  }
}
