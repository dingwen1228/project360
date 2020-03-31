<?php
include "conn.php";

$sql1 = "select * from my360 where type='intime'";
$result1 = $conn->query($sql1);
$arr1 = array();
for ($i = 0; $i < $result1->num_rows; $i++) {
    $arr1[$i] = $result1->fetch_assoc();
}

$sql2 = "select * from my360 where type='netsafe'";
$result2 = $conn->query($sql2);
$arr2 = array();
for ($i = 0; $i < $result2->num_rows; $i++) {
    $arr2[$i] = $result2->fetch_assoc();
}

$sql3 = "select * from my360 where type='familysafe'";
$result3 = $conn->query($sql3);
$arr3 = array();
for ($i = 0; $i < $result3->num_rows; $i++) {
    $arr3[$i] = $result3->fetch_assoc();
}

$sql4 = "select * from my360 where type='walksafe'";
$result4 = $conn->query($sql4);
$arr4 = array();
for ($i = 0; $i < $result4->num_rows; $i++) {
    $arr4[$i] = $result4->fetch_assoc();
}

$sql5 = "select * from my360 where type='robots'";
$result5 = $conn->query($sql5);
$arr5 = array();
for ($i = 0; $i < $result5->num_rows; $i++) {
    $arr5[$i] = $result5->fetch_assoc();
}

$sql6 = "select * from my360 where type='childpro'";
$result6 = $conn->query($sql6);
$arr6 = array();
for ($i = 0; $i < $result6->num_rows; $i++) {
    $arr6[$i] = $result6->fetch_assoc();
}

$sql7 = "select * from my360 where type='video'";
$result7 = $conn->query($sql7);
$arr7 = array();
for ($i = 0; $i < $result7->num_rows; $i++) {
    $arr7[$i] = $result7->fetch_assoc();
}

$sql8 = "select * from my360 where type='community'";
$result8 = $conn->query($sql8);
$arr8 = array();
for ($i = 0; $i < $result8->num_rows; $i++) {
    $arr8[$i] = $result8->fetch_assoc();
}

$sql9 = "select * from my360 where type='more'";
$result9 = $conn->query($sql9);
$arr9 = array();
for ($i = 0; $i < $result9->num_rows; $i++) {
    $arr9[$i] = $result9->fetch_assoc();
}


//利用php的对象，将上面三个接口的值当做对象的属性值即可
class data
{
};

$d1 = new data(); //$d1:实例对象
$d1->data1 = $arr1; //将数组的值给对象的成员(属性)
$d1->data2 = $arr2; //将数组的值给对象的成员(属性)
$d1->data3 = $arr3; //将数组的值给对象的成员(属性)
$d1->data4 = $arr4;
$d1->data5 = $arr5;
$d1->data6 = $arr6;
$d1->data7 = $arr7;
$d1->data8 = $arr8;
$d1->data9 = $arr9;

echo json_encode($d1);
