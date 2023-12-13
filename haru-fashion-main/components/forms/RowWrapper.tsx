export interface RowWrapperProps {
  cols?: number;
  children: any;
}
export const RowWrapper = (props: RowWrapperProps) => {
  const { children, cols = 1 } = props;
  const getGridCols = (cols: any) => {
    switch (cols) {
      case 1:
        return "md:grid-cols-1";
      case 2:
        return "md:grid-cols-2";
      case 3:
        return "md:grid-cols-3";
      case 4:
        return "md:grid-cols-4";
      case 5:
        return "md:grid-cols-5";
      case 6:
        return "md:grid-cols-6";
      case 7:
        return "md:grid-cols-7";
      case 8:
        return "md:grid-cols-8";
      case 9:
        return "md:grid-cols-9";
      case 10:
        return "md:grid-cols-10";
      case 11:
        return "md:grid-cols-11";
      case 12:
        return "md:grid-cols-12";
    }
  };
  const className = `grid ${getGridCols(cols)} gap-7`;
  return <div className={className}>{children}</div>;
};
