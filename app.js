"use strict";

// const express = require('express');
// const app = express();

// const multer = require('multer');

// const sqlite3 = require('sqlite3');
// const sqlite = require('sqlite');

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(multer().none());

/**
 * Establishes a database connection to the database and returns the database object.
 * Any errors that occur should be caught in the function that calls this one.
 */
async function getDBConnection() {
  const db = await sqlite.open({
    filename: "terra.db",
    driver: sqlite3.Database
  });
  return db;
}

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);