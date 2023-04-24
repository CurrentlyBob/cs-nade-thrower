import { NadeThrow } from "../models/nade-throw.js";

function index(req, res) {  
NadeThrow.find({})
    .then(nadeThrows => {
        res.render('nade-throws/index', {
            nadeThrows,
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
    NadeThrow.create(req.body)
    .then(nadeThrow => {
        res.redirect('/nade-throws')
    })   
    .catch(err => {
        console.log(err)
        res.redirect('/nade-throws')
    })
}

function show(req, res) {
    NadeThrow.findById(req.params.nadeThrowId)
    .populate("creator")
    .then(nadeThrow => {
        res.render('nade-throws/show', {
        nadeThrow,
        title: "💣 show"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

export {
    index,
    create,
    show,
}   