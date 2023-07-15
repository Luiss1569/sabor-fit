interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export default function Title({ label, children, ...props }: TitleProps) {
  return (
    <div {...props} className="flex flex-col items-center mb-10">
      <h2 className={`font-title text-4xl text-center md:text-5xl`} {...props}>
        {children}
      </h2>
      {label && (
        <label className="text-secondary text-center md:text-lg text-md">
          {label}
        </label>
      )}
    </div>
  );
}
