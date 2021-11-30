var $ = function (id) 
{
    return document.getElementById(id);
};

var passwordCheckOld = function () 
{
    var stringPassword, arrayBadPasswords, stringOutput;
    
    stringPassword = $("password").value;
    
    arrayBadPasswords = ['123456','password','12345678','1234','12345','dragon','qwerty','696969','mustang','letmein','baseball','master','michael','football','shadow','monkey','abc123','pass','6969','jordan','harley','ranger','iwantu','jennifer','hunter','2000','test','batman','trustno1','thomas','tigger','robert','access','love','buster','1234567','soccer','hockey','killer','george','sexy','andrew','charlie','superman','dallas','jessica','panties','pepper','1111','austin','william','daniel','golfer','summer','heather','hammer','yankees','joshua','maggie','biteme','enter','ashley','thunder','cowboy','silver','richard','orange','merlin','michelle','corvette','bigdog','cheese','matthew','121212','patrick','martin','freedom','ginger','nicole','sparky','yellow','camaro','secret','falcon','taylor','111111','131313','123123','bitch','hello','scooter','please','porsche','guitar','chelsea','black','diamond','nascar','jackson','cameron','654321','computer','amanda','wizard','xxxxxxxx','money','phoenix','mickey','bailey','knight','iceman','tigers','purple','andrea','horny','dakota','aaaaaa','player','sunshine','morgan','starwars','boomer','cowboys','edward','charles','girls','booboo','coffee','xxxxxx','bulldog','ncc1701','rabbit','peanut','john','johnny','gandalf','spanky','winter','brandy','compaq','carlos','tennis','james','mike','brandon','fender','anthony','ferrari','cookie','chicken','maverick','chicago','joseph','diablo','sexsex','hardcore','666666','willie','welcome','chris','panther','yamaha','justin','banana','driver','marine','angels','fishing','david','maddog','hooters','wilson','butthead','dennis','captain','chester','smokey','xavier','steven','viking','snoopy','blue','eagles','winner','samantha','house','miller','flower','jack','firebird','butter','united','turtle','steelers','tiffany','zxcvbn','tomcat','golf','bond007','bear','tiger','doctor','gateway','gators','angel','junior','thx1138','porno','badboy','debbie','spider','melissa','booger','1212','flyers','fish','porn','matrix','teens','scooby','jason','walter','cumshot','boston','braves','yankee','lover','barney','victor','tucker','princess','mercedes','5150','doggie','zzzzzz','gunner','horney','bubba','2112','fred','johnson','xxxxx','tits','member','boobs','donald','bigdaddy','bronco','penis','voyager','rangers','birdie','trouble','white','topgun','bigtits','bitches','green','super','qazwsx','magic','lakers','rachel','slayer','scott','2222','asdf','video','london','7777','marlboro','srinivas','internet','action','carter','jasper','monster','teresa','jeremy','11111111','bill','crystal','peter','pussies','cock','beer','rocket','theman','oliver','prince','beach','amateur','7777777','muffin','redsox','star','testing','shannon','murphy','frank','hannah','dave','eagle1','11111','mother','nathan','raiders','steve','forever','angela','viper','ou812','jake','lovers','suckit','gregory','buddy','whatever','young','nicholas','lucky','helpme','jackie','monica','midnight','college','baby','cunt','brian','mark','startrek','sierra','leather','232323','4444','beavis','bigcock','happy','sophie','ladies','naughty','giants','booty','blonde','golden','0','fire','sandra','pookie','packers','einstein','dolphins','chevy','winston','warrior','sammy','slut','8675309','zxcvbnm','nipples','power','victoria','asdfgh','vagina','toyota','travis','hotdog','paris','rock','xxxx','extreme','redskins','erotic','dirty','ford','freddy','arsenal','access14','wolf','nipple','iloveyou','alex','florida','eric','legend','movie','success','rosebud','jaguar','great','cool','cooper','1313','scorpio','mountain','madison','987654','brazil','lauren','japan','naked','squirt','stars','apple','alexis','aaaa','bonnie','peaches','jasmine','kevin','matt','qwertyui','danielle','beaver','4321','4128','runner','swimming','dolphin','gordon','casper','stupid','shit','saturn','gemini','apples','august','3333','canada','blazer','cumming','hunting','kitty','rainbow','112233','arthur','cream','calvin','shaved','surfer','samson','kelly','paul','mine','king','racing','5555','eagle','hentai','newyork','little','redwings','smith','sticky','cocacola','animal','broncos','private','skippy','marvin','blondes','enjoy','girl','apollo','parker','qwert','time','sydney','women','voodoo','magnum','juice','abgrtyu','777777','dreams','maxwell','music','rush2112','russia','scorpion','rebecca','tester','mistress','phantom','billy','6666','albert'];
    
    stringOutput = "";
 
if (stringPassword.length < 8) //this "if" asks if the password the user chose is less than 8 characters long.
    {
    stringOutput = ("Please make sure your password is at least 8 characters long." + "\n" + "Choose a better password!");
    //if the there are less than 8 characters, the user will get the above message... telling them to choose a longer password.
    }
    else
    {  
        stringOutput = ("Excelent choice!"); /* if everything goes well and the user chose a unique password that 
    is not in the list of bad passwords and if the password is least 8 characters long, the user will receive the above message. */               
        
    for(w=0; w<arrayBadPasswords.length; w++) /*if the user chose a password that is 8 characters or
        longer, the program will run through all the bad passwords in the array */
        {
            if(stringPassword===arrayBadPasswords[w]) /*this line looks for whether the chosen password of 8 or more 
            characters matches any of the bad passwords in the array. It checks them one by one. */
            {
                stringOutput= ("Bad password! Try again"); //this message appears when the chosen password is the same as one in the array of bad passwords.
            }
        }   
    }

    $("output").value = stringOutput; //this line takes the solution back to DOM
};

window.onload = function () 
{
//    $("password").value = "";
   $("password").focus();
   $("check_password").onclick = passwordCheckOld;
};