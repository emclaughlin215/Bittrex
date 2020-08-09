export interface IApiRequest {
  endpoint: string,
  method: string,
  content: string,
  successCode?: number
}

export interface IApiHeaders {
  ApiKey: string,
  ApiTimestamp: string,
  ApiContentHash: string,
  ApiSignature: string
}