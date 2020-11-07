# What is this?

This is an utility REST API for Autify JS Step.

# Getting started

```
yarn install
yarn start
```

# Endpoints

## One time password generator

It generates one time password for an authenticator app.

```
curl -X POST -H "Content-Type: application/json" -d '{"key":"YOUR SECRET"}' localhost:3000/totp
```
