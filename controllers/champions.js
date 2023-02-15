const { Champion } = require("../models")

const create = async(req, res) => {
  try {
    if (req.body.arcane === "true") {
      req.body.arcane = true
    }
    if (req.body.arcane === "false") {
      req.body.arcane = false
    }
    const champion = await Champion.create(req.body)
    console.log(req.body);
    res.status(200).json(champion)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async(req, res) => {
  try{
    const champions = await Champion.findAll()
    res.status(200).json(champions)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async(req, res) => {
  try {
    const champion = await Champion.findByPk(req.params.id)
    champion.set(req.body)
    await champion.save()
    res.status(200).json(champion)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteChampion = async(req, res) => {
  try {
    const champion = await Champion.findByPk(req.params.id)
    await champion.destroy()
    res.status(200).json(champion)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create, 
  index,
  update,  
  delete: deleteChampion
}