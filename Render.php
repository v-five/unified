<?php

class Render{

    public function __construct(){

    }

    public function header(){
        require_once "templates/header.html";
    }

    public  function footer(){
        require_once "templates/footer.html";
    }

    public  function form(){
        $this->header();
        require_once "templates/form.html";
        $this->footer();
    }

    public function preview(){

        $email = isset($_POST['email'])?$_POST['email']:'';
        $firstName = isset($_POST['firstName'])?$_POST['firstName']:'';
        $lastName = isset($_POST['lastName'])?$_POST['lastName']:'';
        $city = isset($_POST['city'])?$_POST['city']:'';
        $country = isset($_POST['country'])?$_POST['country']:'';
        $content = "
            Hello,<br><br>

            My name is " . $firstName . " " . $lastName . ".
            I am from " . $city . ", " . $country . ".<br><br>

            This is a test email.<br><br>

            Best wishes,<br>".
            $firstName . " " . $lastName .
        ".";

        $this->header();
        require_once "templates/preview.php";
        $this->footer();
    }

}