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
My approach to this project was to first get the app working, and then make it better.

I started with fetching the data. 

## Decisions

### Folder Structure

I like to use a technique called 'Screaming Architecture'. This means that the folder structure should reflect the domain of the application, rather than the technical aspects.
IE I don't have a folder called 'components' or 'utils', instead I have folders that reflect the features of the application.
In this case, I have a feature called 'hotels-list', so I have a folder called 'hotels-list' that contains all the components, hooks, and types related to that feature.

Using this approach makes it far easier to find things, especially as the application grows in size.

### Why Next.js?

The main motivator for me was that Next is used already at OTB, so it made sense to use it for this test.
Next.js is a great framework that provides a lot of features out of the box, such as routing, server-side rendering, and static site generation.

### Why Tailwind?

I like Tailwind as it allows me to iterate styles quickly without having to leave JSX. For the time constraints for this app, it makes sense. 
However, if the app were to grow ins size - I would consider using CSS modules.

### Why Tanstack Query?
I prefer to use a library for data fetching and caching. I have found in the past that developers have struggled with
fetching data and subsequent state management. Tanstack Query takes care of this for me, and also provides a lot of features out of the box such as caching, refetching, and pagination.

## If I had more time

### Responsive Design
I would make the app responsive. I would use Tailwind's responsive utilities to achieve this.