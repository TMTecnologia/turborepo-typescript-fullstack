import { useDefaultQuery } from "@root/hooks";

import { getUserListAsync, User } from "../services";

export const useUsers = () => {
  const { data: users, ...rest } = useDefaultQuery<User[]>("users", async () => {
    const { data } = await getUserListAsync();
    return data;
  });

  return { users, ...rest };
};
