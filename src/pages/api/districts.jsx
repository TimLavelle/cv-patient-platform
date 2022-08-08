const { connectToDatabase } = require('@/lib/mongodb');
var q2m = require('query-to-mongo')

async function getDistricts(req, res) {
  try {
    let { db } = await connectToDatabase();
    let query = q2m(req.query);
    const table = 'districts';
    
    
    let dist = await db
      .collection(table)
      .find(
        query.criteria,
        query.options
      )
      .sort({ name: 1 })
      .toArray();
    return res.json(dist);
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      return getDistricts(req, res);
    }

    case 'POST': {
      return addDistricts(req, res);
    }

    case 'PUT': {
      return updateDistricts(req, res);
    }

    case 'DELETE': {
      return deleteDistricts(req, res);
    }
  }
}