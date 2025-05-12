import Link from "next/link";
import classes from "./page.module.css"
import MealsGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: 'All Meals',
  description: 'Browse all meals shared by our loving community.',
};

async function Meals(){
  const meals =  await getMeals()
  return <MealsGrid meals = {meals}/>
}

export default  function MealsPage() {
 
  return (
   <>
    <header className={classes.header}>
      <h1>Delicious Meals created <span className={classes.highlight}>by you</span></h1>
      <p>Choose your favourite recipe and cook it by yourself. It is easy and fun!!!</p>
      <p className={classes.cta}>
        <Link href="./meals/share">
          Share your Favourite Recipe
        </Link>
      </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<h1 className={classes.loading}>Fetching Data...</h1>}>
        <Meals />
      </Suspense>
    </main>
   </>
  )
}
