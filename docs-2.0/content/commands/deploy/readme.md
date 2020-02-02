# Deploy Command

This command deploy your migration workflows (same way as migrations in Laravel).

```bash
php artisan migrate:deploy {--versions=}
```

Options and arguments:
- **--versions**: List of versions to be deployed.

Remember that a migration workflow class name look like this: `MyWorkflow_develop_2020_02_01_205639`
Simple algorithm:
- User input versions to be deployed (Ex: develop)
- Command should look for all **develop** migration workflow files.
- Sort found migration workflows in ascending order.
- For each migration workflow, if it not in database, execute all it's step, and then save it into database.

::: tip
Each migration workflow has it's own **transaction**, so if a migration workflow fails (some migration file or seed throws an exception), then, deploy stops and all failed migration workflow  changes are rollbacked.
:::

## All Versions Deploy

```bash
php artisan migrate:deploy
```

Deploy all migration workflows in ascending order.

## Single Version Deploy

```bash
php artisan migrate:deploy --versions=develop
```

Deploy **develop** migration workflows in ascending order.

## Multiple Version Deploy

```bash
php artisan migrate:deploy --versions=develop,production
```

Deploy **develop** and **production** migration workflows in ascending order.
