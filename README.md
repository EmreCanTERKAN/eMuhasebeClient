# Muhasebe Yönetim Sistemi (Frontend - Angular)

Bu proje, **Angular** ile geliştirilmiş, çoklu şirket desteğine sahip, ölçeklenebilir bir şirket yönetim uygulamasıdır. Uygulama, **Clean Architecture** ve **CQRS** gibi modern yazılım mimarileri ile inşa edilmiştir. Her şirketin kendine ait bağımsız veritabanı bulunur ve sistem bu yapıya uygun olarak genişletilebilir şekilde tasarlanmıştır.

## Genel Özellikler

-   Clean Architecture yapısı kullanılmıştır.
    
-   CQRS (Command & Query Responsibility Segregation) prensibine göre ayrılmış iş mantığı.
    
-   IdentityServer üzerinden kimlik doğrulama ve login işlemleri.
    
-   Her şirket için ayrı bir veritabanı (multi-tenancy desteği).
    
-   Şirketler, bankalar, müşteriler, ürünler, kasalar ve bunlara ait detayların yönetimi.
    
-   Her yapının kendi endpoint’i mevcuttur.
    
-   Stoklar üzerinden yapılan kârlılık analizleri ve detaylı raporlama.
    
-   Alış ve satış faturalarının yönetimi.
    
-   Satış faturaları, ana ekranda grafiksel rapor olarak gösterilir. Fatura eklenip silindiğinde veriler **SignalR** ile canlı olarak güncellenir.
    

## Kullanılan Kütüphaneler ve Araçlar

Projede aşağıdaki kütüphaneler ve teknolojiler kullanılmıştır:

### Frontend (Angular):

-   **Angular** – Uygulamanın frontend kısmı için kullanılan framework.
    
-   **Angular Material** – UI bileşenleri için modern ve şık tasarım.
    
-   **NgRx** – State management ve store işlemleri için kullanılmıştır.
    
-   **SignalR** – Gerçek zamanlı bildirimler için.
    
-   **HttpClientModule** – Backend API ile iletişim kurmak için.
    
-   **Chart.js** – Grafiksel raporlama için.
    
-   **ngx-toastr** – Bildirimler ve kullanıcı uyarıları için.
    

## E-Posta Gönderimi

Kullanıcı kayıt işlemi sonrasında, yapılandırılmış bir SMTP sunucusu üzerinden kullanıcıya otomatik olarak bilgilendirme e-postası gönderilir.

### SMTP Sunucusu Çalıştırma

E-posta gönderim işlemleri için bir SMTP sunucusuna ihtiyaç duyulmaktadır. Bunun için **smtp4dev** Docker container'ını kullanabilirsiniz. Aşağıdaki komutla bu container'ı çalıştırarak SMTP sunucusunu başlatabilirsiniz:
-docker run --rm -it -p 5000:80 -p 2525:25 rnwood/smtp4dev

-   `-p 5000:80`: SMTP4Dev'in web arayüzüne erişmek için port 5000'i açar.
    
-   `-p 2525:25`: SMTP protokolünü kullanarak e-posta gönderimini yapabilmek için port 2525'i açar.
    

Bu komut çalıştırıldığında, SMTP sunucusu localhost üzerinde 2525 portu üzerinden e-posta almayı ve göndermeyi destekler. Web arayüzüne ise **http://localhost:5000** adresinden ulaşabilirsiniz.

## Geliştirme Notları

-   Kod yapısı test edilebilirlik ve genişletilebilirlik ön planda tutularak tasarlanmıştır.
    
-   Katmanlar arası bağımlılık en aza indirilmiş, servis ve veri erişim yapıları soyutlanmıştır.
    
-   Uygulama üzerinde geliştirmeye açık birçok modül ve alan bulunmaktadır.
    

## API İstekleri

Aşağıda, uygulamanın çeşitli modüllerine ait **API endpoint'lerinin** ekran görüntüleri ve açıklamaları yer almaktadır.

### **Fatura Ekleme Ekranı**

![Fatura Ekleme Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/add-invoice.png)

### **Cari Detayları Ekranı**

![Cari Detayları Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/cari-detail.png)

### **Cari Ekranı**

![Cari Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/cari.png)

### **Grafik Ekranı**

![Grafik Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/grafik.png)

### **Şirketler Ekranı**

![Şirketler Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/companies.png)

### **Database Güncelleme Ekranı**

![Database Güncelleme Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/database-update.png)

### **Popup Ekranı**

![Popup Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/info.png)

### **Login Ekranı**

![Login Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/login.png)

### **Mail Onay Ekranı**

![Mail Onay Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/mail.png)

### **Sol Bar Ekranı**

![Sol Bar Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/side-bar.png)

### **SMTP Ekranı**

![SMTP Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/smtp.png)

### **Stok Kârlılık Ekranı**

![Stok Kârlılık Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/stok-karlilik.png)

### **Kullanıcılar Ekranı**

![Kullanıcılar Ekranı](https://github.com/EmreCanTERKAN/eMuhasebeClient/blob/main/src/assets/dist/img/screenshots/users.png)