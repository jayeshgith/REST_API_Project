const express = require("express");
const app = express();
// const port = 8080;

const port = process.env.PORT || 8080;

const path = require("path");
const { v4: uuidv4 } = require("uuid");

const methodOverride = require("method-override");



app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));



let posts = [
  {
    id: uuidv4(),
    username: "Manish",
    content:
      "I love to code and I love to watch anime also I love to play Cricket  :) I love to do travelling",
  },
  {
    id: uuidv4(),
    username: "Pinky",
    content:
      "I am From Bangalore, My profession is Nurse,I love to do cooking ",
  },
  {
    id: uuidv4(),
    username: "charan",
    content:
      "I love play Cricket and I am B.E graduate in CSE from VTU University",
  },
];
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts },);
});
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
    
app.post("/posts", (req, res) => {

    // console.log(req.body);
  
  const { username, content } = req.body;
  let id=uuidv4();
    posts.push({ id,username, content });
    //   res.send("it worked");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("show.ejs", { post });

  // res.send("you are viewing the page of " + id);
  
});

app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => p.id === id);
  post.content = newContent;
  // console.log(post);
  // res.send("you are updating the page of " + id);

  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("edit.ejs", { post });
  // res.send("you are editing the page of " + id);
  
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`the port is${port} listening`);
});
