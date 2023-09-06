import React from "react";
import Container from "./Layout/Container";
import { ContentProps } from "@/app/types";

const ContentRows = ({
  className,
  dataSource,
  title,
  index,
  rightContent,
}: ContentProps) => {
  return (
    <Container>
      <div className={className}>
        {rightContent ? <div className=""></div> : ""}
        <div>
          {dataSource.first && (
            <h3 className="text-heading-gray text-6xl mb-10">{title}</h3>
          )}
          <div className="mb-4 flex gap-2.5">
            <div className="grid">
              <span
                className="text-base"
                style={{
                  color: dataSource.labelColor ?? "",
                }}
              >{`0${index + 1}`}</span>
              <span
                className="rounded border-rectagle-purple border-2 bg-rectagle-purple"
                style={{
                  background: dataSource.fontColor ?? "",
                  border: "2px",
                }}
              ></span>
            </div>
            <span className="text-label-gray text-2xl">{dataSource.title}</span>
          </div>
          <span
            className="text-base"
            style={{
              color: dataSource.fontColor ?? "black",
            }}
          >
            {dataSource.description}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default ContentRows;
