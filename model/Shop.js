import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    shopName: {
      type: String,
      required: true,
    },
    shopAddress: {
      type: String,
      required: true,
    },
    shopLogoURL: {
      type: String,
      required: true,
    },
    shopCoverURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Shop = mongoose.models.Shop || mongoose.model("Shop", shopSchema);
export default Shop;
