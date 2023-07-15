import 'server-only'

import { NextResponse } from 'next/server'
import dbConnect from '@/_lib/mongoose';
import provinces from '@/_models/provModels'

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('prov_id')
    let data;

    if (!id) data = await provinces.find({}).sort({ prov_id: 1 });
    else data = await provinces.find({ prov_id: id }).sort({ prov_id: 1 });
    return NextResponse.json({ data });

  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}