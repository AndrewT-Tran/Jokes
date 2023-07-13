const Joke = require('../models/joke.model')

module.exports.findAllJoke = (req,res) => {
	Joke.find()
	.then((allDaJokes)=>{
		res.json ({joke: allDaJokes});
	})
	.catch ((err) =>{
		res.json(err);
	});
};

module.exports.findOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then((oneSingleJoke) => {
			res.json({ joke: oneSingleJoke });
		})
		.catch((err) => {
			res.json(err);
		});
};

module.exports.createNewJoke = (req, res) => {
	Joke.create(req.body)
		.then((newlyCreatedJoke) => {
			res.json({ joke: newlyCreatedJoke });
		})
		.then(console.log(res))
		.catch((err) => {
			res.json(err);
		});
};

module.exports.updateExistingJoke = (req, res) => {
	User.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true
	})
		.then((updatedJoke) => {
			res.json({ joke: updatedJoke });
		})
		.catch((err) => {
			res.json(err);
		});
};

module.exports.deleteAnExistingJoke = (req, res) => {
	User.deleteOne({ _id: req.params.id })
		.then((result) => {
			res.json({ result: result });
		})
		.catch((err) => {
			res.json(err);
		});
};

module.exports.findRandomJoke = (req, res) => {
	Joke.countDocuments().exec((err, count) => {
		if (err) {
			res.json(err);
		} else {
			const randomIndex = Math.floor(Math.random() * count);
			Joke.findOne().skip(randomIndex).exec((err, randomJoke) => {
				if (err) {
					res.json(err);
				} else {
					res.json({ joke: randomJoke });
				}
			});
		}
	});
};