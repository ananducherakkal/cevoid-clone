import { cn } from "@/utils/shadcn";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  newTag?: boolean;
};

const TopNavbarMenuItem = (props: Props) => {
  const { children, className, newTag } = props;
  return (
    <button
      className={cn(
        "text-base capitalize text-gray-70 hover:text-gray-50 flex items-center space-x-2 px-4",
        className
      )}
    >
      {children}
      {newTag && (
        <div className="text-xxs text-gray-7 h-4 border border-primary rounded-full px-2 ml-1 flex items-center justify-center">
          New
        </div>
      )}
    </button>
  );
};

export default TopNavbarMenuItem;
