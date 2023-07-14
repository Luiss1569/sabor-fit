interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export default function Title({ label, children, ...props }: TitleProps) {
  return (
    <div {...props} className="flex flex-col items-center">
      <h2 className={`font-title text-5xl text-center`} {...props}>
        {children}
      </h2>
      {label && <label className="text-secondary text-center text-md">{label}</label>}
    </div>
  );
}
