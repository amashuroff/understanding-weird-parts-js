# General

- Главная цель программирования - управление сложностью
- Чем усерднее вы работаете над компенсацией ограниченных возможностей своего разума, тем лучше будете программировать. Быстрота вашего развития напрямую зависит от вашщей скромности

### What is CORS

- Cross origin resource sharing
- CORS allows you to break the same origin policy of a browser
- SOP: request some data from Moo.com to Foo.com, RESPONSE is blocked by SOP
- Since the response is blocked, and put/delete/post methods still work, what's the purpose of blocking anything then?
- to get around the above point, CORS sends pre-flight request, Options, with Access Control Request Method, is this method allowed?
- Then, if everything is OK, Foo.com will send Access Control Allow Origin: Moo.com, Access Control Allow Methods PUT for example

### Polyfill

- Полифилл - природа JavaScript позволяет частично компенсировать недостатки старых браузеров. Благодаря прототипам у разработчиков есть возможность добавить недостающую функциональность прямо в реализацию DOM. Делается это с помощью полифиллов.

### Динамически типизированный / Статически

- Во время выполнения / во время компиляции

### Слабая / Сильная типизация

- авто приведение типов / запрещено

### Явная типизация / неявная

- надо задавать тип явно / не надо

### What is JSONP

- JSONP predates the CORS standard
- only works with get
- json will return json response wrapped into a function
- script tag does not have any limitations, from which domain it can pull script from
- you create a script tag with src set to url from which you want to get data
- it is unsafe

### Recursion

- when a function calls itself, hopefully with an exit condition
- Writing 2 things, how go into oneself and how to stop
- it makes it so difficult to wrap your head around it since you should keep track of the whole recursive stack to figure out a solution
- Рекурсивный процесс это чувак, который все дела откладывает на вечер пятницы. В течение недели у него мало работы, а в пятницу завал. Но ему так нравится :)

### Iterative Recursion

- Определить начальное состояние
- Проверить базовый сценарий
- Определить новое состояние (rec call)
- Повторить шаг 2
- - Итеративный процесс это чувак, который все делает при первой возможности. У него работа равномерно распределена по неделе, а пятница — просто обычный день, но последний.
- для каждого (очередного) рекурсивного вызова в стек вызовов записывается вся информация, связанная с этим конкретным вызовом (параметры функции и её локальные переменные, адрес возврата в точку вызова). Т.е. выделяется дополнительная область памяти (лексический контекст функции, область видимости), обслуживающая данный рекурсивный вызов, а так как это стек вызовов, то контексты предыдущих рекурсивных вызовов также продолжают занимать память. Достижение большой глубины рекурсии (или же если она вовсе является бесконечной, т.е. не достигается терминальное условие выхода из рекурсии) приводит к переполнению стека (ведь он ограничен в размерах) и аварийному завершению всей программы.

### Referential transparency

- Ссылочная прозрачность означает, что вызов функции может быть заменен ее значением, либо другим ссылочно-прозрачным вызовом с тем же результатом. Это делает каждую функцию независимой, что значительно упрощает модульное тестирование и рефакторинг. Кроме того, такие ссылочно-прозрачные функции легче читать и понимать — это одна из причин, почему код, написанный в функциональном стиле, нуждается в меньшем количестве комментариев.

### Errors

- Синтаксическая ошибка? Заменить, удалить или добавить символы. Часто проблема в скобках и кавычках: открытые скобки и открытые кавычки должны быть закрыты.
- Reference error? Проверить, существует ли тот объект, на который вы ссылаетесь. Возможно, вы использовали неправильное название или забыли создать его.
- Ошибка типизации? Убедиться, что вы используете объекты верно. Часто проблема — простая путаница: вы создали и числовую константу и функцию, а потом пытаетесь вызвать число. Наверное, вы хотели вызвать функцию.
- Logic error. (Логическая ошибка) Ваш код выполняет не то, что требуется, но программа запускается и не выдаёт ошибок трёх перечисленных выше типов. Сломана логика. Что делать? Проверить свой код, убедиться, что он выполняет то, что должен.

### Optimisation

- Задачи, в которых требуется одномоментная обработка десятков и сотен тысяч элементов, встречаются крайне редко. Большая часть операций происходит со списками до тысяч элементов. А для такого списка одним проходом больше одним меньше — разницы, можно сказать, никакой.

### Programming Paradigms

- Паради́гма программи́рования — это совокупность идей и понятий, определяющих стиль написания компьютерных программ (подход к программированию). Это способ концептуализации, определяющий организацию вычислений и структурирование работы, выполняемой компьютером.

- Imperative: стиль написания кода в виде набора последовательных инструкций (команд) с активным использованием переменных,
  Обычно говорят, что императивная программа отвечает на вопрос КАК («как достичь нужного результата»).

- Decalrative: декларативный, который нередко называют функциональным. При таком стиле программа выглядит как описание нужного результата, а не как набор инструкций. То есть программа отвечает на вопрос ЧТО («что мы хотим получить»)

### Invariants

- Инвариант в программировании — логическое выражение, определяющее непротиворечивость состояния (набора данных).

### Circular reference

- Circular reference represents a big problem in computing and can happen in a production application when one piece of code requires result from another and the referenced code needs result from the original code.

### Runtime Compile time

- Код, который вы пишете, обычно конвертируется в понятную для запуска компьютером форму. Этот процесс называется компиляцией, а промежуток времени, за который это происходит — "стадией компиляции" или compile time.

- После того, как компиляция закончена и программа запущена, начинается отсчёт времени, который называется "стадией исполнения" или run time.

### Static vs Dynamic, Strong vs Weak types

