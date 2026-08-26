BÖLÜM 7: Multi-Dimensional Array'ler Hakkında Daha Fazlası
----------------------------------------------------------

Önceki bölümde, verilen

    
        #define ROWS 5
        #define COLS 10
    
        int multi[ROWS][COLS];
    

durumunda, **multi** array'inin tekil element'lerine şu iki yöntemden biriyle erişebileceğimizi belirtmiştik:

    
        multi[row][col]
    

veya

    
        *(*(multi + row) + col)
    

Neler olup bittiğini daha iyi anlamak için, şunun yerine:

    
        *(multi + row)
    

**X** koyalım, yani:

    
        *(X + col)
    

Şimdi, buradan ifadenin dereference edilmesi ve **col**'un bir integer olduğunu bilmemiz nedeniyle **X**'in bir pointer gibi olduğunu görürüz. Burada kullanılan aritmetik, "pointer arithmetic" adı verilen özel bir çeşittir. Bu, bir integer array'den bahsettiğimiz için, **X + col + 1** tarafından point edilen address'in (yani bunun value'sunun), **X + col** address'inden **sizeof(int)** kadar büyük olması gerektiği anlamına gelir.

2 dimensional array'lerin memory layout'unu bildiğimiz için, yukarıda kullanılan **multi + row** ifadesinde, **multi + row + 1**'in value olarak bir sonraki satırı "point etmesi" için gereken miktar kadar artması gerektiğini belirleyebiliriz; bu da bu durumda **COLS \* sizeof(int)**'e eşit bir miktar olacaktır.

Bu da, eğer **\*(\*(multi + row) + col)** ifadesinin run time'da doğru şekilde evaluate edilmesi isteniyorsa, compiler'ın **COLS**'un value'sunu, yani 2. dimension'ı hesaba katan bir kod üretmesi gerektiği anlamına gelir. İki ifade biçiminin denkliği nedeniyle, bu durum ister buradaki gibi pointer ifadesini, ister **multi\[row\]\[col\]** array ifadesini kullanıyor olalım geçerlidir.

Böylece, her iki ifadeyi de evaluate etmek için toplam 5 value'nun bilinmesi gerekir:

1.  Array'in ilk element'inin, **multi** ifadesi (yani array'in ismi) tarafından döndürülen address'i.
2.  Array'in element'lerinin type'ının boyutu, bu durumda **sizeof(int)**.
3.  Array'in 2. dimension'ı.
4.  İlk dimension için spesifik index value'su, bu durumda **row**.
5.  İkinci dimension için spesifik index value'su, bu durumda **col**.

Tüm bunları göz önünde bulundurarak, önceden deklare edilmiş bir array'in element value'larını manipüle edecek bir function tasarlama problemini ele alalım. Örneğin, **multi** array'inin tüm element'lerini 1 value'suna eşitleyen bir function:

    
    
        void set_value(int m_array[][COLS])
        {
            int row, col;
            for (row = 0; row < ROWS; row++)
            {
                for (col = 0; col < COLS; col++)
                {
                    m_array[row][col] = 1;
                }
            }
        }
    
    

Ve bu function'ı çağırmak için ardından şunu kullanırız:

    
        set_value(multi);
    

Şimdi, function içinde, for loop'larının sınırlarını belirleyen, ROWS ve COLS ile #define edilmiş value'ları kullandık. Fakat bu #define'lar, compiler açısından sadece constant'lardır; yani function içinde onları array boyutuyla ilişkilendirecek hiçbir şey yoktur. Elbette **row** ve **col** local variable'lardır. Formal parameter tanımı, compiler'ın run time'da aktarılacak pointer value'su ile ilişkili özellikleri belirlemesine izin verir. İlk dimension'a gerçekten ihtiyacımız yoktur ve daha sonra görüleceği üzere, alışkanlık veya tutarlılık gereği onu parameter tanımı içinde tanımlamamayı tercih edeceğimiz durumlar olabilir; ben de burada onu kullanmadım. Ancak, parameter ifadesinde gösterildiği gibi ikinci dimension kullanılmalıdır. Bunun nedeni, açıklandığı gibi **m\_array\[row\]\[col\]**'un evaluate edilmesinde buna ihtiyaç duymamızdır. Parameter data type'ını (bu durumda **int**) tanımlarken ve row ile col için otomatik variable'lar for loop'larında tanımlanmışken, tek bir parameter kullanılarak yalnızca tek bir value aktarılabilir. Bu durumda, call ifadesinde belirtildiği gibi bu, **multi**'nin value'sudur; yani genellikle array'e bir pointer olarak adlandırılan ilk element'in address'idir. Bu nedenle, compiler'ı 2. dimension hakkında bilgilendirmenin tek yolu, onu parameter tanımına açıkça dahil etmektir.

Aslında genel olarak, multi-dimensional array'lerle çalışırken birden büyük tüm dimension'lara ihtiyaç duyulur. Yani eğer 3 dimensional array'lerden bahsediyorsak, parameter tanımında 2. ve 3. dimension'lar belirtilmelidir.

[Bölüm 8: Array'lere Pointer'lar](ch8x.md)

[İçindekiler Tablosuna Geri Dön](pointers.md)
