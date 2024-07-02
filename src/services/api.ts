import axios from "axios";

const HOST = process.env.NEXT_PUBLIC_API_HOST;
export const baseUrl = `${HOST}`;

export async function getRequest({
  extraHeaders = {},
  url,
  params = {},
  cache = "default",
}: {
  extraHeaders?: object;
  params?: object;
  url: string;
  // eslint-disable-next-line no-undef
  cache?: RequestCache | undefined;
}) {

 try{
  const response = await axios.get(`${baseUrl}${url}`, {
    params,
});
  return response;
 }
  catch (error:any) {
    throw new Error(`${error}`);
  }
}

export async function postRequest({
  data,
  extraHeaders = {},
  url,
}: {
  data: object;
  extraHeaders?: object;
  url: string;
}) {

  try {
    const response = await axios.post(`${baseUrl}${url}`, data || {}, {
     
    });
    return response;
  } catch (error:any) {
    throw new Error(`${error}`);
  }
}
