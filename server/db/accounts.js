const Joi = require('joi');
const db = require('./connection');

const Schema = Joi.object({
	unam: Joi.string().max(20).required(),
	pswd: Joi.string().max(40).required(),
});

const accounts = db.get('accounts');

function getAll(){
	return accounts.find();
}

function create(account) {	
	const result = Schema.validate(account);
	if (result.error == null) {
		account.created = new Date();
		return accounts.create(account);
	} else {
				return Promise.reject(result.error);
		}
}

module.exports = {
	create,
	getAll
};