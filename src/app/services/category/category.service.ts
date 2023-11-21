import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryControllerService, CategoryDto } from 'src/gs-api/src';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(
    private categoryService: CategoryControllerService
  ) { }

  enregistrerCategory(categoryDto: CategoryDto): Observable<CategoryDto> {
    return this.categoryService.save8(categoryDto);
  }

  findAll(): Observable<CategoryDto[]> {
    return this.categoryService.findAll8();
  }

  findById(idCategory: number): Observable<CategoryDto> {
    return this.categoryService.findById8(idCategory);
  }

  delete(idCategorie?: number): Observable<any> {
    if (idCategorie) {
      return this.categoryService._delete(idCategorie);
    }
    return of();
  }
}


