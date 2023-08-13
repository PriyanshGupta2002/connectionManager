import { connectToDb } from "@/lib/connect";
import User from "@/models/user";

export const GET = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return new Response(JSON.stringify(users), { status: 201 });
  } catch (error) {
    return new Response(error, { status: 501 });
  }
};
