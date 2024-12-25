<?php
$host = "sql204.infinityfree.com";
$username = "if0_37978519";
$password = "QSvPJWsu8aPP";
$db = "if0_37978519_evler";

$conn = new mysqli($host, $username, $password, $db);

if ($conn->connect_error) {
    die("Bağlantı hatası: " . $conn->connect_error);
}
echo "Bağlantı başarılı!";

?>