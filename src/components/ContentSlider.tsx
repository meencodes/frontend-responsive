import React from "react";
import Container from "./Layout/Container";
import { ContentProps } from "@/app/types";

const ContentSlider = ({ className, dataSource, index }: ContentProps) => {
  return (
    <Container>
      <div className={className}>
        <div className="mb-4 flex gap-2.5">
          <div className="grid">
            <span
              className="text-base"
              style={{
                color: dataSource.labelColor ?? "",
              }}
            >{`0${index + 1}`}</span>
            <span
              className={`rounded border-rectagle-purple border-2 bg-rectagle-purple`}
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
    </Container>
  );
};

export default ContentSlider;
