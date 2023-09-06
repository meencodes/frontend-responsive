import React from "react";
import { SectionData } from "@/app/types";
import ContentRows from "./ContentRows";

interface Props {
  section: string;
  list: SectionData[];
  rightContent?: boolean;
}

const Lists = ({ section, list, rightContent }: Props) => {
  return (list || []).map((data, index) => (
    <div style={{ background: data.backColor }}>
      <ContentRows
        className="grid p-12 lg:grid md:grid md:grid-cols-2 md:px-8 xs:hidden"
        dataSource={data}
        title={section}
        index={index}
        rightContent={rightContent}
      />
    </div>
  ));
};

export default Lists;
