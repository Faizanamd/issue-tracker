
import app from './index.js';
import { connectToMongoose } from './src/config/connectToMongo.js';

app.listen(3000, ()=>{
    connectToMongoose();
    console.log("App is listening at port 3000")
})