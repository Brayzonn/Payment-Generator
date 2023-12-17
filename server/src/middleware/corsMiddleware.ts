import { CorsOptions } from 'cors';

export const corsOptions: CorsOptions = {
  origin: ['http://localhost:4000'],
  credentials: true,
  maxAge: 1800, 
  allowedHeaders: ['content-type', 'Authorization'], 
  methods: ['PUT', 'POST', 'GET', 'DELETE', 'PATCH', 'OPTIONS'],
};


