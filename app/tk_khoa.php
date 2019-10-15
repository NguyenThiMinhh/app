<?php
 require 'DBConfig.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$sql1="SELECT count(ma_khoa) as sl_khoa FROM `khoa`";
	$data1=mysqli_query($conn, $sql1);
	$sql2="SELECT ma_khoa, ten_khoa From Khoa";
	$data2=mysqli_query($conn, $sql2);
	
	class Thongke{
		function Thongke($sl_khoa,$ma_khoa, $ten_khoa){
			$this->sl_khoa=$sl_khoa;
			$this->ma_khoa=$ma_khoa;
			$this->ten_khoa=$ten_khoa;
		}
	}
	$mangtk=array();
	while ($row1=mysqli_fetch_assoc($data1)) {
		while ($row2=mysqli_fetch_assoc($data2)) {
		array_push($mangtk, new Thongke($row1['sl_khoa'],$row2['ma_khoa'], $row2['ten_khoa']));
	}
}
	echo json_encode($mangtk);
 
?>