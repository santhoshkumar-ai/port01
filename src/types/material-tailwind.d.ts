declare module "@material-tailwind/react" {
  import * as React from "react";

  export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "h1" | "h2" | "h3" | "h4" | "lead" | "paragraph" | string;
    color?: string;
    className?: string;
    children?: React.ReactNode;
  }

  export const Typography: React.FC<TypographyProps>;

  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "filled" | "outlined" | "text" | string;
    size?: "sm" | "md" | "lg" | string;
    color?: "blue" | "red" | "green" | "gray" | "white" | string;
    ripple?: boolean;
    className?: string;
    children?: React.ReactNode;
  }

  export const Button: React.FC<ButtonProps>;
  export const IconButton: React.FC<ButtonProps>;

  export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    fullWidth?: boolean;
    shadow?: boolean;
    children?: React.ReactNode;
  }

  export const Navbar: React.FC<NavbarProps>;

  export interface CollapseProps {
    open: boolean;
    children?: React.ReactNode;
  }

  export const Collapse: React.FC<CollapseProps>;

  export interface ThemeProviderProps {
    children: React.ReactNode;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;

  export const Card: React.FC<
    React.HTMLAttributes<HTMLDivElement> & {
      color?: string;
      shadow?: boolean;
      variant?: string;
    }
  >;

  export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>>;

  export const CardHeader: React.FC<
    React.HTMLAttributes<HTMLDivElement> & {
      floated?: boolean;
      shadow?: boolean;
      color?: string;
    }
  >;

  export const Avatar: React.FC<
    React.ImgHTMLAttributes<HTMLImageElement> & {
      variant?: "circular" | "rounded" | "square";
      size?: "sm" | "md" | "lg" | string;
    }
  >;
}
