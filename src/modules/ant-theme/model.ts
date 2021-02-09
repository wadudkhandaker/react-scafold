import { IRouter } from "../model/router-model";

export interface IState {
  collapsed: boolean;
}
export interface IProps {
  children: any;
  navigation: IRouter[];
}
