# [311]()
## Overview
**Write Overview of Project 2 Here**
## Team Members
* Alex Harris
* Jessi Cord
* Luke Champ
* Maddie Deming
* Will Garvin
## APIs
* [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)
## Dependencies
* body-parser
* chai
* express
* express-handlebars
* mocha
* mysql2
* nodemailer
* sequelize
* sequelize-cli
## Installation
### Install Locally
```
git clone https://github.com/thechampl/311.git
cd 311/
npm install
```
### config.json File
1. Navigate to the `config.json` file in the `config` directory and locate the `development` object:
```
  "development": {
    "username": "[root]",
    "password": "[password]",
    "database": "threeoneone_db",
    "host": "[localhost]",
    "dialect": "mysql",
    "operatorsAliases": false
  }
```
2. Edit any of the values in the brackets above to coordinate with your MySQL Database.
### Setup Database
1. Drop Database
```
sequelize db:drop
```
2. Add Database
```
sequelize db:create
```
3. Add Tables
```
sequelize db:migrate
```
4. Add Seed Data
```
sequelize db:seed:all
```
### Command
`node server.js`
## Requirements
### Basic
- [x] Must use a Node and Express Web Server
- [x] Must be backed by a MySQL Database with a Sequelize ORM
- [x] Must have both GET and POST routes for retrieving and adding new data
- [ ] Must incorporate Basic Testing Framework
- [ ] Must be deployed using Heroku (with Data)
- [x] Must utilize at least one new library, package, or technology that we haven’t discussed
- [x] Must have a polished frontend / UI
- [x] Must have folder structure that meets MVC Paradigm
- [ ] Must meet good quality coding standards (indentation, scoping, naming
### Nice-to-Haves
- [x] Utilize Handlebars for Server-Side Templating
- [x] Incorporate Authentication (JSON Web Tokens, Sessions, Etc.)
- [x] Use an existing public dataset to power the database
- [x] Create a migration strategy for sharing data across team members.
