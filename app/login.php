
<?php
	include 'DBConfig.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$email_user = $obj['email_user'];
	$pass_user = $obj['pass_user'];

	$Sql_Query = "SELECT * FROM user WHERE email_user = '$email_user' and pass_user = '$pass_user' ";
	 
	$check = mysqli_fetch_array(mysqli_query($conn,$Sql_Query));
	 
	if(isset($check)){ 
		$SuccessLoginMsg = 'success';
		$SuccessLoginJson = json_encode($SuccessLoginMsg);
		echo $SuccessLoginJson ;
	}
	 
	else{
		$InvalidMSG = 'Thông tin đăng nhập chưa chính xác. Vui lòng nhập lại!' ;
		$InvalidMSGJSon = json_encode($InvalidMSG);
	 	echo $InvalidMSGJSon ; 
	}
	mysqli_close($conn);
?>