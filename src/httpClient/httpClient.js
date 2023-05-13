// 추상
// fetch(endPoint, options): Promise

export class HttpClient {
  constructor(baseURL, tokenRepository) {
    this.baseURL = baseURL;
    this.tokenRepository = tokenRepository;
  }

  fetch(url, options = {}) {
    return window.fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.tokenRepository.get(),
        ...options.headers,
      },
    });
  }
}
