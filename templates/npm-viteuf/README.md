# Vite Zshmeact

##### ...by zshmeta

### what is this?

This is a for React that uses Vite and swc under the hood. The Structure should be clear enough to allow for any dev to just jump in and start working.

Vite and swc are both very fast and very good. Vite is a dev server that uses esbuild under the hood. Swc is a rust built js compiler that is very fast compared to other solutions.

### How is this?

It can easily be broken down to the following parts:

- Public: This is where the files that public can have access to should be store. It is also the "actual" entry point of the app.

- Src: This is where the source code of the app should be stored. It is the "virtual" entry point of the app.

- Pages: This is where the pages of the app should be stored. With the current setup, each page corresponds a route. This can be changed if needed.

- Components: This is where the components of the app should be stored. It can be anything that you need or want to destructure into a component.

- Components/Ui: This is where the Ui components of the app reside. It usually is a good idea to have a Ui folder to separate the Ui reusable components such as button inputs etc... from the rest of the components.

- layouts: Layouts are the components that wrap the pages. They are usually would be your header and a footer. They can also be used to wrap the pages with other items like sidebars or any other component that you want to be present in all the pages.

- utils: utils can be any function that runs without any gui. an example is the i18n function that is used to translate the app for example or any other function that you want to be available to the whole app.

- modules: modules are the functions that uses gui when running. an example is any micro apps such as a clock or calculator or any other app that renders guis.

- data: data is where the data of the app should be stored. It can be anything from in the format of a json, an example would be interchangeble themes or any other data that doesn't need to sit in a database and/or on the backend. It can also store any md or mdx files that you want to be rendered as a page.

- assets: assets is where the assets of the app should be stored. It can be anything from images to videos to fonts to any other asset that you want to use in your app.

This is it for the general structure of the app. It is a good idea to keep the structure as flat as possible. It is also a good idea to keep the components as small as possible. This will allow for a better reusability and a better maintainability of the app.

includes: 

the app uses the following:

Vite as a dev server: read more about it here: https://vitejs.dev/

swc as a compiler: read more about it here: https://swc.rs/

react as a framework: read more about it here: https://reactjs.org/

react-router-dom as a router: read more about it here: https://reactrouter.com/web/guides/quick-start

react-i18next as a translation library: read more about it here: https://react.i18next.com/

react-helmet as a head manager: read more about it here:

jest as a testing library: read more about it here: https://jestjs.io/

testing-library/react as a testing library: read more about it here: https://testing-library.com/docs/react-testing-library/intro/

sass as a css preprocessor: read more about it here: https://sass-lang.com/

scss as a css preprocessor: read more about it here: https://sass-lang.com/

styled-components as a css-in-js library: read more about it here: https://styled-components.com/

prettier as a code formatter: read more about it here: https://prettier.io/

eslint as a linter: read more about it here: https://eslint.org/

compomerci as a component generator: read more about it here:https://github.com/zshmeta/compomerci

Finally this project is full of heart and dedications with countless hours put into learning and expanding my knowledge on "how exactly it does that". I hope you enjoy it as much as I did making it.


### Why is this

"On est jamais mieux servi que par soi-meme" Rohff - La Puissance

while i set my mind to finding out what was so likeable about react, i found myself in a rabbit hole of learning and discovering. I found myself learning about the react ecosystem and how it works, and why it is so popular amongst developer's old and new alike.
In order to consolidate my knowledge (and because i coudn't find a boilerplate that i liked) i decided to make my own boilerplate. I hope you enjoy it as much as i did making it.


### How to run: 

- First, clone the repository
- Then, navigate to the  directory
- Finally, run the command `npm install && npm run dev` or `yarn && yarn run dev`

You can go Visit localhost:5173 to see your app

### Thank Yous: 

Special thanks to the open source community for their unconditional support.