const db = require('../db/connect');


const addResource = async (req, res) => {
    const { uid, title, description, link, type, category } = req.body;
    if(!title || !description || !link || !type ||  !category){
        return res.status(400).json({message:'all fields are required'})
    }
    const date = new Date()
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
        return res.status(200).json({data:results })
    })
}  

const getUserResources = async (req,res)=>{
    const {id} = req.params
    parseInt
    const quer = 'select * from resources where uid = ?'
    await db.query(quer,[id],(error,results)=>{
        if(error) throw error;
        return res.status(200).json({data:results})
    })
   
 }

const updateResource = async (req, res) => {
    const {vote} = req.body
    const {id} = req.params

    if(vote=="up"){
        const quer = 'update resources set upvote = upvote+1 where rid = ? '
        await db.query(quer,[id],(error)=>{
            if(error)throw error;
            return res.status(200).json({message:'upvoted'})
        } )
    }
    if(vote=="down"){
        const quer = 'update resources set downvote=downvote-1 where rid = ? '
        await db.query(quer,[rid],(error)=>{
            if(error)throw error;
            return res.status(200).json({message:'downvoted'})
        } )
    }
    
}

const deleteResource = async (req,res)=>{
    const {id} = req.params
    const quer = 'delete from resources where rid = ?'
    await db.query(quer,[id],(error)=>{
        if(error)throw error;
        return res.status(200).json({message:'deleted'})
    })
}

module.exports = {addResource,updateResource,getAllResource,getUserResources,deleteResource}

