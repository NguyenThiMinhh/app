
<?php
	require 'DBConfig.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$ma_lop = $obj['ma_lop'];
	$query = "SELECT * FROM vs where ma_lop='$ma_lop'";
	 
	$data = mysqli_query($conn,$query);
	
	class SV{
		function SV($ma_sv, $ten_sv, $ngaysinh_sv,$ma_lop, $diachi_sv){
			$this->ma_sv=$ma_sv;
			$this->ten_sv=$ten_sv;
			$this->ngaysinh_sv=$ngaysinh_sv;
			$this->ma_lop=$ma_lop;
			$this->diachi_sv=$diachi_sv;
		}
	}
	$mangsv=array();
	while ($row=mysqli_fetch_assoc($data)) {
		array_push($mangsv, new SV($row['ma_sv'], $row['ten_sv'],$row['ngaysinh_sv'], $row['ma_lop'], $row['diachi_sv']));
	}
	echo json_encode($mangsv);
?>
