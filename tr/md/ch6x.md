CHAPTER 6: String'ler ve String Array'leri Hakkında Biraz Daha Fazlası
------------------------------------------------------

Şimdi, bir süreliğine string'lere geri dönelim. Aşağıdakilerin tümünde, tüm assignment'ların global olduğu, yani main() de dahil olmak üzere herhangi bir function'ın dışında yapıldığı anlaşılmalıdır.

Daha önceki bir bölümde şöyle yazabileceğimizi belirtmiştik:

    
       char my_string[40] = "Ted";
    

bu işlem, 40 byte'lık bir array için allocation yapacak ve string'i ilk 4 byte'a (üçü tırnak içindeki character'ler için ve dördüncüsü sonlandırıcı **'\\0'**'ı işlemek için) yerleştirecektir.

Aslında, tek yapmak istediğimiz "Ted" adını store etmek olsaydı şöyle yazabilirdik:

    
       char my_name[] = "Ted";
    

ve compiler character'leri sayacak, nul character için yer bırakacak ve toplam dört character'i memory'de store edecektir; bu memory'nin location'ı ise array name'i (bu durumda **my\_name**) tarafından döndürülecektir.

Bazı kodlarda, yukarıdakiler yerine şunu görebilirsiniz:

    
       char *my_name = "Ted";
    

bu alternatif bir yaklaşımdır. Bunlar arasında bir fark var mı? Cevap... evet. Array notation'ı kullanıldığında, static memory block'unda her bir character için bir tane ve sonlandırıcı nul character'i için bir tane olmak üzere 4 byte'lık storage alanı kaplanır. Ancak pointer notation'ında aynı 4 byte'ın yanı sıra, **my\_name** pointer variable'ını store etmek için **artı** N byte gerekir (burada N sisteme bağlıdır ancak genellikle minimum 2 byte'tır ve 4 veya daha fazla olabilir).

Array notation'ında **my\_name**, array'in ilk element'inin address'i olan **&myname\[0\]** ifadesinin kısaltılmışıdır. Array'in location'ı run time sırasında sabit olduğundan, bu bir constant'tır (bir variable değildir). Pointer notation'ında ise **my\_name** bir variable'dır. Hangisinin daha iyi bir yöntem olduğuna gelince, bu program'ın geri kalanında ne yapacağınıza bağlıdır.

Şimdi bir adım daha ileri gidelim ve bu declaration'ların her birinin, herhangi bir function'ın sınırları dışında global olarak yapılmasının aksine, bir function içinde yapılması durumunda ne olacağını ele alalım.

    
    void my_function_A(char *ptr)
    {
        char a[] = "ABCDE"
        .
        .
    } 
    
    
    void my_function_B(char *ptr)
    {
        char *cp = "FGHIJ"
        .
        .
    }
    

**my\_function\_A** durumunda, **a\[\]** array'inin içeriği veya value'ları data olarak kabul edilir. Array'in ABCDE value'larına initialize edildiği söylenir. **my\_function\_B** durumunda ise **cp** pointer'ının value'su data olarak kabul edilir. Pointer, **FGHIJ** string'ini point edecek şekilde initialize edilmiştir. Hem **my\_function\_A** hem de **my\_function\_B**'de definition'lar local variable'lardır ve bu nedenle **ABCDE** string'i, **cp** pointer'ının value'su gibi stack'te store edilir. **FGHIJ** string'i herhangi bir yerde store edilebilir. Benim sistemimde bu, data segment'inde store edilir.

Bu arada, **my\_function\_A**'da yaptığım gibi automatic variable'ların array initialization'ı, eski K&R C'de geçersizdi ve ancak daha yeni olan ANSI C ile "olgunluğa ulaştı". Bu durum, portability ve backwards compatibility konuları düşünüldüğünde önemli olabilecek bir gerçektir.

Pointer'lar ve array'ler arasındaki ilişkiyi/farkları tartışırken, multidimensional array'lere geçelim. Örneğin, şu array'i ele alalım:

    
        char multi[5][10];
    

Bu tam olarak ne anlama geliyor? Şöyle değerlendirelim.

    
        char multi[5][10];
    

Altı çizili kısmı bir array'in "name"i olarak kabul edelim. Başına **char** ekleyip sonuna **\[10\]** getirdiğimizde, 10 character'lik bir array elde ederiz. Ancak **multi\[5\]** name'inin kendisi de her biri 10 character'lik bir array olan 5 element bulunduğunu belirten bir array'dir. Dolayısıyla, her biri 10 character'lik 5 array'den oluşan bir array'e sahibiz...

