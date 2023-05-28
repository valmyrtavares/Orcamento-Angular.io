export interface FixedBudget {
  InitialPrice: number;
  budgetTitle: string;
  category: string;
  deadline: string;
  serviceDescription: string;
}

export interface CheckBoxList {
  serviceDescription: string;
  serviceValue: number;
  check: boolean;
  linkService: string;
  category: string;
  valueChange: number;
  extraServiceTitle: string;
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
  image: string;
  route: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: string;
}
