
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./utils/db");
const productRoutes = require('./routes/productsRoute')
const cors = require('cors')
connectDB();




const corsOptions={
  origin:'http://localhost:5173',
  methods:['GET','POST','PUT','DELETE'],
  credentials:true,
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser())
app.use('/api/v1/products', productRoutes)


app.get('/', (req,res)=>{
  res.send('hello world')
})



const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})