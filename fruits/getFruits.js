import {client, fruitsCollection} from "../mongoConnect.js"

const getAllFruits = async () => {
  try {
    await client.connect()
    const allFruits = await fruitsCollection.find().toArray()
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