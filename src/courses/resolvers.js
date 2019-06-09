import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allCourses: (_) =>
			getRequest(URL, ''),
		courseByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createCourse: (_, { course }) =>
			generalRequest(`${URL}`, 'POST', course),
		updateCourse: (_, { code, course }) =>
			generalRequest(`${URL}/${code}`, 'PUT', course),
		deleteCourse: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
