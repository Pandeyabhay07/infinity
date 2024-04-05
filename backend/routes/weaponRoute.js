import express from 'express';
import { Weapon } from '../weaponModels.js';
import statusCodes, { StatusCodes } from 'http-status-codes'

const weaponRoute = express.Router();



weaponRoute.get("/weapon", async (req, res) => {
    try {
        const weapon = await Weapon.find();
        if (!weapon)
            return res.json({ msg: "Sorry the desired weapon not found" });
        res.status(StatusCodes.OK).json({ count: weapon.length, data: weapon });
        // res.json("working");
    }
    catch (error) {
        console.log(error);
    }
})
// tested
weaponRoute.post("/weapon", async (req, res) => {
    try {
        const { name, quantity, manuDate, type,lastUpdate,receivedDate,features,sender} = req.body;
        if (!name || !quantity || !manuDate ||!type||!type||!lastUpdate||!receivedDate||!features||!sender) {
            return res
                .status(StatusCodes.BAD_REQUEST)
                .json({ msg: "Please provide all fields" });
        }
        await Weapon.create(req.body);
        res.status(StatusCodes.CREATED).json({ msg: "Weapon Added", data: req.body });
        // req.json({ msg: "Book Added" });
    }
    catch (error){
        console.log(error);
    }
})

//tested
weaponRoute.get("/weapon/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const weapon = await Weapon.findById(id);
        if (!weapon) {
            res
                .status(statusCodes.NOT_FOUND)
                .json({ msg: `Weapon with ${id} not found` });
        }
        res.status(statusCodes.OK).json({ msg: "Weapon found", weapon });
    }
    catch (error) {
        res
            .status(StatusCodes.NOT_FOUND)
            .json({ msg: `Weapon with ${id} not found` });
    }
})


//tested
weaponRoute.delete("/weapon/:id", async(req, res) => {

    const { id } = req.params;
    try {
        const weapon = await Weapon.findByIdAndDelete(id);
        if (!weapon) {
            res
                .status(statusCodes.NOT_FOUND)
                .json({ msg: `Weapon with ${id} not found` });
        }
    }
    catch (error) {
        res
            .status(StatusCodes.NOT_FOUND)
            .json({ msg: `Weapon with ${id} not found` });
    }
    res.send("Weapon Deleted");
})

// tested
weaponRoute.put("/weapon/:id", async(req, res) => {
    const { id } = req.params;
    const { name, quantity, manuDate, type,lastUpdate,receivedDate,features,sender} = req.body;
    try {
        if (!name || !quantity || !manuDate ||!type||!type||!lastUpdate||!receivedDate||!features||!sender) {
            return res
                .status(statusCodes.NOT_FOUND)
                .json({ msg: "Please provide all the fields."});
        }
        const result = await Weapon.findByIdAndUpdate(id, req.body);
        if(!result){
            return res 
                    .status(statusCodes.BAD_REQUEST)
                    .json({msg: "Weapon not found"});
        }
        return res.status(statusCodes.OK).json({msg: "Weapon updated", result});
    }
    catch (error) {
        res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: `Weapon not found` });
    }
})


export default weaponRoute
