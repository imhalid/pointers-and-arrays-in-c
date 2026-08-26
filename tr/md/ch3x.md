CHAPTER 3: Pointer'lar ve String'ler
----------------------------------

String'lerin incelenmesi, pointer'lar ve array'ler arasındaki ilişkiyi daha da pekiştirmek açısından yararlıdır. Ayrıca bazı standart C string function'larının nasıl implement edilebileceğini göstermeyi de kolaylaştırır. Son olarak, pointer'ların function'lara nasıl ve ne zaman geçirilebileceğini ve geçirilmesi gerektiğini gösterir.

C'de string'ler, character array'leridir. Bu durum diğer dillerde her zaman geçerli değildir. BASIC, Pascal, Fortran ve diğer çeşitli dillerde, bir string'in kendine ait bir data type'ı vardır. Ancak C'de böyle değildir. C'de bir string, binary sıfır character'ı ( **'\0'** olarak yazılır) ile sonlandırılmış bir character array'idir. Tartışmamıza başlamak için, açıklama amacıyla tercih edilse de gerçek bir program'da muhtemelen asla yazmayacağınız bazı kodlar yazacağız. Örneğin, şunu düşünün:

    
        char my_string[40];
    
        my_string[0] = 'T';
        my_string[1] = 'e';
        my_string[2] = 'd':
        my_string[3] = '\0';
    
    

Kimse bir string'i bu şekilde oluşturmayacak olsa da, nihai sonuç, bir **nul character'ı ile sonlandırılmış** bir character array'i olması bakımından bir string'dir. Tanım gereği C'de bir string, nul character'ı ile sonlandırılmış bir character array'idir. "nul" ifadesinin "NULL" ile aynı **olmadığının** farkında olun. nul, **'\0'** kaçış dizisi (escape sequence) ile tanımlanan bir sıfırı ifade eder. Yani memory'de bir byte yer kaplar. Diğer taraftan NULL, null pointer'ları initialize etmek için kullanılan makronun adıdır. NULL, C compiler'ınızdaki bir header dosyasında #define edilmiştir, nul ise hiç #define edilmemiş olabilir.

Yukarıdaki kodu yazmak çok zaman alıcı olacağından, C aynı sonuca ulaşmak için iki alternatif yola izin verir. İlk olarak, şöyle yazılabilir:

    
        char my_string[40] = {'T', 'e', 'd', '\0',};    
    

Fakat bu da pratik olandan daha fazla yazmayı gerektirir. Bu yüzden C şuna izin verir:

    
        char my_string[40] = "Ted";
    

Önceki örneklerde yapıldığı gibi tek tırnak kullanmak yerine çift tırnak kullanıldığında, nul character'ı ( **'\0**' ) otomatik olarak string'in sonuna eklenir.

Yukarıdaki durumların tümünde aynı şey gerçekleşir. compiler, character'ları tutmak için 40 byte uzunluğunda bitişik bir memory bloğu ayırır ve ilk 4 character **Ted\0** olacak şekilde initialize eder.

Şimdi, aşağıdaki program'ı inceleyin:

    
    ------------------program 3.1-------------------------------------
    
    /* Program 3.1 from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    
    char strA[80] = "A string to be used for demonstration purposes";
    char strB[80];
    
    int main(void)
    {
    
        char *pA;     /* character type'ına bir pointer */
        char *pB;     /* character type'ına başka bir pointer */
        puts(strA);   /* A string'ini göster */
        pA = strA;    /* pA'nın A string'ini göstermesini sağla */
        puts(pA);     /* pA'nın neyi gösterdiğini görüntüle */
        pB = strB;    /* pB'nin B string'ini göstermesini sağla */
        putchar('\n');       /* ekranda bir satır aşağı in */
        while(*pA != '\0')   /* A satırı (metne bakın) */
        {
            *pB++ = *pA++;   /* B satırı (metne bakın) */
        }
        *pB = '\0';          /* C satırı (metne bakın) */
        puts(strB);          /* strB'yi ekranda göster */
        return 0;
    }
    
    --------- program 3.1 sonu -------------------------------------
    
        
    

