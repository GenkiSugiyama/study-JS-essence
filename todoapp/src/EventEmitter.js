export class EventEmitter {
  constructor() {
    this._listeners = new Map();
  }

  // type：イベント名、listener：処理を受け取る
  addEventListener(type, listener) {
    console.log(this._listeners.has(type));
    // 受け取ったことのないイベント名の場合は、そのイベント名がキー、関数が値となるMapオブジェクトに追加される
    if(!this._listeners.has(type)) {
      this._listeners.set(type, new Set());
    }
    // 既に受け取ったことのあるイベント名の場合は、そのイベント名がキーとなっているMap内の値となるSetオブジェクトの要素に関数を追加する
    const listenerSet = this._listeners.get(type);
    listenerSet.add(listener);
  }

  emit(type) {
    // emitメソッドで、追加ずみのイベントを発火するタイミングで渡されたイベント名に対応するSetオブジェクト（関数の集まり）を取得
    const listenerSet = this._listeners.get(type);
    if(!listenerSet) {
      return;
    }
    // 受け取った順番に関数を実行していく
    listenerSet.forEach(listener => {
      listener.call(this);
    });
  }

  removeElementListener(type, listener) {
    const listenerSet = this._listeners.get(type);
    if(!listenerSet) {
      return;
    }
    listenerSet.forEach(ownListener => {
      if(ownListener === listener) {
        listenerSet.delete(listener);
      }
    })
  }
}