const express = require('express');
const router = express.Router();


// POST User
router.post('/search', async function(req, res)  {
    const query = req.body.name;
    const base = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const url =  `${base}${query}`;
    
    const options = {
        method: 'POST', 
        headers: {
            'X-RapidAPI-Key': 'b52c679970msh7df9e3315c7f3e2p18c39djsn5ffe9b8612c5',
		    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    }; 
    try {
        let response = await fetch(url, options);
        response = await response.json(); 
        res.status(200).json(response); 
    } catch (error) {
        console.log(err),
        res.status(500).json({
          error: err,
        })
    }
  
    
})


module.exports = router
