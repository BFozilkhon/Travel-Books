const TravelModel = require("../models/Travel.model");


// Method: GET
// Descr : Get all travel books

const getAllTravel = async (req, res) => {
    try{
        const travels = await TravelModel.find()
        res.status(200).json({
            message: "success",
            travels
        })
    }catch{
        res.send(err)
    }
}


// Method: GET
// Descr : Get one travel books

const getOneTravel = async (req, res) => {
    try{    
        const oneTravel = await TravelModel.findById(req.params.id)

        if(!oneTravel){
            return res.status(400).json({
                message: 'Not Found'
            })
        }

        return res.json({
            message: 'success',
            travel: oneTravel
        })

    }catch(err){
        res.send(err)
    }
}


// Method: POST
// Descr : add new travel books

const addTravel = async (req, res) => {
    try{    
          const {title, image, descr} = req.body

          const newTravel = await TravelModel.create({
              title,
              image, 
              descr
          })

          res.status(201).json({
              message: 'success',
              newTravel
          })

    }catch(err){
        res.send(err)
    }
}

// Method: Update
// Descr : update books

const updateTravel =  async (req, res) => {
    try{    
        const {title, image, descr} = req.body
        const oneTravel = await TravelModel.findByIdAndUpdate(req.params.id, {
            title,
            image,
            descr
        })

        res.status(200).json({
            message: 'success',
            editTravel: oneTravel 
        })

    }catch(err){
        res.send(err)
    }
}

const deleteTravel =  async (req, res) => {
    try{    
        await TravelModel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: 'Deleted',
        })

    }catch(err){
        res.send(err)
    }
}

module.exports = {
    getAllTravel,
    getOneTravel,
    addTravel,
    updateTravel,
    deleteTravel
}