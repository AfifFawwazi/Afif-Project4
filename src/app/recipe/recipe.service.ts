import { Injectable , EventEmitter} from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shopping-list/shopping-edit/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe('Burger',
    'A Hamburger with a rim of lettuce sitting on a black plate against a black back ground',
    'https://www.flurtmag.com/wp-content/uploads/2015/05/salmon-burgers.jpg',
    [
      new Ingredient('meal', 1),
      new Ingredient('tomato',2)
    ]),
    new Recipe('Special Fried Rice',
    'Fried rice is a dish of cooked rice that has been stir-friend in a work or a' + 
    'frying pan and is usually mixed with other ingredients such as eggs, vegetable, seafood, or meat. It is often eaten',
    '../src/app/img/nasgor.jpg',
    [
      new Ingredient('rice', 1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ]),
    ];

    getRecipes(){
      return this.recipes.slice();
    }

    addIngredientsShoppingList(ingredients: Ingredient[]){
      this.slsService.addIngredients(ingredients);
    }

constructor(private slsService: ShoppingListService) { }

}
