export default function Section({ children, gradient, ...props }) {
  const classes = `py-6 ${
    gradient ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : ''
  }`.trim();

  return (
    <section {...props} className={classes}>
      {children}
    </section>
  );
}
