export interface Props {
  backgroundColor?: "bg-gray-500" | "bg-indigo-400";
  className?: string;
}

export default function Hamburger({
  backgroundColor = "bg-gray-500",
  className,
}: Props) {
  return (
    <button className={`group flex h-5 flex-col justify-between ${className}`}>
      {[...Array(3)].map(() => (
        <div
          className={`h-[0.20rem] w-7 ${backgroundColor} group-hover:bg-secondary`}
        ></div>
      ))}
    </button>
  );
}
