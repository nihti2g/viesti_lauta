const Joi = require('joi');
const db = require('./connection');

const Schema = Joi.object({
	username: Joi.string().alphanum().required(), //Here would be the actual username
	subject: Joi.string().required(),
	message: Joi.string().max(500).required(),
	imageURL: Joi.string().uri({
		scheme: [/https?/]
	})
});

const messages = db.get('messages');

function getAll(){
	return messages.find();
}

function create(message) {
	if (!message.username) message.username = 'Anonymous'; //Here would be the actual username
	
	const result = Schema.validate(message);
	if (result.error == null) {
		message.created = new Date();
		return messages.insert(message);
	} else {
				return Promise.reject(result.error);
		}
}

module.exports = {
	create,
	getAll
};