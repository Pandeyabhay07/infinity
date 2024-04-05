import mongoose from "mongoose";

const weaponSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    manuDate: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    lastUpdate: {
      type: Date,
      required: true,
    },
    receivedData: {
      type: Date,
      required: true,
    },
    features: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Weapon = mongoose.model("weapon", weaponSchema);















// import mongoose from "mongoose";
// const weaponSchema = mongoose.Schema(
//   {
//     weaponname: {
//       type: String,
//       required: true,
//     },
//     sendercity: {
//       type: String,
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//     },
//     receivercity: {
//       type: String,
//       required: true,
//     },
//     date: {
//       type: Date,
//       required: true,
//     },
//     location: {
//       type: String,
//       required: true,
//     },
//     age: {
//       type: Number,
//       required: true,
//     },
//     performance: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export const weapon = mongoose.model("weapon", weaponSchema);
