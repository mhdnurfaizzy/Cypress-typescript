# Code Review Login.ts #

* **Test Login:**
  Pengujian ini bertujuan untuk melakukan login dengan data pengguna yang valid. Setelah login, dilakukan pengecekan apakah login berhasil dengan memanggil fungsi assertLogin().
* **Test Sauce Demo Invalid Password:**
  Pengujian ini bertujuan untuk mencoba login dengan password yang tidak valid. Setelah login gagal, dilakukan pengecekan apakah login gagal dengan memanggil fungsi assertLoginFail().
* **Test Sauce Demo Sauce labs product backpack:**
  Pengujian ini bertujuan untuk memilih produk "sauce labs product backpack" setelah berhasil login. Setelah memilih produk, pengujian akan selesai.

Dalam pengujian ini, terdapat penggunaan halaman login (LoginPage), dan halaman dashboard (DashboardPage) yang mungkin mengandung logika dan aksi terkait dengan masing-masing halaman tersebut.
