var sualnum=0;
var n=0;
var m=0;
var sual;
var cvb;
var seccvb;
var btnarray = [];
var cvbarray = [];
var cixanarray =[];
var cixanarr = 0;
var a,b,c,d;
var c1,c2,c3;
var dogru=0;
var sehv=0;
var sualsira=0;
var timer;
var time=6;
var ltime;

var suallar = ["Amazing","Awesome","Adventurous","Ambitious","Adorable","Ample","Artistic","Agile","Acrobatic","Attractive","Alluring","Astonishing","Authentic","Awkward","Ancient","Brave","Beautiful","Bright","Busy","Big","Bold","Breezy","Blue","Basic","Blissful","Bouncy","Beneficial","Bashful","Black","Brown","Burgundy","Broad","Creative","Confident","Cheerful","Calm","Cute","Clever","Curious","Charming","Courageous","Clean","Cool","Considerate","Caring","Crazy","Classic","Chic","Cheap","Cloudy","Cold","Delightful","Dreamy","Daring","Dynamic","Dark","Decent","Drastic","Defiant","Dedicated","Deep","Desirable","Dirty","Dramatic","Dizzy","Diligent","Delicious","Dazzling","Easy","Elegant","Enthusiastic","Eager","Efficient","Empathetic","Excellent","Exciting","Effective","Entertaining","Exotic","Expensive","Elaborate","Elderly","Educational","Fantastic","Fabulous","Friendly","Funny","Fearless","Fresh","Fascinating","Fluffy","Fierce","Fine","Free","Frugal","Futuristic","Fast","Slow","Flat","Famous","Flawless","Formal","Frizzy","Gorgeous","Great","Gentle","Generous","Gracious","Genuine","Glorious","Graceful","Golden","Grand","Green","Growing","Groovy","Grumpy","Gigantic","Happy","Hot","Humble","Honest","Healthy","Heavy","Handsome","High","Helpful","Hilarious","Heavenly","Harmonious","Hardworking","Historical","Heartfelt","Homey","Hungry","Full","Huge","Interesting","Intelligent","Incredible","Inspiring","Impressive","Imaginative","Inquisitive","Iconic","Industrious","Inevitable","Inexpensive","Incomparable","Idealistic","Illustrious","Irresistible","Irrelevant","Icy","Joyful","Jovial","Jaunty","Jaded","Jumpy","Juicy","Judgmental","Jumbled","Jittery","Junior","Justified","Jubilant","Jumbo","Kind","Knowledgeable","Keen","Kooky","Knotty","Known","Keen-eyed","Knightly","Keen-witted","Knackered","Kindhearted","Kiddy","Loud","Lively","Lazy","Loyal","Long","Lonely","Lovely","Large","Low","Luxurious","Lasting","Literal","Lucky","Magnificent","Mysterious","Modern","Moody","Musical","Mighty","Mesmerizing","Mindful","Memorable","Multicultural","Moral","Majestic","Mischievous","Mouthwatering","Mellow","Modest","Magical","Melodic","Mature","Nervous","Natural","New","Nice","Noble","Naughty","Neat","Nonchalant","Noisy","Narrow","Nostalgic","Needy","Negative","Nutritious","Nonstop","Noteworthy","Numerous","Notable","Nifty","Obvious","Original","Optimistic","Ordinary","Official","Outstanding","Open","Organic","Odd","Observant","Obedient","Opaque","Obsolete","Offensive","Oily","Ornate","Overwhelming","Perfect","Patient","Positive","Powerful","Popular","Polite","Peaceful","Playful","Pleasant","Precious","Practical","Private","Proud","Profound","Pretty","Painful","Priceless","Puzzled","Persistent","Passionate","Quaint","Quick","Small","Quiet","Quirky","Quizzical","Quivering","Qualified","Questionable","Quarrelsome","Queasy","Quenched","Quack","Reliable","Responsible","Romantic","Rich","Poor","Rude","Radiant","Rough","Respectful","Red","Rational","Robust","Rare","Resilient","Reckless","Ready","Rambunctious","Strong","Smart","Serious","Sad","Special","Simple","Sincere","Safe","Sweet","Shy","Successful","Satisfied","Shiny","Silent","Sparkling","Strong-willed","Scary","Tall","Short","Talkative","Tasty","Terrific","Terrible","Thoughtful","Thrifty","Tough","Traditional","Trustworthy","Tremendous","Tricky","Tolerant","Tenacious","Tiny","Tired","Ugly","Unbelievable","Uncertain","Uncommon","Unconditional","Unconscious","Unforgettable","Unhappy","Unique","United","Universal","Unusual","Upbeat","Uplifting","Urbane","Urgent","Useful","Useless","Valuable","Vague","","Valid","Vast","Various","Vengeful","Vibrant","Victorious","Vigorous","Villainous","Vital","Vivacious","Volatile","Volcanic","Voracious","Vulnerable","Vicious","Verbal","Warm","Wild","Witty","Wise","Wonderful","Worried","Wondrous","Wealthy","Whimsical","Wicked","Wide","Wavy","Watery","Weighty","Wooden","Weak","Wary","Well-groomed","Wholesome","Yellow","Young","Yummy","Yucky","Yearning","Yeasty","Youthful","Yellowish","Zany","Zealous","Zesty","Zigzag","Zippered"];

