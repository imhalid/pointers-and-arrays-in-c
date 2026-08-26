BÖLÜM 1: Pointer nedir?
-----------------------

C'ye yeni başlayanların zor bulduğu konulardan biri de pointer kavramıdır. Bu rehberin amacı, bu yeni başlayanlar için pointer'lara ve pointer'ların kullanımına bir giriş sunmaktır.

Yeni başlayanların pointer'larla ilgili sorun yaşamasının temel nedeninin, (C'de kullanıldıkları şekliyle) variable'lar hakkında zayıf veya yetersiz bir anlayışa sahip olmaları olduğunu sıklıkla gördüm. Bu yüzden genel olarak C variable'ları hakkında bir tartışma ile başlıyoruz.

Bir program'daki variable, ismi olan ve value'su değişebilen bir şeydir. compiler ve linker'ın bunu ele alma yöntemi, o variable'ın value'sunu tutmak için bilgisayar içinde belirli bir memory bloğu atamasıdır. Bu bloğun boyutu, variable'ın değişmesine izin verilen aralığa bağlıdır. Örneğin, 32 bit PC'lerde bir integer variable'ın boyutu 4 byte'tır. Daha eski 16 bit PC'lerde integer'lar 2 byte'tı. C'de, integer gibi bir variable type'ının boyutu tüm makine type'larında aynı olmak zorunda değildir. Ayrıca C'de birden fazla integer variable type'ı vardır. C ile ilgili herhangi bir temel metinde okuyabileceğiniz integer'lar, long integer'lar ve short integer'lar vardır. Bu belge, 4 byte integer'lara sahip 32 bitlik bir sistemin kullanıldığını varsaymaktadır.

Sisteminizdeki çeşitli integer type'larının boyutunu öğrenmek istiyorsanız, aşağıdaki kodun çalıştırılması size bu bilgiyi verecektir.

	#include <stdio.h>
	
	int main()  
	{  
		printf("size of a short is %d\n", sizeof(short));  
		printf("size of a int is %d\n", sizeof(int));  
		printf("size of a long is %d\n", sizeof(long));  
	}

Bir variable declare ettiğimizde compiler'a iki şeyi bildiririz: variable'ın adı ve variable'ın type'ı. Örneğin, yazarak **k** adında integer type'ında bir variable declare ederiz:

    
        int k; 
    

