# Module Make Command

If you are using [Laravel Modules Package](https://github.com/nWidart/laravel-modules), then you can use this command.

Remember to add `Modules` as folder in `workflows` value in `migration_workflow` config.

This command will create a Migration Workflow file in ```Modules/<Module>/MigrationWorkflows``` folder.

```bash
php artisan module:make-workflow {module} {className} {version=v1}
```

Options and Arguments:
- **module**: The name of your module.
- **className**: Name of your migration workflow.
- **version**: Version of your new migration workflow

## Basic Example

```bash
php artisan module:make-workflow Sale MyWorkflow develop
```

Generates:

```bash
Modules\Sale\MigrationWorkflows\MyWorkflow_develop_2020_02_01_205440
```

## Custom Folder

```bash
php artisan module:make-workflow Sale MyFolder/MyWorkflow develop
```

Generates:

```bash
Modules\Sale\MigrationWorkflows\MyFolder\MyWorkflow_develop_2020_02_01_205440
```