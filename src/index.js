// import the required libraries
import express from "express";
import cors from "cors";
import { PrismaClient } from '@prisma/client';


// initialize a new Express application
const app = express();
// initialize the  Prisma client
const prisma = new PrismaClient();

//  parse the JSON body from incomuing API requests
app.use(express.json());
//  add CORS support
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get("/api/notes", async (req, res) => {
  res.json({ message: "success!" });
  // res.send("Welcome to my API");
});

app.get("/notes", async (req, res) => {
  const notes = await prisma.note.findMany();
  res.json(notes);
});

app.post("/api/notes", async (req, res) => {
  //  Extract title and content from the req.body sent by the user when submitting the "Add note" form
  const { title, content } = req.body;

  //  validation and error handling
  if (!title || !content) {
    return res.status(400).send("title and content fields required");
  }

  try {
    // Create a note using the Prisma client
    const note = await prisma.note.create({
      data: { title, content },
    });
    // returned new note object complete with ID as a JSON response
    res.json(note);
  } catch (error) { // handle errors thrown by the Prisma client
    res.status(500).send("Oops, something went wrong");
  }
});

// :id acts as a placeholder
app.put("/api/notes/:id", async (req, res) => {
  //  Extract title and content from the req.body sent by the user when submitting the "Add note" form
  const { title, content } = req.body;
  // Retrieve ID from the req.params and convert it in an integer
  const id = parseInt(req.params.id);

  //  validation and error handling
  if (!title || !content) {
    return res.status(400).send("title and content fields required");
  }

  if (!id || isNaN(id)) {
    return res.status(400).send("ID must be a valid number");
  }

  try {
    const updatedNote = await prisma.note.update({
      where: { id },
      data: { title, content },
    });
    res.json(updatedNote);
  } catch (error) {
    res.status(500).send("Oops, something went wrong");
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  // Retrieve ID from the req.params and convert it in an integer
  const id = parseInt(req.params.id);

  if (!id || isNaN(id)) {
    return res.status(400).send("ID field required");
  }

  try {
    await prisma.note.delete({
      where: { id },
    }),
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Oops, something went wrong");
  }

})

// start the server listening on port 5000
app.listen(5000, () => {
  // display the sentence on the terminal
  console.log("Server is running on localhost:5000");
});