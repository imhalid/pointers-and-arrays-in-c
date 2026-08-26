BÖLÜM 9: Pointer'lar ve Memory'nin Dynamic Allocation'ı
------------------------------------------------------

Bazen **malloc()**, **calloc()** veya diğer allocation function'larını kullanarak run time'da memory allocate etmek elverişli olur. Bu yaklaşımı kullanmak, örneğin bir array'i saklamak için gereken memory block'unun boyutu hakkındaki kararı run time'a kadar ertelemeye olanak tanır. Veya bir zaman diliminde integer array'inin saklanması için memory'nin bir bölümünün kullanılmasına izin verir ve ardından bu memory'ye artık ihtiyaç duyulmadığında, bir structure array'inin saklanması gibi diğer kullanımlar için free edilebilir.

Memory allocate edildiğinde, allocate eden function (örneğin **malloc()**, **calloc()** vb.) bir pointer return eder. Bu pointer'ın type'ı, eski bir K&R compiler mı yoksa daha yeni olan ANSI tipi compiler mı kullandığınıza bağlıdır. Eski compiler'da return edilen pointer'ın type'ı **char** iken, ANSI compiler'da **void**'dir.

Eğer eski bir compiler kullanıyorsanız ve bir integer array'i için memory allocate etmek istiyorsanız, return edilen char pointer'ı bir integer pointer'ına cast etmeniz gerekecektir. Örneğin, 10 integer için yer allocate etmek amacıyla şöyle yazabiliriz:

    
        int *iptr;
        iptr = (int *)malloc(10 * sizeof(int));
        if (iptr == NULL)
    
        { .. ERROR ROUTINE GOES HERE .. }
    

Eğer ANSI uyumlu bir compiler kullanıyorsanız, **malloc()** bir **void** pointer return eder ve void pointer herhangi bir object type'ındaki pointer variable'ına assign edilebildiğinden, yukarıda gösterilen **(int \*)** cast işlemine ihtiyaç duyulmaz. Array boyutu run time'da belirlenebilir ve compile time'da bilinmesi gerekmez. Yani, yukarıdaki **10** değeri, run time'da bir veri dosyasından veya klavyeden okunan ya da bir ihtiyaca göre hesaplanan bir variable olabilir.

Array ve pointer notation'ı arasındaki eşdeğerlik nedeniyle, **iptr** yukarıdaki gibi assign edildikten sonra array notation'ı kullanılabilir. Örneğin, şöyle yazılabilir:

    
        int k;
        for (k = 0; k < 10; k++)
           iptr[k] = 2;
    

tüm element'lerin value'larını 2 yapmak için.

Pointer'lar ve array'ler hakkında makul düzeyde iyi bir anlayışa sahip olunduğunda bile, C programlamaya yeni başlayanların ilk başta tökezlemesi muhtemel olan yerlerden biri multidimensional array'lerin dynamic allocation'ıdır. Genel olarak, mümkün olan her yerde bu tür array'lerin element'lerine pointer notation'ı ile değil, array notation'ı kullanarak erişebilmek isteriz. Uygulamaya bağlı olarak, compile time'da her iki boyutu da bilebilir veya bilmeyebiliriz. Bu durum, görevimizi gerçekleştirmek için çeşitli yollara kapı açar.

Gördüğümüz gibi, tek boyutlu bir array'i dynamically allocate ederken, array'in boyutu run time'da belirlenebilir. Şimdi, daha yüksek dereceli array'lerin dynamic allocation'ını kullanırken, compile time'da ilk boyutu bilmemize hiçbir zaman gerek yoktur. Daha yüksek boyutları bilmemiz gerekip gerekmediği, kodu nasıl yazacağımıza bağlıdır. Burada, integer'ların 2 boyutlu array'leri için dinamik olarak yer allocate etmenin çeşitli yöntemlerini tartışacağım.

İlk olarak, 2. boyutun compile time'da bilindiği durumları ele alacağız.

### YÖNTEM 1:

Bu sorunla başa çıkmanın bir yolu, **typedef** keyword'ünün kullanılmasıdır. 2 boyutlu bir integer array'ini allocate etmek için aşağıdaki iki notation'ın aynı object code'un üretilmesiyle sonuçlandığını hatırlayın:

    
    
        multi[row][col] = 1;     *(*(multi + row) + col) = 1;
    
    

Aşağıdaki iki notation'ın da aynı kodu ürettiği doğrudur:

    
    
        multi[row]            *(multi + row)
    
    

