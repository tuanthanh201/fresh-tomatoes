const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

const doc = {
	info: {
		title: 'CS348 Group Project',
	},
	host: 'localhost:8000',
	tags: [
		{
			name: 'user',
			description: 'User endpoints',
		},
		{
			name: 'movie',
			description: 'Movie endpoints',
		},
		{
			name: 'genre',
			description: 'Genre endpoints',
		},
	],
	definitions: {
		LoginParams: {
			$email: 'johndoe@example.com',
			$password: '123456',
		},
		RegisterParams: {
			$email: 'johndoe@example.com',
			$username: 'johndoe',
			$password: '123456',
			$profile: 'Hello world',
		},
		AuthResponse: {
			user: {
				$uuid: '1812a952-513d-4474-94d0-ef8a6c092fdb',
				$email: 'johndoe@example.com',
				$password: '123456',
				$profile: 'Hello world!',
				$role: 'Admin',
				$createdAt: '2023-01-28T01:00:51.161Z',
				$updatedAt: '2023-01-28T01:00:51.161Z',
			},
			token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InV1aWQiOiJmYmZkNDNhYS1kYjQzLTRhODctYmE2Ni1jYjM1MjYyMjliMDIifSwiaWF0IjoxNjc1NjYwMjM5LCJleHAiOjE2NzU2NjM4Mzl9._BReuhfRbxNmCnRmjh8B660rBUeiPK5XddNk5iQkFKA',
		},
		ErrorResponse: {
			errors: [
				{
					msg: 'Some error message',
				},
			],
		},
		User: {
			$uuid: '1812a952-513d-4474-94d0-ef8a6c092fdb',
			$email: 'johndoe@example.com',
			$password: '123456',
			$profile: 'Hello world!',
			$role: 'Admin',
			$createdAt: '2023-01-28T01:00:51.161Z',
			$updatedAt: '2023-01-28T01:00:51.161Z',
		},
		Movie: {
			$uuid: '1812a952-513d-4474-94d0-ef8a6c092fdb',
			$title: 'Ratatouille',
			$overview: 'Did I spell that right?...',
			$poster:
				'http://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
			$backdrop:
				'http://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
			$adult: false,
			$releasedDate: '2022-12-31',
			$runtime: 161,
			$ratingCount: 1200,
			$ratingAverage: 9.2,
			$popularity: 5462,
			$createdAt: '2023-01-28T01:00:51.161Z',
			$updatedAt: '2023-01-28T01:00:51.161Z',
		},
		Genre: {
			$uuid: '1812a952-513d-4474-94d0-ef8a6c092fdb',
			$name: 'Action',
			$createdAt: '2023-01-28T01:00:51.161Z',
			$updatedAt: '2023-01-28T01:00:51.161Z',
		},
	},
};

swaggerAutogen(outputFile, endpointsFiles, doc);
