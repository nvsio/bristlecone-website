import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card(props: DivProps) {
  return (
    <div
      {...props}
      className={[
        "rounded-xl border bg-white",
        props.className,
      ].filter(Boolean).join(" ")}
      style={{ borderColor: "var(--color-border)", ...(props.style || {}) }}
    />
  );
}

export function CardContent(props: DivProps) {
  return <div {...props} className={["p-6", props.className].filter(Boolean).join(" ")} />;
}
