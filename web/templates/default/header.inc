<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <!-- $Id: header.inc,v 1.17 2006/06/06 19:00:47 runemaster Exp $ -->
<head>
<title>%%title%%</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

@@JS:if(http_request.virtual_path=="/nodelist.ssjs")'<meta http-equiv="refresh" content="30" />';@@
<link rel="stylesheet" href="@@Theme_CSS_File@@" type="text/css" />
</head>
<body>



<!--[if gte IE 5.5000]>
	<script src="/js/pngfix.js" type="text/javascript">
	</script>
<![endif]-->

@@name_logo@@

   <span id="Greeting"> 
        @@user_greeting@@
   </span>
   
   <table width="100%"  border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>
