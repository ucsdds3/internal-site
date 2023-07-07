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
4. The following step is if Threlte v5 is the latest version. At the time of writing, there is [issue](https://github.com/threlte/threlte/issues/356) in which you will need to modify one of the dependency files. Go into `node_modules/three/examples/jsm/objects/` and change `GroundProjectedSkybox` into `GroundProjectedEnv`. You will need to do this to the filename, the class name, and the export at the bottom.
5. Create a `.env` file and paste in the following contents
```env
# If you don't know the MongoDB connection, contact the Infrastrcture Director.
DATABASE_URL="<DB_URL_HERE>"
```
6. Generate the database schema for typescript IntelliSense.
```bash
npx primsa generate
```
7. Run locally using `pnpm` and navigate to localhost:5173.
```bash
pnpm run dev
```
