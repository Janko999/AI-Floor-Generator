import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    className?: string;
}

export const Button = ({
                           children,
                           variant = "primary",
                           size = "md",
                           fullWidth = false,
                           className = "",
                           ...props
                       }: ButtonProps) => {
    const variantClass = `btn--${variant}`;
    const sizeClass = `btn--${size}`;
    const widthClass = fullWidth ? "btn--full" : "";

    return (
        <button
            className={`
        btn
        ${variantClass}
        ${sizeClass}
        ${widthClass}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};