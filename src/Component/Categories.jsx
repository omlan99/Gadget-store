import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {

  return (
    <div className="border px-8 py-8 flex flex-wrap lg:flex-col gap-4 my-8">
      
      {categories.map((category, index)  => (
        <NavLink 
          key={index}
          className="bg-[#9538E2] text-white font-medium px-4 py-2 rounded-full my-2 "
        to={`./category/${category.category}`}
               
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
