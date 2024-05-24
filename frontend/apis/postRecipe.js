export const postRecipe = async (recipe) => {
    try {
        const res = await fetch('http://localhost:5002/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(recipe),
        });

        if (!res.ok) {
            throw new Error('Failed to post recipe');
        }

        return res.json();
    } catch (err) {
        console.error(err);
    }
};