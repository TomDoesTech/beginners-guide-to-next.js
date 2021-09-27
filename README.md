# An Absolute Beginners Guide to Next.js

- How to bootstrap a React application with Nextjs
- and, how Nextjs can help you build production-grade React application

Next.js has a tone of features but in this video I'm only going to be covering the main ones you need to get started. After watching this video, I encourage you to go the Next.js documentation to see all the available features.

Next.js can be used to build static websites, along with server-rendered applications. In this guide I'm going to be showing you how you can implement both of these rendering strategies, so you can decide which one best suits your application.

**Bootstrap the application**

I'm going to be using TypeScript so I can show off some of the awesome TypeScript features that Next.js comes with for the TypeScript users, but you can follow along with JavaScript, even if you're not familiar with TypeScript.

```
npx create-next-app 
# or
yarn create next-app

# with typescript
yarn create next-app my-app --typescript
```

**Create pages**

**_app & _document**

[https://nextjs.org/docs/advanced-features/custom-app](https://nextjs.org/docs/advanced-features/custom-app)

[https://nextjs.org/docs/advanced-features/custom-document](https://nextjs.org/docs/advanced-features/custom-document)

**Rendering strategies**

Static-site generation - Fastest

- Gets run at build time

```jsx
// Run at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

// Run at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
```

Server-side rendering

```jsx
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
```

**Routing**

[https://nextjs.org/docs/routing/introduction](https://nextjs.org/docs/routing/introduction)

**Styling**

[https://nextjs.org/docs/basic-features/built-in-css-support](https://nextjs.org/docs/basic-features/built-in-css-support)

**Environment variables**

[https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables](https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables)

**Router**

```jsx
import { useRouter } from "next/router";
```