import connectMongoose from "@/lib/mongoose";
import Category from "@/models/category.model";

// CREATE CATEGORY
export async function POST(req) {
  try {
    await connectMongoose();
    const body = await req.json();

    const category = await Category.create(body);
    return Response.json(category, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// GET ALL CATEGORIES  ✅ ADD THIS
export async function GET() {
  try {
    await connectMongoose();
    const categories = await Category.find();
    return Response.json(categories);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
