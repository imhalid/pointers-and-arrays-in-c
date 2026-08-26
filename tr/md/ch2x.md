BÖLÜM 2: Pointer type'ları ve Array'ler
---------------------------------------

Tamam, devam edelim. Şunun gibi, bir pointer'ın işaret ettiği variable'ın _**type**_'ını neden belirlememiz gerektiğini düşünelim:

    
         int *ptr;
    

Bunu yapmanın bir nedeni, daha sonra ptr bir şeye "işaret ettiğinde", eğer şöyle yazarsak:

    
        *ptr = 2;
    

compiler, **ptr** tarafından işaret edilen o memory konumuna kaç byte kopyalayacağını bilecektir. Eğer **ptr** bir integer'ı işaret edecek şekilde deklare edildiyse, 4 byte kopyalanacaktır. Benzer şekilde, float'lar ve double'lar için de uygun sayıda kopyalama yapılacaktır. Ancak, pointer'ın işaret ettiği type'ı tanımlamak, compiler'ın kodu yorumlaması için başka ilginç yollar da sağlar. Örneğin, memory'de yan yana duran on integer'dan oluşan bir blok düşünün. Yani, 10 integer'ı tutmak için 40 byte'lık memory ayrılmıştır.

Şimdi, integer pointer'ımız **ptr**'ı bu integer'ların ilkine işaret ettirdiğimizi varsayalım. Dahası, o integer'ın decimal 100 memory konumunda bulunduğunu farz edelim. Şöyle yazdığımızda ne olur:

    
        ptr + 1;
     
    

