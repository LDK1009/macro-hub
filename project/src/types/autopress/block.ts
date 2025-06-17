export type ArticleSectionType = {
  type: "도입부" | "본문" | "요약" | "결론" ;
  title: string;
  sectionKeyword: string;
  blocks: ArticleBlockType[];
};

export type ArticleBlockType = TextBlockType | SubjectBlockType | TableBlockType | ButtonBlockType | ListBlockType ;

export type TextBlockType = {
  type: "text";
  content: string;
};

export type SubjectBlockType = {
  type: "subject";
  title: string;
  text: string;
};

export type TableBlockType = {
  type: "table";
  content: {
    items: string[][];
  };
};

export type ButtonBlockType = {
  type: "button";
  content: {
    text: string;
    url: string;
  };
};

export type ListBlockType = {
  type: "list";
  content: string[];
};
