<?php

include "conn.php";

if (isset($_POST['user']) && isset($_POST['password'])) {
    $user = $_POST['user'];
    $pass = sha1($_POST['password']); //加密和加密进行比较

    $result = $conn->query("select * from registry where username='$user' and password = '$pass' ");

    if ($result->fetch_assoc()) {
        echo true;  //登录成功
    } else {
        echo false;  //用户名或者密码错误
    }
}
