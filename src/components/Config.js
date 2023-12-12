export default function Config({ notLast = false, ...props }) {
  const classes = [
    'flex justify-between font-mono p-3 bg-white border-4 border-black',
  ];

  if (notLast) {
    classes.push('border-b-0');
  }

  return <div {...props} className={classes.join(' ')}></div>;
}
