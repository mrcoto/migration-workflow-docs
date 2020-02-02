# Installation

Requires PHP 7.2 or greater

```bash
composer require mrcoto/migration-workflow:1.4.1
```

Now, you need to publish service provider:

```bash
php artisan vendor:publish --provider="MrCoto\MigrationWorkflow\Application\LaravelMigrationWorkflowServiceProvider"
```

## Config File

The most important config value is ```workflows```, here you define the starting point folders where all your migration workflows will be looked for.

If you are using [Laravel Modules Package](https://github.com/nWidart/laravel-modules), you need to add ```Modules\<Module_Name>\MigrationWorkflows```.

```php
<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Migration Workflow Table Name
    |--------------------------------------------------------------------------
    |
    | All your deployed migrations run via migrate:deploy will be placed in this table
    |
    */
    'table_name' => 'migration_workflow',

    /*
    |--------------------------------------------------------------------------
    | Migration Workflow Detail Table Name
    |--------------------------------------------------------------------------
    |
    | All steps and files (detail of migration workflow header table) will be placed here
    |
    */
    'table_name_detail' => 'migration_workflow_detail',

    /*
    |--------------------------------------------------------------------------
    | Folders where workflows will be looked for
    |--------------------------------------------------------------------------
    |
    | You may specify namespace path from where your workflows are placed
    | Notice that migrate:deploy run your workflows in ascending order,
    | omitting already migrated
    |
    */
    'workflows' => [
        'App\MigrationWorkflows'
    ],

    /*
    |--------------------------------------------------------------------------
    | Logger Class
    |--------------------------------------------------------------------------
    |
    | Logger Class for logging
    |
    */
    'logger' => MrCoto\MigrationWorkflow\Logger\Handler\ConsoleMonologLogger::class,

];
```