# Cryptoport frontend system

The Cryptoport frond system is an application that operates on the web interface of the Cryptoport application. This document offers insights into its features and project setup. Below are the specifics.

## 1. Feature 
    (1) User Registration: Before using the application, new users need to register by providing their first name, last name, email address, and password.
    (2) Sign In: Identification and authentication of users require them to sign in before they can use the application.
    (3) Portfolio: Display the list of coins held by the user in their portfolio, sorted from highest to lowest value. Each coin's description includes its logo, name, price in BTC, and profit or loss in the last 24 hours.

## 2. Responsive
- The system is designed to display properly on devices of various screen sizes.

## 3. Project setup
- Create .env file and add variable which consist of 
```bash
$ NEXT_PUBLIC_API_URL
```
## 4. Project Run
```bash
$ docker-compose up --build
```