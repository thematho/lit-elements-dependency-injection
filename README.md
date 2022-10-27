# Dependency Injection with Lit Elements Demo


This project contains demo examples of how to implement a Dependency resolution system based on Events and 2 Mixins.

Found the mixin code inside `src/di`

## Demo
[Live demo](https://thematho.github.io/lit-elements-dependency-injection-demo).

## Install

Run `npm i`

## Build

Run `npm run build`

## Deploy

Run `npm run deploy`

## Local Server

Run `npm start`

# Explanation of the solution

Go to `docs/Event driven dependency injection.pdf` to see the presentation of the solution. Note, the presentation as made for ING NL company, therefore images and content inside are ownership of ING and cannot be used or distributed without their permission. But you can read the presentation and copy the code example as well as the source code on this Demo repo.

# Demos

There are 2 demos, `colors` and `products` (`region` in the source code)
The first one is a simple example of a children moving arround receiving an object as dependency that the children uses to show a different message and style, inside different color containers.
The second example resolves 3 dependencies: A Factory, a Singleton service and a simple variable, to determinate values and descriptions of a Product in Europe and America, doing drag and drop of the product item in the respective containers.

# License

This project is licensed under the terms of the MIT license.

Presentation images and art cannot be used without consent of the owners.
