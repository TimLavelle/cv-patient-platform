const { connectToDatabase } = require('@/lib/mongodb');

async function getProvinces(req, res) {
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

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      return getProvinces(req, res);
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