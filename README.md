# Devour Burger App
This app allows users to add burgers to a MySQL Database, then devour them! The main page displays all burgers and a form to add burgers.

## Setup
This setup assumes that you have a running MySQL Database running locally on your system
* Create Database tables
  ```
  $> mysql -u root -p < ./db/schema.sql
  $> mysql -u root -p < ./db/seeds.sql
  ```
* install dependencies
```npm i```
* start server
```npm run dev```
* rename .env.example file and full-in missing info

## Add a Burger
To add a burger, enter a name and click the ```Add Burger``` button.  This will add it to the table below to allow it to be devoured.

## Burgers to Devour
This table shows the burgers in the database that have yet to be devoured. Clicking the ```Devour IT!``` button will cause it to be devoured and disappear from the table.

## Devoured Burgers
This table shows all burgers that have been devoured.
