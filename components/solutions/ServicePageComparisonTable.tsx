import * as React from "react";
import { ServiceSection, ServiceH2, ServiceEyebrow } from "./service-page-layout";

export type ComparisonColumn = {
  header: React.ReactNode;
  cells: React.ReactNode[];
};

export function ServicePageComparisonTable({
  eyebrow,
  headline,
  columns,
  rowLabels,
  className,
  ...props
}: {
  eyebrow?: React.ReactNode;
  headline: React.ReactNode;
  columns: ComparisonColumn[];
  rowLabels: React.ReactNode[];
} & React.ComponentProps<"section">) {
  return (
    <ServiceSection className={className} {...props}>
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow ? (
          <ServiceEyebrow className="first:mt-0">{eyebrow}</ServiceEyebrow>
        ) : null}
        <ServiceH2 className="mx-0 mt-2 max-w-none first:mt-0">{headline}</ServiceH2>
      </div>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[500px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-black/[0.12]">
              <th className="py-3 pr-4 font-medium text-muted-foreground" scope="col">
                {" "}
              </th>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-4 py-3 font-semibold text-foreground"
                  scope="col"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowLabels.map((label, rowIndex) => (
              <tr key={rowIndex} className="border-b border-black/[0.06]">
                <td className="py-3 pr-4 font-medium text-foreground">{label}</td>
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-3 text-muted-foreground">
                    {col.cells[rowIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ServiceSection>
  );
}
