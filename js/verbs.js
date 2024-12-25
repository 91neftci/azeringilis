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

var suallar = ["accept","arrest","avoid","back","balance","calculate","care","dam","dance","eat","face","fall","hang","identify","jail","kick","land","make","obey","paint","pay","regret","rely","satisfy","saw","scare","scream","strike","take","taste","add","bake","bang","call","catch","creep","damage","deal","embarrass","fail","fear","harm","ignore","kneel","laugh","load","manage","nest","observe","pause","pinch","release","remember","save","scrape","seal","sell","tap","tear","wriggle","admit","ban","bathe","carry","change","dare","decide","employ","fancy","fetch","happen","impress","jump","knock","lay","lose","marry","obtain","perform","plan","remain","reply","say","see","serve","settle","supply","teach","telephone","wrap","advise","bat","bear","cause","chew","cry","decay","deliver","earn","feed","fill","hand","include","keep","lead","live","match","nod","occur","place","plug","remind","rob","scribble","set","shade","share","tease","terrify","write","afford","be","become","check","chop","delay","describe","empty","fight","fire","have","increase","kill","lean","mate","note","offer","play","possess","request","run","send","shake","shine","shoot","surprise","tell","think","wonder","wrestle","agree","beat","begin","burst","choose","clap","depend","destroy","encourage","find","flap","guess","head","inform","knot","leap","mean","open","point","practice","rescue","rush","sew","shock","shrink","sink","thank","tickle","wipe","worry","alert","attract","beg","bend","claim","cling","deserve","dig","end","fit","float","guard","heal","injure","learn","meet","need","order","pour","prefer","retire","shave","shut","sit","slap","sweep","throw","tip","win","wish","allow","behave","bleed","clean","close","curl","develope","discover","enjoy","flash","flow","grow","hear","interest","jam","leave","melt","murder","notice","pray","press","return","show","skip","slide","slip","tie","touch","whip","wind","annoy","bite","blow","clip","come","disappear","do","enter","fly","forget","grin","heat","hurt","interfere","lend","mend","owe","prepare","prevent","ride","ring","sing","sling","smell","snore","swim","tire","trade","weep","whisper","answer","bless","book","collect","complain","cut","divide","draw","entertain","flood","follow","greet","help","hurry","interrupt","let","miss","own","pretend","promise","reflect","reject","sleep","smoke","sow","speak","trace","trap","wear","wet","appear","awake","boil","break","compare","connect","doubt","drink","escape","forbid","form","grab","hide","hunt","instruct","lie","mix","print","provide","question","record","refuse","slit","spare","spend","spring","train","trip","watch","weave","applaud","ask","borrow","breed","concern","contain","dream","drive","exist","forgive","freeze","go","hit","hum","invent","jog","lift","move","protect","push","sign","sound","spot","stare","step","trouble","tumble","warn","wave","zip","argue","breathe","brush","consider","copy","drip","drum","expand","forsake","fry","glow","hold","hug","itch","kiss","light","look","mow","pack","park","read","reduce","spell","steal","sting","strap","turn","visit","want","waste","arise","attach","bring","burn","continue","cost","drop","dust","expect","frighten","give","hook","hover","join","know","like","lock","mug","rain","receive","stand","stop","stroke","suggest","swing","try","type","use","wake","warm","arrange","attack","build","bury","buy","correct","cross","dry","explain","get","hammer","hop","hope","joke","listen","love","multiply","punish","put","race","reach","rise","stick","suffer","suppose","swear","travel","trust","understand","untidy","wait","walk"];

