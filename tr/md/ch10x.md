BÖLÜM 10: Function'lara Yönelik Pointer'lar
-------------------------------------------

Bu noktaya kadar data object'lerine yönelik pointer'ları tartıştık. C, function'lara yönelik pointer'ların declare edilmesine de izin verir. Function'lara yönelik pointer'ların çeşitli kullanım alanları vardır ve bunlardan bazıları burada ele alınacaktır.

Aşağıdaki gerçek problemi ele alalım. Bir array içinde saklanabilen hemen hemen her türlü veri koleksiyonunu sıralayabilen bir function yazmak istiyorsunuz. Bu bir string'ler, integer'lar, float'lar veya hatta structure'lar array'i olabilir. Sıralama algoritması hepsi için aynı olabilir. Örneğin, basit bir bubble sort algoritması veya daha karmaşık bir shell ya da quick sort algoritması olabilir. Gösterim amacıyla basit bir bubble sort kullanacağız.

Sedgewick \[1\], array'e bir pointer geçirildiğinde bunu sıralayacak bir function kurarak bubble sort'u C kodu kullanarak tanımlamıştır. Eğer bu function'ı **bubble()** olarak adlandırırsak, bir sıralama program'ı olan bubble\_1.c aşağıdaki gibidir:

    
    
    /*-------------------- bubble_1.c --------------------*/
    
    /* PTRTUT10.HTM'den bubble_1.c program'ı   6/13/97 */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int a[], int N);
    
    int main(void)
    {
        int i;
        putchar('\n');
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int a[], int N)
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (a[j-1] > a[j])
                {
                    t = a[j-1];
                    a[j-1] = a[j];
                    a[j] = t;
                }
            }
        }
    }
    
    
    
    /*---------------------- bubble_1.c'nin sonu -----------------------*/
    
    

Bubble sort, daha basit sıralama yöntemlerinden biridir. Algoritma, array'i ikinci element'ten sonuncu element'e kadar tarayarak her bir element'i kendisinden önceki element'le karşılaştırır. Kendisinden önceki element mevcut element'ten daha büyükse, büyük olan array'in sonuna daha yakın olacak şekilde ikisi yer değiştirir. İlk geçişte bu, en büyük element'in array'in en sonunda yer almasıyla sonuçlanır. Array artık son element hariç tüm element'lerle sınırlandırılır ve işlem tekrarlanır. Bu, bir sonraki en büyük element'i en büyük element'ten önceki bir noktaya yerleştirir. İşlem, element sayısının 1 eksiğine eşit sayıda tekrarlanır. Nihai sonuç sıralanmış bir array'dir.

Burada function'ımız, integer'lardan oluşan bir array'i sıralamak için tasarlanmıştır. Bu nedenle 1. satırda integer'ları karşılaştırıyoruz ve 2. satırdan 4. satıra kadar integer'ları saklamak için geçici bir integer alanı kullanıyoruz. Şimdi yapmak istediğimiz şey, bu kodu herhangi bir data type'ını kullanabilecek şekilde dönüştürüp dönüştüremeyeceğimizi görmek, yani integer'lar ile sınırlandırılmamaktır.

Aynı zamanda, her kullandığımızda algoritma'mızı ve onunla ilişkili kodu analiz etmek zorunda kalmak istemiyoruz. Karşılaştırma işlemini **bubble()** function'ının içinden çıkararak işe başlıyoruz; böylece asıl algoritma ile ilgili bölümleri yeniden yazmak zorunda kalmadan karşılaştırma function'ını değiştirmeyi nispeten kolaylaştırıyoruz. Bu, bubble\_2.c ile sonuçlanır:

    
    
    /*---------------------- bubble_2.c -------------------------*/
    
    /* PTRTUT10.HTM'den bubble_2.c program'ı   6/13/97 */
    
       /* Karşılaştırma function'ının ayrılması */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int a[], int N);
    int compare(int m, int n);
    
    int main(void)
    {
        int i;
        putchar('\n');
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int a[], int N)
    
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare(a[j-1], a[j]))
                {
                    t = a[j-1];
                    a[j-1] = a[j];
                    a[j] = t;
                }
            }
        }
    }
    
    int compare(int m, int n)
    {
        return (m > n);
    }
    /*--------------------- bubble_2.c'nin sonu -----------------------*/
    
    

