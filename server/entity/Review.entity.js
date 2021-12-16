var { EntitySchema } = require('typeorm');

const schema = new EntitySchema({
	name: 'Review',
	tableName: 'tbl_reviews',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: true,
		},
		title: {
			type: 'varchar',
		},
		review: {
			type: 'varchar',
		},
		timestamp: {
			type: 'timestamp',
			default: () => 'CURRENT_TIMESTAMP',
		},
	},
});

module.exports = schema;
