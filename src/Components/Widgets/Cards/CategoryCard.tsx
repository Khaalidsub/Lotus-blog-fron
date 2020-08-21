import React from "react";
export interface CategoryCardProps {
  category: string;
}

const CategoryCard: React.SFC<CategoryCardProps> = (props) => {
  return (
    <span className="inline-block bg-info rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2">
      #{props.category}
    </span>
  );
};

export default CategoryCard;
