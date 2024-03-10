import moment from 'moment/moment.js';
import {db} from '../connect.js';
import jwt from "jsonwebtoken";
export const getPosts = (req, res) => {
    const userId = req.query.userId;
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if(err) return res.status(403).json("token is not valid"); 
        const q = `SELECT p.*, u.id AS userid, u.name  FROM posts AS p JOIN users AS u on(u.id = p.userid)`; 
        db.query(q,(err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json(data);  
        })
    })
   
    

}
export const addPost = (req, res) => {
    const userId = req.query.userId;
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if(err) return res.status(403).json("token is not valid"); 
        const q = "INSERT INTO posts (`desc`, `img`, `userid`) VALUES (?)";
        const values = [
            req.body.desc, 
            req.body.img,
            userInfo.id
        ] 
        db.query(q,[values],(err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("Post Has been created");  
        })
    })
   
}
export const deletePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "DELETE FROM posts WHERE `id`=? AND `userid` = ?";

    db.query(q, [req.params.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if(data.affectedRows>0) return res.status(200).json("Post has been deleted.");
      return res.status(403).json("You can delete only your post")
    });
  });
};