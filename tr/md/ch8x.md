CHAPTER 8: Array'lere Pointer'lar
-----------------------------

Pointer'lar, elbette, array'ler de dahil olmak üzere her type veri object'ine point edilebilir. Bu durum, program 3.1'i tartışırken açıkça görülmüş olsa da, konu multidimensional array'lere geldiğinde bunu nasıl yaptığımızı detaylandırmak önemlidir.

Hatırlamak gerekirse, Bölüm 2'de bir integer array'i verildiğinde, aşağıdaki şekilde bir integer pointer'ı bu array'e point edebileceğimizi belirtmiştik:

    
        int *ptr;
        ptr = &my_array[0];       /* pointer'ımızı array'imizdeki ilk
                                     integer'a point ederiz */
    

Orada da belirttiğimiz gibi, pointer variable'ının type'ı, array'in ilk element'inin type'ı ile eşleşmelidir.

Ayrıca, bir array'i manipüle etmek için tasarlanmış bir function'ın formal parameter'ı olarak bir pointer kullanabiliriz. Örneğin:

Verilen:

    
        int array[3] = {'1', '5', '7'};
        void a_func(int *p);
    

Bazı yazılımcılar function prototype'ını şu şekilde yazmayı tercih edebilir:

    
       void a_func(int p[]);
    

bu da bu function'ı kullanabilecek diğer kişilere, function'ın bir array'in element'lerini manipüle etmek üzere tasarlandığını gösterme eğilimindedir. Elbette, her iki durumda da, function prototype'ında veya definition'ında hangi notasyonun kullanıldığından bağımsız olarak, gerçekte aktarılan şey, array'in ilk element'ine olan bir pointer'ın value'sudur. Eğer array notasyonu kullanılırsa, tüm array'i değil, yalnızca ilk element'in address'ini aktardığımız için array'in gerçek boyutunu aktarmaya gerek olmadığını unutmayın.

Şimdi 2 dimensional array problemine dönelim. Geçen bölümde belirtildiği gibi, C bir 2 dimensional array'i, one dimensional array'lerden oluşan bir array olarak yorumlar. Durum böyle olunca, integer'lardan oluşan bir 2 dimensional array'in ilk element'i, integer'lardan oluşan bir one dimensional array'dir. Ve integer'lardan oluşan bir two dimensional array'e yönelik bir pointer, bu data type'ına bir pointer olmalıdır. Bunu gerçekleştirmenin bir yolu, "typedef" keyword'ünün kullanılmasıdır. typedef, belirtilen bir data type'ına yeni bir ad atar. Örneğin:

    
        typedef unsigned char byte;
    

**byte** adının **unsigned char** type'ı anlamına gelmesini sağlar. Böylece

    
        byte b[10];     unsigned character'lardan oluşan bir array olur.
    

typedef declaration'ında, **byte** kelimesinin, normalde **unsigned char**'ımızın adı olacak olan şeyin yerini aldığına dikkat edin. Yani, **typedef** kullanma kuralı, bu data type'ı için yeni adın, data type'ının definition'ında kullanılan ad olmasıdır. Böylece:

    
        typedef int Array[10];
    

Array, 10 integer'dan oluşan bir array için bir data type'ı haline gelir. yani **Array my\_arr;** ifadesi **my\_arr**'i 10 integer'lık bir array olarak deklare eder ve **Array arr2d\[5\];** ifadesi **arr2d**'yi her biri 10 integer'lık 5 array'den oluşan bir array yapar.

Ayrıca **Array \*p1d;** ifadesinin, **p1d**'yi 10 integer'lık bir array'e bir pointer yaptığını unutmayın. **\*p1d**, **arr2d** ile aynı type'a point ettiğinden, two dimensional array **arr2d**'nin address'ini, 10 integer'lık bir one dimensional array'e pointer olan **p1d**'ye atamak kabul edilebilirdir. yani **p1d = &arr2d\[0\];** veya **p1d = arr2d;** ifadelerinin her ikisi de doğrudur.

Pointer'ımız için kullandığımız data type'ı 10 integer'lık bir array olduğundan, **p1d**'yi 1 artırmanın onun value'sunu **10\*sizeof(int)** kadar değiştirmesini bekleriz ki öyle de olur. Yani, **sizeof(\*p1d)** 20'dir. Bunu, basit ve kısa bir program yazıp çalıştırarak kendiniz de kanıtlayabilirsiniz.

Şimdi, typedef kullanmak okuyucu için işleri daha net ve programcı için daha kolay hale getirse de aslında gerekli değildir. İhtiyacımız olan şey, **typedef** keyword'üne ihtiyaç duymadan **p1d** gibi bir pointer'ı deklare etmenin bir yoludur. Bunun yapılabileceği ve

    
        int (*p1d)[10];
    

ifadesinin uygun declaration olduğu görülür; yani buradaki **p1d**, tıpkı Array type'ı kullanılarak yapılan declaration'da olduğu gibi 10 integer'lık bir array'e bir pointer'dır. Bunun şundan farklı olduğuna dikkat edin:

    
        int *p1d[10];
    

ki bu da **p1d**'yi, **int** type'ına yönelik 10 pointer'lık bir array'in adı yapacaktır.

[Bölüm 9: Pointer'lar ve Memory'nin Dynamic Allocation'ı](ch9x.md)

[İçindekiler'e Geri Dön](pointers.md)