- Смысл динамической и статической типизации - КОГДА проверять типы. Сильная против слабой — это НАСКОЛЬКО СЕРЬЁЗНО проверять типы.
- Вы можете считать, что слабая — это нестрогая типизация, а сильная — это требовательная.

### Must know p-paradigms

- GRASP
- SOLID
- CQS
- Law of Demeter
- Single level of Abstraction principle

### Two ways to update the DOM using frameworks

- Re-render the whole component: React. When the state of a component changes it renders a DOM in memory and compares it with the existing DOM. Actually since that would be very expensive it renders a Virtual DOM and compares it with the previous Virtual DOM snapshot. Then it calculates the changes and performs the same changes to the real DOM. This process is called reconciliation.

- Watch for changes using observers: Angular and Vue.js. Your state variables are observed and when they change only the DOM elements where those values are/were involved in the rendering are updated.

### Why modern frameworks exist?

- It is not possible to write complex, efficient and easy to maintain UIs with Vanilla JavaScript. That’s the main reason you need a modern JavaScript framework.

### Где использовать абстракции

- Если создание объекта и вызов метода можно заменить на обычную функцию, то ни о какой абстракции речи не идёт
- Грамотная абстракция – ключ к успеху. Обозначьте границы, рассмотрите варианты использования и реализуйте как-нибудь.

### HTTP

- HTTP – текстовый протокол, с помощью которого взаимодействуют клиент, например, браузер и сервер. Работает это так. Пользователь шлёт определенный запрос на сервер, запрашивая (используя методы и заголовки) или передавая нужные данные, а сервер, в зависимости от запроса, выполняет нужную логику и возвращает результат, обычно это HTML-страница либо редирект.

### Architecture and OOP

Ключ к созданию хороших масштабируемых систем это проработка механизмов общения модулей, а не проработка их внутренних свойств и поведения. - Алан Кей

- some key points of constructing the code
- isolate side effects from pure code, it would be really nice to have all side effects happen on the highest level of (abstraction?)
- use Automata programming, every set of processes that flow in the system/project is a potential final automata
- Avoid using global variables
- Do not split code/add new abstractions until it hurts

### Проектирование функций

- Функция это в первую очередь способ повысить уровень абстракции
- Выносите побочные эффекты на более высокий уровень. Дело в том, что более побочные эффекты автоматически усложняют любой код. Функция становится менее предсказуемой и может начать порождать разные ошибки.
- Функции с побочными эффектами гораздо сложнее переиспользовать и тестировать.
- Любой код, работающий с побочными эффектами становится грязным, чем ниже по стэку вызовов находится побочный эффект, тем хуже
- Не подстраивайте интерфейс нижних модулей под верхние, в идеале, нижние функции/модули не должны ничего знать про верхнии. (Независимость)

### Правило 3-х

- нужно разбивать выражения, содержащие 3 или более вызова

### Явные и неявные параметры функций

- явные - простые и низкоуровневые функции
- неявные - передача дальше по цепочки вызовов, множество опциональных параметров, когда данных много

### Object oriented design

- It is a way of designing complex programs that breaks them down to individual classes or objects (instances of classes), which incapsulate functionality and have specific roles and responsibilities

### Agile

- isn't really a methododlogy, rather it defines at a very high level how software dev should be done
- Agile ignited the idea that software should be developed and delivered incrementally and embraced the idea that requirements can and should change dureing the development of the software

### Scrum

- Scrum, is formalised and prescriptive methodology that defines specific roles in software development team, the workflow for development and what specific meeting should take place in each iteration of dev, all know as sprint.
- Iteration

### Kanban

- Kanban is very much focused on the idea of continuous improvement via feedback loops
- Repeatable process is more important than specific methodology

### Boy Scouts rule

- “Leave the campground cleaner than you found it”
- Leave the code better than you found it
- When you are working on some code, fixing bug or anything, try to leave code in slightly better state than you found it before
- Make it easier to understand
- Make cleaner, simpler design

### Readability

- One of the most important factors influencing the maintainability of the code is its readability
- Code is read more than written
- The easier its is for them to understand, the easier it will be for them to do - corrections and changes, the less time it will take
- Strive for readability above all else
- Write clean, readable code that doesn’t need comments

### Handling bugs

- Reproduce the bug
- SIT AND THINK
- Take a browse through the source code

### Refactor

- Refactoring is improving the design of existing code, making existing code more readable without changing the functionality
- Making code better, and this means more readable and maintainable
- However it can also mean that you reduced the total lines by eliminating duplication or improving the overall architecture to make it more flexible and robust

### Cyclomatic complexity

- how many possible paths there are through your code

### Системные тесты

- То есть код теста имитирует настоящие действия пользователей и смотрит на то, как изменился DOM. Такой вид тестов называется системным.

### MobX

- allows to write cleaner code
- allows to write less code
- component will re-render only if data that is used by that component changes
- mobX has less dependencies

### Декомпозиция

- До тех пор, пока очевидность и простота проекта не станут вас в каком-то смысле раздражать, в этот момент все готово. Если что-то не ясно продолжайте декомпозицию. Если сейчас ваше решение кажется чуть чуть хитрым, для любого, кто будет работать над ним позднее, оно станет головоломкой

### PWA / Progressive Web Apps

- Progressive web app: is a hybrid between regular web pages and mobile applications, The term “progressive” refers to the fact that they introduce new features and, from the user experience’s point of view, they are initially perceived as normal websites but progressively behave more like mobile apps, among other things multiplatform.

- Сердце PWA — Service Worker. Это проксирующий слой между фронтэндом и бэкэндом, находящийся в браузере. Все запросы браузера идут через него. Данное разделение на два независимых слоя позволило сделать переход обычного веб сайта в PWA максимально простым.

### W3C

- (World Wide Web Consortium) organization, which is the standards organization for the web.
