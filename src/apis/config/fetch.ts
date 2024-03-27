const commonFetch = async <T>(
  input: string | URL,
  accessToken: string,
  requestConfig?: RequestInit,
): Promise<CommonResponse<T>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${input}`, {
    ...requestConfig,
    headers: new Headers({
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      ...requestConfig?.headers,
    }),
  });

  if (!res.ok) throw new Error('Network Error');

  return res.json();
};

export default commonFetch;
