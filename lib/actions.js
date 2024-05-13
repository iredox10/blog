"use server";

import Blog from "@/models/blogs";
import { connectMongoose } from "./dbConnection";
import { v2 as Cloudinary } from "cloudinary";
import Category from "@/models/category";
import { revalidatePath } from "next/cache";

Cloudinary.config({
  cloud_name: "dvxs5jeze",
  api_secret: "-le8Hwn2NeiUUyx1cSgIeNxHLAE",
  api_key: "624938469616934",
});
export const addCategory = async (formData) => {
  connectMongoose()
  const { image, name, desc, shortName, color } =
    Object.fromEntries(formData);
  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  try {
    const result = await new Promise((resolve, reject) => {
      Cloudinary.uploader
        .upload_stream({}, function (err, result) {
          if (err) {
            reject(err);
            return;
          } else {
            resolve(result);
          }
        })
        .end(buffer);
    });

    if (result) {
      const category = new Category({
        name,
        shortName,
        image: result.url,
        desc,
        color,
      });
      await category.save();
      revalidatePath('/admin')
    return category
    } else {
      console.log("No result received from Cloudinary.");
    }
  } catch (err) {
    // console.log(err);
    return err.message
  }
}

export const getCategories = async () =>{
  connectMongoose()
    try{
        const categories = await Category.find()
        return categories
    }catch(err){
        return err.message
    }
}

export const getBlogsCategory = async (category) =>{
  connectMongoose()
    try {
        const blogs = await Category.findOne({slug:category}).populate('blogs')
        return blogs
    } catch (err) {
       return err.message 
    }
}



export const addBlog = async (formData,category) => {
  connectMongoose()
  const { image, title, author, subtitle, blog, summary } =
    Object.fromEntries(formData);
  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  try {
    const result = await new Promise((resolve, reject) => {
      Cloudinary.uploader
        .upload_stream({}, function (err, result) {
          if (err) {
            reject(err);
            return;
          } else {
            resolve(result);
          }
        })
        .end(buffer);
    });

    if (result) {
      const newBlog = new Blog({
        title,
        subtitle,
        summary,
        image: result.url,
        blog,
        author,
        category,
      });
      const blogCategory = await Category.findone({slug:category})
      blogCategory.blogs.push(newBlog)
      blogCategory.save()
      await newBlog.save();
    //   console.log(newBlog, result);
    return newBlog
    } else {
    //   console.log("No result received from Cloudinary.");
    }
  } catch (err) {
    // console.log(err);
    return err.message
  }
};

export const getBlogs = async () => {
  connectMongoose();
  try {
    const blogs = await Blog.find();
    return blogs;
  } catch (err) {
    return { err: err.message };
  }
};
