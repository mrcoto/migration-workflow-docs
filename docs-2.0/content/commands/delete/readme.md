# Delete Command

Delete last migration workflow from database and/or from filesystem that match input.

```bash
php artisan delete:workflow {className} {version=v1} {--file}
```

Options and arguments:
- **className**: Name of your migration workflow.
- **version**: Version of your migration workflow
- **--file**: Should the file be removed?

## Basic Example

```bash
php artisan delete:workflow MyWorkflow develop
```

This command should look for last workflow that match **MyWorkflow** name and **develop** version, then remove it from database.

## Removing File

```bash
php artisan delete:workflow MyWorkflow develop --file
```

This command should look for last workflow that match **MyWorkflow** name and **develop** version, then remove it from database and filesystem.

