<div class="container">

    <div class="col-sm-6 col-sm-offset-3 jumbotronv" style="background-color: #EEEEEE;">

        <h3><span class="fa fa-sign-in"></span> Email Preview</h3><br>

        <!-- show any messages that come back with authentication -->

        <div class="panel panel-info">
            <div class="panel-body">
                <span><b>Email Address: </b></span>
                <p style="padding-left:20px" id="emailAddress"><i><?php echo $email; ?></i></p>
                <span><b>Email Content: </b></span>
                <p style="padding-left:20px" id="emailContent"><i><?php echo $content; ?></i></p>
            </div>
        </div>

        <a href="javascript:history.back()" class="btn btn-warning">Back</a>
        <a href="?" class="btn btn-warning pull-right" id="sendEmail">Send email</a>

    </div>
</div>