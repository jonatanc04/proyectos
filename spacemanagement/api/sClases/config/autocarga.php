<?php
spl_autoload_register(function ($clase) {
    include "./classes/$clase.php";
});