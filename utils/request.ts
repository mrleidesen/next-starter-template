import qs from 'qs';

export function getRequest(url: string, params?: Record<string, any>) {
  return fetch(`${url}${qs.stringify(params, { addQueryPrefix: true })}`, {
    method: 'GET',
  });
}
