# Hexo-Blog (leever.cn)

## About this Repository

This repository contains **only the generated static files** of my Hexo blog.

The actual Hexo source code is maintained in a **separate private repository**.
All CI and build processes are handled there via GitHub Actions, which generate the site and push the resulting static files to this repository.

This repository itself does **not** run any CI/CD workflows and serves purely as a deployment target.

## Deployment

This repository is connected to [Vercel](https://vercel.com/) and is **continuously deployed** there.

However, the primary domain `leever.cn` now points to my **personal server and CDN**, and is completely independent of Vercel.
Vercel is currently kept only as a **public mirror**, available at:

👉 [https://hexo-blog-karped1ems.vercel.app/](https://hexo-blog-karped1ems.vercel.app/)

Please note that the Vercel mirror **does not support comments** due to comment system URL restrictions.
To avoid comment loss or misrouting, **please do not submit comments on the Vercel mirror**.
Comments are supported only on the primary site served under `leever.cn`.

## About Open Source

Only the built static pages and assets are public in this repository.

The Hexo source repository is not open-sourced because it contains **pre-encrypted article content**, unpublished drafts, and personal configuration.

If you’d like to build a similar Hexo-based blog, the following resources may be helpful:

* The [Butterfly theme](https://butterfly.js.org/) (recommended to use the latest version)
* [Akilarの糖果屋](https://akilar.top/) for detailed tutorials on Butterfly theme customization

If you have questions related to the public setup, feel free to open an Issue.
