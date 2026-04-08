---
layout: post
title: Uzaktan kumanda performansını tanımlamak
lang: tr
tags: 
  - "Yayın akışı"
  - "Uzaktan kumanda"
  - "Performans"
  - "FPS"
  - "Teamviewer"
summary: «Performans» sözcüğü alana göre farklı anlamlar taşır. Uzaktan kumandada ekran kalitesi, gecikme ve yenileme hızı iç içedir. Endonezya’daki saha deneyimi ve sektörde performansı iyi bilinen çözümleri kullanırken hissedilen beklenti ile gerçek arasındaki fark NovaLINK projesinin başlangıç noktası oldu. Her ortama kusursuz uyan yazılım yok; ancak hedeflediğimiz performansa ulaşmak için test ve geliştirmeyi sürdürüyoruz.

---

**«İyi performans»** ifadesi bağlama göre bambaşka anlamlar alır. Oyunlarda FPS ve tepki süresi; veritabanlarında işlem hacmi ve kararlılık; ağ ekipmanlarında işlem kapasitesi ve paket gecikmesi öne çıkar. Aynı kelime için alana özgü tanım koymazsanız beklenti ile sonuç kolayca kayar. Çözüm alırken «performans»ı tek cümlede yazmak, sonra sorumluluğu netleştirmeyi zorlaştırır. Uzaktan kumanda ve ekran akışı da öyle: OTT veya görüntülü görüşme ile gerçek zamanlı aktarım açısından örtüşür; ancak fare ve klavyenin anında yansıması «sadece izleme» akışından farklı bir yük getirir. Akıcı görüntü yetmez; kontrol tepkisini de değerlendirmek gerekir. Buradaki performans tek sayı değil; birden çok öğe aynı anda ölçülür.

Sık sayılan öğeler: ekran kalitesi (sıkıştırma, bit hızı, renk); gecikme; yenileme hızı; bant genişliği düşünce kalite/hız dengesi; paket kaybına dayanıklılık; düşük bantta davranış; istemci ve sunucu CPU/GPU yükü — bunların birleşimi «genel performans»tır. Tek bir kıyas sayısı yeterli değildir.

**«Ünlü ve pahalı ürün»** ile **«iş ortamımdaki öznel performans»** her zaman örtüşmez. Pazar payı ve özellik listeleri seçimde yardımcı olur; sonunda her şirket kendi ağı ve iş akışında doğrulamalıdır. Bu yüzden soyut üstünlük tartışmasından çok ölçüm koşullarını şeffaf paylaşmayı yeğliyoruz. İyi «performans» sıralamadaki bir satırdan çok, karşılaştığımız kısıtları ne kadar dürüstçe gösterip azalttığımıza yakındır.

Geçmişte Endonezya’da (Purbalingga) bir şirkete ERP kurduk. Ülke mobil odaklı hızla gelişiyor; başkent ile bölgeler arası uçurum büyük. Müşterinin interneti saatlere göre çok değişiyor, kopmalar sık — sabit hat varsayan iş biçimini aynen taşımak zordu. Bazen günlükler yetmiyor, ekranı izleyerek adımları yeniden üretmek gerekiyordu. Her zaman yerinde ziyaret mümkün olmadığından uzaktan ayar kontrolü, hata yeniden üretimi ve kullanıcı eğitimi sık oldu. Oturum yavaşsa sorunun ağda mı uygulamada mı olduğunu ayırmak zorlaşıyor. Bu koşullarda «uzaktan kumandada da performansı iyi» bilinen bir çözüm seçmek mantıklıydı; uzaktan destekte güçlü marka imajına sahip Teamviewer’ı benimsedik.

