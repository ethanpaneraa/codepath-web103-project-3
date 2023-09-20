import { pool } from "../config/database.js";

const fetchLocations = async (req, res) => {
    try {
        const results = await pool.query("SELECT location FROM resources ORDER BY ID ASC"); 
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({ error: err.message });
    };
};

export default {
    fetchLocations,
};