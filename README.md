# Cat_Book

 Cat Book is a wonderful way to share fun cat photos. Now with a more elegant look.

## Installation

This project is updated to use a split directory to where everything that is seen on the client is a seperate directory from all the server side code. As in client and server. This way you can deploy a directory and if you need to change something on the client you don't have to worry about it breaking the your server code in the process. But alos makes it easy for debugging.

### First install dependencies for each directory

via NPM

``
npm install
``

or via bun by the shoterened cmd

``
bun i
``

or the longer cmd

``
bun install
``

### Next Enviroment Vars

create a .env file at the root of the server dir
that matches the env vars that are being used for. This project we will need vars for MongoDB and Cloudinary to see how to do so visit here: [MongoDB Atlas](https://www.mongodb.com/docs/mongocli/v1.26/configure/environment-variables/) and Cloudinary here: [Cloudinary example env](https://github.com/IAMOTZ/node-react-cloudinary/blob/master/.env.example)