Yukarıdaki kodda, her biri 80 character'dan oluşan iki character array'i tanımlayarak başlıyoruz. Bunlar global olarak tanımlandığı için, ilk olarak tamamı **'\0**' olacak şekilde initialize edilirler. Daha sonra, **strA**'nın ilk 42 character'ı tırnak içindeki string ile initialize edilir.

Şimdi koda geçerek, iki character pointer'ı tanımlıyoruz ve string'i ekranda gösteriyoruz. Ardından **pA** pointer'ını **strA**'ya "yönlendiriyoruz". Yani, atama ifadesi (assignment statement) aracılığıyla **strA[0]**'ın address'ini **pA** variable'ımızın içine kopyalıyoruz. Şimdi, **pA** tarafından gösterilen şeyi ekranda göstermek için **puts()** function'ını kullanıyoruz. Burada **puts()** function prototipinin şu şekilde olduğunu düşünün:

    
        int puts(const char *s); 
    

Şimdilik **const** ifadesini yoksayın. **puts()** function'ına geçirilen parameter bir pointer'dır, yani bir pointer'ın **value**'sudur (C'deki tüm parameter'lar value ile geçirildiği için) ve bir pointer'ın value'su, gösterdiği yerin address'i veya basitçe bir address'tir. Dolayısıyla, gördüğümüz gibi **puts(strA);** yazdığımızda, **strA[0]**'ın address'ini geçirmiş oluruz.

Benzer şekilde, **pA = strA;** atamasını yaptığımız için, **puts(pA);** yazdığımızda da aynı address'i geçirmiş oluruz.

Bunu göz önünde bulundurarak, A satırındaki **while()** ifadesine kadar kodu takip edin. A satırı şunu belirtir:

**pA** tarafından gösterilen character (yani **\*pA**) bir nul character'ı (yani sonlandırıcı **'\0**') olmadığı sürece şunları yapın:

B satırı şunu belirtir: **pA** tarafından gösterilen character'ı, **pB** tarafından gösterilen alana kopyala; ardından **pA**'yı bir sonraki character'ı gösterecek şekilde, **pB**'yi ise bir sonraki alanı gösterecek şekilde artır.

Son character'ı kopyaladığımızda, **pA** artık sonlandırıcı nul character'ını gösterir ve döngü biter. Ancak nul character'ını kopyalamış olmayız. Ve tanım gereği, C'deki bir string **mutlaka** nul ile sonlandırılmış olmalıdır. Bu yüzden, C satırıyla nul character'ını ekleriz.

Bu program'ı, **strA**, **strB**, **pA** ve **pB** variable'larını izlerken ve program boyunca adım adım ilerlerken debugger'ınızla çalıştırmak çok eğiticidir. Yukarıda yapıldığı gibi sadece **strB[]** array'ini tanımlamak yerine, onu da aşağıdaki gibi bir değerle initialize ederseniz daha da eğitici olur:

    
        strB[80] = "12345678901234567890123456789012345678901234567890"
    

burada kullanılan basamak sayısı **strA**'nın uzunluğundan daha büyüktür ve ardından yukarıdaki variable'ları izlerken single stepping prosedürünü tekrarlayın. Bunları bir deneyin!

Bir an için **puts()** prototipine geri dönersek, parameter niteleyicisi (parameter modifier) olarak kullanılan "const", kullanıcıya function'ın **s** tarafından gösterilen string'i değiştirmeyeceğini, yani o string'e bir constant gibi davranacağını bildirir.

Elbette, yukarıdaki program'ın gösterdiği şey, bir string'i kopyalamanın basit bir yoludur. Neler olduğunu iyice anlayana kadar yukarıdaki kodla uğraştıktan sonra, C ile birlikte gelen standart **strcpy()**'nin yerine kendi alternatifimizi oluşturmaya geçebiliriz. Şöyle görünebilir:

    
       char *my_strcpy(char *destination, char *source)
       {
           char *p = destination;
           while (*source != '\0')
           {
               *p++ = *source++;
           }
           *p = '\0';
           return destination;
       }   
    

Bu durumda, standart rutin'de kullanılan, destination'a bir pointer döndürme pratiğini takip ettim.

Yine, function iki character pointer'ının value'larını, yani address'lerini kabul edecek şekilde tasarlanmıştır ve böylece önceki program'da şunu yazabilirdik:

    
        int main(void)
        {
            my_strcpy(strB, strA);
            puts(strB);
        }    
    

