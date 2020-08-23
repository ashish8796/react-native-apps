import {API_URI} from './config'

class API {
	mainUrl: string = API_URI

	async get(url: string) {
		try {
			const response = await fetch(this.mainUrl + url);
			return await response.json();
		} catch(e) {
			return e
		}
	}

	async post(url: string, data: any) {
		try {
			const response = await fetch(this.mainUrl + url, {
				method: 'POST',
				headers: {
					'content-type' : 'application/json',
				},
				body: JSON.stringify(data)
			});
			await response.json();
		} catch(e) {
			return e
		}
	}
}

const api = new API();

export const getAllTodos = () => api.get('/todos');