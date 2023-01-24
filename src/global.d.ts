declare module "*&picture&imagetools" {
  /**
   * actual types
   * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
   * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
   */
  const out: {
    fallback: {
      src: string;
    };
    sources: {
      [key in SupportedImgType]: {
        src: string;
        w?: number;
        h?: number;
      }[];
    };
  };
  export default out;
}