Sağdaki ifadenin bir pointer olarak evaluate edilmesi gerektiğinden, soldaki array notation'ının da bir pointer olarak evaluate edilmesi gerekir. Aslında **multi[0]**, ilk satırdaki ilk integer'a bir pointer return edecektir; **multi[1]** ise ikinci satırın ilk integer'ına bir pointer return edecektir vb. Gerçekte **multi[n]**, 2 boyutlu array'imizin n. satırını oluşturan integer array'ine bir pointer olarak evaluate edilir. Yani **multi**, array'lerin bir array'i olarak düşünülebilir ve **multi[n]** de bu array'lerin array'inin n. array'ine bir pointer'dır. Burada **pointer** kelimesi, bir address value'sunu temsil etmek için kullanılmaktadır. Literatürde bu tür kullanımlar yaygın olsa da, bu tür ifadeleri okurken bir array'in sabit address'i ile kendi başına bir veri nesnesi olan bir variable pointer arasındaki farkı ayırt etmeye dikkat edilmelidir.

Consider now:

    
    
    --------------- Program 9.1 --------------------------------
    
    /* PTRTUT10.HTM'den Program 9.1  13/6/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    
    #define COLS 5
    
    typedef int RowArray[COLS];
    RowArray *rptr;
    
    int main(void)
    {
        int nrows = 10;
        int row, col;
        rptr = malloc(nrows * COLS * sizeof(int));
        for (row = 0; row < nrows; row++)
        {
            for (col = 0; col < COLS; col++)
            {
                rptr[row][col] = 17;
            }
        }
    
        return 0;
    }
    ------------- End of Prog. 9.1 --------------------------------
    
    

Burada ANSI bir compiler varsaydım, bu nedenle **malloc()** tarafından return edilen void pointer üzerinde bir cast işlemine gerek yoktur. Eğer daha eski bir K&R compiler kullanıyorsanız, şu şekilde cast etmeniz gerekecektir:

    
        rptr = (RowArray *)malloc(.... etc.
    

Bu yaklaşımı kullanarak **rptr**, bir array isminin tüm özelliklerine sahip olur (rptr'ın değiştirilebilir olması hariç) ve programın geri kalanında array notation'ı kullanılabilir. Bu aynı zamanda, array içeriklerini değiştirmek için bir function yazmak istiyorsanız, tıpkı iki boyutlu array'lerin bir function'a geçirilmesini tartışırken yaptığımız gibi, o function'daki formal parameter'ın bir parçası olarak COLS kullanmanız gerektiği anlamına gelir.

### YÖNTEM 2:

Yukarıdaki YÖNTEM 1'de rptr, "COLS tane integer'dan oluşan tek boyutlu array" type'ına bir pointer haline geldi. **typedef** kullanmaya gerek kalmadan bu type için kullanılabilecek bir syntax olduğu ortaya çıkıyor. Şöyle yazarsak:

    
    
        int (*xptr)[COLS];
    
    

**xptr** variable'ı, yukarıdaki YÖNTEM 1'deki **rptr** variable'ı ile tamamen aynı özelliklere sahip olacaktır ve **typedef** keyword'ünü kullanmamıza gerek kalmaz. Burada **xptr**, bir integer array'ine pointer'dır ve bu array'in boyutu **#define** ile tanımlanan COLS ile verilir. Parantezlerin yerleşimi, array notation'ının önceliği daha yüksek olmasına rağmen pointer notation'ının baskın olmasını sağlar. Yani, eğer şöyle yazmış olsaydık:

    
        int *xptr[COLS];
    

**xptr**'ı, COLS ile tanımlanan sayıya eşit miktarda pointer tutan bir pointer array'i olarak tanımlamış olurduk. Bu kesinlikle aynı şey değildir. Bununla birlikte, pointer array'lerinin iki boyutlu array'lerin dynamic allocation'ında kullanım alanları vardır; bu durum sonraki 2 yöntemde görülecektir.

### YÖNTEM 3:

Her satırdaki element sayısını compile time'da bilmediğimiz, yani hem satır sayısının hem de sütun sayısının run time'da belirlenmesi gereken durumu düşünün. Bunu yapmanın bir yolu, **int** type'ına pointer array'i oluşturmak ve ardından her satır için yer allocate edip bu pointer'ları her bir satıra yönlendirmektir. Şunu inceleyin:

    
    
    -------------- Program 9.2 ------------------------------------
    
    /* PTRTUT10.HTM'den Program 9.2   13/6/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    
    int main(void)
    {
        int nrows = 5;     /* Hem nrows hem de ncols evaluate edilebilir */
        int ncols = 10;    /* veya run time'da okunabilir */
        int row;
        int **rowptr;
        rowptr = malloc(nrows * sizeof(int *));
        if (rowptr == NULL)
        {
            puts("\nFailure to allocate room for row pointers.\n");
            exit(0);
        }
    
        printf("\n\n\nIndex   Pointer(hex)   Pointer(dec)   Diff.(dec)");
    
        for (row = 0; row < nrows; row++)
        {
            rowptr[row] = malloc(ncols * sizeof(int));
            if (rowptr[row] == NULL)
            {
                printf("\nFailure to allocate for row[%d]\n",row);
                exit(0);
            }
            printf("\n%d         %p         %d", row, rowptr[row], rowptr[row]);
            if (row > 0)
            printf("              %d",(int)(rowptr[row] - rowptr[row-1]));
        }
    
        return 0;
    }
    
    --------------- End 9.2 ------------------------------------
    
    

