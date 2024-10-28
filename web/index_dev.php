<?php
/*************************************************************************************/
/*      This file is part of the Thelia package.                                     */
/*                                                                                   */
/*      Copyright (c) OpenStudio                                                     */
/*      email : dev@thelia.net                                                       */
/*      web : http://www.thelia.net                                                  */
/*                                                                                   */
/*      For the full copyright and license information, please view the LICENSE.txt  */
/*      file that was distributed with this source code.                             */
/*************************************************************************************/

use Thelia\Core\HttpFoundation\Request;
use Symfony\Component\Dotenv\Dotenv;
use Symfony\Component\ErrorHandler\Debug;

$env = 'dev';
require __DIR__ . '/../bootstrap.php';


$_SERVER['APP_ENV'] = 'dev';
$_SERVER['APP_DEBUG'] = '1';

(new Dotenv())->loadEnv(dirname(__DIR__).'/.env');

$trustedIp = array_filter(
    explode(',', $_SERVER['DEBUG_TRUSTED_IP'] ?? ''),
    static function ($ip): bool {
        return filter_var($ip, \FILTER_VALIDATE_IP);
    }
);

if (false === in_array(Request::createFromGlobals()->getClientIp(), $trustedIp)) {
    header('HTTP/1.0 403 Forbidden');
    exit('You are not allowed to access this file.');
}

umask(0000);
Debug::enable();

$thelia = new App\Kernel($_SERVER['APP_ENV'], (bool) $_SERVER['APP_DEBUG']);
$request = Request::createFromGlobals();
$response = $thelia->handle($request);
$response->send();
$thelia->terminate($request, $response);
