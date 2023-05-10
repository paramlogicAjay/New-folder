import express from "express";

const app = express();
const port = 9000;

app.use('/get',(req,res)=>{
    res.json({message:'Hello-World'})
})


app.listen(9000, () => {
  console.log(`Strating Server on port ${port}`);
});
