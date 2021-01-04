// super：継承元の関数を呼び出すためのキーワード
// 関数リテラル（波カッコ内）でのみ使用可能
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name);
    }
}

class Japanese extends Person {
    constructor(name, age, gender) {
        // superは継承先クラスのconstructor関数内で継承元のコンストラクターを呼び出すためによく使われる
        // その際、継承先クラスのthisに新しいプロパティをsuperより先に設定しようとするとエラーとなる
        // superによる継承元のconstructorの呼び出しは最初に行う
        super(name, age);
        this.gender = gender;
    }

    hello() {
        // 「super.関数」で継承元の関数を呼び出すこともできる
        super.hello();
        console.log('Konnichiwa ' + this.name);
    }

    bye() {
        console.log('Sayonara ' + this.name);
    }
}

const taro = new Japanese('Taro', 23, 'Male');
// console.log(taro);
// taro.hello();// hello~とKonnichiwa~が表示される

const american = {
    hello() {
        console.log('hello ' + this.name);
    }
}

const bob = {
    name: 'Bob',
    // bob内のhelloメソッドを無くしてもhelloメソッド使用可能
    hello() {
        // console.log('hello ' + this.name);
        // setPrototypeOfによりamericanをprototypeとして継承したのでsuperを使って継承元のメソッドを呼び出している
        super.hello();
    },

    bye() {
        super.hello();
        console.log('bye');
    }
}

// オブジェクトをprototypeとして継承することで他オブジェクトのメソッドをsuperを使って呼び出せるようになる
Object.setPrototypeOf(bob, american);

bob.bye();