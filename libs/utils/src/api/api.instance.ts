export type ApiInstanceRequestMethod = 'POST' | 'GET' | 'PATCH';

export interface IApiInstanceRequestParams {
  url: string;
  method?: ApiInstanceRequestMethod;
  data?: object;
  headers?: HeadersInit;
  instanceConfig?: Partial<ApiInstanceSetConfigParams>;
  cache?: RequestCache;
}

type CookiesStringGetter = () => string | null;

export interface ApiInstanceSetConfigParams {
  baseUrl?: string | null;
  cookiesStringGetter?: CookiesStringGetter | null;
}

export class ApiInstance {
  private baseUrl: string | null = null;
  private cookiesStringGetter: CookiesStringGetter | null = null;

  constructor(params: ApiInstanceSetConfigParams) {
    this.setConfig(params);
  }

  async request<ResponseData>(
    params: IApiInstanceRequestParams,
  ): Promise<{ data: ResponseData; headers: Headers }> {
    const {
      url,
      method = 'GET',
      headers,
      data,
      instanceConfig,
      cache,
    } = params;
    const baseUrl = instanceConfig?.baseUrl ?? this.baseUrl;

    const requestHeaders: RequestInit['headers'] = {
      'Content-Type': 'application/json',
      ...headers,
    };

    if (this.cookiesStringGetter) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      requestHeaders['Cookie'] = this.cookiesStringGetter
        ? this.cookiesStringGetter() || ''
        : '';
    }

    const requestInit: RequestInit = {
      credentials: 'include',
      cache,
      method,
      headers: requestHeaders,
    };

    if (data) requestInit.body = JSON.stringify(data);

    const _url = `${baseUrl}${url}`
      .split('://')
      .map((i) => i.replace('//', '/'))
      .join('://');

    const res = await fetch(_url, requestInit);

    if (!res.ok) throw new Error('API error');

    const responseData: ResponseData = await res.json();
    return { data: responseData, headers: res.headers };
  }

  setConfig(params: ApiInstanceSetConfigParams) {
    if (params.baseUrl !== undefined) {
      this.baseUrl = params.baseUrl;
    }
    if (params.cookiesStringGetter !== undefined) {
      this.cookiesStringGetter = params.cookiesStringGetter;
    }
  }
}
