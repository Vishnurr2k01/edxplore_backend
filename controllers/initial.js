const db = require('../db/connect');
const bcrypt = require('bcryptjs')
const initaluserData = async (req, res) => {

    const quer1 = 'create database edxplore'
    const quer2 = 'use edxplore'


    const quer3 = 'create table users (uid int(11) NOT NULL,username varchar(255) NOT NULL,email varchar(255) NOT NULL ,password varchar(255) NOT NULL,PRIMARY KEY (uid))'
    await db.query(quer3, (error) => {
        if (error) throw error;
        return res.status(200).json({ msg: "Table created successfully" })
    })
}

const resourceTable = async (req, res) => {
    const quer = 'create table resources (rid int not null primary key, uid int not null ,title varchar(255) not null,category varchar(50) not null ,description varchar(255) not null , link varchar(300) not null , type varchar(255) not null , date date not null ,upvote int default 0,downvote int default 0  , FOREIGN KEY (uid) REFERENCES users(uid))'
    await db.query(quer, (error) => {
        if (error) throw error;
        return res.status(200).json({ msg: "Table created successfully" })
    })
}

module.exports = { initaluserData, resourceTable }