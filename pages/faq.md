---
title: FAQ
description: "Frequently asked questions about this site"
permalink: /faq/
---
<h2>General Questions</h2>

<details>
    <summary><strong>What is this site built with?</strong></summary>
    <p>This site is built with <a href="https://11ty.dev/" target="_blank">Eleventy (11ty)</a>, a simpler static site generator. It uses <a href="https://andybrewer.github.io/mvp/" target="_blank">MVP.css</a> for styling, which provides a clean, minimal design without the need for custom CSS classes.</p>
</details>

<details>
    <summary><strong>Why use Eleventy?</strong></summary>
    <p>Eleventy is flexible, zero-config by default, and supports multiple template languages. It generates fast, static websites that are easy to deploy and maintain. No database, no complex backend—just simple, performant web pages.</p>
</details>

<details>
    <summary><strong>Is MVP.css responsive?</strong></summary>
    <p>Yes! MVP.css includes responsive design patterns built-in. The stylesheet automatically adapts to different screen sizes without requiring additional breakpoints or media queries for basic layouts.</p>
</details>

<h2>Features</h2>

<details>
    <summary><strong>Does this site support dark mode?</strong></summary>
    <p>Yes! This site includes a light/dark mode toggle in the footer. Your preference is saved to localStorage, and the site will remember your choice on future visits. The site also respects your system color scheme preference.</p>
</details>

<details>
    <summary><strong>How can I highlight text on this site?</strong></summary>
    <p>Use the HTML <code>&lt;mark&gt;</code> element to highlight text with a yellow background: <mark>like this</mark>. The highlight color adjusts automatically in dark mode.</p>
</details>

<details>
    <summary><strong>Where can I find the site feeds?</strong></summary>
    <p>This site provides multiple feed formats:
        <ul>
            <li><a href="/feed/feed.xml">Atom Feed</a> - <code>/feed/feed.xml</code></li>
            <li><a href="/feed/feed.rss">RSS 2.0 Feed</a> - <code>/feed/feed.rss</code></li>
            <li><a href="/feed/feed.json">JSON Feed</a> - <code>/feed/feed.json</code></li>
        </ul>
    </p>
</details>

<h2>Content</h2>

<details>
    <summary><strong>Where do I find the blog?</strong></summary>
    <p>The <a href="/blog/">blog</a> contains all the latest posts. You can browse articles, view them by date, and subscribe to the feeds to get updates.</p>
</details>

<details>
    <summary><strong>How often is content updated?</strong></summary>
    <p>Content updates vary based on the author's schedule. Subscribe to the feeds to stay informed about new posts and updates.</p>
</details>

<details>
    <summary><strong>Can I search the site?</strong></summary>
    <p>Currently, this site does not have a built-in search function. You can use your browser's find feature (Ctrl+F or Cmd+F) to search the current page, or use a search engine with <code>site:example.com</code> to search across the domain.</p>
</details>

<h2>Technical</h2>

<details>
    <summary><strong>Is this site static or dynamic?</strong></summary>
    <p>This is a static site generated at build time. All pages are pre-rendered HTML files, which makes the site very fast, secure, and easy to host on any web server.</p>
</details>

<details>
    <summary><strong>How is the site deployed?</strong></summary>
    <p>Static site generators like Eleventy can be deployed to many platforms: Netlify, Vercel, GitHub Pages, AWS S3, traditional web hosting, and more. Each deployment is just a matter of pushing the generated <code>_site</code> folder.</p>
</details>

<details>
    <summary><strong>What's the sitemap?</strong></summary>
    <p>The site includes an XML sitemap at <a href="/sitemap.xml">/sitemap.xml</a> which helps search engines index all pages. There's also a <a href="/robots.txt">robots.txt</a> file and a <a href="/humans.txt">humans.txt</a> file for additional information.</p>
</details>

<h2>Contact</h2>

<details>
    <summary><strong>How can I get in touch?</strong></summary>
    <p>Visit the <a href="/contact/">contact page</a> to find out how to reach the site author. You can also check the footer for email and other contact information.</p>
</details>

<details>
    <summary><strong>Do you accept contributions or suggestions?</strong></summary>
    <p>Absolutely! Feel free to reach out with feedback, suggestions, or ideas. Contact information is available on the <a href="/contact/">contact page</a>.</p>
</details>
