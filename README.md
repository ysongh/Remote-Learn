# Remote Learn
An web app where learners can suggest a topic for an expert to teach them

## Technologies
- Vue
- Bootstrap 4
- Quickbase

## Project setup
- Run
```
npm install
```

- Create a file called `config.js` in src folder
- Add this line of code in `config.js`
```
export const headers = {
    'QB-Realm-Hostname': 'demo.quickbase.com',
    'User-Agent': '{User-Agent}',
    'Authorization': 'QB-USER-TOKEN xxxxxx_xxx_xxxxxxxxxxxxxxxxxxxxxxx',
    'Content-Type': 'application/json'
}
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
