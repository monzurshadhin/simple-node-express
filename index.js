
const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const users = [
  {
    id: 0,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 1,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 2,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 3,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
];
app.get("/users", (req, res) => {
  const search = req.query.search;
  console.log(search);
  if (search) {
      const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      res.send(searchResult)
  } else {
    res.send(users);
  }
});
// app method 
app.post('/users',(req,res)=>{
  console.log('hitting the post',req.body)
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  // res.json(newUser);
  // or 
  res.send(JSON.stringify(newUser))
})
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  const index = req.params.id;
  res.send(users[index]);
});
app.listen(port, () => {
  console.log(`example port is ${port}`);
});
