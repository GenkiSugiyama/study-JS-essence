// exportされた変数や関数を使用する場合はimportしてから使用する

import {publicVal as val, publicFn} from "./moduleA.js";

console.log(val);

publicFn();