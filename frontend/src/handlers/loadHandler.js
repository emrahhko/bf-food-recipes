import { getRecipes } from "../../apis/getRecipes.js";
import { dom } from "../dom.js";
import { createRecipe } from "../components/createRecipe.js";

export const loadHandler = async () => {
    const recipes = await getRecipes();
    recipes.forEach((recipe) => {
        const recipeDom = createRecipe(recipe);
        dom.recipes.append(recipeDom);
    });
};