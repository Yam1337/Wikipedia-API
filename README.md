# Wikipedia API

<p align="center">
<img src="https://github.com/Yam1337/Wikipedia-API/blob/master/presentation-wikipedia-api.gif">
</p>

# Description

This project is a Wikipedia API App, that search wikipedia API for desired text, and allows user to highlight every of given text fragment.
It is a front-end application typed with TypeScript, which uses wikipedia API (https://en.wikipedia.org/w/api.php?action=query&list=search&format=json) to search for results. Results are parsed from HTML to String by Regex Expression. Searching works on-live, while user is typing. Application logic uses Lodash debounce method to protect server from overload. Application has also "Highlight all" functionality, which uses Lodash escapeRegExp and HTML <mark></mark> to highlight desired text. Global state of Application is managed by Zustand. Design of Application is mostly Ant Design.

# Technology stack
* ReactJS (https://pl.reactjs.org)
* TypeScript (https://www.typescriptlang.org)
* Ant Design (https://ant.design)
* Axios (https://axios-http.com)
* Lodash (https://lodash.com)
* Zustand (https://github.com/pmndrs/zustand)

# How to run locally

* npm install
* npm run start

# Live

You can see it live on:
https://yam1337.github.io/Wikipedia-API/

