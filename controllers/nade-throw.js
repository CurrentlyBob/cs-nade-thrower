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
    .populate([
        {path: "creator"},
        {path: "comments.author"}
    ])
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

function flipJumpThrow(req, res) {
    NadeThrow.findById(req.params.nadeThrowId)
    .then(nadeThrow => {
        nadeThrow.jumpThrow = !nadeThrow.jumpThrow
        nadeThrow.save()
        .then(()=> {
            res.redirect(`/nade-throws/${nadeThrow._id}`)
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('nade-throws')
    })
}

function edit(req, res) {
    NadeThrow.findById(req.params.nadeThrowId)
    .then(nadeThrow => {
        res.render('nade-throws/edit', {
            nadeThrow,
            title: "edit nade 💣"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/nade-throws')
    })
}

function update(req, res) {
    NadeThrow.findById(req.params.nadeThrowId)
    .then(nadeThrow => {
        if(nadeThrow.creator.equals(req.user.profile._id)) {
            req.body.jumpThrow = !!req.body.jumpThrow
            nadeThrow.updateOne(req.body)
            .then(()=> {
                res.redirect(`/nade-throws/${nadeThrow._id}`)
            })
        } else {
            throw new Error('Not authorized')
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect('/nade-throws')
    })
}

function deleteNadeThrow(req, res) {
    NadeThrow.findById(req.params.nadeThrowId)
    .then(nadeThrow => {
        if (nadeThrow.creator.equals(req.user.profile._id)) {
            nadeThrow.deleteOne()
            .then(() => {
                res.redirect('/nade-throws')
            })
        } else {
            throw new Error ('Not Authorized')
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect('/nade-throws')
    })
}

function addComment(req, res) {
    NadeThrow.findById(req.params.nadeThrowId)
    .then(nadeThrow => {
        req.body.author = req.user.profile._id
        nadeThrow.comments.push(req.body)
        nadeThrow.save()
        .then(() => {
            res.redirect(`/nade-throws/${nadeThrow._id}`)
        })
        .catch(err => {
            console.log(err)
            res.redirect('/nade-throws')
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/nade-throws')
    })
}

function editComment(req, res) {
    NadeThrow.findById(req.params.nadeThrowId)
    .then(nadeThrow => {
        const comment = nadeThrow.comments.id(req.params.commentId)
        if(comment.author.equals(req.user.profile._id)) {
            res.render('nadeThrows/editComment', {
                nadeThrow,
                comment,
                title: 'Update Comment'
            })
        } else {
            throw new Error('Not Authorized')
        }
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
    flipJumpThrow,
    edit,
    update,
    deleteNadeThrow as delete,
    addComment,
    editComment,
}   