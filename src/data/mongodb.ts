import { DATABASE_NAME, categories } from "@/constants";
import { CategoryValue, Recipe } from "@/types";
import { fetchRecipeById } from "@/utils";
import { MongoClient, ServerApiVersion } from "mongodb";
import { cache } from "react";

const uri = process.env.MONGODB_CONNECTION_STRING;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri as string, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  },
});

// async function fillDatabase() {
//   await client.connect();
//   const db = client.db(DATABASE_NAME);
//   const recipesCollection = db.collection("recipes");

//   for (let index = 52764; index <= 53075; index++) {
//     const meal = await fetchRecipeById(index);

//     if (meal === undefined || meal === null) continue;

//     const recipe = convertToRecipe(meal);
//     await recipesCollection.insertOne(recipe);
//   }

//   console.log("Finished filling the database");
// }

export async function getRecipeById(id: number): Promise<Recipe | null> {
  try {
    await client.connect();

    const collection = client.db(DATABASE_NAME).collection<Recipe>("recipes");
    const recipe = await collection.findOne({
      id: id,
    });
    return recipe;
  } catch (error) {
    console.log(`Can't find recipe with id ${id}. Error: ${error}`);
    return null;
  } finally {
    await client.close();
  }
}

export async function getRecipes(
  limit: number,
  query?: string,
  kitchenType?: string,
  meatType?: string
) {
  try {
    await client.connect();

    const database = client.db(DATABASE_NAME);
    const collection = database.collection<Recipe>("recipes");

    const filter: any = {};
    if (query !== undefined) {
      filter.$text = { $search: query };
    }
    if (kitchenType !== undefined) {
      filter.kitchenType = kitchenType;
    }
    if (meatType !== undefined) {
      filter.meatType = meatType;
    }

    console.log(filter);

    const recipes = await collection
      .find(filter)
      .limit(Number(limit))
      .toArray();

    // const recipes: Recipe[] = recipesWithId.map((recipesWithId: any) => {
    //   const { _id, ...rest } = recipesWithId;
    //   return { ...rest, id: _id.toString() };
    // });
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes: ", error);
  } finally {
    await client.close();
  }
}

export async function getRecipesByCategory(category: CategoryValue) {
  try {
    await client.connect();

    const db = client.db(DATABASE_NAME);
    const collection = db.collection<Recipe>("recipes");

    const filter = {
      meatType: category,
    };
    const recipes: Recipe[] = await collection.find(filter).limit(5).toArray();

    // const recipes: Recipe[] = recipesWithId.map((recipesWithId: any) => {
    //   const { _id, ...rest } = recipesWithId;
    //   return { ...rest, id: _id.toString() };
    // });

    return recipes;
  } catch (error) {
    console.error("Error fetching recipes by category: ", error);
  }
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export default client;
