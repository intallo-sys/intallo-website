import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

export interface ActionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string | null;
  className?: string;
  children?: ReactNode;
}

export default function ActionLink({ href, className = "", children, ...rest }: ActionLinkProps) {
  if (!href) return <span className={className} {...(rest as any)}>{children}</span>;
  if (href.startsWith("/")) return <Link href={href} className={className} {...rest}>{children}</Link>;
  return <a href={href} className={className} {...rest}>{children}</a>;
}
