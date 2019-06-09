import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	studentsMutations,
	studentsQueries,
	studentsTypeDef
} from './students/typeDefs';

import studentsResolvers from './students/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		studentsTypeDef
	],
	[
		studentsQueries
	],
	[
		studentsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		studentsResolvers
	)
});
