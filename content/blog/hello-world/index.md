---
title: Hello World and The Making of This Blog
date: "2019-02-17"
---

Hi, I'm Willian. I've been studying blockchain, cryptocurrency and decentralized technologies for more some time, and  decided to share some of my thoughts.

Instead of just sharing some content on Medium or another blog platform, I was heavily influenced by [this Dan Abramov's blog post](https://medium.com/@dan_abramov/why-my-new-blog-isnt-on-medium-3b280282fbae), and decided this is a very good excuse to dogfood some of the decentralized technologies we have currently in February, 2019.

This first blog post is a making of this blog itself, and yes, there is some inception inspiration involved 🙃

![inception](./inception.jpg)

## Creating the basic project structure

This blog will be an extension of the ideas explained in Dan's post, it'll use the [GatsbyJS Blog Starter](https://github.com/gatsbyjs/gatsby-starter-blog) as the content generator, and then we'll publish it on IPFS.

```shell
$ npx gatsby new myblog https://github.com/gatsbyjs/gatsby-starter-blog
```

In the above example, a gatsby project will be generated in the `./myblog` directory, with some sample content in Markdown inside `./myblog/content/blog` directory.

Because of the way gatsby compiles the internal paths, we need to install an external plugin, follow the instructions [here](https://github.com/moxystudio/gatsby-plugin-ipfs).

After all that, you can try out the resulting static website by running

```shell
$ npm start
```

and going to http://localhost:8000/.

## Serving the content locally through IPFS

Now we are going to serve the content locally through your local IPFS gateway.

Go to https://ipfs.io/ and download a prebuilt package for your platform. For macOS I highly recommend using the homebrew installation, just run

```shell
$ brew install ipfs
```

After installation, there is some initial setup involved for the local node that I won't explain here, please refer to IPFS docs.

Assuming you have a local IPFS node already running (`ipfs daemon`), just run these steps:

1. Compile your website into a production-optimized build inside the `./public` directory.

```shell
$ npm run build
```

2. Add all content from `./public` directory recursively to your local IPFS node.

```shell
$ ipfs add -r public
```

The last command will output one line for each file it encountered, prefixed by its [CID](https://docs.ipfs.io/guides/concepts/cid/). Pay attention to the last one, which is the CID for your root directory:

```
added QmZRXXx36gmvYoMMPCvQBYjZD3xSyBrJhfsybc6gut1REy public
```

The CID will differ according to the content in your environment, in this example it is `QmZRXXx36gmvYoMMPCvQBYjZD3xSyBrJhfsybc6gut1REy`.

Now you can access the content through the local IPFS gateway by opening the URL `http://127.0.0.1:8080/ipfs/<CID>` in your browser; in my example it should be `http://127.0.0.1:8080/ipfs/QmZRXXx36gmvYoMMPCvQBYjZD3xSyBrJhfsybc6gut1REy/`.

## Serving the content remotely through IPFS

Actually you don't have to do anything more because your local node is already connected to other peers of the IPFS network.

Just try to access the same content using another public IPFS gateway, like https://ipfs.io/ or https://cloudflare-ipfs.com/.

You should experience some delay the first time you access your website through a remote gateway because your content will be uploaded to your peers on demand.

## Pinning the content

So now we have our content available in the IPFS decentralized network, but we still have a problem: there is no garantee your content will be available to the rest of the network if you shutdown your local node because other nodes are free to decide to garbage collect it whenever they want.

Please see [here](https://docs.ipfs.io/guides/concepts/pinning/) for a longer explanation of why this is necessary.

One solution is to pay for a pinning service. I've googled it, and quickly found https://eternum.io. Not sure if it is the best available service, but aparently it works and it is very cheap.

Just register your root CID and wait some time for the content to be synced.

## Making the URL look better using IPNS

Instead of referring to your website using this very ugly CID, let's improve the user experience by giving it a more human-friendly-name.

We can create a IPNS name using a domain name you own. In my case, I will create a TXT DNS record with the name `_dnslink.blog.decentralizing.me` pointing to the CID in my DNS hosting provider:

```
dnslink=/ipfs/QmZRXXx36gmvYoMMPCvQBYjZD3xSyBrJhfsybc6gut1REy
```

So, in my example, after the DNS propagation, I can now refer to the content inside the IPFS gateway using my domain name:

```
https://ipfs.io/ipns/blog.decentralizing.me/
```

## Using a custom domain to serve your content

We can improve the usability a little bit by ⚠️centralizing⚠️ the access into a specific IPFS gateway. You will still be able to access the content through the IPNS name at the IPFS gateway of your choice, but you can just use your domain name directly by registering a CNAME record in your DNS provider.

In my case I've just created a CNAME entry for `blog.decentralizing.me` pointing to `cloudflare-ipfs.com.`. I highly recommend using Cloudflare's IPFS gateway because they generate a TLS certificate for your domain for free.

See [here](https://docs.ipfs.io/guides/examples/websites/) for a more complete explanation.