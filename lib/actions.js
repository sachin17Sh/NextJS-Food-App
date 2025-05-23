'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function shareMeals(prevState,formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        image: formData.get("image") || null,
    };

    if (isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size ==0
    ) {
        return {
            message: 'Please fill in all fields correctly.',
        }
    }

    await saveMeal(meal);
    revalidatePath('/meals', 'layout'); 
    redirect('/meals');
}