> **NOTE** // If you're going to use this site as a template for yours, please read [this section](/#usage) first!

## asrvd.me
My personal site made using the [t3 stack](https://create.t3.gg) -- a fullstack and fully typesafe personal site.

## t3 stack
Checkout the repo for [create-t3-app](https://github.com/t3-oss/create-t3-app), used to scaffold this project and [init.tips](https://init.tips) to know why you should choose t3 stack. The tech stack consists of -
- Next.js
- tRPC
- Tailwind CSS
- NextAuth.js
- Prisma

My site uses all of these pieces of tech and [Planetscale's free tier](https://planetscale.com) for the database.

## usage
This repo is MIT licensed, so you are free to use the code to create your own site, but please make sure you give proper credits to my own site and link my site in your site. That would help me create more open source projects which could be used by others freely, thank you!

Secondly, please remove my umami analytics from the code present in [/src/components/Layout.tsx](/src/components/Layout.tsx#L69) to prevent wrong analytics from being shown related to my site.

## run locally
clone the repo and cd into it
```bash
git clone https://github.com/asrvd/asrvd.me my-site
cd my-site
```
install deps
```bash
pnpm i 
```
add the environment variables required, see [.env.example](/.env.example) for reference
```bash
# Prisma
DATABASE_URL=

# Next Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Next Auth Discord Provider
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

# Next Auth GitHub Provider
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# LastDotFM API Credentials
LASTFM_API_KEY=

# Umami
UMAMI_USERNAME=
UMAMI_PASSWORD=

# Wakatime
WAKATIME_API_KEY=
```
fire up prisma
```bash
pnpm dlx prisma db push
pnpm dlx prisma studio # to preview your data
```
run the dev server
```bash
pnpm run dev
```

## ending note
- don't forget to star the repo if you liked the project.
- consider [sponsoring me](https://github.com/sponsors/asrvd).
