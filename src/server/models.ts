const { Pool } = require('pg');
const PG_URI: string =
	'postgres://qvboqcjo:HxseI-OabOYTNDZMCyRbA_l-gScT4fF5@queenie.db.elephantsql.com/qvboqcjo';

// initate new pool
const pool = new Pool({
	connectionString: PG_URI,
});

//export pool
module.exports = {
	query: (text: string, params: string, callback: Function) => {
		console.log('executed query', text);
		return pool.query(text, params, callback);
	},
};
// users table: pk userid, username, pass, name, birthday
// drinks table: fk userid, name of drink, pk drinkid, instructions, alcoholic y/n, ingredients (array), measurements (array), photo url