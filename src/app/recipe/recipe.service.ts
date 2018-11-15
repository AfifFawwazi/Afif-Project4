import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  
  recipeSelected =new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe('Burger','Burger whith chicken black paper',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)

    ]),
    new Recipe('Fried Rice','bla bla bla blaaaaa.a.a.a.a.a.a.......','../src/app/img/nasgor.jpg',
    [
      new Ingredient('Rice',2),
      new Ingredient('Garlic',2),
      new Ingredient('Egg',3)

    ]),
    ];

    getRecipes(){
      return this.recipes.slice();
    }
    addIngredientsShoppingList(ingredients : Ingredient[]){
      this.slsService.addIngredients(ingredients);
    }

    getRecipe(index:number){
      return this.recipes[index];
    }
    
constructor(private slsService : ShoppingListService) { }

}
