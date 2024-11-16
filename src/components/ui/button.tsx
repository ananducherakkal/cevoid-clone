import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/shadcn";

const buttonVariants = cva(
  "inline-flex items-center justify-center space-x-2 text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex transition-opacity",
  {
    variants: {
      variant: {
        default: "bg-gray-90 text-gray-10 opacity-100 hover:opacity-80",
        secondary:
          "bg-gray-10 text-gray-90 border border-gray-90 opacity-100 hover:opacity-60",
        distructive:
          "bg-red-500/40 text-gray-90 border border-red-500/70 hover:bg-red-500/20 active:bg-red-500/60",
        defined:
          "bg-primary text-gray-10 border border-primary hover:bg-primary/60 active:bg-primary/40",
      },
      size: {
        default: "h-8 rounded-full font-normal px-4 py-1",
        md: "h-10 rounded-full px-6 py-2",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, type = "button", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
