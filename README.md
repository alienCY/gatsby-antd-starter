# Gatsby starter with Ant Design

It's a clone of the default gatsby starter but utilizing ant design (antd) components.

Ant design makes it easy to design a much more professional website with ease. (Seriously it's real gud m8 :D)

Sadly at the moment my starter doesn't include hot reloading for changes in `src/theme/vars.less` 

Developing has to be restarted manualy for the changes on ant design's theme to become visible in the browser.

A full list of ant design components can be found [here](https://ant.design/components/button/)

The starter also has a much cooler header and footer!

## Demo

Check it out [here](https://gatsby-antd-starter.netlify.app/)

## Getting Started

Install this starter by running

   ```bash
   gatsby new my_site https://github.com/alienCY/gatsby-antd-starter
   ```
   
   Then just

   ```bash
   cd my_site
   gatsby develop
   ```

   Site can be found running at `http://localhost:8000/`

   **Tips on importing ant design components**
   
   Highly recomended to import the components as said in their site from `antd`.
   
   For example to import a button with an icon:
   
   ```javascript
   import { Button } from 'antd';
   import { SearchOutlined } from '@ant-design/icons';

   <Button type="primary" icon={<SearchOutlined />}>
      Search
   </Button>
   ```
## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: gatsby-antd-starter is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.
## Extra plugins used

* gatsby-plugin-antd (+ antd)

* gatsby-plugin-less (+ less)

* less-to-json

## Basic plugins

* plugins in gatsby default starter





