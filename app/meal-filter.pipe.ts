import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "mealpipe",
  pure: false
})
export class MealFilterpipe implements PipeTransform {
  transform(input: Meal[]) {
    var output: Task[] = [];
    if (input[i].calories <= 500)
      output.push(input[i]);
  }
}
return output;
}
}
