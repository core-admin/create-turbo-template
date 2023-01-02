import { merge } from 'lodash-es';

export function extend(...args: FunctionParams<typeof merge>): ReturnType<typeof merge> {
  return merge(...args);
}
