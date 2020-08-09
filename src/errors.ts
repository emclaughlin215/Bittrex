export const errorCodes: object = {
    '400': () => console.log('Error Code 400: Bad request - Request content was malformed.'),
    '401': () => console.log('Error Code 401: Unauthorised - Failed to authenticate.'),
    '403': () => console.log('Error Code 403: Forbidden - API key provided is not able to performed the desired request.'),
    '404': () => console.log('Error Code 404: Not Found - Request source does not exist.'),
    '409': () => console.log('Error Code 409: Conflict - Operational Error e.g. insufficient funds.'),
    '429': () => console.log('Error Code 429: Too Many Requests - API request limit reached.'),
    '501': () => console.log('Error Code 501: Not Implemented - Service request has not been implemented.'),
    '503': () => console.log('Error Code 503: Service Unavailable')
  }
