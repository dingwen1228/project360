<?php
include "conn.php";
$sql = "select * from my360";
$result = $conn->query($sql);
$arr = array();
for ($i = 0; $i < $result->num_rows; $i++) {
    $arr[$i] = $result->fetch_assoc();
}
echo json_encode($arr);
