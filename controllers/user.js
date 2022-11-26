const db = require('../db/connect');
const bcrypt = require('bcryptjs');



const getalluser = (req, res) => {

    db.query('SELECT * FROM users', (error, results) => {
        if (error) throw error;
        return res.status(200).json({ results })
    })
}

const register = async (req, res) => {
    const { email, password, username } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" })
    } else {
        db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
            if (error) {
                console.log(error);
            }
            if (results.length > 0) {
                return res.status(400).json({ msg: "User already exists" })
            } else {
                const salt = await bcrypt.genSalt(10)
                const hpassword = await bcrypt.hash(password, salt)

                const id = Math.floor(Math.random() * 1000000000);

                db.query('INSERT INTO users SET ?', { email: email, password: hpassword, username: username, uid: id },
                    (error, results) => {
                        if (error) throw error
                        return res.status(200).json({ msg: `${username} registered successfully` })

                    }
                )
            }
        })
    }

}

const loginUser = async (req, res) => {
    const {email,password} = req.body
    if(!email || !password){
        return res.status(400).json({msg:"Please enter all fields"})
    }
    db.query('SELECT * FROM users WHERE email = ?',[email],async (error,results)=>{
        if(error){
            console.log(error);
        }
        if(!results || !(await bcrypt.compare(password,results[0].password))){
            return res.status(400).json({msg:"Invalid credentials"})
        }

        return res.status(200).json({msg:"Logged in successfully",user:{
            username:results[0].username,
            email:results[0].email,
            uid:results[0].uid
        }})
    })

}

module.exports = { register, getalluser ,loginUser }