interface IGetHasCreateUpdate {
  ({
    getCategory,
    getName,
    getContent,
    category,
    name,
    content
  }: {
    getCategory: string;
    getName: string;
    getContent: string;
    category: string;
    name: string;
    content: string;
  }): boolean;
}

export type { IGetHasCreateUpdate };
