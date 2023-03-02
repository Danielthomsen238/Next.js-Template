export interface Global {
  theme: {
    colors: {
      background: string;
      dark: string;
      primary: string;
      secondary: string;
    };
    breakpoints: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    development: {
      underDevelopment: boolean;
      border: string;
    };
  };
}

export interface DefaultTheme {
  colors: {
    background: string;
    dark: string;
    primary: string;
    secondary: string;
  };
  breakpoints: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  development: {
    underDevelopment: boolean;
    border: string;
  };
}

