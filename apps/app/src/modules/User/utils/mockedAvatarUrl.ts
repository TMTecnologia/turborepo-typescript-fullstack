import { avatarAPIBaseUrl } from "~/services";

export function mockedAvatarUrl(name: string) {
  return `${avatarAPIBaseUrl()}?name=${name}&bold=true&background=random`;
}
