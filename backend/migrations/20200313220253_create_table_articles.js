
exports.up = function(knex, Promise) {
    return knex.schema.createTable('article', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description', 1000).notNull()
        table.string('imageURL', 1000)
        table.integer('userId').references('id')
        .inTable('users')
        table.integer('categoryId').references('id')
        .inTable('categories')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('articles')
};
