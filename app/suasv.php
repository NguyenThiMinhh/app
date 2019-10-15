<?php
	require 'DBConfig.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$ma_sv=$obj['ma_sv'];
	$ten_sv=$obj['ten_sv'];
	$ngaysinh_sv=$obj['ngaysinh_sv'];
	$ma_lop=$obj['ma_lop'];
	$diachi_sv=$obj['diachi_sv'];

	// $ma_sv='sv5';
	// $ten_sv='ahihi';
	// $ngaysinh_sv='1997/12/07';
	// $ma_lop='CNTT-K14a';
	// $diachi_sv='Hà Nội';
	$sql="UPDATE vs SET ma_sv='$ma_sv',ten_sv='$ten_sv', ngaysinh_sv='$ngaysinh_sv', ma_lop='$ma_lop', diachi_sv='$diachi_sv' where ma_sv='$ma_sv'";
	
	if(mysqli_query($conn,$sql)){
		$t='success';
		$tt=json_encode($t);
		echo $tt;
	}else{
		$f='error';
		$ff=json_encode($f);
		echo $ff;
	}

?>