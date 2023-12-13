import { InputWrapper } from "./InputWrapper";
import { RowWrapper } from "./RowWrapper";
import { FormBuilderItem, FormBuilderOption } from "./types";

export interface FormBuilderProps {
  itemOptions: FormBuilderOption[];
  control: any;
  errors: any;
}

export const FormBuilder = (props: FormBuilderProps) => {
  const { itemOptions, control, errors } = props;

  const renderComponent = (item: FormBuilderItem) => {
    const {
      name,
      label,
      required,
      component,
      customProps,
      isCustomRender,
      labelPosition,
      displayConditions,
    } = item;

    const T = component;

    const conditionPass = displayConditions?.findIndex((x: any) => x === false);

    if (displayConditions?.length && conditionPass !== -1) {
      return null;
    }

    return (
      <InputWrapper
        key={name}
        required={required}
        field={name}
        label={label}
        control={control}
        errors={errors}
        labelPosition={labelPosition}
        component={(renderProps: any) => {
          if (isCustomRender) {
            return component(renderProps);
          }
          return <T {...renderProps} {...customProps} />;
        }}
      />
    );
  };

  // const getIsRender = (itemsList: any[]) => {
  //   console.log("jvchjkvcxzbjkcvxzjkncvxz", itemsList)
  //   let isRender = true;
  //   for (const item of itemsList) {
  //     if (!item?.displayConditions) {
  //       continue;
  //     }

  //     const conditionPass = item?.displayConditions?.findIndex(
  //       (x: any) => x == false
  //     );

  //     if (item?.displayConditions?.length && conditionPass != -1) {
  //       isRender = false;
  //       break;
  //     }
  //   }
  //   return isRender;
  // };

  const render = () => {
    return (
      <>
        {itemOptions.map((itemOptions: FormBuilderOption, key: number) => {
          const conditionPass = itemOptions?.displayConditions?.findIndex(
            (x: any) => x === false
          );

          if (itemOptions?.displayConditions?.length && conditionPass !== -1) {
            return <></>;
          }

          return (
            <>
              {/* {getIsRender(itemOptions.items) ? ( */}
              <RowWrapper key={key} cols={itemOptions?.cols}>
                {itemOptions.items.map((x: FormBuilderItem, keyY: any) => (
                  <>{renderComponent(x)}</>
                ))}
              </RowWrapper>
              {/* ) : (
                <></>
              )} */}
            </>
          );
        })}
      </>
    );
  };

  return <>{render()}</>;
};
