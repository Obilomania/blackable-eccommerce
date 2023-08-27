import { NextResponse } from "next/server";
import { MongoDBConnect } from "../../../database/dbConnect";
import User from "../../../models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

MongoDBConnect();
export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json(
        { message: "All Fields Are required" },
        { status: 400 }
      );
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return NextResponse.json(
        { message: "User Not Found, Please sign Up" },
        { status: 404 }
      );
    }

    const validPassword = await bcryptjs.compare(password, userExist.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 400 }
      );
    }

    //Create token Data
    const tokenData = {
      id: userExist._id,
      name: userExist.fullname,
      email: userExist.email,
      role: userExist.role,
    };

    //create token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // finalData.cookies.set("token", token, {
    //   httpOnly: true,
    // });
    const finalData = {
      token,
      user: {
        email: userExist.email,
        name: userExist.name,
        _id: userExist._id,
        role: userExist.role,
      },
    };
    // finalData.cookies.set("token", token, {
    //   httpOnly: true,
    // });
    return NextResponse.json({
      message: "Login Succesful",
      success: true,
      finalData,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
