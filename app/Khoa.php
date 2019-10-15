<?php
include 'DBConfig.php';
	if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
	} 
// $sql = "SELECT khoa.ten_khoa FROM khoa, nganh where khoa.ma_khoa=nganh.ma_khoa";
	$sql = "SELECT * FROM khoa";
	$result = $conn->query($sql);
	if ($result->num_rows >0) {
		while($row[] = $result->fetch_assoc()) {
		$tem = $row;
		$json = json_encode($tem);
		}
	} else {
		 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>