# Cambodia Mission - Patient Platform
Small application built to run on Raspberry Pi's so when the mission team travels to remote areas of Cambodia, we don't need to rely on a live internet connection for the application to work. 

## For development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## APIs
All APIs are tied to a Mongo Database ran on a seperate server and all API routes start with `/api` 