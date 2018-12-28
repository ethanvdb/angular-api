const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Stat = require('../models/Stat');

//get all stats
router.get('/', (req, res, next)=> {
    Stat.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

//nieuwe stats aanmaken
router.post('/', (req, res, next)=> {
    const stats = new Stat({
        _id: new mongoose.Types.ObjectId,
        aantalWedstrijden: req.body.aantalWedstrijden,
        gemaakteDoelpunten: req.body.gemaakteDoelpunten,
        assists: req.body.assists,
        schotenOpDoel: req.body.schotenOpDoel,
        schoten: req.body.schoten
    });
    stats
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Aangemaakt',
        aangemaakteStats: stats
    })
});

// update stats via patch
router.patch('/:statId', (req, res, next)=> {
    const id = req.params.statId;
    const updateOps = {};

    for (const key of Object.keys(req.body)) {
      updateOps[key] = req.body[key]
    }
    Opdracht.update({_id: id}, {$set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

// alle stats verwijderen
router.delete('/', (req, res, next)=> {
    Stat.remove({})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

module.exports = router;