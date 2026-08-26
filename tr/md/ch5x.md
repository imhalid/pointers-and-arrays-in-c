BÖLÜM 5: Pointer'lar ve Structure'lar
-------------------------------------

Bileceğiniz gibi, farklı data type'ları içeren bir data bloğunun formunu bir structure declaration'ı aracılığıyla declare edebiliriz. Örneğin, bir personel dosyası şuna benzer structure'lar içerebilir:

    
        struct tag {
            char lname[20];        /* soyadı */
            char fname[20];        /* adı */
            int age;               /* yaş */
            float rate;            /* örn. saatlik 12.75 */
        };
    

Diyelim ki bir disk dosyasında bu structure'lardan birçoğu var ve dosyalarımızdaki kişilerin bir listesine sahip olmak için her birini okumak ve her birinin adını ve soyadını yazdırmak istiyoruz. Geri kalan bilgiler yazdırılmayacaktır. Bu yazdırma işlemini bir function call ile gerçekleştirmek ve bu function'a elimizdeki structure'a işaret eden bir pointer pass etmek isteyeceğiz. Gösterim amacıyla şimdilik sadece tek bir structure kullanacağım. Ancak amacın, muhtemelen nasıl yapılacağını zaten bildiğimiz dosyayı okumak değil, function'ın kendisini yazmak olduğunu fark edin.

Gözden geçirmek gerekirse, structure member'larına nokta operatörüyle erişebileceğimizi hatırlayın, tıpkı şuradaki gibi:

    
    --------------- program 5.1 ------------------
    
    /* PTRTUT10.HTM'den Program 5.1     13/6/97 */
    
    
    #include <stdio.h>
    #include <string.h>
    
    struct tag {
        char lname[20];      /* soyadı */
        char fname[20];      /* adı */
        int age;             /* yaş */
        float rate;          /* örn. saatlik 12.75 */
    };
    
    struct tag my_struct;       /* my_struct structure'ını declare et */
    
    int main(void)
    {
        strcpy(my_struct.lname,"Jensen");
        strcpy(my_struct.fname,"Ted");
        printf("\n%s ",my_struct.fname);
        printf("%s\n",my_struct.lname);
        return 0;
    }
    
    -------------- end of program 5.1 --------------
    

Şimdi, bu özel structure, C program'larında kullanılan birçok structure'a kıyasla oldukça küçüktür. Yukarıdakilere şunları eklemek isteyebiliriz:

    
        date_of_hire;                  (data type'ları gösterilmemiştir)
        date_of_last_raise;
        last_percent_increase;
        emergency_phone;
        medical_plan;
        Social_S_Nbr;
        etc.....
    

Çok sayıda çalışanımız varsa, yapmak istediğimiz şey bu structure'lardaki data'yı function'lar yardımıyla manipüle etmektir. Örneğin, kendisine pass edilen herhangi bir structure'da listelenen çalışanın adını yazdıran bir function isteyebiliriz. Ancak orijinal C'de (Kernighan & Ritchie, 1. Baskı) bir structure'ı pass etmek mümkün değildi, sadece bir structure'a pointer pass edilebilirdi. ANSI C'de artık tüm structure'ı pass etmek mümkündür. Fakat buradaki amacımız pointer'lar hakkında daha fazla şey öğrenmek olduğundan, bunun üzerinde durmayacağız.

Her halükarda, structure'ın tamamını pass edersek bu, structure'ın içeriğini çağıran function'dan çağrılan function'a kopyalamamız gerektiği anlamına gelir. Stack kullanan sistemlerde bu, structure'ın içeriğinin stack'e push edilmesiyle yapılır. Büyük structure'larda bu bir sorun teşkil edebilir. Ancak, bir pointer pass etmek minimum düzeyde stack alanı kullanır.

Her halükarda, bu konu pointer'lar hakkında bir tartışma olduğundan, bir structure'a nasıl pointer pass edeceğimizi ve ardından bunu function içinde nasıl kullanacağımızı tartışacağız.

Açıklanan durumu ele alalım, yani bir parameter olarak bir structure'a pointer kabul edecek bir function istiyoruz ve bu function'ın içinden structure'ın member'larına erişmek istiyoruz. Örneğin, örnek structure'ımızdaki çalışanın adını yazdırmak istiyoruz.

Tamam, yani pointer'ımızın struct tag kullanılarak declare edilmiş bir structure'ı göstereceğini biliyoruz. Böyle bir pointer'ı şu declaration ile declare ederiz:

    
        struct tag *st_ptr;
    

ve onu şu şekilde örnek structure'ımıza yönlendiririz:

    
        st_ptr = &my_struct;
    

Şimdi, pointer'ı de-reference ederek belirli bir member'a erişebiliriz. Ama bir structure'a olan pointer'ı nasıl de-reference ederiz? Pointer'ı çalışanın yaşını set etmek için kullanmak isteyebileceğimiz gerçeğini göz önüne alalım. Şöyle yazardık:

    
        (*st_ptr).age = 63;
    

Buna dikkatlice bakın. Parantez içindeki ifadeyi, **st\_ptr**'ın gösterdiği şeyle yani **my\_struct** structure'ı ile değiştirmeyi ifade eder. Böylece bu, **my\_struct.age** ile aynı şekle indirgenir.

Ancak, bu oldukça sık kullanılan bir ifadedir ve C tasarımcıları aynı anlama gelen alternatif bir syntax oluşturmuşlardır:

    
        st_ptr->age = 63;
    

Bunu aklımızda tutarak aşağıdaki program'a bakalım:

    
    ------------ program 5.2 ---------------------
    
    /* PTRTUT10.HTM'den Program 5.2   13/6/97 */
    
    #include <stdio.h>
    #include <string.h>
    
    struct tag{                     /* structure type'ı */
        char lname[20];             /* soyadı */
        char fname[20];             /* adı */
        int age;                    /* yaş */
        float rate;                 /* örn. saatlik 12.75 */
    };
    
    struct tag my_struct;           /* structure'ı tanımla */
    void show_name(struct tag *p);  /* function prototype'ı */
    
    int main(void)
    {
        struct tag *st_ptr;         /* bir structure'a pointer */
        st_ptr = &my_struct;        /* pointer'ı my_struct'a yönlendir */
        strcpy(my_struct.lname,"Jensen");
        strcpy(my_struct.fname,"Ted");
        printf("\n%s ",my_struct.fname);
        printf("%s\n",my_struct.lname);
        my_struct.age = 63;
        show_name(st_ptr);          /* pointer'ı pass et */
        return 0;
    }
    
    void show_name(struct tag *p)
    {
        printf("\n%s ", p->fname);  /* p bir structure'ı gösteriyor */
        printf("%s ", p->lname);
        printf("%d\n", p->age);
    }
    
    -------------------- end of program 5.2 ----------------
    

Yine, bu tek seferde özümsenmesi gereken çok fazla bilgidir. Okuyucu, çeşitli kod parçacıklarını compile edip çalıştırmalı; main içinde single step yaparken ve kodu function'ın içine doğru takip ederken neler olduğunu görmek için bir debugger kullanarak **my\_struct** ve **p** gibi şeyleri gözlemlemelidir.

[Bölüm 6: String'ler ve String Array'leri Hakkında Biraz Daha Fazlası](ch6x.md)

[İçindekiler Tablosuna Dön](pointers.md)
