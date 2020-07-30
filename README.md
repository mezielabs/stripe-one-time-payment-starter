# Accepting Payment With Stripe: One-time Payment Starter Files

## Getting started

Clone the project repository by running the command below:

```bash
# using SSH
git clone git@github.com:mezielabs/stripe-one-time-payment-starter.git
# using HTTPS
git clone https://github.com/mezielabs/stripe-one-time-payment-starter.git
```

After cloning, run:

```bash
npm install
```

Duplicate `.env.example`:

```bash
cp env.example .env
```

Build the application:

```bash
node ace build
```

Generate `APP_KEY`:

```bash
node ace generate:key
```

> This will output a random string, which you will need to add inside `.env`.

Update environment variables:

```txt
// .env

APP_KEY=YOUR_GENERATED_KEY_COPIED_FROM_ABOVE
DB_CONNECTION=mysql
DB_HOST=localhost
DB_NAME=stripe-payment
DB_USER=YOUR_DATABASE_USERNAME
DB_PASSWORD=YOUR_DATABASE_PASSWORD
```

> Remember to update `YOUR_DATABASE_USERNAME` and `YOUR_DATABASE_PASSWORD` with your database details.

Rebuild the application:

```bash
node ace build
```

Run the migrations:

```bash
node ace migration:run
```

Run the database seeder:

```bash
node ace db:seed
```

Finally, start the application:

```bash
node ace serve
```

and visit [http://127.0.0.1:3333](http://127.0.0.1:3333) to see the application in action.

## Learn AdonisJS

Want to learn how to build projects like this with AdonisJS? Checkout [Adonis Mastery](https://adonismastery.com), where you get to learn AdonisJS through practical screencasts.
