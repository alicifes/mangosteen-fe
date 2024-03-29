interface FData {
  [k: string]: string | number | null | undefined | FData;
}

type Rule<T> = {
    key: keyof T
    message: string
  } & (
      { type: 'required' } |
      { type: 'pattern', regex: RegExp }
    )

type Rules<T> = Rule<T>[];

export type { Rules, Rule, FData }
export const validate = <T extends FData>(formData: T, rules: Rules<T>) => {
  type Errors = { [k in keyof T ]?: string[] };
  const error: Errors = {};
  rules.forEach((rule) => {
    const {key, type, message} = rule
    const value = formData[key]
    switch (type) {
      case "required":
        if (value === null || value === undefined || value === '') {
          error[key] = error[key] ?? []
          error[key]?.push(message);
        }
        break;
      case "pattern":
        if (value && !rule.regex.test(value.toString())) {
          error[key] = error[key] ?? []
          error[key]?.push(message);
        }
        break;
    }
  });
  return error;
};
