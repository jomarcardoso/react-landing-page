export default function P({ children, ...props }) {
  return (
    <p {...props} className="mb-4 text-justify">
      {children}
    </p>
  );
}
