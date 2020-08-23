import {API_URI} from './config';
import {Todo} from './lib/store/reducers';
import {TodoId} from './lib/store/actions/actions';

class API {
  mainUrl: string = API_URI;

  async get(url: string) {
    try {
      const response = await fetch(this.mainUrl + url);
      return await response.json();
    } catch (e) {
      return e;
    }
  }

  async post(url: string, data: any) {
    try {
      const response = await fetch(this.mainUrl + url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      await response.json();
    } catch (e) {
      return e;
    }
  }

  async delete(url: string, data: number) {
    try {
      const response = await fetch(this.mainUrl + url, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({id: data}),
      });
      await response.json();
    } catch (e) {
      return e;
    }
  }

  async changeStatus(url: string, data: number) {
    try {
      const response = await fetch(this.mainUrl + url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({id: data}),
      });

      await response.json();
    } catch (e) {
      return e;
    }
  }
}

const api = new API();

export const getAllTodos = () => api.get('/todos');

export const addNewTodo = (data: Todo) => api.post('/add-todo', data);

export const deleteATodo = (data: number) => api.delete('/delete-todo', data);

export const changeStaus = (data: number) =>
  api.changeStatus('/change-status', data);
