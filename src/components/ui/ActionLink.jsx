import Link from "next/link";

export default function ActionLink({ href, className = "", children, ...rest }) {
  if (!href) return <span className={className} {...rest}>{children}</span>;
  if (href.startsWith("/")) return <Link href={href} className={className} {...rest}>{children}</Link>;
  return <a href={href} className={className} {...rest}>{children}</a>;
}