Eğer amacımız sıralama rutinimizin data type'ından bağımsız olmasını sağlamaksa, bunu yapmanın bir yolu, integer data type'ını kullanmak yerine veriyi göstermek için void type'ına yönelik pointer'lar kullanmaktır. Bu yönde bir başlangıç olarak, yukarıdaki kodda pointer'ların kullanılabilmesi için birkaç şeyi değiştirelim. Başlangıç olarak, integer type'ına yönelik pointer'lara bağlı kalacağız.

    
    
    /*----------------------- bubble_3.c -------------------------*/
    
    /* PTRTUT10.HTM'den bubble_3.c program'ı    6/13/97 */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int *p, int N);
    int compare(int *m, int *n);
    
    int main(void)
    {
        int i;
        putchar('\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int *p, int N)
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare(&p[j-1], &p[j]))
                {
                    t = p[j-1];
                    p[j-1] = p[j];
                    p[j] = t;
                }
            }
        }
    }
    
    int compare(int *m, int *n)
    {
        return (*m > *n);
    }
    
    /*------------------ bubble_3.c'nin sonu -------------------------*/
    
    

Değişikliklere dikkat edin. Artık **bubble()** function'ına bir integer'a (veya integer array'ine) yönelik bir pointer geçiriyoruz. Ve bubble içinden, karşılaştırmak istediğimiz array element'lerinin pointer'larını karşılaştırma function'ımıza geçiriyoruz. Ve tabii ki, gerçek karşılaştırmayı yapabilmek için **compare()** function'ımızda bu pointer'ları dereference ediyoruz. Bir sonraki adımımız, **bubble()** içindeki pointer'ları void type'ına yönelik pointer'lara dönüştürmek olacak, böylece bu function type duyarlılığından daha bağımsız hale gelecektir. Bu durum bubble\_4'te gösterilmektedir.

    
    
    /*------------------ bubble_4.c ----------------------------*/
    
    /* PTRTUT10.HTM'den bubble_4.c program'ı   6/13/97 */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int *p, int N);
    int compare(void *m, void *n);
    
    int main(void)
    {
        int i;
        putchar('\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int *p, int N)
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare((void *)&p[j-1], (void *)&p[j]))
                {
                    t = p[j-1];
                    p[j-1] = p[j];
                    p[j] = t;
                }
            }
        }
    }
    
    int compare(void *m, void *n)
    {
        int *m1, *n1;
        m1 = (int *)m;
        n1 = (int *)n;
        return (*m1 > *n1);
    }
    
    /*------------------ bubble_4.c'nin sonu ---------------------*/
    
    

Bunu yaparken, **compare()** içinde, geçirilen void pointer type'larının sıralanan gerçek type'a cast edilmesini eklemek zorunda kaldığımızı unutmayın. Ancak daha sonra göreceğimiz gibi bu sorun değil. Ve **bubble()**'a geçirilen şey hala bir integer array'ine yönelik pointer olduğundan, **compare()** çağrımızda bunları parameter olarak geçirirken bu pointer'ları void pointer'lara cast etmek zorunda kaldık.

Şimdi **bubble()** function'ına ne geçireceğimiz problemine odaklanalım. Bu function'ın ilk parameter'ını da bir void pointer yapmak istiyoruz. Ancak bu, **bubble()** içinde şu anda bir integer olan **t** variable'ı hakkında bir şeyler yapmamız gerektiği anlamına gelir. Ayrıca, **t = p[j-1];** kullandığımız yerde, **t** variable'ına (veya **t** yerine ne koyarsak ona) kaç byte kopyalanacağını bilmek için **p[j-1]** ifadesinin type'ının bilinmesi gerekir.

Şu anda bubble\_4.c'de, **bubble()** içinde sıralanan verinin type'ına (ve dolayısıyla her bir bağımsız element'in boyutuna) ilişkin bilgi, ilk parameter'ın integer type'ına yönelik bir pointer olması gerçeğinden elde edilmektedir. Eğer herhangi bir veri type'ını sıralamak için **bubble()** function'ını kullanabilmek istiyorsak, bu pointer'ı **void** type'ına yönelik bir pointer yapmalıyız. Ancak bunu yaptığımızda, array içindeki bağımsız element'lerin boyutuna ilişkin bilgiyi kaybetmiş olacağız. Bu yüzden bubble\_5.c'de, bu boyut bilgisini işlemek için ayrı bir parameter ekleyeceğiz.

bubble4.c'den bubble5.c'ye yapılan bu değişiklikler, belki de geçmişte yaptıklarımızdan biraz daha kapsamlıdır. Bu yüzden aralarındaki farklar için iki modülü dikkatlice karşılaştırın.

    
    
    /*---------------------- bubble5.c ---------------------------*/
    
    /* PTRTUT10.HTM'den bubble_5.c program'ı    6/13/97 */
    
    
    
    #include <stdio.h>
    #include <string.h>
    
    long arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(void *p, size_t width, int N);
    int compare(void *m, void *n);
    
    int main(void)
    {
        int i;
        putchar('\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr, sizeof(long), 10);
        putchar('\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%ld ", arr[i]);
        }
    
        return 0;
    }
    
    void bubble(void *p, size_t width, int N)
    {
        int i, j;
        unsigned char buf[4];
        unsigned char *bp = p;
    
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare((void *)(bp + width*(j-1)),
                            (void *)(bp + j*width)))  /* 1 */
                {
    /*              t = p[j-1];   */
                    memcpy(buf, bp + width*(j-1), width);
    /*              p[j-1] = p[j];   */
                    memcpy(bp + width*(j-1), bp + j*width , width);
    /*              p[j] = t;   */
                    memcpy(bp + j*width, buf, width);
                }
            }
        }
    }
    
    int compare(void *m, void *n)
    {
        long *m1, *n1;
        m1 = (long *)m;
        n1 = (long *)n;
        return (*m1 > *n1);
    }
    
    /*--------------------- bubble5.c'nin sonu ---------------------*/
    
    

