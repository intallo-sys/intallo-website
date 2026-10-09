export default function Container({ className = "", children, ...rest }) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-[4.5%] ${className}`} {...rest}>
      {children}
    </div>
  );
}
