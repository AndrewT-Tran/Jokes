const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/Jokes", JokeController.findAllJoke);
    app.get("/api/Jokes/:id", JokeController.findOneJoke);
    app.post("/api/Jokes", JokeController.createNewJoke);
    app.patch("/api/Jokes/:id", JokeController.updateExistingJoke);
    app.delete("/api/Jokes/:id", JokeController.deleteAnExistingJoke);
    app.get('/api/Jokes/rando', JokeController.findRandomJoke);

};
