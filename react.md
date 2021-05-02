## React

- is a library, not a framework that is concerned only with rendering the UI

### Framework vs Library

- Framework: inversion of control, in charge of the flow
- Library: you decide when to call

### Immutability in React

- Why the state should be immutable?
- if one part of an array changes, or we add the property to an object
- this object is actually equal to it's previous self
- If we modify the actual state, react would not know that we have made a change, since original pointer hasn't changed

- And also React takes advantage of this concept to make some performance optimizations

### Immutability in React #2

- React maintains internal representation of the UI, (vDOM)
- When prop or state of the component change, these changes are reflected in the vDOM
- Manipulation vDOM is easier and faster, because nothing is changed in the actual UI,
- Finally, React compares new vDOM with the previous vDOM to know what have changed and reflect these changes in the DOM
- This way, React updates only those elements that have been changed to the DOM

### Immutability in Redux

- State changes are represented as the difference between the input object and the output object
- Redux represents application state as frozen object snapshots
- state is only changed by category of pure functions (reducers) that never mutate prev state

### Declarativeness in React

- instead of traversing DOM tree manually we simply declare how a component should look like
- (HTML DOM) methods are called under the hood

### V-DOM

- V-DOM is an abstraction of the HTML DOM (abstraction of the abstractions)

### JSX

- describes how ui should look like

### Экранирование значения JSX

- весь JSX превращается в строки перед тем как быть отрендеренным, это предотвращает XSS атаки

### JSX это обьекты

- Babel компилирует jsx вызовы в React.CreateElement()
- -> описывается результат, который мы хотим увидеть на экране
- -> Реакт читатет обьекты и использует их, чтобы конструировать и поддерживать ДОМ

### Components vs Elements

- Components are made of elements xD

### React Updates

- React вносит в ДОМ только минимальные изменения (необходимые)

### How to name props

- Пропсы следует называть так, чтобы они имели смысл в первую очередь с точки зрения самого компонента, и уже во вторую, с точки зрения компонентов, которые этот компонент рендерят

### Props

- Пропсы можно только читать
- Реакт компоненты обязаны вести себя как чистые функции по отношению к своим пропсам

### Mounting

- Первоначальный рендеринг компонента в DOM
- Каждый раз, когда ДОМ узел созданного компонента удаляется, происходит размонтирование

### Синтаксис полей классов

- Используй bind or arrow functions to save this

### Keys

- Специальный строковый атрибут
- React определяет какие елементы были изменены, добавлены, или удалены
- Не используй индексы как ключи, потому что порядок элементов может измениться

- Фиксил баги, изменения в UI, изучил Styled Components, изучал Story book (технологии котор исп на классифайд итд)

### Подьем состояния

- Для любых изменяемых компонентов в Реакте должен быть 1 источник правды
- Если есть >1 компонент, использующий это состояние, подними состояние до общего предка

### Значения пропсов и состояний

- Если что-то может быт ьвычислено из пропсов или состояний, то скорее всего оно не должно находиться в состоянии

### Props.children

- Используй children для засовывания компонентов сразу на вызов в JSX (абстр. Коробка)
- Можно придумать свои места для вставки

### Специализация/Композиция

- Некоторые компоненты это частные случаи других компонентов
- Частный вариант рендерит общий, настраивая его

```javascript react
function WelcomeDialog() {
  return (
    <Dialog {...props}>
  )
};
```

### Что НЕ должно храниться в состоянии

- инфа передается от родителя
- остается неизменной со временем
- можно вычислить на основании других данных в своем компоненте (из других пропсов)

### Какие из компонентов должны хранить какое состояние?

- Определи компоненты, которые рендерят что-то исходя из состояния
- Найди общего предка (создай его)

### This.setState()

- may not update right after called, (React batches state updates)
- prove a callback to fire up, right after the state updates
- it is asynchronous

### Controlled component

- is one that takes it's current value through props, and notifies changes through callback, a parent component controlls it by handling the callback and managing it's own state, and passing new values as props to the child component

### Uncontrolled component

- is one that stores it's own state internally, and you query the DOM using a ref to find its current value when you need it, this is a bit more liek traditional html
