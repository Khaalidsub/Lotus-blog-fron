import React from "react";
export interface PaginationButtonsProps {}

export const PaginationButtons: React.SFC<PaginationButtonsProps> = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 lg:mr-0">
      <button className="bg-secondary-background hover:bg-gray-400 text-secondary font-bold py-2 px-4 rounded-l">
        Prev
      </button>
      <button className="bg-secondary-background hover:bg-gray-400 text-secondary font-bold py-2 px-4 rounded-r">
        Next
      </button>
    </div>
  );
};
