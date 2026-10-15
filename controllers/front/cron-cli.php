<?php
/**
 * Advanced Pack 5
 *
 * @author    Presta-Module.com <support@presta-module.com> - https://www.presta-module.com
 * @copyright Presta-Module - https://www.presta-module.com
 * @license   Commercial
 *
 *           ____     __  __
 *          |  _ \   |  \/  |
 *          | |_) |  | |\/| |
 *          |  __/   | |  | |
 *          |_|      |_|  |_|
 */

// PHP Cli only
if (php_sapi_name() != 'cli') {
    header('HTTP/1.0 403 Forbidden', true, 403);
    die;
}
include(dirname(__FILE__).'/../../../../config/config.inc.php');
$module = Module::getInstanceByName('pm_advancedpack');
die(json_encode($module->runCron(), JSON_PRETTY_PRINT));
