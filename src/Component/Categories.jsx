import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {

  return (
    <div className="bg-slate-200 px-8 py-8 flex flex-wrap lg:flex-col gap-4 my-8">
      
      {categories.map((category, index)  => (
        <NavLink 
          key={index}
          className="bg-[#9538E2] text-white font-medium px-4 py-2 rounded-full my-2 "
        to={`./category/${category.category}`}
        // className={({ isActive }) =>{
            
             
        //       isActive ? "bg-white text-[#9538E2] font-medium px-4 py-2 rounded-full my-2" : "bg-[#9538E2] text-white font-medium px-4 py-2 rounded-full my-2",
      
          
        //   }}
          
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
