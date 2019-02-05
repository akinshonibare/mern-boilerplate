var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DataSchema = new Schema(
	{
		Data: String
	},
	{
		versionKey: false
	}
);

const Data = mongoose.model("Data", DataSchema, "data");
module.exports = Data;
