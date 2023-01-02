type FunctionParams<T> = T extends (...args: infer R) => any ? R : never;

type AA = string;