[![](
https://haninpost.com/wp-content/uploads/2024/12/%E2%96%B2%EC%95%84%EC%84%B8%EC%95%88ASEAN-%EC%97%AD%EB%82%B4-%EC%A3%BC%EB%B3%80%EA%B5%AD-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9D%B8%ED%84%B0%EB%84%B7-%EC%86%8D%EB%8F%841.jpg)Endonezya mobil internet hızı hâlâ diğer ülkelerin gerisinde – Haninpost](https://haninpost.com/archives/103545)

Teamviewer çözümü kapsam, ekosistem ve kurumsal destekte güçlüdür; lisans maliyeti de yüksektir. Ödediğimiz karşılığı en azından uzak ekranda tepki ve netlikte görmeyi bekledik. Sahada kullanım sıklıkla beklentinin altında kaldı: zayıf hatta gecikme birikti, ekran kesildi veya bulanıklaştı; menü açıp form doldurmak bile sıkıcı hissedilebildi. Ürünün küresel teknik değerini inkâr etmiyoruz — doğrulanmış özellikler, uzun operasyon, çoklu platform, ekip yönetimi hâlâ değerli. Ancak bizim ortam ve iş örüntümüzde «pahalı = hızlı ve pürüzsüz» beklentisi ile gerçek arasında boşluk vardı; bu boşluk yeni projeyi tetikledi. «Neden bizim koşullarda bu kadar yavaş hissediliyor?» sorusundan çıktık. **İyi ürün + uygun olmayan ortam = farklı öznel deneyim; ortam ne kadar zorsa yazılımın hat ve uç cihaz sınırları içinde ne kadar akıllı çalıştığı o kadar önemli.**

![]({{site.baseurl}}/public/post_imgs/260409/teamviewer_plan.jpg)

Bu girişim NovaLINK. Amaç «bir uzaktan kumanda programı daha» değil. Ekran kalitesi, gecikme, yenileme hızı, zayıf ağda davranış, kaynak kullanımı dahil sahadaki önceliklerimize göre performansı tanımlıyor ve ölçüyoruz. Akış hattı tasarımı ve ekran değişimine göre aktarım stratejileri bu tanıma bağlı. Özellik eklemeden önce çekirdek yolun kriterlerimizi geçtiğini doğruluyoruz. Çeşitli senaryolarda test ediyor, gerçek kullanıma yakın koşullarla darboğaz arıyoruz. Aynı çözünürlükte daha az trafikte öznel fark, kayıplı bağlantıda ekranın ne sıklıkla bozulduğu gibi maddeleri hem sayı hem his ile kontrol ediyoruz. Sabit test ortamı ve tekrarlı ölçümle iyileşmeyi tesadüften ayırmaya çalışıyoruz. Hedef reklam cümlesi değil, içimize sinen standart. Aynı araçta öncelikler işe göre değişir; birlikte önceliklendirmek önce gelir.

<video autoplay loop muted playsinline width="100%" poster="{{site.baseurl}}/public/post_imgs/260409/teamviewer_plan.jpg" style="outline:none;pointer-events:none;" tabindex="-1">
  <source src="https://novalinkstorage.blob.core.windows.net/common/video_demo/compare_teamviewer_frame_drop.mp4" type="video/mp4">
  Bu videoyu izlemek için mp4 destekli tarayıcı gerekir.
</video>

- **Aynı ortamda kare düşüşü karşılaştırma testi**
  - İS: Windows 10, 32 bit
  - CPU: Intel(R) Celeron(R) CPU J1900 @ 1.99GHz
  - RAM: 4GB
  - Video kaynağı: https://youtu.be/KxMqSz8qVSg
  - Test: Host’ta video oynatma, İstemci’de ekran yakalama

Dürüst olmak gerekirse her ağ, donanım ve sektör için aynı derecede «en uygun» uzaktan kumanda yazılımı yok; değişken çok: hat kalitesi, güvenlik duvarı, röle konumu, uç özellikleri, eşzamanlı uygulamalar. Aynı yazılım iç ağda hızlı, yurtdışı şubede bunaltıcı hissedilebilir. «Kötü ürün» demek tek cümleyle zor; kullanıcı için sonuç aynı: gecikme ve stres. Yine de NovaLINK’i net hedeflerle geliştiriyoruz: gereksiz gecikmeyi azaltmak, okunabilir ekran kalitesi, saha hat koşullarında kullanılabilirlik. «Her yerde birinci» değil; sorumluluk alabileceğimiz kapsamı genişletip içinde tutarlı iyileştirme. Bu kapsamı kendimiz tanımlamazsak ilerlemeyi de yargılayamayız. Performans tanımını kurup doğrulamak ürün yönünü sabitler.

![NovaLINK TestSuite]({{site.baseurl}}/public/post_imgs/260409/testsuite.png)

Gerçek kullanıcı geri bildirimi ve ölçümlerle kriterleri sürekleştiriyoruz. Tanım ne kadar şeffaf olursa benimseyenler için karşılaştırma o kadar dürüst olur. Bu blogda ölçüm yöntemi, yorum ve iyileştirme sürecindeki deneme-yanılmayı mümkün olduğunca somut anlatacağız.
