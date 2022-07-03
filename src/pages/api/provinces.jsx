import { req, res } from "next";
const { connectToDatabase } = require('@/mongodb');

async function getProv(req,res){
  try {
      let { db } = await connectToDatabase();
      let prov = await db
          .collection('provinces')
          .find({})
          .sort({ published: -1 })
          .toArray();
      return res.json({
          message: JSON.parse(JSON.stringify(prov)),
          success: true,
      });
  } catch (error) {
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}

export default async function handler(req,res) {
    switch (req.method) {
        case 'GET': {
            return getProv(req, res);
        }

        case 'POST': {
            return addPost(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
  }