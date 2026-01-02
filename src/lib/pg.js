const Pg = require('pg');

const pool = new Pg.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});

async function uniqRow(query, ...arr) {
    try {
        const client = await pool.connect();
        const result = await client.query(query, arr);
        client.release();
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}

module.exports = uniqRow