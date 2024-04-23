const express = require("express");
const router = express.Router();
const conn = require("../server/connection");

router.get('/search', async (req, res) => {
    try {
        const  search  = req.query.search; 
        
     
        
        if (!search) {
            return res.status(400).send("Section parameter is missing");
        }

        const queryCommand = `SELECT * FROM schedules WHERE Section LIKE ? OR InstructorName LIKE ?`
        
        conn.query(queryCommand, [`%${search}%`, `%${search}%`], (err, results) => {
            if (err) {
                console.error("Error query:", err);
                return res.status(500).send("Error, walang data na nakuha!");
            }

            if(results.length === 0 ) console.error("Walang data");

         
            return res.status(200).json(results)

           
        });
    } catch (e) {
        console.error("Error handling request:", e);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
