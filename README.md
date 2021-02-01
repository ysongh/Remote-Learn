# Remote Learn
An web app where learners can suggest a topic for an expert to teach them

- Demo - https://youtu.be/1jtcFDX0R8A

## Technologies
- Vue
- Bootstrap 4
- Solidity
- Portis
- Raiden
- Quickbase

## Features
- Learners can create a topic that they would like the instructor to cover
- Instructor can select a topic to teach and pick a date and link for remote class
- Learners can tip instructor with cryptocurrency
- Learners can use Portis as an alternative wallet provider
- Payments can be made between learners and instructors using Raiden

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
- Run `truffle migrate` to deploy the contract
- Run `npm run serve` to start the web app