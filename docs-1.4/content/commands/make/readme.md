# Make Command

This command will create a Migration Workflow file in ```app/MigrationWorkflows``` folder.

```bash
php artisan make:workflow {className} {version=v1}
```

Options and Arguments:
- **className**: Name of your migration workflow.
- **version**: Version of your new migration workflow

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