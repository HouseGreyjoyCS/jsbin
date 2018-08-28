const pgp = require('pg-promise')(/*Options?*/);

const db = pgp('postgres://uuhiornm:qVvbM-CUGGmePWqcYMX0ffeU6Kp706ot@stampy.db.elephantsql.com:5432/uuhiornm');
module.exports = db;