Bu 2 dimensional array'i bir tür data ile doldurduğumuzu varsayalım. Memory'de, sanki aşağıdakine benzer bir şekilde 5 ayrı array'i initialize ederek oluşturulmuş gibi görünebilir:

    
        multi[0] = {'0','1','2','3','4','5','6','7','8','9'}
        multi[1] = {'a','b','c','d','e','f','g','h','i','j'}
        multi[2] = {'A','B','C','D','E','F','G','H','I','J'}
        multi[3] = {'9','8','7','6','5','4','3','2','1','0'}
        multi[4] = {'J','I','H','G','F','E','D','C','B','A'}
    
    
    

Aynı zamanda, münferit element'ler şu şekilde bir syntax kullanılarak address'lenebilir:

    
        multi[0][3] = '3'
        multi[1][7] = 'h'
        multi[4][0] = 'J'
    

Array'ler memory'de contiguous olduğundan, yukarıdaki durum için gerçek memory block'umuz şu şekilde görünmelidir:

    
        0123456789abcdefghijABCDEFGHIJ9876543210JIHGFEDCBA
        ^
        |_____ &multi[0][0] address'inden başlayarak
    
    

**multi\[0\] = "0123456789"** yazmadığıma dikkat edin. Eğer öyle yazsaydım, çift tırnak kullanıldığında tırnak içindeki character'lerin sonuna her zaman bir **'\0'** character'i ekleneceğinden, bir sonlandırıcı **'\0'** ima edilmiş olacaktı. Durum böyle olsaydı, her satır için 10 yerine 11 character'lik yer ayırmam gerekecekti.

Yukarıdaki amacım, memory'nin 2 dimensional array'ler için nasıl düzenlendiğini (layout'unu) göstermektir. Yani bu, character'lerden oluşan 2 dimensional bir array'dir, "string'lerin" bir array'i DEĞİLDİR.

Şimdi, compiler array'de kaç column olduğunu bilir, bu yüzden **multi + 1** ifadesini yukarıdaki 2. row'daki 'a' character'inin address'i olarak yorumlayabilir. Yani bu location'ı elde etmek için column sayısı olan 10'u ekler. Eğer integer'larla ve aynı dimension'a sahip bir array ile uğraşıyor olsaydık, compiler **10\*sizeof(int)** eklerdi ki bu benim makinemde 20 olurdu. Böylece, yukarıdaki 4. row'daki **9**'un address'i **&multi\[3\]\[0\]** veya pointer notation'ında **\*(multi + 3)** olurdu. 4. row'daki 2. element'in içeriğine ulaşmak için bu address'e 1 ekler ve sonucu aşağıdaki gibi dereference ederiz:

    
        *(*(multi + 3) + 1)
    

Biraz düşünerek şunları görebiliriz:

    
        *(*(multi + row) + col)    ve
        multi[row][col]            aynı sonuçları verir.
    

Aşağıdaki program, bunu character array'leri yerine integer array'leri kullanarak gösterir.

    
    ------------------- program 6.1 ----------------------
    
    /* Program 6.1 from PTRTUT10.HTM   6/13/97*/
    
    #include <stdio.h>
    #define ROWS 5
    #define COLS 10
    
    int multi[ROWS][COLS];
    
    int main(void)
    {
        int row, col;
        for (row = 0; row < ROWS; row++)
        {
            for (col = 0; col < COLS; col++)
            {
                multi[row][col] = row*col;
            }
        }
    
        for (row = 0; row < ROWS; row++)
        {
            for (col = 0; col < COLS; col++)
            {
                printf("\n%d  ",multi[row][col]);
                printf("%d ",*(*(multi + row) + col));
            }
        }
    
        return 0;
    }
    ----------------- program 6.1'in sonu ---------------------   
    

Pointer versiyonunda gereken double dereferencing nedeniyle, 2 dimensional bir array'in name'inin genellikle bir pointer to a pointer'a eşdeğer olduğu söylenir. 3 dimensional bir array'de ise bir array of arrays of arrays ile uğraşıyor olurduk ve bazıları bunun name'inin bir pointer to a pointer to a pointer'a eşdeğer olduğunu söyleyebilir. Ancak burada, array'i array notation'ı kullanarak tanımlayarak onun için memory'de başlangıçta bir block ayırdık. Bu nedenle, bir variable ile değil, bir constant ile uğraşıyoruz. Yani, variable olan bir pointer'dan değil, sabit bir address'ten bahsediyoruz. Yukarıda kullanılan dereference işlemi, o address'in value'sunu (**multi** sembolü tarafından verilen **multi\[0\]\[0\]** address'i) değiştirmeye gerek kalmadan array'lerin array'indeki herhangi bir element'e erişmemizi sağlar.

[Bölüm 7: Multidimensional Array'ler Hakkında Daha Fazlası](ch7x.md)

[İçindekiler Tablosuna Dön](pointers.md)
