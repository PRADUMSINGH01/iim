import { db } from "@/lib/firebase";
import { collection, get } from "firebase/firestore";
const Test = async () => {
  const snapshot = await db.collection("Users").get(); // Ensure "Users" is a valid collection name

  console.log(snapshot);
  if (snapshot.empty) {
    console.log("No users found.");
  } else {
    snapshot.forEach((doc) => {
      console.log("User ID:", doc.id, "Data:", doc.data());
    });
  }
  return <>test</>;
};

export default Test;
