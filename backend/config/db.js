// import mongoose from "mongoose"

// export async function dbconnect(){
//   try{
//     await mongoose.connect(DB_URL,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true
//     })

//     console.log("DB Connected")
//   }
//   catch(err){
//      console.err(err)
//      console.log("DB Connection Failed")
//   }
// }

import mongoose from "mongoose";

export function dbconnect() {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error(err);
    console.log("DB Connection Failed");
  });
}