Compiler bunun bir pointer olduğunu (yani value'sunun bir address olduğunu) ve bir integer'ı işaret ettiğini (mevcut address'i olan 100, bir integer'ın address'idir) 'bildiği' için, **ptr**'a 1 yerine 4 ekler; böylece pointer, 104 memory konumundaki **bir sonraki** **integer**'ı 'işaret eder'. Benzer şekilde, eğer **ptr** bir short pointer'ı olarak deklare edilmiş olsaydı, 1 yerine 2 ekleyecekti. Aynı durum float'lar, double'lar gibi diğer data type'ları veya struct'lar gibi kullanıcı tanımlı data type'ları için de geçerlidir. Bu, şüphesiz normalde düşündüğümüz 'toplama' ile aynı şey değildir. C'de bu, daha sonra tekrar döneceğimiz bir terim olan 'pointer arithmetic' kullanılarak yapılan toplama olarak adlandırılır.

Benzer şekilde, **++ptr** ve **ptr++** ifadelerinin her ikisi de **ptr + 1** ile eşdeğer olduğundan (program içinde **ptr**'ın artırıldığı an farklı olabilse de), pre- veya post- olarak unary ++ operatörü kullanılarak bir pointer'ın artırılması, sakladığı address'i, "type" işaret edilen object'in type'ı olmak üzere sizeof(type) değeri kadar artırır (yani bir integer için 4).

Memory'de bitişik olarak yer alan 10 integer'lık bir blok, tanım gereği bir integer array'i olduğundan, bu durum array'ler ve pointer'lar arasında ilginç bir ilişkiyi ortaya çıkarır.

Aşağıdakini düşünelim:

    
        int my_array[] = {1,23,17,4,-5,100}; 
    

Burada 6 integer içeren bir array'imiz var. Bu integer'ların her birine **my_array**'e ait bir subscript vasıtasıyla, yani **my_array[0]** ile **my_array[5]** arasını kullanarak erişiriz. Ancak, alternatif olarak onlara bir pointer aracılığıyla şu şekilde de erişebiliriz:

    
        int *ptr;
        ptr = &my_array[0];       /* pointer'ımızı array'imizdeki ilk
                                     integer'a işaret ettirelim */ 
    

Ve sonra array'imizi ya array notasyonunu kullanarak ya da pointer'ımızı dereference ederek yazdırabiliriz. Aşağıdaki kod bunu göstermektedir:

    
    -----------  Program 2.1  -----------------------------------
    
    /* Program 2.1 from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    
    int my_array[] = {1,23,17,4,-5,100};
    int *ptr;
    
    int main(void)
    {
        int i;
        ptr = &my_array[0];     /* pointer'ımızı array'in ilk
                                           element'ine işaret ettirelim */
        printf("\n\n");
        for (i = 0; i < 6; i++)
        {
          printf("my_array[%d] = %d   ",i,my_array[i]);   /*<-- A */
          printf("ptr + %d = %d\n",i, *(ptr + i));        /*<-- B */
        }
        return 0;
    }
    

Yukarıdaki programı compile edip çalıştırın; A ve B satırlarına ve programın her iki durumda da aynı value'ları yazdırdığına dikkat edin. Ayrıca B satırında pointer'ımızı nasıl dereference ettiğimizi gözlemleyin; yani önce ona i ekledik ve ardından yeni pointer'ı dereference ettik. B satırını şu şekilde değiştirelim:

    
        printf("ptr + %d = %d\n",i, *ptr++);
    

ve tekrar çalıştırın... ardından şu şekilde değiştirin:

    
        printf("ptr + %d = %d\n",i, *(++ptr));
    

ve bir kez daha deneyin. Her seferinde sonucu tahmin etmeye çalışın ve gerçek sonucu dikkatlice inceleyin.

C'de standart, **&var_name[0]** kullanabileceğimiz her yerde bunu **var_name** ile değiştirebileceğimizi belirtir; dolayısıyla kodumuzda yazdığımız yerdeki:

    
        ptr = &my_array[0];
    

yerine şunu yazabiliriz:

    
        ptr = my_array;
    

ve aynı sonucu elde ederiz.

Bu durum, birçok kaynağın bir array isminin bir pointer olduğunu belirtmesine yol açar. Ben zihnen "array isminin, array'deki ilk element'in address'i" olduğunu düşünmeyi tercih ediyorum. Birçok yeni başlayan (öğrenirken ben dahil), bunu bir pointer olarak düşünerek kafa karışıklığı yaşama eğilimindedir. Örneğin, şöyle yazabilirken:

    
        ptr = my_array;
    

şöyle yazamayız:

    
        my_array = ptr;
    

Bunun nedeni, **ptr** bir variable iken, **my_array**'in bir constant olmasıdır. Yani, **my_array[]** deklare edildikten sonra **my_array**'in ilk element'inin saklanacağı konum değiştirilemez.

Daha önce "lvalue" terimini tartışırken, K&R-2'den şu alıntıyı yapmıştım:

> "Bir **object**, isimlendirilmiş bir storage alanıdır; bir **lvalue** ise bir object'e reference eden bir ifadedir".

Bu ilginç bir soruyu ortaya çıkarır. **my_array** isimlendirilmiş bir storage alanı olduğuna göre, yukarıdaki assignment ifadesinde **my_array** neden bir lvalue değildir? Bu sorunu çözmek için bazıları **my_array**'i bir "unmodifiable lvalue" olarak adlandırır.

Yukarıdaki örnek programı,

    
        ptr = &my_array[0];
    

ifadesini

    
        ptr = my_array;
    

olarak değiştirerek modifiye edin ve sonuçların aynı olduğunu doğrulamak için tekrar çalıştırın.

Şimdi, yukarıda kullanılan **ptr** ve **my_array** isimleri arasındaki farkı biraz daha derinlemesine inceleyelim. Bazı yazarlar bir array'in ismini bir _**constant**_ pointer olarak adlandırır. Bununla ne kast ediyoruz? Bu anlamda "constant" terimini anlamak için, "variable" terimine dair tanımımıza geri dönelim. Bir variable deklare ettiğimizde, uygun type'taki value'yu tutmak için memory'de bir yer ayırırız. Bu yapıldıktan sonra, variable'ın ismi iki yoldan biriyle yorumlanabilir. Assignment operatörünün sol tarafında kullanıldığında, compiler bunu, assignment operatörünün sağ tarafının değerlendirilmesiyle elde edilen value'nun taşınacağı memory konumu olarak yorumlar. Ancak, assignment operatörünün sağ tarafında kullanıldığında, bir variable'ın ismi, o variable'ın value'sunu tutmak için ayrılmış olan memory address'inde saklanan içerik anlamına gelecek şekilde yorumlanır.

Bunu aklımızda tutarak, şimdi şunun gibi en basit constant'ları ele alalım:

    
        int i, k;
        i = 2;
    

Burada, **i** bir variable iken ve memory'nin data kısmında yer kaplarken, **2** bir constant'tır ve bu nedenle, memory'nin data segment'inde yer ayırmak yerine, doğrudan memory'nin code segment'ine gömülür. Yani, **k = i;** gibi bir şey yazmak compiler'a, run time'da **k**'ye taşınacak value'yu belirlemek için **&i** memory konumuna bakacak bir kod oluşturmasını söylerken; **i = 2;** tarafından oluşturulan kod ise sadece **2**'yi kodun içine yerleştirir ve data segment'ine herhangi bir reference'ta bulunulmaz. Yani, hem **k** hem de **i** birer object'tir, ancak **2** bir object değildir.

Benzer şekilde, yukarıdaki örnekte, **my_array** bir constant olduğundan, compiler array'in kendisinin nereye saklanacağını belirledikten sonra, şunu gördüğünde **my_array[0]**'ın address'ini "bilir":

    
        ptr = my_array;
    

ve bu address'i basitçe code segment'inde bir constant olarak kullanır; bunun ötesinde data segment'ine herhangi bir reference'ta bulunulmaz.

Burası, Bölüm 1'deki Program 1.1'de kullanılan **(void *)** ifadesinin kullanımını daha ayrıntılı açıklamak için iyi bir yer olabilir. Gördüğümüz gibi, çeşitli type'larda pointer'lara sahip olabiliriz. Şimdiye kadar integer'lara işaret eden pointer'ları ve character'lara işaret eden pointer'ları tartıştık. Gelecek bölümlerde structure'lara işaret eden pointer'ları ve hatta pointer to pointer'ları öğreneceğiz.

Ayrıca farklı sistemlerde bir pointer'ın boyutunun değişebileceğini öğrendik. Görünüşe göre, bir pointer'ın boyutu, işaret ettiği object'in data type'ına bağlı olarak da değişiklik gösterebilir. Bu nedenle, bir long integer'ı short integer type'ındaki bir variable'a assign etmeye çalışırken sorun yaşayabileceğiniz gibi, çeşitli type'lardaki pointer'ların value'larını diğer type'lardaki pointer variable'larına assign etmeye çalışırken de sorunlarla karşılaşabilirsiniz.

Bu sorunu en aza indirmek için C, void type'ında bir pointer sağlar. Şöyle yazarak böyle bir pointer deklare edebiliriz:

    
    void *vptr;
    

Bir void pointer, bir bakıma generic bir pointer'dır. Örneğin C, bir integer type'ına işaret eden pointer ile bir character type'ına işaret eden pointer'ın karşılaştırılmasına izin vermezken; bunların her ikisi de bir void pointer ile karşılaştırılabilir. Elbette, diğer variable'larda olduğu gibi, uygun durumlarda bir pointer type'ından diğerine dönüşüm yapmak için cast'ler kullanılabilir. Bölüm 1'deki Program 1.1'de, integer pointer'larını, %p conversion specification'ı ile uyumlu hale getirmek için void pointer'lara cast ettim. Sonraki bölümlerde, orada belirtilen nedenlerden dolayı başka cast'ler de yapılacaktır.

Evet, sindirilmesi gereken pek çok teknik konu var ve yeni başlayan birinin ilk okumada bunların hepsini anlamasını beklemiyorum. Zamanla ve deneyerek geri dönüp ilk 2 bölümü tekrar okumak isteyeceksiniz. Ama şimdilik, pointer'lar, character array'leri ve string'ler arasındaki ilişkiye geçelim.

[Bölüm 3: Pointer'lar ve String'ler](ch3x.md)

[İçindekiler Tablosuna Geri Dön](pointers.md)
