interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-primary hover:bg-primary-dark"
      : "bg-secondary hover:bg-secondary-dark";

  return (
    <button
      className={`font-bold py-4 px-10 rounded ${classes} text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
