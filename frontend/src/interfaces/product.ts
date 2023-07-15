export default interface Product {
  id: number;
  attributes: {
    Title: string;
    Price: number;
    Calories: number;
    Details: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Emphasis: boolean;
    Ingredients: string;
    slug: string;
    Image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null;
          caption: null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: null;
          provider: string;
          provider_metadata: null;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
}
