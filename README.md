# OTB Tech Test - Rafee Jenkins

## How to run

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach
My approach to this test was to first understand the requirements and the design. I then broke down the requirements into smaller tasks and started working on them one by one.

## Decisions

### Folder Structure

I like to use a technique called 'Screaming Architecture'. This means that the folder structure should reflect the domain of the application, rather than the technical aspects.
IE I don't have a folder called 'components' or 'utils', instead I have folders that reflect the features of the application.
In this case, I have a feature called 'hotels-list', so I have a folder called 'hotels-list' that contains all the components, hooks, and types related to that feature.

Using this approach makes it far easier to find things, especially as the application grows in size.

### Why Next.js?

### Why Tailwind?

### Why Biome?

### Why Tanstack Query?