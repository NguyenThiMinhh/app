
<?php
	include 'DBConfig.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$ten_sv=$obj['ten_sv'];
	$ma_sv = $obj['ma_sv'];
	$ngaysinh_sv = $obj['ngaysinh_sv'];
	$diachi_sv=$obj['diachi_sv'];
	$ma_lop=$obj['ma_lop'];
		$kq="SELECT * FROM vs WHERE ma_sv = '$ma_sv'";
		$kd=mysqli_query($conn, $kq);
		if(mysqli_fetch_row($kd)>0){
			$ht='Mã sinh viên đã tồn tại';
			$htjson=json_encode($ht);
			echo $htjson;
		}else{
			$sql="INSERT INTO vs(ma_sv,ten_sv, ngaysinh_sv,ma_lop, diachi_sv) VALUES('$ma_sv','$ten_sv','$ngaysinh_sv','$ma_lop', '$diachi_sv')";
			mysqli_query($conn,$sql);
			$regis='success';
			$regisJson=json_encode($regis);
			echo $regisJson;
	}
?>