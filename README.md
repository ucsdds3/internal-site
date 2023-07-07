# DS3 Internal Site
This webapp is used internally inside the Data Science Student Society to post events and track analytics. It is built using SvelteKit and Typescript. It uses MongoDB as the primary DB, and is deployed on Vercel.

## Requirements
1. [Node.js](https://nodejs.org/en/download)
2. For DB testing: [MongoDBCompass](https://www.mongodb.com/products/compass)

## Running Locally
1. Clone the repository.
2. Install `pnpm`. Instructions [here](https://pnpm.io/installation) or if you have `npm` do:
```bash
npm install -g pnpm
``` 
3. Install dependencies.
```bash
pnpm install
```
4. Create a `.env` file and paste in the following contents
```env
# If you don't know the MongoDB connection, contact the Infrastrcture Director.
DATABASE_URL="<DB_URL_HERE>"
```
5. Generate the database schema for typescript IntelliSense.
```bash
npx primsa generate
```
6. Run locally using `pnpm` and navigate to localhost:5173.
```bash
pnpm run dev
```
