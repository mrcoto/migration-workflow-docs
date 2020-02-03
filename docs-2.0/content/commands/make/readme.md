# Make Command

This command will create a Migration Workflow file in ```app/MigrationWorkflows``` folder.

```bash
php artisan make:workflow {className} {versions=v1} {--owndir} {--date}
```

Options and Arguments:
- **className**: Name of your migration workflow.
- **versions**: Versions of your new migration workflow
- **--owndir**: Should migration workflow must be placed in it's own version folder?
- **--date**: Should migration workflow must be placed in YYYY/MM/DD folder?

## Basic Example

```bash
php artisan make:workflow MyWorkflow develop
```

Generates:

```bash
App\MigrationWorkflows\MyWorkflow_develop_2020_02_01_205440
```

## Custom Folder

```bash
php artisan make:workflow MyFolder/MyWorkflow develop
```

Generates:

```bash
App\MigrationWorkflows\MyFolder\MyWorkflow_develop_2020_02_01_205440
```

## Multiple Versions

```bash
php artisan make:workflow MyWorkflow develop,production
```

Generates:

```bash
App\MigrationWorkflows\MyWorkflow_develop_2020_02_01_205440
App\MigrationWorkflows\MyWorkflow_production_2020_02_01_205440
```

## Owndir option

```bash
php artisan make:workflow MyWorkflow develop,production --owndir
```

Generates:

```bash
App\MigrationWorkflows\Develop\MyWorkflow_develop_2020_02_01_205440
App\MigrationWorkflows\Production\MyWorkflow_production_2020_02_01_205440
```

## Date option

```bash
php artisan make:workflow MyWorkflow develop,production --date
```

Generates:

```bash
App\MigrationWorkflows\Y2020\M02\D01\MyWorkflow_develop_2020_02_01_205440
App\MigrationWorkflows\Y2020\M02\D01\MyWorkflow_production_2020_02_01_205440
```

## Owndir and Date option

```bash
php artisan make:workflow MyWorkflow develop,production --owndir --date
```

Generates:

```bash
App\MigrationWorkflows\Develop\Y2020\M02\D01\MyWorkflow_develop_2020_02_01_205440
App\MigrationWorkflows\Production\Y2020\M02\D01\MyWorkflow_production_2020_02_01_205440
```
