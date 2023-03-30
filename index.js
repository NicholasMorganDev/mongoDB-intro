import { client } from "./mongoConnect.js"

//connect to the client
//client.connect()

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
  try {
    await client.connect()
    const allFruits = await collection.find().toArray()
    console.log(allFruits)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}
//Can rewrite this line with promises (much longer and technical)

// const getAllFruits = () => {
//   collection.find().toArray()
//     .then(items => console.log(items))
//     .catch(console.log)
//     console.log(allFruits)
// }

getAllFruits();

const deleteFruit = async () => {
  try {
    await client.connect()
    const itemDeleted = await collection.deleteOne({name: 'Pineapple'})
    console.log(itemDeleted)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}

//deleteFruit()