var cavablar = ["Heyrətamiz","Möhtəşəm","Macəraçı","İddialı","Sevimli","Geniş","Bədii","Çevik","Akrobatik","Cəlbedici","Cazibədar","Heyranedici","Orijinal","Yöndəmsiz","Qədim","Cəsarətli","Gözəl","Parlaq","Məşğul","Böyük","Qalın","Külək","Mavi","Əsas","Xoşbəxt","Sıçrayışlı","Faydalı","Utancaq","Qara","Qəhvəyi","Bordo","Geniş","Yaradıcı","İnamlı","Şən","Sakit","Şirin","Ağıllı","Maraqlı","Cazibədar","Cəsarətli","Təmiz","Soyuqqanlı","Nəzakətli","Qayğıkeş","Dəli","Klassik","Qəşəng","Ucuz","Buludlu","Soyuq","Zövqlü","Xəyalpərəst","Cəsarətli","Hərəkətli","Qaranlıq","Layiqli","Kəskin","Müxalif","Həsr olunmuş","Dərin","Arzu olunan","Çirkli","Dramatik","Gicəlləndirici","Çalışqan","Dadlı","Gözqamaşdırıcı","Asan","Eleqant","Həvəsli","Həvəsli","Effektiv","Empatik","Əla","Həyəcanlı","Effektiv","Əyləncəli","Ekzotik","Bahalı","Ətraflı","Yaşlı","Maarifləndirici","Fantastik","Möhtəşəm","Mehriban","Gülməli","Qorxmaz","Təzə","Füsunkar","Tüklü","Şiddətli","Yaxşı","Pulsuz","Qənaətkar","Futuristik","Tez","Yavaş","Düz","Məşhur","Qüsursuz","Formal","Qıvrımlı","Qəşəng","Əla","Zərif","Səxavətli","Mərhəmətli","Orijinal","Şanlı","Zərif","Qızılı","Böyük","Yaşıl","Artan","Möhtəşəm","Qəzəbli","Nəhəng","Xoşbəxt","İsti","Təvazökar","Dürüst","Sağlam","Ağır","Yaraşıqlı","Yüksək","Faydalı","Gülməli","Səmavi","Harmonik","Çalışqan","Tarixi","Ürəkdən","Ev kimi","Ac","Tox","Böyük","Maraqlı","Ağıllı","İnanılmaz","Ruhlandırıcı","Təsirli","Təsəvvürlü","Maraqlanan","İkonik","Çalışqan","Qaçılmaz","Ucuz","Müqayisə olunmaz","İdealist","Görkəmli","Qarşısıalınmaz","Əlaqəsiz","Buzlu","Şən","Şən","Zərif","Yorğun","Qorxaq","Şirəli","Mühakimə edici","Qarışıq","Əsəbi","Gənc","Haqlı","Sevincli","Div","Mehriban","Bilikli","İti","Çılğın","Düyünlü","Bilinən","İri gözlü","Cəngavər","Ağıllı","Bitkin","Mehriban","Balaca","Ucasəsli","Canlı","Tənbəl","Sadiq","Uzun","Yalnız","Sevimli","Böyük","Aşağı","Dəbdəbəli","Uzunmüddətli","Hərfi","Şanslı","Möhtəşəm","Sirli","Müasir","Kaprizli","Musiqili","Qüdrətli","Büyüleyici","Zehinli","Yaddaqalan","Multikulturalizm","Mənəvi","Əzəmətli","Nadinc","Ağız sulandıran","Yumşaq","Təvazökar","Sehrli","Melodik","Yetkin","Əsəbi","Təbii","Yeni","Gözəl","Soylu","Yaramaz","Səliqəli","Səbirsiz","Səs-küylü","Dar","Nostalji","Ehtiyaclı","Mənfi","Qidalandırıcı","Fasiləsiz","Diqqətəlayiq","Çoxsaylı","Görkəmli","Yaramaz","Aydındır","Orijinal","Optimist","Sıradan","Rəsmi","Görkəmli","Açıq","Üzvi","Qəribə","Müşahidəçi","İtaətkar","Qeyri-şəffaf","Köhnəlmiş","Hücumedici","Yağlı","Bəzəkli","Əzici","Mükəmməl","Xəstə","Müsbət","Güclü","Məşhur","Nəzakətli","Dinc","Oynaq","Xoş","Qiymətli","Praktik","Şəxsi","Qürurlu","Dərin","Gözəl","Ağrılı","Qiymətsiz","Çaşqın","Davamlı","Ehtiraslı","Qəribə","Tez","Kiçik","Sakit","Qeyri-adi","Qəribə","Titrəyən","İxtisaslı","Şübhəli","Davakar","Narahat","Söndürülmüş","Şarlatmaq","Etibarlı","Məsuliyyətli","Romantik","Zəngin","Kasıb","Kobud","Parlaq","Kobud","Hörmətli","Qırmızı","Rasional","Möhkəm","Nadir","Davamlı","Ehtiyatsız","Hazır","Təcavüzkar","Güclü","Ağıllı","Ciddi","Kədərli","Xüsusi","Sadə","Səmimi","Təhlükəsiz","Şirin","Utancaq","Uğurlu","Razı","Parlaq","Səssiz","Parıldayan","Güclü iradəli","Qorxulu","Hündür","Qısa","Dilli-dilavər","Dadlı","Əla","Dəhşətli","Düşüncəli","Qənaətcil","Sərt","Ənənəvi","Etibarlı","Möhtəşəm","Hiyləgər","Dözümlü","Dözümlü","Kiçik","Yorğun","Çirkin","İnanılmaz","Qeyri-müəyyən","Qeyri-adi","Şərtsiz","Bihuş","Unudulmaz","Bədbəxt","Unikal","Birləşmiş","Universal","Qeyri-adi","Şanslı","Ucaldıcı","Şəhərli","Təcili","Faydalı","Yararsız","Dəyərli","Qeyri-müəyyən","Etibarlı","Geniş","Müxtəlif","İntiqamçı","Canlı","Qalib","Güclü","Bədxah","Həyati","Canlı","Uçucu","Vulkanik","Acınacaqlı","Həssas","Qəddar","Şifahi","İsti","Vəhşi","Hazırcavab","Müdrik","Möhtəşəm","Narahat","Möhtəşəm","Varlı","Şıltaq","Pis","Geniş","Dalğalı","Sulu","Ağır","Taxtadan","Zəif","Ehtiyatlı","Baxımlı","Sağlam","Sarı","Gənc","Dadlı","Sevincli","Həsrət","Mayalı","Gənc","Sarımtıl","Çılğın","Qeyrətli","Zövqlü","Ziqzaq","Zamoklu"];

