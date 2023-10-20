function submitForm() {
    // Ambil nilai inputan
    var jenis = document.getElementById("jenis").value;
    var jenis = document.getElementById("jenis").value;
    var jenis = document.getElementById("jenis").value;

    // Kirim data ke server
    // Ganti URL dengan URL server Anda
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5501/InputSampah.html");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ jenis: jenis, jenis: jenis }));

    // Tampilkan pesan sukses
    alert("Data berhasil dikirim!");
}

function addForm() {
    // Buat elemen form baru
    var form = document.createElement("card-group");
    form.classList.add("card-group");

    var jenisLabel = document.createElement("jenis");
    jenisLabel.textContent = "jenis sampah :";
    var jenisInput = document.createElement("input");
    jenisInput.type = "text";
    jenisInput.name = "jenis";
    var jenisGroup = document.createElement("card-group");
    jenisGroup.classList.add("card-group");
    jenisGroup.appendChild(jenisLabel);
    jenisGroup.appendChild(jenisInput);

    // Buat elemen input berat sampah
    var beratLabel = document.createElement("jenis");
    beratLabel.textContent = "Jenis Sampah:";
    var beratInput = document.createElement("input");
    beratInput.type = "text";
    beratInput.name = "jenis";
    var beratGroup = document.createElement("card-group");
    beratGroup.classList.add("card-group");
    beratGroup.appendChild(beratLabel);
    beratGroup.appendChild(beratInput);

    // Buat elemen input berat sampah
    var hargaLabel = document.createElement("jenis");
    hargaLabel.textContent = "Jenis Sampah:";
    var hargaInput = document.createElement("input");
    hargaInput.type = "text";
    hargaInput.name = "jenis";
    var hargaGroup = document.createElement("card-group");
    hargaGroup.classList.add("card-group");
    hargaGroup.appendChild(hargaLabel);
    hargaGroup.appendChild(hargaInput);

    // Buat tombol hapus form
    var hapusButton = document.createElement("button");
    hapusButton.type = "button";
    hapusButton.textContent = "Hapus";
    hapusButton.onclick = function () {
        form.remove();
    };

    // Tambahkan elemen ke form
    form.appendChild(jenisGroup);
    form.appendChild(beratGroup);
    form.appendChild(hargaGroup);
    form.appendChild(hapusButton);

    // Tambahkan form ke halaman
    var container = document.querySelector(".card-group");
    container.insertBefore(form, container.lastChild);
}

const addFormBtn = document.getElementById('tomb');

const formComponent = `
    <form id="form-${Math.random()}">
        <div class="input-group mb-3">
            <label for="jenis">jenis sampah :</label>
            <input type="text" name="jenis-${Math.random()}" id="jenis-${Math.random()}" />
        </div>
        <div class="input-group mb-3">
            <label for="jenis">jenis sampah :</label>
            <input type="text" name="jenis-${Math.random()}" id="jenis-${Math.random()}" />
        </div>
        <div class="input-group mb-3">
            <label for="jenis">jenis sampah :</label>
            <input type="text" name="jenis-${Math.random()}" id="jenis-${Math.random()}" />
            <button type="button" id="tomb-${Math.random()}">+</button>
        </div>
    </form>
`

addFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const cardGroup = document.getElementById('groupCard');
    console.log('click')

    // cardGroup.innerHTML += formComponent
    cardGroup.insertAdjacentHTML('beforeend', formComponent)
})
