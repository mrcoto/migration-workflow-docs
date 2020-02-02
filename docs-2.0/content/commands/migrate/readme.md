# Migrate Command

This command executes a single migration workflow without checking if it's present in database.

```bash
php artisan migrate:workflow {--class=}
```

Options and arguments:
- **--class**: Full class name of the migration workflow file (namespace and class name).

::: tip
Each migration workflow has it's own **transaction**, so if a migration workflow fails (some migration file or seed throws an exception), then all migration workflow changes are rollbacked.
:::

## Basic Example

```bash
php artisan migrate:workflow --class=App\\MigrationWorkflows\\MyWorkflow_develop_2020_02_01_205630
```

::: tip
If you are using Windows, then use a simple backslash.
:::