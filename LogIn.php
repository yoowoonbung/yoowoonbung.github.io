<?php
/**
 * Created by PhpStorm.
 * User: YooWoonBung
 * Date: 2019/5/8
 * Time: 21:30
 */
header("content-type:text/html;charset=utf-8");
openSQL();
function openSQL()
{
    $sql = mysqli_connect("localhost", "root", "root", "kaola", "3306");
    if (mysqli_connect_errno()) return;
    $res = mysqli_query($sql, "SELECT * FROM `user` WHERE user='{$_REQUEST['users']}' AND password='{$_REQUEST['pass']}'");
    if ($res->num_rows == 0) {
        echo "<script>history.back();alert('用户名或者密码错误')history.back()</script>";
        return;
    }else{
        echo "登录成功";
    }
}
//    $res = mysqli_query($sql, "SELECT * FROM `user` WHERE 1");
//}
