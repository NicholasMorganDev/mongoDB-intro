import { credentials } from "./credentials.js"
const mongoURI = credentials

import { MongoClient } from "mongodb"
import { get } from "http"

//create new instance of Mongo
const client = new MongoClient(mongoURI) //use the URI pathway

//connect to the client
client.connect()

//connect to the database or create if their is none
const database = client.db('products')

//connect to collection or create new if their is none
const collection = database.collection('fruits')

const addFruit = async () => {
  const myFruit = {
    name: 'Pear',
    taste: 'Juicy',
    price: 2,
    stock: 100,
  }
  const addedFruit = await collection.insertOne(myFruit)
  console.log(addedFruit) 
}
//addFruit()

const editFruit = async () => {
  const updatedFruit = await collection.findOneAndUpdate({name: 'Cantaloupe' }, {$set: {name: 'Pineapple'}}) 
  console.log(updatedFruit)
}

//editFruit()

const getAllFruits = async () => {
  const allFruits = await collection.find().toArray()
  console.log(allFruits)
}

//getAllFruits();

const deleteFruit = async () => {
  const itemDeleted = await collection.deleteOne({name: 'Pineapple'})
  console.log(itemDeleted)
}

//deleteFruit()

