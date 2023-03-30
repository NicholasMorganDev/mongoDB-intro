import { client, toysCollection} from "../mongoConnect.js"

const getAllToys = async () => {
try {
    await client.connect()
    const allToys = await toysCollection.find().toArray()
    console.log(allToys)
} catch (error) {
  console.log(error)
} finally {
  await client.close()
}
}

getAllToys()