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
However, if the app were to grow in size - I would consider using CSS modules.

### Why Tanstack Query?
I prefer to use a library for data fetching and caching. I have found in the past that developers have struggled with
fetching data and subsequent state management. Tanstack Query takes care of this for me, and also provides a lot of features out of the box such as caching, refetching, and pagination.

Using it here made sense as I could define how I want to fetch data, and Tanstack Query takes care of the rest. It's also client-side so I can use it in a Next.js app without any issues.

### Why Nuqs / Search Params?
When dealing with search/filters, I like to use search paramaters so that the state of the application can be shared via a URL. 
It's a great UX for users to be able to share a link with their filters applied - in my opinion.

I stumbled across Nuqs a while ago, and liked the way it worked. I used to use the React Router's useSearchParams hook, but I am not using React Router here!
I used Nuqs+search params here because as I found that the initial approach (useState) meant that components were tightly coupled. 
However, now I don't have to have a parent component between the filter and list to share state, and they can both tap into the search paramas when they need to.
This also means down the line, if theres another component to be added - there shouldnt be too much of a hassle to tap into state.

## If I had more time

### Responsive Design
I would make the app more responsive. I would use Tailwind's responsive utilities to achieve this.
There is an example of this in the Page.tsx file where I make the UI vertical on small screens.


