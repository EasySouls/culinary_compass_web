import { DATABASE_NAME } from "@/constants";
import { Recipe } from "@/types";
import { fetchRecipeById, convertToRecipe } from "@/utils";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_STRING;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri as string, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  },
});

async function fillDatabase() {
  await client.connect();
  const db = client.db(DATABASE_NAME);
  const recipesCollection = db.collection("recipes");

  for (let index = 52764; index <= 53075; index++) {
    const meal = await fetchRecipeById(index);

    if (meal === undefined || meal === null) continue;

    const recipe = convertToRecipe(meal);
    await recipesCollection.insertOne(recipe);
  }

  console.log("Finished filling the database");
}

export async function getRecipeById(id: number) {
  try {
    await client.connect();

    const collection = client.db(DATABASE_NAME).collection("recipes");
    const recipe = await collection.findOne({
      id: id,
    });
    console.log(recipe);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

export async function getRecipes(
  query: string,
  kitchenType: string,
  meatType: string
) {
  try {
    await client.connect();

    const database = client.db(DATABASE_NAME);

    const collection = client.db(DATABASE_NAME).collection<Recipe>("recipes");

    console.log("Text index created successfully.");
    const filter = {
      $text: { $search: query },
      kitchenType: kitchenType,
      meatType: meatType,
    };

    const recipes: Recipe[] = await collection.find(filter).toArray();
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes: ", error);
  } finally {
    await client.close();
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
