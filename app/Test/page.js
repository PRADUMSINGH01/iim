import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://hs9040301:yourPassword@users.rhh1o.mongodb.net/Users?retryWrites=true&w=majority=false";

async function testConnection() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected successfully to MongoDB!");
    await client.close();
  } catch (error) {
    console.error("Connection failed:", error.message);
  }
}

testConnection();

const Test = () => {
  return <>test</>;
};

export default Test;
