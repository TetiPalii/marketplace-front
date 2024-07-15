/** @format */
import {
  AriaAttributes,
  DOMAttributes,
} from "react";
declare module "react" {
  interface HTMLAttributes<T>
    extends AriaAttributes,
      DOMAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        navigation: string;
        // Add more properties
      };
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        lazy: string;
        // Add more properties
      };
    }
  }
}
