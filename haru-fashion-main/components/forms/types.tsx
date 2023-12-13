export type FormBuilderOption = {
  cols: number;
  items: FormBuilderItem[];
  displayConditions?: boolean[];
};

export type FormBuilderItem = {
  name: string;
  label?: any;
  required?: boolean;
  component: "select" | "input" | any;
  isCustomRender?: boolean;
  customProps?: any;
  labelPosition?: "top" | "right" | "left" | "bottom";
  displayConditions?: boolean[];
};
