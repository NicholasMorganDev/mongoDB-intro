import { client, toysCollection} from '../mongoConnect.js'


const myToy = {
  name: 'Optimus Prime',
  type: 'Transformer',
  cool: true,
  price: 40,
  description: 'Leader of the Auto-bots, blue semi-truck with sword.'
}

const addToy = async () => {
try {
    await client.connect()
    const addedToy = await toysCollection.insertOne(myToy)
    console.log(addedToy)
} catch (error) {
  console.log(error)
} finally {
  await client.close()
}
}

addToy()