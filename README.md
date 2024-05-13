# Cat_Book

 Cat Book is a wonderful way to share fun cat photos. Now with a more elegant look.
## Description

This project is updated to use a split directory to where everything that is seen on the client is a seperate directory from all the server side code. As in client and server. This way you can deploy a directory and if you need to change something on the client you don't have to worry about it breaking the your server code in the process. But also makes it easy for debugging.

## Installation

Upon local installation of this project we will need bun js installed from either NVM via NPM ([Node Version Manger](https://github.com/nvm-sh/nvm) a guide to installing nvm easy and simple [here](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)) or directly from NPM via [Node JS](https://nodejs.org/en/download). Once installed grab the installed dir for [Bun JS](https://bun.sh/) and follow there docs to properly install bun. We can also install it globally and much easier via NPM:

```sh
npm install -g bun
```
Thsi will install bun js globally on to your node installation

If you have both installed just move on to the next steps

### First install dependencies for each directory

But wait we need to be in the right directory/folder first 

do that by this:

```sh
cd Cat_Book
```
now do this for both the server and client directories/folders

via your favorite package manager now install the dependencies.

### Server

npm
```sh
cd server
npm install
```
yarn
```sh
yarn install
```
the recommened way for this project is to use bun

short cmd 
```sh
bun i
```

or the longer cmd

```sh
bun install
```

### Client

npm
```sh
cd 
npm install
```
yarn
```sh
yarn install
```
the recommened way for this project 

bun short cmd 
```sh
bun i
```

or the longer cmd

```sh
bun install
```

### Next Enviroment Variables

create a .env file at the root of the server dir
that matches the env variables that are being used for. This project we will need vars for MongoDB and Cloudinary to see how to do so visit here: [MongoDB Atlas](https://www.mongodb.com/docs/mongocli/v1.26/configure/environment-variables/) and Cloudinary here: [Cloudinary example env](https://github.com/IAMOTZ/node-react-cloudinary/blob/master/.env.example)
