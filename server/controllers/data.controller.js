var Data = require("../models/Data");

exports.getData = (req, res) => {
	console.log("getting");
	res.status(200).send({
		msg: "data sent"
	});
};

exports.uploadData = (req, res) => {
	console.log("uploading", req.body);
	res.status(200).send({
		msg: "data uploaded"
	});
};