**compare()** function'ında gereken değişiklikleri göstermek için array'in data type'ını **int**'ten **long**'a değiştirdiğime dikkat edin. **bubble()** içinde (type'ını **int**'ten **long**'a değiştirmek zorunda kalacağımız) **t** variable'ını ortadan kaldırdım. Bir long veriyi tutmak için gereken boyut olan 4 unsigned character boyutunda bir buffer ekledim (bu, kodun gelecekteki modifikasyonlarında tekrar değişecektir). Unsigned character pointer'ı olan **\*bp**, sıralanacak array'in tabanını, yani o array'in ilk element'ini göstermek için kullanılır.

Ayrıca **compare()**'e geçirdiğimiz şeyleri ve karşılaştırmanın yer değiştirmesi gerektiğini belirttiği element'lerin yer değiştirme işlemini nasıl yapacağımızı da değiştirmek zorunda kaldık. Array notasyonu yerine **memcpy()** ve pointer notasyonu kullanımı, bu type duyarlılığının azaltılmasına katkı sağlar.

Yine, bubble5.c ile bubble4.c arasında dikkatli bir karşılaştırma yapmak, neyin neden olduğunu daha iyi anlamanızı sağlayabilir.

Şimdi, string'leri long integer'lar yerine sıralamak için bubble5.c'de kullandığımız aynı bubble() function'ını kullandığımız bubble6.c'ye geçiyoruz. Tabii ki string'lerin karşılaştırılma yöntemi ile long integer'ların karşılaştırılma yöntemi farklı olduğundan karşılaştırma function'ını değiştirmemiz gerekiyor. Ve bubble6.c'de, bubble5.c'de yorum satırı haline getirilmiş olan **bubble()** içindeki satırları sildik.

    
    /*--------------------- bubble6.c ---------------------*/
    /* PTRTUT10.HTM'den bubble_6.c program'ı   6/13/97 */
    
    #include <stdio.h>
    #include <string.h>
    
    #define MAX_BUF 256
    
    char arr2[5][20] = {  "Mickey Mouse",
    
                          "Donald Duck",
    
                          "Minnie Mouse",
    
                          "Goofy",
    
                          "Ted Jensen" };
    
    void bubble(void *p, int width, int N);
    int compare(void *m, void *n);
    
    int main(void)
    {
        int i;
        putchar('\n');
    
        for (i = 0; i < 5; i++)
        {
            printf("%s\n", arr2[i]);
        }
        bubble(arr2, 20, 5);
        putchar('\n\n');
    
        for (i = 0; i < 5; i++)
        {
            printf("%s\n", arr2[i]);
        }
        return 0;
    }
    
    void bubble(void *p, int width, int N)
    {
        int i, j, k;
        unsigned char buf[MAX_BUF];
        unsigned char *bp = p;
    
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
              k = compare((void *)(bp + width*(j-1)), (void *)(bp + j*width));
              if (k > 0)
                {
                 memcpy(buf, bp + width*(j-1), width);
                 memcpy(bp + width*(j-1), bp + j*width , width);
                 memcpy(bp + j*width, buf, width);
                }
            }
        }
    }
    
    int compare(void *m, void *n)
    {
        char *m1 = m;
        char *n1 = n;
        return (strcmp(m1,n1));
    }
    
    /*------------------- bubble6.c'nin sonu ---------------------*/
    
    

