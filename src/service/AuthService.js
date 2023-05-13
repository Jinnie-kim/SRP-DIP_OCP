// 추상
// signin(email, password):Promise<void>
// signup(email, password):Promise<void>
// logout():void

// 구현

export class AuthService {
  constructor(httpClient, tokenRepository) {
    this.httpClient = httpClient;
    this.tokenRepository = tokenRepository;
  }

  async signin(email, password) {
    // 1. api call
    const response = await this.httpClient.fetch('auth/signin', {
      method: 'POST',
      body: {
        email,
        password,
      },
    });
    const { access_token } = await response.json();

    // 2. token save
    this.tokenRepository.save(access_token);
  }

  signup(email, password) {
    // 상위에서 Promise return 값으로 에러 처리를 하는 경우
    // return을 해줘야 Promise가 reject인지 resolve인지 전달해줄 수 있다.
    return this.httpClient.fetch('auth/signup', {
      method: 'POST',
      body: {
        email,
        password,
      },
    });
  }

  logout() {
    this.tokenRepository.delete();
  }
}
