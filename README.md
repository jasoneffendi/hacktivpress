Hacktiv Press
===================
Final Live Code Phase 2 Hacktiv8

PRESS API
==================


List of user routes:

| Route | HTTP | Description |
| :----------- |	:---------- | ---------- |
| [`/users`][3] | GET | Get all the users |
| [`/users/info`][3] | POST | Send token to get a single user info |
| [`/users`][3] | POST | Create a user |
| [`/users/login`][3] | POST | Login user to get jwt token |

List of articles routes:

| Route | HTTP | Description |
| :----------- |	:---------- | ---------- |
| [`/`][3] | GET | Get all the articles |
| [`/:id/details`][3] | GET | Get article info by id |
| [`/:id/author`][3] | GET | Get article info by author |
| [`/:category/category`][3] | GET | Get article info by category search |
| [`/:id`][3] | PUT | Edit article info |
| [`/`][3] | POST | Post a new article |

Usage
Run client only with npm:

>cd client
>npm install
>npm run dev

Run server only with npm:

>cd server
>npm install
>npm start


--------

  [1]: http://math.stackexchange.com/
  [2]: http://daringfireball.net/projects/markdown/syntax "Markdown"
  [3]: https://github.com/jmcmanus/pagedown-extra "Pagedown Extra"
  [4]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
  [5]: https://code.google.com/p/google-code-prettify/
  [6]: http://highlightjs.org/
  [7]: http://bramp.github.io/js-sequence-diagrams/
  [8]: http://adrai.github.io/flowchart.js/
