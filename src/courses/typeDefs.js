export const coursesTypeDef = `
type Course {
    code: Int!
    name: String!
    credits: Int!
    professor: String!
}
input CourseInput {
    name: String!
    credits: Int!
    professor: String!
}`;

export const coursesQueries = `
    allCourses: [Course]!
    courseByCode(code: Int!): Course!
`;

export const coursesMutations = `
    createCourse(course: CourseInput!): Course!
    deleteCourse(code: Int!): Int
    updateCourse(code: Int!, course: CourseInput!): Course!
`;
