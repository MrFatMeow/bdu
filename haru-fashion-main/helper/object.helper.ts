var _ = require("lodash");

export const ObjectHelper = {
  getParamsFilter(data: any) {
    const obj = {
      ...data,
    };

    Object.keys(obj).forEach((key) => {
      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    });
    const params = new URLSearchParams(obj).toString();
    return params;
  },
  getParamsFilterExceptFields(data: any, exArr: any[]) {
    const obj = {
      ...data,
    };

    Object.keys(obj).forEach((key) => {
      if (obj[key] === null || obj[key] === undefined || exArr.includes(key)) {
        delete obj[key];
      }
    });
    const params = new URLSearchParams(obj).toString();
    return params;
  },
  getPropertyByLocale: (obj: any, field: any, locale: any) => {
    if (!obj) return "";
    if (locale == "vi") {
      return obj[field];
    }
    const localeField = "eng" + field[0].toUpperCase() + field.slice(1);
    return obj[localeField];
  },
  cloneObjectByProperties: (originalObj: any, propertyFields: any[]) => {
    let newObj: any = {};
    if (!originalObj) return newObj;
    for (const f of propertyFields) {
      newObj[f] = originalObj[f];
    }
    return newObj;
  },
  getObjectNestedValueByStringKey: (obj: any, key: string) => {
    return _.get(obj, key);
  },
};
