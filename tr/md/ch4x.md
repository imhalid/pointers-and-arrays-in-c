BÖLÜM 4: String'ler Hakkında Daha Fazlası
-----------------------------------------

Kısa sürede epey yol katettik! Biraz geri dönelim ve Bölüm 3'te string'lerin kopyalanması üzerine yaptıklarımıza farklı bir açıdan bakalım. Aşağıdaki function'ı ele alalım:

    
        char *my_strcpy(char dest[], char source[])
        {
            int i = 0;
            while (source[i] != '\0')
            {
                dest[i] = source[i];
                i++;
            }
            dest[i] = '\0';
            return dest;
        }
    

String'lerin, character array'leri olduğunu hatırlayın. Burada, asıl kopyalama işlemini yapmak için pointer notation yerine array notation kullanmayı seçtik. Sonuçlar aynıdır, yani string bu notation kullanılarak da daha önce olduğu gibi tam olarak kopyalanır. Bu durum, üzerinde tartışacağımız bazı ilginç noktaları ortaya çıkarır.

Parameter'lar value ile geçildiğinden, yukarıdaki gibi hem bir character pointer'ının hem de array adının geçilmesinde, gerçekte geçilen şey her bir array'in ilk element'inin address'idir. Böylece, ister bir character pointer'ı ister bir array adını parameter olarak kullanalım, geçilen parameter'ın sayısal value'su aynı olur. Bu da bir şekilde **source\[i\]** ifadesinin **\*(p+i)** ile aynı olduğunu ima eder.

Aslında bu doğrudur, yani birinin **a\[i\]** yazdığı her yerde, bu ifade hiçbir sorun olmadan **\*(a + i)** ile değiştirilebilir. Hatta compiler, her iki durumda da aynı kodu üretecektir. Böylece pointer aritmetiğinin, array index'lemesi ile aynı şey olduğunu görürüz. Her iki syntax de aynı sonucu üretir.

Bu, pointer'lar ile array'lerin aynı şey olduğunu söylemek DEĞİLDİR; değillerdir. Biz sadece, bir array'in belirli bir element'ini tanımlamak için, biri array index'lemesini, diğeri ise pointer aritmetiğini kullanan ve aynı sonuçları veren iki syntax seçeneğine sahip olduğumuzu söylüyoruz.

Şimdi, bu son ifadeye baktığımızda, bir kısmı olan **(a + i)**, **+** operatörünü kullanan basit bir toplamadır ve C kuralları böyle bir ifadenin değişmeli olduğunu belirtir. Yani **(a + i)**, **(i + a)** ile özdeştir. Dolayısıyla, **\*(i + a)** ifadesini de **\*(a + i)** kadar kolay bir şekilde yazabiliriz.

Fakat **\*(i + a)** ifadesi **i\[a\]**'dan gelmiş olabilir! Bütün bunlardan, eğer:

    
        char a[20];
        int i;
    

yazmak

    
        a[3] = 'x';
    

şununla aynıdır:

    
        3[a] = 'x';
    

Deneyin! Character'lerden, integer'lardan veya long'lardan oluşan bir array tanımlayın; geleneksel yaklaşımı kullanarak 3. veya 4. element'e bir value atayın ve çalıştığından emin olmak için bu value'yu yazdırın. Sonra yukarıda yaptığım gibi array notation'ını tersine çevirin. İyi bir compiler buna itiraz etmeyecektir ve sonuçlar aynı olacaktır. Sadece bir merak konusu... fazlası değil!

Şimdi, yukarıdaki function'ımıza bakarsak, şunu yazdığımızda:

    
        dest[i] = source[i];
    

array index'lemesi ve pointer aritmetiğinin aynı sonuçları vermesi nedeniyle, bunu şu şekilde yazabiliriz:

    
        *(dest + i) = *(source + i);
    

Fakat bu, i'nin aldığı her value için 2 toplama işlemi gerektirir. Genel olarak konuşursak, toplama işlemleri, artırma işlemlerinden (**i++** ifadesinde olduğu gibi **++** operatörü kullanılarak yapılanlar gibi) daha fazla zaman alır. Bu durum modern optimize eden compiler'larda geçerli olmayabilir, ancak hiçbir zaman kesin olarak emin olunamaz. Dolayısıyla, pointer versiyonu, array versiyonundan biraz daha hızlı olabilir.

Pointer versiyonunu hızlandırmanın bir başka yolu da şunu değiştirmek olacaktır:

    
        while (*source != '\0')
    

sadece şununla:

    
        while (*source)
    

çünkü parantez içindeki value, her iki durumda da aynı anda sıfır (FALSE) olacaktır.

Bu noktada, pointer'ları kullanarak kendi program'larınızı yazarak biraz deneme yapmak isteyebilirsiniz. String'leri manipüle etmek, deneme yapmak için iyi bir yerdir. Aşağıdaki gibi standart function'ların kendi versiyonlarınızı yazmak isteyebilirsiniz:

    
        strlen();
        strcat();
        strchr();
    

ve sisteminizde bulunabilecek diğerlerini.

Gelecek bir bölümde string'lere ve pointer'lar aracılığıyla manipüle edilmelerine geri döneceğiz. Şimdilik devam edelim ve biraz structure'ları tartışalım.

[Bölüm 5: Pointer'lar ve Structure'lar](ch5x.md)

[İçindekiler Tablosuna Dön](pointers.md)
