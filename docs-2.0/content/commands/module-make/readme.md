# Module Make Command

If you are using [Laravel Modules Package](https://github.com/nWidart/laravel-modules), then you can use this command.

Remember to add `Modules` as folder in `workflows` value in `migration_workflow` config.

This command will create a Migration Workflow file in ```Modules/<Module>/MigrationWorkflows``` folder.

```bash
php artisan module:make-workflow {module} {className} {versions=v1} {--owndir} {--date}
```

Options and Arguments:
- **module**: The name of your module.
- **className**: Name of your migration workflow.
- **versions**: Versions of your new migration workflow
- **--owndir**: Should migration workflow must be placed in it's own version folder?
- **--date**: Should migration workflow must be placed in YYYY/MM/DD folder?

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

## Multiple Versions

```bash
php artisan module:make-workflow Sale MyWorkflow develop,production
```

Generates:

```bash
Modules\Sale\MigrationWorkflows\MyWorkflow_develop_2020_02_01_205440
Modules\Sale\MigrationWorkflows\MyWorkflow_production_2020_02_01_205440
```

## Owndir option

```bash
php artisan module:make-workflow Sale MyWorkflow develop,production --owndir
```

Generates:

```bash
Modules\Sale\MigrationWorkflows\Develop\MyWorkflow_develop_2020_02_01_205440
Modules\Sale\MigrationWorkflows\Production\MyWorkflow_production_2020_02_01_205440
```

## Date option

```bash
php artisan module:make-workflow Sale MyWorkflow develop,production --date
```

Generates:

```bash
Modules\Sale\MigrationWorkflows\Y2020\M02\D01\MyWorkflow_develop_2020_02_01_205440
Modules\Sale\MigrationWorkflows\Y2020\M02\D01\MyWorkflow_production_2020_02_01_205440
```

## Owndir and Date option

```bash
php artisan module:make-workflow Sale MyWorkflow develop,production --owndir --date
```

Generates:

```bash
Modules\Sale\MigrationWorkflows\Develop\Y2020\M02\D01\MyWorkflow_develop_2020_02_01_205440
Modules\Sale\MigrationWorkflows\Production\Y2020\M02\D01\MyWorkflow_production_2020_02_01_205440
```