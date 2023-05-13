// interface

// TodoService {
//   get():Promise<Todo[]>;
//   create(todo: string):Promise<Todo>
// }

export class TodoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async get() {
    const response = await this.httpClient.fetch('todos');

    return response.json();
  }

  async create(todo) {
    const response = await this.httpClient.fetch('todos', {
      method: 'POST',
      body: JSON.stringify({
        todo,
      }),
    });

    return response.json();
  }
}

// api가 준비되지 않았을 때, 프론트에서 interface보고 미리 형식만 준비해두기
export class LocalTodoService {
  constructor() {
    this.todos = [];
    this.id = 1;
  }

  get() {
    return Promise.resolve([...this.todos]); // state 동등성 처리
  }

  create(todo) {
    const newTodo = {
      if: this.id++,
      todo,
      isCompleted: false,
      userId: 1,
    };
    this.todos.push(newTodo);
    return Promise.resolve(newTodo);
  }
}
