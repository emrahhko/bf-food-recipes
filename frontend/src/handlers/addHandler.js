import { createRecipe } from "../components/createRecipe.js";
import { dom } from "../dom.js";
import { postRecipe } from "../../apis/postRecipe.js";
import { updateRecipe } from "../../apis/updateRecipe.js";

export const addHandler = async () => {

    const title = dom.title.value;
    const ingredients = dom.ingredients.value;
    const instructions = dom.instructions.value;
    const image = dom.image.value;

    if (!title || !ingredients || !instructions || !image) {
        dom.error.innerText = 'All fields are required';
        setTimeout(() => {
            dom.error.innerText = '';
        }, 2000)
        return;
    }

    if (dom.btn.innerText === 'Edit') {
        const selectedRecipe = document.querySelector('.selected');
        const id = selectedRecipe.id;
        selectedRecipe.querySelector('.title').innerText = title;
        selectedRecipe.querySelector('.ingredients').innerText = ingredients;
        selectedRecipe.querySelector('.instructions').innerText = instructions;
        selectedRecipe.querySelector('.image').src = image;
        selectedRecipe.querySelector('.image').alt = title;

        const res = await updateRecipe(id, {title, ingredients, instructions, image});
        console.log(res);

        dom.btn.innerText = 'Add';
        selectedRecipe.classList.remove('selected');

    } else {
        const recipeDom = createRecipe({title, ingredients, instructions, image});
        dom.recipes.append(recipeDom);
    
        const res = await postRecipe({title, ingredients, instructions, image});

    }

    dom.title.value = '';
    dom.instructions.value = '';
    dom.ingredients.value = '';
    dom.image.value = '';
};