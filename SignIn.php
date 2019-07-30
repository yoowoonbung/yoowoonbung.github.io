<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/4/15 0015
 * Time: 下午 17:47
 */
header("content-type:text/html;charset=utf-8");
openSQL();
function openSQL(){
    $sql=mysqli_connect("localhost","root","root","kaola","3306");
    if(mysqli_connect_errno())return;
    $ok=mysqli_query($sql,"INSERT INTO `user`(`user`, `password`) VALUES ('{$_REQUEST['users']}','{$_REQUEST['pass']}')");
    if($ok){
        echo "添加成功";
    }else{
        echo "<script>alert('注册失败,请重新注册');history.back()</script>";
    }
}
