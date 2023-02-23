import mongoose from 'mongoose';

const getMongooseReady = (env)=>{
    mongoose.connect(env, {
       useNewUrlParser: true,
       useUnifiedTopology: true
     })
     return "DB ON ---->>"
}

export default getMongooseReady;