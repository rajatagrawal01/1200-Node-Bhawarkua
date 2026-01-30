const { connectDB ,client} =require("./mongo-db")

connectDB()

const db = client.db("MERN");
const records = db.collection("Records");

async function insertData(data) {
  try {
    await records.insertMany(data);
    console.log("User inserted successfully");
    fetchData()
  } catch (err) {
    console.log("Error while inserting data to MongoDB",err);
  }
}

async function fetchData() {
  try {
    const data = await records.find().toArray();
    console.log("records:", data);
  } catch (err) {
    console.log("Error while fetching data",err);
  }
}

async function updateData() {
  try {
    await records.updateMany({}, {$set:{active:true}});
    console.log("User data updated successfully");
    fetchData()
  } catch (err) {
    console.log("Error while updating to MongoDB",err);
  }
}

async function deleteData() {
  try {
    await records.deleteMany();
    console.log("User data deleted successfully");
    fetchData()
  } catch (err) {
    console.log("Error while deleting data to MongoDB",err);
  }
}

insertData([{ name: "Raxx", age: 25 },{ name: "Raxx", age: 30 }])
fetchData()
updateData()
// deleteData()