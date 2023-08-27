import { NextResponse } from "next/server";
import { MongoDBConnect } from "../../../database/dbConnect";
import User from "../../../models/userModel";
import bcryptjs from "bcryptjs";

MongoDBConnect();

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All Fields Are required" },
        { status: 400 }
      );
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return NextResponse.json(
        { message: "User Already Exist" },
        { status: 400 }
      );
    }

    //hash Password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return NextResponse.json({
      message: "Created user sucessfully",
      success: true,
      newUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
