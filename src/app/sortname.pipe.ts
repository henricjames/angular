import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortname'
})
export class SortnamePipe implements PipeTransform {
  sortby ="first_name";

  transform(value: Array<any>, ...args: any[]): any {

    if (this.sortby){
      return value.sort((a,b) =>
  {
    let x=a[this.sortby];
    let y=b[this.sortby];

     if(x>y)
 {
   return 1
 }
 else{
   return -1
 }

  });

    }
    else{
      return value;
    }


}
}
