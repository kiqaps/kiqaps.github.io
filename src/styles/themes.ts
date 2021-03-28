import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainBackgroundColor: string;
    mainTextColor: string
    actionTextColor: string
    boldTextColor: string
  }
}

export const defaultTheme: DefaultTheme = {
  mainBackgroundColor: '#fff',
  mainTextColor: '#5f5f5f',
  actionTextColor: '#007bff',
  boldTextColor: '#1f1f1f',
}
