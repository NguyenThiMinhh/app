<?php
 require 'DBConfig.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$sql1="SELECT count(ma_khoa) as sl_khoa FROM `khoa`";
	$data1=mysqli_query($conn, $sql1);
	$sql2="SELECT ma_khoa, ten_khoa From Khoa";
	$data2=mysqli_query($conn, $sql2);

	$sql3="SELECT count(ma_nganh) as sl_nganh FROM `nganh`";
	$data3=mysqli_query($conn, $sql3);
	$sql4="SELECT ma_nganh, ten_nganh From nganh";
	$data4=mysqli_query($conn, $sql4);

	$sql5="SELECT count(ma_lop) as sl_lop FROM `lop`";
	$data5=mysqli_query($conn, $sql5);
	$sql6="SELECT ma_lop From lop";
	$data6=mysqli_query($conn, $sql6);

	$sql7="SELECT count(ma_sv) as sl_sv FROM `vs`";
	$data7=mysqli_query($conn, $sql7);
	
	class Thongke{
		function Thongke($sl_khoa, $sl_nganh, $sl_lop, $sl_sv, $ma_khoa, $ten_khoa, $ma_nganh, $ten_nganh, $ma_lop){
			$this->sl_khoa=$sl_khoa;
			$this->sl_nganh=$sl_nganh;
			$this->sl_lop=$sl_lop;
			$this->sl_sv=$sl_sv;
			$this->ma_khoa=$ma_khoa;
			$this->ten_khoa=$ten_khoa;
			$this->ma_nganh=$ma_nganh;
			$this->ten_nganh=$ten_nganh;
			$this->ma_lop=$ma_lop;
		}
	}
	$mangtk=array();
	while ($row1=mysqli_fetch_assoc($data1)) {
		while ($row2=mysqli_fetch_assoc($data2)) {
			while ($row3=mysqli_fetch_assoc($data3)) {
				while ($row4=mysqli_fetch_assoc($data4)) {
					while ($row5=mysqli_fetch_assoc($data5)) {
						while ($row6=mysqli_fetch_assoc($data6)) {
							while ($row7=mysqli_fetch_assoc($data7)) {

		array_push($mangtk, new Thongke($row1['sl_khoa'], $row3['sl_nganh'],$row5['sl_lop'], $row7['sl_sv'],$row2['ma_khoa'], $row2['ten_khoa'],$row4['ma_nganh'], $row4['ten_nganh'],$row6['ma_lop']));
	}
}
}
}
}
}
}
	echo json_encode($mangtk);
 
?>