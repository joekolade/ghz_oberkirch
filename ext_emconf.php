<?php

/**
 * Extension Manager/Repository config file for ext "ghz_oberkirch".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'GHZ Oberkirch',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-8.7.99',
            'fluid_styled_content' => '8.7.0-8.7.99',
            'rte_ckeditor' => '8.7.0-8.7.99',
            'realurl' => '',
            'mask' => '',
            'dd_googlesitemap' => '',
            't3monitoring_client' => '',
            'cs_seo' => '',
            'sourceopt' => '',
            'scriptmerger' => '',
            // Sysextensions
            'opendocs' => '',
            'recycler' => '',
            'news' => ''
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
