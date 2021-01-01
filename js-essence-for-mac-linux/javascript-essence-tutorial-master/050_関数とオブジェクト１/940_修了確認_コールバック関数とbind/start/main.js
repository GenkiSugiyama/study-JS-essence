/**
 * 問題：
 * 【修了確認】コールバック関数で実装したcalcFactoryを
 * １秒後にconsole.logまたはalertで計算式が表示される
 * ようにcalcFactory関数内の実装を変更してみてください。
 */
function calcFactory(val, callback) {
    return {
        plus: function(target) {
            const newVal = val + target;
            // ↓元のメソッド関数
            // callback(`${val} + ${target} = ${newVal}`);

            const result1 = function() {
                return `${val} + ${target} = ${newVal}`;
            }
            setTimeout(callback.bind('', result1()), 1000);

            // ↓callback自体にconsole.log or alertが渡されるため、メソッド内でcallbackを再定義したらだめ
            // const callback = function(){
            //     console.log(`${val} + ${target} = ${newVal}`)
            // }
            val = newVal;
        },
        minus: function(target) {
            const newVal = val - target;
            // callback(`${val} - ${target} = ${newVal}`);
            const result2 = function() {
                return `${val} - ${target} = ${newVal}`;
            }
            setTimeout(callback.bind('', result2()), 1000);
            val = newVal;
        },
        multiply: function(target) {
            const newVal = val * target;
            // callback(`${val} x ${target} = ${newVal}`);
            const result2 = function() {
                return `${val} x ${target} = ${newVal}`;
            }
            setTimeout(callback.bind('', result2()), 1000);
            val = newVal;
        },
        divide: function(target) {
            const newVal = val / target;
            // callback(`${val} / ${target} = ${newVal}`);
            const result2 = function() {
                return `${val} / ${target} = ${newVal}`;
            }
            setTimeout(callback.bind('', result2()), 1000);
            val = newVal;
        }
    };
}

const calc = calcFactory(10, console.log);
calc.plus(5); 
calc.minus(3); 
calc.multiply(3);
calc.divide(2);