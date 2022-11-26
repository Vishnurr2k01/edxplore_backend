const db = require('../db/connect');


const addBookmark = async (req, res) => {
    const {id} = req.params
    const {uid} = req.body
    const bid = Math.floor(Math.random() * 1000000000);
    const quer2 = 'select * from bookmarks where uid = ? and rid = ?'
    await db.query(quer2,[uid,id],(error,results)=>{
        if(results.length>0){
            return res.status(400).json({message:'already bookmarked'})
        }else{
            const quer = 'insert into bookmarks (bid,rid,uid) values (?,?,?)'

             db.query(quer,[bid,id,uid],(error)=>{
                if(error) throw error;
                return res.status(200).json({message:'bookmarked'})
            })
        }
    })
   
}

const removeBookmark = async (req,res)=>{
    const {id} = req.params
    const quer = 'delete from bookmarks where bid = ?'
    await db.query(quer,[id],(error)=>{
        if(error)throw error;
        return res.status(200).json({message:'deleted'})
    })
} 

const getUserBookmarks = async (req,res)=>{
    const {id} = req.params
    const quer = 'select * from bookmarks where uid = ?'
    await db.query(quer,[id],(error,results)=>{
        if(error) throw error;
        return res.status(200).json({data:results})
    })
}

module.exports = {addBookmark,removeBookmark,getUserBookmarks}