# Glee Bay

![App Preview](https://imgix.cosmicjs.com/36881990-8236-11f1-b83b-2552c3f550ca-autopilot-photo-1492691527719-9d1e07e534b4-1784330477983.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A futuristic, cyberpunk-styled e-commerce marketplace built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). Glee Bay connects buyers and sellers with product listings, seller storefronts, categories, and customer reviews — all powered by your existing Cosmic content.

## Features

- 🛸 **Product Listings** — Browse futuristic products with pricing, condition, stock, and image galleries
- 🏷️ **Category Filtering** — Explore products organized by neon-accented categories
- 👤 **Seller Storefronts** — Dedicated seller profile pages with bios, banners, and verified badges
- ⭐ **Customer Reviews** — Star ratings and written reviews connected to each product
- 🌌 **Cyberpunk Design** — Neon gradients, glass panels, glowing accents, and grid backdrops
- 📱 **Fully Responsive** — Beautiful across mobile, tablet, and desktop
- ⚡ **Server Components** — Fast, secure data fetching directly from Cosmic

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a5ab892f3ae734acd7cde59&clone_repository=6a5ab9b3f3ae734acd7cdeae)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online marketplace with product listings, seller profiles, categories, and customer reviews.
>
> User instructions: An e-commerce marketplace with products, categories, and customer reviews. Buyers and sellers.
>
> The user is rebuilding an existing website and provided these design notes: Futuristic, cyberpunk style. Factor these preferences into the content structure."

### Code Generation Prompt

> Build a Next.js application for an online business called "Glee Bay". The content is managed in Cosmic CMS with the following object types: categories, sellers, products, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type. An e-commerce marketplace with products, categories, and customer reviews. Buyers and sellers. Futuristic, cyberpunk style.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing `categories`, `sellers`, `products`, and `reviews` object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set environment variables (see below)
4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

Set the following environment variables in your hosting platform:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all products with nested category & seller data
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single product by slug
const { object: product } = await cosmic.objects
  .findOne({ type: 'products', slug })
  .depth(1)

// Fetch reviews for a specific product
const { objects: reviews } = await cosmic.objects
  .find({ type: 'reviews', 'metadata.product': productId })
  .depth(1)
```

## Cosmic CMS Integration

This app uses four object types from your Cosmic bucket:

- **categories** — name, description, category_image, accent_color
- **sellers** — name, bio, avatar, storefront_banner, location, verified
- **products** — title, description, price, condition, stock, gallery, category, seller
- **reviews** — reviewer_name, rating, review_text, product

All data is fetched server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs) with the `depth` parameter to resolve connected objects. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to a Git repository
2. Import the project in [Vercel](https://vercel.com)
3. Add the environment variables
4. Deploy

### Netlify

1. Connect your repository to [Netlify](https://netlify.com)
2. Set build command to `bun run build`
3. Add the environment variables
4. Deploy
<!-- README_END -->