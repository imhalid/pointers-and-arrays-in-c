# C Terimleri Sözlüğü (Glossary of C Terms)

Bu sözlük, eğitim belgelerinde geçen İngilizce teknik terimlerin Türkçe karşılıklarını ve kısa açıklamalarını içermektedir.

| Terim (English) | Türkçe Karşılığı | Açıklama |
| :--- | :--- | :--- |
| **pointer** | işaretçi | Bellekteki başka bir değişkenin adresini saklayan değişken türü. |
| **array** | dizi | Aynı türden verilerin bellekte ardışık olarak saklandığı veri yapısı. |
| **compiler** | derleyici | C kaynak kodunu bilgisayarın çalıştırabileceği makine koduna çeviren program. |
| **linker** | bağlayıcı | Derlenmiş nesne dosyalarını ve kütüphaneleri birleştirerek tek bir çalıştırılabilir dosya haline getiren program. |
| **memory** | bellek | Program verilerinin ve kodunun çalışma zamanında saklandığı geçici depolama alanı (RAM). |
| **address** | adres | Bellekteki her bir baytlık verinin yerini belirten benzersiz sayısal konum. |
| **value** | değer | Bir değişkenin veya bellek hücresinin içinde saklanan veri. |
| **type** | tür / tip | Bir değişkenin ne tür veri (tamsayı, karakter vb.) saklayacağını ve ne kadar yer kaplayacağını belirten tanım. |
| **variable** | değişken | Değeri değişebilen ve bellekte bir adı olan depolama alanı. |
| **function** | fonksiyon / işlev | Belirli bir görevi yerine getiren ve tekrar kullanılabilen kod bloğu. |
| **string** | karakter dizisi | Karakterlerin (harfler, sayılar vb.) bir araya gelmesiyle oluşan metin verisi. C'de null karakteri `\0` ile sonlandırılır. |
| **structure / struct** | yapı | Farklı veri türlerini tek bir çatı altında birleştiren kullanıcı tanımlı veri türü. |
| **allocation** | tahsis / yer ayırma | Bellekten program kullanımı için yer ayrılması işlemi. |
| **dynamic allocation** | dinamik bellek tahsisi | Programın çalışması sırasında (run-time), ihtiyaca göre bellekten dinamik olarak yer ayrılması (örn: `malloc` ile). |
| **dereference** | dereferans | Bir pointer'ın işaret ettiği adresteki değere erişme işlemi (C'de `*` operatörü ile yapılır). |
| **lvalue** | sol değer | Bellekte adı olan ve değer atanabilen kalıcı nesneleri (depolama alanlarını) ifade eder. |
| **rvalue** | sağ değer | Geçici değerleri, ifadelerin sonuçlarını veya sabitleri ifade eder; doğrudan değer atanamaz. |
| **stack** | yığın | Yerel değişkenlerin ve fonksiyon çağrı bilgilerinin otomatik olarak yönetildiği hızlı bellek bölgesi. |
| **heap** | öbek | Dinamik bellek tahsisi için kullanılan ve programcı tarafından yönetilen büyük bellek bölgesi. |
| **parameter** | parametre | Bir fonksiyonun tanımında beklenen girdi değişkenleri. |
| **argument** | argüman | Bir fonksiyon çağrılırken fonksiyona fiilen gönderilen değerler. |
| **index** | indis | Bir dizideki elemanların konumunu belirten sayı (C'de diziler 0. indisten başlar). |
| **offset** | ofset / sapma | Bir başlangıç noktasına olan uzaklık veya konum sapma miktarı. |
| **byte** | bayt | 8 bitten oluşan temel bellek birimi. |
| **syntax** | sözdizimi | Programlama dilinin dil bilgisi ve yazım kuralları. |
| **cast / casting** | tür dönüşümü | Bir veri türünü geçici olarak başka bir veri türüne dönüştürme işlemi. |
| **object** | nesne | Bellekte yer kaplayan ve bir değere sahip olan somut varlık. |
| **null / NULL** | boş | Herhangi bir geçerli adresi veya nesneyi işaret etmeyen özel boş değer. |
| **function pointer** | fonksiyon işaretçisi | Bellekte bir fonksiyonun başlangıç adresini tutan özel pointer türü. |
| **segment** | bölüt | Belleğin belirli amaçlar için ayrılmış bölümleri (kod bölütü, veri bölütü vb.). |

[İçindekiler Tablosuna Dön](pointers.md)