Bu ifadenin "int" kısmını gördüğünde compiler, integer'ın value'sunu tutmak için (bir PC'de) memory'den 4 byte ayırır. Ayrıca bir sembol tablosu oluşturur. Bu tabloya **k** sembolünü ve o 4 byte'ın ayrıldığı memory'deki göreceli address'i ekler.

Böylece, daha sonra eğer şöyle yazarsak:

    
        k = 2; 
    

bu ifade run time'da execute edildiğinde, 2 value'sunun **k**'nin value'sunun saklanması için ayrılmış olan o memory konumuna yerleştirilmesini bekleriz. C'de, integer **k** gibi bir variable'ı bir "object" olarak adlandırırız.

Bir bakıma, **k** object'i ile ilişkilendirilmiş iki "value" vardır. Biri orada saklanan integer'ın value'sudur (yukarıdaki örnekte 2) ve diğeri memory konumunun "value'sudur", yani **k**'nin address'idir. Bazı metinler bu iki value'yu sırasıyla _**rvalue**_ (right value, "are value" olarak telaffuz edilir) ve _**lvalue**_ (left value, "el value" olarak telaffuz edilir) terimleriyle adlandırır.

Bazı dillerde lvalue, assignment operatörü '='in sol tarafında bulunmasına izin verilen value'dur (yani sağ tarafın değerlendirilme sonucunun ulaştığı address). rvalue ise assignment ifadesinin sağ tarafında olan şeydir, yukarıdaki **2** gibi. rvalue'lar assignment ifadesinin sol tarafında kullanılamaz. Dolayısıyla: **2 = k**; geçersizdir.

Aslında, yukarıdaki "lvalue" tanımı C için biraz modifiye edilmiştir. K&R II'ye (sayfa 197) göre: \[1\]

> "Bir _**object**_, isimlendirilmiş bir depolama alanıdır; bir _**lvalue**_ ise bir object'e atıfta bulunan bir ifadedir."

Ancak bu noktada, ilk başta alıntılanan yukarıdaki tanım yeterlidir. Pointer'lara daha aşina hale geldikçe bu konuda daha fazla ayrıntıya gireceğiz.

Tamam, şimdi şunu ele alalım:

    
       int j, k; 
    
        k = 2; 
        j = 7;    <-- satır 1 
        k = j;    <-- satır 2 
    

Yukarıdakinde compiler, satır 1'deki **j**'yi **j** variable'ının address'i (kendi lvalue'su) olarak yorumlar ve 7 value'sunu bu address'e kopyalamak için kod oluşturur. Ancak satır 2'de **j**, kendi rvalue'su olarak yorumlanır (çünkü assignment operatörü '='in sağ tarafındadır). Yani burada **j**, **j** için ayrılmış olan memory konumunda _**saklanan**_ value'ya (bu durumda 7) atıfta bulunur. Böylece 7, **k**'nin lvalue'su tarafından belirtilen address'e kopyalanır.

Bu örneklerin tümünde 4 byte'lık integer'lar kullanıyoruz, bu nedenle rvalue'ların bir saklama konumundan diğerine tüm kopyalama işlemi 4 byte kopyalanarak yapılır. İki byte'lık integer'lar kullanıyor olsaydık, 2 byte kopyalıyor olurduk.

Şimdi, bir lvalue (bir address) tutmak için tasarlanmış bir variable istemek için bir nedenimiz olduğunu varsayalım. Böyle bir value'yu tutmak için gereken boyut sisteme bağlıdır. Toplam 64K memory'ye sahip daha eski masaüstü bilgisayarlarda, memory'deki herhangi bir noktanın address'i 2 byte içinde barındırılabilir. Daha fazla memory'ye sahip bilgisayarlar, bir address tutmak için daha fazla byte gerektirecektir. Depolamak istediğimiz şeyin bir address olduğunu compiler'a bildirmenin bir yoluna sahip olduğumuz sürece, gereken gerçek boyut çok da önemli değildir.

Böylece bir variable'a bir _**pointer variable**_ denir (nedenleri umarız birazdan daha netleşecektir). C'de bir pointer variable tanımladığımızda, bunu adının önüne bir yıldız işareti koyarak yaparız. C'de ayrıca pointer'ımıza, bu durumda pointer'ımızda depolayacağımız address'te saklanan veri type'ına atıfta bulunan bir type veririz. Örneğin, şu variable declaration'ını ele alalım:

    
       int *ptr;
    

**ptr** variable'ımızın adıdır (tıpkı **k**'nin integer variable'ımızın adı olması gibi). '*' işareti compiler'a bir pointer variable istediğimizi bildirir, yani memory'de bir address depolamak için kaç byte gerekiyorsa o kadarını ayırır. **int** ise pointer variable'ımızı bir integer'ın address'ini depolamak için kullanmayı amaçladığımızı belirtir. Böyle bir pointer'ın bir integer'a "point ettiği" söylenir. Ancak, **int k;** yazdığımızda **k**'ye bir value vermediğimize dikkat edin. Eğer bu tanım herhangi bir function'ın dışında yapılırsa, ANSI uyumlu compiler'lar bunu sıfıra initialize edecektir. Benzer şekilde, **ptr**'nin de bir value'su yoktur, yani yukarıdaki declaration'da içine bir address depolamadık. Bu durumda, yine declaration herhangi bir function'ın dışındaysa, herhangi bir C object'ine veya function'ına point etmeyeceği garanti edilecek şekilde bir value'ya initialize edilir. Bu şekilde initialize edilen bir pointer'a "null" pointer denir.

Bir null pointer için kullanılan gerçek bit deseni, kodun geliştirildiği belirli sisteme bağlı olduğundan sıfıra eşit olabilir veya olmayabilir. Kaynak kodunu çeşitli sistemlerdeki çeşitli compiler'lar arasında uyumlu hale getirmek için, bir null pointer'ı temsil etmek amacıyla bir makro kullanılır. Bu makro NULL adını taşır. Dolayısıyla, ptr = NULL gibi bir assignment ifadesiyle olduğu gibi, NULL makrosunu kullanarak bir pointer'ın value'sunu ayarlamak, pointer'ın bir null pointer haline gelmesini garanti eder. Benzer şekilde, tıpkı **if(k == 0)** ifadesindeki gibi bir integer sıfır value'su için test yapılabileceği gibi, **if (ptr == NULL)** kullanarak bir null pointer için de test yapabiliriz.

Ancak yeni variable'ımız **ptr**'yi kullanmaya geri dönelim. Şimdi **ptr** içinde integer variable'ımız **k**'nin address'ini depolamak istediğimizi varsayalım. Bunu yapmak için unary **&** operatörünü kullanırız ve şöyle yazarız:

    
        ptr = &k; 
    

**&** operatörünün yaptığı şey, **k** assignment operatörü '='in sağ tarafında olsa bile, **k**'nin lvalue'sunu (address'ini) almak ve bunu pointer'ımız ptr'nin içeriğine kopyalamaktır. Şimdi ptr'nin **k**'ye "point ettiği" söylenir. Bizimle kalın, tartışmamız gereken sadece bir operatör daha kaldı.

"dereferencing operatörü" yıldız işaretidir ve aşağıdaki gibi kullanılır:

    
        *ptr = 7; 
    

**ptr** tarafından point edilen address'e 7'yi kopyalayacaktır. Böylece, eğer **ptr** **k**'ye "point ediyorsa" (**k**'nin address'ini içeriyorsa), yukarıdaki ifade **k**'nin value'sunu 7 yapacaktır. Yani, '*' işaretini bu şekilde kullandığımızda, pointer'ın kendi value'suna değil, ptr'nin point ettiği şeyin value'suna atıfta bulunuyoruz.

Benzer şekilde, şöyle yazabiliriz:

    
     printf("%d\n",*ptr); 
    

**ptr** tarafından point edilen address'te saklanan integer value'sunu ekrana yazdırmak için.

Tüm bu şeylerin birbiriyle nasıl uyum sağladığını görmenin bir yolu, aşağıdaki program'ı çalıştırmak ve ardından kodu ve çıktıyı dikkatlice incelemektir.

    
    ------------ Program 1.1 --------------------------------- 
    
    /* PTRTUT10.TXT dosyasından Program 1.1   6/10/97 */
    
    #include <stdio.h>
    
    int j, k;
    int *ptr;
    
    int main(void)
    {
        j = 1;
        k = 2;
        ptr = &k;
        printf("\n");
        printf("j has the value %d and is stored at %p\n", j, (void *)&j);
        printf("k has the value %d and is stored at %p\n", k, (void *)&k);
        printf("ptr has the value %p and is stored at %p\n", ptr, (void *)&ptr);
        printf("The value of the integer pointed to by ptr is %d\n", *ptr);
    
        return 0;
    }
    

Not: C'nin burada kullanılan **(void \*)** ifadesini gerektiren yönlerini henüz tartışmadık. Şimdilik bunu test kodunuza dahil edin. Bu ifadenin arkasındaki nedeni daha sonra açıklayacağız.

* * *

Gözden geçirmek gerekirse:

*   Bir variable, ona bir type ve bir isim verilerek declare edilir (örneğin **int k;**)
*   Bir pointer variable, ona bir type ve bir isim verilerek declare edilir (örneğin **int \*ptr**); burada yıldız işareti compiler'a **ptr** adlı variable'ın bir pointer variable olduğunu söyler ve type da compiler'a pointer'ın hangi type'a point edeceğini belirtir (bu durumda integer).
*   Bir variable declare edildikten sonra, **&k** ifadesinde olduğu gibi adının önüne unary **&** operatörü getirilerek address'i elde edilebilir.
*   **\*ptr** ifadesinde olduğu gibi unary '*' operatörünü kullanarak bir pointer'ı "dereference" edebiliriz, yani point ettiği şeyin value'suna atıfta bulunabiliriz.
*   Bir variable'ın "lvalue"su, kendi address'inin value'sudur, yani memory'de nerede saklandığıdır. Bir variable'ın "rvalue"su ise o variable'da (o address'te) saklanan value'dur.

### Bölüm 1 için Reference'lar:

1.  "The C Programming Language" 2nd Edition  
    B. Kernighan ve D. Ritchie  
    Prentice Hall  
    ISBN 0-13-110362-8  
    

[Bölüm 2: Pointer Type'ları ve Array'ler](ch2x.md)

[İçindekiler Tablosuna Geri Dön](pointers.md)
