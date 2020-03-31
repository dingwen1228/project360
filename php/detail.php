<?php
include "conn.php";
if (isset($_GET['sid'])) {
    $sid = $_GET['sid']; //接收前端传入的sid
    $sql = "select * from 360list where sid= $sid";
    $result = $conn->query($sql);

    echo json_encode($result->fetch_assoc());
}
