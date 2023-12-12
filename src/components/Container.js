export default function Container({ children, ...props }) {
  return (
    <div {...props} className="max-w-md px-4 mx-auto">
      {children}
    </div>
  );
}
