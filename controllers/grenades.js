import { Grenade } from "../models/grenade.js";

function index(req, res) {  
    Grenade.find({})
    .then(grenades => {
        res.render('grenades/index', {
            grenades,
            title:"💣"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}


function create(req, res) {
    req.body.creator = req.user.profile._id
    req.body.jumpThrow = !!req.body.jumpThrow
    Grenade.create(req.body)
    .then(grenade => {
        res.redirect('/grenades')
    })   
    .break(err => {
        console.log(err)
        res.redirect('/grenades')
    })
}


export {
    index,
    create,
}   