function oyunBasla(){
	while(cixanarray.length<400){
		sualnum = Math.floor(Math.random() * 400);
		if(cixanarray.indexOf(sualnum) === -1){
			cixanarray.push(sualnum);
		}
	}
	sualsira = sualsira+1;
	sual = suallar[cixanarray[cixanarr]];
	cvb = cavablar[cixanarray[cixanarr]];
	document.getElementById("sual").innerHTML=sual;
	
	while(btnarray.length<4){
		n = Math.floor(Math.random() * 4) + 1;
		if(btnarray.indexOf(n) === -1){
			btnarray.push(n);
		}
	}
	
	while(cvbarray.length<3){
		m = Math.floor(Math.random() * 400);
		if(cvbarray.indexOf(m) === -1){
			if(m != cixanarray[cixanarr]){
				cvbarray.push(m);
			}
		}
	}
	a = btnarray[0];	c1 = cvbarray[0];
	b = btnarray[1];	c2 = cvbarray[1];
	c = btnarray[2];	c3 = cvbarray[2];
	d = btnarray[3];

	document.getElementById("btn"+a).innerHTML = cvb;
	document.getElementById("btn"+b).innerHTML = cavablar[c1];
	document.getElementById("btn"+c).innerHTML = cavablar[c2];
	document.getElementById("btn"+d).innerHTML = cavablar[c3];

	document.getElementById("error").innerHTML="";
	document.getElementById("sualsira").innerHTML=sualsira;	
	document.getElementById("start").style.display="none";
	document.getElementById("tbUpper").style.display="block";
	document.getElementById("sual").style.display="block";
	
	btnActive();
	cvbButtons();
	pageTimer();
}
function aKlik(){
	seccvb=document.getElementById("btn1").innerHTML;
	document.getElementById("btn1").style.backgroundColor="yellow";
	cavabYoxla();
	btnDeactive();
	gameEnd();
}
function bKlik(){
	seccvb=document.getElementById("btn2").innerHTML;
	document.getElementById("btn2").style.backgroundColor="yellow";
	cavabYoxla();
	btnDeactive();
	gameEnd();
}
function cKlik(){
	seccvb=document.getElementById("btn3").innerHTML;
	document.getElementById("btn3").style.backgroundColor="yellow";
	cavabYoxla();
	btnDeactive();
	gameEnd();
}
function dKlik(){
	seccvb=document.getElementById("btn4").innerHTML;
	document.getElementById("btn4").style.backgroundColor="yellow";
	cavabYoxla();
	btnDeactive();
	gameEnd();
}
function nextSual(){
	cixanarr++;
	sualsira = sualsira+1;
	sual = suallar[cixanarray[cixanarr]];
	cvb = cavablar[cixanarray[cixanarr]];
	document.getElementById("sual").innerHTML=sual;
	
	while(btnarray.length<4){
		n = Math.floor(Math.random() * 4) + 1;
		if(btnarray.indexOf(n) === -1){
			btnarray.push(n);
		}
	}
	while(cvbarray.length<3){
		m = Math.floor(Math.random() * 400);
		if(cvbarray.indexOf(m) === -1){
			if(m != cixanarray[cixanarr]){
				if(cavablar[m] != cvb){
					cvbarray.push(m);
				}
			}
		}
	}
	a = btnarray[0];	c1 = cvbarray[0];
	b = btnarray[1];	c2 = cvbarray[1];
	c = btnarray[2];	c3 = cvbarray[2];
	d = btnarray[3];

	document.getElementById("btn"+a).innerHTML = cvb;
	document.getElementById("btn"+b).innerHTML = cavablar[c1];
	document.getElementById("btn"+c).innerHTML = cavablar[c2];
	document.getElementById("btn"+d).innerHTML = cavablar[c3];

	document.getElementById("error").innerHTML="";
	document.getElementById("sualsira").innerHTML=sualsira;
	btnActive();
	pageTimer();
	document.getElementById("btn1").style.backgroundColor="white";
	document.getElementById("btn2").style.backgroundColor="white";
	document.getElementById("btn3").style.backgroundColor="white";
	document.getElementById("btn4").style.backgroundColor="white";
}
function cavabYoxla(){
	seccvb=seccvb.toString();
	if(seccvb==cvb){
		dogru=dogru+1;
		document.getElementById("dogru").innerHTML=dogru;
		document.getElementById("error").innerHTML="DOĞRU";
		document.getElementById("error").style.color="darkgreen";
		document.getElementById("btn"+a).style.backgroundColor="green";
	}else{
		sehv=sehv+1;
		document.getElementById("sehv").innerHTML=sehv;
		document.getElementById("error").innerHTML="SƏHV";
		document.getElementById("error").style.color="darkred";
		document.getElementById("btn"+a).style.backgroundColor="red";
	}
	document.getElementById("error").style.fontWeight="Bold";
	document.getElementById("vaxt").style.display="none";
	btnarray.splice(0,4);
	cvbarray.splice(0,400);
	clearInterval(timer);
	time=6;
	document.getElementById("vaxt").innerHTML="5";
	document.getElementById("ssual").value=sualsira;
	document.getElementById("ddogru").value=dogru;
	document.getElementById("ssehv").value=sehv;
}
function pageTimer(){
	timer = setInterval(function(){
			time--;
			ltime=time.toString();
			document.getElementById("vaxt").innerHTML=ltime;
			if(ltime==0){
				clearInterval(timer);
				btnDeactive();
				document.getElementById("nextbtn").style.display="block";
				document.getElementById("stopbtn").style.display="block";
				time=5;
				document.getElementById("vaxt").innerHTML="5";
				document.getElementById("error").innerHTML="VAXT BİTDİ";
				document.getElementById("error").style.color="black";
				document.getElementById("error").style.fontWeight="Bold";
			}else{
		}
	},1000);
}
function stopOyun(){
	location.reload();
}
function btnActive(){
	document.getElementById("btn1").disabled=false;
	document.getElementById("btn2").disabled=false;
	document.getElementById("btn3").disabled=false;
	document.getElementById("btn4").disabled=false;
	
	document.getElementById("nextbtn").style.display="none";
	document.getElementById("stopbtn").style.display="none";
	document.getElementById("vaxt").style.display="block";
}
function btnDeactive(){
	document.getElementById("btn1").disabled=true;
	document.getElementById("btn2").disabled=true;
	document.getElementById("btn3").disabled=true;
	document.getElementById("btn4").disabled=true;
	
	document.getElementById("vaxt").style.display="none";
}
function gameEnd(){
	if(sualsira==400){
		document.getElementById("nextbtn").style.display="none";
	}else{
		document.getElementById("nextbtn").style.display="block";
	}
	document.getElementById("stopbtn").style.display="block";
}
function cvbButtons(){
	document.getElementById("btn1").style.display="block";
	document.getElementById("btn2").style.display="block";
	document.getElementById("btn3").style.display="block";
	document.getElementById("btn4").style.display="block";
}