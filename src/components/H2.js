export default function H2({ children, ...props }) {
  return (
    <h2 {...props} className="font-serif text-4xl mb-4">
      {children}
    </h2>
  );
}
