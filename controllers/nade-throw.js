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
    console.log(req.body)
}

function show(req, res) {
    NadeThrow.find(req.params.nadeThrowId)
    .populate("creator")
    .then(nadeThrow => {
        res.render('nade-throws/show')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/nade-throws')
    })
}

export {
    index,
    create,
    show,
}   