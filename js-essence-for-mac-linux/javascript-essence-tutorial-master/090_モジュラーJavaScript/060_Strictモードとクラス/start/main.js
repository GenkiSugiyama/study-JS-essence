class C {
    constructor() {
        // コンストラクターやメソッドの中は自動的に'use strict'がかかっている
        const fn = () => {
            console.log(this);
        }
        fn();
    }

    method() {
        function fn(){
            console.log(this);
        }
        fn();
    }
}

const c = new C();
c.method();
