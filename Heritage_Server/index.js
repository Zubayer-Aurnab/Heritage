const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//<------------!!!------------->

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://heritage:zIYdafYx7uuE0eOk@cluster0.2dfdg2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const UserCollection = client.db("Heritage").collection("Users");
    const PropertyCollection = client.db("Heritage").collection("all-property");
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });

    // post new user to database
    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await UserCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exists", insertedId: null });
      }
      const result = await UserCollection.insertOne(user);
      res.send(result);
    });

    // get the user data from database
    app.get("/users", async (req, res) => {
      const result = await UserCollection.find().toArray();
      res.send(result);
    });

    app.patch("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const { Role } = req.body;
      const updatedDoc = {
        $set: {
          role: Role,
        },
      };
      const result = await UserCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });
    // user delete api
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await UserCollection.deleteOne(query);
      res.send(result);
    });
    //get user data from database bt email
    app.get("/users/:email", async (req, res) => {
      const email = await req.params.email;
      console.log(email);
      const query = { email: new RegExp(`^${email}$`, "i") };

      const result = await UserCollection.findOne(query);

      res.send(result);
    });

    //post data
    app.post("/post", async (req, res) => {
      const contest = req.body;
      const result = await PropertyCollection.insertOne(contest);
      res.send(result);
    });
    //get all Property data////////////////////////////////////////////////////
    app.get("/all-property", async (req, res) => {
      const result = await PropertyCollection.find().toArray();
      res.send(result);
    });
    //find property by id
    app.get("/single-property/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      console.log(id, query);
      const result = await PropertyCollection.findOne(query);
      res.send(result);
    });

    console.log("successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Heritage server is running");
});

app.listen(port, () => {
  console.log(`Heritage server is running on port: ${port}`);
});
