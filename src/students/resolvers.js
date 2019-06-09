import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		getAllStudents: (_) =>
			getRequest(URL, ''),
		getStudentByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createStudent: (_, { student }) =>
			generalRequest(`${URL}`, 'POST', student),
		updateStudent: (_, { code, student }) =>
			generalRequest(`${URL}/${code}`, 'PUT', student),
		deleteStudent: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
