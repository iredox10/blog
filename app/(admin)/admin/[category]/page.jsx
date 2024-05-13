import FormBtn from "@/app/components/FormBtn";
import FormInput from "@/app/components/FormInput";
import Title from "@/app/components/Title";
import React from "react";
import Blog from "@/models/blogs";
import { addBlog } from "@/lib/actions";

const category = async ({ params }) => {
  const { category } = params;


  // const {resource} = await Cloudinary.api.resources_by_tag('next-js-blog',{})
  async function upload(formData) {
    'use server'
    const blog = await addBlog(formData,category)
   console.log(blog); 
    // const image = formData.get("image");
    // const title = formData.get("title");
    // const author = formData.get("author");
    // const subtitle = formData.get("subtitle");
    // const blog = formData.get("blog");
    // const summary = formData.get("summary");

    // const arrayBuffer = await image.arrayBuffer();
    // const buffer = new Uint8Array(arrayBuffer);

    // try {
    //   const result = await new Promise((resolve, reject) => {
    //     Cloudinary.uploader
    //       .upload_stream({}, function (err, result) {
    //         if (err) {
    //           reject(err);
    //           return;
    //         } else {
    //           resolve(result);
    //         }
    //       })
    //       .end(buffer);
    //   });

    //   if (result) {
    //     const newBlog = new Blog({
    //       title,
    //       subtitle,
    //       summary,
    //       image: result.url,
    //       blog,
    //       author,
    //       category,
    //     });

    //     await newBlog.save();
    //     console.log(newBlog, result);
    //   } else {
    //     console.log("No result received from Cloudinary.");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  }
  return (
    <div className="grid grid-cols-5  p-5">
      <div className="col-span-3">categories</div>
      <div className="w-full col-start-4 col-end-[-1]">
        <form
          action={upload}
          className="w-full bg-[#202020] p-2 rounded shadow-lg"
        >
          <Title text={"Add Category"} />
          <FormInput
            type={"text"}
            labelFor={"title"}
            labelName={"title"}
            name={"title"}
          />
          <FormInput
            type={"text"}
            labelFor={"subtitle"}
            labelName={"subtitle"}
            name={"subtitle"}
          />
          <FormInput
            type={"text"}
            labelFor={"author"}
            labelName={"author"}
            name={"author"}
          />
          <div className="relative flex flex-col mb-3">
            <label htmlFor="blog" className="text-white capitalize mb-1">
              blog
            </label>
            <textarea
              name="blog"
              id="blog"
              cols="30"
              rows="10"
              className="p-2  bg-secondary-color"
            ></textarea>
          </div>
          <FormInput
            type={"text"}
            labelFor={"summary"}
            labelName={"summary"}
            name={"summary"}
          />
          <FormInput
            type={"file"}
            labelFor={"image"}
            labelName={"image"}
            name={"image"}
          />

          {/* {previewSource && (
            <Image src={previewSource} alt="preview" className="h-20 w-20" />
          )} */}
          <FormBtn text={"add "} />
        </form>
      </div>
    </div>
  );
};

export default category;
