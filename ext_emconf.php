<?php

/**
 * Extension Manager/Repository config file for ext "ghz_oberkirch".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'GHZ Oberkirch',
    'description' => '',
    'category' => 'distribution',
    'constraints' => [
        'depends' => [
            'typo3' => '',
            'fluid_styled_content' => '',
            'rte_ckeditor' => '',
            // Sysextensions
            'opendocs' => '',
            'recycler' => ''
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Js\\GhzOberkirch\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Joe Schäfer',
    'author_email' => 'mail@schaefer-webentwicklung.de',
    'author_company' => 'Schäfer - Büro für Webentwicklung',
    'version' => '1.0.0',
];