Ancak **bubble()** function'ının bubble5.c'de kullanılandan değiştirilmemiş olması, bu function'ın çok çeşitli data type'larını sıralama yeteneğine sahip olduğunu gösterir. Geriye kalan tek şey, gerçekten evrensel olabilmesi için **bubble()** function'ına kullanmak istediğimiz karşılaştırma function'ının adını geçirmektir. Bir array'in adının, array'in data segment'indeki ilk element'inin address'i olması gibi, bir function'ın adı da decay ederek o function'ın code segment'indeki address'ine dönüşür. Bu nedenle bir function'a yönelik pointer kullanmamız gerekir. Bu durumda bu, karşılaştırma function'ıdır.

Function'lara yönelik pointer'ların, işaret edilen function'larla parameter'ların sayısı ve type'ları ile return value'sunun type'ı açısından eşleşmesi gerekir. Bizim durumumuzda, function pointer'ımızı şu şekilde declare ederiz:

    
       int (*fptr)(const void *p1, const void *p2);
    

Şunu yazmış olsaydık:

    
        int *fptr(const void *p1, const void *p2);
    

**int** type'ına yönelik bir pointer döndüren bir function için bir function prototype'ına sahip olurduk. Bunun nedeni, C'de parantez () operatörünün pointer \* operatöründen daha yüksek önceliğe sahip olmasıdır. Parantezleri (\*fptr) string'inin etrafına koyarak bir function pointer'ı declare ettiğimizi belirtiriz.

Şimdi, 4. parameter olarak uygun type'ta bir function pointer'ı ekleyerek **bubble()** declaration'ımızı değiştiriyoruz. Function prototype'ı şu hale gelir:

    
        void bubble(void *p, int width, int N,
                    int(*fptr)(const void *, const void *));
    

**bubble()** function'ını çağırdığımızda, kullanmak istediğimiz karşılaştırma function'ının adını yerleştiririz. bubble7.c, bu yaklaşımın farklı veri type'larını sıralamak için aynı **bubble()** function'ının kullanılmasına nasıl izin verdiğini göstermektedir.

    
    
    /*------------------- bubble7.c ------------------*/
    
    /* PTRTUT10.HTM'den bubble_7.c program'ı  6/10/97 */
    
    #include <stdio.h>
    #include <string.h>
    
    #define MAX_BUF 256
    
    long arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    char arr2[5][20] = {  "Mickey Mouse",
                          "Donald Duck",
                          "Minnie Mouse",
                          "Goofy",
                          "Ted Jensen" };
    
    void bubble(void *p, int width, int N,
                int(*fptr)(const void *, const void *));
    int compare_string(const void *m, const void *n);
    int compare_long(const void *m, const void *n);
    
    int main(void)
    {
        int i;
        puts("\nBefore Sorting:\n");
    
        for (i = 0; i < 10; i++)               /* long int'leri göster */
        {
            printf("%ld ",arr[i]);
        }
        puts("\n");
    
        for (i = 0; i < 5; i++)                  /* string'leri göster */
        {
            printf("%s\n", arr2[i]);
        }
        bubble(arr, 4, 10, compare_long);          /* long'ları sırala */
        bubble(arr2, 20, 5, compare_string);     /* string'leri sırala */
        puts("\n\nAfter Sorting:\n");
    
        for (i = 0; i < 10; i++)             /* sıralanmış long'ları göster */
        {
            printf("%d ",arr[i]);
        }
        puts("\n");
    
        for (i = 0; i < 5; i++)            /* sıralanmış string'leri göster */
        {
            printf("%s\n", arr2[i]);
        }
        return 0;
    }
    
    void bubble(void *p, int width, int N,
                int(*fptr)(const void *, const void *))
    {
        int i, j, k;
        unsigned char buf[MAX_BUF];
        unsigned char *bp = p;
    
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                k = fptr((void *)(bp + width*(j-1)), (void *)(bp + j*width));
                if (k > 0)
                {
                    memcpy(buf, bp + width*(j-1), width);
                    memcpy(bp + width*(j-1), bp + j*width , width);
                    memcpy(bp + j*width, buf, width);
                }
            }
        }
    }
    
    int compare_string(const void *m, const void *n)
    {
        char *m1 = (char *)m;
        char *n1 = (char *)n;
        return (strcmp(m1,n1));
    }
    
    int compare_long(const void *m, const void *n)
    {
        long *m1, *n1;
        m1 = (long *)m;
        n1 = (long *)n;
        return (*m1 > *n1);
    }
    
    /*----------------- bubble7.c'nin sonu -----------------*/
    
    

### Bölüm 10 İçin Reference'lar:

1.  "Algorithms in C"  
    Robert Sedgewick  
    Addison-Wesley  
    ISBN 0-201-51425-7  
    

[Sonsöz](epilogx.md)

[İçindekiler Tablosuna Dön](pointers.md)
