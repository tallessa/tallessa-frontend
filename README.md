# Tallessa – Effortless Asset Management

[![Build Status](https://travis-ci.org/tallessa/tallessa-frontend.svg?branch=master)](https://travis-ci.org/tallessa/tallessa-frontend)

## Responsive Web Frontend

## Getting started

### The Docker Compose Way

There is a single unified Docker Compose development environment for both `tallessa-frontend` (this repository) and `tallessa-backend`. For instructions, see [tallessa-backend](https://github.com/tallessa/tallessa-backend).

### The Traditional Way

Requirements:

* Node.js 7.x (tested: 7.6)

You should get up and running with the following commands:

    git clone git@github.com:tallessa/tallessa-frontend
    cd tallessa-frontend
    npm install
    npm start
    iexplore http://localhost:8080

## Coding conventions

Coding conventions are enforced via `eslint`. We deviate from [Airbnb](https://github.com/airbnb/javascript) in the following points:

* Contents of a single line object literal are not space-wrapped: `{foo: 5}`
* It's OK to define multiple `let`s or `const`s in a single statement as long as you indent this way:

```javascript
const
  a = 5,
  b = 6;
```

## License

    Tallessa – Effortless Asset Management (Responsive Web Frontend)
    Copyright © 2016–2017 Santtu Pajukanta

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
