<?php
	require 'DBConfig.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$ma_sv = $obj['ma_sv'];

	$sql="DELETE FROM vs WHERE ma_sv='$ma_sv'";
	
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