Yukarıdaki kodda **rowptr**, **int** type'ına pointer pointer'ıdır. Bu durumda **int** type'ına pointer'lar array'inin ilk element'ine işaret eder. **malloc()** çağrılarının sayısını düşünün:

    
    
        Pointer array'ini elde etmek için             1     çağrı
        Satırlar için yer elde etmek için              5     çağrı
                                                    -----
                         Toplam                        6     çağrı
    

Eğer bu yaklaşımı kullanmayı seçerseniz, array'in bireysel element'lerine erişmek için array notation'ını kullanabilseniz de (örneğin **rowptr[row][col] = 17;**), bunun "2 boyutlu array"deki verilerin memory'de contiguous olduğu anlamına gelmediğini unutmayın.

Bununla birlikte, array notation'ını tıpkı continuous bir memory block'uymuş gibi kullanabilirsiniz. Örneğin şöyle yazabilirsiniz:

    
        rowptr[row][col] = 176;
    

tıpkı **rowptr**, compile time'da oluşturulmuş 2 boyutlu bir array'in ismiymiş gibi. Tabii ki **row** ve **col**, tıpkı compile time'da oluşturulmuş bir array'de olduğu gibi, oluşturduğunuz array'in bounds'ları içinde olmalıdır.

Eğer array'deki element'lerin saklanmasına ayrılmış contiguous bir memory block'una sahip olmak istiyorsanız, bunu aşağıdaki gibi yapabilirsiniz:

### YÖNTEM 4:

Bu yöntemde, öncelikle tüm array'i tutmak için bir memory block'u allocate ederiz. Daha sonra her satıra işaret edecek bir pointer array'i oluştururuz. Böylece, bir pointer array'i kullanılıyor olsa bile, memory'deki gerçek array contiguous olur. Kod şu şekildedir:

    
    ----------------- Program 9.3 -----------------------------------
    
    /* PTRTUT10.HTM'den Program 9.3   13/6/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    
    int main(void)
    {
        int **rptr;
        int *aptr;
        int *testptr;
        int k;
        int nrows = 5;     /* Hem nrows hem de ncols evaluate edilebilir */
        int ncols = 8;    /* veya run time'da okunabilir */
        int row, col;
    
        /* şimdi array için memory allocate ediyoruz */
    
        aptr = malloc(nrows * ncols * sizeof(int));
        if (aptr == NULL)
        {
            puts("\nFailure to allocate room for the array");
            exit(0);
        }
    
        /* sonra satır pointer'ları için yer allocate ediyoruz */
    
        rptr = malloc(nrows * sizeof(int *));
        if (rptr == NULL)
        {
            puts("\nFailure to allocate room for pointers");
            exit(0);
        }
    
        /* ve şimdi pointer'ları 'yönlendiriyoruz' */
    
        for (k = 0; k < nrows; k++)
        {
            rptr[k] = aptr + (k * ncols);
        }
    
        /* Şimdi satır pointer'larının nasıl artırıldığını gösteriyoruz */
        printf("\n\nIllustrating how row pointers are incremented");
        printf("\n\nIndex   Pointer(hex)  Diff.(dec)");
    
        for (row = 0; row < nrows; row++)
        {
            printf("\n%d         %p", row, rptr[row]);
            if (row > 0)
            printf("              %d",(rptr[row] - rptr[row-1]));
        }
        printf("\n\nAnd now we print out the array\n");
        for (row = 0; row < nrows; row++)
        {
            for (col = 0; col < ncols; col++)
            {
                rptr[row][col] = row + col;
                printf("%d ", rptr[row][col]);
            }
            putchar('\n');
        }
    
        puts("\n");
    
        /* ve burada aslında contiguous bir memory block'undaki
           2 boyutlu bir array ile uğraştığımızı gösteriyoruz. */
        printf("And now we demonstrate that they are contiguous in memory\n");
    
        testptr = aptr;
        for (row = 0; row < nrows; row++)
        {
            for (col = 0; col < ncols; col++)
            {
                printf("%d ", *(testptr++));
            }
            putchar('\n');
        }
    
        return 0;
    }
    
    
    
    
    ------------- End Program 9.3 -----------------
    
    

