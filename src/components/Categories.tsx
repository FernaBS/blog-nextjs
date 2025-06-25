import Category from "./Category";

type CategoriesProps = {
  allCategories: string[];
  categorySlug: string;
};

const Categories = ({ allCategories, categorySlug }: CategoriesProps) => {
  return (
    <div className="relative flex justify-around items-center w-[90vw] h-20 mt-8 border-y-3 border-black">
      {allCategories.map((category, index) => (
        <Category
          key={index}
          link={`/categories/${category}`}
          name={category}
          active={category === categorySlug}
        />
      ))}
    </div>
  );
};

export default Categories;
