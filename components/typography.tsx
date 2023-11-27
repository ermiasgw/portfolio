import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "pl-5 pr-5 h-full flex items-center text-primary-foreground hover:text-foreground",
  {
    variants: {
      variant: {
        headline:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        subheadline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        body: "",
        label: "hover:bg-accent hover:text-accent-foreground",
        code: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "body",
    },
  },
);

export interface TypographyProps {
  variant?: "headline" | "subheadline" | "body" | "label" | "code";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  return (
    <div className={cn(typographyVariants({ variant, className }))}>
      {children}
    </div>
  );
};

export { Typography };
