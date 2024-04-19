const express = require("express");
const router = express.Router();
const conn = require("../server/connection");

router.get('/section', async (req, res) => {
    try {
        const  section  = req.query.section; 
 
        
        if (!section) {
            return res.status(400).send("Section parameter is missing");
        }

        const queryCommand = `SELECT * FROM schedules WHERE Section LIKE ? `
        
        conn.query(queryCommand, [`%${section}%`], (err, results) => {
            if (err) {
                console.error("Error query:", err);
                return res.status(500).send("Error, walang data na nakuha!");
            }

         
            return res.status(200).json(results)

           
        });
    } catch (e) {
        console.error("Error handling request:", e);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
