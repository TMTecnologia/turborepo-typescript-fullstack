// import original module declarations
import "styled-components";

export interface ThemeInterface {
  background: string;
  title: string;
}

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
