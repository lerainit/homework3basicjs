## Циклы в Java Script 

</hr>

Циклы в JavaScript нужны, если небоходимо выполнить

заданую инструкцию много раз:

необходимое количество повторений задается  

с помощью условий прописаных  в цикле.

Пример:


```js


for(i=0 ; i < 20 ; i--){
 
 let userAge = 25 ;
 
 console.log(userAge--);


}

// изначальное значение 25 будет выведено в консоль и //уменьшено на единицу каждый раз 20 раз 

```

В  цикле круглые скобки  содержат условие, которое определяет сколько раз повторится выполнение инструкций(количество итераций), которые находятся в фигурных скобках


</hr>

## Условия использования разных циклов


- ЦИКЛ FOR используется если надо повторить какую-либо инструкцию строго опрделенное количество раз

 Условие в круглых скобках в цикле for определяет количество итераций цикла и шаг каждой итерации

 Пока цикл не прошел все итерации условие в круглых скобках остается истинным и цикл повторяется

 Когда условие в круглых скобках становится ложным цикл  заканчивается

</hr>

- ЦИКЛ WHILE  выполняет инсрукцию в фигурных скобках до тех пор пока истинно условие в круглых скобках 

 В отличие от условного оператора if цикл while выполняет
 инструкуцию много раз то тех пор пока истинно условие в круглых скобках цикл повторяется 
 
 
 Цикл while проверяет истинное ли условие перед первой итерацией если условие ложное то не будет ни одной итерации а дальше выполняется код после цикла
 
 А цикл do{}while()сначала производит одну итерацию а потом только проверяет условие на истинность
 
 Если необходима хотя бы одна итерация цикла перед проверкой условия то применяется цикл do{}while()
 
 
### Итог
 
Если нам нужно чтобы инструкция повторилась именно строго определенное количество раз то применяется цикл for а если необходимо чтобы инструкция повторялась любое количество раз пока условие истинно то применяется цикл while или цикл do{}while если нужна одна итерация цикла перед проверкой условия



## Явное и неявное преобразование типов

### Преобразование типов может быть явным и неявным.

-  Когда разработчик выражает намерение сконвертировать значение одного типа в значение другого типа, записывая это соответствующим образом в коде, скажем, в виде Number(value), это называется явным приведением типов (или явным преобразованием типов).

- Так как JavaScript — это язык со слабой типизацией, значения могут быть конвертированы между различными типами автоматически. Это называют неявным приведением типов. Обычно такое происходит, когда в выражениях используют значения различных типов, вроде:



## Явное преобразование типов



Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.

### Строковое

 - Происходит, когда нам нужно что-то вывести.
 - Может быть вызвано с помощью String(value).
 - Для примитивных значений работает очевидным образом.
 
 ```js

 const value = true;
 console.log(typeof value); // boolean

 const stringFromValue = String(value); // теперь value это строка "true"
 console.log(typeof stringFromValue); // string

 const number = 123;
 console.log(typeof number.toString())

 ```
### Численное 


- Происходит в математических операциях 
- Может быть вызвано с помощью Number(value).

1. Численное преобразование происходит в математических функциях и выражениях.
2. `Number(value)`
3. `parseInteger()`
4. `parseFloat()`
5. `+`

Преобразование подчиняется правилам:

Значение	Становится…
undefined	NaN
null	0
true / false	1 / 0
string	Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.


```js

console.log(Number('255')) // 255
console.log(Number('155a')) // NaN
console.log(Number(true))  // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN

```

### Логическое преобразование

Происходит в логических операциях (позже мы познакомимся с условными проверками и подобными конструкциями), но также может быть выполнено явно с помощью функции `Boolean(value)`.

Правило преобразования:

- Значения, которые интуитивно «пустые», вроде `0`, пустой строки, `null`, `undefined` и `NaN`, становятся `false`.
- Все остальные значения становятся `true`.

```js

console.log(Boolean(0))  // false
console.log(Boolean(1))  // true
console.log(Boolean('')) // false
console.log(Boolean('text')) //true
console.log(Boolean('0')) //false
console.log(Boolean(' ')) // true
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false 

```



<hr/>


## Неявное преобразование типов



  JavaScript -это язык со слабой типизацией, значения могут быть конвертированы между различными типами автоматически.

При сложении, если хотя бы один из операндов имеет тип данных string 

 остальные операнды тоже  приводятся к типу данных string и результат имеет тип данных string:

```js

let randomString = '123';
let randomNumber = 144;

console.log(randomString + randomNumber);

// Результат '123144'- тип данных string

```

</hr>

Остальные операторы приводят все операнды к числовому типу

```js

let randomString = '12';
let randomNumber = 12;

console.log(randomString*randomNumber);

// Результат 144 - тип данных number

```

</hr>

В логических операторах все операнды приводятся к типу boolean:

например:

```js

console.log( 0 || 1 );

// 1 будет приведен к булевому значению true,а 0 -false  

// в консоль будет выведено первое из значений приведенное к true

// Результат: 1

```
</hr>

Условный оператор if (..) {...} автоматически приводит значение в круглых скобках к типу boolean и если значение в круглых скобках приводится  true то выполняется содержимое фигурных скобок.

```js

if(100){

    console.log('one hundred');
}

// 100 приведено к булевому значению true 



```


 
