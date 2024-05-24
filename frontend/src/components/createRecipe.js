import { deleteHandler } from "../handlers/deleteHandler.js";
import { editHandler } from "../handlers/editHandler.js";

export const createRecipe = (recipe) => {

    const container = document.createElement('div');
    container.id = recipe._id;
    container.classList.add('recipe');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = recipe.title;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'Delete';
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener('click', () => {
        deleteHandler(recipe._id);
    });

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerText = 'Edit';
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editButton.addEventListener('click', () => {
        editHandler(recipe);
    })


    const ingredients = document.createElement('p');
    ingredients.classList.add('ingredients');
    ingredients.innerText = recipe.ingredients;

    const instructions = document.createElement('p');
    instructions.classList.add('instructions');
    instructions.innerText = recipe.instructions;

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = recipe.image;
    image.alt = recipe.title;

    container.append(title, ingredients, instructions, image, deleteButton, editButton);
    return container;
};