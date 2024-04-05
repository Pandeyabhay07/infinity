import mongoose from "mongoose";

const weaponSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
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