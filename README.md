# Node layer architecture

Create a simple nodejs layer architecture project initial setup

# Install

```sh
git clone https://github.com/uzzal71/node-layer-architecture.git
cd node-layer-architecture
npm install
```

# Environment

Copy example.env file, rename .env & change all configuration variables

# Migrations

```sh
# create a migration file with terminal
npx migrate-mongo create create_category_table
# run the migration files
npx migrate-mongo up
```
