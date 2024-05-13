'use client'
import React, { useState } from "react";
import Title from "../components/Title";
import FormInput from "../components/FormInput";
import FormBtn from "../components/FormBtn";

const Form = () => {
    const [image, setImage] = useState()
  const uploadStagedFile = async (e ,stagedFile ) => {
    e.preventDefault()
    const form = new FormData();
    form.set("file", stagedFile);

    // here /api/upload is the route of my handler
    const res = await fetch("/api/upload", {
      method: "POST",
      body: form,
      headers: {
        // add token
        // content-type will be auto-handled and set to multipart/form-data
      },
    });

    const data = await res.json();

    // we will return the uploaded image URL from the API to the client
    console.log(data.imgUrl);
  };

  return (
    <div>
      <form onSubmit={(e) => uploadStagedFile(e,image)} action="" className="w-full bg-[#202020] p-2 rounded shadow-lg">
        <Title text={"Add category"} />
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
        <FormInput
          type={"file"}
          labelFor={"image"}
          labelName={"image"}
          onchange={e => setImage(e.target.value)}
          name={"image"}
        />
        <FormInput
          type={"color"}
          labelFor={"color"}
          labelName={"color"}
          name={"color"}
        />

        <FormBtn text={"add"} />
      </form>
    </div>
  );
};

export default Form;
