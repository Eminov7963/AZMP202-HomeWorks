import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().min(0).max(200).required("Required"),
});
