import { DATABASE_NAME } from "@/constants";
import { fetchRecipeById, convertToRecipe } from "@/utils";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_STRING;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri as string, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function fillDatabase() {
  await client.connect();
  const db = client.db(DATABASE_NAME);
  const recipesCollection = db.collection("recipes");

  for (let index = 52764; index <= 53075; index++) {
    const meal = await fetchRecipeById(index);
    const recipe = convertToRecipe(meal);

    await recipesCollection.insertOne(recipe);
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
    await fillDatabase();
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

export default client;
