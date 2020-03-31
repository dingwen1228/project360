<?php
header('content-type:text/html;charset=utf-8');

define('HOST', 'localhost'); //主机名
define('USERNAME', 'root'); //用户名
define('PASSWORD', '12345678');
define('DBNAME', '360shop'); //数据库的名称
$conn = @new mysqli(HOST, USERNAME, PASSWORD, DBNAME);
mysqli_query($conn, "SET NAMES UTF8");
if ($conn->connect_error) {
    die('数据库连接错误，请检查用户名和密码！' . $conn->connect_error);
}
