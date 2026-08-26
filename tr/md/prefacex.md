ÖNSÖZ
-----

Bu döküman, C programlama diline yeni başlayan programcıları pointer'larla tanıştırmak amacıyla hazırlanmıştır. FidoNet ve UseNet'tekiler de dahil olmak üzere C ile ilgili çeşitli konferansları okuyarak ve bunlara katkıda bulunarak geçirdiğim birkaç yıl boyunca, C'ye yeni başlayan pek çok kişinin pointer'ların temellerini kavramakta zorlandığını fark ettim. Bu nedenle, bunları bol miktarda örnekle ve sade bir dille açıklamaya çalışma görevini üstlendim.

Bu dökümanın ilk versiyonu, şimdiki gibi kamu malı olarak sunulmuştu. Bu döküman Bob Stout tarafından fark edildi ve kendisinin yaygın olarak dağıtılan SNIPPETS koleksiyonuna PTR-HELP.TXT adında bir dosya olarak dahil edildi. O orijinal 1995 sürümünden bu yana, önemli miktarda materyal ekledim ve orijinal çalışma üzerinde bazı küçük düzeltmeler yaptım.

HTML versiyon 1.1'de, dünyanın dört bir yanından bana e-postayla gönderilen yorumların bir sonucu olarak ifadelendirmede bazı küçük değişiklikler yaptım. Versiyon 1.2'de ise, PC'lerde 16 bitlik compiler'lardan 32 bitlik compiler'lara geçişi yansıtmak amacıyla ilk iki bölümü güncelledim.

### Teşekkür:

FidoNet C Echo'da, comp.lang.c UseNet haber grubunda veya diğer ağlardaki diğer birkaç konferansta sordukları sorularla bu çalışmaya bilmeden katkıda bulunan o kadar çok insan var ki, hepsini listelemek imkansız olurdu. Bu materyalin ilk versiyonunu SNIPPETS dosyasına dahil etme nezaketini gösteren Bob Stout'a özel olarak teşekkür ederim.

### Yazar Hakkında:

Ted Jensen, manyetik kayıt alanında donanım tasarımcısı veya donanım tasarımcılarının yöneticisi olarak çalışmış emekli bir Elektronik Mühendisidir. Programlama, mainframe üzerinde çalıştırılmak üzere delikli kart hazırlamayı öğrendiği 1968 yılından beri zaman zaman uğraştığı bir hobisidir. (Mainframe, 64K manyetik çekirdek memory'sine sahipti!).

### Bu Materyalin Kullanımı:

Burada yer alan her şey kamu malı olarak sunulmuştur. İsteyen herkes bu materyali dilediği şekilde kopyalayabilir veya dağıtabilir. Tek ricam, bu materyalin bir sınıfta ders aracı olarak kullanılması durumunda, tüm bölümler, önsöz ve giriş dahil olmak üzere tamamının dağıtılmasıdır. Ayrıca böyle bir durumda, o sınıfın eğitmeninin aşağıdaki address'lerden birine bana durumu bildiren kısa bir not yazmasından memnuniyet duyarım. Bunu başkalarına faydalı olması ümidiyle yazdım ve herhangi bir maddi karşılık talep etmediğim için, en azından bu hedefe kısmen de olsa ulaştığımı bilmemin tek yolu, bu materyali faydalı bulanların geri bildirimleridir.

Bu arada, benimle iletişime geçmek için eğitmen veya öğretmen olmanıza gerek yok. Materyali faydalı bulan veya yapıcı eleştirileri olan herkesten gelecek bir nottan memnuniyet duyarım. Ayrıca aşağıdaki address'lere e-postayla gönderilen soruları da yanıtlamaya hazırım.

### Bu dökümanın diğer versiyonları:

Bu dökümanın hypertext versiyonuna ek olarak, tüm dökümanın yazdırılmasına veya indirilmesine daha uygun başka versiyonlarını da kullanıma sundum. Bu alandaki ilerlemelerimden haberdar olmak veya bu dökümanın daha güncel versiyonlarını kontrol etmek isterseniz, bkz. https://github.com/jflaherty/ptrtut13/releases

Ted Jensen  
Redwood City, California  
Şubat 2000  

[Giriş](introx.md)

[İçindekiler Tablosuna Dön](pointers.md)
