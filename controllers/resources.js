const db = require('../db/connect');


const addResource = async (req, res) => {
    const { uid, title, description, link, type, date ,category } = req.body;
    if(!title || !description || !link || !type || !date || !category){
        return res.status(400).json({message:'all fields are required'})
    }
    const rid = Math.floor(Math.random() * 1000000000);
    const quer = 'insert into resources (rid,uid,title,description,link,type,date,category) values (?,?,?,?,?,?,?,?)'
    db.query(quer, [rid,uid, title, description, link, type, date,category], (error) => {
        if (error) throw error;
        return res.status(200).json({ msg: "Resource added successfully" ,data:req.body})
    })
}

const getAllResource = async (req, res) => { 
    const quer = 'select * from resources'
    await db.query(quer, (error,results) => {
        if (error) throw error;
        return res.status(200).json({ msg: "Table created successfully",data:results })
    })
}  

const updateResource = async (req, res) => {
    const {vote} = req.body
    const {rid} = req.params

    if(vote=='up'){
        const quer = 'update resources set upvote = upvote+1 where rid = ? '
        await db.query(quer,[rid],(error)=>{
            if(error)throw error;
            return res.status(200).json({message:'upvoted'})
        } )
    }
    if(vote=='down'){
        const quer = 'update resources set downvote=downvote-1 where rid = ? '
        await db.query(quer,[rid],(error)=>{
            if(error)throw error;
            return res.status(200).json({message:'downvoted'})
        } )
    }
    
}

module.exports = {addResource,updateResource,getAllResource}

