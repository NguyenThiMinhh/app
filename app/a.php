<?php
 require 'DBConfig.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$sql1="SELECT count(ma_khoa) as sl_khoa FROM `khoa`";
	$data1=mysqli_query($conn, $sql1);
	// $sql2="SELECT ma_khoa, ten_khoa From Khoa";
	// $data2=mysqli_query($conn, $sql2);

	// $sql3="SELECT count(ma_nganh) as sl_nganh FROM `nganh`";
	// $data3=mysqli_query($conn, $sql3);
	// $sql4="SELECT ma_nganh, ten_nganh From nganh";
	// $data4=mysqli_query($conn, $sql4);

	// $sql5="SELECT count(ma_lop) as sl_lop FROM `lop`";
	// $data5=mysqli_query($conn, $sql5);
	// $sql6="SELECT ma_lop From lop";
	// $data6=mysqli_query($conn, $sql6);

	// $sql5="SELECT count(ma_sv) as sl_sv FROM `vs`";
	// $data5=mysqli_query($conn, $sql5);
	// $sql6="SELECT * From vs";
	// $data6=mysqli_query($conn, $sql6);
	
	class Thongke{
		function Thongke($sl_khoa){
			$this->sl_khoa=$sl_khoa;
		}
	}
	$mangtk=array();
	while ($row=mysqli_fetch_assoc($data1)) {

		array_push($mangtk, new Thongke($row['sl_khoa']));
	}
	echo json_encode($mangtk);
 
?>