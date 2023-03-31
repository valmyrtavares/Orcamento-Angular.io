export interface FixedBudget {
  title: string;
  text: string;
  entregaPrazo: string;
  valorInicial: number;
}
export interface CheckBoxList {
  text: string;
  value: number;
  check: boolean;
  valueChange: number;
  title: string;
}
export interface ShowCase {
  id: number;
  title: string;
  category: string;
  image: string;
}
export interface Evento {
  FixedBudget: FixedBudget;
  CheckBoxList: CheckBoxList[];
  ShowCase: ShowCase[];
}
export interface EventType {
  type: string;
  evento: string;
  background: string;
  route: string;
}
