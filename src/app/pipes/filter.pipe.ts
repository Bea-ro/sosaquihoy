import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/models';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(
    products: Product[] | null,
    searchInput: string
  ): Product[] | null | undefined {
    const productsFiltered = products?.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return products && searchInput ? productsFiltered : products;
  }
}
