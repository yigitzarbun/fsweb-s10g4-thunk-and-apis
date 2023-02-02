# Modül Projesi: Async Redux

Bu proje, `redux thunk` ve `asenkron bir action creator` ile bir API'dan veri alacağınız, `redux`, `localStorage` ve `react-toastify` hakkındaki bilgilerinizi birleştireceğiniz bir projedir.

## Giriş

Daha önceki günlerde redux store'u oluşturmayı, middleware kavramını, useSelector ve useDispatch ile çalışmayı öğrendiniz. Bugün asenkron bir action creator yazabilmek için redux-thunk'ı middleware olarak kullanacak, oluşturduğunuz datanın bir kısmını da localStorage içerisinde saklayacaksınız.

**_Görevlerinizi tek tek tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun._**

## Talimatlar

### Görev 1: Proje Kurulumu

- [x] Forklayın.
- [x] Klonlayın
- [x] Ana dizine gidin
- [x] `npm install`
- [x] `npm start`

### Görev 2: Proje Gereksinimleri

Bu projede kullanmak için öncelikle bir API seçmelisiniz. [Bu adresten](https://apipheny.io/free-api/) ücretsiz API'ları inceleyebilir, projede kullanmak istediğiniz API'ı seçebilirsiniz. \*_Cat Facts, Bored, Dogs ve Jokes API_'ları bu proje için uygundur; yine de beğendiğiniz başka bir API'ı da kullanabilirsiniz. Kullanacağınız bazı `action`lar, `index.js` içerisindeki `store` ve `reducers.js` içerisindeki `initialState` sizin için oluşturuldu. Sizden eksik actionları ve reducerı tamamlamanız, yazacağınız async action creator'ı, redux-thunk ile kullanmanız, favorileri `localStorage` içerisine eklemeniz ve oradan kullanmanız bekleniyor.

- DONE: Sayfa ilk açıldığında, API'dan yeni bir öge istenmeli
- DONE: "Başka bir tane" butonuna basıldığında, API'dan yeni bir öge istenmeli
- DONE: Öge yüklenme aşamasındayken "yükleniyor" ibaresi görüntülenmeli
- DONE: "Favorilere ekle" ve "çıkar" butonunlarına basıldığında, store içerisindeki ilgili kısım güncellenmeli
- DONE: "Favoriler" kısmında daha önce favorilere eklenmiş ögeler görüntülenmeli
- "Favoriler" localStorage içerisinde tutulmalı ve uygulama ilk açıldığında localStorage içerisinde bu amaçla saklanmış veri varsa kontrol edilmeli ve kullanılmalı.

* [x] Projeyi inceleyin ve componentların birbiriyle ilişkisini anlayın.

* [x] Kullanmak için bir API seçin. Burada fazla vakit kaybetmeyin, hoşunuza giden biri ile başlayın.

* [x] `redux` ve `react-redux` paketleri sizin için eklendi. Siz de `redux-thunk` paketini kurun ve store oluşturma aşamasında ilgili yerde kullanın.

* [x] Projeye `axios` paketini ekleyin.

* [x] `actions.js` içerisindeki `fetchAnother` isimli action creator async olmalı ve seçtiğiniz API'dan veri almalı. Derste öğrendiklerinizi kullanarak bu actionu oluşturun ve içerisindeki farklı durumlarda farklı actionlar dispatch edin.

* [ ] Uygulamadaki diğer actionlar neler? Tespit edin ve gerekli reducer ve actionları oluşturun.

* [x] `Item.js` ve `FavItem.js` dosyasını, seçtiğiniz API'den gelen veri yapısına uygun olarak düzenleyin ve stilleyin. Tailwind kullanmak zorunda değilsiniz.

* [x] `Store` içerisindeki verileri kullanmak istediğiniz yerlerde kullanmak için gerekli kısımları ekleyin.

* [x] Sayfadaki `Favorilere Ekle` kısmında kullanmak için gerekli actionu ve reducer bölümünü ekleyin.

### Görev 3: Favorilenenleri LocalStorage içerisine eklemek/buradan kullanmak

- [ ] İlgili reducer parçalarının içerisinde, size sağlanmış olan `readFavsFromLocalStorage` ve `writeFavsToLocalStorage` fonksiyonlarını kullanın ve uygulamada yaptığımız favorilere ekleme işlemlerinin sonuçlarını saklamamızı sağlayın.

### Görev 4: react-toastify ile favorilere ekleme işlemi sonrası bildirim vermek ve bildirim sonrasında API'dan yeni bir oge almak

- [ ] Projenize `react-toastify` paketini ekleyin.

- [ ] Gerekli ayarlamaları yapın ve bir öge favorilere eklendikten sonra bir başarı toast mesajı görüntüleyin.

- [ ] Bildirim kaybolmaya yakınken, API'dan tekrar bir öge isteyin.

### Esnek Görevler

- [ ] Proje stillerini kendi istediğiniz şekilde değiştirmeye çalışın.

- [ ] LocalStorage içerisindeki verileri sıfırlama opsiyonu ekleyin.
