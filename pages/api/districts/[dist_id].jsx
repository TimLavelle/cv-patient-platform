const { connectToDatabase } = require('@/_lib/mongodb');
var q2m = require('query-to-mongo')

async function getDist(req, res) {
  try {

    let { db } = await connectToDatabase();
    const table = 'districts';
    let query = q2m(req.query);

    // console.log(query.options);

    let prov = await db
      .collection(table)
      .find(
        query.criteria,
        query.options
      )
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

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      return getDist(req, res);
    }

    case 'POST': {
      return addProv(req, res);
    }

    case 'PUT': {
      return updateProv(req, res);
    }

    case 'DELETE': {
      return deleteProv(req, res);
    }
  }
}
