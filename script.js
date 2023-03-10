function toggleQR() {
	var qrCode = document.getElementById("qr-code");
	if (qrCode.style.display === "none") {
		qrCode.style.display = "block";
	} else {
		qrCode.style.display = "none";
	}
}
