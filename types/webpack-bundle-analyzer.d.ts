// types/webpack-bundle-analyzer.d.ts
declare module "webpack-bundle-analyzer" {
  import { Plugin } from "webpack";
  export class BundleAnalyzerPlugin extends Plugin {
    constructor(options?: any);
  }
}
