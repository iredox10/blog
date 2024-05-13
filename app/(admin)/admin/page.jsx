import FormBtn from "@/app/components/FormBtn";
import FormInput from "@/app/components/FormInput";
import Title from "@/app/components/Title";
import { addCategory, getCategories } from "@/lib/actions";
import Image from "next/image";
import Category from "./Category";

const admin = async() => {
  const categories =  await getCategories()
  console.log(categories)
  const submit = async (formData) =>{
    'use server'
    const category = await addCategory(formData)
    console.log(category);
  }
  return (
    <div className="flex">
      <div className="col-span-4">categories</div>
      <div >
        <div>
          <form
            action={submit}
            className="w-full bg-[#202020] p-2 rounded shadow-lg"
          >
            <Title text={"Add category"} />
            <FormInput
              type={"text"}
              labelFor={"name"}
              labelName={"name"}
              name={"name"}
            />
            <FormInput
              type={"text"}
              labelFor={"shortName"}
              labelName={"shortName"}
              name={"shortName"}
            />
            <FormInput
              type={"text"}
              labelFor={"desc"}
              labelName={"desc"}
              name={"desc"}
            />
            <FormInput
              type={"file"}
              labelFor={"image"}
              labelName={"image"}
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
        <div>
          {categories.map(category=>(
           <Category category={category} key={category._id} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default admin;
