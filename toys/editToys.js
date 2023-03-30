import {client, toysCollection} from '../mongoConnect.js'

const editToys = async () => {
  try {
    await client.connect()
    const updatedToy = await toysCollection.findOneAndUpdate({name: 'Optimus Prime'},{$set: {name: 'Optimus Primo'}})
    console.log(updatedToy)
} catch (error) {
  console.log(error)
} finally {
  await client.close() 
}
}

editToys()