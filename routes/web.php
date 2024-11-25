<?php
$request = $_SERVER['REQUEST_URI'];

// Remove the project folder from the request URI (assuming your project is 'csbridge')
$request = str_replace('/csbridge', '', $request);

switch ($request) {
    case '':
    case '/':
    case '/home':
    case '/index.php':
        include 'pages/home.php';
        break;
    case '/about':
        include 'pages/about.php';
        break;
    case '/registration':
        include 'pages/IdentificationPages/registration.php';
        break;
    default:
        include 'pages/error.php'; // 404 error page
        break;
    case '/job/description':
        include 'pages/JobBoardPages/jobDesc.php';
        break;
}
