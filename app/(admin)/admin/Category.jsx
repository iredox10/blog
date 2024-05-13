import Link from "next/link";
import React from "react";

const Category = ({ category, key }) => {
  return (
    <div>
      <div key={key} className="bg-dark-color text-white p-2">
        <div className="flex justify-between items-center">
          <h1 className="capitalize text-xl font-bold">{category.name}</h1>
          <p>{category.shortName}</p>
        </div>
          <p>{category.desc}</p>
          <p style={{ backgroundColor: category.color }}>{category.color}</p>
          <div>
            <Link href={`/admin/${category.slug}`}>View</Link>
            <button>delete</button>
          </div>
      </div>
    </div>
  );
};

export default Category;
