# General Questions

### What is CORS

- Cross origin resource sharing
- CORS allows you to break the same origin policy of a browser
- SOP: request some data from Moo.com to Foo.com, RESPONSE is blocked by SOP
- Since the response is blocked, and put/delete/post methods still work, what's the purpose of blocking anything then?
- to get around the above point, CORS sends pre-flight request, Options, with Access Control Request Method, is this method allowed?
- Then, if everything is OK, Foo.com will send Access Control Allow Origin: Moo.com, Access Control Allow Methods PUT for example

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
