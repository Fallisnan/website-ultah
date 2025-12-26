document.getElementById("klaimForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;

    // 🔹 SATU-SATUNYA LINK GOOGLE FORM
    const gformLink =
        "https://docs.google.com/forms/d/e/1FAIpQLSdSDzIOG2PXv9kanMOGUTTau9Eb94FhVUTVcIKTrcGMz5ATuA/viewform?usp=pp_url&entry.1221850814=vanesa&entry.238599516=sindang"
        + "entry.1221850814=" + encodeURIComponent(nama)
        + "&entry.238599516=" + encodeURIComponent(alamat);

    // 🔹 REDIRECT KE GOOGLE FORM
    window.location.href = gformLink;
});
