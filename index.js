const express = require('express');
const app = express();
const Datastore = require('nedb');
const { request, response } = require('express');

app.listen(3000, () => console.log('Online.'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

