import { Fragment } from "react";

export interface LinesProps {
  lines?: (string | null | undefined)[];
}

export default function Lines({ lines }: LinesProps) {
  if (!lines || !Array.isArray(lines)) return null;
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && (
            <>
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
            </>
          )}
        </Fragment>
      ))}
    </>
  );
}
