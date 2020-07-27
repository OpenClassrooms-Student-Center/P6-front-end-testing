import express from "express"
import path from "path"

const app = express()

// app.get("/", (req, res) => {
//     res.send({ hello: "world" });
// });

// __dirname = path.resolve()

app.use(express.static('src/assets'))

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "src/index.html"))
});

app.listen(3000, function() {
  console.log('App is running on port: ' + 3000)
});