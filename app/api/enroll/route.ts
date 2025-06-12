// app/api/enroll/route.ts
import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  const degrees = formData.getAll("degrees") as File[];
  const identity = formData.get("identity") as File;

  if (degrees.length < 1 || degrees.length > 5) {
    return NextResponse.json(
      { error: "Upload 1 to 5 degree PDFs" },
      { status: 400 }
    );
  }

  const degreeUrls: string[] = [];

  for (const degree of degrees) {
    const filePath = `degrees/${Date.now()}-${degree.name}`;
    const { error } = await supabase.storage
      .from("documents")
      .upload(filePath, degree, { contentType: "application/pdf" });

    if (error)
      return NextResponse.json({ error: error.message }, { status: 500 });

    const url = supabase.storage.from("documents").getPublicUrl(filePath)
      .data.publicUrl;
    degreeUrls.push(url);
  }

  // Upload identity
  const identityPath = `identity/${Date.now()}-${identity.name}`;
  const { error: idError } = await supabase.storage
    .from("documents")
    .upload(identityPath, identity, { contentType: "application/pdf" });

  if (idError)
    return NextResponse.json({ error: idError.message }, { status: 500 });

  const identityUrl = supabase.storage
    .from("documents")
    .getPublicUrl(identityPath).data.publicUrl;

  // Insert into table
  const { error: insertError } = await supabase.from("enrollments").insert([
    {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      degrees: degreeUrls,
      identity_url: identityUrl,
    },
  ]);

  if (insertError)
    return NextResponse.json({ error: insertError.message }, { status: 500 });

  return NextResponse.json({ message: "Enrollment saved!" });
}

export async function GET() {
  const { data, error } = await supabase.from("enrollments").select("*");

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}
