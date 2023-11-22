const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/loginT")
.then(() =>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const loginSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }

})
const scoreSchema=new mongoose.Schema({
    lastgame:{
        type:Number,
        required:true
    },
    slastgame:{
        type:Number,
        required:true
    },
    tlastgame:{
        type:Number,
        required:true
    }
})
const positionSchema=new mongoose.Schema({
    lastposition:{
        type:Number,
        required:true
    },
    slastposition:{
        type:Number,
        required:true
    },
    tlastposition:{
        type:Number,
        required:true
    }
})
const profileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    profileimg:{
        type:Number,
        required:true

    },
    TotalGP:{
        type:Number,
        required:true
    },
    HighestScore:{
        type:Number,
        required:true
    },
    last3game:scoreSchema,
    last3position:positionSchema
})


const collection=new mongoose.model("Collection1",loginSchema)
const profile=new mongoose.model("collection2",profileSchema)
module.exports={collection,profile};

