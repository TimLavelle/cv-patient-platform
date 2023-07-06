import { NextResponse } from 'next/server'
import connectToDatabase from '@/_lib/mongodb';

export async function GET() {
  let { db } = await connectToDatabase();

  let prov = await db
    .collection('provinces')
    .find({})
    .sort({ prov_id: 1 })
    .toArray();

  return NextResponse.json({ prov })
}