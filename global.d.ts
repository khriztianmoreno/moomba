declare module App {
  type Theme = {
    colors: {
      aluminium: string;
      electricViolet: string;
      manatee: string;
      persianIndigo: string;
      springGreen: string;
      white: string;
    },
    breakpoints: Breakpoints
  };
}

declare module "@emotion/styled" {
  import { CreateStyled } from "@emotion/styled/types/index";

  export * from "@emotion/styled/types/index";
  const customStyled: CreateStyled<App.Theme>;
  export default customStyled;
}
