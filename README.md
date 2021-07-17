# vue-i18n-translation-each-component

How to write a translation for each component and use it on the screen

```ts
export default {
  "src/App": {
    link: {
      home: "Home",
      about: "About",
    },
  },
  "src/views/About": {
    title: "This is an about page",
  },
  "src/views/Home": {
    message: "Welcome to Your Vue.js + TypeScript App",
  },
};
```

How to use with SFC

```vue
<template>
  <div class="about">
    <h1>{{ $et('title') }}</h1>
    <!-- Equivalent to　-->
    <h1>{{ $t('src/views/About.title') }}</h1>
  </div>
</template>
```



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
