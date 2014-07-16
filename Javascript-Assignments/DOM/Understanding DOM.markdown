DOM
1. monitorEvents(document.getElementById('main'), 'click')
2. inspect($('header nav ol>li'))
3. $$('header nav ol>li')
4. $_
5. dir(document.body.childNodes)

Console
1. console.group(“Page Links”); or console.groupCollapsed(“Page Links”);
console.dir(document.querySelectorAll(‘a’));
console.groupEnd();

2. console.time("BigLoop")
for (var i = 100000 -1; i >=0; i--){};
console.timeEnd("BigLoop");

3. console.assert(document.querySelectorAll('nav ol>li').length===2, "Sorry thr r only 2 items”);

4. var myNode = document.getElementById('comingtoevent')
dir(myNode)

5. var myNode = document.getElementById(‘featuredartists).getElementByTagName(‘li’);
myNode[2];
myNode[2].firstChild

6. CanIuse.com
http://www.ejohn.org/blog/getelementsbyclassname-speed-comparison

7. document.querySelector('article').childNodes
document.querySelectorAll(‘article')

document.querySelector('article’)[1].childNodes

8. HTML5 Cross Browser Polyfills
https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills
https://github.com/inexorabletash/polyfill

9. document.forms - select all forms in a page
document.forms[0] - select 1st form
document.register - selected directly with a name of form
document.register.myname - select directly myname input field
document.register.myname.value = “Kuldeep” - change the value
document.getElementsByName('subscribe')[0] - select directly by name
document.getElementsByName('subscribe')[1].checked = "checked" - mark radio button as checked
document.register.reference.value = 'facebook' - change the value of options
document.register.reference.selectedIndex - find selected index of option

10 Node
Node Type - 12 types
normally use first 3 (element node, attribute node & text node)
var myNode = document.querySelectorAll('nav li a')[4]
myNode - <a href=​"register.html">​register​</a>​
myNode.nodeType - 1
myNode.nodeName - ‘A’
myNode.attributes - NamedNodeMap {0: href, length: 1, getNamedItem: function, setNamedItem: function, removeNamedItem: function, item: function…}
myNode.attributes[0] - href=​"register.html""register.html"
myNode.attributes[0].nodeType - 2
myNode.attributes[0].nodeName -“ href"
myNode.firstChild -“ register"
myNode.firstChild.nodeValue = "registration" -“ registration"

11 Node up & down
var myNode = document.querySelector('.artistlist li')
myNode - <li>​<img src=​"images/​artists/​Barot_Bellingham_tn.jpg" alt=​"Photo of Barot Bellingham">​</li>​
dir(myNode)
myNode.parentNode - <ul class=​"group">​…​</ul>​
myNode.parentNode.childNodes - gives random text & li’s
myNode.parentNode.firstChild
myNode.parentNode.lastChild
myNode.parentNode.firstChild.nextSibling
var myNode = document.querySelectorAll('.artistlist li')
myNode 


12 Enhancing the DOM - Targeting Node Elements
1. firstElementChild
2. lastElementChild
3. children
4. previousElementSibbling/nextElementSibbling - bad support

13. Changing HTML attributes
var myNode = document.querySelector('.artistlist img')
myNode - <img src=​"images/​artists/​Barot_Bellingham_tn.jpg" alt=​"Photo of Barot Bellingham">​
myNode.src -“ http://localhost:8888/js/Javascript-Assignments/DOM/02/dom/images/artists/Barot_Bellingham_tn.jpg"
myNode.src = "images/artists/Xhou_Ta_tn.jpg" - "images/artists/Xhou_Ta_tn.jpg"
myNode.id = "selected" -“ selected"
myNode - <img src=​"images/​artists/​Xhou_Ta_tn.jpg" alt=​"Photo of Barot Bellingham" id=​"selected">​
myNode.className = "myClass" -“ myClass"
myNode - myNode - <img src=​"images/​artists/​Xhou_Ta_tn.jpg" alt=​"Photo of Barot Bellingham" id=​"selected" class=“myClass”>​

var myNode = document.querySelector('label') - undefined
myNode - <label for=​"myname">​Name​</label>​
myNode.htmlFor = "companyName" - “companyName"
myNode - <label for=​"companyName">​Name​</label>​
var myNode = document.querySelector("input[type='radio']") - undefined
myNode - <input type=​"radio" id=​"subscribe" name=​"subscribe" checked value=​"yes">​
myNode.checked = 0 - 0
myNode - <input type=​"radio" id=​"subscribe" name=​"subscribe" checked value=​"yes">​

14. Working with restricted Attributes
myNode - <input type=​"radio" id=​"subscribe" name=​"subscribe" checked value=​"yes">​
myNode.getAttribute('name') -“ subscribe"
myNode.setAttribute('name', 'test') - undefined
myNode - <input type=​"radio" id=​"subscribe" name=​"test" checked value=​"yes">​
myNode.hasAttribute('for'); - false
myNode.hasAttribute('name'); - true
myNode.removeAttribute('name’); - undefined
myNode - <input type=​"radio" id=​"subscribe" checked value=​"yes">​

Detecting data attributes
var myNode = document.querySelectorAll('#featuredartists img')  - undefined
myNode
[<img src=​"images/​artists/​Barot_Bellingham_tn.jpg" alt=​"Photo of Barot Bellingham">​, <img src=​"images/​artists/​Constance_Smith_tn.jpg" alt=​"Photo of Constance Smith" data-task=​"speaker">​, <img src=​"images/​artists/​Hassum_Harrod_tn.jpg" alt=​"Photo of Hassum Harrod">​, <img src=​"images/​artists/​Hillary_Goldwynn_tn.jpg" alt=​"Photo of Hillary Goldwynn" data-task=​"speaker">​, <img src=​"images/​artists/​Jennifer_Jerome_tn.jpg" alt=​"Photo of Jennifer Jerome" data-task=​"speaker">​, <img src=​"images/​artists/​Jonathan_Ferrar_tn.jpg" alt=​"Photo of Jonathan Ferrar" data-task=​"speaker">​, <img src=​"images/​artists/​LaVonne_LaRue_tn.jpg" alt=​"Photo of LaVonne LaRue" data-task=​"speaker">​, <img src=​"images/​artists/​Riley_Rewington_tn.jpg" alt=​"Photo of Riley Rewington" data-task=​"speaker">​, <img src=​"images/​artists/​Xhou_Ta_tn.jpg" alt=​"Photo of Xhou Ta">​]
myNode[1] - <img src=​"images/​artists/​Constance_Smith_tn.jpg" alt=​"Photo of Constance Smith" data-task=​"speaker">​
myNode[1].dataset.task -“ speaker"
myNode[1].dataset.task = "presentor" -“ presentor"
myNode[1] - <img src=​"images/​artists/​Constance_Smith_tn.jpg" alt=​"Photo of Constance Smith" data-task=​"presentor">​

15. Controlling classes
var myNode = document.querySelector('#featuredartists img') - undefined
myNode - <img src=​"images/​artists/​Barot_Bellingham_tn.jpg" alt=​"Photo of Barot Bellingham">​
myNode.classList.add('faded'); - undefined
myNode - <img src=​"images/​artists/​Barot_Bellingham_tn.jpg" alt=​"Photo of Barot Bellingham" class=​"faded">​
myNode.classList.add('pulse'); - undefined
myNode - <img src=​"images/​artists/​Barot_Bellingham_tn.jpg" alt=​"Photo of Barot Bellingham" class=​"faded pulse">​
myNode.classList.remove('pulse'); - undefined
myNode - <img src=​"images/​artists/​Barot_Bellingham_tn.jpg" alt=​"Photo of Barot Bellingham" class=​"faded">​

Targeting the attributes
var myNode = document.querySelector('#featuredartists img') - undefined
myNode - <img src=​"images/​artists/​Barot_Bellingham_tn.jpg" alt=​"Photo of Barot Bellingham" class=​"faded">​
myNode.attributes - NamedNodeMap {0: src, 1: alt, 2: class, length: 3, getNamedItem: function, setNamedItem: function, removeNamedItem: function, item: function…}
myNode.attributes[0] - src=​"images/​artists/​Barot_Bellingham_tn.jpg"
myNode.attributes['src'] - src=​"images/​artists/​Barot_Bellingham_tn.jpg"
myNode.attributes.src - src=​"images/​artists/​Barot_Bellingham_tn.jpg""images/artists/Barot_Bellingham_tn.jpg"

16. Using Text content modifiers
var myNode = document.querySelector('#abouttheevent') - undefined
myNode - <article id=​"abouttheevent">​…​</article>​
myNode.innerHTML -“ <h2>About the Event</h2>
			<p>The Roux Academy’s annual conference and exhibit is designed to foster a close-knit relationship amongst artists at various universities around the world. But sign up early, as this not-to-miss conference sells out quickly, and the waiting list is long. In addition, art students are encouraged to send in works from their school portfolios to be considered for hanging in the CAC exhibit halls, as well as to be selected as a Featured Artist.</p>"
myNode.innerHTML = "The quick brown fox jumps over the little lazy dog" -“ The quick brown fox jumps over the little lazy dog"
var myNode = document.querySelector('#abouttheevent') - undefined
myNode.insertAdjacentHTML('afterend', '<p>this is a new para</p>') - undefined
myNode.insertAdjacentHTML('beforebegin', '<p>this is a new para</p>') - undefined
myNode.insertAdjacentHTML('beforeend', '<p>this is a new para end</p>') - undefined
myNode.insertAdjacentHTML('afterbegin', '<p>this is a new para end</p>') - undefined


17. Creating & appending Nodes
var myElement = document.createElement('img'); - undefined
myElement - <img>​
myElement.src = 'images/artists/LaVonne_LaRue_tn.jpg' -“ images/artists/LaVonne_LaRue_tn.jpg"
myElement.alt = "this is missing src" -“ this is missing src"
myElement.setAttribute('data-task', 'speaker') - undefined
myElement - <img src=​"images/​artists/​LaVonne_LaRue_tn.jpg" alt=​"this is missing src" data-task=​"speaker">​
var myNode = document.querySelectorAll('.artistlist ul li') - undefined
myNode[6].appendChild(myElement) - <img src=​"images/​artists/​LaVonne_LaRue_tn.jpg" alt=​"this is missing src" data-task=​"speaker">​

18. Controlling node insertion - insertBefore
var pNode = document.createElement('p'); - undefined
var textNode = document.createTextNode('how are you doing');
pNode.appendChild(textNode);
pNode
var newNode = document.querySelector('#thevenue');
dir(newNode)
newNode.insertBefore(pNode, newNode.childNodes[5]);

19. cloning & removing node
var myNode = document.querySelector('.artistlist');
myNode
var newNode = myNode.cloneNode(true);
var insertLocation = document.querySelector('#sidebar');
dir(insertLocation);
insertLocation.insertBefore(newNode, insertLocation.childNodes[4])
myNode.parentNode.removeChild(myNode);

20. replace child
var myNode = document.querySelector('#featuredartists');
var replaceNode = document.querySelector('#comingtoevent');
replaceNode.parentNode.replaceChild(myNode, replaceNode)
