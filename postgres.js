const pg = require('pg');

const config = {
    host: '106.14.148.37',
    user: 'postgres',
    password: '11111111',
    database: 'postgres',
    port: 5432
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else {
        queryDatabase();
    }
});

function queryDatabase() {
    const query = `
        DROP TABLE IF EXISTS product;
        CREATE TABLE product (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
        INSERT INTO product (name, quantity) VALUES ('banana', 150);
        INSERT INTO product (name, quantity) VALUES ('orange', 154);
        INSERT INTO product (name, quantity) VALUES ('apple', 100);
    `;

    client
        .query(query)
        .then(() => {
            console.log('Table created successfully!');
            client.end(console.log('Closed client connection'));
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');
            process.exit();
        });
}