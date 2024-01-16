type Props = {
  children: React.ReactNode;
  post: React.ReactNode;
};

export default function Gradient({ children, post }: Props) {
  return (
    <>
      <div className=" w-screen h-screen bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-lime-500 to-gray-500 ">
        <div className="w-full h-full flex items-center justify-center">
          {children}

          {post}
        </div>
      </div>
    </>
  );
}
