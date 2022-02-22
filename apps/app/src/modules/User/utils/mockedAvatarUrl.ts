import { avatarAPIBaseUrl } from "@root/services";

export function mockedAvatarUrl(name: string) {
  return `${avatarAPIBaseUrl()}?name=${name}&bold=true&background=random`;
}
