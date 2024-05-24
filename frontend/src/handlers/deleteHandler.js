import { deleteRecipe } from "../../apis/deleteRecipe.js";

export const deleteHandler = async (id) => {
    document.getElementById(id).remove();
    const res = await deleteRecipe(id);
    console.log(res);
};