Standart C'de kullanılan ve şu prototipe sahip olan formdan biraz saptım:

    
        char *my_strcpy(char *destination, const char *source);  
    

Burada "const" modifier'ı, kullanıcıya function'ın, source pointer'ı tarafından gösterilen içeriği değiştirmeyeceğini garanti etmek için kullanılır. Yukarıdaki function'ı ve prototipini gösterildiği gibi "const" modifier'ını içerecek şekilde değiştirerek bunu kanıtlayabilirsiniz. Ardından, function içinde, source tarafından gösterilen içeriği değiştirmeye çalışan bir ifade ekleyebilirsiniz, örneğin:

    
        *source = 'X';
    

bu da normalde string'in ilk character'ını X olarak değiştirecektir. const modifier'ı, compiler'ınızın bunu bir hata olarak yakalamasını sağlamalıdır. Deneyin ve görün.

Şimdi, yukarıdaki örneklerin bize gösterdiği bazı şeyleri ele alalım. İlk olarak, **\*ptr++** ifadesinin, **ptr** tarafından gösterilen value'yu döndürmek ve ardından pointer value'sunu artırmak şeklinde yorumlanması gerektiğini düşünün. Bu durum, operatörlerin öncelik sırası ile ilgilidir. Eğer **(\*ptr)++** yazacak olsaydık, pointer'ın kendisini değil, pointer'ın gösterdiği şeyi artırırdık! Yani, yukarıdaki örnek string'in ilk character'ında kullanılsaydı 'T' character'i 'U'ya yükseltilirdi. Bunu göstermek için basit bir örnek kod yazabilirsiniz.

Bir string'in, son character'ı **'\0'** olan bir character array'inden başka bir şey olmadığını tekrar hatırlayın. Yukarıda yaptığımız işlem, bir array'i kopyalamakla ilgilidir. Bu örnekte bir character array'i söz konusudur ancak aynı teknik integer, double vb. array'lerine de uygulanabilir. Ancak bu durumlarda string'lerle uğraşmıyor olacağımız için array'in sonu nul character'ı gibi özel bir value ile işaretlenmiş olmayacaktır. Sonu tanımlamak için özel bir value'ya güvenen bir versiyon implement edebilirdik. Örneğin, sonu negatif bir integer ile işaretleyerek pozitif integer'lardan oluşan bir array'i kopyalayabilirdik. Öte yandan, string'ler dışındaki öğelerin array'ini kopyalamak için bir function yazdığımızda, array'in address'inin yanı sıra kopyalanacak öğe sayısını da function'a geçirmemiz daha yaygındır; örneğin aşağıdaki prototipin gösterebileceği gibi bir şey:

    
        void int_copy(int *ptrA, int *ptrB, int nbr);
    

burada **nbr**, kopyalanacak integer'ların sayısıdır. Bu fikirle oynamak ve integer'lardan oluşan bir array oluşturup **int_copy()** function'ını yazıp yazamayacağınızı ve çalıştırıp çalıştıramayacağınızı görmek isteyebilirsiniz.

Bu, büyük array'leri manipüle etmek için function'ların kullanılmasına olanak tanır. Örneğin, bir function ile manipüle etmek istediğimiz 5000 integer'lık bir array'imiz varsa, o function'a yalnızca array'in address'ini (ve yaptığımız işe bağlı olarak yukarıdaki nbr gibi yardımcı bilgileri) geçirmemiz yeterlidir. Array'in kendisi **geçirilmez**, yani function çağrılmadan önce tüm array kopyalanıp stack'e konulmaz, sadece address'i gönderilir.

Bu, örneğin bir integer'ı bir function'a geçirmekten farklıdır. Bir integer geçirdiğimizde, integer'ın bir kopyasını çıkarırız, yani onun value'sunu alıp stack'e koyarız. function içinde geçirilen value üzerindeki herhangi bir manipülasyon, orijinal integer'ı hiçbir şekilde etkileyemez. Ancak array'ler ve pointer'lar ile, variable'ın address'ini geçirebilir ve böylece orijinal variable'ların value'larını manipüle edebiliriz.

[Bölüm 4: String'ler Hakkında Daha Fazlası](ch4x.md)

[İçindekiler Tablosuna Dön](pointers.md)
