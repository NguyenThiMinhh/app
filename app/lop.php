
<?php
	require 'DBConfig.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$ma_nganh = $obj['ma_nganh'];
	$query = "SELECT * FROM lop where ma_nganh='$ma_nganh'";
	 
	$data = mysqli_query($conn,$query);
	
	class Lop{
		function Lop($id_lop,$ma_lop, $ma_nganh){
			$this->id_lop=$id_lop;
			$this->ma_lop=$ma_lop;
			$this->ma_nganh=$ma_nganh;
		}
	}
	$manglop=array();
	while ($row=mysqli_fetch_assoc($data)) {
		array_push($manglop, new Lop($row['id_lop'], $row['ma_lop'], $row['ma_nganh']));
	}
	echo json_encode($manglop);
?>
