import { Component, Input } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
	@Input() recipes: Array<Recipe>;
}
