const express = require('express')
const axios = require('axios');
const app = express()
const port = 5000

// //Enable cors
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/newsCreate", async (req, res) => {
    const { data } = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        pageSize: req.query.amount, 
        q: req.query.obj, // get the query parameter
        language: 'en',
        from: req.query.minDate,
        to: req.query.maxDate,
      },
      headers: {
        'X-Api-Key': 'dd9fc6f879594e27987d6e1e8b05a369', // optional though the API might require it
    }
    });
  
    res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})