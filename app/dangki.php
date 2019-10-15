
<?php
	include 'DBConfig.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$ten_user=$obj['ten_user'];
	$email_user = $obj['email_user'];
	$pass_user = $obj['pass_user'];
		$kq="SELECT * FROM user WHERE email_user = '$email_user'";
		$kd=mysqli_query($conn, $kq);
		if(mysqli_fetch_row($kd)>0){
			$ht='Email đã tồn tại';
			$htjson=json_encode($ht);
			echo $htjson;
		}else{
			$sql="INSERT INTO user(id, ten_user,email_user, pass_user) VALUES(null, '$ten_user','$email_user','$pass_user')";
			mysqli_query($conn,$sql);
			$regis='success';
			$regisJson=json_encode($regis);
			echo $regisJson;
	}
?>