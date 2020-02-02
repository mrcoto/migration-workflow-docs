# Quickstart

## Assumptions:

Your database conection it's already setup.

## Create a Migration Workflow File

```bash
php artisan make:migration create_dummy_table
```

## Make a Migration Workflow

```bash
php artisan make:workflow MyWorkflow develop
```

This command generates ```App\MigrationWorkflows\MyWorkflow_develop_2020_02_01_203910.php``` file

```php
<?php 

namespace App\MigrationWorkflows;

use MrCoto\MigrationWorkflow\Core\MigrationWorkflow;
use MrCoto\MigrationWorkflow\Core\ValueObject\MigrationWorkflowCollection;
use MrCoto\MigrationWorkflow\Core\MigrationWorkflowContract;

class MyWorkflow_develop_2020_02_01_203910 implements MigrationWorkflowContract
{
    /**
     * Return migration workflow,
     * each element in the array is a workflow's step.
     *
     * @return MigrationWorkflowCollection
     */
    public function getWorkFlow(): MigrationWorkflowCollection
    {
        return MigrationWorkflow::workflow(
            array(
                MigrationWorkflow::step('migration', [
                    'database/migrations/2019_10_19_120000_create_dummy_table',
                ]),
            )
        );
    }

}
```

## Deploy your Migration Workflows

```bash
php artisan migrate:deploy
```

::: tip
If you run this command again, the migration workflow should be skipped.
:::

## Verify

You should see three tables in database:
- ```migration_workflow```: Executed migration workflows are stored here.
- ```migration_workflow_detail```: Each step of your migration workflow is stored here.
- ```dummy```: Your recently created dummy table.