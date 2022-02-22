import { AxiosResponse } from "axios";

interface Props {
  execute: () => Promise<AxiosResponse>;
}

export async function handlerApiAsync<DataType>({ execute }: Props) {
  try {
    const { data }: { data: DataType } = await execute();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}
