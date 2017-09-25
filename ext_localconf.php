<?php
defined('TYPO3_MODE') || die();

/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['ghz_oberkirch'] = 'EXT:ghz_oberkirch/Configuration/RTE/Default.yaml';

# in ext_localconf.php

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:ghz_oberkirch/Configuration/UserTS/user.ts">'
);
