import { api, handlerApiAsync } from "@root/services";

import { userBase } from "../utils";

interface UserAsyncProps {
  id: number;
}

export type User = {
  id: number;
  name: string;
  email: string;
};

export async function getUserListAsync() {
  const response = await handlerApiAsync<User[]>({ execute: () => api.get(`${userBase()}`) });
  return response;
}

export async function getUserAsync({ id }: UserAsyncProps) {
  const response = await handlerApiAsync<User>({ execute: () => api.get(`${userBase()}/${id}`) });
  return response;
}

export function postUserAsync({ id }: UserAsyncProps) {
  return api.post(`${userBase()}/${id}`);
}