var cavablar = ["qəbul etmək","həbs etmək","uzaq durmaq","dəstəkləmək","tarazlamaq","hesablamaq","maraqlanmaq","bənd çəkmək","rəqs etmək","yemək","üzləşmək","düşmək","asmaq","müəyyənləşdirmək","həbs edilmək","zərbə vurmaq","enmək","etmək","əhilləşmək","boyamaq","ödəmək","peşman olmaq","güvənmək","razı salmaq","mişarla kəsmək","qorxmaq","qışqırmaq","tələb etmək","götürmək","dadına baxmaq","əlavə etmək","bişirmək","çırpmaq","zəng etmək","tutmaq","sürünmək","zərər vermək","məşğul olmaq","utandırmaq","uğursuz olmaq","qorxmaq","zərər vermək","saymamaq","diz çökmək","gülmək","yüklənmək","idarə etmək","yuva düzəltmək","müşahidə etmək","fasilə vermk","çimdikləmək","azad etmək","xatırlamaq","xilas etmək","qazımaq","möhürləmək","satmaq","tıqqıldatmaq","cırmaq","qıvrılmaq","etiraf etmək","qadağa etmək","yuyunmaq","daşımaq","dəyişmək","cəsarət etmək","qerar vermək","işə almaq","xoşlanmaq","özünə çəkmək","baş vermək","heyran etmək","tullanmaq","qapı döymək","uzanmaq","itirmək","evlənmək","əldə etmək","çıxış etmək","planlamaq","davam etdirmək","cavablamaq","söyləmək","görmək","xidmət etmək","yerleşmək","təmin etmək","öyrətmək","zəng etmək","bükmək","tövsiyə etmək","çubuğla vurmaq","daşımaq","səbəb olmaq","çeynəmək","ağlamaq","xarab etmək","təhvil vermək","pul qazanmaq","yedizdirmək","doldurmaq","yardım etmək","əhatəyə almaq","saxlamaq","idarə etmək","yaşamaq","uyğunlaşdırmaq","baş əymək","ortaya çıxmaq","yerləşdirmək","toka taxmaq","xatırlatmaq","oğurlamaq","qaralamaq","yerləşdirmək","kölgə salmaq","paylaşmaq","əsəbləşdirmək","dəhşətə gəlmək","yazmaq","ödəmək","olmaq","olmaq","kontrol etmək","doğramaq","gecikmək","təsvir etmək","boşaltmaq","döyüşmək","qovmaq","sahib olmaq","artırmaq","öldürmək","söykənmək","cütləşmək","qeyd etmək","təklif etmək","oynamaq","sahib olmaq","tələb etmək","qaçmaq","göndərmək","silkələmək","parlamaq","atəş açmaq","sürpriz etmək","söyləmək","düşünmək","fikirləşmək","güləşmək","razılaşmaq","vurmaq","başlamaq","partlamaq","seçmək","alqışlamaq","güvənmək","məhv etmək","həvəsləndirmək","tapmaq","qanad çırpmaq","fərz etmək","başına dayamaq","məlumat vermək","düyünləmək","hoppanmaq","demək istəmək","açmaq","işarə etmək","praktika etmək","xilas etmək","tələsmək","paltar tikmək","şoka salmaq","daraltmaq","batmaq","təşəkkür etmək","qıdıqlamaq","təmizləmək","narahat olmaq","xəbərdar etmək","cəzb etmək","yalvarmaq","əymək","iddia etmək","tutunmaq","layiq olmaq","qazmaq","bitmək","uyğun olmaq","üzmək","qorumaq","sağalmaq","yaralamaq","öyrənmək","görüşmək","ehtiyacı olmaq","sifariş etmək","tökmək","seçim etmək","pensiyaya çıxmaq","təraş olmaq","bağlamaq","oturmaq","şillə vurmaq","süpürmək","atmaq","çayavoy vermək","qazanmaq","arzulamaq","icazə vermək","davranmaq","qanamaq","təmizləmək","bağlamaq","burmaq","inkişaf etdirmək","kəşf etmək","həzz almaq","aydınlatmaq","axmaq","yetişdirmək","eşitmək","maraqlanmaq","ilişmək","tərk etmək","əritmək","cinayət işləmək","bildirmək","dua etmək","sıxmaq","qayıtmaq","göstərmək","ötürmək","sürüşmək","sürüşmək","bağlamaq","toxunmaq","qarışdırmaq","çevirmək","əsəbləşdimək","dişləmək","üfürmək","kəsmək","gəlmək","itmək","etmək","girmək","uçmaq","unutmaq","hırıldamaq","isitmək","incitmək","müdaxilə etmək","pay vermək","təmir etmək","borclu olmaq","hazırlıq görmək","qarşısını almaq","minmək","zəng çalmaq","mahnı oxumaq","atmaq","qoxlamaq","xoruldamaq","üzmək","yorulmaq","ticarət etmək","ağlamaq","fısıldamaq","cavab vermək","şükr etmək","rezervasiya etmək","yığmaq","şikayət etmək","kəsmək","bölmək","çəkmək","əylənmək","sel basmaq","izləmək","salamlamaq","yardım etmək","tələsmək","yarıda kəsmək","buraxmaq","darıxmaq","sahib olmaq","allatmaq","söz vermək","yansıtmaq","rədd etmək","yatmaq","siqaret çəkmək","toxum əkmək","danışmaq","izlə getmək","tələyə salmaq","geyinmək","islanmaq","görünmək","oyanmaq","qaynatmaq","qırmaq","qarşılaşdırmaq","əlaqələndirmək","şübhələnmək","içmək","qurtulmaq","qadağan etmək","yaratmaq","qapmaq","gizləmək","ovlamaq","məlumatlandırmaq","yalan danışmaq","qarışdırmaq","çap etmək","təmin etmək","sual vermək","zaps etmək","rədd etmək","cırmaq","ehtiyat saxlamaq","xərcləmək","atlamaq","öyrətmək","yıxılmaq","izləmək","toxumaq","alqışlamaq","soruşmaq","borc almaq","balalamaq","narahat olmaq","əhatə etmək","yuxu görmək","maşın sürmək","mövcud olmaq","bağışlamaq","donmaq","getmək","vurmaq","dızıldamaq","icad etmək","asta qaçmaq","qaldırmaq","daşımaq","qorumaq","itələmək","imzalamaq","səs çıxarmaq","aşkar etmək","göz dikmək","addımlamaq","narahatlıq vermək","yıxılmaq","xəbər vermək","əl sallamaq","qapamaq","mübahisə etmək","nəfəs almaq","fırçalamaq","nəzərə almaq","kopyalamaq ","damcılamaq","dəf çalmaq","genişlətmək","əl çəkmək","qızartmaq","parlamaq","tutmaq","qucaqlamaq","qaşınmaq","öpmək","işıqlandırmaq","baxmaq","biçmək","paketləmək","park etmək","oxumaq","azaltmaq","hecalamaq","oğurlamaq","sancmaq","bantlamaq","dönmək","ziyarət etmək","istəmək","israf etmək","meydana gəlmək","tutuzdurmaq","gətirmək","yanmaq","davam etmək","xərcləmək","buraxmaq","toz almaq","ümid etmək","qorxutmaq","vermək","taxmaq","havada durmaq","üzv olmaq","bilmək","xoşlamaq","kilidləmək","talanmaq","yağmaq","qəbul etmək","ayağa qalxmaq","durmaq","sığallamaq","tövsiyə etmək","yellənmək","yoxlamaq","yazmaq","istifadə etmək","oyanmaq","isinmək","təşkil etmək","hücum etmək","inşa etmək","basdırmaq","almaq","düzəltmək","keçmək","qurutmaq","açığlamaq","sahib olmaq","çəkicləmək","hoppanmaq","ümid etmək","zarafatlaşmaq","qulaq asmaq","sevmək","çoxalmaq","cəzalandırmaq","qoymaq","yarışmaq","çatmaq","yüksəlmək","yapışdırmaq","əzab çəkmək","təsəvvür etmək","and içmək","səyahət etmək","güvənmək","anlamaq","dağıtmaq","gözləmək","gəzmək"];

function oyunBasla(){
	while(cixanarray.length<452){
		sualnum = Math.floor(Math.random() * 452);
		if(cixanarray.indexOf(sualnum) === -1){
			cixanarray.push(sualnum);
		}
	}
	sualsira = sualsira+1;
	sual = suallar[cixanarray[cixanarr]];
	cvb = cavablar[cixanarray[cixanarr]];
	document.getElementById("sual").innerHTML='to '+sual;
	
	while(btnarray.length<4){
		n = Math.floor(Math.random() * 4) + 1;
		if(btnarray.indexOf(n) === -1){
			btnarray.push(n);
		}
	}
	
	while(cvbarray.length<3){
		m = Math.floor(Math.random() * 452);
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
	document.getElementById("sual").innerHTML='to '+sual;
	
	while(btnarray.length<4){
		n = Math.floor(Math.random() * 4) + 1;
		if(btnarray.indexOf(n) === -1){
			btnarray.push(n);
		}
	}
	while(cvbarray.length<3){
		m = Math.floor(Math.random() * 452);
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
	cvbarray.splice(0,452);
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
	if(sualsira==452){
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