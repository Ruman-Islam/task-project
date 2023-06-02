import Shop from "@/model/Shop";
import User from "@/model/User";
import db from "@/utils/db";

export default async function handler(req, res) {
  const post = req.body;

  await db.connect();
  const newUser = new User({
    firstName: post.firstName,
    lastName: post.lastName,
    email: post.email,
    phone: post.phone,
    country: post.country,
    address: post.address,
    password: post.password,
    role: "seller",
    photoURL: post.photoURL,
  });

  const user = await newUser.save();

  const newShop = new Shop({
    ownerId: user._id,
    shopName: post.shopName,
    shopAddress: post.shopAddress,
    shopLogoURL: post.shopLogoURL,
    shopCoverURL: post.shopCoverURL,
  });

  const shop = await newShop.save();

  res.send({
    ...user.toObject(),
    ...shop.toObject(),
  });
}