Tekrar **malloc()** çağrılarının sayısını düşünün:

    
        Array'in kendisi için yer elde etmek üzere      1      çağrı
        Pointer array'i için yer elde etmek üzere       1      çağrı
                                                      ----
                             Toplam                     2      çağrı
    
    

Şimdi, **malloc()**'a yapılan her çağrı ek alan overhead'i oluşturur, çünkü **malloc()** genellikle işletim sistemi tarafından block boyutuyla ilgili verileri içeren bir linked list oluşturarak implement edilir. Ancak daha da önemlisi, büyük array'lerde (birkaç yüz satır) zamanı geldiğinde neyin free edilmesi gerektiğini takip etmek daha zahmetli olabilir. Bu durum, veri block'unun contiguous olması sayesinde **memset()** kullanılarak tümünün sıfıra initialize edilmesine izin vermesiyle birleştiğinde, ikinci alternatifi daha çok tercih edilen seçenek haline getirmektedir.

Multidimensional array'ler üzerindeki son bir örnek olarak, 3 boyutlu bir array'in dynamic allocation'ını göstereceğiz. Bu örnek, bu tür bir allocation yaparken dikkat edilmesi gereken bir hususu daha gösterecektir. Yukarıda belirtilen nedenlerden dolayı, ikinci alternatifte açıklanan yaklaşımı kullanacağız. Aşağıdaki kodu inceleyin:

    
    
    ------------------- Program 9.4 -------------------------------------
    
    /* PTRTUT10.HTM'den Program 9.4   13/6/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    #include <stddef.h>
    
    int X_DIM=16;
    int Y_DIM=5;
    int Z_DIM=3;
    
    int main(void)
    {
        char *space;
        char ***Arr3D;
        int y, z;
        ptrdiff_t diff;
    
        /* öncelikle array'in kendisi için yer ayırıyoruz */
    
        space = malloc(X_DIM * Y_DIM * Z_DIM * sizeof(char));
    
        /* sonra, her biri en nihayetinde bir double pointer'lar 2 boyutlu
           array'inin ilk element'ine işaret edecek bir pointer array'i
           için yer allocate ediyoruz */
    
        Arr3D = malloc(Z_DIM * sizeof(char **));
    
        /* ve bunların her biri için yeni allocate edilmiş bir
           satır pointer'ları array'ine bir pointer assign ediyoruz */
    
        for (z = 0; z < Z_DIM; z++)
        {
            Arr3D[z] = malloc(Y_DIM * sizeof(char *));
    
            /* ve bu array'deki her bir alan için, orijinal olarak allocate edilen
               array alanındaki her satırın ilk element'ine
               bir pointer yerleştiriyoruz */
    
            for (y = 0; y < Y_DIM; y++)
            {
                Arr3D[z][y] = space + (z*(X_DIM * Y_DIM) + y*X_DIM);
            }
        }
    
        /* Ve şimdi, Arr3D pointer'ının indexing'inin continuous bir şekilde
           ilerleyip ilerlemediğini görmek için 3D array'imizdeki her address'i
           kontrol ediyoruz */
    
        for (z = 0; z < Z_DIM; z++)
        {
            printf("Location of array %d is %p\n", z, *Arr3D[z]);
            for ( y = 0; y < Y_DIM; y++)
            {
                printf("  Array %d and Row %d starts at %p", z, y, Arr3D[z][y]);
                diff = Arr3D[z][y] - space;
                printf("    diff = %d  ",diff);
                printf(" z = %d  y = %d\n", z, y);
            }
        }
        return 0;
    }
    
    ------------------- End of Prog. 9.4 ----------------------------
    
    

Eğer bu tutorial'ı bu noktaya kadar takip ettiyseniz, yalnızca comment'lere dayanarak yukarıdakileri çözmekte sorun yaşamamalısınız. Ancak belirtilmesi gereken birkaç nokta var. Şu satırla başlayalım:

    
        Arr3D[z][y] = space + (z*(X_DIM * Y_DIM) + y*X_DIM);
    

Burada **space**'in, **Arr3D[z][y]** ile aynı type'ta olan bir character pointer olduğuna dikkat edin. Pointer'a, **(z*(X_DIM * Y_DIM) + y*X_DIM)** ifadesinin evaluate edilmesiyle elde edilen gibi bir integer eklendiğinde, sonucun yeni bir pointer value'su olması önemlidir. Ve pointer value'larını pointer variable'larına assign ederken, value ile variable'ın veri type'ları eşleşmelidir.

[Bölüm 10: Function'lara Pointer'lar](ch10x.md)

[İçindekiler Tablosuna Dön](pointers.md)
