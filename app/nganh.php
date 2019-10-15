
<?php
	require 'DBConfig.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$ma_khoa = $obj['ma_khoa'];
	$query = "SELECT * FROM nganh where ma_khoa='$ma_khoa'";
	 
	$data = mysqli_query($conn,$query);
	
	class Nganh{
		function Nganh($id_nganh,$ma_nganh, $ten_nganh, $ma_khoa){
			$this->id_nganh=$id_nganh;
			$this->ma_nganh=$ma_nganh;
			$this->ten_nganh=$ten_nganh;
			$this->ma_khoa=$ma_khoa;
		}
	}
	$mangnganh=array();
	while ($row=mysqli_fetch_assoc($data)) {
		array_push($mangnganh, new Nganh($row['id_nganh'], $row['ma_nganh'], $row['ten_nganh'], $row['ma_khoa']));
	}
	echo json_encode($mangnganh);
?>
