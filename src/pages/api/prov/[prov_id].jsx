const { connectToDatabase } = require('@/lib/mongodb');
import { useRouter } from 'next/router'

console.log('Prov')

async function getProv(req, res) {
  const router = useRouter();
  const { results } = router.query;
  try {
    let { db } = await connectToDatabase();
    let prov = await db
      .collection('provinces')
      .find({ "prov_id": 2 })
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

export async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      return getProv(req, res);
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
