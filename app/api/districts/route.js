import 'server-only'

import { NextResponse } from 'next/server'
import dbConnect from '@/_lib/mongoose';
import districts from '@/_models/distModels'

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('province_id')
    let data;

    if (!id) data = await districts.find({}).sort({ name: 1 });
    else data = await districts.find({ province_id: id }).sort({ name: 1 });
    return NextResponse.json({ data });

  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}