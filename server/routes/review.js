const express = require("express");

const Review =require("../models/review.model")

const router = express.Router();


//inserting a review
router.post("/insert", async (req, res) => {
  const { movieName,movieReview } = req.body;
  
 console.log(movieName);
 console.log(movieReview);

  try {
    const response = await Review.save(movieName,movieReview);
    res.send(response)
    
  } catch (error) {
    console.log(error);
    res.send(error.message)
    
  }
  
});

//getting all the reviews
router.get("/reviews", async (req, res) => {
 
  try {
    const response = await Review.getAll()
    res.send(response)
    
  } catch (error) {
    console.log(error);
    res.send(error.message)
    
  }
});



//updating data
router.put("/update", async (req, res) => {
  const { id ,  movieReview} = req.body;
  
 
  try {
    const response = await Review.updateOne(id, movieReview)
    res.send(response)
    
  } catch (error) {
    console.log(error);
    res.send(error.message)
    
  }
});

//deleting a review
router.delete("/review/:id", async (req,res)=>{

  const {id} = req.params;
  try {
    const response = await Review.deleteOne(id)
    res.send(response)
    
  } catch (error) {
    console.log(error);
    res.send(error.message)
    
  }
  
})
module.exports = router;
 