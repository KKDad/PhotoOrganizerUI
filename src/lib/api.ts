import { error } from '@sveltejs/kit';

const base = 'https://api.realworld.io/api';

async function send( method: string, path: string, data?: string, token?: string ) {
	const opts = { method, headers: Map, body: String };
s
	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}

	const res = await fetch(`${base}/${path}`, opts);
	if (res.ok || res.status === 422) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}

	throw error(res.status);
}

export function get(path: string, token?: string) {
	return send('GET', path, token);
}

export function del(path: string, token?: string) {
	return send('DELETE', path, token);
}

export function post(path: string, data: string, token?: string) {
	return send( 'POST', path, data, token );
}

export function put(path: string, data: string, token?: string) {
	return send('PUT', path, data, token );
}