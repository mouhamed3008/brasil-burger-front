import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../models/products';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(value : Products[], filterString: any, propName:string): Products[] {
    const result:Products[] =[];
    if(!value || filterString==='' ){
      return value;
    }

    value.forEach((a:Products)=>{
      console.log(a.libelle);

      if(a.prix.toString().trim().includes(filterString) || a.libelle.trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });

    return result;
  }


}
