import { IApiRequest } from './../types/request.d';
import { auth } from './../auth';
import { errorCodes } from './../errors';
import { IApiHeaders } from '../types/request';

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
const CryptoJS = require('crypto-js');

export const apiRequest = async (params: IApiRequest): Promise<AxiosResponse> => {

  // Consts
  const apiRoute = 'https://api.bittrex.com/v3';
  const subaccountId = ''

  // Derived
  const uri = apiRoute + params.endpoint;
  const timestamp = String(new Date().getTime());
  let contentHash = CryptoJS.SHA512(params.content).toString(CryptoJS.enc.Hex);
  let preSign = [timestamp, uri, params.method, contentHash, subaccountId].join('');
  let signature = CryptoJS.HmacSHA512(preSign, auth.apiSecret).toString(CryptoJS.enc.Hex);

  const headers:IApiHeaders = {
    'ApiKey': auth.apiKey,
    'ApiTimestamp': timestamp,
    'ApiContentHash': contentHash,
    'ApiSignature': signature
  }

  const config:AxiosRequestConfig = {
    'headers': headers,
  };

  return await axios.get(uri, config)
}
