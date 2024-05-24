export const updateRecipe = async (id, recipe) => {
    try {
        const res = await fetch(`http://localhost:5002/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
        })
        if (!res.ok) {
            throw new Error('failed to update recipe');
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};