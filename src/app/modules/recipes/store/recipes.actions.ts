import { Recipe } from '../../../shared/models/recipe.model';

export const ADD_RECIPE = 'ADD_RECIPE';
export const ADD_RECIPES = 'ADD_RECIPES';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';

export class AddRecipe {
	readonly type = ADD_RECIPE;
	constructor (public payload: Recipe) {}
}

export class AddRecipes {
	readonly type = ADD_RECIPES;
	constructor (public payload: Array<Recipe>) {}
}

export class DeleteRecipe {
	readonly type = DELETE_RECIPE;
	constructor (public payload: number) {}
}

export class UpdateRecipe {
	readonly type = UPDATE_RECIPE;
	constructor (public payload: {index: number, recipe: Recipe}) {}
}

export type RecipesActions = AddRecipe | AddRecipes | DeleteRecipe | UpdateRecipe;