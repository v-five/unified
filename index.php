<?php



if(isset($_GET['action']))
	$action = $_GET['action'];
elseif(isset($_POST['action']))
	$action = $_POST['action'];
else
	$action = 'default';

include_once 'Render.php';
$render = new Render();

switch($action){
    case "preview":
        $render->preview();
        break;

    case "sendEmail":
        $email = $_POST['email'];
        $email['subject'] = "Test email";
        echo json_decode(mail($email['to'], $email['subject'], $email['content']));
        break;

    default:
        $render->form();
        break;
}