# Product List CRUD Nest/Angular Sample

Product list sample built with Nestjs & Angular, following the tutorials by [Fazt Web](https://github.com/FaztWeb) on YouTube:

- [Nestjs & Mongodb, REST API](https://www.youtube.com/watch?v=jEKsD5f3Bqc)
- [Nestjs & Angular CRUD](https://www.youtube.com/watch?v=AmF_BTzJdFY)

# To run locally

- Environment:
  * Server: You will need a .env file with:
    PRODUCT_LIST_CRUD_NEST_ANGULAR_SAMPLE_DB_URL (server/src/app.module.ts). I used my MongoDB Atlas cluster.
    
    PORT (server/src/main.ts) I used 3003, but up to you.
    
    ANGULAR_CLIENT_URL (server/src/main.ts). I used the same as below.

  * Client: You will need an apiKey for BASE_URL in client/src/app/services/product.service.ts. I did not make it to get .env files processed with Angular, so I just ".gitignored" the Angular environments folder and stored the variable in environment.ts. This is just a temporary workaround until I learn how to do it properly. And actually what I stored there is just the Url to the Api, which is the usual angular port 😏.

Once you get that done...

- `npm i` (server and client)

- Server: `npm run start:dev` | Client: `ng serve`

# To do...

- Style properly.
- Remove one "any" for which I could not find another solution.
- Welcome any suggestion.
