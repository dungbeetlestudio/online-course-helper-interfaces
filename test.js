类型：HTTP POST FORM
输入：
<form action="/online-course-helper/putVerification" method="post" enctype="multipart/form-data">
<input type="file" name="image" size="50" />
<input type="submit" value="上传文件" />
</form>
输出：{
    err: null,    //错误描述
    ret: true     //成功返回true，否则false，并设置错误描述
}

类型：HTTP GET
输入：{}
输出：{
    err: null,    //错误描述
    //成功返回下载文件路径，否则false，并设置错误描述
    ret:'http://127.0.0.1:8000/verification/614332022-xfskyl6422.png'     
}


类型：HTTP GET
输入：{
    name:'614332022-xfskyl6422.png'
}
输出：{
    err: null,    //错误描述
    ret: true     //成功返回true，否则false，并设置错误描述
}