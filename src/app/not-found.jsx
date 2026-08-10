import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center py-8 text-4xl font-bold">
      <div>Page not found</div>
      <Link href={"/"}>
        <button className="btn btn-soft btn-primary">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
