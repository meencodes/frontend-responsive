export interface Section {
  section: string;
  data: SectionData[];
}

export interface SectionData {
  first?: boolean;
  title: string;
  description: string;
  backColor?: string;
  fontColor?: string;
  labelColor?: string;
}

export interface ContentProps {
  className: string;
  dataSource: SectionData;
  title?: string;
  index: number;
  rightContent?: boolean;
}
