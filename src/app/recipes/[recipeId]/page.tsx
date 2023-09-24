import { getRecipeById } from "@/data/mongodb";

const RecipePage = async ({ params }: { params: { recipeId: string } }) => {
  return <div>{params.recipeId}</div>;
};

export default RecipePage;
