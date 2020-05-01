const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);




const plusTotalCount = function(card, callback) {
  // console.log(index, card);
  connection.query(`update Cards set totalCount = totalCount + 1  where cardName = "${card.cardName}";`, (err, data) => {
    if (err) {
      console.error('database jinkies');
      throw err;
    } else {
      callback(null, data);
    }
  })
};

const newReading = (data, callback) => {
  //static
  // console.log(data.cards);

  const date = data.static.date;
  const spreadName = data.static.spreadName;
  const subject = data.static.subject;
  const readingNotes = data.static.readingNotes;
  
  //dynamic
  data.cards.map((card) => {
    const context = card.context;
    const resultCard = card.resultCard;
    const reversed = card.reversed;
    const cardNotes = card.cardNotes;

    connection.query(
      `INSERT INTO Reading (readingNotes, subject) VALUES ("${readingNotes}", "${subject}");
      select id into @cid from Cards where cardName = "${resultCard}";
      select id into @rid from Reversed where value = ${reversed};
      select idDay into @did from Day where date = "${date}";
      select id into @sid from Spreads where spreadName = "${spreadName}";
      select id into @reading from Reading where readingNotes = "${readingNotes}";
      INSERT INTO Readings (card_id, reversed, date_id, spread_id, reading_id, context, cardNotes)
      VALUES (@cid, @rid, @did, @sid, @reading, "${context}", "${cardNotes}");`, (err, data) => {
          if (err) {
            console.error('Database Jinkies!');
            throw err;
          } else {
            // res.send(data);
            callback(null, data);
          }
      })
  });
  
};

const getCards = function(callback) {
  // console.log(index, card);
  connection.query(`select * from Cards;`, (err, data) => {

    if (err) {
      console.error('database jinkies');
      throw err;
    } else {
      callback(null, data);
    }

  })
};

const getReadings = function(callback) {
  // console.log(index, card);
  connection.query(`select * from Readings;`, (err, data) => {

    if (err) {
      console.error('database jinkies');
      throw err;
    } else {
      callback(null, data);
    }

  })
};

const getSingleReading = function(id, callback) {
  // console.log(index, card);
  connection.query(`SELECT * FROM Readings where reading_id=${id};`, (err, data) => {

    if (err) {
      console.error('database jinkies');
      throw err;
    } else {
      callback(null, data);
    }

  })
};

const getReadingNotes = function(id, callback) {
  // console.log(index, card);
  connection.query(`SELECT * FROM Reading where id=${id};`, (err, data) => {

    if (err) {
      console.error('database jinkies');
      throw err;
    } else {
      callback(null, data);
    }

  })
};

const getAllReadingNotes = function(callback) {
  // console.log(index, card);
  connection.query(`SELECT * FROM Reading;`, (err, data) => {

    if (err) {
      console.error('database jinkies');
      throw err;
    } else {
      callback(null, data);
    }

  })
};

const getDay = function(day, callback) {
  // console.log(index, card);
  connection.query(`

  SELECT idDay INTO @did FROM Day WHERE date = ${day};
  SELECT * FROM readings where date_id=@did;
  
  `, (err, data) => {

    if (err) {
      console.error('database jinkies');
      throw err;
    } else {
      callback(null, data);
    }

  })
};


module.exports = {
  plusTotalCount,
  newReading,
  getCards,
  getReadings,
  getSingleReading,
  getReadingNotes,
  getAllReadingNotes,
  getDay,
};
