# Blazor.Tailwind

> [Demo Website](https://hona.github.io/Blazor.Tailwind/)

> A demo project showing scoped CSS using Tailwind as well as global CSS

---

## Scoped CSS

Scoped CSS is built using `*.razor.scss*`. Before the build (via the [csproj](Blazor.Tailwind.csproj) target) a [script](build-scoped-css.js) runs using PostCSS to process those into normal `*.razor.css` files

![image](https://user-images.githubusercontent.com/10430890/202615471-add021fb-5104-409a-8974-4c385cb2b1d7.png)

## Global CSS

The global styling is also a SCSS file - which can include any SCSS files. So feel free to go modular with folders!

![image](https://user-images.githubusercontent.com/10430890/202615559-33126354-709f-4faf-bf09-e3de226aa610.png)

## Inline & InCode

The filter to include Scoped, Global, Inline & In-Code Tailwind classes is:

```
"./**/*.{razor,css,scss,cs,html,js}"
```

I ported a random template from [here](https://github.com/tailwindtoolbox/Landing-Page) to demonstrate the various ways CSS is being pulled together.
